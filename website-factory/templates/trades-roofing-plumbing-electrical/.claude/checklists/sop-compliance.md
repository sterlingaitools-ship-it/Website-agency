# SOP Compliance Checklist
## Niche: trades-roofing-plumbing-electrical

Run this checklist during Stage 10.4b. Work through each section in order. Log pass or fail for each item. Halt on critical failures before continuing.

---

## NavBar

- [ ] Phone number visible as a clickable `<a href="tel:...">` link in the NavBar
- [ ] Nav is sticky — remains visible as the user scrolls
- [ ] Logo renders in the top-left (white variant on primary background)
- [ ] Service navigation links present: Roof Replacement, Roof Repair, Storm Damage, Gutters, Inspection
- [ ] "Free Estimate" CTA link or button present in NavBar
- [ ] Mobile hamburger menu present and functional at sm breakpoint
- [ ] NavBar background is primary color (#1a2e4a by default)

---

## MobileCTABar

- [ ] Fixed bottom position (position: fixed; bottom: 0)
- [ ] Accent background (#f5a623 by default)
- [ ] Entire bar is a single `<a href="tel:...">` — tapping anywhere calls
- [ ] Renders at full viewport width
- [ ] Hidden on md+ screens (Tailwind: hidden md:hidden or equivalent)
- [ ] Uses `brandDNA.contact.phone` — no hardcoded phone number
- [ ] Phone icon and "Call Now" label both present

---

## Hero

- [ ] Review count eyebrow present above the main headline (e.g., "312 Five-Star Reviews")
- [ ] H1 headline sourced from `brandDNA.copy.hero.headline` — no hardcoded copy
- [ ] Subhead sourced from `brandDNA.copy.hero.subheadline`
- [ ] Desktop layout: split-screen 55% left (copy + form) / 45% right (image)
- [ ] Hero image present in right column — sourced from `brandDNA.photography.hero_image_url` or public/hero.*
- [ ] Quote form present in the left column with exactly 4 fields: Full Name, Phone Number, Service Needed (dropdown), Email Address
- [ ] Form header reads "Get Your Free Estimate" (locked copy)
- [ ] Submit button reads "Get My Free Quote" (locked copy)
- [ ] Phone text link below the form: "Or call us: [phone]"
- [ ] Mobile: single-column layout (copy block first, image below, form below image)
- [ ] Form fields are full-width on mobile

---

## TrustBar

- [ ] TrustBar is the FIRST section after Hero — no sections between Hero and TrustBar
- [ ] Exactly 5 trust signals displayed
- [ ] Google review count with star rating present (from `brandDNA.reviews.googleCount`)
- [ ] GAF certification badge slot present (from `brandDNA.trust_badges`)
- [ ] BBB badge slot present
- [ ] "Licensed & Insured" chip present
- [ ] "Serving [City] Since [Year]" chip present
- [ ] Desktop: horizontal 5-item strip
- [ ] Mobile: 2-column grid (not compressed single row)

---

## Services

- [ ] Renders from `brandDNA.services` array — no hardcoded service list
- [ ] 3-column grid on desktop
- [ ] Each card: icon + service name + 1-line description + "Learn More" link
- [ ] Single column on mobile
- [ ] Section heading sourced from `brandDNA.copy.services.heading`

---

## WhyUs

- [ ] 4 differentiator columns on desktop
- [ ] Each column: icon + heading + 2-line description
- [ ] 2-column grid on tablet (md breakpoint)
- [ ] Single column on mobile
- [ ] Section heading sourced from `brandDNA.copy.whyChoose.heading` or equivalent

---

## Process

- [ ] Exactly 3 steps — no more, no fewer
- [ ] Steps numbered 1, 2, 3 visually
- [ ] Step headings sourced from `brandDNA.copy.process.*`
- [ ] "No Obligation" badge or indicator present (from `brandDNA.copy.process.badgeText`)
- [ ] Horizontal layout on desktop, vertical on mobile

---

## Reviews

- [ ] Named photo format — NOT a generic star widget or review count only
- [ ] Each testimonial card includes: circular photo avatar, full name, city and state, 5-star rating, outcome sentence
- [ ] Testimonial content sourced from `brandDNA.reviews.items` array
- [ ] Section heading sourced from `brandDNA.copy.reviews.heading`
- [ ] Stars displayed in accent color (#f5a623 by default)
- [ ] No anonymous reviews — every card has a named author

---

## Gallery

- [ ] Before/after paired layout (before image and after image side by side or stacked)
- [ ] Lightbox opens on image click (modal or overlay)
- [ ] Images sourced from `brandDNA.previous_projects` array
- [ ] Minimum 6 image slots rendered (placeholders acceptable before real photos are added)
- [ ] Section heading sourced from `brandDNA.copy.gallery.heading`
- [ ] Images use WebP format or have lazy-loading attribute

---

## ServiceAreas

- [ ] Pill/tag layout for city names from `brandDNA.serviceAreas` array
- [ ] Section heading sourced from `brandDNA.copy.serviceAreas.heading`
- [ ] Google Map embed placeholder present (iframe or div with data attribute for `brandDNA.contact.mapsEmbedUrl`)
- [ ] Map embed gracefully absent when `brandDNA.contact.mapsEmbedUrl` is null

---

## FinalCTA

- [ ] Full-width dark band (primary-dark background)
- [ ] CTA heading sourced from `brandDNA.copy.cta.heading`
- [ ] CTA body/subhead sourced from `brandDNA.copy.cta.body`
- [ ] CTA button present with accent background
- [ ] Phone number present as a second CTA option
- [ ] High contrast: white text on dark background passes WCAG AA

---

## Footer

- [ ] Logo present (white variant)
- [ ] Company address from `brandDNA.address.full`
- [ ] Phone number from `brandDNA.contact.phone`
- [ ] Email from `brandDNA.contact.email`
- [ ] License number from `brandDNA.company.licenseNumber` (displays if not null)
- [ ] Service links present
- [ ] Service area links or list present
- [ ] Privacy Policy and Terms links present
- [ ] Copyright line from `brandDNA.copy.copyright`
- [ ] Social links from `brandDNA.social.*` (renders only for non-null values)

---

## Universal Checks

- [ ] No hardcoded copy strings in any component (all visible text from `brandDNA.*` or `niche-playbook/copy-locks.json`)
- [ ] No inline style prop attributes on any section or card root elements (no hardcoded color or layout overrides)
- [ ] All `<img>` elements have non-empty `alt` attributes
- [ ] All form `<input>` elements have associated `<label>` or `aria-label`
- [ ] All icon-only buttons have `aria-label`
- [ ] All interactive elements reachable by keyboard (Tab key) with visible focus ring
- [ ] No em-dashes in any rendered text (check dist/index.html with grep)
- [ ] `prefers-reduced-motion` respected: animated components use `motion-safe:` Tailwind prefix or JS media query check
- [ ] MobileCTABar renders outside `<main>` element (fixed position overlay, not inline)
- [ ] `<h1>` appears exactly once per page
- [ ] Heading hierarchy is sequential (h1 -> h2 -> h3, no skips)
