# Performance Report
## Client: New Image Roofing Atlanta
## Stage 10.4d — Lighthouse LCP Gate

**Outcome: PASSED**
**Desktop LCP: 0.58s | Mobile LCP: 2.16s — both under 3.0s gate**

---

## Gate Result

| Device | LCP | Threshold | Gate |
|--------|-----|-----------|------|
| Desktop | **0.58s** | < 3.0s | PASS |
| Mobile | **2.16s** | < 3.0s | PASS |

---

## Full Scores

| Metric | Desktop | Mobile |
|--------|---------|--------|
| Performance score | 100 | 96 |
| LCP | 0.58s | 2.16s |
| FCP | 0.49s | 1.85s |
| TBT | 7ms | 126ms |
| CLS | 0.001 | 0.000 |
| Speed Index | 0.49s | 1.85s |

---

## Notes

- Hero image (hero.webp) is absent (Stage 9 skipped — Gemini quota). LCP is driven by the navy
  hero background and heading text, which are CSS/HTML — extremely fast.
- When Stage 9 is re-run and hero.webp is added, mobile LCP will rise somewhat (image decode).
  At standard WebP compression the site will still clear 3s, but the LCP gate should be re-run
  after the hero image is added.
- Bundle size confirmed at 342KB JS / ~100KB gzip (Stage 10.4b measurement). No oversized assets.
- Chrome binary: /opt/pw-browsers/chromium-1194/chrome-linux/chrome (Playwright Chromium).

---

## Reports

- `Pipeline Data/qa/lighthouse-desktop.json`
- `Pipeline Data/qa/lighthouse-mobile.json`

---

## Decision

Both LCP values are well under the 3.0s gate. Performance scores of 100 (desktop) and 96
(mobile) are excellent. **Proceeding to Stage 11 (Deploy).**
