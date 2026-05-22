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

The universal list is at `references/copy/ai-vocab-blocklist.md`. The niche-specific additions for roofing are words that trigger mistrust in homeowners who have dealt with contractors before. These include:

- Vague quality superlatives (see universal list for specifics)
- Words that sound like corporate sales-speak rather than a local tradesperson
- Adjectives that claim quality instead of proving it

When in doubt: replace the adjective with a number, a credential, or a specific action.

## Banned Phrases (Multi-Word)

Any phrase that:
- Claims quality without evidence ("best in class", "world class", "top notch")
- Uses urgency manipulation ("act now", "limited time")
- Uses vague completeness ("full-service", "comprehensive", "all your needs")
- Uses first-person emotion ("we care", "we take pride", "we are emotion-driven")
- Implies a superlative without proof ("most trusted", "industry leading")

Rule: replace every vague quality claim with a specific number, credential, or outcome.

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
| "easy process" | describe the process in three numbered steps |
| "exceptional service" | specific outcome, e.g. "we showed up on the day we said we would" |
| "competitive pricing" | "get a written quote before you commit to anything" |
| "years of experience" | "we have replaced 400+ roofs in this area since 2012" |
| "we are emotion-driven about" | remove entirely; let the work speak |
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
