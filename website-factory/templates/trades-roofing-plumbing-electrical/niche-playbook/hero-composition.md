# Hero Composition: Trades - Roofing, Plumbing, Electrical

Stage 9 (Nano Banana hero image generation) reads this file. `tools/generate-hero.py` substitutes per-client tokens into the prompt assembly section before sending to the Gemini Image API.

---

## 1. Composition Spec

```
Subject: A crew of 2-3 roofing workers actively installing or repairing shingles 
on a pitched residential roof. Workers wear branded safety gear or high-visibility vests.
Scale: Crew occupies the centre-right two-thirds of the frame. 
The roof pitch is the dominant structural element.
Foreground: Lower third shows the street, yard, or gutter line with some sky visible 
above the eave. Keeps the shot grounded as a real residential job site.
Midground: The pitched roof with workers mid-task. Shingles visible, materials present, 
tools in use. This is not a posed shot. Workers are doing something.
Background: Suburban US home peak visible in the upper right. Blue sky or 
light clouds behind the roofline. The neighbourhood feel anchors the homeowner's 
identification with the scene.
Text overlay zone: LEFT 40% of the frame kept relatively clear and unobstructed. 
The hero copy column sits over this zone in the split-screen layout.
People: 2-3 crew members actively working. No posed standing. 
No one looking directly at the camera (creates an unnatural feeling).
Anchor object: The pitched residential roof. Shingles in a mid-install state or freshly 
laid. The roof is the niche signal.
Negative space: Upper left third is sky, providing breathing room for the copy.
Forbidden in frame: Ladders in the centre foreground (safety concern optics), 
scaffolding visible as a structural scaffold (signals complex commercial work), 
debris or waste materials, watermarks, text overlays of any kind, 
branding on buildings that is not the client's.
```

---

## 2. Subject Reference Photo Handling

This niche does not require an owner or founder photo in the hero image. The hero subject is the crew on the roof, not an individual person.

**Photo of crew:** Optional reference input. If the client provides a photo of their actual crew (Stage 4 asset harvesting: `crew-on-roof` category), Gemini uses it as a style reference for crew clothing and branding, not as a face-swap.

**Required composition for crew reference photo:** If provided, the crew reference should be a group shot of the crew in work gear on a real job site. Chest-up acceptable if full-body is not available.

**Behaviour when crew reference is missing:** Use the composition spec above without a reference. The crew should be rendered generically but realistically. Do not use stock-looking faces. Real-looking workwear matters more than faces.

---

## 3. Logo Handling In-Frame

The client logo appears on crew workwear only, not on signage or buildings.

- **Location:** Crew shirts or high-visibility vests. Small chest logo or sleeve patch.
- **Size relative to frame:** Logo is readable at 200% zoom but not dominant. It is a trust signal, not an advertisement.
- **Whether it's prominent or subtle:** Subtle. The logo should be legible if examined closely but should not distract from the composition's primary subject (the roof and the work).
- **When logo file is missing:** Render generic work gear without visible branding. The logo is applied later as a CSS overlay in the split-screen layout, not embedded in the photograph.

---

## 4. Mood Baseline

**Default mood:** `trust`

The trust mood renders the niche's primary conversion context: daytime, clear sky, a competent crew working on a residential roof. It is the opposite of dramatic or emergency. It says: this is routine for us; it will be fine for you.

The `emergency` mood is available for clients who lead with 24/7 emergency response positioning. The `completion` mood is available for clients who want to emphasise the finished product rather than the process.

See `hero-mood-mapping.json` for full mood-to-lighting-brief mapping.

---

## 5. Region Defaults

| Region | Default Mood | Composition Notes |
|--------|-------------|-------------------|
| Southeast US (GA, TN, SC, NC, FL) | trust | Suburban single-family home, pitched gable roof, mature trees in background |
| Tornado Alley (TX, OK, KS, MO) | emergency | Slight drama in sky, visible shingle damage in foreground before repair |
| Northeast US (NY, MA, CT, PA) | overcast_calm | Older colonial or cape-cod style home, grey sky, winter-aware staging |
| Southwest US (AZ, NM, CO, NV) | bright_midday_clean | Low-pitch or flat residential roof, clear blue sky, stucco or tile adjacent |
| Midwest (IL, OH, MI, IN) | trust | Suburban ranch or two-story, wide yard, open sky |
| UK / Ireland | overcast_calm | Terraced or semi-detached home, grey sky, UK-style rooftile or slate |

When `brandDNA.business.region` is not set, use Southeast US defaults (the most generic US suburban roofing context).

