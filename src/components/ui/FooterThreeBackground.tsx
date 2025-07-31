import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

// Hook to detect mobile devices and performance capabilities
const usePerformanceConfig = () => {
  const [config, setConfig] = useState({
    isMobile: false,
    reducedMotion: false,
    particleCount: 50
  });

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    setConfig({
      isMobile,
      reducedMotion,
      particleCount: isMobile ? 25 : reducedMotion ? 30 : 50
    });
  }, []);

  return config;
};

// Animated particle network system
const ParticleNetwork: React.FC<{ particleCount: number; reducedMotion: boolean }> = ({ 
  particleCount, 
  reducedMotion 
}) => {
  const meshRef = useRef<THREE.Points>(null);
  
  const [positions, connections] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const connections: number[][] = [];
    
    // Create random positions for particles
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 8;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 6;
    }
    
    // Create connections between nearby particles
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        const dx = positions[i * 3] - positions[j * 3];
        const dy = positions[i * 3 + 1] - positions[j * 3 + 1];
        const dz = positions[i * 3 + 2] - positions[j * 3 + 2];
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < 4) {
          connections.push([i, j]);
        }
      }
    }
    
    return [positions, connections];
  }, []);
  
  useFrame((state) => {
    if (meshRef.current && !reducedMotion) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.05;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });
  
  return (
    <group>
      {/* Particles */}
      <points ref={meshRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={particleCount}
            array={positions}
            itemSize={3}
          />
        </bufferGeometry>
        <pointsMaterial
          color="#14b8a6"
          size={0.05}
          transparent
          opacity={0.6}
          sizeAttenuation
        />
      </points>
      
      {/* Connection lines */}
      {connections.map((connection, index) => (
        <ConnectionLine
          key={index}
          start={[
            positions[connection[0] * 3],
            positions[connection[0] * 3 + 1],
            positions[connection[0] * 3 + 2]
          ]}
          end={[
            positions[connection[1] * 3],
            positions[connection[1] * 3 + 1],
            positions[connection[1] * 3 + 2]
          ]}
        />
      ))}
    </group>
  );
};

// Connection line component
const ConnectionLine: React.FC<{ start: number[]; end: number[] }> = ({ start, end }) => {
  const lineRef = useRef<THREE.Line>(null);
  
  useFrame((state) => {
    if (lineRef.current) {
      const opacity = 0.1 + Math.sin(state.clock.elapsedTime * 2 + start[0]) * 0.05;
      (lineRef.current.material as THREE.LineBasicMaterial).opacity = Math.max(0.02, opacity);
    }
  });
  
  const points = useMemo(() => [
    new THREE.Vector3(...start),
    new THREE.Vector3(...end)
  ], [start, end]);
  
  return (
    <line ref={lineRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2}
          array={new Float32Array([...start, ...end])}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        color="#059669"
        transparent
        opacity={0.1}
      />
    </line>
  );
};

// Floating geometric shapes
const FloatingGeometry: React.FC<{ position: [number, number, number] }> = ({ position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.3;
    }
  });
  
  return (
    <Float
      speed={1.5}
      rotationIntensity={0.2}
      floatIntensity={0.5}
    >
      <mesh ref={meshRef} position={position}>
        <octahedronGeometry args={[0.3, 0]} />
        <meshPhongMaterial
          color="#0d9488"
          transparent
          opacity={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
};

// Bus-shaped particles that slowly move across
const BusParticles: React.FC = () => {
  const groupRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.position.x = -15 + (state.clock.elapsedTime * 0.5) % 30;
    }
  });
  
  return (
    <group ref={groupRef}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} position={[i * 8, -2 + i * 0.5, -3]}>
          <boxGeometry args={[0.6, 0.3, 0.2]} />
          <meshPhongMaterial
            color="#3b82f6"
            transparent
            opacity={0.1}
          />
        </mesh>
      ))}
    </group>
  );
};

// Subtle grid pattern
const GridPattern: React.FC = () => {
  const gridRef = useRef<THREE.Points>(null);
  
  const gridPositions = useMemo(() => {
    const positions = [];
    for (let x = -10; x <= 10; x += 2) {
      for (let y = -4; y <= 4; y += 2) {
        positions.push(x, y, -5);
      }
    }
    return new Float32Array(positions);
  }, []);
  
  useFrame((state) => {
    if (gridRef.current) {
      const material = gridRef.current.material as THREE.PointsMaterial;
      material.opacity = 0.05 + Math.sin(state.clock.elapsedTime * 0.5) * 0.02;
    }
  });
  
  return (
    <points ref={gridRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={gridPositions.length / 3}
          array={gridPositions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#6b7280"
        size={0.02}
        transparent
        opacity={0.05}
      />
    </points>
  );
};

interface FooterThreeBackgroundProps {
  className?: string;
}

const FooterThreeBackground: React.FC<FooterThreeBackgroundProps> = ({ className = '' }) => {
  const { isMobile, reducedMotion, particleCount } = usePerformanceConfig();
  
  return (
    <div className={`absolute inset-0 ${className}`} style={{ zIndex: 0 }}>
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        style={{ background: 'transparent' }}
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        performance={{ min: 0.5 }}
      >
        {/* Lighting setup */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.2} color="#14b8a6" />
        <pointLight position={[-10, -10, 5]} intensity={0.1} color="#3b82f6" />
        
        {/* Background grid - only show on desktop */}
        {!isMobile && <GridPattern />}
        
        {/* Particle network system */}
        <ParticleNetwork particleCount={particleCount} reducedMotion={reducedMotion} />
        
        {/* Floating geometric shapes - reduced on mobile */}
        <FloatingGeometry position={[-6, 1, -2]} />
        <FloatingGeometry position={[6, -1, -3]} />
        {!isMobile && <FloatingGeometry position={[-3, -2, -1]} />}
        {!isMobile && <FloatingGeometry position={[3, 2, -4]} />}
        
        {/* Bus particles - only on desktop */}
        {!isMobile && <BusParticles />}
      </Canvas>
    </div>
  );
};

export default FooterThreeBackground; 