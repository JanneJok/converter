import { SEO } from '../components/layout/SEO';
import { ImageConverter } from '../components/ImageConverter';
import { LearnMore } from '../components/LearnMore';

export function PngToWebp() {
  return (
    <>
      <SEO
        title="PNG to WebP Converter – Free Tool | ImageConversions.com"
        description="Convert PNG to WebP online at ImageConversions.com. Reduce image size without losing quality. Free, fast, and secure PNG to WebP converter."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Convert PNG to WebP Online</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Easily convert your PNG files to WebP format. Perfect for websites, blogs, and apps that
            need smaller yet high-quality images. With our tool, you can compress PNG to WebP without
            losing transparency or clarity.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            Why convert PNG to WebP?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Significantly smaller file sizes than PNG</li>
            <li>Supports transparency just like PNG</li>
            <li>Better compression with lossless quality</li>
            <li>Faster website loading times</li>
          </ul>
        </div>

        <ImageConverter defaultFormat="webp" />

        <LearnMore
          title="Resources for Image Optimization"
          description="Learn more about PNG, WebP, and best practices for web image optimization."
          links={[
            {
              url: 'https://web.dev/articles/fast#optimize-your-images',
              text: 'Image Optimization Guide by Google',
              description: 'Comprehensive resource on optimizing images for better web performance and user experience.'
            },
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
              text: 'Image File Type and Format Guide - MDN',
              description: 'Detailed documentation on different image formats including PNG, WebP, and their use cases.'
            },
            {
              url: 'https://developers.google.com/speed/webp',
              text: 'WebP Format Overview',
              description: 'Official Google documentation explaining WebP advantages and technical details.'
            }
          ]}
        />
      </div>
    </>
  );
}
