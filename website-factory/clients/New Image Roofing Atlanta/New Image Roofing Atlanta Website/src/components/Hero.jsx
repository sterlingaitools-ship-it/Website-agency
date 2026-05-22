import { useState } from 'react';
import brandDNA from '../config/brand-dna';

const serviceOptions = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage / Insurance Claim',
  'Roof Inspection',
  'Gutters',
  'Other',
];

function StarIcon({ className }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // GHL webhook fired by Stage 10.2 personalisation — stub here.
    setSubmitted(true);
  };

  return (
    <section
      id="hero-form"
      className="flex flex-col lg:flex-row min-h-[600px] lg:min-h-[680px] lg:max-h-[780px] pt-[72px]"
      aria-label="Hero"
    >
      {/* Left column — copy + form */}
      <div className="bg-primary w-full lg:w-[55%] flex flex-col justify-center px-8 lg:px-16 py-16 lg:pt-20 lg:pb-14">
        {/* Star eyebrow */}
        <div className="flex items-center gap-1.5 mb-4">
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} className="text-accent" />
          ))}
          <span className="font-body font-medium text-sm text-neutral ml-1 tabular-nums">
            {brandDNA.reviews.googleCount
              ? `${brandDNA.reviews.googleCount} ${brandDNA.copy.hero.eyebrow}`
              : brandDNA.copy.hero.eyebrow}
          </span>
        </div>

        {/* Headline h1 */}
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
          {brandDNA.copy.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg text-neutral mb-8">
          {brandDNA.copy.hero.subheadline}
        </p>

        {/* Quote form */}
        <div className="bg-white rounded-[6px] p-6 shadow-card-lg">
          {submitted ? (
            <p className="font-heading font-bold text-lg text-ink text-center py-4">
              {brandDNA.copy.formSubtext}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="font-heading font-bold text-lg text-ink mb-4">
                {brandDNA.copy.formHeader}
              </p>

              <div className="flex flex-col gap-3">
                <label className="sr-only" htmlFor="hero-name">Full Name</label>
                <input
                  id="hero-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  autoComplete="name"
                  className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />

                <label className="sr-only" htmlFor="hero-phone">Phone Number</label>
                <input
                  id="hero-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                  className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />

                <label className="sr-only" htmlFor="hero-service">Service Needed</label>
                <select
                  id="hero-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="" disabled>Service Needed</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>

                <label className="sr-only" htmlFor="hero-email">Email Address</label>
                <input
                  id="hero-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  autoComplete="email"
                  className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />

                <button
                  type="submit"
                  className="w-full rounded bg-accent hover:bg-accent-dark active:bg-accent-dark text-ink font-heading font-bold text-base py-3 mt-1 transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                >
                  {brandDNA.copy.submitButton}
                </button>
              </div>

              {brandDNA.copy.privacyLine && (
                <p className="font-body text-xs text-neutral-dim mt-3 text-center">
                  {brandDNA.copy.privacyLine}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Secondary call link */}
        <p className="font-body font-medium text-sm text-neutral mt-4">
          Or call us:{' '}
          <a
            href={brandDNA.contact.phoneTelLink}
            className="text-accent hover:text-accent-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            aria-label={`Call ${brandDNA.contact.phone}`}
          >
            {brandDNA.contact.phone}
          </a>
        </p>
      </div>

      {/* Right column — hero image */}
      <div className="w-full lg:w-[45%] h-60 lg:h-auto relative overflow-hidden">
        {brandDNA.copy.hero.imageAlt && (
          <img
            src="/hero.webp"
            alt={brandDNA.copy.hero.imageAlt}
            className="w-full h-full object-cover object-center"
            fetchpriority="high"
            decoding="async"
            width="720"
            height="780"
          />
        )}
      </div>
    </section>
  );
}
