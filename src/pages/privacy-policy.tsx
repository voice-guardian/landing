import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Privacy Policy</h1>
        <p className="mb-4 text-gray-700">
          Effective Date: April 30, 2025
        </p>

        <p className="mb-4 text-gray-700">
          Your privacy is important to us. This Privacy Policy explains how CreatorWatchdog.com ("we", "our", or "us") collects, uses, and protects your information.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li><strong>Personal Information:</strong> Name, email, and other contact information you voluntarily provide.</li>
          <li><strong>OAuth Data:</strong> When authorized, we access limited account data from third-party platforms like YouTube or Instagram.</li>
          <li><strong>Usage Data:</strong> Information about how you use the service, including IP address, browser type, and device info.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Information</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>To provide and maintain the CreatorWatchdog.com service.</li>
          <li>To personalize your experience and deliver relevant content.</li>
          <li>To communicate with you regarding updates or support.</li>
          <li>To improve and analyze service performance and usage.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. Information Sharing</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>We do not sell your personal data.</li>
          <li>We may share data with service providers who assist in operating our platform.</li>
          <li>We may disclose information if required by law or to protect rights and safety.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Third-Party Services</h2>
        <p className="mb-4 text-gray-700">
          If you connect your account to external platforms, we only access data based on your explicit consent. Their use is governed by their own policies. For example, review the <a href="https://policies.google.com/privacy" className="text-blue-600 underline">Google Privacy Policy</a> for YouTube integrations.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Retention</h2>
        <p className="mb-4 text-gray-700">
          We retain your information as long as your account is active or as needed to provide our services. You may request deletion by contacting us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>You can access, update, or delete your information at any time.</li>
          <li>You may revoke third-party access via your platform settings or by contacting us.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Data Security</h2>
        <p className="mb-4 text-gray-700">
          We use standard security measures to protect your data, but no system is completely secure. You use the service at your own risk.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Children's Privacy</h2>
        <p className="mb-4 text-gray-700">
          We do not knowingly collect personal data from children under 13. If you believe we have done so, please contact us.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Changes to This Policy</h2>
        <p className="mb-4 text-gray-700">
          We may update this Privacy Policy periodically. Continued use of the service implies acceptance of the revised policy.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions about this Privacy Policy, contact us at: <a href="mailto:privacy@creatorwatchdog.com" className="text-blue-600 underline">privacy@creatorwatchdog.com</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;