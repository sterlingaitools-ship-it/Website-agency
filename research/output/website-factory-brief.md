# Website Factory Brief
## Niche: trades-roofing-plumbing-electrical
## Student: Aiden Maila
## Date: 2026-05-22

This brief drives the niche-level tailoring of the factory. It does not carry per-client data. Per-client intake (business name, URL, phone, location) happens at `/run-factory` time.

---

## Part A — Niche Identity

```
niche: trades-roofing-plumbing-electrical
nicheLabel: Roofing Contractors
nicheCategory: trades / contractor

endCustomerProfile:
  who: Homeowner aged 35-65, owned their home 5+ years, facing a roof repair or
       replacement decision, terrified of being scammed.
  decisionMoment: One of five triggers — storm damage hits (forced, urgent), getting
                  three quotes (comparison mode), insurance adjuster is involved
                  (handoff mode), a neighbour just had their roof done (social proof
                  trigger), or seasonal spring/fall inspection planning.
  topFears:
    1. Getting ripped off or scammed by a fly-by-night contractor
    2. Shoddy work causing further damage (water, mould, structural)
    3. The contractor disappearing mid-job after taking the deposit
  topPains:
    1. Not knowing how to evaluate quality — they can only evaluate trust
    2. The review count is buried or missing — they cannot verify reputation quickly
    3. The phone number is hard to find or not tap-to-call on mobile

agencyPositioningSentence: "I help roofing companies win the trust of homeowners
  staring at a $15k repair bill so they choose you over the four others quoting them."

agencyOneLiner: "I build high-converting websites for roofing contractors."
```

---

## Part B — Niche-Tailoring Directives

These directives apply to every client built in this niche. The `/tailor-factory` command reads this section to update factory-wide settings.

---

### Active Template

- Path: `website-factory/templates/trades-roofing-plumbing-electrical/`
- Registered in: `website-factory/config/template-routes.json`
- Visual personality: Deep navy authority with high-contrast amber CTAs. Sharp edges. No rounded decorative elements. Trades professionalism, not consumer-soft branding.
- Design direction: Proof-First Authority (Direction A) with Direction B mobile fixed bottom bar and Direction C named photo testimonials.

---

### Trust Stack (top 5 in priority order)

These are the five trust signals, in the order they must appear on the site. The order is derived from homeowner decision behaviour in this niche.

1. **Volume Google Reviews with star rating.** The homeowner's first filter. Sites with 200+ reviews at 4.5+ stars pass. Sites with under 50 reviews are filtered out before the homeowner visits. The review count must appear above the fold, not buried. Display: star icons + raw count + "Google Reviews" label.

2. **Manufacturer certification badge (GAF Master Elite / Owens Corning Platinum).** Less than 3% of US roofers qualify for GAF Master Elite. The badge must appear with one explanatory sentence — "Top 3% of US roofers. Earns you a 50-year manufacturer warranty." Most roofing sites show the badge without explaining it. The explanation is the differentiator.

3. **BBB Accreditation (A or A+).** The homeowner's instinctive trust proxy for trades. Display the badge with a link to the live BBB profile. The link is the proof. A badge without a link is a claim; a badge with a link is verifiable.

4. **License number displayed openly.** Visible in the trust bar and the footer. Not "Licensed and Insured" alone — the actual license number. Contractors who list the number signal nothing to hide.

5. **Named photo testimonials with specific outcomes.** Not generic star ratings. Name + photo + city/state + one outcome sentence ("They replaced our roof in one day and handled the entire insurance claim"). Outcome tags: "Roof Replacement", "Storm Damage", "Insurance Claim", "Roof Repair".

**Trust bar placement rule:** The trust bar must render immediately below the hero fold with no scroll required. This is a hard rule for this niche. The homeowner's scam-detection reflex fires in the first 10 seconds.

**Trust badge registry (expected files in `public/badges/`):**
- `gaf-master-elite.svg` or `gaf-certified.svg`
- `owens-corning-platinum.svg` (conditional — client-dependent)
- `bbb-accredited.svg`
- `license-badge.svg` (generic fallback if no certification image)

---

### Hero Composition

The hero is the highest-SSIM-weighted section (0.18 threshold 0.85). Every client build must match this composition.

