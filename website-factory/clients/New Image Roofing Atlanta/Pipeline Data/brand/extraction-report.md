# Stage 7 Extraction Report: New Image Roofing Atlanta

**Date:** 2026-05-22
**Agent:** brand-dna-agent
**Niche:** trades-roofing-plumbing-electrical
**Client:** New Image Roofing Atlanta

---

## Summary Table

| Field | Value |
|---|---|
| Region | Greater Atlanta, GA |
| Shape mode | sharp |
| Shape motif | blueprint-grid |
| Theme mode | light |
| Voice register | commercial |
| Primary | #1a2e4a (deep navy) |
| Accent | #F5A623 (amber) |
| Accent light | #F3C880 |
| Accent mid | #A66802 |
| Accent dark | #422900 |
| Heading font | Montserrat |
| Body font | Inter |
| Corner overlay | triangle / #f5a623 / 0.08 |
| Aggregate confidence | 0.77 |

---

## Pass 1: Logo Analysis (confidence: 0.65)

**Method:** Visual analysis from logo image shared in session. Logo file was not available as a downloadable PNG due to network policy (client server returns 403 on automated requests). Analysis is based on visual inspection only, not file-based k-means clustering.

**What was observed:**
- Monochrome black-on-white composition. No color in the logo itself.
- Left element: stylized roofing contractor figure in hard hat, holding a large blueprint or architectural plan. Clean line-art illustration style.
- Right element: wordmark in two tiers. "NEW IMAGE" in a light-weight spaced uppercase sans-serif with a horizontal rule above. "ROOFING" in a bold, heavy slab-serif, significantly larger. A double-line rectangular border frames both text tiers.
- Overall shape: ~3:1 wide landscape ratio.

