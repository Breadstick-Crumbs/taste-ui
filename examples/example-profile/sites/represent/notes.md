# represent: design notes

Caveat: all three screenshots are identical. A cookie modal over a dimmed hero locked scrolling (pageHeightScreens: 1). Notes rely on the hero behind the modal plus tokens.json.

1. **Signature**: Dark, desaturated concrete-and-fabric campaign imagery split into two full-height panels, with tiny type and white sharp-cornered buttons.

2. **Type**: One family, STKBureau, for everything (66 uses). Inter is loaded but unused. The scale is tiny: 10, 12, 14, 16, 32. h1 and body are both 12px, h2 is 16px. Tracking is slightly positive (+0.13px). Button labels are uppercase. The type is deliberately quiet and lets the imagery carry the page.

3. **Colour**: Text #000000 and #FFFFFF, with muted grey #575757 at 80%. The only recorded background is #FFFFFF (inferred: sections are mostly photography). The hero shows near-black/charcoal photos with one burnt-orange garment as the only colour.

4. **Layout & rhythm**: The hero is a 50/50 split: two campaigns (Represent / 247 Activewear) each with a small kicker, a headline and two CTAs, aligned bottom-left in each half (seen faintly behind the modal). Logo centred, nav split left/right. 4 sections recorded (scroll-locked).

5. **Imagery & motion**: Editorial lookbook photography: models in industrial spaces, low light. 1 video (inferred: the hero campaign is video). GSAP and Lottie are present (the h1 text leaks a `.secondLottie` style, suggesting an animated logo/wordmark).

6. **Components**: The cookie modal itself shows the system: a full-width white button with black uppercase text, and a ghost button with a 1px white border, both square. Radii are 2/5/6px (small elements only). One shadow, 0 0 24px rgba(0,0,0,.3). A chat bubble sits bottom-right.

7. **Anti-slop moves**:
   - The hero is two brands side by side, not one slogan.
   - Body-size headlines (12–16px) on a luxury site, with no giant display type.
   - Imagery is graded almost black instead of bright.
   - A single typeface carries all the hierarchy.
   - Lottie is used for a brand mark, not decorative icons.

8. **Commerce mechanics**: Not observable past the modal. A wishlist and a "Represent Prestige Loyalty" programme appear in the h2 list, and Country is selectable (from tokens).

## Navigation and motion

Caveat: the recapture hit the same GDPR overlay. Scrolling is still locked (max 0), every sample is at y=0, there is 1 frame, and the mobile tap opened the overlay again. Hover ran but registered no change through it.

1. **Navbar**: A 46px `position: fixed` bar, transparent over the hero, with no blur or shadow. 2 small links at left, the wordmark centred, about 4 links plus icons at right (11 in all). Links are STKBureau 12px/400. "Stays visible" comes from the CSS, not from observed scrolling. Mobile: icons, a centred wordmark, icons.
2. **Scroll**: Native. GSAP 3.12.4, Lottie and 1 autoplay video are loaded (inferred: a GSAP campaign hero and a Lottie wordmark). Pinning and parallax were not measurable.
3. **Mobile menu**: Not observable in either capture (the toggle hit the overlay).
4. **Micro-interactions**: 127 elements share 0.3s cubic-bezier(0.4, …) (inferred: Tailwind's 0.4,0,0.2,1), with 0.15s and 0.7s steps. Custom cursor. The "DISCOVER" button holds its label twice (inferred: a text-roll hover).
5. **Steal this**:
   - A transparent fixed 46px bar over full-bleed video, with the wordmark centred and 12px links.
   - One curve and one duration (0.3s, 0.4,0,0.2,1) on every transition.
   - Text-roll CTA: two stacked copies of the label in an overflow-hidden box, which translate up 100% on hover in 0.3s.
