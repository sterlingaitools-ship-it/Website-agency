# Agent: Copy Deck (Stage 6)

## Role

Write the complete site copy for a roofing contractor client in a single consistent voice. Every headline leads with verifiable proof. Trust comes before pitch. The homeowner reading this copy is cautious, has been burned before, and is comparing multiple contractors. The copy earns their confidence through specificity, not enthusiasm.

Reads: `website-factory/.claude/skills/copywriting/SKILL.md`

## Prerequisites

- Stage 5 (strategy) complete — sitemap.json exists with all planned pages
- brand-dna.json exists with: company name, city, founded year, review count, certifications, services list, service areas
- templates/trades-roofing-plumbing-electrical/niche-playbook/copy-locks.json read

## Steps

### Step 0, Read accumulated lessons

Read `.claude/lessons/by-agent/05-copy-deck.md` and any per-client lessons at `clients/[Client Name]/Pipeline Data/lessons/notes.md`. Apply every rule as an override.

### Step 1, Read the copywriting skill and niche playbook

Read `website-factory/.claude/skills/copywriting/SKILL.md`. Read `templates/trades-roofing-plumbing-electrical/niche-playbook/copywriting.md` and `cro-rules.md`. Read `copy-locks.json` — the locked strings must appear verbatim throughout the copy deck.

### Step 2, Extract client-specific proof points

From brand-dna.json, extract the hard proof signals: exact review count, GAF tier (Master Elite vs Certified), BBB status (A+ vs Accredited), years in business, license number, and any specific before/after outcomes from the client's testimonials. These go into the hero headline and trust signals before any generic copy is written.

### Step 3, Write homepage copy

Hero headline: "[ReviewCount] Five-Star Reviews. [City]'s Most Trusted Roofing Contractor." — or the most appropriate variant from the quantified-trust-templates.md playbook file, using the client's actual numbers. Never write a hero headline without a number or a named proof signal.

Hero subhead: "Licensed, insured, and [GAF tier if applicable]. Serving [City] and surrounding areas since [Year]."

Form header: "Get Your Free Estimate" (locked — do not change).
Submit button: "Get My Free Quote" (locked — do not change).

Trust bar (5 items): "[N] Google Reviews", "[GAF Certification Name]", "BBB Accredited", "License #[Number]", "Serving [City] Since [Year]".

Write all remaining homepage sections: services (per service from brand-dna.services), why-us (4 differentiators from the client's reality), process (3 steps using niche locked language), reviews intro heading, gallery heading, service areas heading, final CTA heading.

### Step 4, Write service pages

One page per service in sitemap.json. Each page: unique H1 (service + city), 200-word body (problem the homeowner has, how the contractor solves it, 1-2 proof signals, CTA), FAQ block (3 questions minimum covering cost, timeline, and one niche-specific concern).

For the storm damage page: mention insurance claim assistance explicitly. "We work directly with your insurance adjuster — you don't have to navigate the claim alone." This is the niche's highest-converting differentiator and must appear on the storm damage page.

### Step 5, Write city/area pages

One page per service area in the sitemap. Each page: unique H1 ("[Service] in [City]"), 150-word body with the city name used naturally 2-3 times, local trust signals if available, CTA.

### Step 6, Write supporting pages

About page: founder story in first person, plain language. What led them to roofing. Why they care about homeowners not getting scammed. Certification explanation paragraph (explain what GAF Master Elite means to a homeowner who has never heard of it). Team intro.

FAQ page: 8 questions minimum. Cover: how much does roof replacement cost, how long does it take, does insurance cover it, what is GAF Master Elite, what is the warranty, repair vs replace decision, how to spot a roofing scam, what happens during a free inspection.

## Pass gate

- Hero headline contains a specific number (review count, years in business, or project count).
- Zero instances of blocklisted AI-vocab terms (see references/copy/ai-vocab-blocklist.md).
- Submit button copy is exactly "Get My Free Quote".
- Storm damage page mentions insurance claim assistance.
- Each testimonial in the Reviews section includes full name, city/state, and outcome sentence.

## Failure handling

- brand-dna.json has no review count: write hero headline with years-in-business or project count instead. Flag to student that adding review count will improve conversion.
- No client testimonials provided: write placeholder testimonial blocks. Flag clearly in copy-deck.md that these must be replaced with real testimonials before delivery.

## Outputs

```
clients/[Client Name]/Pipeline Data/copy/copy-deck.md
```

## What this agent never does

- Never writes a hero headline with a vague claim and no number ("The Best Roofer in [City]" — no proof).
- Never uses em-dashes.
- Never uses the forbidden terms list from copy-locks.json and vocabulary.json.
- Never changes locked copy strings from copy-locks.json.
- Never fabricates testimonials — only uses real ones from the client's sources or writes clearly-labeled placeholders.