- Layout: Split-screen, 55% copy left / 45% image right, full viewport height
- Image subject: Real crew on a real roof, or completed high-quality roof with suburban home background. No stock photos.
- Image placement: Right column, full height, object-fit cover. On mobile: 240px strip below the copy.
- Social proof eyebrow (above H1): 5-star icons + review count + "Five-Star Reviews". This is the first text the homeowner reads.
- H1 pattern: `[reviewCount] Five-Star Reviews. [City]'s Most Trusted Roofing Contractor.` No taglines. No company name in the H1.
- Subhead pattern: `Licensed, insured, and GAF certified. Serving [City] and surrounding areas since [foundedYear].`
- Quote form inline in hero: 4-5 fields (Full Name, Phone, Service Needed, Email). Submit button: "Get My Free Quote". Full width on mobile.
- Secondary CTA below form: "Or call us:" + phone number as click-to-call.
- Primary CTA button label (locked): "Get Your Free Estimate"
- Form header (locked): "Get Your Free Estimate"
- Submit button label (locked): "Get My Free Quote"

**Hero image directive for Stage 9 (hero image generation):**
- Subject: Licensed roofing crew actively working on a residential roof, shot from ground level looking up. Suburban neighbourhood background visible. Bright daylight. Professional appearance — safety equipment, clean uniforms. No posed studio shots.
- Mood: Competent, reliable, local. Not dramatic or action-movie. The homeowner wants reassurance, not excitement.
- Avoid: stock-photo poses, white-background cutouts, CGI-rendered roofs, hands shaking, people looking at the camera.

---

### Copy Voice

**Voice in one sentence:** Direct and plain, speaking to a homeowner about the decision to hire a contractor they can trust with one of the most expensive repairs their home will ever need.

**5 sample headlines (use or adapt for per-client copy):**
1. `[Number] Five-Star Reviews. Serving [City] Since [Year]. Get a Free Estimate Today.`
2. `[City]'s Most Trusted Roofer — GAF Certified, Licensed, Insured.`
3. `Storm Damage? We Handle Everything — Including the Insurance Claim.`
4. `[Number]+ Roofs Installed. Your Neighbours Hired Us. So Should You.`
5. `Emergency Roof Repair in [City] — We Answer 24/7. Call Now.`

**5 sample CTAs:**
1. `Get Your Free Estimate` (locked primary — do not vary)
2. `Book a Free Roof Inspection`
3. `Call Now — We Answer 24/7`
4. `Check Our Reviews First`
5. `Talk to a Roofer Now`

**10 end-customer phrases to echo verbatim in copy:**
1. "I didn't know who to trust" — name this fear directly, do not dance around it
2. "The website looked professional so I assumed they were"
3. "First thing I did was check Google reviews"
4. "They showed up when they said they would" — reliability is the lowest bar and it still wins
5. "I needed someone who'd dealt with insurance before"
6. "I wanted to see photos of actual roofs they'd done, not stock images"
7. "No license number on the website? Hard pass."
8. "The warranty was the deciding factor"
9. "Free estimate / free quote" — always use this phrase; price is unknown and scary
10. "Licensed and insured" — non-negotiable minimum; say it explicitly, not implied

**Section-by-section copy rules:**

| Section | What the copy must convey |
|---|---|
| Hero | Proof before pitch. Review count in the headline. City and credential in the subhead. The form is the offer. |
| TrustBar | Five verifiable signals. Every badge needs a label. Every label needs a number or a link. |
| Services | Service name is the heading. One line of copy per card. That line answers "what pain does this solve?" |
| WhyUs | Four differentiators, each with one sentence of proof. No differentiator without a fact behind it. |
| Process | Three steps. Step heading is an action noun. Step body is two sentences: what we do, what you get. |
| Reviews | Specific outcome in every quote. Name, city, outcome tag. No anonymous reviews. No generic "great service" quotes. |
| Gallery | Location tag on every photo. Three before/after pairs on homepage. No stock photos, ever. |
| FinalCTA | Repeat the offer. "No obligation. No pressure. Just a clear, honest quote." No new claims here. |
| Footer | License number visible. Phone and email both present. Copyright year current. |

**Banned phrases (all apply; see also `niche-playbook/copy-blocklist-additions.md`):**
- "quality craftsmanship" — replace with a specific warranty claim
- "industry-leading" — replace with the actual certification
- "trusted by homeowners" — replace with the review count
- "best price guaranteed" — signals race to bottom
- "limited time offer" — storm-chaser language
- "act now" — pressure tactic, homeowners recognise it
- "we do it all" — undermines roofing specialisation
- "years of experience" — replace with the actual number and a specific outcome
- "exceptional service" — replace with a specific claim
- "we care deeply" — remove; let the work speak

