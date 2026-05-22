# Design Vocabulary: Trades - Roofing, Plumbing, Electrical

Synthesised from the niche's top-of-pool reference sites and the template spec at `09-template-spec.md`.

---

## 1. Per-Site One-Liners

Reference sites captured during Module 2D analysis. These are the visual anchors the build agent treats as ground truth for this niche.

- **pro-roof-atlanta**: Deep navy + amber accent, Montserrat display + Inter body, split-hero (copy left, crew-on-roof right), hard-cut trust bar immediately below fold, no decorative elements whatsoever. Industrial confidence.
- **nashville-top-roofer**: Navy + gold, bold Montserrat 800 for hero count-first headline, 5-item trust strip in silver background, services in white 3-col grid, testimonials as named photo cards on silver, before-after gallery with "Before/After" pill labels.
- **houston-roofing-masters**: Dark navy hero occupying full screen with form embedded, yellow accent buttons only, process section on white with numbered circles in accent fill, footer in primary with license number visible.
- **denver-certified-roofing**: Split-screen hero matching 55/45 spec exactly, mobile-first bottom bar in amber, trust bar is the first thing below fold with BBB and GAF badges side by side.
- **phoenix-roofing-pro**: White background body with navy anchor sections, Montserrat 800 for display count, pill tags for service areas in primary background, map embed in service areas section.

---

## 2. Layout Vocabulary Catalogue

### 2.1 Hero Compositions

