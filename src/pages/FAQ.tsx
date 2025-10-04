import { SEO } from '../components/layout/SEO';

export function FAQ() {
  const faqs = [
    {
      question: 'What is WebP?',
      answer: 'WebP is a modern image format developed by Google that provides superior compression while maintaining quality. It supports both lossy and lossless compression, as well as transparency and animation.',
      link: { url: 'https://developers.google.com/speed/webp', text: 'Learn more about WebP from Google' }
    },
    {
      question: 'How do I convert JPG to WebP?',
      answer: 'Simply upload your JPG file to our tool and download the WebP version instantly. Our converter works entirely in your browser - no upload to servers required.'
    },
    {
      question: 'Does WebP support transparency?',
      answer: 'Yes, WebP supports both lossy and lossless compression with alpha transparency, just like PNG format.'
    },
    {
      question: 'Is this converter free?',
      answer: 'Yes – all conversions (JPG to WebP, PNG to WebP, JPEG to WebP, WebP to JPG, WebP to PNG) are 100% free with no limits.'
    },
    {
      question: 'Are my images uploaded to a server?',
      answer: 'No. All image conversions happen directly in your browser using JavaScript. Your images never leave your device, ensuring complete privacy and security.'
    },
    {
      question: 'What browsers support WebP?',
      answer: 'WebP is supported by all modern browsers including Chrome, Firefox, Edge, Safari (iOS 14+), and Opera. It has over 95% global browser support as of 2025.',
      link: { url: 'https://caniuse.com/webp', text: 'Check current WebP browser support' }
    },
    {
      question: 'How much smaller are WebP images?',
      answer: 'WebP images are typically 25-35% smaller than JPG and PNG images at equivalent quality levels, leading to faster website loading times.',
      link: { url: 'https://web.dev/articles/choose-the-right-image-format', text: 'Read Google\'s guide on choosing image formats' }
    },
    {
      question: 'Can I convert multiple images at once?',
      answer: 'Yes! Our tool supports batch conversion of up to 20 images at once. Just select multiple files and convert them all together.'
    },
    {
      question: 'Does converting to WebP reduce image quality?',
      answer: 'WebP offers both lossy and lossless modes. Our converter uses high-quality settings to ensure minimal quality loss while achieving significant file size reduction.'
    },
    {
      question: 'Why should I use WebP instead of JPG or PNG?',
      answer: 'WebP offers better compression, smaller file sizes, faster loading times, and supports transparency. This leads to improved website performance, better SEO, and reduced bandwidth costs.',
      link: { url: 'https://web.dev/articles/fast#optimize-your-images', text: 'Learn about image optimization on Web.dev' }
    },
    {
      question: 'What are the different image file formats?',
      answer: 'Common formats include JPG/JPEG (lossy compression, photos), PNG (lossless, transparency), WebP (modern, efficient), GIF (animation), and SVG (vector graphics). Each format has specific use cases.',
      link: { url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types', text: 'Read MDN\'s guide on image file types' }
    }
  ];

  return (
    <>
      <SEO
        title="FAQ – ImageConversions.com Image Converter Questions"
        description="Frequently asked questions about converting images to WebP, JPG, and PNG formats at ImageConversions.com. Learn about WebP benefits and how to use our free converter."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h1>

        <p className="text-xl text-gray-600 mb-12">
          Everything you need to know about image conversion and WebP format.
        </p>

        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {faq.answer}
              </p>
              {faq.link && (
                <a
                  href={faq.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center mt-3 text-blue-600 hover:text-blue-700 font-medium text-sm"
                >
                  {faq.link.text}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
