# Template Spec: Trades — Roofing, Plumbing, Electrical
## Module 2D Output — Pixel-Accurate Design Specification

---

## 1. Overview

**Purpose:** Convert a homeowner who arrives via Google Search or Google Maps into a phone call or a submitted quote form. The site must establish trust before making any pitch. The homeowner's primary fear in this niche is hiring a scam contractor. Every design and copy decision addresses that fear first.

**End customer:** A homeowner facing a roof problem — ranging from urgent storm damage to a planned replacement. The homeowner is not technically sophisticated about roofing. They are price-aware, scam-cautious, and time-pressed. They scan visually before they read. They check reviews before they call.

**Conversion goal (primary):** Inbound phone call via click-to-call. Roofing homeowners call first; forms are secondary.

**Conversion goal (secondary):** Quote form submission in the hero. Four to five fields. Fires a GHL automation on submit.

**Design direction:** Direction A (Proof-First Authority) as base. Adds Direction B's mobile fixed bottom bar. Adds Direction C's named photo testimonials format.

---

## 2. Color System

Ten palette keys. Every UI element maps to one of these keys. No hex values are hard-coded in components; components reference the token name.

| Token | Hex | Usage |
|---|---|---|
| `primary` | `#1a2e4a` | Nav bar background, section backgrounds, section headings |
| `primary_dark` | `#13223a` | Hover state on primary buttons, footer background |
| `primary_slate` | `#1f3757` | Secondary section backgrounds, card borders |
| `accent` | `#f5a623` | All CTA buttons, mobile CTA bar, active link indicator |
| `accent_light` | `#f9c467` | Button hover state, highlight rings |
| `accent_dark` | `#c4851c` | Button pressed/active state |
| `neutral` | `#94a3b8` | Placeholder text, disabled states, divider lines |
| `neutral_dim` | `#475569` | Secondary body text, captions, meta labels |
| `silver` | `#e2e8f0` | Card backgrounds, section dividers, trust bar background |
| `ink` | `#162844` | Primary body text, headings on white backgrounds |

**Contrast ratios (WCAG AA minimum):**
- `ink` on `#ffffff` white: 14.1:1 (passes AAA)
- `accent` on `primary`: 4.7:1 (passes AA for large text)
- `ink` on `silver`: 8.3:1 (passes AAA)

---

## 3. Typography

### Heading Font: Montserrat

| Weight | Use |
|---|---|
| 400 (Regular) | Subheadings, caption text |
| 600 (SemiBold) | Section labels, nav links |
| 700 (Bold) | Section headings (h2, h3) |
| 800 (ExtraBold) | Hero display, h1 |

Google Fonts URL fragment: `Montserrat:wght@400;600;700;800`

### Body Font: Inter

| Weight | Use |
|---|---|
| 400 (Regular) | Body paragraphs, list items |
| 500 (Medium) | Button labels, form labels |
| 600 (SemiBold) | Card headings, trust bar items |

Google Fonts URL fragment: `Inter:wght@400;500;600`

Combined Google Fonts import URL:
```
https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap
```

### Type Scale

| Role | Font | Weight | Size (desktop) | Size (mobile) | Line Height |
|---|---|---|---|---|---|
| display | Montserrat | 800 | 56px / 3.5rem | 36px / 2.25rem | 1.1 |
| h1 | Montserrat | 800 | 48px / 3rem | 32px / 2rem | 1.15 |
| h2 | Montserrat | 700 | 36px / 2.25rem | 28px / 1.75rem | 1.2 |
| h3 | Montserrat | 700 | 24px / 1.5rem | 20px / 1.25rem | 1.3 |
| body | Inter | 400 | 16px / 1rem | 15px / 0.9375rem | 1.6 |
| sm | Inter | 400 | 14px / 0.875rem | 13px / 0.8125rem | 1.5 |
| xs | Inter | 400 | 12px / 0.75rem | 12px / 0.75rem | 1.4 |

---

## 4. Shape System

**shape_mode:** `sharp`

