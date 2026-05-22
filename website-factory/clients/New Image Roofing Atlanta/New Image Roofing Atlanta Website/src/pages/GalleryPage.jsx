import { Helmet } from 'react-helmet-async';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import Gallery from '../components/Gallery';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import brandDNA from '../config/brand-dna';
import { pageTitle, canonical } from '../utils/seo';

export default function GalleryPage() {
  const title = pageTitle('Project Gallery');
  const desc = `View roofing projects completed by ${brandDNA.company.name} across ${brandDNA.address.city} and Metro Atlanta. Residential and commercial roofing work.`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonical('/gallery')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <NavBar />
      <main className="pb-14 md:pb-0">
        {/* Gallery hero */}
        <section
          className="bg-primary pt-[72px] py-14 text-center"
          aria-label="Gallery page header"
        >
          <div className="mx-auto max-w-2xl px-6 md:px-8">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4">
              {brandDNA.copy.gallery.heading}
            </h1>
            <p className="font-body text-lg text-neutral">
              {brandDNA.copy.gallery.body}
            </p>
          </div>
        </section>

        {/* Full gallery grid — no limit */}
        <Gallery limit={100} showSeeAll={false} />

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
