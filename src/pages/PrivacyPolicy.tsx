import { SEO } from '../components/layout/SEO';

export function PrivacyPolicy() {
  return (
    <>
      <SEO
        title="Privacy Policy – ImageConversions.com"
        description="Privacy Policy for ImageConversions.com. Learn how we handle your data and protect your privacy."
      />

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Privacy Policy</h1>

        <p className="text-sm text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-700 leading-relaxed">
            This Privacy Policy explains how ImageConversions.com ("we", "our", "us") handles information when you use this website.
            We are committed to protecting your privacy and complying with GDPR regulations.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data We Collect</h2>
          <p className="text-gray-700 leading-relaxed">
            We collect minimal data necessary to operate the service:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Necessary Technical Data:</strong> IP address, browser type, and device information (for security, functionality, and abuse prevention)</li>
            <li><strong>Optional Analytics Data:</strong> If you accept analytics cookies, we collect usage statistics through Google Analytics to improve the service</li>
            <li><strong>Image Processing:</strong> All image conversions happen in your browser. We never upload, store, or access your images</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            We do not collect personal information such as names, email addresses, or account details. The service does not require registration.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Cookies</h2>
          <p className="text-gray-700 leading-relaxed">
            We use cookies to ensure the site works properly:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Necessary Cookies:</strong> Essential for the website to function (always active)</li>
            <li><strong>Analytics Cookies:</strong> Google Analytics cookies, enabled only with your consent</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You can manage your cookie preferences at any time by clicking Cookie Settings in the banner.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Third-Party Services</h2>
          <p className="text-gray-700 leading-relaxed">
            We use the following third-party services:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li><strong>Google Analytics:</strong> When you consent to analytics cookies, Google Analytics may process data outside the EU.
            We have configured Google Analytics to anonymize IP addresses and comply with GDPR. We rely on the EU–US Data Privacy Framework or
            standard contractual clauses (SCCs) for international data transfers.</li>
            <li><strong>GitHub Pages:</strong> Our hosting provider, which processes technical data necessary for service operation.</li>
            <li><strong>EmailJS:</strong> Used for contact form submissions. Messages are sent directly to us and not stored by EmailJS.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Your Rights (GDPR)</h2>
          <p className="text-gray-700 leading-relaxed">
            Under GDPR, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
            <li>Withdraw consent at any time</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            To exercise these rights, please contact us.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Data Retention</h2>
          <p className="text-gray-700 leading-relaxed">
            We retain data only as long as necessary:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Technical logs: Up to 30 days</li>
            <li>Analytics data: As per Google Analytics retention settings (14 months)</li>
            <li>Cookie consent preferences: 365 days</li>
            <li>Your images: Never stored - all processing happens in your browser</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact & Data Controller</h2>
          <p className="text-gray-700 leading-relaxed">
            For privacy-related questions or to exercise your rights, please contact us through our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to This Policy</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update this privacy policy from time to time. We will notify you of significant changes by updating the "Last updated"
            date at the top of this page.
          </p>
        </div>
      </div>
    </>
  );
}
