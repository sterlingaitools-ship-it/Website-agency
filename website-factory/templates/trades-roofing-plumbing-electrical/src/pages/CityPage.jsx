import { useParams, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import TrustBar from '../components/TrustBar';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import brandDNA from '../config/brand-dna';

/**
 * City-specific hero - reuses the hero split layout with city-aware copy.
 */
function CityHero({ city }) {
  const displayCity = city.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const heading = `Roofing Contractor in ${displayCity}, ${brandDNA.address.state}`;
  const subheadline = brandDNA.copy.hero.subheadline;

  return (
    <section
      className="flex flex-col lg:flex-row min-h-[500px] pt-[72px]"
      aria-label={`Hero for ${displayCity}`}
    >
      {/* Left */}
      <div className="bg-primary w-full lg:w-[55%] flex flex-col justify-center px-8 lg:px-16 py-14">
        <h1 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
          {heading}
        </h1>
        <p className="font-body text-base text-neutral mb-6">
          {subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/contact#hero-form"
            className="inline-block bg-accent hover:bg-accent-dark text-ink font-heading font-bold text-base px-6 py-3 rounded transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
          >
            {brandDNA.copy.buttonText}
          </Link>
          <a
            href={brandDNA.contact.phoneTelLink}
            className="inline-block font-heading font-bold text-base text-accent hover:text-accent-light py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            aria-label={`Call ${brandDNA.contact.phone}`}
          >
            {brandDNA.contact.phone}
          </a>
        </div>
      </div>

      {/* Right - hero image */}
      <div className="w-full lg:w-[45%] h-48 lg:h-auto bg-primary-slate relative overflow-hidden">
        <img
          src="/hero.webp"
          alt={`Roofing work in ${displayCity}`}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width="720"
          height="500"
        />
      </div>
    </section>
  );
}

/**
 * Links to other service areas (for internal SEO linking).
 */
function ServiceAreaLinks({ currentCity }) {
  const others = brandDNA.serviceAreas
    .filter((name) => {
      const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      return slug !== currentCity;
    })
    .slice(0, 12);

  if (others.length === 0) return null;

  return (
    <section
      className="bg-white py-section-gap"
      aria-labelledby="area-links-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="area-links-heading"
          className="font-heading font-bold text-2xl text-ink text-center mb-6"
        >
          Also Serving
        </h2>
        <ul className="flex flex-wrap justify-center gap-2" role="list">
          {others.map((name) => {
            const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
            return (
              <li key={name}>
                <Link
                  to={`/areas/${slug}`}
                  className="inline-block bg-silver text-ink font-body font-medium text-sm px-4 py-2 rounded hover:bg-neutral/30 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}

export default function CityPage() {
  const { city } = useParams();
  const displayCity = city
    ? city.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase())
    : brandDNA.address.city;

  return (
    <>
      <NavBar />
      <main className="pb-14 md:pb-0">
        <CityHero city={city || ''} />
        <TrustBar />

        {/* Local services with city-specific heading context */}
        <Services />

        {/* Local gallery filtered by city tag */}
        <Gallery limit={6} showSeeAll={false} />

        {/* Local reviews */}
        <Reviews limit={6} showSeeAll />

        <ServiceAreaLinks currentCity={city || ''} />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
