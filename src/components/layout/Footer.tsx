import { Link } from 'react-router-dom';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-200 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
              ImageConversions.com
            </h3>
            <p className="text-sm text-gray-600">
              Free online tool to convert images between JPG, PNG, JPEG, and WebP formats.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Convert</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/jpg-to-webp" className="text-gray-600 hover:text-blue-600">
                  JPG to WebP
                </Link>
              </li>
              <li>
                <Link to="/png-to-webp" className="text-gray-600 hover:text-blue-600">
                  PNG to WebP
                </Link>
              </li>
              <li>
                <Link to="/webp-to-jpg" className="text-gray-600 hover:text-blue-600">
                  WebP to JPG
                </Link>
              </li>
              <li>
                <Link to="/webp-to-png" className="text-gray-600 hover:text-blue-600">
                  WebP to PNG
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-blue-600">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-blue-600">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <button
                  onClick={() => {
                    if (window.CookieConsent) {
                      window.CookieConsent.showCookieSettings();
                    }
                  }}
                  className="text-gray-600 hover:text-blue-600 text-left"
                >
                  Cookie Settings
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-6 text-center text-sm text-gray-600">
          <p>© {currentYear} ImageConversions.com. All rights reserved.</p>
          <p className="mt-2">
            All conversions happen in your browser. Your images are never uploaded.
          </p>
        </div>
      </div>
    </footer>
  );
}
