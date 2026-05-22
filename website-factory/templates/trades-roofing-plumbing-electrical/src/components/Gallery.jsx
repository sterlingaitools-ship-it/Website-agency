import { useState } from 'react';
import { Link } from 'react-router-dom';
import brandDNA from '../config/brand-dna';

function CloseIcon() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

/**
 * Simple state-based lightbox — no external library.
 * Shows a before/after toggle for the selected project.
 */
function Lightbox({ project, onClose }) {
  const [showing, setShowing] = useState('after');

  // Trap focus when open
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  const beforeSrc = project.filename ? `/work/${project.filename}` : project.before_url;
  const afterSrc = project.after_filename ? `/work/${project.after_filename}` : project.after_url;
  const activeSrc = showing === 'before' ? beforeSrc : (afterSrc || beforeSrc);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`Project photo: ${project.alt || project.caption || ''}`}
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      tabIndex={-1}
    >
      <div
        className="relative max-w-4xl w-full bg-white rounded-[4px] overflow-hidden shadow-floating"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          type="button"
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded bg-ink/70 text-white hover:bg-ink transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          onClick={onClose}
          aria-label="Close lightbox"
        >
          <CloseIcon />
        </button>

        {/* Image */}
        <img
          src={activeSrc}
          alt={showing === 'before' ? `Before: ${project.alt || ''}` : `After: ${project.alt || ''}`}
          className="w-full max-h-[70vh] object-contain bg-silver"
          width="800"
          height="600"
        />

        {/* Before/after toggle */}
        {(beforeSrc && afterSrc) && (
          <div className="flex border-t border-silver">
            <button
              type="button"
              className={`flex-1 py-3 font-heading font-bold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                showing === 'before'
                  ? 'bg-primary text-white'
                  : 'bg-silver text-ink hover:bg-neutral/20'
              }`}
              onClick={() => setShowing('before')}
            >
              Before
            </button>
            <button
              type="button"
              className={`flex-1 py-3 font-heading font-bold text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                showing === 'after'
                  ? 'bg-accent text-ink'
                  : 'bg-silver text-ink hover:bg-neutral/20'
              }`}
              onClick={() => setShowing('after')}
            >
              After
            </button>
          </div>
        )}

        {/* Caption / location */}
        {(project.caption || project.location) && (
          <div className="px-4 py-3">
            <p className="font-body text-sm text-neutral-dim">
              {project.caption || project.location}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Gallery({ limit = 6, showSeeAll = true }) {
  const [lightboxProject, setLightboxProject] = useState(null);

  const allProjects = brandDNA.previous_projects;
  const projects = allProjects.slice(0, limit);

  const openLightbox = (project) => setLightboxProject(project);
  const closeLightbox = () => setLightboxProject(null);

  return (
    <section
      className="bg-white py-section-gap lg:py-section-gap-lg"
      aria-labelledby="gallery-heading"
    >
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <h2
          id="gallery-heading"
          className="font-heading font-bold text-3xl lg:text-4xl text-ink text-center mb-10"
        >
          {brandDNA.copy.gallery.heading}
        </h2>

        {projects.length > 0 ? (
          <ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            role="list"
          >
            {projects.map((project, idx) => {
              const imgSrc = project.filename ? `/work/${project.filename}` : project.before_url;
              const altText = project.alt || project.caption || `Project ${idx + 1}`;

              return (
                <li key={idx}>
                  <article className="rounded-[6px] overflow-hidden border border-silver shadow-card">
                    {/* Before image + label */}
                    <div className="relative">
                      <span className="absolute top-2 left-2 z-10 font-body font-semibold text-xs bg-primary text-white px-2 py-0.5 rounded">
                        Before
                      </span>
                      <button
                        type="button"
                        className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                        onClick={() => openLightbox(project)}
                        aria-label={`View project: ${altText}`}
                      >
                        <img
                          src={imgSrc}
                          alt={`Before: ${altText}`}
                          className="w-full h-40 object-cover"
                          loading="lazy"
                          width="400"
                          height="160"
                        />
                      </button>
                    </div>

                    {/* After image + label */}
                    {(project.after_filename || project.after_url) && (
                      <div className="relative">
                        <span className="absolute top-2 left-2 z-10 font-body font-semibold text-xs bg-accent text-ink px-2 py-0.5 rounded">
                          After
                        </span>
                        <button
                          type="button"
                          className="block w-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
                          onClick={() => openLightbox(project)}
                          aria-label={`View after photo: ${altText}`}
                        >
                          <img
                            src={
                              project.after_filename
                                ? `/work/${project.after_filename}`
                                : project.after_url
                            }
                            alt={`After: ${altText}`}
                            className="w-full h-40 object-cover"
                            loading="lazy"
                            width="400"
                            height="160"
                          />
                        </button>
                      </div>
                    )}

                    {/* Location tag */}
                    {(project.caption || project.location) && (
                      <div className="px-3 py-2">
                        <p className="font-body text-xs text-neutral-dim">
                          {project.caption || project.location}
                        </p>
                      </div>
                    )}
                  </article>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="text-center font-body text-neutral-dim">
            {brandDNA.copy.gallery.body}
          </p>
        )}

        {showSeeAll && (
          <div className="mt-8 text-center">
            <Link
              to="/gallery"
              className="font-body font-medium text-sm text-accent-dark underline-offset-2 hover:underline transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
            >
              See More Projects
            </Link>
          </div>
        )}
      </div>

      {/* Lightbox overlay */}
      {lightboxProject && (
        <Lightbox project={lightboxProject} onClose={closeLightbox} />
      )}
    </section>
  );
}
