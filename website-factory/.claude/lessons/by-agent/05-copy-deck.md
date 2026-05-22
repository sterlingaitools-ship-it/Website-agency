# Copy-deck rules for trades-roofing-plumbing-electrical

Seeded from the AIW 2.0 research stack for Roofline Digital.
Every copy-deck for a client in this niche must satisfy the rules below.

---

## Hero headline pattern

Pull from this pattern on every client build:

`{reviewCount} Five-Star Reviews. {city}'s Most Trusted Roofing Contractor.`

The review count must appear in the headline. If the client has fewer than
50 reviews, use: `{city}'s Licensed, GAF-Certified Roofing Contractor.`
Do not invent a review count. Do not use the company name in the H1.

## Primary CTA (locked — do not vary)

`Get Your Free Estimate`

Source: `templates/trades-roofing-plumbing-electrical/niche-playbook/copy-locks.json` -> `ctaPrimary`

## Secondary CTA

`Book a Free Roof Inspection`

Source: `copy-locks.json` -> `ctaSecondary`

## Submit button label (locked)

`Get My Free Quote`

First-person language. Do not change to "Submit" or "Send".

## End-customer phrases to echo verbatim (top 5)

These phrases come directly from homeowner reviews and Reddit discussions.
When a roofer reads these in your copy, they recognise their customers.
Use them in FAQ answers, service page intros, and trust claims.

1. "I didn't know who to trust" — name this fear; do not dance around it
2. "First thing I did was check Google reviews"
3. "They showed up when they said they would"
4. "I needed someone who had dealt with insurance before"
5. "No license number on the website? Hard pass."

## End-customer fears to address in FAQ (top 5)

1. Getting ripped off or scammed — address directly in FAQ and trust bar
2. Shoddy work causing further damage — address with warranty language
3. Not knowing what they are paying for — address with transparent quote language
4. Contractor disappearing mid-job — address with written-approval process
5. Insurance claim becoming a dispute — address with "we handle the claim" language

## Banned phrases (apply on every copy pass)

Replace these with specific numbers, credentials, or outcomes:

- "quality craftsmanship" -> specific warranty claim
- "industry-leading" -> the actual certification name
- "trusted by homeowners" -> the review count
- "best price guaranteed" -> "free estimate, written quote before we start"
- "limited time offer" -> remove entirely
- "act now" -> remove entirely
- "we do it all" -> list the specific services
- "years of experience" -> "we have replaced X+ roofs in this area since YEAR"
- "exceptional service" -> one specific outcome sentence
- "we care deeply" -> remove; let the work speak

## Trust elements to lead with (top 5, in order)

1. Google review count with star rating — above the fold, raw number visible
2. GAF Master Elite certification with explanation ("Top 3% of US roofers")
3. BBB Accreditation with a link to the live BBB profile
4. License number displayed openly — the actual number, not just "Licensed"
5. Named photo testimonials with specific outcomes — name, city, outcome tag

## Homepage section order (from niche template)

NavBar, MobileCTABar, Hero, TrustBar, Services, WhyUs, Process, Reviews,
Gallery, ServiceAreas, FinalCTA, Footer

TrustBar must render immediately below the Hero with no scroll required.

---

## Canonical sources (load these — do not duplicate their content here)

- Locked phrases: `templates/trades-roofing-plumbing-electrical/niche-playbook/copy-locks.json`
- Voice and tone: `templates/trades-roofing-plumbing-electrical/niche-playbook/copywriting.md`
- Per-niche SOP for copy: `templates/trades-roofing-plumbing-electrical/.claude/sops/05-copy-deck.sop.md`
- Banned word list: `website-factory/references/copy/ai-vocab-blocklist.md`
- Niche blocklist additions: `templates/trades-roofing-plumbing-electrical/niche-playbook/copy-blocklist-additions.md`

Source: `research/02-niche-research/trades-roofing-plumbing-electrical/`, generated 2026-05-22
Template: `website-factory/templates/trades-roofing-plumbing-electrical/`
Agency: Roofline Digital
