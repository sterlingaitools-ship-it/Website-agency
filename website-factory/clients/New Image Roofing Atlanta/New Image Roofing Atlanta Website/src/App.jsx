import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import CityPage from './pages/CityPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ReviewsPage from './pages/ReviewsPage';
import GalleryPage from './pages/GalleryPage';
import FaqPage from './pages/FaqPage';
import NotFoundPage from './pages/NotFoundPage';

/**
 * Scroll-to-hash on initial mount and on every navigation. Universal.
 */
function ScrollToHash() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'auto' });
      return;
    }
    const id = hash.slice(1);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }, [pathname, hash]);
  return null;
}

/**
 * Router shell for the trades-roofing-plumbing-electrical niche template.
 * Routes derived from 09-sitemap.json.
 */
export default function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/roof-replacement" element={<ServicePage />} />
        <Route path="/services/roof-repair" element={<ServicePage />} />
        <Route path="/services/storm-damage" element={<ServicePage />} />
        <Route path="/services/gutters" element={<ServicePage />} />
        <Route path="/services/roof-inspection" element={<ServicePage />} />
        <Route path="/services/:service" element={<ServicePage />} />
        <Route path="/areas/:city" element={<CityPage />} />
        <Route path="/locations/:city" element={<CityPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/storm-damage" element={<ServicePage />} />
        <Route path="/insurance-claims" element={<ServicePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}
