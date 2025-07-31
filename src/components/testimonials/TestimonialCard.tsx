import React from 'react';
import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  school: string;
  content: string;
  rating: number;
  avatar: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, role, school, content, rating } = testimonial;

  return (
    <div className="card-dark p-8 rounded-2xl h-full">
      {/* Rating */}
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-5 h-5 ${
              i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300 dark:text-gray-600'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
        "{content}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {name.charAt(0)}
        </div>
        <div className="ml-4">
          <div className="font-semibold text-gray-900 dark:text-white">{name}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">{role}</div>
          <div className="text-sm text-gray-500 dark:text-gray-500">{school}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;