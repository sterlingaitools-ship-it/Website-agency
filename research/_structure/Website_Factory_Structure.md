# Website Factory, Structure Overview

## What the Factory does

The factory runs a deterministic per-client pipeline that clones the active niche template, overlays per-client brand-dna, copy, and assets, builds and validates the site, then deploys to Vercel and generates a proposal. It takes in four intake fields and produces a live URL and a client-ready proposal HTML file.

---

## Per-niche template

The factory does NOT carry a baseline template. Module 2D generates a per-niche template at `templates/{niche-slug}/` from captured niche research (top-of-niche sites, design tokens, niche playbook, niche-specific QA checklists). Stage 10.1 clones the active niche template per client.

The registered niche template for this stack is:

```
templates/trades-roofing-plumbing-electrical/
```

Registered in `website-factory/config/template-routes.json`.

If no per-niche template exists for the active niche, Stage 10.1 halts with a clear error pointing back to `/build-niche-template`.

---

## Pipeline

Thirteen stages, gate-locked entry and exit. No stage proceeds until the prior one passes its gate.

| Stage | Name | Key output | Gate |
|---|---|---|---|
| 1 | Intake | `intake-form.json` + folder scaffold | 4 fields validated |
| 2 | Research | `research.json` + `brand-research.md` | 11 sections present |
| 3 | SEO | `seo-strategy.json` + keyword gaps + revenue calc | 7 audit sections, 5+ keyword gaps |
| 4 | Asset harvest | `logo/`, `project-images/`, `badges/`, `founder-photos/` | logo found or halt |
| 5 | Strategy | `strategy.json` + `sitemap.json` | per niche playbook |
| 6 | Copywriting | `copy-deck.json` + per-page `.md` files | every sitemap page covered, zero placeholders |
| 7 | Brand DNA | `brand-dna.json` (5-pass extraction) | schema valid, confidence >= 0.70 |
| GATE 1 | Brand DNA Approval | `/approve-brand-dna` command | required only when confidence < 0.70 |
| 9 | Hero image | `hero-final-desktop.png` + `hero-final-mobile.png` | both pass validation |
| 10.1 | Build | `[Client Name] Website/dist/` | Vite builds, all sections in canonical order |
| 10.2 | Personalise | SEO injection, schema markup, sitemap.xml | personalisation checklist passed |
| 10.3 | Uplift | Niche-specific polish per playbook | no-op when no triggers fire |
| 10.4a | Design fidelity QA | SSIM vs niche reference render | aggregate SSIM >= 0.90, loop cap 5 |
| 10.4b | SOP QA | universal + per-niche checklist | >= 95% pass, 0 em-dashes, loop cap 10 |
| 10.4c | Build fidelity | DOM diff vs niche reference build | structural match |
| 10.4d | Perf | Lighthouse LCP | LCP < 3s desktop and mobile |
| 11 | Deploy | `vercel-url.txt` + `deploy-log.json` | Vercel build succeeds |
| 12 | Delivery | `delivery-report.md` | every checklist item passed |
| 13 | Proposal | `proposal.html` | zero `[BRACKET]` placeholders, iframe URL valid |

Run the full pipeline with `/build-all` from inside `website-factory/`. The pipeline halts at approval gates and on any hard failure, writing `MANUAL-INTERVENTION-NEEDED.md` listing exact failures.

---

## Inputs the factory needs (per client)

Each client lands in `clients/[Client Name]/`. The Stage 1 intake agent requires four fields:

| Field | Notes |
|---|---|
| `businessName` | Used as the client folder name |
| `websiteUrl` | Auto-prepends `https://` if missing; must be reachable |
| `phone` | Normalised to digits and `+` |
| `email` | Must contain `@` |

After intake, downstream stages populate:

```
clients/[Client Name]/
  Pipeline Data/
    intake/intake-form.json
    research/research.json
    seo/seo-strategy.json
    strategy/strategy.json
    copy/copy-deck.json
    brand/brand-dna.json
    hero-image/hero-final-{desktop,mobile}.png
    logs/pipeline-state.json
    logs/build-log.md
    deploy/vercel-url.txt
    delivery/delivery-report.md
  [Client Name] Assets/
    logo/
    badges/
    project-images/
    founder-photos/
  [Client Name] Website/
    dist/         ← built site output
  [Client Name] Proposal/
    proposal.html
```

---

## What the per-niche template + playbook supply

The active niche template at `templates/{niche-slug}/` carries:

- Vite + React + Tailwind build infrastructure (design tokens pre-substituted from `niche-design-tokens.json`)
- Per-section JSX components in `src/components/` (one per wireframe section)
- Per-route pages in `src/pages/` (one per sitemap route)
- `src/config/brand-dna.example.js` stamped from the canonical shape contract; `brand-dna.js` is the sentinel-laden copy Stage 10.1 fills per-client
- Niche playbook at `niche-playbook/` with 12 data files:

