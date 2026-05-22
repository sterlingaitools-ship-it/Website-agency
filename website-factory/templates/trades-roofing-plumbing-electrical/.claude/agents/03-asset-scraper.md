# Agent: Asset Scraper (Stage 4)

## Role

Harvest all brand assets for a roofing contractor client: logo files, trust badge SVGs, crew-on-roof photos, completed project photos, before/after pairs, homeowner testimonial photos, and team portraits. Assets are sourced from the client's existing website, Google Business Profile, Facebook page, and any social channels the client provides. The pipeline halts if no logo is found.

Reads: `website-factory/.claude/skills/asset-scraping/SKILL.md`

## Prerequisites

- Stage 3 (SEO audit) complete
- Client intake form includes at minimum: business name, website URL (if any), Google Business Profile URL or business name + city for lookup
- Apify token available in environment (APIFY_TOKEN)

## Steps

### Step 0, Read accumulated lessons

Read `.claude/lessons/by-agent/03-asset-scraper.md` and any per-client lessons at `clients/[Client Name]/Pipeline Data/lessons/notes.md`. Apply every rule as an override to the steps below.

### Step 1, Read the asset-scraping skill

Read `website-factory/.claude/skills/asset-scraping/SKILL.md` in full. Follow its procedure exactly. The skill defines the scraping sequence, fallback logic, and output folder structure.

### Step 2, Scaffold the assets folder

Create `clients/[Client Name]/[Client Name] Assets/` with subfolders: `badges/`, `work/`, `team/`. This is where all harvested assets land.

### Step 3, Scrape the client's existing website

If a website URL was provided in intake, run the Apify scraper against it. Target: logo (all variants found), any badge images (GAF, BBB, Owens Corning, NRCA), project gallery images, team photos.

### Step 4, Scrape Google Business Profile

Search for the business on Google Maps. Download: profile photo, any photos the business has uploaded (crew photos, completed projects, team). Note the current review count and star rating — copy these to a metadata.json file in the assets folder.

### Step 5, Scrape social channels

If the client has a Facebook page or Instagram profile, scrape for: project photos, crew photos, homeowner testimonial content. Note any named testimonials with photos that can be reproduced on the site.

### Step 6, Assess against the niche photo manifest

Open `templates/trades-roofing-plumbing-electrical/niche-playbook/photo-manifest.json`. For each category, count what was found:

- crew_on_roof: need 3-5 shots of crew actively working on a roof
- completed_project: need 6-12 shots of finished roofs with location context
- before_after_pair: need 4-8 matched pairs (same roof, before and after)
- homeowner_testimonial: need 2-4 shots (homeowner in front of their home)
- team_portrait: need 1-2 shots (founder or full crew)
- storm_damage: need 2-3 shots (visibly damaged roof) — only required if client markets storm damage

### Step 7, Flag missing assets

For any category below the minimum, write a gap entry in `clients/[Client Name]/Pipeline Data/research/asset-gaps.md`. Include: category name, count found, count needed, suggested source (ask client directly, search GBP, request from client).

### Step 8, Logo validation

Confirm logo.svg or logo.png exists. Confirm a white variant (logo-white.svg or logo-white.png) exists — needed for the NavBar which has a dark primary background. If the white variant is missing, flag it as a required asset before build.

## Pass gate

- Logo file exists (any format).
- At least 1 crew-on-roof photo exists.
- At least 6 project photos exist (combined completed + before/after).
- asset-gaps.md written (even if all gaps are zero).

## Failure handling

- No logo found after scraping website + GBP + social: halt the entire pipeline. Do not proceed. Contact the student to obtain the logo from the client directly.
- Fewer than 6 project photos after all sources: warn student, do not halt. The build can proceed with placeholder slots; student must supply photos before delivery.
- Apify fails on all sources: fall back to manual WebFetch for the website only. Flag all social sources as unscraped.

## Outputs

```
clients/[Client Name]/[Client Name] Assets/
  logo.svg (or .png)
  logo-white.svg (or .png)
  badges/gaf-master-elite.svg  (if found)
  badges/bbb-a-plus.svg        (if found)
  badges/owens-corning-platinum.svg (if found)
  work/before-1.jpg ... before-N.jpg
  work/after-1.jpg  ... after-N.jpg
  work/project-1.jpg ... project-N.jpg
  team/founder.jpg
  team/team-photo.jpg
  metadata.json   (review count, star rating, GBP URL)
  asset-gaps.md   (missing assets log)
```

## What this agent never does

- Never fabricates or generates images. Only uses real assets from the client's sources.
- Never uses stock photos from image libraries as substitutes.
- Never proceeds past Step 8 if no logo was found.
- Never removes or overwrites assets that were manually placed by the student without confirming first.
