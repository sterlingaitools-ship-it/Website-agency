# Niche-Specific AI-Vocab Additions: Trades - Roofing, Plumbing, Electrical

These bans are derived from 8 top-of-pool roofing sites that consistently use plain-language alternatives. Low-scoring sites in the pool use these phrases; top-performers do not. The bans apply to all copy produced during Stage 6 and any subsequent copy edits.

Run:
```bash
python3 tools/copy-lint.py --check \
  --include-niche trades-roofing-plumbing-electrical \
  clients/[Client Name]/Pipeline Data/copy/copy-deck.md
```

---

## Banned Words (Single Tokens)

```
seamless
robust
leverage
cutting-edge
synergize
synergizing
game-changer
game-changing
tailored
bespoke
holistic
transformative
innovative
revolutionize
revolutionizing
unparalleled
exceptional
premier
paramount
meticulous
```

## Banned Phrases (Multi-Word)

```
best price guaranteed
limited time offer
act now
industry-leading
we do it all
quality craftsmanship
your satisfaction is our priority
trusted by homeowners
exceptional service
competitive pricing
years of experience
world-class
state-of-the-art
top-notch
second to none
going above and beyond
exceeds expectations
peace of mind
done right the first time
we treat your home like our own
we are passionate about
committed to excellence
dedicated to quality
we take pride in
quality you can trust
experienced professionals
your trusted contractor
industry-leading expertise
comprehensive roofing solutions
roofing solutions
one-stop shop
full-service contractor
all your roofing needs
needs
elevate your home
enhance your property
transform your home
professional roofing services
outstanding results
superior craftsmanship
highest standards
unmatched quality
best-in-class
customer-centric
customer-focused
client-focused
end-to-end solutions
360-degree service
full suite of services
```

---

## Plain-Language Substitutes

Use these instead of the banned phrases above:

| Banned | Use instead |
|--------|-------------|
| "quality craftsmanship" | specific warranty claim, e.g. "25-year workmanship warranty" |
| "industry-leading" | specific certification, e.g. "GAF Master Elite - top 3% of US roofers" |
| "trusted by homeowners" | specific review count, e.g. "247 five-star Google reviews" |
| "we do it all" | specific service list with links to each page |
| "best price guaranteed" | "free estimate, no obligation, written quote" |
| "seamless process" | describe the process in three plain steps |
| "exceptional service" | specific outcome, e.g. "we showed up on the day we said we would" |
| "competitive pricing" | "get a written quote before you commit to anything" |
| "years of experience" | "we have replaced 400+ roofs in this area since 2012" |
| "we are passionate about" | remove entirely; let the work speak |
| "peace of mind" | "25-year written warranty" or "we are licensed, insured, and on record" |

---

## Why These Bans Apply to This Niche

Homeowners hiring a roofing contractor are specifically trained to distrust AI-generated, template-generated, and marketing-speak copy. The top fear in this niche is getting scammed. Phrases like "quality craftsmanship," "industry-leading," and "trusted by homeowners" appear on every fly-by-night contractor's website.

Top-performing sites in this niche use specific numbers, named certifications, and direct plain language. They earn the homeowner's trust by being specific and verifiable, not by claiming to be trustworthy.

Every banned phrase above was found on low-scoring contractor sites in the reference pool. None of them appear on the top-performing sites.

---

## Validation

```bash
python3 tools/copy-lint.py --check \
  --include-niche trades-roofing-plumbing-electrical \
  clients/[Client Name]/Pipeline Data/copy/copy-deck.md
```

The linter parses fenced code blocks under `## Banned words` and `## Banned phrases` and appends them to the universal list before checking.
