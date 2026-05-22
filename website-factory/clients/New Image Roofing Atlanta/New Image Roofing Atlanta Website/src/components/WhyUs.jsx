import brandDNA from '../config/brand-dna';

/**
 * Default differentiator icons — used when brandDNA.why_choose_us entries
 * do not supply an iconPath. Four niche-appropriate defaults.
 */
function Icon247({ className }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function IconCertified({ className }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <circle cx="12" cy="8" r="6" />
      <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
  );
}

function IconWarranty({ className }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <polyline points="9 12 11 14 15 10" />
    </svg>
  );
}

function IconInsurance({ className }) {
  return (
    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

const DEFAULT_DIFFERENTIATORS = [
  {
    icon: Icon247,
    title: '24/7 Emergency Response',
    body: 'We answer the phone any hour. Storm hits at midnight and we are on our way.',
  },
  {
    icon: IconCertified,
    title: 'GAF Master Elite Certified',
    body: 'Top 3% of roofing contractors in the US. Only the best earn this credential.',
  },
  {
    icon: IconWarranty,
    title: '25-Year Workmanship Warranty',
    body: 'We stand behind every job with a warranty that protects you for decades.',
  },
  {
    icon: IconInsurance,
    title: 'We Handle the Insurance Claim',
    body: 'We document damage, file your claim, and work directly with your insurer.',
  },
];

export default function WhyUs() {
  const whyChooseUs = brandDNA.why_choose_us;
  const items =
    whyChooseUs && whyChooseUs.length > 0
      ? whyChooseUs.slice(0, 4).map((title, i) => ({
          title,
          body: DEFAULT_DIFFERENTIATORS[i]?.body ?? '',
          icon: DEFAULT_DIFFERENTIATORS[i]?.icon ?? Icon247,
        }))
      : DEFAULT_DIFFERENTIATORS;

  return (
    <section
      className="bg-primary py-section-gap lg:py-section-gap-lg"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="why-us-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-white text-center mb-10"
        >
          {brandDNA.copy.whyChoose.heading}
        </h2>

        <ul
          className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          role="list"
        >
          {items.map((item, idx) => {
            const IconComponent = item.icon ?? Icon247;
            return (
              <li key={idx} className="flex flex-col items-center text-center gap-4">
                <IconComponent className="text-accent shrink-0" />
                <h3 className="font-heading font-bold text-lg text-white">
                  {item.title}
                </h3>
                {item.body && (
                  <p className="font-body text-sm text-neutral">
                    {item.body}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