**Preferred phrases:**
- "free inspection, no obligation"
- "we handle the insurance claim — inspection, paperwork, and adjuster meeting"
- "GAF Master Elite — top 3% of US roofers"
- "licensed, insured, and on the books"
- "we do not start until you sign off on the quote"
- "same-day emergency tarping"
- "25-year workmanship warranty in writing"
- "our license number is on this page — look it up"
- "we answer the phone seven days a week"

---

### SEO Targets

**Primary keyword cluster:**

| Keyword | Intent |
|---|---|
| roofer near me | Transactional, highest local intent |
| roof replacement [city] | Transactional, city-specific pages required |
| roof repair near me | Transactional, high urgency |
| roofing contractor [city] | Commercial core term |
| emergency roof repair | Transactional/urgency, 24/7 positioning required |

**Secondary clusters:**
- Insurance/storm: "roof insurance claim help", "storm damage roof repair", "does insurance cover roof replacement"
- Specific services: "shingle replacement", "flat roof repair", "metal roofing contractor", "gutters replacement"
- Cost/pricing: "how much does roof replacement cost", "roof replacement cost [city]"
- Trust/verification: "licensed roofing contractor near me", "GAF certified roofer near me"

**Service pages (from sitemap):**
- `/services/roof-replacement`
- `/services/roof-repair`
- `/services/storm-damage` (alias: `/storm-damage`, `/insurance-claims`)
- `/services/gutters`
- `/services/roof-inspection`

**City/area pages:**
- One page per served city at `/areas/:city`
- Dynamic template — populated from `brandDNA.serviceAreas[]`
- Minimum 400 words per city page
- Each city page must reference one local detail (weather, neighbourhood, recent event)

**GBP optimisation:** Yes. Required for every client. GBP profile must match the website address, phone, and hours exactly.

**Schema markup required on every page:**
- Homepage: `LocalBusiness`, `RoofingContractor`, `AggregateRating`
- Service pages: `Service`, `LocalBusiness`, `AggregateRating`, `FAQPage`
- City pages: `LocalBusiness`, `RoofingContractor`, `AggregateRating`
- FAQ page: `FAQPage`, `LocalBusiness`

---

### Form Pattern

The hero inline form is the primary conversion surface.

- Fields: Full Name (text), Phone Number (tel), Service Needed (select), Email (email)
- Optional 5th field: Message (textarea) — include on contact page, omit from hero form
- Submit button: "Get My Free Quote" (locked, first-person language)
- Form header: "Get Your Free Estimate" (locked)
- Privacy line: "No spam. No obligation. Your info stays private." (locked)
- On submit: fire GHL webhook, redirect to thank-you state inline (no page redirect)
- Thank-you message: "Thanks, [firstName]. We received your request and will call you back within 24 hours. We look forward to earning your trust."
- Mobile: Full-width tap-to-call button supplements the form; the MobileCTABar provides the primary mobile conversion path

---

### What the Factory Must NOT Do

These are anti-patterns found on low-performing roofing sites. The factory must actively avoid them.

1. Do not put the company name or logo as the first thing a homeowner reads. Proof first. Name second.
2. Do not use stock photos of roofs or crews. The homeowner explicitly said "I wanted to see photos of actual roofs they'd done, not stock images."
3. Do not bury the review count below the fold. It must be visible in the hero and the trust bar.
4. Do not display a certification badge without an explanatory sentence. The badge alone means nothing to a homeowner who has never heard of GAF.
5. Do not make the phone number a plain text string on mobile. It must be a tap-to-call `<a href="tel:...">` link on every page.
6. Do not omit the license number. "Licensed and Insured" as text is not enough. The actual license number must be visible in two places.
7. Do not use anonymous or generic testimonials. Every review card needs a name, a location, and a specific outcome.
8. Do not add a fourth process step unless the client's actual process has four stages.
9. Do not use em-dashes anywhere. Hard fail at SOP QA.
10. Do not add new claims in the FinalCTA section. Repeat the offer only.

---

## Part C — Brand-DNA Defaults for This Niche

These are the niche-level defaults applied to every client build. Per-client values from Stage 7 (brand-dna-agent) override these where the client's specific data differs.

