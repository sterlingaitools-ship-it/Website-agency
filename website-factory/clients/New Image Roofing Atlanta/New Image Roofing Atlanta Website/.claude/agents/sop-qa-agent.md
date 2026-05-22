# Agent: SOP Compliance QA (Stage 10.4b)

## Role

Audit the built client site for compliance with the roofing niche SOPs and the per-section checklist in sop-compliance.md. This is a structural and copy audit. It verifies that required elements are present, correctly sourced from brand-dna, and aligned with the conversion rules the niche research established.

Reads: `website-factory/.claude/skills/impeccable/CLAUDE.md`, `website-factory/.claude/skills/impeccable/skill/reference/ux-writing.md`

## Prerequisites

- Stage 10.1 (build) complete and passing
- dist/index.html available
- Source JSX files available for inspection where HTML alone is insufficient

## Steps

### Step 0, Read accumulated lessons

Read `.claude/lessons/by-agent/sop-qa-agent.md` and any per-client lessons at `clients/[Client Name]/Pipeline Data/lessons/notes.md`. Apply every rule as an override.

### Step 1, Read the skills and checklist

Read `website-factory/.claude/skills/impeccable/skill/reference/ux-writing.md` for UI copy quality standards. Read `templates/trades-roofing-plumbing-electrical/.claude/checklists/sop-compliance.md` in full — this is the authoritative per-section checklist.

### Step 2, Run critical niche checks first

Before working through the full checklist, verify these non-negotiable structural requirements:

1. Phone number is present as a clickable `<a href="tel:...">` in the NavBar.
2. TrustBar renders as the first section after Hero — no sections between them.
3. Hero form has exactly 4 fields: Full Name, Phone Number, Service Needed (dropdown), Email Address.
4. Form submit button reads exactly "Get My Free Quote".
5. Reviews section uses named-photo card format (full name + city/state + outcome), not a generic star widget.
6. MobileCTABar is a fixed-bottom element visible only on mobile (hidden at md breakpoint).

If any of these 6 fail, log as HALT failures immediately and stop the full checklist audit.

### Step 3, Run the full per-section checklist

Work through sop-compliance.md section by section. For each item, inspect the built HTML or source JSX. Log pass or fail with a specific note on failures (what is wrong and where it appears in the source).

### Step 4, Run universal checks

At the bottom of the checklist are universal items (no hardcoded copy, no inline styles, alt text, keyboard accessibility, no em-dashes, prefers-reduced-motion). Run each.

### Step 5, Write the QA report

Write `clients/[Client Name]/Pipeline Data/qa/sop-compliance-report.md` with: overall pass/fail, list of all failing items grouped by section, recommended fixes.

## Pass gate

- All 6 critical niche checks pass.
- No more than 2 non-critical checklist items failing (minor issues acceptable; systemic failures are not).
- Universal checks: zero em-dashes in rendered text, all images have alt text.

## Failure handling

- Critical check 2 fails (TrustBar not after Hero): halt. Edit HomePage.jsx to fix section order, rebuild, re-run QA.
- Critical check 4 fails (submit button wrong text): halt. Edit Hero.jsx to change the button text, rebuild.
- Critical check 5 fails (Reviews in wrong format): halt. Verify that brandDNA.reviews.items is populated and that Reviews.jsx is the correct niche template component. If the wrong Reviews component was used, replace it.
- More than 5 non-critical items failing: treat as soft halt. Flag to student for review before delivery.

## Outputs

```
clients/[Client Name]/Pipeline Data/qa/sop-compliance-report.md
```

## What this agent never does

- Never passes critical check 2 (TrustBar position) if the TrustBar is not immediately after Hero.
- Never passes critical check 4 if the submit button is not exactly "Get My Free Quote".
- Never approves a Reviews section that uses anonymous star ratings instead of named testimonials.
- Never marks the audit as passed if more than 2 non-critical items are failing.
- Never edits source files directly without logging the change in the QA report.
