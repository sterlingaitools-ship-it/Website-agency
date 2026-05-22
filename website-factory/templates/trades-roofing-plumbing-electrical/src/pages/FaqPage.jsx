import { useState } from 'react';
import NavBar from '../components/NavBar';
import MobileCTABar from '../components/MobileCTABar';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import brandDNA from '../config/brand-dna';

const FAQ_CATEGORIES = [
  { id: 'general', label: 'General' },
  { id: 'roof-replacement', label: 'Roof Replacement' },
  { id: 'storm-damage', label: 'Storm Damage and Insurance' },
  { id: 'cost', label: 'Cost and Financing' },
  { id: 'warranties', label: 'Warranties' },
];

/**
 * FAQ accordion item.
 */
function AccordionItem({ item, index, isOpen, onToggle }) {
  return (
    <div className="border border-silver rounded">
      <dt>
        <button
          type="button"
          className="w-full flex items-center justify-between px-5 py-4 text-left font-heading font-semibold text-base text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent rounded"
          aria-expanded={isOpen}
          aria-controls={`faq-answer-${index}`}
          onClick={onToggle}
        >
          <span>{item.q}</span>
          <span className="ml-4 shrink-0 text-neutral-dim text-xl leading-none" aria-hidden="true">
            {isOpen ? '−' : '+'}
          </span>
        </button>
      </dt>
      <dd
        id={`faq-answer-${index}`}
        className={`overflow-hidden transition-all motion-safe:duration-300 ${isOpen ? 'max-h-96' : 'max-h-0'}`}
      >
        <p className="px-5 pb-5 font-body text-sm text-neutral-dim leading-relaxed">
          {item.a}
        </p>
      </dd>
    </div>
  );
}

export default function FaqPage() {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openIdx, setOpenIdx] = useState(null);

  const allFaqs = brandDNA.faq;

  // Filter by active category, or show all if no category matches
  const filtered = allFaqs.filter(
    (item) => !item.category || item.category === activeCategory
  );
  const displayItems = filtered.length > 0 ? filtered : allFaqs;

  return (
    <>
      <NavBar />
      <main className="pb-14 md:pb-0">
        {/* FAQ Hero */}
        <section
          className="bg-silver pt-[72px] py-14"
          aria-label="FAQ page header"
        >
          <div className="mx-auto max-w-2xl px-6 md:px-8 text-center">
            <h1 className="font-heading font-extrabold text-4xl lg:text-5xl text-ink mb-4">
              {brandDNA.copy.faq.heading}
            </h1>
            <p className="font-body text-lg text-neutral-dim">
              {brandDNA.copy.faq.label}
            </p>
          </div>
        </section>

        {/* Category tabs */}
        <nav
          className="bg-white border-b border-silver"
          aria-label="FAQ categories"
        >
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <ul className="flex gap-0 overflow-x-auto" role="list">
              {FAQ_CATEGORIES.map((cat) => (
                <li key={cat.id}>
                  <button
                    type="button"
                    className={`px-4 py-3 font-body font-medium text-sm border-b-2 whitespace-nowrap transition-colors motion-safe:duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent ${
                      activeCategory === cat.id
                        ? 'border-accent text-ink'
                        : 'border-transparent text-neutral-dim hover:text-ink hover:border-neutral/30'
                    }`}
                    aria-current={activeCategory === cat.id ? 'true' : undefined}
                    onClick={() => {
                      setActiveCategory(cat.id);
                      setOpenIdx(null);
                    }}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        {/* FAQ accordion list */}
        <section
          className="bg-white py-section-gap"
          aria-labelledby="faq-list-heading"
        >
          <div className="mx-auto max-w-3xl px-6 md:px-8">
            <h2
              id="faq-list-heading"
              className="sr-only"
            >
              {FAQ_CATEGORIES.find((c) => c.id === activeCategory)?.label} Questions
            </h2>

            {displayItems.length > 0 ? (
              <dl className="flex flex-col gap-2">
                {displayItems.map((item, idx) => {
                  const handleToggle = openIdx === idx
                    ? function() { setOpenIdx(null); }
                    : function() { setOpenIdx(idx); };
                  return (
                    <AccordionItem
                      key={idx}
                      item={item}
                      index={idx}
                      isOpen={openIdx === idx}
                      onToggle={handleToggle}
                    />
                  );
                })}
              </dl>
            ) : (
              <p className="text-center font-body text-neutral-dim">
                No questions found for this category.
              </p>
            )}
          </div>
        </section>

        <FinalCTA />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
