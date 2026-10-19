# morpho: design notes

Caveat: a cookie card covers the bottom-left of all three shots. The 60% shot is caught mid-transition, with two sections cross-fading.

1. **Signature**: A deep navy "underwater" scrollytelling page: a giant thin sans set against an italic serif, a floating rendered can, a globe, and a chaptered "01 / 07" side rail.

2. **Type**: Gotham Light 300 for display: h1 97.92px/88px with −6.36px tracking (very tight), h2 51.84px with −2px. Publico Headline italic answers every headline ("A different rhythm.", "More life.", "Pure possibility."). Body and micro labels are Gotham 10px with +1.8px tracking in uppercase ("NATURAL COSTA RICAN SPRING WATER"). The size scale spans 8–22px plus the two display sizes, so the contrast is extreme.

3. **Colour**: Large areas are #101820 and #0A232B (navy/teal-black), with 93–96% translucent navy overlays. The accent is ice blue #D0EDFF, used for the CTA fill and glows. Text is white at 100/43/34/32% opacity, so hierarchy comes from alpha, not grey hexes.

4. **Layout & rhythm**: The page is 27.2 screens long with 11 sections, so it is one long sequence of scenes. A fixed left rail shows chapter progress (01/07). Each scene has the copy left and the hero object centre-right. Small data callouts (Calcium 92.8mg, Magnesium 5.28mg) float over landscape video. A "Places of longevity" tabbed list sits on the globe.

5. **Imagery & motion**: A 3D-rendered can, an interactive-looking globe and drone landscape video (7 videos). 17 running animations. No three/GSAP/WebGL was detected, so the 3D is pre-rendered video or images (inferred).

6. **Components**: A glass nav tray hangs from the top edge with icon-and-label items. Buttons are 999px pills: ice-blue filled "Shop MORPHO ↗" and a ghost "Play / Sound Off" pair. Glow shadows (0 0 9px rgba(208,237,255,.33)) replace drop shadows. A promo code is shown in a bordered box.

7. **Anti-slop moves**:
   - Negative tracking of −6px on a light-weight display face.
   - Every headline pairs sans with italic serif.
   - Sound and play controls on a marketing page.
   - Chapter numbering ("03 / BLUE ZONES", "01 / 05") used as navigation.
   - A "Talk to Morpho" assistant pill instead of a generic chat bubble.

8. **Commerce mechanics**: A single "Shop MORPHO" CTA. The promo is "20% off · MORPHO20 · Through Oct. 15", with the code shown as a bordered chip and a deadline for urgency.

## Navigation and motion

1. **Navbar**: A fixed, transparent 94px header, unchanged in every sample. Wordmark at left. In the centre, a glass tray hangs from the top edge (square top, rounded bottom) with 4 icon-and-label items, 3 of them dropdowns. At right: EN/ES and an ice-blue "Shop MORPHO ↗" pill. Links are Gotham 13px. The promo-code row shows only at the top. A fixed left rail counts chapters (01/07 → 03/07).
2. **Scroll**: Native CSS `scroll-behavior: smooth`, with no Lenis or GSAP. 18 pinned elements (img, canvas, h1, h2) make each chapter a sticky stage, and the frames now show it: the can holds centre while "A world within." fades (540px), turns to a top view (1080px) and opens onto a landscape (1620px); then a full-bleed waterfall (2160px) whose headline fades in and out (2700–3240px). The can is likely a scrubbed canvas or image sequence (inferred).
3. **Mobile menu**: A centred "Explore ⌄" tab turns into "Explore ×" and drops a rounded glass card: 4 segmented pill tabs (Discover active in ice blue), a video card, a numbered link and a product card. A cookie card hides the rest.
4. **Micro-interactions**: 0.2s ease (x27), 0.1s linear, 0.25s and 0.18s ease. Nav hover adds a rgba(208,237,255,.14) fill plus a 1px inset top highlight. The CTA goes from #D0EDFF to white and lifts 1px. Both take 0.18s.
5. **Steal this**:
   - A glass tray nav hanging from the top edge, with that 0.18s fill-plus-highlight hover.
   - A fixed "01 / 07" chapter rail that advances as each sticky scene enters.
   - One sticky object stage whose headlines crossfade in place.
   - A mobile "Explore" tab that drops a tabbed card menu, not a list.