- Default border-radius: 4px
- Card border-radius: 6px
- Button border-radius: 4px
- Input field border-radius: 4px
- Badge/pill border-radius: 4px

**shape_motif:** `angular`

Angular shapes suit the trades and industrial character of the roofing niche. Rounded corners signal consumer-soft brands (apps, food, wellness). Sharp corners signal precision, durability, and trades professionalism. No decorative curves, no pill shapes on structural elements. Pill shapes are reserved for service area tags only (functional context, small scale).

---

## 5. Motion Preset: Energetic

The energetic preset signals responsiveness and competence. It mirrors the urgency of the homeowner's situation.

| Parameter | Value |
|---|---|
| Stagger | 50ms between sibling elements |
| Duration | 400ms |
| Easing | `ease-out` |
| Trigger | Intersection Observer, 20% element visibility |
| Enter transform | `translateY(16px)` to `translateY(0)` + `opacity 0` to `1` |
| Reduced motion | All transitions set to `0ms` when `prefers-reduced-motion: reduce` is active |

Elements that animate on scroll-enter: section headings, service cards, testimonial cards, process steps, gallery thumbnails. Elements that do not animate: nav bar, mobile CTA bar, hero content (loads immediately).

---

## 6. Theme Mode

**theme_mode:** `light`

White background (`#ffffff`) with deep navy (`#1a2e4a`) for high-trust structural sections (nav, footer, final CTA band). The contrast between white content sections and navy anchor sections creates clear visual hierarchy without dark-mode complexity. Dark mode is not supported in this template version.

---

## 7. Section-by-Section Homepage Spec

Sections are listed in render order. SSIM region weights sum to 1.0 across all sections.

---

### 7.1 NavBar

