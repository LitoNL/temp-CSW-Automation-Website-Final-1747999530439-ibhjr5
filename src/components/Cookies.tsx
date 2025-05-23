import React from 'react';

const Cookies: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark py-24 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="card">
          <h1 className="text-3xl font-bold mb-8 gradient-text">Cookie Policy</h1>
          
          <div className="space-y-6 text-gray-300">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">1. What Are Cookies</h2>
              <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us make the site work better for you and provide a more personalized experience.</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">2. How We Use Cookies</h2>
              <p>We use cookies for several purposes:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Essential cookies: Required for the website to function properly</li>
                <li>Analytics cookies: Help us understand how visitors use our site</li>
                <li>Preference cookies: Remember your settings and choices</li>
                <li>Marketing cookies: Used to deliver relevant advertisements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">3. Managing Cookies</h2>
              <p>You can control and manage cookies in various ways:</p>
              <ul className="list-disc ml-6 mt-2 space-y-2">
                <li>Browser settings: Configure your browser to block or delete cookies</li>
                <li>Cookie preferences: Use our cookie consent tool to manage your preferences</li>
                <li>Third-party tools: Install browser plugins for additional control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">4. Types of Cookies We Use</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-white">Essential Cookies</h3>
                  <p>Required for basic site functionality. Cannot be disabled.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Analytics Cookies</h3>
                  <p>Help us improve our website by collecting anonymous usage data.</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Marketing Cookies</h3>
                  <p>Used to track visitors across websites to display relevant advertisements.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-white">5. Contact Us</h2>
              <p>If you have any questions about our cookie policy, please contact us.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;