# Design Fidelity Checklist
## Niche: trades-roofing-plumbing-electrical

Run this checklist during Stage 10.4a. SSIM scores are computed per region against the niche reference render. Hero and TrustBar are HALT gates — failures on these two regions stop the pipeline.

---

## SSIM Region Table

| Region | Weight | Threshold | Gate |
|---|---|---|---|
| Hero | 0.18 | 0.85 | HALT |
| TrustBar | 0.15 | 0.83 | HALT |
| Reviews | 0.12 | 0.80 | WARN |
| Services | 0.10 | 0.78 | WARN |
| Process | 0.08 | 0.78 | WARN |
| Gallery | 0.08 | 0.75 | WARN |
| NavBar | 0.08 | 0.82 | WARN |
| ServiceAreas | 0.07 | 0.75 | WARN |
| WhyUs | 0.06 | 0.75 | WARN |
| FinalCTA | 0.06 | 0.80 | WARN |
| MobileCTABar | 0.06 | 0.80 | WARN |
| Footer | 0.06 | 0.72 | WARN |
| **Total** | **1.00** | | |

---

## Per-Region Visual Checks

### NavBar

- [ ] Background is primary color (deep navy by default)
- [ ] Logo renders on the left in white variant, max-height 40px
- [ ] Phone number visible on the right in accent color, Montserrat 700
- [ ] Service nav links centered between logo and phone
- [ ] "Free Estimate" CTA is present with accent treatment or underline
- [ ] Sticky: NavBar remains in viewport on scroll (position: sticky; top: 0)

### MobileCTABar (mobile viewport only)

- [ ] Accent (#f5a623) background — full bar
- [ ] Phone icon (20px) left-aligned in the bar
- [ ] "Call Now" label center/left, ink color, Montserrat 700 16px
- [ ] Phone number right or below the label, Inter 600
- [ ] Bar height approximately 56px
- [ ] Renders at the very bottom of the mobile viewport with no gap

### Hero

- [ ] Left column (55%): primary (#1a2e4a) background
- [ ] Right column (45%): full-height image, object-fit cover, no text overlay
- [ ] Review count eyebrow renders above the H1, neutral color, Inter 500 14px
- [ ] H1 headline: Montserrat 800, white, approximately 56px desktop
- [ ] Subhead below H1: Inter 400, neutral, approximately 18px
- [ ] Quote form renders in the left column below the subhead
- [ ] Form has white or light background card, clear visual separation from hero bg
- [ ] Accent CTA button is the most visually dominant element in the form
- [ ] "Or call us:" phone link renders below the form in neutral/small type
- [ ] Mobile: single column, copy above image above form

### TrustBar

- [ ] Immediately below Hero — no other section between them
- [ ] Light grey or silver background (#e2e8f0 or similar), distinct from hero and services
- [ ] 5 items in a horizontal strip on desktop, evenly spaced
- [ ] Each item: icon above text (or badge image above label)
- [ ] Google review count and star rating in item 1
- [ ] GAF badge (or placeholder box) visible in items 2 or 3
- [ ] BBB badge (or placeholder box) visible
- [ ] Mobile: 2-column grid, items wrap cleanly

### Services

- [ ] 3-column grid desktop, single column mobile
- [ ] Each card: icon top-center, service name as h3, description text, "Learn More" link
- [ ] Cards have consistent height (min-height or equal flex columns)
- [ ] Section background is white or very light
- [ ] Section heading: Montserrat 700, primary color

### WhyUs

- [ ] 4 equal-width columns desktop
- [ ] Each column: icon (accent color), heading (Montserrat 700), 2-line body (Inter 400)
- [ ] 2-column layout at md breakpoint
- [ ] Single column at sm breakpoint
- [ ] Background differentiates from Services (light silver, or primary with white text)

### Process

- [ ] 3 steps in a horizontal flow desktop (step number, heading, description)
- [ ] Step numbers displayed prominently — large, accent color
- [ ] "No Obligation" badge or pill tag visible near the section heading
- [ ] Vertical stack on mobile
- [ ] Connector lines or arrows between steps on desktop (optional but common in niche)

### Reviews

- [ ] Named photo card format: circular avatar photo, name bold, city/state smaller, 5 filled stars (accent color), outcome sentence in quote style
- [ ] Cards in a 2-3 column grid desktop or carousel
- [ ] No anonymous review content
- [ ] Stars are accent color (#f5a623)
- [ ] Card background is white with subtle shadow or border
- [ ] Section heading references the city or "homeowners" (localization signal)

### Gallery

- [ ] Before/after pairs visually grouped (side by side or stacked with "Before"/"After" labels)
- [ ] Grid layout: 2-3 columns desktop, 1-2 columns mobile
- [ ] Lightbox overlay opens on image click
- [ ] Images have consistent aspect ratios within the grid
- [ ] Location tag or caption visible on each image slot

### ServiceAreas

- [ ] Pill/badge tags for each city name — rounded, bordered, or filled in silver/neutral
- [ ] Tags wrap to multiple rows on smaller viewports
- [ ] Google Map embed or placeholder visible below the tags
- [ ] Section heading in Montserrat 700, primary color

### FinalCTA

- [ ] Full-width section — spans the full viewport width
- [ ] Primary-dark or dark background (#13223a by default)
- [ ] Heading and subhead in white
- [ ] Accent CTA button centered (or left-aligned with phone number beside it)
- [ ] Phone number present as a second action option
- [ ] Clear visual break from the ServiceAreas section above

### Footer

- [ ] 4-column layout desktop: logo+address, services, areas, contact
- [ ] White logo variant on dark background
- [ ] All text white or neutral-dim, readable against footer background
- [ ] License number line present (or gracefully absent when null)
- [ ] Copyright line at the very bottom, smaller type
- [ ] Mobile: single column stack

---

## HALT Protocol

If Hero SSIM < 0.85: stop. Do not continue to other gates. Return to Stage 10.1.
Most common Hero failures:
- Hero layout is not split-screen (copy and image side by side) — usually caused by the image rendering above or below the copy block instead of beside it
- Quote form is missing from the hero left column
- Hero section exceeds max-height 780px and pushes TrustBar off-screen

If TrustBar SSIM < 0.83 OR TrustBar is not immediately below Hero: stop. Return to Stage 10.1.
Most common TrustBar failures:
- Section order in HomePage.jsx was changed so Services or WhyUs appears before TrustBar
- TrustBar has fewer than 5 items (badge slots not rendered when trust_badges array is empty)
