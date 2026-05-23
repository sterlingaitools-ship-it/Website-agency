import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import ServiceAreas from '../components/ServiceAreas';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';

/**
 * HomePage - root route "/".
 * MobileCTABar renders outside <main> as a fixed-position overlay.
 * Body gets pb-14 on mobile to avoid content being hidden under the bar.
 */
export default function HomePage() {
  return (
    <>
      <NavBar />
      <main className="pb-14 md:pb-0">
        <Hero />
        <TrustBar />
        <Services />
        <WhyUs />
        <Process />
        <Reviews />
        <Gallery />
        <ServiceAreas />
        <FinalCTA />
      </main>
      <Footer />
      {/* Fixed bottom overlay - outside main content flow */}
      <MobileCTABar />
    </>
  );
}
