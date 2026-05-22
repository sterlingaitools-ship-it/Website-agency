import { Helmet } from 'react-helmet-async';
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
import { homepageTitle, canonical, META_DESC, homepageSchema, BASE_URL } from '../utils/seo';

export default function HomePage() {
  const title = homepageTitle();
  const desc = META_DESC;
  const url = canonical('/');
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta property="og:url" content={url} />
        <meta property="og:site_name" content={BASE_URL.replace(/^https?:\/\//, '')} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{homepageSchema()}</script>
      </Helmet>
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
      {/* Fixed bottom overlay — outside main content flow */}
      <MobileCTABar />
    </>
  );
}
