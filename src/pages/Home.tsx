import React from 'react';
import HeroSection from '../components/hero/HeroSection';
import FeaturesOverview from '../components/features/FeaturesOverview';
import UserRoles from '../components/user-roles/UserRoles';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import ContactSection from '../components/contact/ContactSection';

const Home: React.FC = () => {
  return (
    <>
      <HeroSection />
      <FeaturesOverview />
      <UserRoles />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
};

export default Home;