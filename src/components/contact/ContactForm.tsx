import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import loadingImage from '../../assests/getme-loading.png';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    school: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Handle form submission here
      console.log('Form submitted:', formData);
      // You can integrate with your backend API here
      alert('Thank you for your inquiry! We will get back to you within 24 hours.');
      
      // Reset form after successful submission
      setFormData({
        name: '',
        email: '',
        school: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Form submission error:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="card-dark p-8 rounded-2xl shadow-lg">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Get Started Today</h3>
        <p className="text-gray-600 dark:text-gray-300">
          Tell us about your school's transportation needs and we'll help you get started with GETME
        </p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="contact@viruzverse.tech"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="school" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              School Name *
            </label>
            <input
              type="text"
              id="school"
              name="school"
              required
              value={formData.school}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="Your school name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all"
              placeholder="+91 96590 08000"
            />
          </div>
        </div>



        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all resize-none"
            placeholder="Tell us about your current transportation challenges and how we can help you with GETME..."
          />
        </div>

                        <div className="bg-primary-50 dark:bg-primary-900/20 p-4 rounded-lg">
                  <p className="text-sm text-primary-800 dark:text-primary-300">
            <strong>📧 What happens next?</strong><br/>
            Our team will review your inquiry and get back to you within 24 hours with information about how GETME can help your school.
          </p>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full ${
            isSubmitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-gradient-to-r from-primary-500 to-primary-400 hover:from-primary-600 hover:to-primary-500'
          } text-gray-900 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-800 border border-primary-600`}
        >
          {isSubmitting ? (
            <div className="flex items-center justify-center space-x-3">
              <img
                src={loadingImage}
                alt="Submitting..."
                className="h-6 w-auto object-contain animate-pulse"
              />
              <span className="text-lg">Sending...</span>
            </div>
          ) : (
            <div className="flex items-center justify-center space-x-3">
              <span className="text-lg">Send Enquiry</span>
              <Send className="w-5 h-5" />
            </div>
          )}
        </button>

        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
          By submitting this form, you agree to our Terms of Service and Privacy Policy. 
          No spam, we promise! 🚌
        </p>
      </form>
    </div>
  );
};

export default ContactForm;