# Angle (askangle.com)

1. **Signature**: Violet dot-matrix halftone products on near-white, plus a serif manifesto signed by hand.

2. **Type**: generalSans is the workhorse (93 uses; body 17px/500, h2 26px/600). The h1 is Manrope 48.6px/700 with -0.04em tracking, gradient-clipped from indigo to mauve (its colour is transparent). A custom serif, angSerif (60 uses), sets the manifesto. Space Grotesk loads but is unused.

3. **Colour**: Light: #FFFFFF / #FCFDFE. Ink is #171939, indigo #322D85 (CTA) and #202055 (h2). Body text is mauve #967C90. Testimonial cards use earthy fills: #2848A3, #684B3E and #0F5E66.

4. **Layout & rhythm**: Centred hero flanked by two halftone still-lifes that melt into a dotted floor. The manifesto is a single centred paragraph surrounded by empty space. Pricing is 4 columns inside one outlined container. 7.4 screens.

5. **Imagery & motion**: The dot renders are probably canvas (13 canvases, WebGL; inferred), and portraits get the same treatment. A blurred last line suggests a blur-in reveal (inferred). No GSAP, Framer or Lottie.

6. **Components**: Pill buttons with a circled-arrow icon. Shadows are 1px rings (rgba(50,45,133,.2)), not blurs. On scroll the nav shrinks into a floating pill. Pricing tiers are marked by 1-4 dot glyphs.

7. **Anti-slop moves**:
- Halftone product art instead of gradient blobs or stock photos.
- A serif manifesto with handwritten founder signatures.
- Mauve body text, not grey.
- Tiers counted in dots, with all columns in one shared box.
- Brown and teal testimonial cards that break away from the brand purple.

8. **Copy voice**: Warm and literary: "Your brand's AI, that sells for you.", "Questions, answered."

## Navigation and motion

*Caveat:* the nav's fill, ring and blur sit on a child element, so those values come from the screenshots.

1. **Navbar:** At the top, a full-width row (1152px): logo on the left, 3 links centred (generalSans 15px/600), "Book a demo" and "Try Now" pills on the right. By 400px it has shrunk to a **centred floating pill**: 640px by 52px, 16px from the top, a 1px ring, translucent white with blur, and "Book a demo" dropped (frames 2-8). It never hides, and stays a pill on the way back up. Link hover darkens text and border from #6E587C to #382843 in 0.2s.
2. **Scroll:** CSS smooth scrolling (`scroll-smooth`), no GSAP or Lenis. The recapture found **nothing pinned and no parallax**: in the frames the how-it-works phone and the manifesto move at normal speed (the earlier pinned and 0.53x readings were smooth-scroll artefacts). One snap-x carousel (the testimonials, inferred).
3. **Mobile menu:** A grid icon turns into an X and opens a **full-screen lavender sheet**: 3 bold links of about 26px with chevrons and hairline rules, and 2 full-width CTAs docked at the bottom.
4. **Micro-interactions:** 0.2s cubic-bezier(0.4,...) is the most common (the curve is truncated; Tailwind's standard ease is inferred), plus 0.3s and 0.16-0.18s. The detector flagged a custom cursor (unconfirmed).
5. **Steal this:**
   - After 80px (inferred; it is a pill by 400px), the full-width nav morphs into a 640px pill: `rgba(255,255,255,.7)`, `blur(12px)`, 1px ring `rgba(50,45,133,.2)`. The secondary CTA is dropped. Duration 0.3s, ease `cubic-bezier(.4,0,.2,1)`.
   - A mobile sheet with large chevron rows and CTAs pinned to the bottom.
