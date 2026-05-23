import brandDNA from '../config/brand-dna';

function StarIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
      aria-hidden="true"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-primary"
      aria-hidden="true"
    >
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export default function TrustBar() {
  const trustBadges = brandDNA.trust_badges;
  const gafBadge = trustBadges.find((b) => b.alt && b.alt.toLowerCase().includes('gaf'));
  const bbbBadge = trustBadges.find((b) => b.alt && b.alt.toLowerCase().includes('bbb'));

  const divider = (
    <div className="hidden sm:block w-px self-stretch bg-neutral/30 mx-2" aria-hidden="true" />
  );

  return (
    <section
      className="bg-silver py-5"
      aria-label="Trust indicators"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        {/* Desktop: 5-item horizontal strip */}
        <div className="hidden sm:flex items-center justify-between gap-2 flex-wrap">

          {/* 1 - Google reviews */}
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="font-heading font-bold text-xl text-ink tabular-nums">
              {brandDNA.reviews.googleCount || brandDNA.reviews.googleStat}
            </span>
            <span className="font-body text-xs text-neutral-dim">Google Reviews</span>
          </div>

          {divider}

          {/* 2 - GAF badge */}
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            {gafBadge ? (
              <img
                src={`/badges/${gafBadge.filename}`}
                alt={gafBadge.alt}
                className="max-h-[52px] w-auto object-contain"
                loading="lazy"
                width="80"
                height="52"
              />
            ) : (
              <div className="h-[52px] w-20 flex items-center justify-center rounded bg-silver border border-neutral/30">
                <span className="font-body text-xs text-neutral-dim text-center leading-tight">GAF Certified</span>
              </div>
            )}
            <span className="font-body font-medium text-xs text-neutral-dim">GAF Certified</span>
          </div>

          {divider}

          {/* 3 - BBB badge */}
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            {bbbBadge ? (
              <a
                href={brandDNA.contact.googleMapsUrl || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              >
                <img
                  src={`/badges/${bbbBadge.filename}`}
                  alt={bbbBadge.alt}
                  className="max-h-[52px] w-auto object-contain"
                  loading="lazy"
                  width="80"
                  height="52"
                />
              </a>
            ) : (
              <div className="h-[52px] w-20 flex items-center justify-center rounded bg-silver border border-neutral/30">
                <span className="font-body text-xs text-neutral-dim text-center leading-tight">BBB Accredited</span>
              </div>
            )}
            <span className="font-body font-medium text-xs text-neutral-dim">BBB Accredited</span>
          </div>

          {divider}

          {/* 4 - Licensed & Insured */}
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <ShieldIcon />
            <span className="font-heading font-semibold text-sm text-ink">Licensed &amp; Insured</span>
            {brandDNA.company.licenseNumber && (
              <span className="font-body text-xs text-neutral-dim">
                Lic. #{brandDNA.company.licenseNumber}
              </span>
            )}
          </div>

          {divider}

          {/* 5 - Years serving */}
          <div className="flex flex-col items-center gap-1 px-4 text-center">
            <CalendarIcon />
            <span className="font-heading font-bold text-xl text-primary tabular-nums">
              {brandDNA.company.serviceRegion}
            </span>
            <span className="font-body text-xs text-neutral-dim">
              Serving {brandDNA.address.city}
            </span>
          </div>
        </div>

        {/* Mobile: 2-col grid */}
        <div className="grid grid-cols-2 gap-4 sm:hidden">
          {/* Google reviews */}
          <div className="flex flex-col items-center gap-1 py-3 text-center border-b border-neutral/20">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
            </div>
            <span className="font-heading font-bold text-lg text-ink tabular-nums">
              {brandDNA.reviews.googleCount || brandDNA.reviews.googleStat}
            </span>
            <span className="font-body text-xs text-neutral-dim">Google Reviews</span>
          </div>

          {/* GAF badge */}
          <div className="flex flex-col items-center gap-1 py-3 text-center border-b border-neutral/20">
            {gafBadge ? (
              <img src={`/badges/${gafBadge.filename}`} alt={gafBadge.alt} className="max-h-[44px] w-auto" loading="lazy" width="70" height="44" />
            ) : (
              <span className="font-heading font-semibold text-sm text-ink">GAF Certified</span>
            )}
            <span className="font-body text-xs text-neutral-dim">GAF Certified</span>
          </div>

          {/* BBB badge */}
          <div className="flex flex-col items-center gap-1 py-3 text-center border-b border-neutral/20">
            {bbbBadge ? (
              <img src={`/badges/${bbbBadge.filename}`} alt={bbbBadge.alt} className="max-h-[44px] w-auto" loading="lazy" width="70" height="44" />
            ) : (
              <span className="font-heading font-semibold text-sm text-ink">BBB Accredited</span>
            )}
            <span className="font-body text-xs text-neutral-dim">BBB Accredited</span>
          </div>

          {/* Licensed & Insured */}
          <div className="flex flex-col items-center gap-1 py-3 text-center border-b border-neutral/20">
            <ShieldIcon />
            <span className="font-heading font-semibold text-sm text-ink">Licensed &amp; Insured</span>
            {brandDNA.company.licenseNumber && (
              <span className="font-body text-xs text-neutral-dim">Lic. #{brandDNA.company.licenseNumber}</span>
            )}
          </div>

          {/* Years serving - centered in its own row */}
          <div className="col-span-2 flex flex-col items-center gap-1 py-3 text-center">
            <span className="font-heading font-bold text-lg text-primary">
              {brandDNA.company.serviceRegion}
            </span>
            <span className="font-body text-xs text-neutral-dim">Serving {brandDNA.address.city}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
