import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="card">
          <h1 className="text-3xl font-bold mb-8 gradient-text">Terms of Service</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
              <p>By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Permission is granted to temporarily access our services for personal, non-commercial use</li>
                <li>This license shall automatically terminate if you violate any of these restrictions</li>
                <li>Upon terminating your viewing of these materials, you must destroy any downloaded materials</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Service Description</h2>
              <p>We provide AI-powered automation solutions including:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>AI Chat Agents for customer support</li>
                <li>Lead generation and qualification systems</li>
                <li>CRM integration services</li>
                <li>Automated appointment scheduling</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. User Obligations</h2>
              <p>You agree to:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Provide accurate information when using our services</li>
                <li>Maintain the security of your account</li>
                <li>Use our services in compliance with applicable laws</li>
                <li>Not engage in any unauthorized use of the services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Limitation of Liability</h2>
              <p>We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">6. Changes to Terms</h2>
              <p>We reserve the right to modify these terms at any time. Your continued use of our services following any changes constitutes acceptance of those changes.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">7. Contact Information</h2>
              <p>If you have any questions about these Terms of Service, please contact us.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;