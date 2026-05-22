import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import TrustBar from '../components/TrustBar';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import Reviews from '../components/Reviews';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import ServiceAreas from '../components/ServiceAreas';
import brandDNA from '../config/brand-dna';
import { serviceTitle, serviceDesc, canonical, serviceSchema } from '../utils/seo';

const serviceOptions = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage / Insurance Claim',
  'Roof Inspection',
  'Gutters',
  'Other',
];

/**
 * Inline FAQ accordion — no external library.
 */
function FAQAccordion({ items }) {
  const [openIdx, setOpenIdx] = useState(null);

  if (!items || items.length === 0) return null;

  return (
    <section className="bg-white py-section-gap" aria-labelledby="faq-service-heading">
      <div className="mx-auto max-w-3xl px-6 md:px-8">
        <h2
          id="faq-service-heading"
          className="font-heading font-bold text-3xl text-ink text-center mb-8"
        >
          {brandDNA.copy.faq.heading}
        </h2>
        <dl className="flex flex-col gap-2">
          {items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="border border-silver rounded"
              >
                <dt>
                  <button
                    type="button"
                    className="w-full flex items-center justify-between px-5 py-4 text-left font-heading font-semibold text-base text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                    aria-expanded={isOpen}
                    aria-controls={`faq-service-answer-${idx}`}
                    onClick={() => setOpenIdx(isOpen ? null : idx)}
                  >
                    {item.q}
                    <span className="ml-4 shrink-0 text-neutral-dim" aria-hidden="true">
                      {isOpen ? '−' : '+'}
                    </span>
                  </button>
                </dt>
                <dd
                  id={`faq-service-answer-${idx}`}
                  className={`overflow-hidden transition-all motion-safe:duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
                >
                  <p className="px-5 pb-4 font-body text-sm text-neutral-dim">
                    {item.a}
                  </p>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </section>
  );
}

/**
 * Page hero for service detail pages.
 */
function ServicePageHero({ service }) {
  const [formData, setFormData] = useState({ name: '', phone: '', service: service?.name || '', email: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const heading = service
    ? `${service.name} in ${brandDNA.address.city}, ${brandDNA.address.state}`
    : brandDNA.copy.hero.headline;

  return (
    <section
      className="flex flex-col lg:flex-row min-h-[500px] pt-[72px]"
      aria-label="Service page hero"
    >
      {/* Left */}
      <div className="bg-primary w-full lg:w-3/5 flex flex-col justify-center px-8 lg:px-16 py-14">
        <h1 className="font-heading font-extrabold text-3xl lg:text-4xl text-white mb-4">
          {heading}
        </h1>
        <p className="font-body text-base text-neutral mb-6">
          {service?.body || brandDNA.copy.hero.subheadline}
        </p>

        <div className="flex flex-col sm:flex-row gap-3 mb-4">
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

      {/* Right — hero image placeholder */}
      <div className="w-full lg:w-2/5 h-48 lg:h-auto bg-primary-slate relative overflow-hidden">
        <img
          src="/hero.webp"
          alt={service?.name || brandDNA.copy.hero.imageAlt}
          className="w-full h-full object-cover object-center"
          loading="lazy"
          width="720"
          height="500"
        />
      </div>
    </section>
  );
}

export default function ServicePage() {
  const { service: serviceSlug } = useParams();

  // Find matching service from brandDNA or fall back to a default shape
  const services = brandDNA.services;
  const service =
    services.find((s) => s.slug === serviceSlug) ||
    (serviceSlug ? { slug: serviceSlug, name: serviceSlug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()), body: null } : null);

  // FAQ items filtered by service slug (uses brandDNA.faq[])
  const faqSource = brandDNA.faq;
  const faqItems = faqSource.filter(
    (item) => !serviceSlug || !item.category || item.category === serviceSlug
  );

  // Reviews filtered by service tag
  const reviewItems = brandDNA.reviews.items;
  const filteredReviews = {
    ...brandDNA.reviews,
    items: reviewItems.filter(
      (r) => !r.category || !serviceSlug || r.category === serviceSlug
    ),
  };

  const path = serviceSlug ? `/services/${serviceSlug}` : '/services';
  const title = service ? serviceTitle(service.name) : serviceTitle('Roofing Services');
  const desc = serviceDesc(service);
  const schema = serviceSchema(service, path);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonical(path)} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="robots" content="index, follow" />
        {schema && <script type="application/ld+json">{schema}</script>}
      </Helmet>
      <NavBar />
      <main className="pb-14 md:pb-0">
        <ServicePageHero service={service} />
        <TrustBar />

        {/* Service description block */}
        {service?.body && (
          <section className="bg-white py-section-gap" aria-labelledby="service-desc-heading">
            <div className="mx-auto max-w-3xl px-6 md:px-8">
              <h2
                id="service-desc-heading"
                className="font-heading font-bold text-3xl text-ink mb-6"
              >
                About {service.name}
              </h2>
              <p className="font-body text-base text-neutral-dim leading-relaxed">
                {service.body}
              </p>
            </div>
          </section>
        )}

        <WhyUs />
        <Process />
        <ServiceAreas />

        {/* Reviews section with optional filter */}
        <Reviews limit={6} showSeeAll />

        <FAQAccordion items={faqItems} />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
