# allbirds: design notes

1. **Signature**: Warm lifestyle photography with hand-drawn white chalk squiggles and handwritten headlines, framed by square-cornered, all-caps CTAs.

2. **Type**: Geograph is used almost everywhere (143 uses), with a separate "emirati_dirham" font loaded just for the currency glyph. Tracking is +0.6px on every role. h1 is 32px/400, h2 24px/400 and body 18px/23.4. The scale is small (11–18, then a jump to 32). Section heads are uppercase (NEW ARRIVALS) while product names use sentence case. Hero lines are set in a handwritten marker style (inferred: baked into the image or an SVG, because tokens show no second family).

3. **Colour**: Ink #212A2F, not black. Large areas use #FFFFFF, #F3F3F3 (product tiles), #F8F7F5 and #EEE8E3 (warm announcement bar). Muted text is #212A2F at 75%. Sale/discount red is #AD1F00, used for the "SALE" nav item and "(31% Off)".

4. **Layout & rhythm**: Full-bleed hero. A Pantone-style swatch card ("Radiant Gold") overlaps a mustard colour field next to the beach photo. A second hero has a left-aligned text block and two equal CTAs. A merch block puts one big lifestyle image next to a 2x2 product grid. The page is about 6 screens long with 8 sections.

5. **Imagery & motion**: Golden-hour lifestyle shots, low-angle street shots and macro flower shots, with studio product cut-outs on #F3F3F3. No animation libraries, no video, 0 running animations.

6. **Components**: Buttons are #212A2F or white, 0px radius, uppercase, wide tracking. The radii list is empty, so everything is square. Shadows are soft (0 2px 24px rgba(0,0,0,.09)). Nav is uppercase with a centred script logo. A green round chat bubble floats bottom-right.

7. **Anti-slop moves**:
   - Hand-drawn doodles sit on top of the photography.
   - A Pantone swatch card is used as the hero device.
   - Zero border radius on all components.
   - A dedicated font for the AED dirham symbol.
   - Positive tracking on body text.

8. **Commerce mechanics**: Prices show the struck-through original in light grey, then the bold sale price, then a red "(xx% Off)". A free-shipping threshold (400 AED) sits in the top bar. The Arabic toggle and flag are at top-left. Two parallel CTAs: SHOP MEN / SHOP WOMEN.

## Navigation and motion

1. **Navbar**: Promo bar first (38px: Arabic toggle and flag at left, the free-shipping-over-400-AED message centred). Then a 45px white header row (`sticky`, at 38px): 5 uppercase links at left, the script logo centred, 5 icons at right (store, search, account, help, cart). **It scrolls away and does not come back**: its top tracked −scrollY (−362 at 400px, −1462 back up at 1500), and frames 2–8 show no header. The detector calls this "hides on scroll down"; it is plain scroll-away. No background, blur or shadow change. Promo text is Geograph 14px with +0.5px tracking. Hover registered no change.
2. **Scroll**: Native, with no libraries, pinning, parallax or reveals; the 8 frames show stacked banners and product rails at normal speed. One x-mandatory snap carousel (the featured-collection rail).
3. **Mobile menu**: The hamburger turns into an X. A full-screen white drawer opens below the promo bar and header, which persist. It has 5 uppercase rows with dividers: chevrons on 3, SALE in red. A grey footer holds Arabic, Log in and social links. (The detector logged the empty cart drawer again.)
4. **Micro-interactions**: 0.1s ease (x58), 0.25s ease-in-out (x18), 0.5s ease. Buttons use 0.1s.
5. **Steal this**:
   - A full-height mobile drawer under a persistent header: ~60px rows, 1px dividers, chevrons for sub-levels, and utilities in a tinted footer.
   - A promo bar that holds the AED free-shipping threshold, with the Arabic switch at far left.
   - One red nav item (SALE, #AD1F00) in an ink-coloured nav.
