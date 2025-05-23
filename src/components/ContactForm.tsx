import React, { useState } from 'react';
import { CheckCircle, AlertCircle } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { useNavigate } from 'react-router-dom';

interface FormData {
  fullName: string;
  email: string;
  company: string;
  service: string;
  challenges: string;
  additionalInfo: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    company: '',
    service: '',
    challenges: '',
    additionalInfo: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const serviceOptions = [
    'AI Chat Agent',
    'Lead Generation',
    'CRM Integration',
    'Appointment Setting'
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }

    if (!formData.challenges.trim()) {
      newErrors.challenges = 'Please describe your business challenges';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError(null);

      try {
        const { error } = await supabase
          .from('demo_requests')
          .insert([
            {
              full_name: formData.fullName,
              email: formData.email,
              company: formData.company,
              service: formData.service,
              challenges: formData.challenges,
              additional_info: formData.additionalInfo || null
            }
          ]);

        if (error) throw error;
        
        navigate('/thank-you');
      } catch (error: any) {
        console.error('Error submitting form:', error);
        setSubmitError('There was an error submitting your request. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen bg-dark tech-pattern py-24 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="card p-8">
          <h1 className="text-3xl font-bold mb-2 gradient-text">Book Your Free Strategy Call</h1>
          <p className="text-gray-300 mb-8">
            Fill out the form below and we'll show you how our AI solutions can transform your business operations.
          </p>

          {submitError && (
            <div className="mb-6 p-4 bg-error/10 border border-error rounded-lg text-error flex items-center">
              <AlertCircle className="w-5 h-5 mr-2" />
              {submitError}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-white mb-2">Full Name *</label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className={`w-full bg-dark-300/50 border ${errors.fullName ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan`}
                placeholder="Enter your full name"
                disabled={isSubmitting}
              />
              {errors.fullName && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="block text-white mb-2">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full bg-dark-300/50 border ${errors.email ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan`}
                placeholder="Enter your email address"
                disabled={isSubmitting}
              />
              {errors.email && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="company" className="block text-white mb-2">Company Name *</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className={`w-full bg-dark-300/50 border ${errors.company ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan`}
                placeholder="Enter your company name"
                disabled={isSubmitting}
              />
              {errors.company && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.company}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="service" className="block text-white mb-2">Select Service *</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className={`w-full bg-dark-300/50 border ${errors.service ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan`}
                disabled={isSubmitting}
              >
                <option value="">Select a service</option>
                {serviceOptions.map(option => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
              {errors.service && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.service}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="challenges" className="block text-white mb-2">
                What business challenges are you looking to address? *
              </label>
              <textarea
                id="challenges"
                name="challenges"
                value={formData.challenges}
                onChange={handleChange}
                rows={4}
                className={`w-full bg-dark-300/50 border ${errors.challenges ? 'border-error' : 'border-dark-300'} rounded-lg p-3 text-white focus:outline-none focus:border-cyan`}
                placeholder="Describe your current challenges and what you're looking to achieve..."
                disabled={isSubmitting}
              />
              {errors.challenges && (
                <p className="text-error text-sm mt-1 flex items-center">
                  <AlertCircle className="w-4 h-4 mr-1" />
                  {errors.challenges}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="additionalInfo" className="block text-white mb-2">
                Additional Information
                <span className="text-gray-400 text-sm ml-2">(Optional)</span>
              </label>
              <textarea
                id="additionalInfo"
                name="additionalInfo"
                value={formData.additionalInfo}
                onChange={handleChange}
                rows={3}
                className="w-full bg-dark-300/50 border border-dark-300 rounded-lg p-3 text-white focus:outline-none focus:border-cyan"
                placeholder="Any other details you'd like to share..."
                disabled={isSubmitting}
              />
            </div>

            <button 
              type="submit" 
              className={`btn btn-primary w-full py-4 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Schedule Consultation'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;