# Quantified Trust Templates: Trades - Roofing, Plumbing, Electrical

Stage 6 (copywriting) walks these patterns top-to-bottom and uses the first whose conditions are all true. Conditions are evaluated against `research-data.json`. See `copywriting.md` Section 11 for integration context.

---

## Pattern Format

Each pattern:

```
### Pattern N
Conditions: {expressions over research fields}
Output template: "{string with placeholders}"
Justification: {what this proves about the contractor}
Source: {niche pattern this derives from}
```

---

## Placeholders

Available placeholders Stage 6 substitutes from `research-data.json`:

- `{years}` - `research.yearsInBusiness`
- `{foundedYear}` - `research.yearFounded`
- `{primaryCity}` - `research.primaryCity`
- `{adjacentCity}` - first entry in `research.serviceAreas`
- `{region}` - `research.region` or derived "Greater {primaryCity} area"
- `{jobCount}` - `research.googleReviewCount + research.nicheExtensions.roofing.manualProjectCount`
- `{reviewCount}` - `research.totalReviewCount`
- `{audienceNoun}` - `vocabulary.audienceNouns.endCustomerPlural` (homeowners)
- `{roofsInstalled}` - `research.nicheExtensions.roofing.roofsInstalled`
- `{serviceAreaCount}` - `research.serviceAreas.length`

---

## Patterns (Top to Bottom, Priority Order)

### Pattern 1 - High-trust, long-established, certified

Conditions: `years >= 10 && reviewCount >= 100 && gafMasterElite == true`
Output template: `"{years} years. {reviewCount} five-star reviews. GAF Master Elite certified."`
Example output: "14 years. 247 five-star reviews. GAF Master Elite certified."
Justification: Three quantified signals in one line. Tenure + social proof + third-party certification. This is the highest-credibility combination available in the niche.
Source: Derived from top-performing sites with all three signals present.

---

### Pattern 2 - High scale, strong review count

Conditions: `roofsInstalled >= 200 && reviewCount >= 50`
Output template: `"{roofsInstalled}+ roofs installed across {region} since {foundedYear}."`
Example output: "400+ roofs installed across the Greater Atlanta area since 2012."
Justification: Volume proves scale. The number is specific and verifiable. "Since {foundedYear}" adds the tenure signal.
Source: High-converting hero eyebrow patterns from Houston TX and Phoenix AZ roofing sites.

---

### Pattern 3 - GAF certified with strong reviews

Conditions: `gafMasterElite == true && reviewCount >= 50`
Output template: `"GAF Master Elite certified. {reviewCount} verified five-star reviews in {primaryCity}."`
Example output: "GAF Master Elite certified. 183 verified five-star reviews in Nashville."
Justification: Certification is the top-3% claim. Review count provides the social proof baseline. City grounds it locally.
Source: Certification-led hero patterns from premium-positioning roofing sites.

---

### Pattern 4 - Tenure with multi-area footprint

Conditions: `years >= 10 && serviceAreaCount >= 5`
Output template: `"{years} years protecting {audienceNoun} in {primaryCity} and {serviceAreaCount} surrounding cities."`
Example output: "12 years protecting homeowners in Denver and 8 surrounding cities."
Justification: Tenure signals survival. Multi-area footprint signals scale and institutional credibility. Together they tell the homeowner: this is a real business, not a one-person operation.
Source: Multi-area contractor hero patterns.

---

### Pattern 5 - High volume, insurance specialisation

Conditions: `roofsInstalled >= 100 && insuranceClaims == true`
Output template: `"{roofsInstalled}+ roofs. {reviewCount} five-star reviews. We handle insurance claims."`
Example output: "250+ roofs. 96 five-star reviews. We handle insurance claims."
Justification: Volume + social proof + the insurance claim differentiator. Directly addresses the homeowner's secondary fear (the insurance process) in the trust line.
Source: Storm-damage-specialised contractor sites in tornado-alley markets.

---

### Pattern 6 - BBB A+ with tenure

Conditions: `years >= 5 && bbbRating == "A+"`
Output template: `"BBB A+ Accredited. Serving {audienceNoun} in {primaryCity} since {foundedYear}."`
Example output: "BBB A+ Accredited. Serving homeowners in Charlotte since 2015."
Justification: BBB is the homeowner's instinctive trust proxy for trades. The founding year adds stability.
Source: Trust-led positioning patterns from BBB-prominent contractor sites.

