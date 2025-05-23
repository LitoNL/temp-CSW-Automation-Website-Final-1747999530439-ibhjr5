import React from 'react';
import { CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThankYou: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-dark p-4">
      <div className="card max-w-lg w-full text-center py-12">
        <CheckCircle className="w-16 h-16 text-cyan mx-auto mb-6" />
        <h2 className="text-2xl font-bold mb-4 gradient-text">Thank You!</h2>
        <p className="text-gray-300 mb-6">
          We've received your demo request and will get back to you within 24 hours.
        </p>
        <Link to="/" className="btn btn-primary">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default ThankYou;