import { useState } from 'react';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import TrustBar from '../components/TrustBar';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import brandDNA from '../config/brand-dna';

const serviceOptions = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage / Insurance Claim',
  'Roof Inspection',
  'Gutters',
  'Other',
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // GHL webhook fired by Stage 10.2 personalisation - stub here.
    setSubmitted(true);
  };

  return (
    <>
      <NavBar />
      <main className="pb-14 md:pb-0">
        {/* Contact Hero */}
        <section
          className="bg-primary pt-[72px] py-16 text-center"
          aria-label="Contact page header"
        >
          <div className="mx-auto max-w-2xl px-6 md:px-8">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-white mb-4">
              {brandDNA.copy.formHeader}
            </h1>
            <p className="font-body text-lg text-neutral">
              {brandDNA.copy.formSubtext}
            </p>
          </div>
        </section>

        {/* Contact Block */}
        <section
          id="hero-form"
          className="bg-white py-section-gap"
          aria-labelledby="contact-form-heading"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Left - full form (60%) */}
              <div className="w-full lg:w-3/5">
                <h2
                  id="contact-form-heading"
                  className="font-heading font-bold text-2xl text-ink mb-6"
                >
                  {brandDNA.copy.formHeader}
                </h2>

                {submitted ? (
                  <div className="rounded bg-accent/10 border border-accent p-6">
                    <p className="font-heading font-bold text-lg text-ink">
                      {brandDNA.copy.formSubtext}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block font-body font-medium text-sm text-ink mb-1">
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          autoComplete="name"
                          className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                      <div>
                        <label htmlFor="contact-phone" className="block font-body font-medium text-sm text-ink mb-1">
                          Phone Number
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          autoComplete="tel"
                          className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-email" className="block font-body font-medium text-sm text-ink mb-1">
                        Email Address
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        autoComplete="email"
                        className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      />
                    </div>

                    <div>
                      <label htmlFor="contact-service" className="block font-body font-medium text-sm text-ink mb-1">
                        Service Needed
                      </label>
                      <select
                        id="contact-service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink bg-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                      >
                        <option value="" disabled>Select a service</option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt}>{opt}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block font-body font-medium text-sm text-ink mb-1">
                        Message (optional)
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded border border-silver px-3 py-2.5 font-body text-sm text-ink placeholder-neutral focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full rounded bg-accent hover:bg-accent-dark active:bg-accent-dark text-ink font-heading font-bold text-base py-3 transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                    >
                      {brandDNA.copy.submitButton}
                    </button>

                    {brandDNA.copy.privacyLine && (
                      <p className="font-body text-xs text-neutral-dim text-center">
                        {brandDNA.copy.privacyLine}
                      </p>
                    )}
                  </form>
                )}
              </div>

              {/* Right - contact details (40%) */}
              <div className="w-full lg:w-2/5 flex flex-col gap-5">
                <div>
                  <h3 className="font-heading font-semibold text-base text-ink mb-1">
                    Phone
                  </h3>
                  <a
                    href={brandDNA.contact.phoneTelLink}
                    className="font-body text-base text-accent hover:text-accent-dark transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                    aria-label={`Call ${brandDNA.contact.phone}`}
                  >
                    {brandDNA.contact.phone}
                  </a>
                </div>

                {brandDNA.contact.email && (
                  <div>
                    <h3 className="font-heading font-semibold text-base text-ink mb-1">
                      Email
                    </h3>
                    <a
                      href={`mailto:${brandDNA.contact.email}`}
                      className="font-body text-base text-neutral-dim hover:text-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                    >
                      {brandDNA.contact.email}
                    </a>
                  </div>
                )}

                {brandDNA.address.full && (
                  <div>
                    <h3 className="font-heading font-semibold text-base text-ink mb-1">
                      Address
                    </h3>
                    <address className="not-italic font-body text-base text-neutral-dim">
                      {brandDNA.address.full}
                    </address>
                  </div>
                )}

                {(() => { const hoursDisplay = brandDNA.hours.display; return hoursDisplay.length > 0 ? (
                  <div>
                    <h3 className="font-heading font-semibold text-base text-ink mb-1">
                      Hours
                    </h3>
                    {hoursDisplay.map((row, i) => (
                      <p key={i} className="font-body text-sm text-neutral-dim">
                        {row.label}: {row.value}
                      </p>
                    ))}
                  </div>
                ) : null; })()}

                {/* Map embed */}
                {brandDNA.contact.mapsEmbedUrl && (
                  <div className="mt-2">
                    <iframe
                      src={brandDNA.contact.mapsEmbedUrl}
                      title={`${brandDNA.company.name} location map`}
                      className="w-full h-48 rounded border border-neutral/30"
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      aria-label="Google Maps showing business location"
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
