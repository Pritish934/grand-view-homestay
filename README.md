# Grand View Homestay

A premium, editorial-style website for Grand View Homestay in Mawsmai, Sohra
(Cherrapunji), Meghalaya — built with Next.js (App Router), Tailwind CSS, and
Framer Motion.

## Design notes

- **Palette:** deep pine (`#16231C`), mist white (`#F1F4F1`), warm amber
  (`#C17A3E`) for sunrise/wood accents, and muted moss/slate/stone tones —
  drawn from the fog, hillside, and pinewood of Sohra rather than a generic
  "luxury resort" look.
- **Type:** Fraunces (display serif, warm and editorial) paired with Manrope
  (body sans).
- **Signature moment:** the hero uses layered mist that parts on page load to
  reveal a mountain silhouette and sunrise glow — echoing the actual view
  from the homestay's balcony, which is the single most-praised thing in
  guest reviews.
- Content is built from the real Google Business reviews and details
  provided (pricing, location, host responsiveness), not placeholder copy.

## Getting started

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

> Note: `next/font/google` fetches Fraunces and Manrope from Google Fonts at
> build time, so an internet connection is required for `npm run dev` /
> `npm run build`.

## Structure

```
app/
  layout.js       — fonts, metadata
  page.js         — assembles all sections
  globals.css
components/
  Nav.js          — sticky nav, transparent over hero
  Hero.js         — mist-parting entrance animation
  ViewSection.js  — sunrise/stars highlight
  Peace.js        — "away from the crowd" section
  Host.js         — owner/hospitality section
  Stay.js         — pricing (₹2,500/night) and inclusions
  Reviews.js       — guest testimonials, 4.7★/15 reviews
  Location.js     — directions to Mawsmai, Sohra
  Footer.js
```

## Customizing

- Swap the SVG illustrations in `Hero.js`, `ViewSection.js`, and
  `Location.js` for real photography when available — they're built as
  full-bleed background elements so a photo can drop in behind the existing
  gradients/overlays.
- Update the "Call to check availability" link in `Stay.js` with the real
  phone number once available (`Add place's phone number` was empty on the
  listing).
- The map embed in `Location.js` is a stylized illustration; replace with a
  real embedded Google Map or static map image using the coordinates for
  `6PVJ+CW Mawsmai, Meghalaya`.
