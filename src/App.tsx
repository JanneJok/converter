import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { JpgToWebp } from './pages/JpgToWebp';
import { PngToWebp } from './pages/PngToWebp';
import { JpegToWebp } from './pages/JpegToWebp';
import { WebpToJpg } from './pages/WebpToJpg';
import { WebpToPng } from './pages/WebpToPng';
import { FAQ } from './pages/FAQ';
import { Contact } from './pages/Contact';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { Terms } from './pages/Terms';

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col">
        <Header />
        <main className="max-w-7xl mx-auto px-4 py-12 flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jpg-to-webp" element={<JpgToWebp />} />
            <Route path="/png-to-webp" element={<PngToWebp />} />
            <Route path="/jpeg-to-webp" element={<JpegToWebp />} />
            <Route path="/webp-to-jpg" element={<WebpToJpg />} />
            <Route path="/webp-to-png" element={<WebpToPng />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
