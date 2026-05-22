# Hero Image Regeneration Required

Stage 9 could not generate hero images. The Gemini Image API key has a
free-tier quota of 0 for all image generation models. This is the same
network/account policy that blocks Apify in this environment.

## Error

```
429 RESOURCE_EXHAUSTED — limit: 0, model: gemini-2.5-flash-preview-image
GenerateRequestsPerDayPerProjectPerModel-FreeTier
```

## Models attempted

- gemini-2.5-flash-image → quota 0 on free tier
- gemini-3.1-flash-image-preview → quota 0 on free tier
- imagen-4.0-fast-generate-001→ not supported via generate_content endpoint

## How to unblock

Upgrade the Gemini API key to a paid plan (Google AI Studio → billing).
Then re-run:

```bash
cd website-factory
python3 tools/generate-hero.py --client "New Image Roofing Atlanta"
```

## Composition brief (filled prompt saved here for when you re-run)

See hero-prompt-desktop.md and hero-prompt-mobile.md for the assembled
prompts that will be sent once the quota is available.

## Pipeline impact

Stage 10.1 will use the niche template's placeholder hero images
(public/hero-image.webp and public/hero-image-mobile.webp from the
template defaults). The site will build and deploy with placeholder
heroes. Replace them by running Stage 9 after upgrading billing.