---

### Pattern 7 - Newer contractor, strong reviews

Conditions: `years >= 3 && reviewCount >= 30 && years < 10`
Output template: `"{reviewCount} five-star reviews since {foundedYear}. Licensed and insured in {primaryCity}."`
Example output: "67 five-star reviews since 2020. Licensed and insured in Sacramento."
Justification: Newer contractors cannot lead with tenure. Review velocity (many reviews in fewer years) proves momentum. License confirmation addresses the homeowner's verification need.
Source: Growth-stage contractor best-practice from niche research.

---

### Pattern 8 - Fallback

Conditions: (always true, fires when no earlier pattern matches)
Output template: `"Serving {audienceNoun} in {primaryCity} since {foundedYear}. Licensed and insured."`
Example output: "Serving homeowners in Columbus since 2018. Licensed and insured."
Justification: Minimum viable quantified trust when specific signals are unavailable. Always include founding year and the license signal.
Source: Universal fallback pattern.

---

## 10 Trust Statement Templates

The following 10 templates are for use in specific surfaces across the site.

### 1. Hero Eyebrow (above H1)

`★★★★★ {reviewCount} Five-Star Reviews`

Context: The first thing the homeowner reads. The review count is the primary filter.

---

### 2. Trust Bar - Review Count Item

`{reviewCount} Google Reviews`

Context: First item in the 5-item trust strip. Montserrat 700 20px for the number, Inter 400 12px for the label.

---

### 3. Trust Bar - Years Item

`{yearsInBusiness} Years Serving {city}`

Context: Fifth item in the trust strip. Large number in accent color, small label in neutral.

---

### 4. Testimonial Section Intro (section heading subtext)

`{reviewCount} Verified Five-Star Reviews from Real {city} Homeowners`

Context: Subtext below the reviews section H2. Sets volume and location before the individual cards.

---

### 5. Insurance Claim Reassurance

`We have handled {insuranceClaimCount}+ insurance claims across {primaryCity}. We know how the process works and we handle it from documentation to final payment.`

Context: Insurance claim service page hero subhead or Why Us section item body. Replace `{insuranceClaimCount}` with a real number or remove the count if unavailable.

---

### 6. GAF Certification Explanation

`GAF Master Elite is held by fewer than 3% of US roofing contractors. It means stricter training, better materials access, and the ability to offer the Golden Pledge warranty: up to 50 years of coverage backed by GAF, not just by us.`

Context: Trust bar tooltip, About page certification row, or FAQ item. Explains the credential to homeowners who have never heard of it.

---

### 7. BBB Accreditation Explanation

`Our BBB A+ rating is public record. It means we resolve disputes, maintain ethical business practices, and have been operating transparently for {yearsInBusiness} years.`

Context: About page certification row or trust signal tooltip. Links to the actual BBB profile.

---

### 8. License Number Transparency

`Our {stateName} contractor license number is {licenseNumber}. You can verify it at {stateVerificationUrl}. We display it because we have nothing to hide.`

Context: Footer license line, About page, or trust bar license item. The transparency framing is a conversion driver in this niche.

---

### 9. Warranty Trust Statement

`Every roof we install comes with a written 25-year workmanship warranty. If anything we did fails within 25 years, we come back and fix it at no cost. That is our promise in writing.`

Context: Process section badge text, service page warranty section, or Why Us differentiator body.

---

### 10. Founding Year Statement

`{brandShort} has been serving {city} homeowners since {foundedYear}. That is {yearsInBusiness} years of roofs in this area. We are not going anywhere.`

Context: About page intro or hero subhead variant. The "we are not going anywhere" line directly addresses the homeowner's fear of a contractor who disappears mid-job.

---

## Source Traceback

```
- Pattern 1 source: top-performing sites with all three signals (tenure, reviews, certification)
- Pattern 2 source: high-volume contractor hero patterns from Houston TX, Phoenix AZ markets
- Pattern 3 source: certification-led positioning patterns from premium-tier sites
- Pattern 5 source: storm-damage-specialised contractor sites in tornado-alley markets
- Pattern 8 source: universal fallback derived from niche research minimum viable trust line
- Trust statement templates 1-10: derived from sub-task 2 (customer voice) and 
  sub-task 5 (trust signals) niche research
```
