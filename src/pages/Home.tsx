import { SEO } from '../components/layout/SEO';
import { ImageConverter } from '../components/ImageConverter';
import { Link } from 'react-router-dom';

export function Home() {
  return (
    <>
      <SEO
        title="ImageConversions.com – Free Online Image Converter for JPG, PNG & WebP"
        description="Convert JPG to WebP, PNG to WebP, JPEG to WebP, or WebP to JPG/PNG in seconds. 100% free, fast, and secure online image converter at ImageConversions.com."
      />

      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Convert JPG, PNG, JPEG and WebP Images Online
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Welcome to ImageConversions.com – your free online image converter. Instantly convert JPG to WebP, PNG to WebP,
          or JPEG to WebP to make your images smaller and load faster. Need to go the other way?
          You can also convert WebP to JPG or WebP to PNG in one click. No software required,
          no registration – just drag & drop your images and download the result.
        </p>
      </div>

      <ImageConverter />

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        <Link to="/jpg-to-webp" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <p className="text-xl font-semibold text-gray-900 mb-2">JPG to WebP</p>
          <p className="text-gray-600">Convert JPG images to WebP format for better compression and smaller file size.</p>
        </Link>

        <Link to="/png-to-webp" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <p className="text-xl font-semibold text-gray-900 mb-2">PNG to WebP</p>
          <p className="text-gray-600">Convert PNG to WebP online. Reduce image size without losing quality.</p>
        </Link>

        <Link to="/jpeg-to-webp" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <p className="text-xl font-semibold text-gray-900 mb-2">JPEG to WebP</p>
          <p className="text-gray-600">Optimize JPEG images by converting them to modern WebP format.</p>
        </Link>

        <Link to="/webp-to-jpg" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <p className="text-xl font-semibold text-gray-900 mb-2">WebP to JPG</p>
          <p className="text-gray-600">Convert WebP images back to JPG for maximum compatibility.</p>
        </Link>

        <Link to="/webp-to-png" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <p className="text-xl font-semibold text-gray-900 mb-2">WebP to PNG</p>
          <p className="text-gray-600">Convert WebP to PNG for lossless quality and transparency support.</p>
        </Link>

        <Link to="/faq" className="block p-6 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
          <p className="text-xl font-semibold text-gray-900 mb-2">FAQ</p>
          <p className="text-gray-600">Common questions about image conversion and WebP format.</p>
        </Link>
      </div>

      <div className="mt-16 text-center text-sm text-gray-600">
        <p>All conversions happen in your browser. Your images are never uploaded to any server.</p>
      </div>
    </>
  );
}
