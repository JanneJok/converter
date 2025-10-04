import { useState, FormEvent } from 'react';
import { SEO } from '../components/layout/SEO';
import emailjs from '@emailjs/browser';

export function Contact() {
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const templateParams = {
        title: 'Image Converter',
        from_name: formData.from_name,
        from_email: formData.from_email,
        reply_to: formData.from_email,
        message: formData.message
      };

      await emailjs.send(
        'service_nnxux1e',
        'template_evci98f',
        templateParams,
        'EV6UX6GIPG231yXUd'
      );

      setStatus('success');
      setFormData({ from_name: '', from_email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus('error');
      setErrorMessage('Failed to send message. Please try again later.');
    }
  };

  return (
    <>
      <SEO
        title="Contact Us – ImageConversions.com"
        description="Get in touch with us. Send us your questions, feedback, or suggestions about ImageConversions.com."
      />

      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Contact Us</h1>

          <p className="text-gray-700 leading-relaxed mb-8">
            Have questions, feedback, or suggestions? We'd love to hear from you.
            Fill out the form below and we'll get back to you as soon as possible.
          </p>

          {status === 'success' && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-md">
              <p className="text-green-800 font-medium">
                ✓ Message sent successfully! We'll get back to you soon.
              </p>
            </div>
          )}

          {status === 'error' && (
            <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md">
              <p className="text-red-800 font-medium">
                ✗ {errorMessage}
              </p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="from_name" className="block text-sm font-medium text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                id="from_name"
                required
                value={formData.from_name}
                onChange={(e) => setFormData({ ...formData, from_name: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="Your name"
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="from_email" className="block text-sm font-medium text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                id="from_email"
                required
                value={formData.from_email}
                onChange={(e) => setFormData({ ...formData, from_email: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                placeholder="your.email@example.com"
                disabled={status === 'sending'}
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                Message *
              </label>
              <textarea
                id="message"
                required
                rows={6}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition resize-vertical"
                placeholder="Your message..."
                disabled={status === 'sending'}
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-600">
              * Required fields
            </p>
            <p className="text-sm text-gray-600 mt-2">
              By submitting this form, you agree to our <a href="/converter/privacy" className="text-blue-600 hover:underline">Privacy Policy</a>.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