| Playbook file | What it controls |
|---|---|
| `copy-locks.json` | Locked CTA, form header, privacy line, mobile call label |
| `trust-signals.json` | Trust badge count, badge placements, trust claim count |
| `process.json` | Process section step count and default step content |
| `theme.json` | Theme mode support (light / dark / both) |
| `hero-composition.json` | Hero layout variant and composition rules |
| `photo-manifest.json` | Every required image slot with dimensions and source rules |
| `motion-preset.json` | Animation preset (duration, easing, `prefers-reduced-motion` safe) |
| `vocabulary.json` | Niche-specific terms and their plain-language equivalents |
| `asset-patterns.json` | Expected asset naming conventions and fallback rules |
| `proposal-pages.json` | Proposal section order and content shape |
| `resonance-queries.json` | Queries for Stage 7.5 brand resonance visual analysis |
| `hero-mood-mapping.json` | Hero mood-to-image-direction mapping |

Plus markdown contracts:

- `copywriting.md` (voice grammar, banned phrases, preferred phrases, section-by-section copy frameworks)
- `copy-blocklist-additions.md` (niche-specific additions to the universal AI-vocab blocklist)
- `cro-rules.md` (conversion rate optimisation rules specific to this niche)
- `design-vocabulary.md` (component naming, layout vocabulary)
- `hero-composition.md` (hero section composition contract)
- `quantified-trust-templates.md` (priority-ordered quantified trust line patterns)
- `proposal-pages.md` (proposal section narrative contract)

And per-stage SOPs + agents at `.claude/sops/` and `.claude/agents/` inside the niche template.

The factory pipeline reads from the playbook for every niche-specific decision and from the niche template for every structural decision.

---

## What the factory defaults handle (universal)

These apply regardless of niche:

- Zero em-dashes, enforced at SOP QA
- Smart-quote enforcement (curly quotes, real en-dashes, real ellipsis)
- AI-vocab blocklist at `references/copy/ai-vocab-blocklist.md` + niche additions
- `prefers-reduced-motion: reduce` honoured by every animation
- Theme mode logic (light/dark derived from logo brightness)
- Build stack (Vite + React + Tailwind) per the niche template
- SEO injection, schema markup, sitemap.xml at Stage 10.2
- Lighthouse LCP gate (< 3s desktop and mobile) at Stage 10.4d
- Vercel deploy at Stage 11
- Proposal HTML generation at Stage 13

---

## Canonical brand-dna shape

Every component in every niche template reads from the 32-key shape defined at `references/brand-dna.shape.js`. Key top-level keys:

`meta`, `company`, `contact`, `address`, `hours`, `businessHours`, `social`, `team`, `team_members`, `theme_mode`, `voice_register`, `shape_motif`, `corner_overlay`, `palette`, `typography`, `reviews`, `services`, `serviceAreas`, `trust_badges`, `press_logos`, `previous_projects`, `copy`, `process_steps`, `why_choose_us`, `special_offers`, `faq`, `blog_posts`, `blog_categories`, `location_pages`, `pages`, `credit`

Per-client values are written by Stage 7 (brand-dna-agent) into `Pipeline Data/brand/brand-dna.json`. Stage 10.1 fills the niche template's `src/config/brand-dna.js` from those values.

---

## Outputs the factory produces

| Output | Location |
|---|---|
| Built site | `clients/[Client Name]/[Client Name] Website/dist/` |
| Live Vercel URL | `clients/[Client Name]/Pipeline Data/deploy/vercel-url.txt` |
| Proposal HTML | `clients/[Client Name]/[Client Name] Proposal/proposal.html` |
| Delivery report | `clients/[Client Name]/Pipeline Data/delivery/delivery-report.md` |

---

## Commands (run from inside `website-factory/`)

| Command | Purpose |
|---|---|
| `/build-all` | Full pipeline end-to-end (halts at approval gates) |
| `/stage7` | Brand DNA extraction only |
| `/approve-brand-dna` | Manual approval when confidence < 0.70 |
| `/stage9` | Hero image generation only |
| `/stage-10-1-build` | Build stage only |
| `/stage10-4a-design-qa` | Design fidelity QA loop |
| `/stage10-4b-sop-qa` | SOP compliance QA loop |
| `/diagnose-brand-dna` | Inspect extraction confidence scores |
| `/override-design-fidelity` | Accept build despite QA gap |
| `/override-sop` | Accept build despite SOP gap |
| `/lesson "<correction>"` | Capture a correction into the lessons ledger |

---

## Handoff format

The Module 5 brief lands at `research/output/website-factory-brief.md`. The `/tailor-factory` command reads it and applies any factory-wide settings that need to align with the niche (agency branding in the proposal template, etc.).

---

## Two-zone discipline

- `website-factory/system/` is frozen during client runs. The `pre-tool-use.sh` hook blocks writes to `system/` when an active client is set.
- All per-client work goes only to `clients/[active-client]/`.
