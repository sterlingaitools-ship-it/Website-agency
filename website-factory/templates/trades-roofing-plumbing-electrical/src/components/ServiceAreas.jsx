import { Link } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

/**
 * ServiceAreas — pill tag list + embedded Google Map placeholder.
 * 60/40 split on desktop; map hidden on mobile.
 * serviceAreas[] is an array of plain strings (city names) per the shape contract.
 * City slugs are derived by lowercasing and replacing spaces with hyphens.
 */
function citySlug(cityName) {
  return cityName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export default function ServiceAreas() {
  const areas = brandDNA.serviceAreas;
  const mapsEmbedUrl = brandDNA.contact.mapsEmbedUrl;

  return (
    <section
      className="bg-silver py-section-gap lg:py-section-gap-lg"
      aria-labelledby="service-areas-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="service-areas-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-ink text-center mb-10"
        >
          {brandDNA.copy.serviceAreas.heading}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Left — pill tags (60%) */}
          <div className="w-full lg:w-3/5">
            {areas.length > 0 ? (
              <ul
                className="flex flex-wrap gap-2"
                role="list"
                aria-label="Served cities"
              >
                {areas.map((cityName) => (
                  <li key={cityName}>
                    <Link
                      to={`/areas/${citySlug(cityName)}`}
                      className="inline-block bg-primary text-white font-body font-medium text-sm px-4 py-2 rounded hover:bg-primary-slate transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                    >
                      {cityName}
                    </Link>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="font-body text-neutral-dim">
                {brandDNA.copy.serviceAreas.body}
              </p>
            )}
          </div>

          {/* Right — Google Maps embed (40%), hidden on mobile */}
          <div className="hidden lg:block w-full lg:w-2/5">
            {mapsEmbedUrl ? (
              <iframe
                src={mapsEmbedUrl}
                title={`Map showing ${brandDNA.company.name} service area`}
                className="w-full h-64 lg:h-72 rounded border border-neutral/30"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Google Maps embed showing service area"
              />
            ) : (
              <div
                className="w-full h-64 lg:h-72 rounded border border-neutral/30 bg-silver/70 flex items-center justify-center"
                aria-label="Map placeholder"
              >
                <p className="font-body text-sm text-neutral-dim text-center px-4">
                  Map will appear here once configured
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
