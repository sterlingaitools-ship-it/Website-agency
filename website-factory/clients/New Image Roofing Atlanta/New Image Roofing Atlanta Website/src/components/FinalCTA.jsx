import { Link } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

/**
 * FinalCTA - full-width dark band before the footer.
 * Background: primary-dark. Heading + subhead + CTA button + phone.
 */
export default function FinalCTA() {
  return (
    <section
      className="bg-primary-dark py-16 lg:py-20"
      aria-labelledby="final-cta-heading"
    >
      <div className="mx-auto max-w-3xl px-6 md:px-8 text-center flex flex-col items-center gap-6">
        {/* Heading */}
        <h2
          id="final-cta-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-white"
        >
          {brandDNA.copy.cta.heading}
        </h2>

        {/* Subhead */}
        <p className="font-body text-lg text-neutral">
          {brandDNA.copy.cta.body}
        </p>

        {/* CTA button */}
        <Link
          to="/contact#hero-form"
          className="inline-block bg-accent hover:bg-accent-dark active:bg-accent-dark text-ink font-heading font-bold text-base px-8 py-3 min-w-[200px] rounded transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
        >
          {brandDNA.copy.buttonText}
        </Link>

        {/* Phone */}
        <p className="font-body text-base text-neutral">
          Or call us:{' '}
          <a
            href={brandDNA.contact.phoneTelLink}
            className="font-heading font-bold text-xl text-accent hover:text-accent-light transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            aria-label={`Call us at ${brandDNA.contact.phone}`}
          >
            {brandDNA.contact.phone}
          </a>
        </p>
      </div>
    </section>
  );
}