---

## 6. Lighting and Colour

**Trust mood + navy palette:** The mid-morning warm light of the `trust` mood pairs well with the deep navy primary. The light blue sky in the background echoes the navy without competing. The amber or golden tones in the warm mid-morning light complement the `accent` (#f5a623) amber CTA.

**Emergency mood + navy palette:** The cooler overcast tones of the `emergency` mood create contrast with the navy. The sky gives the image urgency without panic. The cold-warm contrast makes the accent buttons feel warmer by comparison.

**Completion mood + navy palette:** Golden hour light creates a warm, satisfying conclusion. The warm tones of the finished roof match the accent gold. This mood is best for contractors who lead with quality and satisfaction over speed or emergency response.

**Colour palette integration note:** Gemini Image API does not directly accept hex codes in the prompt. Reference the palette through descriptive language: "deep navy blue tones in the midground shadow areas", "warm amber and gold in the late afternoon sky", "clean white trim on the home's exterior".

---

## 7. Style Ladder

**Generated baseline (Stage 9 default, what Nano Banana produces):**
A photorealistic AI-generated image of a 2-3 person crew on a pitched roof. Natural light, no studio effects. The composition matches the spec above. The image quality is good enough for a live client website. Real and detailed, not cartoonish. 1500x700px.

**Professional shoot (the brief the proposal recommends pricing in):**
A professional photographer on a real job site. Same composition spec but with the client's actual crew in their real branded gear on a real roof. Multiple angles captured. Best images from a 1-2 hour shoot. This is the upgrade the proposal agency should recommend for every client.

**Cinematic premium (what the niche's top-of-pool achieves):**
A professional photographer or videographer shooting with a drone or high-end DSLR from a controlled angle. Golden hour timing. Crew choreographed for the shot. Real before-and-after comparison possible. This tier is rare in the roofing niche and represents genuine differentiation.

---

## 8. Example Prompt Assembly

The following is the assembled prompt body with `{token}` placeholders. `tools/generate-hero.py` substitutes these at runtime.

```
A photorealistic photograph of a roofing crew of 2-3 workers actively installing 
new shingles on a pitched residential roof in {location}. 

Composition: The crew occupies the centre-right two-thirds of the frame. 
Workers wear {brand_color_description} high-visibility vests or work shirts. 
The left 40% of the frame is open sky and upper-left roof edge, kept clear 
to allow text overlay.

Foreground: Lower third shows the gutter line and the edge of the yard, 
grounding the shot as a real residential job site.

Midground: The pitched roof with workers mid-task. Shingles in a mid-install 
state, tools visible, materials being handled. Workers are working, not posed.

Background: Suburban {region_setting} home visible in the upper right. 
{region_sky}. {region_landscape}.

Lighting: {mood_lighting}. Natural outdoor light. No studio lighting. 
No artificial fill.

Style: Photorealistic. Shot on a professional DSLR. No stock photo aesthetic. 
Real people, real job site, real materials. Depth of field brings the crew 
into focus with the background slightly softened.

Technical: 1500x700px landscape orientation. No text. No watermarks. 
No brand logos on buildings. Company logo may appear as a small patch on 
crew workwear if clearly readable.

{owner_block}

Forbidden: Ladders in the centre foreground, scaffolding as a dominant 
structural element, debris or waste materials, any visible text or watermark, 
stock-photo lighting, unrealistic shingle colours.
```

**Token substitution examples:**

- `{location}` -> "Atlanta, Georgia" or "Nashville, Tennessee"
- `{brand_color_description}` -> "navy blue" or "dark blue"
- `{region_setting}` -> "two-story colonial" (Northeast) / "single-story ranch" (Southwest)
- `{mood_lighting}` -> "Mid-morning warm natural light from the upper left. Clear blue sky. Short soft shadows." (trust mood)
- `{region_sky}` -> "Clear blue sky with light high clouds." (Southeast US default)
- `{region_landscape}` -> "Mature oak trees and suburban lawn visible below the roofline."
- `{owner_block}` -> "" (empty when no crew reference photo provided) or "Use the crew reference photo provided to match the style of crew clothing and branding."

---

## Source Traceback

```
- Composition patterns: from crew-on-roof hero analysis across 5 reference sites
- Mood preferences: trust mood dominant across top-performing sites, emergency mood 
  used selectively for 24/7 positioning
- Subject scale and placement: matched to 55/45 split-screen spec from 09-template-spec.md
- Style ladder: derived from comparison of AI-generated, professional-shoot, and 
  top-of-pool hero images
```
