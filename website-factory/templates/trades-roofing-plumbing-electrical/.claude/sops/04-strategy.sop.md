# SOP 04 - Strategy

Implements: Stage 5 (Strategy).

Niche: trades-roofing-plumbing-electrical

## Purpose

Build the site strategy document for this roofing client: define the page structure, target geography, keyword focus, primary differentiator positioning, and GBP optimisation plan. Output feeds Stage 6 copy and Stage 10.1 build.

## Inputs (per-client)

```
clients/[Client Name]/Pipeline Data/intake/intake.json
clients/[Client Name]/Pipeline Data/research/research-report.md
clients/[Client Name]/Pipeline Data/assets/manifest.json
```

## Core Service Pages (5 required)

Every roofing site built in this niche template must include the following five service pages at minimum. Additional pages (commercial roofing, skylight installation, attic ventilation) are optional and driven by the client's actual services.

### 1. Roof Replacement (`/services/roof-replacement`)
The highest-value service and the highest-intent keyword in the niche. Target phrase: "[City] roof replacement" and "[City] new roof cost." The page must answer the cost question (range, not exact), the materials question (shingle types and grades), and the process question (timeline, disruption to household). Schema: Service + LocalBusiness.

### 2. Roof Repair (`/services/roof-repair`)
High-volume, lower-ticket entry service. Converts homeowners with minor damage into future replacement customers. Target phrase: "[City] roof repair" and "roof leak repair near me." The page must include a checklist of signs a roof needs repair vs replacement.

### 3. Storm Damage and Insurance Claims (`/services/storm-damage`)
The headline differentiator for markets with significant hail, wind, or tornado activity. This page must position insurance claim assistance as a full-service offer: the contractor handles the adjuster communication, the supplementing process, and the paperwork. Target phrase: "[City] storm damage roof" and "hail damage roof insurance claim." This page drives the highest average ticket value and the highest urgency conversions. It must appear in the nav bar by name.

### 4. Gutters (`/services/gutters`)
Upsell service. Often bundled with roof replacement. Target phrase: "[City] gutter installation" and "gutter replacement near me." Keep copy focused on downspout drainage, foundation protection, and the convenience of bundling with roof work.

### 5. Roof Inspection (`/services/roof-inspection`)
Free inspection is the primary entry-point CTA throughout the site. The inspection page converts browsers into leads by making the low-commitment offer explicit. Target phrase: "[City] free roof inspection" and "roof inspection after storm." This page must display the "free, no obligation" promise at the top of the hero.

## Headline Differentiator: Insurance Claim Assistance

Insurance claim assistance is the single most powerful differentiator in high-storm markets. It must be treated as a primary headline feature, not a footnote buried in the services list. Position it in:

- The nav bar (Storm Damage as a named link)
- The hero subhead (one sentence referencing claim handling)
- The WhyUs section (one full column focused to "We Handle the Insurance Claim")
- The storm-damage service page hero
- The FinalCTA section copy

Markets where this differentiator applies most strongly: Texas, Oklahoma, Colorado, Kansas, Missouri, Tennessee, Georgia, Alabama, North Carolina, Florida panhandle, and the mid-Atlantic coast (hurricane zone). Confirm the client's primary market at intake and weight the insurance claim copy accordingly.

## Target Geography: Mid-Size US Cities in High-Storm Markets

Default strategy targets mid-size US metros in the Southeast, Midwest, and South Central regions. These markets have high hail and wind event frequency, a homeowner base that has gone through at least one insurance claim, and a moderate-to-high roofing replacement cycle.

City tier strategy:
- Primary city: the city where the GBP is registered. Build one focused city page.
- Secondary cities (4 to 8): surrounding suburbs and towns within the client's service radius. Build one city page per secondary city.
- City page format: `[City] Roofing Contractor | Licensed and Insured | Free Estimates | [Company Name]`

Service area confirmation at intake: ask the client to list every city and ZIP code they actively serve. Do not fabricate service areas.

## GBP Optimisation per Service Area

For each city in the client's service area, the strategy document must include:

1. Primary keyword phrase for that city: "[City] roofing contractor" or "[City] roof replacement"
2. GBP category recommendation: "Roofing Contractor" as primary, "General Contractor" as secondary if applicable
3. GBP post cadence: one post per week minimum, alternating between before/after project posts and educational posts (seasonal maintenance tips, storm prep guides)
4. Review generation touchpoint: send a review request text to every completed job within 48 hours. Link directly to the GBP review URL.
5. Photo upload cadence: upload at least two new project photos per week to GBP. Tag the city name in the photo description.

## Strategy Document Output

Write the strategy document to:

```
clients/[Client Name]/Pipeline Data/strategy/strategy.md
clients/[Client Name]/Pipeline Data/strategy/sitemap.json
```

`sitemap.json` lists every page (homepage, service pages, city pages, about, contact, faq) with its target keyword phrase, page title, and H1. Stage 6 copy reads from this file.

## Pass Criteria

- sitemap.json written and valid JSON
- Five core service pages defined with target keywords
- At least one city page defined per service area city
- Insurance claim positioning confirmed as headline differentiator or explicitly noted as not applicable (e.g. non-storm market)
- GBP optimisation plan written for primary city

## When This Stage Halts

- Client service list is empty or unconfirmed at intake
- Client's primary city is not identifiable from intake data
- Research report indicates the client serves commercial-only work (this template targets residential; flag and escalate)

## Niche-Specific Notes

Roofing clients in competitive metros (Dallas, Houston, Atlanta, Phoenix) may have 50 or more competitors ranking for "[City] roofing contractor." In these markets, the strategy should target suburb-level geography first (Plano, Marietta, Scottsdale) where competition is lower and the client is more likely to have actual jobs and reviews. Do not chase the metro core keyword with a site that has no domain authority.

Storm damage pages should be written before any other service page copy because they have the highest urgency and the highest value. Sequence matters in Stage 6.

---

## Author + Version

Generated by Module 2D for niche: trades-roofing-plumbing-electrical
Wireframe: research/02-niche-research/trades-roofing-plumbing-electrical/09-wireframe.md
Playbook: templates/trades-roofing-plumbing-electrical/niche-playbook/
