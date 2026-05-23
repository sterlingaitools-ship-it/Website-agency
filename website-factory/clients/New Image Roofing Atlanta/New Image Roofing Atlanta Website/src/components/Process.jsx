import brandDNA from '../config/brand-dna';

/**
 * Default process steps - used when brandDNA.process_steps is empty.
 * Matches niche playbook defaults from the wireframe spec.
 */
const DEFAULT_STEPS = [
  {
    n: 1,
    title: 'Free Inspection',
    body: 'We assess your roof at no cost and no obligation. Honest findings, clear options.',
  },
  {
    n: 2,
    title: 'Custom Quote',
    body: 'We provide a detailed, transparent quote within 24 hours. No hidden fees.',
  },
  {
    n: 3,
    title: 'Expert Installation',
    body: 'Our certified crew completes the job on time and on budget. Cleanup included.',
  },
];

export default function Process() {
  const processSteps = brandDNA.process_steps;
  const steps =
    processSteps && processSteps.length > 0
      ? processSteps.slice(0, 3)
      : DEFAULT_STEPS;

  return (
    <section
      className="bg-white py-section-gap lg:py-section-gap-lg"
      aria-labelledby="process-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="process-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-ink text-center mb-10"
        >
          {brandDNA.copy.process.heading}
        </h2>

        {/* Desktop: horizontal row with dotted connectors */}
        <div className="hidden md:flex items-start justify-between gap-0 relative">
          {/* Dotted connector line behind the steps */}
          <div
            className="absolute top-6 left-[calc(16.67%)] right-[calc(16.67%)] h-px border-t-2 border-dashed border-neutral/50 z-0"
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <article
              key={idx}
              className="relative z-10 flex flex-col items-center text-center w-1/3 px-6 motion-safe:transition-transform motion-safe:duration-300"
            >
              {/* Step number circle */}
              <div
                className="flex items-center justify-center w-12 h-12 rounded-full bg-accent mb-5 shrink-0"
                aria-hidden="true"
              >
                <span className="font-heading font-extrabold text-xl text-ink tabular-nums">
                  {step.n}
                </span>
              </div>

              <h3 className="font-heading font-bold text-lg text-ink mb-2">
                {step.title}
              </h3>
              <p className="font-body text-sm text-neutral-dim">
                {step.body}
              </p>
            </article>
          ))}
        </div>

        {/* No Obligation badge */}
        {brandDNA.copy.process.badgeText && (
          <div className="flex justify-center mt-8">
            <div className="inline-flex items-center gap-2 bg-accent/10 border border-accent/30 rounded-full px-5 py-2">
              <span className="font-heading font-bold text-sm text-accent-dark tabular-nums">
                {brandDNA.copy.process.badgeText}
              </span>
              {brandDNA.copy.process.badgeSubtext && (
                <span className="font-body text-xs text-neutral-dim">
                  {brandDNA.copy.process.badgeSubtext}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Mobile: vertical stack with left dotted line */}
        <ol className="flex flex-col gap-8 md:hidden relative pl-8">
          {/* Vertical dotted connector */}
          <div
            className="absolute left-3 top-6 bottom-6 w-px border-l-2 border-dashed border-neutral/50"
            aria-hidden="true"
          />

          {steps.map((step, idx) => (
            <li key={idx} className="relative flex gap-5 items-start">
              {/* Step number circle */}
              <div className="flex items-center justify-center w-12 h-12 rounded-full bg-accent shrink-0 -ml-8 z-10">
                <span className="font-heading font-extrabold text-xl text-ink tabular-nums">
                  {step.n}
                </span>
              </div>

              <div className="pt-1">
                <h3 className="font-heading font-bold text-lg text-ink mb-1">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-neutral-dim">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
