import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              ImageConversions.com
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/jpg-to-webp" className="text-gray-600 hover:text-blue-600 transition-colors">
              JPG to WebP
            </Link>
            <Link to="/png-to-webp" className="text-gray-600 hover:text-blue-600 transition-colors">
              PNG to WebP
            </Link>
            <Link to="/webp-to-jpg" className="text-gray-600 hover:text-blue-600 transition-colors">
              WebP to JPG
            </Link>
            <Link to="/webp-to-png" className="text-gray-600 hover:text-blue-600 transition-colors">
              WebP to PNG
            </Link>
            <Link to="/faq" className="text-gray-600 hover:text-blue-600 transition-colors">
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
