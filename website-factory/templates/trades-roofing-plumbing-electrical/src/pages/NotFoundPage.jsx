import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import Footer from '../components/Footer';
import brandDNA from '../config/brand-dna';

export default function NotFoundPage() {
  return (
    <>
      <NavBar />
      <main className="pb-14 md:pb-0 min-h-[60vh] flex flex-col items-center justify-center pt-[72px]">
        <section
          className="flex flex-col items-center justify-center gap-6 py-24 px-6 text-center"
          aria-label="Page not found"
        >
          <p
            className="font-heading font-extrabold text-8xl text-silver tabular-nums"
            aria-hidden="true"
          >
            404
          </p>

          <h1 className="font-heading font-bold text-3xl lg:text-4xl text-ink">
            Page Not Found
          </h1>

          <p className="font-body text-base text-neutral-dim max-w-md">
            The page you are looking for does not exist. Return to the homepage or call us directly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link
              to="/"
              className="inline-block bg-accent hover:bg-accent-dark text-ink font-heading font-bold text-base px-8 py-3 rounded transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-ink"
            >
              {brandDNA.copy.buttonText}
            </Link>
            <a
              href={brandDNA.contact.phoneTelLink}
              className="inline-block font-heading font-bold text-base text-primary hover:text-primary-dark py-3 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
              aria-label={`Call us at ${brandDNA.contact.phone}`}
            >
              {brandDNA.contact.phone}
            </a>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
