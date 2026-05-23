import brandDNA from '../config/brand-dna';

/**
 * MobileCTABar - fixed bottom bar, accent bg, tap-to-call.
 * Visible on mobile only (hidden at md breakpoint and above).
 * The entire bar is a single <a href="tel:..."> element.
 * 56px tall per spec. Adds 56px bottom padding to body via CSS class applied
 * in the page shell (HomePage renders this outside <main>).
 */
export default function MobileCTABar() {
  return (
    <a
      href={brandDNA.contact.phoneTelLink}
      className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-center gap-3 h-14 bg-accent md:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
      aria-label={`Tap to call ${brandDNA.contact.phone}`}
    >
      {/* Phone handset icon */}
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-ink shrink-0"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.61 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.69a16 16 0 0 0 6.29 6.29l1.06-.95a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      <span className="font-heading font-bold text-base text-ink">
        {brandDNA.copy.mobileCallLabel}
      </span>
      <span className="font-body font-semibold text-base text-ink tabular-nums">
        {brandDNA.contact.phone}
      </span>
    </a>
  );
}
