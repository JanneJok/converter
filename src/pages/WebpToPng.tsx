import { SEO } from '../components/layout/SEO';
import { ImageConverter } from '../components/ImageConverter';
import { LearnMore } from '../components/LearnMore';

export function WebpToPng() {
  return (
    <>
      <SEO
        title="WebP to PNG Converter – Free Tool | ImageConversions.com"
        description="Convert WebP to PNG online at ImageConversions.com. Free, fast, and secure converter for lossless quality and transparency support."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Convert WebP to PNG Online</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Quickly convert WebP to PNG if you need lossless quality or compatibility with apps that
            don't support WebP yet. Our free converter preserves transparency and image quality.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Why convert WebP to PNG:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Lossless image quality</li>
            <li>Full transparency support</li>
            <li>Universal compatibility</li>
            <li>Perfect for graphics and logos</li>
          </ul>
        </div>

        <ImageConverter defaultFormat="png" />

        <LearnMore
          title="PNG and WebP Resources"
          description="Dive deeper into PNG and WebP formats with these helpful guides."
          links={[
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
              text: 'Image Format Types - MDN',
              description: 'Technical documentation on PNG, WebP, and other image formats with use case recommendations.'
            },
            {
              url: 'https://web.dev/articles/fast#optimize-your-images',
              text: 'Web Performance: Image Optimization',
              description: 'Best practices for optimizing images to improve website speed and performance.'
            }
          ]}
        />
      </div>
    </>
  );
}
