import { Link } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

function StarIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="text-accent"
      aria-hidden="true"
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}

function ReviewCard({ review, index }) {
  const name = review.name || review.author || '';
  const location = review.location || '';
  const text = review.text || review.quote || '';
  const outcomeTag = review.outcome_tag || review.category || null;
  const photoUrl = review.photo_url || null;

  // Generate initials avatar when no photo
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();

  return (
    <article
      className="bg-white rounded-[6px] p-6 flex flex-col gap-4 shadow-card motion-safe:transition-transform motion-safe:duration-300 hover:-translate-y-0.5"
      aria-label={`Review from ${name}`}
    >
      {/* Stars */}
      <div className="flex gap-0.5" role="img" aria-label="5 out of 5 stars">
        {[...Array(5)].map((_, i) => <StarIcon key={i} />)}
      </div>

      {/* Quote text */}
      <blockquote className="font-body text-[15px] text-ink leading-relaxed flex-1">
        <p>{text}</p>
      </blockquote>

      {/* Author row */}
      <footer className="flex items-center gap-3">
        {photoUrl ? (
          <img
            src={photoUrl}
            alt={name}
            className="w-12 h-12 rounded-full object-cover shrink-0"
            loading="lazy"
            width="48"
            height="48"
          />
        ) : (
          <div
            className="w-12 h-12 rounded-full bg-primary-slate flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <span className="font-heading font-bold text-sm text-white">
              {initials}
            </span>
          </div>
        )}

        <div>
          <p className="font-heading font-semibold text-sm text-ink">{name}</p>
          {location && (
            <p className="font-body text-xs text-neutral-dim">{location}</p>
          )}
        </div>

        {/* Outcome tag */}
        {outcomeTag && (
          <span className="ml-auto font-body font-medium text-xs bg-primary text-white px-2 py-0.5 rounded whitespace-nowrap">
            {outcomeTag}
          </span>
        )}
      </footer>
    </article>
  );
}

export default function Reviews({ limit = 6, showSeeAll = true }) {
  const items = brandDNA.reviews.items.slice(0, limit);

  return (
    <section
      className="bg-silver py-section-gap lg:py-section-gap-lg"
      aria-labelledby="reviews-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="reviews-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-ink text-center mb-10"
        >
          {brandDNA.copy.reviews.heading}
        </h2>

        {items.length > 0 ? (
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {items.map((review, idx) => (
              <li key={idx}>
                <ReviewCard review={review} index={idx} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-center font-body text-neutral-dim">
            {brandDNA.copy.reviews.body}
          </p>
        )}

        {showSeeAll && (
          <div className="mt-8 text-center">
            <Link
              to="/reviews"
              className="font-body font-medium text-sm text-accent-dark underline-offset-2 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              See All Reviews
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
