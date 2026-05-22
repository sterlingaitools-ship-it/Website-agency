# Agent: Build (Stage 10.1)

## Role

Clone the niche template, overlay the client's brand-dna values, assemble all assets, run the Vite build, and verify the output is production-ready. The output is a dist/ folder that deploys to Vercel without modification. Every structural and visual rule in the niche wireframe must be satisfied before this stage passes.

Reads: `website-factory/.claude/skills/frontend-design/SKILL.md`, `website-factory/.claude/skills/impeccable/CLAUDE.md`

## Prerequisites

- brand-dna.json complete (Stage 7 passed)
- hero-final.{png,webp} present (Stage 9 complete)
- All required assets in the client Assets folder (Stage 4 passed)
- copy-deck.md complete (Stage 6 passed)

## Steps

### Step 0, Read accumulated lessons

Read `.claude/lessons/by-agent/09-build.md` and any per-client lessons at `clients/[Client Name]/Pipeline Data/lessons/notes.md`. Apply every rule as an override.

### Step 1, Read the design skills

Read `website-factory/.claude/skills/frontend-design/SKILL.md` to ground the taste calibration. Read `website-factory/.claude/skills/impeccable/CLAUDE.md` for the 5-dimension audit framework (a11y, performance, theming, responsive, anti-patterns).

### Step 2, Run the template builder

Run `tools/build-from-template.py --client "[Client Name]" --niche trades-roofing-plumbing-electrical`. This materialises the client website directory and substitutes brand-dna sentinels.

### Step 3, Verify sentinel substitution

Open src/config/brand-dna.js in the client website directory. Confirm zero __REQUIRED__ sentinels survive. If any remain, identify which fields are missing in brand-dna.json and return to Stage 7 to fill them.

### Step 4, Place assets

Copy all files from `clients/[Client Name]/[Client Name] Assets/` into the correct public/ subfolders: logo to public/, badges to public/badges/, project photos to public/work/, team photos to public/team/, hero image to public/hero.{png,webp}.

### Step 5, Verify section order

Open src/pages/HomePage.jsx. Confirm sections are imported and rendered in this exact order: NavBar, Hero, TrustBar, Services, WhyUs, Process, Reviews, Gallery, ServiceAreas, FinalCTA, Footer. MobileCTABar must be rendered outside the main element (fixed position overlay). If the order is wrong, edit HomePage.jsx to correct it before building.

### Step 6, Run the build

Run `npm install --no-audit --no-fund` then `npm run build` inside the client website directory. If the build fails, read the error output, identify the root cause, fix it, and retry. Do not skip errors.

### Step 7, Verify build output

Open dist/index.html. Confirm: no __REQUIRED__ sentinels, Google Fonts link present, meta title and description populated, phone number appears at least twice (NavBar and Hero).

### Step 8, Run impeccable audit

Using the 5-dimension audit framework from `website-factory/.claude/skills/impeccable/CLAUDE.md`, audit the built output:
1. Accessibility: all images have alt text, all form inputs have labels, interactive elements have focus rings.
2. Performance: images are WebP or optimised JPG, Google Fonts uses display=swap.
3. Theming: all colors come from CSS variables, no hardcoded hex values in JSX.
4. Responsive: MobileCTABar visible on mobile, trust bar stacks correctly at sm breakpoint, hero reflows to single column at md breakpoint.
5. Anti-patterns: no inline style prop overrides, no hardcoded copy strings.

## Pass gate

- npm run build exits 0.
- No __REQUIRED__ sentinels in dist/index.html.
- TrustBar renders immediately after Hero in the HTML output (verify with grep or DOM inspection).
- Phone number present in NavBar and Hero.
- MobileCTABar present with fixed positioning and accent background.
- Impeccable audit: zero critical failures.

## Failure handling

- Build fails on a component import error: fix the import path and retry.
- TrustBar is not immediately after Hero in output: edit HomePage.jsx to reorder. Do not ship with wrong section order.
- Missing logo: halt. Flag to student — build cannot proceed without a logo.

## Outputs

```
clients/[Client Name]/[Client Name] Website/dist/  (production build)
clients/[Client Name]/[Client Name] Website/src/   (source, for future edits)
```

## What this agent never does

- Never ships a build with __REQUIRED__ sentinels surviving in dist/.
- Never reorders sections from the niche wireframe without explicit instruction.
- Never uses inline styles to override the niche template's design system.
- Never skips the impeccable audit even when under time pressure.
- Never deploys — Stage 10.1 builds; Stage 11 deploys.
