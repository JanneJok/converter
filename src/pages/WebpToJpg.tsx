import { SEO } from '../components/layout/SEO';
import { ImageConverter } from '../components/ImageConverter';
import { LearnMore } from '../components/LearnMore';

export function WebpToJpg() {
  return (
    <>
      <SEO
        title="WebP to JPG Converter – Free Tool | ImageConversions.com"
        description="Convert WebP to JPG online at ImageConversions.com for maximum compatibility. Free, fast, and secure WebP to JPG converter."
      />

      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Convert WebP to JPG Online</h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 leading-relaxed">
            Convert your modern WebP images back to JPG for compatibility with older browsers, image
            editors, and software. Just upload your file and get a JPG instantly.
          </p>

          <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
            When to convert WebP to JPG:
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Need compatibility with older software</li>
            <li>Sharing images on platforms that don't support WebP</li>
            <li>Editing in programs that require JPG format</li>
            <li>Printing or archiving purposes</li>
          </ul>
        </div>

        <ImageConverter defaultFormat="jpeg" />

        <LearnMore
          title="Understanding Image Formats"
          description="Learn about different image formats and when to use JPG versus WebP."
          links={[
            {
              url: 'https://developer.mozilla.org/en-US/docs/Web/Media/Formats/Image_types',
              text: 'Image File Formats Guide - MDN',
              description: 'Comprehensive guide to different image formats including JPG, WebP, PNG, and their characteristics.'
            },
            {
              url: 'https://caniuse.com/webp',
              text: 'WebP Browser Support',
              description: 'Check which browsers support WebP format and compatibility information.'
            }
          ]}
        />
      </div>
    </>
  );
}
