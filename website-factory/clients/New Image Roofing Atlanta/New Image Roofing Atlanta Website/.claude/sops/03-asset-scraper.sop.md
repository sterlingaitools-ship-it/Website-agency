# SOP 03 - Asset Scraper

Implements: Stage 4 (Asset Harvest).

Niche: trades-roofing-plumbing-electrical

## Purpose

Collect every visual asset the build agent needs before Stage 10.1 starts. No asset may be fabricated, generated, or substituted with stock imagery. Real crew, real roofs, real homeowners only.

## Inputs (per-client)

```
clients/[Client Name]/Pipeline Data/intake/intake.json
clients/[Client Name]/Pipeline Data/research/research-report.md
```

The intake file provides the client website URL, Google Business Profile URL, Facebook URL, Instagram URL, and any additional portfolio links.

## Photo Categories and Required Counts

The following categories define the minimum asset manifest. The build agent checks this manifest before Stage 10.1 proceeds.

### crew_on_roof (required: 3 to 5 shots)
Photos of the actual crew working on a pitched residential roof. Mid-action preferred: measuring ridge lines, nailing shingles, installing flashing, or carrying materials up a ladder. Natural daylight or golden-hour light. No posed standing shots unless the crew member is on a roof. No dark or stormy sky background except in the storm-damage variant.

### completed_project (required: 6 to 12 shots)
Finished roofs on residential homes. Exterior of the house in frame. Consistent sky exposure. Multiple neighbourhoods and home styles preferred. Location tag each photo with city and state.

### before_after_pair (required: 4 to 8 matched pairs)
Each pair consists of one before image (worn, damaged, or storm-hit shingles) and one after image (completed new roof, same angle, same home). The pair must be shot from the same vantage point to make comparison legible. Label each pair with project city and roof type.

### homeowner_testimonial (required: 2 to 4 shots)
Photo of the real homeowner, ideally outside their home or near their front door. Cropped to head and shoulders, minimum 400x400px. Must be paired with the written testimonial that uses their full name, city, state, and outcome sentence. Never use a crew member as a stand-in.

### team_portrait (required: 1 to 2 shots)
Full team or lead crew photo. Outdoor preferred, taken at a job site. Safety gear (hard hats, high-vis vests) acceptable and authentic. Crew in matching branded shirts if available.

### storm_damage (required: 2 to 3 shots)
Photos of actual storm damage: missing shingles, dented flashing, hail pocks on shingles, or fallen debris. These photos go in the storm-damage service page hero and the before images for the before/after gallery. Real client job sites only.

## Badge Sources

The following manufacturer and accreditation sources are the only accepted origins for trust badges. Download the official badge image directly from the issuing body.

- GAF certification badge: gaf.com (Master Elite badge or Certified Contractor badge as applicable)
- BBB accreditation badge: bbb.org (A+ rating badge with current year)
- Owens Corning certification badge: owenscorning.com (Platinum Preferred badge if the client holds this certification)

If the client does not hold a specific certification, do not display that badge. Mark the badge slot as MISSING in the asset manifest and note it as a pre-launch blocker. Do not substitute an unearned badge.

## No Stock Photos Policy

Every photo in the client's asset folder must originate from the client's own documentation, their Google Business Profile photos, their Facebook or Instagram feed, or photos they supply directly. If a category is empty after scraping all channels, flag it as MISSING and alert the student before Stage 5. Do not pull from Unsplash, Getty, Pexels, or any stock library.

## Priority Order for Missing Assets

If scraping completes with gaps, prioritise as follows:

1. Logo (no logo = hard halt, pipeline stops, student notified immediately)
2. crew_on_roof (at least 1 photo required to proceed; fewer than 3 triggers warning)
3. before_after_pair (at least 2 pairs required; fewer triggers warning)
4. completed_project (at least 3 photos required; fewer triggers warning)
5. homeowner_testimonial (0 photos is allowed if written testimonials with names are present; triggers recommendation to request photos)
6. storm_damage (only required if storm-damage service is enabled in brand-dna)
7. team_portrait (optional; generates placeholder slot in build if absent)

## Pass Criteria

- Logo file present in `clients/[Client Name]/[Client Name] Assets/logo/`
- Asset manifest written to `clients/[Client Name]/Pipeline Data/assets/manifest.json`
- All required-count categories meet minimums or are flagged MISSING with student notification
- Zero stock photo filenames (detector checks for known stock URL patterns)
- All badge images sourced from the approved badge sources list above

## When This Stage Halts

- Logo not found after searching client website, GBP, Facebook, Instagram, and any supplied URLs
- No photos of any kind found on any channel (indicates a client with no online presence; escalate to student before proceeding)

## Niche-Specific Notes

Roofing clients who have been in business 5 or more years typically have project photos on their GBP listing. Always scrape GBP photos first before moving to social channels. Facebook Business Pages for roofing contractors frequently contain before/after posts tagged with city names.

Storm damage photos are time-sensitive. Some clients purge them from their GBP after the season. If the intake form notes an active storm season, prioritise storm_damage scraping immediately.

For the homeowner testimonial photos: if the client has Google reviews with reviewer profile photos and matching full names, download the profile photo only if the client can confirm the reviewer consented. Do not download anonymous reviewer profile pictures.

---

## Author + Version

Generated by Module 2D for niche: trades-roofing-plumbing-electrical
Wireframe: research/02-niche-research/trades-roofing-plumbing-electrical/09-wireframe.md
Playbook: templates/trades-roofing-plumbing-electrical/niche-playbook/
