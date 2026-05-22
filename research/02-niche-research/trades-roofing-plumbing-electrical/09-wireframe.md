# Wireframes: Trades — Roofing, Plumbing, Electrical
## Module 2D Output — ASCII Layout Reference

All section slugs in this document exactly match the `sections` arrays in `09-sitemap.json`.

---

## Homepage Wireframes

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ NavBar                                                           [ABOVE FOLD] │
│ 72px tall desktop / 60px mobile | background: primary (#1a2e4a)              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  [LOGO]              Roof Replacement | Roof Repair | Storm Damage | Gutters  │
│  (max-h: 40px)       Free Estimate                  [Call: brandDNA.contact.phone] │
│  white variant                                       Montserrat 700 accent    │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.business.logo_url, brandDNA.business.name,
                 brandDNA.contact.phone
SSIM weight: 0.08 | SSIM threshold: 0.82
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ MobileCTABar         [FIXED BOTTOM — MOBILE ONLY, hidden >= 768px]           │
│ 56px tall | background: accent (#f5a623) | full viewport width               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  [PHONE ICON 20px]  Call Now            brandDNA.contact.phone               │
│  ink color          Montserrat 700 16px  Inter 600 16px ink                  │
│  ←——————————————— entire bar is <a href="tel:..."> ————————————————→         │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.contact.phone
SSIM weight: 0.06 | SSIM threshold: 0.80
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Hero                                                             [ABOVE FOLD] │
│ Full viewport height (min 600px / max 780px desktop)                         │
│ Split-screen: LEFT 55% | RIGHT 45%                                           │
├──────────────────────────────────────┬──────────────────────────────────────┤
│ LEFT COLUMN (55%)                    │ RIGHT COLUMN (45%)                   │
│ background: primary (#1a2e4a)        │ full-height image container          │
│ padding: 64px h, 80px top, 56px bot  │                                      │
│                                      │  ┌────────────────────────────────┐  │
│ ★★★★★ [review count] Five-Star Reviews │  │                                │  │
│ Inter 500 14px neutral               │  │  brandDNA.photography          │  │
│                                      │  │  .hero_image_url               │  │
│ ┌────────────────────────────────┐   │  │                                │  │
│ │ brandDNA.copy.hero.headline    │   │  │  (real crew on real roof)      │  │
│ │ Montserrat 800 56px #ffffff    │   │  │  object-fit: cover             │  │
│ │ h1 / display size              │   │  │  no text overlay               │  │
│ └────────────────────────────────┘   │  │                                │  │
│                                      │  │                                │  │
│ brandDNA.copy.hero.subhead           │  │                                │  │
│ Inter 400 18px neutral               │  │                                │  │
│                                      │  └────────────────────────────────┘  │
│ ┌─ GET YOUR FREE ESTIMATE ──────┐    │                                      │
│ │ form_heading Montserrat 700   │    │                                      │
│ │                               │    │                                      │
│ │  [ Full Name            ]     │    │                                      │
│ │  [ Phone Number         ]     │    │                                      │
│ │  [ Service Needed     ▼ ]     │    │                                      │
│ │  [ Email Address        ]     │    │                                      │
│ │                               │    │                                      │
│ │  [■ GET MY FREE QUOTE ■■■■■]  │    │                                      │
│ │    accent bg / ink text       │    │                                      │
│ │    Montserrat 700 16px        │    │                                      │
│ └───────────────────────────────┘    │                                      │
│                                      │                                      │
│  Or call us: [brandDNA.contact.phone]│                                      │
│  Inter 500 14px neutral              │                                      │
│                                      │                                      │
├──────────────────────────────────────┴──────────────────────────────────────┤
│ [FOLD LINE — content below here requires scroll on 1024px viewport]          │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.hero.headline, brandDNA.copy.hero.subhead,
                 brandDNA.copy.hero.form_heading, brandDNA.contact.phone,
                 brandDNA.reviews.google_count, brandDNA.photography.hero_image_url,
                 brandDNA.business.city, brandDNA.business.founded_year
SSIM weight: 0.18 | SSIM threshold: 0.85

MOBILE REFLOW (< 768px):
  Single column. Copy block first, hero image second (240px height).
  Form fields full-width. Submit button full-width.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ TrustBar                                                        [BELOW FOLD] │
│ 96px tall desktop | background: silver (#e2e8f0) | full width                │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌────────────┐ │ ┌────────────┐ │ ┌────────────┐ │ ┌──────────┐ │ ┌──────┐ │
│  │ ★★★★★      │ │ │ [GAF LOGO] │ │ │ [BBB LOGO] │ │ │ Licensed │ │ │  15  │ │
│  │ [count]    │ │ │  max-h 52px│ │ │  max-h 52px│ │ │ & Insured│ │ │Years │ │
│  │ Google     │ │ │ GAF        │ │ │ BBB        │ │ │ Lic. #   │ │ │Serv. │ │
│  │ Reviews    │ │ │ Certified  │ │ │ Accredited │ │ │ [number] │ │ │[City]│ │
│  └────────────┘ │ └────────────┘ │ └────────────┘ │ └──────────┘ │ └──────┘ │
│   Montserrat       Inter 500       Inter 500         Montserrat     Montserrat│
│   700 20px ink     12px dim        12px dim          600 14px       700 20px  │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.reviews.google_count, brandDNA.certifications.gaf_badge_url,
                 brandDNA.certifications.bbb_badge_url, brandDNA.business.license_number,
                 brandDNA.business.years_in_business, brandDNA.business.city
SSIM weight: 0.08 | SSIM threshold: 0.82

MOBILE (< 480px): Wraps to 2-col grid, rows of 2 + 1 centered.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Services                                                        [BELOW FOLD] │
│ background: #ffffff | full width                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│              brandDNA.copy.services.section_heading                           │
│              Montserrat 700 36px ink | centered | mb: 40px                   │
│                                                                               │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌───────────────────┐ │
│  │ [ICON 40px primary]   │  │ [ICON 40px primary]   │  │ [ICON 40px prim.] │ │
│  │                       │  │                       │  │                   │ │
│  │ Roof Replacement      │  │ Roof Repair           │  │ Storm Damage &    │ │
│  │ Montserrat 700 18px   │  │ Montserrat 700 18px   │  │ Insurance Claims  │ │
│  │                       │  │                       │  │                   │ │
│  │ One-line description  │  │ One-line description  │  │ One-line descr.   │ │
│  │ Inter 400 14px dim    │  │ Inter 400 14px dim    │  │ Inter 400 14px    │ │
│  │                       │  │                       │  │                   │ │
│  │ Learn More →          │  │ Learn More →          │  │ Learn More →      │ │
│  │ Inter 500 accent_dark │  │ Inter 500 accent_dark │  │ Inter 500 acc_dk  │ │
│  └───────────────────────┘  └───────────────────────┘  └───────────────────┘ │
│                                                                               │
│  ┌───────────────────────┐  ┌───────────────────────┐  ┌───────────────────┐ │
│  │ [ICON 40px primary]   │  │ [ICON 40px primary]   │  │ [ICON 40px prim.] │ │
│  │                       │  │                       │  │                   │ │
│  │ Roof Inspection       │  │ Gutters               │  │ Commercial Roofing│ │
│  │ Montserrat 700 18px   │  │ Montserrat 700 18px   │  │ (conditional)     │ │
│  │                       │  │                       │  │                   │ │
│  │ One-line description  │  │ One-line description  │  │ One-line descr.   │ │
│  │ Inter 400 14px dim    │  │ Inter 400 14px dim    │  │ Inter 400 14px    │ │
│  │                       │  │                       │  │                   │ │
│  │ Learn More →          │  │ Learn More →          │  │ Learn More →      │ │
│  └───────────────────────┘  └───────────────────────┘  └───────────────────┘ │
│  Card: 1px silver border, 6px radius, 24px padding, hover shadow             │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.services.section_heading,
                 brandDNA.services[] (name, slug, description, icon, enabled)
SSIM weight: 0.10 | SSIM threshold: 0.80

MOBILE: Single column card stack.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ WhyUs                                                           [BELOW FOLD] │
│ background: primary (#1a2e4a) | full width                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│         brandDNA.copy.why_us.section_heading                                  │
│         Montserrat 700 36px #ffffff | centered | mb: 40px                    │
│                                                                               │
│  ┌────────────────┐  ┌────────────────┐  ┌────────────────┐  ┌─────────────┐ │
│  │                │  │                │  │                │  │             │ │
│  │  [ICON 48px]   │  │  [ICON 48px]   │  │  [ICON 48px]   │  │ [ICON 48px] │ │
│  │  accent fill   │  │  accent fill   │  │  accent fill   │  │ accent fill │ │
│  │                │  │                │  │                │  │             │ │
│  │ 24/7 Emergency │  │ GAF Master     │  │ 25-Year        │  │ We Handle   │ │
│  │ Response       │  │ Elite Certified│  │ Workmanship    │  │ the Ins.    │ │
│  │ Montserrat 700 │  │ Montserrat 700 │  │ Warranty       │  │ Claim       │ │
│  │ 18px #ffffff   │  │ 18px #ffffff   │  │ Montserrat 700 │  │ Montserrat  │ │
│  │                │  │                │  │                │  │ 700 18px    │ │
│  │ Two-line desc  │  │ Two-line desc  │  │ Two-line desc  │  │ Two-line    │ │
│  │ Inter 400 14px │  │ Inter 400 14px │  │ Inter 400 14px │  │ Inter 400   │ │
│  │ neutral        │  │ neutral        │  │ neutral        │  │ 14px neut.  │ │
│  └────────────────┘  └────────────────┘  └────────────────┘  └─────────────┘ │
│                            4 columns, equal width                             │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.why_us.section_heading,
                 brandDNA.differentiators[] (heading, description, icon),
                 brandDNA.business.city
SSIM weight: 0.07 | SSIM threshold: 0.78

MOBILE: 2-column grid, 2 rows.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Process                                                         [BELOW FOLD] │
│ background: #ffffff | full width                                              │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│              brandDNA.copy.process.section_heading                            │
│              Montserrat 700 36px ink | centered | mb: 40px                   │
│                                                                               │
│  ┌────────────────────────┐            ┌──────────────────────┐              │
│  │      STEP 1            │ ·  ·  ·  · │      STEP 2          │ ·  ·  ·  ·  │
│  │  ┌──────┐              │ dotted     │  ┌──────┐            │ dotted      │
│  │  │  1   │              │ connector  │  │  2   │            │ connector   │
│  │  │ 48px │              │ neutral    │  │ 48px │            │ neutral     │
│  │  │ accent bg           │ line       │  │ accent bg         │ line        │
│  │  │ ink  │              │            │  │ ink  │            │             │
│  │  └──────┘              │            │  └──────┘            │             │
│  │                        │            │                      │             │
│  │  Free Inspection       │            │  Custom Quote        │             │
│  │  Montserrat 700 18px   │            │  Montserrat 700 18px │             │
│  │                        │            │                      │             │
│  │  brandDNA.process[0]   │            │  brandDNA.process[1] │             │
│  │  .description          │            │  .description        │             │
│  │  Inter 400 14px dim    │            │  Inter 400 14px dim  │             │
│  └────────────────────────┘            └──────────────────────┘             │
│                                                                               │
│       ┌─────────────────────────────────────┐                                │
│       │             STEP 3                  │                                │
│       │         ┌──────┐                    │                                │
│       │         │  3   │                    │                                │
│       │         │ 48px │                    │                                │
│       │         │ accent bg                 │                                │
│       │         └──────┘                    │                                │
│       │  Expert Installation                │                                │
│       │  Montserrat 700 18px ink            │                                │
│       │  brandDNA.process[2].description    │                                │
│       │  Inter 400 14px neutral_dim         │                                │
│       └─────────────────────────────────────┘                                │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.process.section_heading,
                 brandDNA.process[] (heading, description)
SSIM weight: 0.06 | SSIM threshold: 0.78

MOBILE: Vertical stack, dotted connector line runs vertically left of each step.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Reviews                                                         [BELOW FOLD] │
│ background: silver (#e2e8f0) | full width | 3-col named photo testimonials   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│              brandDNA.copy.reviews.section_heading                            │
│              Montserrat 700 36px ink | centered | mb: 40px                   │
│                                                                               │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐│
│  │ ★★★★★  (5 stars)     │  │ ★★★★★  (5 stars)     │  │ ★★★★★  (5 stars)    ││
│  │ accent fill 16px     │  │ accent fill 16px     │  │ accent fill 16px    ││
│  │                      │  │                      │  │                     ││
│  │ "testimonials[0]     │  │ "testimonials[1]     │  │ "testimonials[2]    ││
│  │  .quote — must have  │  │  .quote              │  │  .quote             ││
│  │  specific outcome"   │  │                      │  │                     ││
│  │  Inter 400 15px ink  │  │  Inter 400 15px ink  │  │  Inter 400 15px ink ││
│  │                      │  │                      │  │                     ││
│  │  ┌────┐              │  │  ┌────┐              │  │  ┌────┐             ││
│  │  │ 48 │ [Name]       │  │  │ 48 │ [Name]       │  │  │ 48 │ [Name]      ││
│  │  │ px │ Mont. 600    │  │  │ px │ Mont. 600    │  │  │ px │ Mont. 600   ││
│  │  │ cir│ 14px ink     │  │  │ cir│ 14px ink     │  │  │ cir│ 14px ink   ││
│  │  │ le │ [City, ST]   │  │  │ le │ [City, ST]   │  │  │ le │ [City, ST] ││
│  │  └────┘ Inter 400    │  │  └────┘ Inter 400    │  │  └────┘ Inter 400  ││
│  │         12px dim     │  │         12px dim     │  │         12px dim   ││
│  │                      │  │                      │  │                    ││
│  │ [Roof Replacement]   │  │ [Storm Damage]       │  │ [Insurance Claim]  ││
│  │  outcome tag pill    │  │  outcome tag pill    │  │  outcome tag pill  ││
│  │  primary bg #ffffff  │  │  primary bg #ffffff  │  │  primary bg #fff   ││
│  └──────────────────────┘  └──────────────────────┘  └────────────────────┘│
│                                                                               │
│     ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────┐ │
│     │  Row 2 card          │  │  Row 2 card          │  │  Row 2 card      │ │
│     │  (same structure)    │  │  (same structure)    │  │  (same structure) │ │
│     └──────────────────────┘  └──────────────────────┘  └──────────────────┘ │
│                                                                               │
│                     See All Reviews →  /reviews                               │
│                     Inter 500 14px accent_dark                                │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.reviews.section_heading,
                 brandDNA.reviews.testimonials[] (quote, photo_url, name,
                 location, outcome_tag), brandDNA.business.city
SSIM weight: 0.10 | SSIM threshold: 0.82
Source: Direction C (Story-Driven Community) testimonials format.

MOBILE: Single column stack.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Gallery                                                         [BELOW FOLD] │
│ background: #ffffff | 3 before/after pairs with lightbox                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│              brandDNA.copy.gallery.section_heading                            │
│              Montserrat 700 36px ink | centered | mb: 40px                   │
│                                                                               │
│  ┌──────────────────────┐  ┌──────────────────────┐  ┌──────────────────────┐│
│  │ [BEFORE LABEL badge] │  │ [BEFORE LABEL badge] │  │ [BEFORE LABEL badge] ││
│  │ primary bg #fff text │  │ primary bg #fff text │  │ primary bg #fff text ││
│  │ ┌────────────────┐   │  │ ┌────────────────┐   │  │ ┌────────────────┐   ││
│  │ │                │   │  │ │                │   │  │ │                │   ││
│  │ │  before_url    │   │  │ │  before_url    │   │  │ │  before_url    │   ││
│  │ │  WebP lazy     │   │  │ │  WebP lazy     │   │  │ │  WebP lazy     │   ││
│  │ └────────────────┘   │  │ └────────────────┘   │  │ └────────────────┘   ││
│  │                      │  │                      │  │                      ││
│  │ [AFTER LABEL badge]  │  │ [AFTER LABEL badge]  │  │ [AFTER LABEL badge]  ││
│  │ accent bg ink text   │  │ accent bg ink text   │  │ accent bg ink text   ││
│  │ ┌────────────────┐   │  │ ┌────────────────┐   │  │ ┌────────────────┐   ││
│  │ │                │   │  │ │                │   │  │ │                │   ││
│  │ │  after_url     │   │  │ │  after_url     │   │  │ │  after_url     │   ││
│  │ │  WebP lazy     │   │  │ │  WebP lazy     │   │  │ │  WebP lazy     │   ││
│  │ └────────────────┘   │  │ └────────────────┘   │  │ └────────────────┘   ││
│  │                      │  │                      │  │                      ││
│  │  [City, Area]        │  │  [City, Area]        │  │  [City, Area]        ││
│  │  .location tag       │  │  .location tag       │  │  .location tag       ││
│  │  Inter 400 12px dim  │  │  Inter 400 12px dim  │  │  Inter 400 12px dim  ││
│  │  click = lightbox    │  │  click = lightbox    │  │  click = lightbox    ││
│  └──────────────────────┘  └──────────────────────┘  └──────────────────────┘│
│                                                                               │
│                     See More Projects →  /gallery                             │
│                     Inter 500 14px accent_dark                                │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.gallery.section_heading,
                 brandDNA.gallery.projects[] (before_url, after_url, location)
SSIM weight: 0.07 | SSIM threshold: 0.78

MOBILE: Single column stack of pairs. Before then after vertically per pair.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ ServiceAreas                                                    [BELOW FOLD] │
│ background: silver (#e2e8f0) | 60/40 left/right split                        │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│         brandDNA.copy.service_areas.section_heading                           │
│         Montserrat 700 36px ink | centered | mb: 40px                        │
│                                                                               │
│  ┌──────────────────────────────────────┐  ┌──────────────────────────────┐  │
│  │ LEFT ZONE (60%)                      │  │ RIGHT ZONE (40%)             │  │
│  │                                      │  │                              │  │
│  │  [Atlanta, GA]  [Marietta, GA]       │  │  ┌────────────────────────┐  │  │
│  │  [Decatur, GA]  [Smyrna, GA]         │  │  │                        │  │  │
│  │  [Roswell, GA]  [Dunwoody, GA]       │  │  │  Google Maps embed     │  │  │
│  │  [Alpharetta, GA] [Sandy Springs]    │  │  │  brandDNA.business     │  │  │
│  │  ... more pills from                 │  │  │  .map_embed_url        │  │  │
│  │  brandDNA.service_areas[]            │  │  │                        │  │  │
│  │                                      │  │  │  iframe, 1px neutral   │  │  │
│  │  Pill style:                         │  │  │  border, 4px radius    │  │  │
│  │  primary bg #ffffff Inter 500 13px   │  │  │                        │  │  │
│  │  4px border-radius 8x16px padding   │  │  │  (fallback: static img)│  │  │
│  │  links to /areas/:city               │  │  │                        │  │  │
│  │                                      │  │  └────────────────────────┘  │  │
│  └──────────────────────────────────────┘  └──────────────────────────────┘  │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.service_areas.section_heading,
                 brandDNA.service_areas[] (city_name, city_slug),
                 brandDNA.business.map_embed_url, brandDNA.business.region
SSIM weight: 0.06 | SSIM threshold: 0.78

MOBILE: Map hidden (display:none). Pills full width, wrap freely.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ FinalCTA                                                        [BELOW FOLD] │
│ 240px tall desktop | background: primary_dark (#13223a) | full width         │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│              brandDNA.copy.final_cta.heading                                  │
│              Montserrat 700 36px #ffffff | centered                           │
│                                                                               │
│              brandDNA.copy.final_cta.subhead                                  │
│              Inter 400 18px neutral | centered | mt: 16px                    │
│                                                                               │
│              ┌──────────────────────────────┐                                 │
│              │   GET YOUR FREE ESTIMATE     │                                 │
│              │   accent bg / ink Montserrat │                                 │
│              │   700 16px / 4px radius      │                                 │
│              │   52px tall / min 200px wide │                                 │
│              └──────────────────────────────┘                                 │
│              links to #hero-form OR /contact                                  │
│                                                                               │
│              Or call us:  [brandDNA.contact.phone]                            │
│              Inter 400 16px neutral + Montserrat 700 20px accent              │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.copy.final_cta.heading, brandDNA.copy.final_cta.subhead,
                 brandDNA.copy.final_cta.button_label, brandDNA.contact.phone
SSIM weight: 0.08 | SSIM threshold: 0.82

MOBILE: Heading 28px. Button full width. Stacks vertically.
```

---

```
┌─────────────────────────────────────────────────────────────────────────────┐
│ Footer                                                          [BELOW FOLD] │
│ background: primary (#1a2e4a) | 4 columns, 25% each                          │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│  ┌──────────────────┐ ┌─────────────────┐ ┌─────────────────┐ ┌────────────┐ │
│  │ COL 1: Brand     │ │ COL 2: Services │ │ COL 3: Areas    │ │ COL 4: CTA │ │
│  │                  │ │                 │ │                 │ │            │ │
│  │ [LOGO white var] │ │ Our Services    │ │ Service Areas   │ │ Get a Free │ │
│  │ max-h 40px       │ │ Mont. 600 14px  │ │ Mont. 600 14px  │ │ Estimate   │ │
│  │                  │ │ accent          │ │ accent          │ │ Mont. 600  │ │
│  │ Business Name    │ │                 │ │                 │ │ 14px accent│ │
│  │ Mont. 600 16px   │ │ · Roof Replace. │ │ · Atlanta, GA   │ │            │ │
│  │ #ffffff          │ │ · Roof Repair   │ │ · Marietta, GA  │ │ [Phone  ] │ │
│  │                  │ │ · Storm Damage  │ │ · Decatur, GA   │ │ [Service▼] │ │
│  │ [address]        │ │ · Gutters       │ │ · Smyrna, GA    │ │            │ │
│  │ Inter 400 13px   │ │ · Inspection    │ │ ... (max 8)     │ │ [GET MY   ]│ │
│  │ neutral          │ │ Inter 400 13px  │ │ Inter 400 13px  │ │ [FREE QUOTE│ │
│  │                  │ │ neutral         │ │ neutral         │ │ accent bg  │ │
│  │ [phone]          │ │ hover: #ffffff  │ │ hover: #ffffff  │ │ ink text   │ │
│  │ Inter 500 13px   │ │                 │ │                 │ │            │ │
│  │ accent           │ │                 │ │                 │ │            │ │
│  │                  │ │                 │ │                 │ │            │ │
│  │ [email]          │ │                 │ │                 │ │            │ │
│  │ Inter 400 13px   │ │                 │ │                 │ │            │ │
│  │ neutral          │ │                 │ │                 │ │            │ │
│  │                  │ │                 │ │                 │ │            │ │
│  │ Lic. #[number]   │ │                 │ │                 │ │            │ │
│  │ Inter 400 12px   │ │                 │ │                 │ │            │ │
│  │ neutral          │ │                 │ │                 │ │            │ │
│  └──────────────────┘ └─────────────────┘ └─────────────────┘ └────────────┘ │
│                                                                               │
│  ──────────────────── 1px primary_slate divider ───────────────────────────   │
│                                                                               │
│  Copyright [Year] [Company Name]. All rights reserved.  | Privacy | Terms    │
│  Inter 400 12px neutral                                                       │
│                                                                               │
└─────────────────────────────────────────────────────────────────────────────┘
Brand-DNA paths: brandDNA.business.logo_url, brandDNA.business.name,
                 brandDNA.business.address, brandDNA.business.license_number,
                 brandDNA.contact.phone, brandDNA.contact.email,
                 brandDNA.services[], brandDNA.service_areas[]
SSIM weight: 0.06 | SSIM threshold: 0.78

MOBILE: Single column stack. Col 1, 2, 3, 4 in order.
        Footer form optional on mobile when MobileCTABar is visible.
```

---

## Secondary Page Wireframes

---

### Service Detail Page (`/services/:service-slug`)

```
┌──────────────────────────────────────────────┐
│ NavBar (sticky, phone right)                  │
├──────────────────────────────────────────────┤
│ PageHero                      [ABOVE FOLD]    │
│ 60% left / 40% right                         │
│  LEFT: h1 (service name + city)              │
│         subhead                              │
│         [GET FREE QUOTE button]              │
│         phone                               │
│  RIGHT: service-specific hero image          │
├──────────────────────────────────────────────┤
│ ServiceTrustBar                               │
│ (5-item strip, 80px, same tokens)            │
├──────────────────────────────────────────────┤
│ ServiceDescription                            │
│ Full-width content block                     │
│ H2 headings | body paragraphs                │
│ What it covers / timeline / materials        │
├──────────────────────────────────────────────┤
│ WhyUs (reused from homepage)                 │
├──────────────────────────────────────────────┤
│ Process (reused from homepage)               │
├──────────────────────────────────────────────┤
│ LocalServiceAreas                             │
│ Pill list of cities with service links       │
├──────────────────────────────────────────────┤
│ Reviews (filtered by service type tag)       │
├──────────────────────────────────────────────┤
│ FAQAccordion (5-8 questions for this service)│
│ Schema: FAQPage                              │
├──────────────────────────────────────────────┤
│ FinalCTA (full-width dark band)              │
├──────────────────────────────────────────────┤
│ Footer (4-col)                               │
└──────────────────────────────────────────────┘
SEO: Service + LocalBusiness + AggregateRating schema
Title: brandDNA.copy.services.{slug}.page_title
H1: brandDNA.copy.services.{slug}.h1
```

---

### City (Service Area) Page (`/areas/:city`)

```
┌──────────────────────────────────────────────┐
│ NavBar (sticky, phone right)                  │
├──────────────────────────────────────────────┤
│ CityHero                      [ABOVE FOLD]    │
│ 55% left / 45% right                         │
│  LEFT: h1 "Roofing Contractor in [City], [ST]"│
│         subhead (local context, climate)     │
│         [GET FREE QUOTE button]              │
│         phone                               │
│  RIGHT: hero image (local job if available)  │
├──────────────────────────────────────────────┤
│ TrustBar (same as homepage)                  │
├──────────────────────────────────────────────┤
│ LocalServices                                 │
│ Services grid, heading: "Roofing Services    │
│  in [City]"                                 │
├──────────────────────────────────────────────┤
│ LocalProjects                                 │
│ Gallery filtered by city tag                 │
│ "Recent Work in [City]"                     │
├──────────────────────────────────────────────┤
│ LocalReviews                                  │
│ Testimonials filtered by city                │
│ "What [City] Homeowners Say"                │
├──────────────────────────────────────────────┤
│ ServiceAreaLinks                              │
│ Grid of other served cities (internal links) │
├──────────────────────────────────────────────┤
│ FinalCTA                                     │
├──────────────────────────────────────────────┤
│ Footer                                       │
└──────────────────────────────────────────────┘
SEO: LocalBusiness with geo, RoofingContractor type, AggregateRating schema
Title: [City] Roofing Contractor | Licensed and Insured | Free Estimates | [Co]
H1: brandDNA.copy.cities.{slug}.h1
```

---

### About Page (`/about`)

```
┌──────────────────────────────────────────────┐
│ NavBar                                        │
├──────────────────────────────────────────────┤
│ AboutHero                     [ABOVE FOLD]    │
│ Full-width, team photo bg, dark overlay      │
│ h1: "[Company] — [City]'s Trusted Roofer     │
│      Since [Year]"                          │
├──────────────────────────────────────────────┤
│ StoryBlock                                    │
│ 50/50 split: founder photo left              │
│              origin story right (3-4 paras)  │
├──────────────────────────────────────────────┤
│ CertificationRow                              │
│ Horizontal: all badge images + 1-sentence   │
│  explanations                               │
├──────────────────────────────────────────────┤
│ TeamGrid                                     │
│ Photo + Name + Role cards                   │
│ Source: brandDNA.team[]                     │
├──────────────────────────────────────────────┤
│ Stats strip (4-col)                          │
│ Roofs installed | Years | Reviews | Warranty │
│ Large numbers in accent                     │
├──────────────────────────────────────────────┤
│ FinalCTA                                     │
├──────────────────────────────────────────────┤
│ Footer                                       │
└──────────────────────────────────────────────┘
```

---

### Contact Page (`/contact`)

```
┌──────────────────────────────────────────────┐
│ NavBar                                        │
├──────────────────────────────────────────────┤
│ ContactHero                   [ABOVE FOLD]    │
│ Dark background                              │
│ h1: "Get Your Free Roof Estimate"            │
│ subhead: brandDNA.copy.contact.subhead       │
├──────────────────────────────────────────────┤
│ ContactBlock                                  │
│ 60% left / 40% right                        │
│  LEFT: Full form                            │
│    [Name] [Phone] [Email]                   │
│    [Service Needed ▼]                       │
│    [Message textarea]                       │
│    [GET MY FREE QUOTE button]               │
│    GHL webhook on submit                    │
│  RIGHT: Address / phone / email / hours     │
│          Map embed                          │
├──────────────────────────────────────────────┤
│ TrustBar (condensed)                         │
├──────────────────────────────────────────────┤
│ Footer                                       │
└──────────────────────────────────────────────┘
```

---

### FAQ Page (`/faq`)

```
┌──────────────────────────────────────────────┐
│ NavBar                                        │
├──────────────────────────────────────────────┤
│ FAQHero                       [ABOVE FOLD]    │
│ Light background                             │
│ h1: "Frequently Asked Questions"             │
│ subhead                                     │
├──────────────────────────────────────────────┤
│ FAQCategories                                 │
│ Tab / anchor links:                         │
│  General | Roof Replacement | Storm Damage  │
│  and Insurance | Cost and Financing         │
│  | Warranties                               │
├──────────────────────────────────────────────┤
│ FAQAccordionList                              │
│ All questions from brandDNA.faq.all[]        │
│ Grouped by category                         │
│ 1px silver border, 4px radius accordions    │
│ Schema: FAQPage                             │
├──────────────────────────────────────────────┤
│ FinalCTA                                     │
├──────────────────────────────────────────────┤
│ Footer                                       │
└──────────────────────────────────────────────┘
Schema: FAQPage — rich results in Google SERPs.
```