**Dominant colors:** Black (approximately #1a1a1a) and white (#ffffff). No chromatic color present.

**Brightness signature:** Dark logo elements on a light background. theme_mode decision: light.

**Motif description:** "Roofing contractor in hard hat holding blueprints. Clean line-art illustration. Blueprint and planning theme. Rectangular double-line border frame with strong typographic hierarchy."

**Shape language signal:** High angle-to-curve ratio. Rectangular border, strong horizontal rules, and geometric letterforms all contribute to an angular composition. shape_mode: sharp.

**Confidence reduced from 0.80 to 0.65** because logo was not available as a file for programmatic analysis. Color extraction used niche-template defaults rather than actual logo dominants.

---

## Pass 2: Palette Synthesis (confidence: 0.75)

**Method:** Logo is monochrome. No usable chromatic dominant present. Palette derived from niche-template defaults (#1a2e4a / #f5a623), which were themselves derived from research on top-performing roofing contractor sites in the trades-roofing-plumbing-electrical niche.

**Decision rationale:**
- Navy #1a2e4a: Professional, authoritative, insurance-claim-serious. Passes WCAG AA for white text (contrast ratio > 10:1). Appropriate for a certifications-led roofing company operating in a competitive metro market.
- Amber #f5a623: High-visibility call-to-action color. Warm and inviting for homeowners. Navy text on amber passes WCAG AA at ~5.9:1.
- No reason to deviate from the niche defaults given a monochrome logo with no color signal.

**Accent stops** derived by `tools/derive-accent-stops.py` with HSL luminance-aware shifts:
- accent_light #F3C880: +18% L, -8% S for card backgrounds and tints
- accent_mid #A66802: -22% L, +6% S for contrast applications
- accent_dark #422900: -42% L, +8% S for hover states and deep accents

---

## Pass 3: Typography Selection (confidence: 0.75)

**Method:** No niche-specific design-synthesis-overrides.md found at `templates/trades-roofing-plumbing-electrical/niche-playbook/design-synthesis-overrides.md`. Applied universal defaults.

**Observations from logo:**
- "ROOFING" wordmark uses a bold, high-contrast serif that suggests authority and permanence.
- "NEW IMAGE" uses a lighter, spaced sans-serif suggesting modernity.

**Selection:**
- Heading: Montserrat Bold/ExtraBold. Strong geometric sans-serif that reads as modern and confident at large display sizes. Captures the weight of the logo's typographic hierarchy.
- Body: Inter Regular/Medium. Maximum readability for homeowners scanning service pages and FAQs.

**Note:** A slab-serif for headings (e.g. Roboto Slab) would more literally echo the logo's "ROOFING" wordmark character. If the niche-specific overrides file is created for this niche, consider adding Roboto Slab as an alternative. For now, Montserrat is the stronger default for conversion-optimized roofing sites.

---

## Pass 4: Hero Mood (confidence: 0.90)

**Signals used:**
- research.json: 114 Google reviews at 4.7 stars, Owens Corning Platinum Preferred, 14 years in business, 15,000+ roofs replaced, open 24/7, insurance claim specialist
- copy-deck.md: Hero H1 established as "114 Five-Star Reviews. Atlanta's GAF-Certified, Owens Corning Platinum Roofing Contractor."
- strategy.json: heroMessageAngle: "certification-and-volume"

**Mood decision:** authoritative-and-approachable. The hero leads with hard numbers and top-tier credentials (authoritative) but immediately softens with free inspection, no obligation, open 24/7 language (approachable). This is the correct register for homeowners facing a large unplanned purchase.

**Hero composition** (from niche playbook):
- Split-screen 55/45 (copy left, hero image right)
- Social proof eyebrow above H1
- Trust chips below form (3 maximum)
- Trust bar immediately below hero with no gap

---

## Pass 5: Motif Extraction (confidence: 0.80)

**Logo iconographic signal:** The roofer figure is literally holding a blueprint/plan. The rectangular border frame reinforces a structured, precision-oriented aesthetic. "Blueprint-grid" is the most accurate motif for the background pattern SVG library.

**shape_motif: blueprint-grid**

Valid values confirmed: `blueprint-grid` is in the niche template's motif library (see Module 2D generate output).

**Corner overlay decision (Step 3.8):**
- Motif candidates: triangle (classic-roofing/pitched), shingle (trade-craft-visible/material-led)
- Selected: triangle. New Image Roofing Atlanta is a traditional roofing company; the pitched-roof triangle silhouette is immediately legible to homeowners as a roofing brand signal. It is distinct from shape_motif (blueprint-grid) as required.
- Color: #f5a623 (accent amber, draws subtle attention to the overlay)
- Opacity: 0.08 (default; appropriate for light section backgrounds)

---

## Theme Mode Decision (Step 3.5)

No resonance.json present (Stage 7.5 not run). Logo brightness signature: dark marks on light background (luminance < 0.5). Decision: **light**.

---

## Voice Register Decision (Step 3.6)

No niche vocabulary.json segmentVocabulary block found. Applied commercial/residential signals from research.json:

- businessModel.residentialPct: 60, commercialPct: 40
- specialization: storm-damage-and-insurance-claims
- brandVoice: professional, certifications-focused, insurance-claim-specialist
- certifications: Owens Corning Platinum, GAF Certified, BBB A+ - all point to a contractor that sells on credentials, not on price or warmth

Decision: **commercial**. Copy adopts an authoritative, credential-led register. Specific numbers over adjectives. Processes over promises. Written everything.

---

## Confidence Summary

| Pass | Confidence | Note |
|---|---|---|
| 1 - Logo analysis | 0.65 | Visual only, no file-based k-means |
| 2 - Palette | 0.75 | Niche defaults; no logo color signal |
| 3 - Typography | 0.75 | Universal defaults; no override file |
| 4 - Hero mood | 0.90 | Rich data from research + copy-deck |
| 5 - Motif | 0.80 | Clear iconographic signal from logo |
| **Aggregate** | **0.77** | Above 0.70 threshold - auto-proceed |

---

## Gaps Flagged for Human Review

1. **Logo file not on disk.** The logo was visually analyzed from the chat session. The actual PNG file (`New Image Roofing Atlanta Assets/logo/logo-primary.png`) must be placed before Stage 10.1 builds the site. The build agent copies the logo file into the built output; without the real file, the site header will be broken.

2. **Georgia contractor license number.** Research found no license number. All copy-deck instances show `[insert number - student to obtain from client]`. Must be filled before launch.

3. **GAF tier unconfirmed.** Research confirmed GAF Certified but not Master Elite. If Montana Mace confirms Master Elite, all GAF references in the copy deck and trust bar must be updated to "GAF Master Elite" and the `gaf-certified.svg` badge replaced with `gaf-master-elite.svg`.

4. **Niche design-synthesis-overrides.md missing.** No per-niche typography or motif override file exists. If a future student run produces better typography recommendations for this niche, they should be codified there to improve confidence on subsequent builds.

5. **Reviews items[] empty.** Brand-dna.json reviews.items[] is empty. Real Google reviews should be pulled and added before Stage 10.1 renders the reviews section. Request top 5 reviews from Montana Mace or pull them from the GBP directly.
