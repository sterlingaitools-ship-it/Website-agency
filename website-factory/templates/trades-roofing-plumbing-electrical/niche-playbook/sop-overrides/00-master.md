# SOP Overrides: Trades - Roofing, Plumbing, Electrical

Per-niche overrides to the universal master blueprint at `.claude/sops/00-master-blueprint.md`. Stage 10.4b SOP-QA loads this file alongside the universal blueprint when verifying a per-client build in this niche.

This file documents only the niche-specific overrides. Universal invariants (zero em-dashes, schema validity, prefers-reduced-motion, WCAG AA contrast, etc.) inherit unchanged from the master blueprint.

---

## 1. Locked CRO Copy

Cross-reference: `niche-playbook/copy-locks.json`. The build agent reads from the JSON; this section is documentation for human reviewers.

```
ctaPrimary: "Get Your Free Estimate"
ctaSecondary: "Book a Free Roof Inspection"
formHeader: "Get Your Free Estimate"
formSubmitButton: "Get My Free Quote"
formPrivacy: "No spam. No obligation. Your info stays private."
mobileCallLabel: "Call Now"
footerTagline: "Licensed. Insured. Certified. On time."
```

These strings must appear verbatim. The build agent must not paraphrase, shorten, or reword these locked copy strings.

---

## 2. Section Counts

```
Trust signal claim count: 5 (five items in the trust strip: reviews, GAF, BBB, license, years)
Trust signal badge count: 5 (from trust-signals.json trustStripCount: 5)
Process section step count: 3 (from process.json stepCount: 3)
Reviews shown on homepage: 6 (3 columns x 2 rows of named photo testimonials)
FAQ items shown: 6-8 (per service page FAQ section)
Trust-badge placements: hero, floating-strip, service-page, about-page, footer
```

---

## 3. Page Order (Homepage Section Render Order)

Stage 10.4b verifies the built `HomePage.jsx` renders sections in this exact order:

1. NavBar (fixed top, primary background)
2. MobileCTABar (fixed bottom, mobile only, accent background)
3. Hero (split-screen, primary left, image right, form embedded in left)
4. TrustBar (5-item silver strip, immediately below hero fold)
5. Services (3x2 card grid, white background)
6. WhyUs (4-column strip, primary background)
7. Process (3-step horizontal flow, white background)
8. Reviews (3x2 named photo cards, silver background)
9. Gallery (3 before/after pairs, white background)
10. ServiceAreas (pill tags + map, silver background)
11. FinalCTA (full-width band, primary_dark background)
12. Footer (4-column, primary background)

Any deviation from this order is a Stage 10.4b QA failure.

---

## 4. Required Sections (Cannot Be Omitted)

These sections must render on every client build in this niche, even if some data fields are sparse:

- **NavBar**: Phone number required in the nav. No exceptions. This is the primary conversion path.
- **MobileCTABar**: Fixed bottom bar on mobile. Required on every page, not just homepage.
- **Hero**: Split-screen layout. Form embedded in hero. Review count eyebrow. Must be above fold.
- **TrustBar**: Immediately below hero. 5 items. All 5 must render.
- **Services**: Minimum 5 service cards. If a service is disabled, render 5; do not render a 2x3 grid with an empty cell.
- **Process**: Exactly 3 steps. No-obligation badge required below the steps.
- **Reviews**: Minimum 3 testimonials on homepage. If client has fewer than 3 testimonials gathered, halt and raise a flag before deploy.
- **FinalCTA**: Required on every page. The catch-net for homeowners who scrolled past the hero form.
- **Footer**: Phone number, email, license number, and copyright year all required.

---

## 5. Conditional Sections (Render When Data Exists)

