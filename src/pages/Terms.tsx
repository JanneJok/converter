import { SEO } from '../components/layout/SEO';

export function Terms() {
  return (
    <>
      <SEO
        title="Terms & Conditions – ImageConversions.com"
        description="Terms and Conditions for ImageConversions.com. Read about service usage, liability, and your responsibilities."
      />

      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Terms & Conditions</h1>

        <p className="text-sm text-gray-600 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg max-w-none space-y-6">
          <p className="text-gray-700 leading-relaxed">
            These terms govern your use of ImageConversions.com ("the service"). By accessing or using this site, you agree to these terms.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Use of Service</h2>
          <p className="text-gray-700 leading-relaxed">
            You may use ImageConversions.com to convert images between different formats for personal or commercial use.
            The service is completely free and does not require registration or payment. By using this service, you agree to:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Use the service for lawful purposes only</li>
            <li>Not attempt to interfere with the service's operation</li>
            <li>Not use automated tools to overload or abuse the service</li>
            <li>Not convert images that violate copyright, intellectual property, or privacy rights</li>
          </ul>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Image Processing</h2>
          <p className="text-gray-700 leading-relaxed">
            All image conversions happen entirely in your web browser using JavaScript. Your images are:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Never uploaded to our servers</li>
            <li>Never stored or accessed by us</li>
            <li>Processed locally on your device</li>
            <li>Completely private and secure</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            You retain all ownership and rights to your images. We claim no ownership over any images you process using this service.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Intellectual Property</h2>
          <p className="text-gray-700 leading-relaxed">
            The website design, code, and content are the property of the service operator unless otherwise stated.
            This service uses open source libraries and components licensed under their respective licenses.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Liability and Disclaimer</h2>
          <p className="text-gray-700 leading-relaxed">
            The service is provided "as is" without warranty of any kind, express or implied. We are not responsible for:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
            <li>Data loss, corruption, or quality degradation during conversion</li>
            <li>Service interruptions, downtime, or unavailability</li>
            <li>Damages resulting from the use of this site or converted images</li>
            <li>Compatibility issues with specific browsers or devices</li>
            <li>Any indirect, incidental, or consequential damages</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-4">
            Your use of the service is at your own risk. We recommend keeping backups of your original images.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Service Availability</h2>
          <p className="text-gray-700 leading-relaxed">
            We strive to keep the service available 24/7, but we do not guarantee uninterrupted access.
            We reserve the right to modify, suspend, or discontinue the service at any time without notice.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Changes to Terms</h2>
          <p className="text-gray-700 leading-relaxed">
            We may update these terms from time to time. Continued use of the service after changes constitutes acceptance of the updated terms.
            We recommend reviewing this page periodically.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">Contact</h2>
          <p className="text-gray-700 leading-relaxed">
            If you have questions about these terms, please contact us through our <a href="/contact" className="text-blue-600 hover:underline">Contact page</a>.
          </p>
        </div>
      </div>
    </>
  );
}