```
palette:
  primary:        #1a2e4a   (navy — nav, footer, structural sections)
  primary_dark:   #13223a   (hover states, footer bg)
  primary_slate:  #1f3757   (secondary section backgrounds, card borders)
  accent:         #f5a623   (all CTA buttons, mobile CTA bar)
  accent_light:   #f9c467   (button hover)
  accent_dark:    #c4851c   (button pressed/active, text links)
  neutral:        #94a3b8   (placeholder text, disabled states, dividers)
  neutral_dim:    #475569   (secondary body text, captions, meta labels)
  silver:         #e2e8f0   (card backgrounds, section dividers, trust bar)
  ink:            #162844   (primary body text, headings on white)

typography:
  headingFont:    Montserrat
  bodyFont:       Inter
  headingWeights: 400, 600, 700, 800
  bodyWeights:    400, 500, 600
  googleFontsUrl: https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap

voice_register: commercial

shape_motif: angular
  (Sharp edges throughout. border-radius 4px default, 6px cards.
   No pill shapes except service-area tags.)

theme_mode_default: light
  (White content sections, navy structural sections. Dark mode not supported.)

motion_preset: energetic
  (Duration: 400ms, easing: ease-out, stagger: 50ms, enter: translateY(16px).
   prefers-reduced-motion: all transitions 0ms.)
```

---

## Part D — Missing Fields

These fields require per-client data and cannot be populated from niche research alone. They are marked `[MISSING]` in every `brand-dna.js` file until Stage 7 fills them.

| Field | Why it is missing | Where it gets filled |
|---|---|---|
| `company.name` | Per-client | Stage 7, brand-dna-agent |
| `company.shortName` | Per-client | Stage 7 |
| `company.tagline` | Per-client | Stage 6, copy-deck-agent |
| `company.url` | Per-client | Stage 1, intake |
| `company.licenseNumber` | Per-client | Stage 2, research-agent |
| `company.description` | Per-client | Stage 6 |
| `company.serviceRegion` | Per-client | Stage 1, intake |
| `contact.phone` | Per-client | Stage 1, intake |
| `contact.phoneTelLink` | Per-client | Stage 1, intake |
| `contact.email` | Per-client | Stage 1, intake |
| `contact.googleMapsUrl` | Per-client | Stage 2, research-agent |
| `contact.mapsEmbedUrl` | Per-client | Stage 2 |
| `address.*` | Per-client | Stage 1, intake |
| `hours.*` | Per-client | Stage 2, research-agent |
| `businessHours.*` | Per-client | Stage 2 |
| `social.*` | Per-client | Stage 2 |
| `team.founder.*` | Per-client | Stage 2 |
| `palette.*` | Niche defaults set above — override only if client brand diverges | Stage 7 |
| `reviews.rating` | Per-client | Stage 2, research-agent |
| `reviews.googleCount` | Per-client | Stage 2 |
| `reviews.items[]` | Per-client | Stage 2 + Stage 6 |
| `services[]` | Niche defaults available — override per client services offered | Stage 5, strategy-agent |
| `serviceAreas[]` | Per-client | Stage 5 |
| `trust_badges[]` | Per-client (which certs they hold) | Stage 4, asset-agent |
| `previous_projects[]` | Per-client | Stage 4 |
| `team_members[]` | Per-client | Stage 4 |
| `faq[]` | Niche defaults available — supplement with client-specific questions | Stage 6 |
| `blog_posts[]` | Per-client — optional at launch | Stage 6 (if in scope) |
| `copy.hero.headline` | Per-client (review count + city from data) | Stage 6 |
| `copy.hero.subheadline` | Per-client (year founded from research) | Stage 6 |
| `pages.about.*` | Per-client | Stage 6 |
| `pages.contact.*` | Per-client | Stage 6 |
| `credit.agency` | Aiden Maila — set once at `/tailor-factory` | `/tailor-factory` |
| `credit.url` | Student's agency URL — set once at `/tailor-factory` | `/tailor-factory` |

**No field is silently blank. Every field above is either filled from niche defaults (palette, motion, fonts, voice register) or explicitly marked `[MISSING]` pending per-client data.**

---

## Validation Checklist

- [x] Niche template registered in `template-routes.json`
- [x] All Part A identity values filled from research
- [x] Trust stack priority order sourced from `05-trust-signals.md`
- [x] Hero composition sourced from `09-template-spec.md`
- [x] Copy voice sourced from `03-copy-patterns.md` and `02-customer-voice.md`
- [x] SEO targets sourced from `06-seo-landscape.md` and `09-sitemap.json`
- [x] palette values match `09-template-spec.md` Color System exactly
- [x] typography matches `09-template-spec.md` Typography section exactly
- [x] Every required field either filled or marked `[MISSING]`
- [x] No required field silently blank
