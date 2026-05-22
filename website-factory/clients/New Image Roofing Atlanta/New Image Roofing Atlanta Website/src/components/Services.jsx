import { Link } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

function DefaultServiceIcon({ className }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

export default function Services() {
  const services = brandDNA.services;

  return (
    <section
      className="bg-white py-section-gap lg:py-section-gap-lg"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="services-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-ink text-center mb-10"
        >
          {brandDNA.copy.services.heading}
        </h2>

        {services.length > 0 ? (
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {services.map((service) => (
              <li key={service.slug}>
                <article className="group h-full flex flex-col gap-3 rounded-[6px] border border-silver bg-white p-6 transition-shadow motion-safe:duration-300 hover:shadow-[0_4px_12px_rgba(26,46,74,0.12)] focus-within:ring-2 focus-within:ring-accent">
                  {/* Icon */}
                  {service.iconPath ? (
                    <img
                      src={service.iconPath}
                      alt=""
                      className="w-10 h-10 object-contain text-primary"
                      aria-hidden="true"
                      width="40"
                      height="40"
                    />
                  ) : (
                    <DefaultServiceIcon className="text-primary shrink-0" />
                  )}

                  {/* Service name */}
                  <h3 className="font-heading font-bold text-lg text-ink">
                    {service.name}
                  </h3>

                  {/* Description */}
                  {service.body && (
                    <p className="font-body text-sm text-neutral-dim flex-1">
                      {service.body}
                    </p>
                  )}

                  {/* Learn More link */}
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center gap-1.5 font-body font-medium text-sm text-accent-dark underline-offset-2 hover:underline transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded mt-auto"
                    aria-label={`Learn more about ${service.name}`}
                  >
                    Learn More
                    <ArrowIcon />
                  </Link>
                </article>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center font-body text-neutral-dim">
            {brandDNA.copy.services.body}
          </p>
        )}
      </div>
    </section>
  );
}
