# MicB Scientific — Frontend Prototype

HTML + CSS + vanilla JS. No build step. Open `index.html` by double-clicking, or run `python -m http.server` and visit http://localhost:8000.

## Pages
index, shop (search/category/price/sort), product (?id=P001), cart (localStorage), checkout (DEMO — nothing is sent), about, learn (6 demo articles), faq, contact (demo form), policy (?p=shipping|returns|preorder|warranty|privacy|terms — "to be confirmed" templates).

## Edit in one place
- `js/config.js` — phone, email, address, social links, WhatsApp number, categories, logo paths
- `js/data/products.js` — all products, demo prices, image paths

## Image-to-product mapping
| ID | Image file | Notes |
|---|---|---|
| P001 | products/p001-beginner-refractor-telescope.jpg | OK |
| P002 | products/p002-70mm-astronomical-telescope.jpg | OK |
| P003 | products/p003-114mm-reflector-telescope.jpg | Dobsonian-style; near-identical to P005 |
| P004 | products/p004-130mm-reflector-telescope.jpg | Shows a blue refractor — does not match "reflector" name |
| P005 | products/p005-150mm-dobsonian-telescope.jpg | Near-identical to P003 |
| P006 | products/p006-astronomy-binocular-10x50.jpg | Sliver of neighbouring image at edge |
| P007 | products/p007-beginner-microscope.jpg | Sliver at right edge |
| P008 | products/p008-digital-microscope.jpg | Sliver at right edge |
| P009–P012 | eyepiece set, 2x Barlow, moon filter, tripod | OK |
| P013 | products/p013-science-experiment-kit.jpg | OK |
| P014 | products/p014-space-shuttle-building-puzzle.jpg | Box cut off at right, sliver at left |
| P015 | products/p015-meteorite-specimen.jpg | OK |
| Hero | hero/hero-featured-telescope.jpg | Text sits in the white left zone, telescope on the right |
| Categories | telescopes, binoculars, microscopes, accessories, science-kits, collectibles | Crops contain baked-in screenshot text; hidden with CSS (object-position/zoom), files untouched |
| Unused | categories/tripods.jpg | Shows a phone-mount adapter, not a tripod; no matching category tile |

## Missing / needs replacing
1. **Official logo** — not in the zip. A temporary text wordmark is used. Add `assets/images/logo/micb-logo.svg` or `.png` (footer: `assets/images/micb-logo-white.png`) and it appears automatically.
2. `hero/featured-telescope-cutout.png` — not supplied (not needed; the hero uses the JPG).
3. All supplied images are AI-generated demo art at ~160–240 px wide; they look soft when enlarged. Replace with real, high-resolution photos using the same filenames before launch.
4. Confirm: phone, email, address, WhatsApp, social links, prices, specs, policies.