- **Gallery**: Renders the before/after grid only if the client has at least 3 before/after photo pairs. If fewer than 3 pairs exist, show available pairs without padding. If zero pairs exist, replace the gallery section with a placeholder directing to the full gallery page when photos are added post-launch.
- **ServiceAreas**: Renders the pill tag list and map only if `brandDNA.service_areas[]` has at least 1 entry. If zero entries, hide this section.
- **Commercial Roofing card**: The sixth service card (Commercial Roofing) renders only if `brandDNA.services[5].enabled == true`. Default is disabled.
- **Stats Strip on About page**: Renders only if at least 2 of the 4 stat values are populated (roofs installed, years, reviews, warranty). If fewer than 2 are available, omit the stats strip entirely.

---

## 6. Niche-Specific Cross-Cutting Rules

**Phone number in nav bar:**
The contractor's phone number must be visible in the NavBar on every page, displayed as a click-to-call anchor. Color: accent (#f5a623). Font: Montserrat 700. This is the niche's primary conversion path. Failure to include it is a Stage 10.4b hard fail.

**License number visible in at minimum two places:**
The contractor's state license number must appear in the trust bar (as the "Licensed and Insured" item label) and in the footer (column 1, below the phone number). Format: `Lic. #` + the number. Plain Inter 400 12px neutral. If the license number is absent from the client's brand-dna, halt Stage 7 (brand DNA extraction) with a license-number-required error.

**No decorative curves or pill shapes on structural elements:**
The shape_mode is `sharp`. Card border-radius: 6px max. Button border-radius: 4px. No diagonal section dividers. No pill-shaped cards. Pill shapes are reserved for service area tags only.

**Hero headline must include social proof or certification:**
The hero H1 must contain either a review count (from brandDNA.reviews.google_count) or a certification reference (GAF, BBB). A tagline-only hero headline is a Stage 10.4b QA failure.

**No stock photos in any image slot:**
The photo-manifest stockBan is `true`. Stage 4 must not substitute stock photos for missing categories. If required photo categories (crew-on-roof, completed-project, before-after-pair, team-portrait) are below minCount, the pipeline halts and writes a photo-shoot brief into the proposal.

**Form embedded in hero:**
The lead form must be embedded directly in the hero copy column. Routing the primary CTA to a contact page instead is a Stage 10.4b QA failure.

---

## 7. Halt Conditions (Niche-Specific)

These conditions halt the pipeline above the universal halt conditions:

**Hard halts (stop the build, require resolution before proceeding):**

1. `brandDNA.business.license_number` is empty or null. License number is a required trust signal in this niche. Cannot proceed without it.

2. `photo-manifest` required categories below `minCount`: `crew-on-roof` (min 3), `completed-project` (min 6), `before-after-pair` (min 4), `team-portrait` (min 1). Pipeline halts if any of these are missing at Stage 4. Writes a photo-shoot brief into the proposal output.

3. Reviews section on homepage has fewer than 3 real testimonials. Do not fabricate reviews. Halt and surface a review-gathering recommendation in the delivery notes.

4. Hero H1 contains no review count and no certification reference. This violates the niche's primary CRO rule and cannot be shipped.

**Soft flags (log warning, do not halt):**

1. `brandDNA.certifications.gaf_badge_url` is empty. Log: "GAF badge missing. Trust bar item 2 will render as text only."

2. `brandDNA.certifications.bbb_badge_url` is empty. Log: "BBB badge missing. Trust bar item 3 will render as text only."

3. `brandDNA.reviews.google_count` is below 50. Log: "Review count below 50. Recommend review gathering campaign."

4. Service pages fewer than 5. Log: "Fewer than 5 service pages. Consider adding Gutters or Commercial to complete the services grid."

---

## Source Traceback

```
- Cross-cutting rules: derived from 100% consistency across all 8 reference sites 
  (phone in nav, license visible, form in hero, no stock photos)
- Conditional section logic: gallery conditional derived from sites that omit gallery 
  when no real project photos exist vs those that show it
- Halt conditions: license number and photo requirements from sub-task 5 (trust signals) 
  and niche research consensus
```
