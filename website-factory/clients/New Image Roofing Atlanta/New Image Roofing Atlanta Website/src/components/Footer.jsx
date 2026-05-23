import { useState } from 'react';
import { Link } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

const serviceOptions = [
  'Roof Replacement',
  'Roof Repair',
  'Storm Damage / Insurance Claim',
  'Roof Inspection',
  'Gutters',
  'Other',
];

function handleLogoError(e) {
  e.currentTarget.style.display = 'none';
  e.currentTarget.nextSibling.style.display = 'inline';
}

/**
 * Footer - 4-column layout on desktop, single-column stack on mobile.
 * Col 1: brand / contact info
 * Col 2: services list
 * Col 3: service areas (first 8)
 * Col 4: mini contact form CTA
 */
export default function Footer() {
  const [footerForm, setFooterForm] = useState({ phone: '', service: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFooterForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    // GHL webhook fired by Stage 10.2 personalisation - stub here.
    setSubmitted(true);
  };

  const areaSlug = (name) =>
    name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary pt-12 pb-8" aria-label="Site footer">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-10">

          {/* Col 1 - Brand */}
          <div className="flex flex-col gap-3">
            <Link to="/" aria-label={`${brandDNA.company.name} homepage`}>
              <img
                src="/logo-white.svg"
                alt={brandDNA.company.name}
                className="max-h-10 w-auto object-contain"
                loading="lazy"
                width="160"
                height="40"
                onError={handleLogoError}
              />
              <span className="font-heading font-semibold text-base text-white" style={{ display: 'none' }}>
                {brandDNA.company.name}
              </span>
            </Link>

            {brandDNA.address.full && (
              <address className="not-italic font-body text-sm text-neutral leading-relaxed">
                {brandDNA.address.full}
              </address>
            )}

            <a
              href={brandDNA.contact.phoneTelLink}
              className="font-body font-medium text-sm text-accent hover:text-accent-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              aria-label={`Call ${brandDNA.contact.phone}`}
            >
              {brandDNA.contact.phone}
            </a>

            {brandDNA.contact.email && (
              <a
                href={`mailto:${brandDNA.contact.email}`}
                className="font-body text-sm text-neutral hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              >
                {brandDNA.contact.email}
              </a>
            )}

            {brandDNA.company.licenseNumber && (
              <p className="font-body text-xs text-neutral">
                Lic. #{brandDNA.company.licenseNumber}
              </p>
            )}
          </div>

          {/* Col 2 - Services */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-accent mb-4">
              Our Services
            </h3>
            {(() => { const services = brandDNA.services; return services.length > 0 ? (
              <ul className="flex flex-col gap-2" role="list">
                {services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="font-body text-sm text-neutral hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-body text-sm text-neutral">
                Services listed here
              </p>
            ); })()}
          </div>

          {/* Col 3 - Service Areas */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-accent mb-4">
              Service Areas
            </h3>
            {(() => { const serviceAreas = brandDNA.serviceAreas; const displayAreas = serviceAreas.slice(0, 8); return serviceAreas.length > 0 ? (
              <ul className="flex flex-col gap-2" role="list">
                {displayAreas.map((cityName) => (
                  <li key={cityName}>
                    <Link
                      to={`/areas/${areaSlug(cityName)}`}
                      className="font-body text-sm text-neutral hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
                    >
                      {cityName}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-body text-sm text-neutral">
                Service areas listed here
              </p>
            ); })()}
          </div>

          {/* Col 4 - Mini quote form */}
          <div>
            <h3 className="font-heading font-semibold text-sm text-accent mb-4">
              {brandDNA.copy.footerCta}
            </h3>

            {submitted ? (
              <p className="font-body text-sm text-neutral">
                {brandDNA.copy.formSubtext}
              </p>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
                <label className="sr-only" htmlFor="footer-phone">Phone Number</label>
                <input
                  id="footer-phone"
                  type="tel"
                  name="phone"
                  value={footerForm.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  autoComplete="tel"
                  className="w-full rounded border border-primary-slate bg-primary-slate px-3 py-2 font-body text-sm text-white placeholder-neutral/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                />

                <label className="sr-only" htmlFor="footer-service">Service Needed</label>
                <select
                  id="footer-service"
                  name="service"
                  value={footerForm.service}
                  onChange={handleChange}
                  required
                  className="w-full rounded border border-primary-slate bg-primary-slate px-3 py-2 font-body text-sm text-white focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent"
                >
                  <option value="" disabled>Service Needed</option>
                  {serviceOptions.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                  ))}
                </select>

                <button
                  type="submit"
                  className="w-full rounded bg-accent hover:bg-accent-dark active:bg-accent-dark text-ink font-heading font-bold text-sm py-2.5 transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
                >
                  Get My Free Quote
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-slate mb-6" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-neutral text-center sm:text-left">
            {(() => { const copyrightTpl = brandDNA.copy.copyright; return copyrightTpl ? copyrightTpl.replace('{{year}}', currentYear) : `Copyright ${currentYear} ${brandDNA.company.name}. All rights reserved.`; })()}
          </p>
          <nav aria-label="Legal links" className="flex gap-4">
            <Link
              to="/privacy"
              className="font-body text-xs text-neutral hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="font-body text-xs text-neutral hover:text-white transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              Terms
            </Link>
          </nav>
        </div>

        {/* Credit */}
        {brandDNA.credit.agency && (
          <p className="font-body text-xs text-neutral/50 text-center mt-4">
            Website by{' '}
            {brandDNA.credit.url ? (
              <a
                href={brandDNA.credit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-neutral transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              >
                {brandDNA.credit.agency}
              </a>
            ) : (
              brandDNA.credit.agency
            )}
          </p>
        )}
      </div>
    </footer>
  );
}
