import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-3xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">Terms of Service</h1>
        <p className="mb-4 text-gray-700">
          Effective Date: April 30, 2025
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">1. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-700">
          By accessing or using CreatorWatchdog.com ("Service"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, please do not use the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">2. Description of Service</h2>
        <p className="mb-4 text-gray-700">
          CreatorWatchdog.com provides analytics, monitoring, and alert tools for content creators across multiple platforms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">3. User Accounts</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>You must be at least 13 years old to use this Service.</li>
          <li>You are responsible for maintaining the confidentiality of your account.</li>
          <li>All information provided during registration must be accurate and complete.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">4. Use of the Service</h2>
        <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
          <li>You agree not to misuse or attempt unauthorized access to the Service.</li>
          <li>You may not reverse-engineer or attempt to extract the source code.</li>
          <li>You must comply with all applicable laws and regulations.</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-2">5. Privacy</h2>
        <p className="mb-4 text-gray-700">
          Please refer to our <a href="/privacy-policy" className="text-blue-600 underline">Privacy Policy</a> for information about how we collect, use, and protect your data.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">6. Third-Party Services</h2>
        <p className="mb-4 text-gray-700">
          The Service integrates with third-party platforms (e.g., YouTube, Instagram). Your use of those services is subject to their respective terms and privacy policies.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">7. Termination</h2>
        <p className="mb-4 text-gray-700">
          We reserve the right to suspend or terminate your access to the Service at any time if we suspect a violation of these Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">8. Disclaimer of Warranties</h2>
        <p className="mb-4 text-gray-700">
          The Service is provided "as is" without warranties of any kind. We do not guarantee the accuracy or reliability of data provided through the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">9. Limitation of Liability</h2>
        <p className="mb-4 text-gray-700">
          CreatorWatchdog.com is not liable for any indirect or consequential damages resulting from your use of the Service.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">10. Changes to Terms</h2>
        <p className="mb-4 text-gray-700">
          We may update these Terms periodically. Continued use of the Service after changes means you accept the updated Terms.
        </p>

        <h2 className="text-2xl font-semibold mt-8 mb-2">11. Contact Us</h2>
        <p className="mb-4 text-gray-700">
          If you have any questions, please contact us at: <a href="mailto:support@creatorwatchdog.com" className="text-blue-600 underline">support@creatorwatchdog.com</a>
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;