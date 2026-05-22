import { Helmet } from 'react-helmet-async';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Reviews from '../components/Reviews';
import brandDNA from '../config/brand-dna';
import { pageTitle, canonical, reviewsPageSchema } from '../utils/seo';

export default function ReviewsPage() {
  const title = pageTitle(`${brandDNA.reviews.googleCount} Google Reviews`);
  const desc = `Read ${brandDNA.reviews.googleCount} five-star reviews for ${brandDNA.company.name} in ${brandDNA.address.city}, ${brandDNA.address.state}. Rated ${brandDNA.reviews.rating} stars on Google.`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonical('/reviews')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{reviewsPageSchema()}</script>
      </Helmet>
      <NavBar />
      <main className="pb-14 md:pb-0">
        {/* Reviews hero */}
        <section
          className="bg-primary pt-[72px] py-14 text-center"
          aria-label="Reviews page header"
        >
          <div className="mx-auto max-w-2xl px-6 md:px-8">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4">
              {brandDNA.copy.reviews.heading}
            </h1>
            <p className="font-body text-lg text-neutral">
              {brandDNA.copy.reviews.body}
            </p>
            <p className="font-heading font-bold text-2xl text-accent mt-4 tabular-nums">
              {brandDNA.reviews.googleStat}
            </p>
          </div>
        </section>

        {/* Full reviews grid — no limit */}
        <Reviews limit={100} showSeeAll={false} />

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
