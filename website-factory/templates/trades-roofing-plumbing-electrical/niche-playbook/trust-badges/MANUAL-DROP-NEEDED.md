# Manual Drop Needed: Trust Badge SVGs

These badge SVG files must be obtained manually from each issuing organisation's contractor portal or licensing page. Stage 4 (asset scraping) cannot retrieve them automatically because they are gated behind contractor login portals or require an active accreditation to download.

Drop each file into this directory (`niche-playbook/trust-badges/`) with the exact filename specified below before running Stage 10.1 (build).

---

## GAF Master Elite Badge

**File to create:** `gaf-master-elite.svg`

**Issuer:** GAF Materials Corporation

**Where to get it:**
1. Log in to the GAF contractor portal at https://www.gaf.com/en-us/for-contractors/contractor-certification
2. Navigate to your certification page under "My Certifications."
3. Download the Master Elite logo pack. Use the SVG file from the pack.
4. If the client is not GAF Master Elite certified, use the GAF Certified Contractor badge instead (lower-tier). Note this in the client's brand-dna.json under `certifications.gaf_tier`.

**What it looks like:** The GAF Master Elite badge is a shield shape with "Master Elite" text and the GAF logo. It is blue and gold in its standard form (isMultiColor: true).

**If the client is not certified:** Do not display the GAF badge. Remove it from the trust bar and replace with the NRCA Member badge or a "Years in Business" text item. Update trust-signals.json for this client.

---

## Owens Corning Platinum Preferred Badge

**File to create:** `owens-corning-platinum.svg`

**Issuer:** Owens Corning

**Where to get it:**
1. Log in to the Owens Corning contractor portal at https://www.owenscorning.com/en-us/roofing/contractors
2. Navigate to "Marketing Resources" or "Contractor Downloads."
3. Download the Platinum Preferred logo. Use the SVG file.
4. Only applicable if the client holds Owens Corning Platinum Preferred status. Verify before displaying.

**What it looks like:** The Owens Corning Platinum Preferred badge features the Owens Corning logo and pink breast cancer awareness ribbon (their legacy brand element). isMultiColor: true.

**If the client is not certified:** Do not display. This badge is only shown for contractors with active Owens Corning Platinum Preferred status.

---

## BBB A+ Accreditation Badge

**File to create:** `bbb-a-plus.svg`

**Issuer:** Better Business Bureau

**Where to get it:**
1. Log in to the BBB business portal at https://www.bbb.org/accreditation-seals
2. Navigate to "Accreditation Seals" or "Marketing Resources."
3. Download the BBB Accredited Business seal in SVG format.
4. The BBB seal links to the client's BBB profile. The `issuerUrl` in trust-signals.json must be updated to point to the client's specific BBB profile URL (e.g. https://www.bbb.org/us/tx/dallas/profile/roofing-contractors/acme-roofing-0825-12345).

**What it looks like:** The BBB seal is a blue and white shield with "BBB" text and the accreditation rating (A+). isMultiColor: true.

**If the client is not BBB accredited:** Do not fabricate the badge. Remove it from the trust bar. The student should recommend BBB accreditation to every roofing client as a pre-site-launch task.

---

## NRCA Member Badge

**File to create:** `nrca-member.svg`

**Issuer:** National Roofing Contractors Association

**Where to get it:**
1. Navigate to https://www.nrca.net/
2. For members: log in to the NRCA member portal and download the member logo from Marketing Resources.
3. For non-members: the NRCA member badge is not available. Do not display it.

**What it looks like:** The NRCA badge features the NRCA logo and "Member" designation. isMultiColor: true.

**Usage in this template:** The NRCA badge is a supplementary trust signal. It is not in the 5-item trust strip by default (the trust strip uses Google Reviews, GAF, BBB, License, and Years). The NRCA badge appears on the About page certification row only.

**If the client is not an NRCA member:** Remove from the About page certification row. This is a soft flag, not a hard halt.

---

## Filing Instructions

1. Obtain each SVG from the source above.
2. Name the file exactly as specified (`gaf-master-elite.svg`, etc.).
3. Drop it in this directory: `website-factory/templates/trades-roofing-plumbing-electrical/niche-playbook/trust-badges/`.
4. For per-client badge variants (e.g. a client who has Owens Corning but not GAF), copy the relevant SVG into the client's brand assets folder at `clients/[Client Name]/[Client Name] Assets/badges/`.
5. Update `brandDNA.certifications` in the client's brand-dna.json to point to the correct badge paths.

Stage 4 (asset scraping) checks for the badge files in this directory. Missing required badges generate a soft flag. Missing the GAF badge when `brandDNA.certifications.gaf_tier` is not null generates a hard halt.
