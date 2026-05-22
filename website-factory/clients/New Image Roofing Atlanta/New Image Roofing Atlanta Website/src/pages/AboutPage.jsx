import { Helmet } from 'react-helmet-async';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import TrustBar from '../components/TrustBar';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import brandDNA from '../config/brand-dna';
import { pageTitle, canonical } from '../utils/seo';

/**
 * AboutHero — simple centered header section, inline (not a separate component).
 * Full-width, team photo background with dark overlay.
 */
function AboutHero() {
  const heading = `${brandDNA.company.name}: Trusted Roofing Contractor in ${brandDNA.address.city}`;

  return (
    <section
      className="relative flex items-center justify-center min-h-[320px] bg-primary pt-[72px]"
      aria-label="About page header"
    >
      {/* Team photo background when available */}
      {brandDNA.team_group_photo && (
        <>
          <img
            src={`/team/${brandDNA.team_group_photo}`}
            alt={`${brandDNA.company.name} team`}
            className="absolute inset-0 w-full h-full object-cover object-center"
            loading="eager"
            width="1440"
            height="320"
          />
          <div className="absolute inset-0 bg-ink/70" aria-hidden="true" />
        </>
      )}

      <div className="relative z-10 text-center px-6 md:px-8 py-16">
        <h1 className="font-heading font-extrabold text-3xl lg:text-5xl text-white">
          {heading}
        </h1>
      </div>
    </section>
  );
}

/**
 * Founder story block — 50/50 split.
 */
function StoryBlock() {
  return (
    <section className="bg-white py-section-gap" aria-labelledby="story-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Founder photo */}
          <div className="w-full lg:w-1/2">
            <div className="aspect-square max-w-sm mx-auto lg:mx-0 bg-silver rounded overflow-hidden">
              {(() => { const founders = brandDNA.team.founders; return founders.length > 0 && founders[0].photoUrl ? (
                <img
                  src={founders[0].photoUrl}
                  alt={brandDNA.team.founder.displayName}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  width="400"
                  height="400"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="font-body text-neutral-dim text-sm text-center px-4">
                    Founder photo
                  </span>
                </div>
              ); })()}
            </div>
          </div>

          {/* Story copy */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            <p className="font-body font-medium text-sm text-accent uppercase tracking-wide">
              {brandDNA.copy.founder.label}
            </p>
            <h2
              id="story-heading"
              className="font-heading font-bold text-3xl text-ink"
            >
              {brandDNA.copy.founder.heading}
            </h2>
            <p className="font-body text-base text-neutral-dim leading-relaxed">
              {brandDNA.copy.founder.para1}
            </p>
            <p className="font-body text-base text-neutral-dim leading-relaxed">
              {brandDNA.copy.founder.para2}
            </p>

            {brandDNA.copy.founder.vision && (
              <div>
                <p className="font-heading font-semibold text-sm text-ink mb-1">
                  {brandDNA.copy.founder.visionLabel}
                </p>
                <p className="font-body text-base text-neutral-dim italic">
                  {brandDNA.copy.founder.vision}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

/**
 * Certification row — horizontal badge display.
 */
function CertificationRow() {
  const trustBadges = brandDNA.trust_badges;
  if (trustBadges.length === 0) return null;

  return (
    <section className="bg-silver py-12" aria-label="Certifications and accreditations">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2 className="font-heading font-bold text-2xl text-ink text-center mb-8">
          Our Certifications
        </h2>
        <ul
          className="flex flex-wrap justify-center gap-8 items-center"
          role="list"
        >
          {trustBadges.map((badge) => (
            <li key={badge.filename}>
              <img
                src={`/badges/${badge.filename}`}
                alt={badge.alt}
                className="max-h-16 w-auto object-contain"
                loading="lazy"
                width="100"
                height="64"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/**
 * Team grid — photo + name + role cards.
 */
function TeamGrid() {
  const teamMembers = brandDNA.team_members;
  if (teamMembers.length === 0) return null;

  return (
    <section className="bg-white py-section-gap" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="team-heading"
          className="font-heading font-bold text-3xl text-ink text-center mb-10"
        >
          Meet the Team
        </h2>
        <ul
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          role="list"
        >
          {teamMembers.map((member) => (
            <li key={member.filename || member.name}>
              <article className="flex flex-col items-center text-center gap-3">
                {member.filename ? (
                  <img
                    src={`/team/${member.filename}`}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover"
                    loading="lazy"
                    width="96"
                    height="96"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full bg-primary-slate flex items-center justify-center">
                    <span className="font-heading font-bold text-xl text-white">
                      {member.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </span>
                  </div>
                )}
                <div>
                  <p className="font-heading font-semibold text-sm text-ink">
                    {member.name}
                  </p>
                  <p className="font-body text-xs text-neutral-dim">
                    {member.role}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function AboutPage() {
  const title = pageTitle('About Us');
  const desc = `Learn about ${brandDNA.company.name}, Atlanta's trusted roofing contractor since 2012. ${brandDNA.reviews.googleCount} five-star reviews. Owens Corning Platinum Preferred.`;
  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="canonical" href={canonical('/about')} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <NavBar />
      <main className="pb-14 md:pb-0">
        <AboutHero />
        <StoryBlock />
        <CertificationRow />
        <TeamGrid />
        <TrustBar />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