**Slug:** `NavBar`
**Layout variant:** Horizontal fixed-top bar, 72px tall desktop / 60px tall mobile
**Background:** `primary` (#1a2e4a)
**SSIM region weight:** 0.08 | **SSIM pass threshold:** 0.82

**Component description:**

Left zone: Logo image (max height 40px, white/light variant). Links to `/`.

Center zone: Service navigation links. Desktop only (hidden on mobile). Links: "Roof Replacement" (`/services/roof-replacement`), "Roof Repair" (`/services/roof-repair`), "Storm Damage" (`/services/storm-damage`), "Gutters" (`/services/gutters`), "Free Estimate" (`/contact`). Font: Inter 500, 14px, color `#ffffff`. Active link underlined in `accent`. Hover: `accent_light`.

Right zone: Phone number as click-to-call anchor. Font: Montserrat 700, 16px desktop / 14px mobile. Color: `accent`. Format: `brandDNA.contact.phone`. Prefix label: "Call:" in Inter 400 `neutral`.

Behavior: Sticky on scroll. On mobile: logo left, hamburger right. Hamburger opens a slide-down full-width menu with all nav links stacked vertically plus the phone number at the bottom.

**Brand-DNA paths consumed:**
- `brandDNA.contact.phone`
- `brandDNA.business.logo_url`
- `brandDNA.business.name`

---

### 7.2 MobileCTABar

**Slug:** `MobileCTABar`
**Layout variant:** Fixed bottom bar, full viewport width, 56px tall
**Background:** `accent` (#f5a623)
**SSIM region weight:** 0.06 | **SSIM pass threshold:** 0.80
**Visibility:** Mobile only (hidden at breakpoint >= 768px)

**Component description:**

Full-width tap-to-call button occupying the entire bar. Label left half: icon (phone handset SVG, 20px, `ink` color) + text "Call Now" in Montserrat 700 16px `ink`. Label right half: phone number from `brandDNA.contact.phone` in Inter 600 16px `ink`. The entire bar is a single `<a href="tel:...">` anchor.

The bar sits above the browser chrome on iOS/Android. It does not overlap footer content; a 56px bottom padding is applied to the page body on mobile.

Source: Direction B (Emergency-Led Action) mobile pattern.

**Brand-DNA paths consumed:**
- `brandDNA.contact.phone`

---

### 7.3 Hero

**Slug:** `Hero`
**Layout variant:** Split-screen, 55% left / 45% right, full viewport height (min 600px, max 780px desktop)
**SSIM region weight:** 0.18 | **SSIM pass threshold:** 0.85
**Position:** Above the fold (first visible content after NavBar)

**Component description:**

**Left column (55% width, desktop):**

Background: `primary` (#1a2e4a). Padding: 64px horizontal, 80px top, 56px bottom.

Element order top to bottom:
1. Social proof bar: star icon (5x, `accent`) + review count string from `brandDNA.reviews.google_count` + "Five-Star Reviews" label. Font: Inter 500 14px `neutral`.
2. Headline (h1, display size): `brandDNA.copy.hero.headline`. Pattern: `[Number] Five-Star Reviews. [City]'s Most Trusted Roofing Contractor.` Montserrat 800, color `#ffffff`.
3. Subhead (body): `brandDNA.copy.hero.subhead`. Pattern: "Licensed, insured, and GAF certified. Serving [City] and surrounding areas since [Year]." Inter 400 18px, color `neutral`.
4. Quote form (inline). Heading above form: `brandDNA.copy.hero.form_heading` — "Get Your Free Estimate". Fields: Full Name (text), Phone Number (tel), Service Needed (select dropdown), Email (email). Submit button: full width, `accent` background, `ink` text, Montserrat 700 16px. Button label: "Get My Free Quote". Form background: white, border-radius 6px, padding 24px. Form triggers GHL webhook on submit.
5. Secondary CTA below form: "Or call us:" + `brandDNA.contact.phone` as click-to-call link. Inter 500 14px, color `neutral`.

**Right column (45% width, desktop):**

Full-height image container. Image source: `brandDNA.photography.hero_image_url`. Image shows real crew on a real roof (not stock). Object-fit: cover. No text overlay. On mobile: image collapses to 240px tall strip below the copy column.

**Mobile reflow:** Single column. Copy block first, image second (240px height). Quote form full-width fields.

**Brand-DNA paths consumed:**
- `brandDNA.copy.hero.headline`
- `brandDNA.copy.hero.subhead`
- `brandDNA.copy.hero.form_heading`
- `brandDNA.contact.phone`
- `brandDNA.reviews.google_count`
- `brandDNA.photography.hero_image_url`
- `brandDNA.business.city`
- `brandDNA.business.founded_year`

---

### 7.4 TrustBar

**Slug:** `TrustBar`
**Layout variant:** Horizontal 5-item strip, full width, 96px tall desktop
**Background:** `silver` (#e2e8f0)
**SSIM region weight:** 0.08 | **SSIM pass threshold:** 0.82
**Position:** Immediately below the hero fold, no scroll required to reach

**Component description:**

Five items in a single row, evenly spaced (flex, justify-between). Each item is centered vertically. A 1px `neutral` vertical divider separates each item.

Item order (trust stack priority from research):

1. **Review count:** Google star rating icon (5 stars SVG, `accent`) + `brandDNA.reviews.google_count` in Montserrat 700 20px `ink` + "Google Reviews" label in Inter 400 12px `neutral_dim`.
2. **GAF badge:** `brandDNA.certifications.gaf_badge_url` image (max height 52px) + "GAF Certified" label in Inter 500 12px `neutral_dim`.
3. **BBB badge:** `brandDNA.certifications.bbb_badge_url` image (max height 52px) + "BBB Accredited" label in Inter 500 12px `neutral_dim`. Link to BBB profile.
4. **License indicator:** "Licensed & Insured" Montserrat 600 14px `ink` + license number `brandDNA.business.license_number` in Inter 400 12px `neutral_dim`.
5. **Years in business:** `brandDNA.business.years_in_business` large number in Montserrat 700 20px `primary` + "Years Serving [City]" label in Inter 400 12px `neutral_dim`.

**Mobile:** Wraps to 2 columns + 1 (rows of 2 + 1 centered). Item height expands to accommodate stacked text. Dividers replaced with bottom border on each item.

**Brand-DNA paths consumed:**
- `brandDNA.reviews.google_count`
- `brandDNA.certifications.gaf_badge_url`
- `brandDNA.certifications.bbb_badge_url`
- `brandDNA.business.license_number`
- `brandDNA.business.years_in_business`
- `brandDNA.business.city`

---

### 7.5 Services

**Slug:** `Services`
**Layout variant:** 3-column card grid, full width
**Background:** `#ffffff`
**SSIM region weight:** 0.10 | **SSIM pass threshold:** 0.80

**Component description:**

Section heading (h2): `brandDNA.copy.services.section_heading`. Pattern: "Our Roofing Services". Montserrat 700, `ink`, centered, bottom margin 40px.

Six service cards arranged in 3 columns x 2 rows. Card: white background, 1px `silver` border, 6px border-radius, 24px padding, shadow on hover (`box-shadow: 0 4px 12px rgba(26,46,74,0.12)`).

Each card contains:
1. Service icon (SVG, 40px, `primary` color fill)
2. Service name (h3, Montserrat 700 18px `ink`)
3. One-line description (Inter 400 14px `neutral_dim`)
4. "Learn More" text link (Inter 500 14px `accent_dark`, underline on hover)

Service card data pulled from `brandDNA.services[]` array. Default services:
- `brandDNA.services[0]`: Roof Replacement — `/services/roof-replacement`
- `brandDNA.services[1]`: Roof Repair — `/services/roof-repair`
- `brandDNA.services[2]`: Storm Damage and Insurance Claims — `/services/storm-damage`
- `brandDNA.services[3]`: Roof Inspection — `/services/roof-inspection`
- `brandDNA.services[4]`: Gutters — `/services/gutters`
- `brandDNA.services[5]`: Commercial Roofing (conditional: `brandDNA.services[5].enabled`) — `/services/commercial`

**Mobile:** Single column stack of cards.

**Brand-DNA paths consumed:**
- `brandDNA.copy.services.section_heading`
- `brandDNA.services[]` (name, slug, description, icon, enabled)

---

### 7.6 WhyUs

**Slug:** `WhyUs`
**Layout variant:** 4-column differentiator strip, full width
**Background:** `primary` (#1a2e4a)
**SSIM region weight:** 0.07 | **SSIM pass threshold:** 0.78

**Component description:**

Section heading (h2): `brandDNA.copy.why_us.section_heading`. Pattern: "Why [City] Homeowners Choose Us". Montserrat 700 `#ffffff`, centered, bottom margin 40px.

Four differentiator columns, each containing:
1. Icon (SVG, 48px, `accent` fill)
2. Heading (h3, Montserrat 700 18px `#ffffff`)
3. Two-line description (Inter 400 14px, color `neutral`)

Default differentiators (pull from `brandDNA.differentiators[]`):
- `brandDNA.differentiators[0]`: 24/7 Emergency Response
- `brandDNA.differentiators[1]`: GAF Master Elite Certified (top 3% of US roofers)
- `brandDNA.differentiators[2]`: 25-Year Workmanship Warranty
- `brandDNA.differentiators[3]`: We Handle the Insurance Claim For You

**Mobile:** 2-column grid, 2 rows.

**Brand-DNA paths consumed:**
- `brandDNA.copy.why_us.section_heading`
- `brandDNA.differentiators[]` (heading, description, icon)
- `brandDNA.business.city`

---

### 7.7 Process

**Slug:** `Process`
**Layout variant:** 3-step horizontal numbered flow
**Background:** `#ffffff`
**SSIM region weight:** 0.06 | **SSIM pass threshold:** 0.78

**Component description:**

Section heading (h2): `brandDNA.copy.process.section_heading`. Pattern: "How It Works". Montserrat 700 `ink`, centered, bottom margin 40px.

Three steps in a horizontal row connected by a dotted `neutral` connector line. Each step:
1. Step number circle: 48px diameter, `accent` background, `ink` Montserrat 800 20px numeral
2. Step heading (h3, Montserrat 700 18px `ink`)
3. Step description (Inter 400 14px `neutral_dim`)

Default steps (from `brandDNA.process[]`):
- `brandDNA.process[0]`: Free Inspection — "We assess your roof at no cost and no obligation."
- `brandDNA.process[1]`: Custom Quote — "We provide a detailed, transparent quote within 24 hours."
- `brandDNA.process[2]`: Expert Installation — "Our certified crew completes the job on time, on budget."

**Mobile:** Vertical stack. Connector line replaced with a vertical dotted line on the left side.

**Brand-DNA paths consumed:**
- `brandDNA.copy.process.section_heading`
- `brandDNA.process[]` (heading, description)

---

### 7.8 Reviews

**Slug:** `Reviews`
**Layout variant:** Named photo testimonials, 3-column card grid
**Background:** `silver` (#e2e8f0)
**SSIM region weight:** 0.10 | **SSIM pass threshold:** 0.82

**Component description:**

Source: Direction C (Story-Driven Community) testimonial format.

Section heading (h2): `brandDNA.copy.reviews.section_heading`. Pattern: "What [City] Homeowners Say About Us". Montserrat 700 `ink`, centered, bottom margin 40px.

Six testimonial cards in 3 columns x 2 rows. Card: white background, 6px border-radius, 24px padding. Each card contains:
1. Star row: 5 star SVGs, `accent` fill, 16px each
2. Quote text (Inter 400 15px `ink`): `brandDNA.reviews.testimonials[n].quote`. Quote must include a specific outcome (e.g., "They replaced our roof in one day and handled the entire insurance claim.").
3. Author photo: 48px circle, `brandDNA.reviews.testimonials[n].photo_url`
4. Author name: Montserrat 600 14px `ink` — `brandDNA.reviews.testimonials[n].name`
5. Author city + state: Inter 400 12px `neutral_dim` — `brandDNA.reviews.testimonials[n].location`
6. Outcome tag (optional pill): Inter 500 11px, `primary` background, `#ffffff` text — `brandDNA.reviews.testimonials[n].outcome_tag`. Examples: "Roof Replacement", "Storm Damage", "Insurance Claim".

Below the cards: CTA link "See All Reviews" pointing to `/reviews`. Inter 500 14px `accent_dark`, underline on hover.

**Mobile:** Single column stack.

**Brand-DNA paths consumed:**
- `brandDNA.copy.reviews.section_heading`
- `brandDNA.reviews.testimonials[]` (quote, photo_url, name, location, outcome_tag)
- `brandDNA.business.city`

---

### 7.9 Gallery

**Slug:** `Gallery`
**Layout variant:** Before/after paired grid with lightbox, 3-pair layout
**Background:** `#ffffff`
**SSIM region weight:** 0.07 | **SSIM pass threshold:** 0.78

**Component description:**

Section heading (h2): `brandDNA.copy.gallery.section_heading`. Pattern: "Our Recent Work". Montserrat 700 `ink`, centered, bottom margin 40px.

Three before/after pairs arranged in a 3-column grid. Each pair:
1. Container with two stacked images (before top, after bottom) or side-by-side on wider cards
2. "Before" label badge: `primary` background `#ffffff` Inter 600 11px
3. "After" label badge: `accent` background `ink` Inter 600 11px
4. Location tag below the pair: Inter 400 12px `neutral_dim` — `brandDNA.gallery.projects[n].location`
5. Click opens lightbox: full-screen view with before/after toggle

Below the grid: "See More Projects" link pointing to `/gallery`. Inter 500 14px `accent_dark`.

Images: WebP format, lazy-loaded. Source from `brandDNA.gallery.projects[]`.

**Mobile:** Single-column stack of pairs. Each pair shows before image then after image vertically.

**Brand-DNA paths consumed:**
- `brandDNA.copy.gallery.section_heading`
- `brandDNA.gallery.projects[]` (before_url, after_url, location)

---

### 7.10 ServiceAreas

**Slug:** `ServiceAreas`
**Layout variant:** Pill tag list + embedded map placeholder, 60/40 split
**Background:** `silver` (#e2e8f0)
**SSIM region weight:** 0.06 | **SSIM pass threshold:** 0.78

**Component description:**

Section heading (h2): `brandDNA.copy.service_areas.section_heading`. Pattern: "Proudly Serving [Region]". Montserrat 700 `ink`, centered, bottom margin 40px.

Left zone (60%): Pill tags for each served city. Each pill: `primary` background, `#ffffff` Inter 500 13px, 4px border-radius (shape_mode: sharp), 8px x 16px padding. Pills are anchor links to their respective `/areas/:city` pages. Source: `brandDNA.service_areas[]`.

Right zone (40%): Embedded Google Maps placeholder. Iframe embed URL built from `brandDNA.business.map_embed_url`. Fallback: static map image if embed not configured. Border: 1px `neutral`. Border-radius: 4px.

**Mobile:** Map collapses to hidden (display:none). Pill tags go full width, wrapping freely.

**Brand-DNA paths consumed:**
- `brandDNA.copy.service_areas.section_heading`
- `brandDNA.service_areas[]` (city_name, city_slug)
- `brandDNA.business.map_embed_url`
- `brandDNA.business.region`

---

### 7.11 FinalCTA

**Slug:** `FinalCTA`
**Layout variant:** Full-width dark band, centered single column, 240px tall desktop
**Background:** `primary_dark` (#13223a)
**SSIM region weight:** 0.08 | **SSIM pass threshold:** 0.82

**Component description:**

Full-width dark section acting as visual anchor before the footer.

Content centered vertically and horizontally:
1. Heading (h2): `brandDNA.copy.final_cta.heading`. Pattern: "Ready to Get Started? Get Your Free Roof Estimate Today." Montserrat 700 36px `#ffffff`.
2. Subhead: `brandDNA.copy.final_cta.subhead`. Pattern: "No obligation. No pressure. Just a clear, honest quote." Inter 400 18px `neutral`.
3. CTA button: `brandDNA.copy.final_cta.button_label`. "Get Your Free Estimate". `accent` background, `ink` Montserrat 700 16px, 4px border-radius, 52px tall, 200px min-width. Links to `#hero-form` (scroll to hero form) or `/contact`.
4. Phone number: "Or call us:" Inter 400 16px `neutral` + `brandDNA.contact.phone` as click-to-call Montserrat 700 20px `accent`.

**Mobile:** Heading reduces to 28px. Button full width. Stacks vertically.

**Brand-DNA paths consumed:**
- `brandDNA.copy.final_cta.heading`
- `brandDNA.copy.final_cta.subhead`
- `brandDNA.copy.final_cta.button_label`
- `brandDNA.contact.phone`

---

### 7.12 Footer

**Slug:** `Footer`
**Layout variant:** 4-column, full width
**Background:** `primary` (#1a2e4a)
**SSIM region weight:** 0.06 | **SSIM pass threshold:** 0.78

**Component description:**

Four columns, 25% width each desktop.

**Column 1 — Brand:**
- Logo (white variant), max height 40px
- Business name: Montserrat 600 16px `#ffffff`
- Full address: `brandDNA.business.address` — Inter 400 13px `neutral`
- Phone: `brandDNA.contact.phone` as click-to-call — Inter 500 13px `accent`
- Email: `brandDNA.contact.email` — Inter 400 13px `neutral`
- License number: "Lic. #" + `brandDNA.business.license_number` — Inter 400 12px `neutral`

**Column 2 — Services:**
- Heading: "Our Services" — Montserrat 600 14px `accent`
- Links: each service from `brandDNA.services[]` — Inter 400 13px `neutral`, hover `#ffffff`

**Column 3 — Service Areas:**
- Heading: "Service Areas" — Montserrat 600 14px `accent`
- Links: each area from `brandDNA.service_areas[]` (first 8 max) — Inter 400 13px `neutral`, hover `#ffffff`

**Column 4 — Contact:**
- Heading: "Get a Free Estimate" — Montserrat 600 14px `accent`
- Short form: Phone (tel) + Service (select) + Submit. Submit button: "Get My Free Quote", full width, `accent` background, `ink` Montserrat 700 14px.
- Or CTA link to `/contact` if full form is not desired.

**Below the 4 columns:** 1px `primary_slate` divider. Below divider: copyright line Inter 400 12px `neutral` — "Copyright [Year] `brandDNA.business.name`. All rights reserved." | "Privacy Policy" link | "Terms" link.

**Mobile:** Single column stack. Column 1 first, then 2, then 3, then 4 (form). Footer form is optional on mobile if MobileCTABar is present.

**Brand-DNA paths consumed:**
- `brandDNA.business.logo_url`
- `brandDNA.business.name`
- `brandDNA.business.address`
- `brandDNA.business.license_number`
- `brandDNA.contact.phone`
- `brandDNA.contact.email`
- `brandDNA.services[]`
- `brandDNA.service_areas[]`

---

## 8. Secondary Page Specs

### 8.1 Service Detail Page (`/services/:service-slug`)

**Purpose:** Convert a homeowner researching a specific service (e.g., roof replacement) into a call or form submission. Capture keyword traffic for service + city combinations.

**Section stack (top to bottom):**
1. NavBar (same as homepage)
2. PageHero — 60/40 split. Left: h1 from `brandDNA.copy.services.{slug}.h1`, subhead, CTA button "Get a Free [Service] Quote", phone. Right: service-specific hero image.
3. ServiceTrustBar — same 5-item format, condensed to 80px, matches homepage TrustBar tokens
4. ServiceDescription — full-width content block. H2 section headings. Body paragraphs from `brandDNA.copy.services.{slug}.body[]`. Includes: what the service covers, what to expect, timeline, materials used, and warranty details.
5. WhyUs — reused from homepage, same component
6. Process — reused from homepage, same component
7. LocalServiceAreas — pill list of served cities with links. Heading: "We Offer [Service Name] Across [Region]"
8. Reviews — filtered to testimonials tagged with this service type. Same card format as homepage Reviews.
9. FAQAccordion — 5-8 questions from `brandDNA.faq.services.{slug}[]`. Schema: FAQPage. Accordions use 1px `silver` border, 4px radius.
10. FinalCTA — same as homepage
11. Footer — same as homepage

**SEO:** Title pattern: `brandDNA.copy.services.{slug}.page_title`. H1 pattern from `brandDNA.copy.services.{slug}.h1`. Schema: `Service` + `LocalBusiness` + `AggregateRating`.

---

### 8.2 Service Area (City) Page (`/areas/:city`)

**Purpose:** Rank for "[service] [city]" keyword clusters. One page per city served.

**Section stack:**
1. NavBar
2. CityHero — same split layout. H1: "Roofing Contractor in [City], [State]" from `brandDNA.copy.cities.{slug}.h1`. Subhead references local context (neighborhood, climate). CTA + phone.
3. TrustBar — same as homepage
4. LocalServices — same Services grid, heading updated to "Roofing Services in [City]"
5. LocalProjects — Gallery filtered by city tag. Heading: "Recent Work in [City]"
6. LocalReviews — Reviews filtered by city. Heading: "What [City] Homeowners Say"
7. ServiceAreaLinks — grid of other served cities. Internal linking for SEO.
8. FinalCTA
9. Footer

**SEO:** Title pattern: `[City] Roofing Contractor | Licensed and Insured | Free Estimates | [Company Name]`. Schema: `LocalBusiness` with geo coordinates, `RoofingContractor` type, `AggregateRating`.

---

### 8.3 About Page (`/about`)

**Purpose:** Build personal trust. Present certifications, team, and story. For homeowners who do a verification pass before calling.

**Section stack:**
1. NavBar
2. AboutHero — full-width, team photo background with dark overlay. H1: "[Company Name] — [City]'s Trusted Roofing Contractor Since [Year]"
3. StoryBlock — left/right split. Left: founder/owner photo. Right: origin story, values. 3-4 paragraphs from `brandDNA.about.story`.
4. CertificationRow — horizontal display of all certification badges with one-sentence explanations. Source: `brandDNA.certifications[]`.
5. TeamGrid — photo + name + role cards. Source: `brandDNA.team[]`.
6. Stats — 4-col strip: total roofs installed, years in business, review count, warranty years. Large numbers in `accent`.
7. FinalCTA
8. Footer

---

### 8.4 Contact Page (`/contact`)

**Purpose:** Capture leads who navigate from the nav bar or a CTA button. Full form experience.

**Section stack:**
1. NavBar
2. ContactHero — dark background, h1 "Get Your Free Roof Estimate", subhead from `brandDNA.copy.contact.subhead`.
3. ContactBlock — 60/40 split. Left: full contact form (Name, Phone, Email, Service Needed, Message, Submit). Right: contact details (address, phone, email, hours, map embed). Form fires GHL webhook.
4. TrustBar — condensed version
5. Footer

---

### 8.5 FAQ Page (`/faq`)

**Purpose:** Capture long-tail informational search traffic. Build trust by answering the homeowner's top anxieties. Schema-marked FAQPage for Google rich results.

**Section stack:**
1. NavBar
2. FAQHero — light background, h1 "Frequently Asked Questions", subhead.
3. FAQCategories — tab or anchor links: General, Roof Replacement, Storm Damage and Insurance, Cost and Financing, Warranties.
4. FAQAccordionList — all questions from `brandDNA.faq.all[]`, grouped by category. Schema: FAQPage.
5. FinalCTA
6. Footer

---

## 9. Mobile-First Requirements

1. **MobileCTABar:** Fixed 56px bottom bar. `accent` background. Tap-to-call. Visible on all pages. Hidden at desktop breakpoint (768px and above).

2. **Hero reflow:** On mobile, the hero collapses to a single column. Copy block renders first. The hero image renders below the copy at 240px height. The quote form fields are full width (100%). The submit button is full width.

3. **Trust bar stack:** The trust bar's 5 items cannot compress into a readable single row on mobile screens below 480px. Items wrap to a 2-column grid (rows of 2 + 1 centered). Each item gets a bottom border instead of a vertical divider.

4. **Image loading:** All images below the fold use `loading="lazy"` and are served in WebP format. Hero image is preloaded via `<link rel="preload">` in the document head. All images have explicit `width` and `height` attributes to prevent layout shift (CLS).

5. **Nav:** Collapses to a hamburger at 768px. Hamburger opens a slide-down menu. Phone number is always accessible in the mobile menu.

6. **Breakpoints:**
   - Mobile: 0–767px
   - Tablet: 768px–1023px
   - Desktop: 1024px+

7. **Performance targets:** Hero loads in under 2 seconds on a 4G connection. Total page weight under 300KB initial (excluding images). Fonts loaded via `display=swap`.

---

## 10. Fidelity Thresholds Table

SSIM weights sum to 1.0. Threshold = minimum acceptable visual similarity score in SSIM comparison against the design direction reference.

| Section | Slug | SSIM Weight | SSIM Threshold |
|---|---|---|---|
| NavBar | `NavBar` | 0.08 | 0.82 |
| MobileCTABar | `MobileCTABar` | 0.06 | 0.80 |
| Hero | `Hero` | 0.18 | 0.85 |
| TrustBar | `TrustBar` | 0.08 | 0.82 |
| Services | `Services` | 0.10 | 0.80 |
| WhyUs | `WhyUs` | 0.07 | 0.78 |
| Process | `Process` | 0.06 | 0.78 |
| Reviews | `Reviews` | 0.10 | 0.82 |
| Gallery | `Gallery` | 0.07 | 0.78 |
| ServiceAreas | `ServiceAreas` | 0.06 | 0.78 |
| FinalCTA | `FinalCTA` | 0.08 | 0.82 |
| Footer | `Footer` | 0.06 | 0.78 |
| **Total** | | **1.00** | |
