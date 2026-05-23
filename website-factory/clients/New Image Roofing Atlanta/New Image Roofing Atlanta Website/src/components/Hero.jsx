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

export default function Hero() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    email: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="hero"
      className="flex flex-col lg:flex-row min-h-[700px] pt-[72px] overflow-hidden"
      aria-label="Hero"
    >
      {/* Left column - copy + form */}
      <div className="bg-primary w-full lg:w-[55%] flex flex-col justify-start px-8 lg:px-16 pt-10 lg:pt-12 pb-10 lg:pb-10 overflow-y-auto">
        {/* Eyebrow - rendered from copy deck directly (already contains stars + count) */}
        <p className="font-body font-medium text-sm text-neutral mb-4 tabular-nums">
          {brandDNA.copy.hero.eyebrow}
        </p>

        {/* Headline h1 */}
        <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white leading-tight mb-4">
          {brandDNA.copy.hero.headline}
        </h1>

        {/* Subheadline */}
        <p className="font-body text-lg text-neutral mb-6">
          {brandDNA.copy.hero.subheadline}
        </p>

        {/* Quote form */}
        <div className="bg-white rounded-[6px] p-5 shadow-card-lg">
          {submitted ? (
            <p className="font-heading font-bold text-lg text-ink text-center py-4">
              {brandDNA.copy.formSubtext}
            </p>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <p className="font-heading font-bold text-base text-ink mb-3">
                {brandDNA.copy.formHeader}
              </p>

              <div className="flex flex-col gap-2.5">
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
                  className="w-full rounded border border-silver px-3 py-2 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
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
                  className="w-full rounded border border-silver px-3 py-2 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />

                <label className="sr-only" htmlFor="hero-service">Service Needed</label>
                <select
                  id="hero-service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-silver px-3 py-2 font-body text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
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
                  className="w-full rounded border border-silver px-3 py-2 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />

                <button
                  type="submit"
                  className="w-full rounded bg-accent hover:bg-accent-dark active:bg-accent-dark text-ink font-heading font-bold text-base py-3 transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                >
                  {brandDNA.copy.submitButton}
                </button>
              </div>

              {brandDNA.copy.privacyLine && (
                <p className="font-body text-xs text-neutral-dim mt-2 text-center">
                  {brandDNA.copy.privacyLine}
                </p>
              )}
            </form>
          )}
        </div>

        {/* Secondary call link */}
        <p className="font-body font-medium text-sm text-neutral mt-3">
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

      {/* Right column - hero image with bg fallback when image is missing */}
      <div className="w-full lg:w-[45%] h-60 lg:h-auto relative overflow-hidden bg-primary-slate">
        {!imgFailed && (
          <img
            src="/hero.webp"
            alt={brandDNA.copy.hero.imageAlt}
            className="w-full h-full object-cover object-center"
            fetchPriority="high"
            decoding="async"
            width="720"
            height="780"
            onError={() => setImgFailed(true)}
          />
        )}
        {imgFailed && (
          <div
            className="w-full h-full flex items-center justify-center bg-primary-slate"
            aria-hidden="true"
          >
            <img
              src="/logo.svg"
              alt=""
              className="w-40 opacity-20"
            />
          </div>
        )}
      </div>
    </section>
  );
}