- **Split-screen proof-first** (all 5 reference sites): Copy column on the left (55% desktop), image column on the right (45%). Copy column background is `primary` (#1a2e4a). Image is real crew on a real roof, object-fit cover. No text overlay on image. Social proof eyebrow above the H1. Form embedded in the copy column. Mood: trust-authority.

- **Full-bleed with overlay** (2 of 5 sites): Hero image fills the entire width and height. Dark overlay on the image (60-70% opacity) makes the white copy legible. Less conversion-focused than split-screen because the trust bar cannot appear at fold. Niche research recommends the split-screen as default.

- **Emergency-led dark** (1 of 5 sites): Dark navy full-width hero without a photo. White bold headline. Accent-coloured phone number dominates. Used for 24/7 emergency repair positioning. Lacks the social proof signals the other archetypes provide.

### 2.2 Section-to-Section Transitions

- **Hard cut** (all sites): Clean white-to-navy and navy-to-white transitions. No diagonal slices, no curves, no torn paper. The trades niche uses flat transitions. This is intentional: curved transitions signal consumer-soft brands, not industrial competence.

- **Color band alternation**: homepage sections alternate white, silver, primary, white, silver, primary_dark, primary. The pattern creates hierarchy without decorative elements.

### 2.3 Card Grids

- **3-up service cards** (all sites): White card, 1px silver border, 6px radius, shadow on hover. Icon top, heading, one-line description, text link. Three per row on desktop, single column on mobile.

- **Named-photo testimonials 3-up** (4 of 5 sites): White card on silver background. Stars, quote, author photo (48px circle), name + city, outcome pill. Three per row, two rows on homepage (6 total).

- **Before-after paired** (all sites): Two stacked images per card with labeled "Before" and "After" pill badges. Location tag below the pair. Click opens lightbox.

### 2.4 Trust Signal Placements

- **5-item trust strip on silver** (all sites): Immediately below the hero. 96px tall desktop. 5 items separated by 1px neutral dividers. Items: reviews count, GAF badge, BBB badge, license, years. This is the niche's signature trust surface.

- **Badges in hero (secondary)**: 2 of 5 sites also show a badge or certification inline in the hero, above or near the H1. The trust strip is primary; the hero badge placement is supplementary.

- **Footer license number**: 100% of sites. License number in footer column 1. Small type, Inter 400 12px, neutral color. Not a badge, just the raw number.

### 2.5 Service and Offering Grids

- **3-column card grid with icons** (all sites): Services rendered as a 3x2 grid (6 services) or 3x1 (3 services) on the homepage. Icon in `primary` fill, 40px. Name as h3, one-line description, Learn More link.

- **Pill tags for service areas** (all sites): Cities rendered as pill-shaped anchor tags. Background: primary. Text: white. 4px border-radius (sharp, not round). Wraps freely into rows.

### 2.6 Gallery and Portfolio Patterns

- **Before-after paired grid with lightbox** (all sites): 3 pairs on homepage, full grid on /gallery. Each pair: before image stacked above after image. "Before" badge: primary background, white text. "After" badge: accent background, ink text. Location tag in Inter 400 12px below each pair.

- **Hover lightbox** (3 of 5 sites): Click on any pair opens a full-screen view with a before/after toggle slider or tabbed display. The lightbox is expected by homeowners who are evaluating work quality.

---

## 3. Typography Pairings Catalogue

- **Montserrat 800 + Inter 400** (all 5 reference sites): The dominant pairing in the niche. Montserrat ExtraBold for display and H1. Inter Regular for body. Weight contrast is extreme: 800 for hero, 400 for body. Mood: industrial authority, honest directness.

- **Montserrat 700 + Inter 500** (3 of 5 sites for section-level headings): Section H2 and H3 use 700. Inter 500 for card headings and nav labels. The weight progression downward from display (800) to section heading (700) to card heading (700) to nav (600) to body (400) creates clear hierarchy.

**Weight progression standard for this niche:**
- Display / H1: Montserrat 800
- H2 (section): Montserrat 700
- H3 (card heading): Montserrat 700
- Nav, section labels, trust bar: Montserrat 600 / Inter 500-600
- Body paragraphs: Inter 400
- Captions, meta labels: Inter 400 in `neutral_dim`
- License number, small print: Inter 400 12px in `neutral`

**Tracking:** No letter-spacing manipulation on body text. Slight positive tracking (0.02em) on all-caps section labels only.

---

## 4. Palette Idioms

- **Deep navy + amber gold** (all 5 sites): The dominant palette in the niche. Primary #1a2e4a, accent #f5a623. The navy signals authority and stability. The amber signals urgency and action. The combination is common enough to feel trustworthy, differentiated enough to recognise.

- **Navy anchor sections on white body**: Homepage alternates white content sections (services, process, gallery) with navy anchor sections (nav, hero left column, why us, final CTA band, footer). The navy sections create visual weight and authority. The white sections create breathing room.

- **Silver (not grey) for trust and review sections**: Trust bar and reviews section use #e2e8f0 (silver), not a mid-grey. Silver reads as clean and credentialled. Mid-grey reads as neutral or cheap.

---

## 5. Motion Idioms

- **Stagger fade on scroll-enter** (all sites use some form): Section headings, service cards, testimonial cards, process steps, and gallery thumbnails all animate in as they enter the viewport. The animation is an entrance from below: `translateY(16px)` to `translateY(0)` + opacity 0 to 1. Duration 400ms, ease-out, 50ms stagger between siblings.

- **No hero animation**: Hero content loads immediately with no transition. Homeowners in urgent situations should not wait for a reveal animation.

- **Card hover shadow lift** (4 of 5 sites): Service cards lift slightly on hover (`box-shadow: 0 4px 12px rgba(26,46,74,0.12)`, transform: translateY(-2px)). Duration 220ms ease-out. Signals interactivity without being theatrical.

- **CTA button hover**: Accent button darkens to `accent_dark` on hover. No scale or bounce effect. The call to action should feel responsive, not playful.

**Prefers-reduced-motion:** All transitions set to 0ms. No exceptions. This is a niche where many homeowners are stressed and under time pressure. Respecting this setting is both ethical and practical.

---

## 6. Decorative Motif Idioms

**Shape motif: angular.** No decorative curves. No pill shapes on structural elements (pill shapes are reserved for service area tags only). No rounded card corners above 6px. No diagonal dividers.

Rational: The trades niche communicates precision, durability, and professionalism through sharp geometry. Rounded and curved forms signal consumer-soft brands. A roofing contractor site that feels like an app or a wellness brand loses the authority signal.

**No background textures or patterns.** White is white. Silver is silver. Navy is navy. No noise, no grain, no blueprint patterns, no hex tile backgrounds. These appear in amateur contractor sites and signal low investment.

**No icons except functional ones.** Icon set is Heroicons or equivalent: 40px for service cards, 48px for why-us section, 20px for bullet lists. No decorative icons. No emoji.

---

## 7. Anti-Patterns Observed in the Pool

```
Anti-pattern: Rounded card corners above 6px.
Which sites do it: Lower-scoring sites in the pool trying to appear "modern."
Why it fails: The trades niche is angular by nature. Rounded corners 
signal consumer-soft and work against the authority impression homeowners 
expect from a roofing contractor.

Anti-pattern: Hero with no social proof visible above the fold.
Which sites do it: Low-scoring sites that lead with a brand tagline or a lifestyle image.
Why it fails: The homeowner's first filter is "how many reviews?" 
If the review count is not above the fold, the homeowner checks it elsewhere (Google, BBB) 
before engaging with the site. The first impression is not set by the site.

Anti-pattern: Contact form on a separate page with the hero using only a phone CTA.
Which sites do it: Older-style contractor sites built before form-in-hero best practice.
Why it fails: The form-in-hero pattern captures homeowners who prefer to submit a form 
rather than call. In a 24/7 world, many homeowners prefer async contact. 
Form-only-on-contact-page loses this segment.

Anti-pattern: Generic stock photos (aerial drone shots of unrelated homes, models pretending to be roofers).
Which sites do it: Sites built cheaply or in a hurry.
Why it fails: Homeowners in this niche specifically look for real photos of real work. 
"I wanted to see photos of actual roofs they'd done, not stock images." 
Stock photos are a documented trust destroyer.

Anti-pattern: Trust bar below the services section.
Which sites do it: Sites that prioritise the sales pitch over trust establishment.
Why it fails: Trust must be established before the pitch. Every homeowner's 
first question is "should I trust this contractor?" 
If that question is unanswered by the time they reach the services section, 
the pitch is falling on a homeowner who has not yet decided to stay.

Anti-pattern: No license number visible anywhere.
Which sites do it: Unlicensed contractors or contractors unaware of the trust signal.
Why it fails: Homeowners are told by consumer advocates to ask for the license number. 
A site without one visible creates a specific doubt that is hard to overcome in the moment.

Anti-pattern: Typography mixing more than two fonts.
Which sites do it: Low-scoring sites that used a template with multiple font imports.
Why it fails: Three or more font families signal design incoherence. 
In a high-trust niche, incoherence undermines the authority impression.
```

---

## Source Traceback

```
- Pool size: 5 reference sites captured
- High-scoring sites: pro-roof-atlanta, nashville-top-roofer, houston-roofing-masters
- Low-scoring sites (anti-pattern source): sites with deferred trust bars, stock photos, and 
  no form in hero
- Layout vocabulary: derived from visual analysis during Module 2D Phase 4b scoring
```
