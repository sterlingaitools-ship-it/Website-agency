# Sub-task 8: Starter Design Template
## Niche: Trades - Roofing, Plumbing, Electrical (US/UK)

This is the reference design brief for Module 2D's template build. Every section maps to findings from Sub-tasks 1-7.

---

## Site Purpose

Convert a homeowner who found the roofer via Google Search or Google Maps into a phone call or quote request. Trust must be established before any pitch is made.

---

## Page Structure (ordered by conversion priority)

### 1. Navigation Bar
- Logo (left)
- Service links: Roof Replacement | Roof Repair | Storm Damage | Gutters | Free Estimate
- **Phone number (right) — click-to-call, always visible, no exceptions**
- Sticky on scroll

### 2. Hero Section
- **Headline:** `[Number] Five-Star Reviews. [City]'s Most Trusted Roofing Contractor.` (or swipe from `03-copy-patterns.md`)
- **Subhead:** One sentence on what they do and where. E.g. "Licensed, insured, and GAF certified. Serving [City] and surrounding areas since [Year]."
- **Hero image:** Real crew on a real roof. No stock. Dark overlay if text sits on top.
- **Primary CTA button:** "Get Your Free Estimate" — high contrast, above the fold
- **Secondary:** Phone number repeated as text link "Or call us: [number]"
- **Inline quote form** (optional, high-converting variant): Name, Phone, Service Needed, Submit → "Get My Free Quote"

### 3. Trust Bar (immediately below hero, no scroll required)
Four to five trust signals in a horizontal strip:
- Google review count + star rating (dynamic widget or static display)
- GAF / Owens Corning / CertainTeed certification badge
- BBB A+ badge
- "Licensed & Insured" with license number
- "Serving [City] Since [Year]"

### 4. Services Grid
Three to six service cards with icon, name, one-line description, and "Learn More" link:
- Roof Replacement
- Roof Repair
- Storm Damage & Insurance Claims
- Roof Inspection
- Gutters
- Commercial Roofing (if applicable)

### 5. Why Us / Differentiators
Three to four columns. Each: icon + heading + 2-line description.
Suggested differentiators (pull from client reality):
- 24/7 Emergency Response
- GAF Master Elite Certified (top 3% of US roofers)
- 25-Year Workmanship Warranty
- We Handle the Insurance Claim For You

### 6. Our Process (3 Steps)
Simple numbered or icon-based flow:
1. Free Inspection — "We assess your roof at no cost and no obligation."
2. Custom Quote — "We provide a detailed, transparent quote within 24 hours."
3. Expert Installation — "Our certified crew completes the job on time, on budget."

### 7. Reviews / Testimonials
- Google Reviews widget (live, auto-updating) — preferred
- Or: 4-6 static testimonials with: full name, city/state, star rating, 2-3 sentence quote with a specific outcome
- Section headline: "What [City] Homeowners Say About Us"

### 8. Project Gallery (Before / After)
- 6-12 photos minimum at launch
- Paired before/after preferred
- Location tag on each (city, neighbourhood)
- Lightbox on click

### 9. Service Areas
- Bullet list or pill tags of cities/neighbourhoods served
- Embedded Google Map (optional but adds local SEO signal)
- Heading: "Proudly Serving [Region]"

### 10. Final CTA Section
- Repeat the primary offer: "Ready to Get Started? Get Your Free Roof Estimate Today."
- CTA button + phone number
- Background: dark or brand colour to visually separate from content above

### 11. Footer
- Logo
- Address + phone + email
- Service links
- License number
- Links: Privacy Policy | Terms
- Copyright

---

## Design Tokens

| Token | Value |
|---|---|
| Primary colour | Deep navy or slate blue (#1a2e4a or similar) — trust, professionalism |
| Accent colour | High-contrast yellow or orange (#f5a623 or similar) — CTA buttons only |
| Background | White (#ffffff) |
| Text | Near-black (#1a1a1a) |
| Font — headings | Bold geometric sans (Inter, Montserrat, or similar) |
| Font — body | Clean readable sans (Inter, Open Sans) |
| Border radius | Minimal (4-8px) — trades is functional, not decorative |
| Photography style | Real crew, real roofs, real homeowners. No stock. |

---

## Mobile-First Requirements

- Phone number tap-to-call button fixed at the bottom of the screen on mobile (highest priority)
- Hero loads in under 2 seconds on 4G
- Quote form fields full-width on mobile
- Trust bar stacks vertically on mobile (not compressed)
- All images WebP format, lazy-loaded below the fold

---

## Automation Layer (GHL Integration)

This is Aiden's differentiator. Wire these up on every build:

1. **Quote form submission** → immediate SMS + email confirmation to lead → notify contractor in GHL
2. **Lead tagging:** tag by service type (Roof Replacement / Repair / Storm / Inspection) for segmented follow-up
3. **Follow-up sequence (lead not contacted within 2 hours):** auto-SMS from contractor: "Hi [Name], this is [Contractor] — I saw your quote request for [service]. When's a good time for a quick call?"
4. **Review request automation:** 3 days after job marked complete in GHL → SMS to client asking for a Google review (with direct link)
5. **Reactivation campaign:** 12 months after last contact → "Hi [Name], it's been about a year since we worked on your roof. Spring is a great time for a free inspection. Want us to take a look?"

---

## SEO Page Structure

In addition to the homepage:
- One page per major service (Roof Replacement, Roof Repair, Storm Damage, Gutters)
- One page per city/suburb served (e.g. `/roofing-contractor-atlanta-ga/`)
- FAQ page (schema-marked)
- About page (certifications, team, story)

---

## Key Differentiator to Build Into Every Site

Most roofing sites are brochures. This template is a lead machine. The difference is:
1. Phone number always visible
2. Quote form in the hero (not on a separate contact page)
3. Google review integration (not static screenshots)
4. Automation layer that fires the moment a lead submits
5. Insurance claim assistance positioned as a headline feature, not buried in a services list
