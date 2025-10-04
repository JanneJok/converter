import { SEO } from '../components/layout/SEO';
import { ImageConverter } from '../components/ImageConverter';
import { LearnMore } from '../components/LearnMore';

export function JpegToWebp() {
  return (
    <>
      <SEO
        title="JPEG to WebP Converter – Free Tool | ImageConversions.com"
        description="Convert JPEG images to WebP format online at ImageConversions.com. Free, fast, and secure JPEG to WebP converter for better web performance."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Convert JPEG to WebP Online</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your JPEG images into modern WebP format for superior compression and performance.
            Our free online converter makes it easy to optimize your photos for the web while maintaining
            excellent image quality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Advantages of JPEG to WebP conversion:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Up to 30% smaller than JPEG files</li>
            <li>Improved website loading speed</li>
            <li>Better SEO performance</li>
            <li>Wide browser support</li>
          </ul>
        </div>

        <ImageConverter defaultFormat="webp" />

        <LearnMore
          title="Learn More About WebP and Image Optimization"
          description="Explore these resources to understand WebP format and improve your website's image performance."
          links={[
            {
              url: 'https://developers.google.com/speed/webp',
              text: 'Google WebP Documentation',
              description: 'Official documentation from Google about WebP format capabilities and benefits.'
            },
            {
              url: 'https://web.dev/articles/choose-the-right-image-format',
              text: 'Choosing Image Formats for Web',
              description: 'Guide to selecting the best image format for your specific needs and use cases.'
            }
          ]}
        />
      </div>
    </>
  );
}
