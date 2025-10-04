import { SEO } from '../components/layout/SEO';
import { ImageConverter } from '../components/ImageConverter';
import { LearnMore } from '../components/LearnMore';

export function JpgToWebp() {
  return (
    <>
      <SEO
        title="JPG to WebP Converter – Free Tool | ImageConversions.com"
        description="Convert JPG images to WebP format online at ImageConversions.com. Fast, free, and secure converter for better compression and smaller file size."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Convert JPG to WebP Online</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Our free JPG to WebP converter helps you optimize your photos for the web. WebP images
            load faster, use less bandwidth, and keep high quality. Simply upload your JPG file and
            download the converted WebP instantly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Benefits of converting JPG to WebP:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Up to 30% smaller file size compared to JPG</li>
            <li>Better performance on websites</li>
            <li>Supported by most modern browsers</li>
            <li>Maintains excellent image quality</li>
          </ul>
        </div>

        <ImageConverter defaultFormat="webp" />

        <LearnMore
          title="Learn More About WebP and Image Optimization"
          description="Expand your knowledge about modern image formats and web performance optimization with these helpful resources from industry experts."
          links={[
            {
              url: 'https://developers.google.com/speed/webp',
              text: 'Google WebP Official Documentation',
              description: 'Comprehensive guide to WebP format, features, and technical specifications from Google developers.'
            },
            {
              url: 'https://web.dev/articles/choose-the-right-image-format',
              text: 'Choosing the Right Image Format',
              description: 'Google\'s guide on selecting optimal image formats for different use cases and performance needs.'
            },
            {
              url: 'https://caniuse.com/webp',
              text: 'WebP Browser Compatibility',
              description: 'Check current browser support for WebP format across different platforms and versions.'
            }
          ]}
        />
      </div>
    </>
  );
}
