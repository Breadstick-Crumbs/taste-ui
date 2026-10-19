# Wispr Flow (wisprflow.ai)

1. **Signature**: A giant EB Garamond headline (roman, then italic) on cream, with transcribed speech curling around the hero as text on a path.

2. **Type**: Figtree (178 uses) for UI and body at 20px/500. EB Garamond (31 uses) for display: h1 and h2 are 96px/400 with line-height 0.95 and -0.03em tracking. The second h1 line is italic ("just speak."). Quotes and the sticky tab labels are also serif. Testimonial names use a condensed bold caps face that is not in the tokens (inferred to be an image).

3. **Colour**: Cream #FFFFEB, ink #1A1A1A (a dark testimonial band) and forest #034F46 (announcement bar) cover the large areas, with khaki #E4E4D0. Accents are lilac #F0D7FF and orange #FFA946. No blue.

4. **Layout & rhythm**: Centred hero: eyebrow, headline, one line, one CTA. Features use three columns: a sticky serif tab list with an orange active bar, a centred video card and a right-hand caption. Big pale swooshes sit behind. Very long (20 screens).

5. **Imagery & motion**: GSAP, ScrollTrigger, Lottie and a WebGL canvas. The hero ribbon runs grey curved text into a waveform pill and out as a black band of white text, acting out speech-to-text. Feature media is blurred lifestyle video under real UI.

6. **Components**: Lilac CTA with a dark border and 8px radius. Cards have 48 / 32 / 16px radii and no shadows. The nav is boxed, with a Dictation/Notetaker segmented toggle. Testimonial cards are tilted and staggered.

7. **Anti-slop moves**:
- A book serif for a tech product, with roman and italic in one headline.
- A cream background, not white.
- The hero ribbon demonstrates the product.
- Rotated, overlapping testimonial cards instead of a 3-up grid.
- Lilac, orange and forest, and no blue.

8. **Copy voice**: Human: "Don't type, just speak.", "Your voice stays yours.", "Good questions."

## Navigation and motion

*Caveat:* the recapture found no mobile menu toggle, so the mobile menu comes from the first capture.

1. **Navbar:** `div.nav_fixed`, 84px, fixed and unchanged in every sample. A **centred boxed bar**: about 912px wide, 16px inset, cream fill, 2px khaki border, 12px radius. On the left, the logo and a Dictation / Notetaker **segmented pill**; on the right, 3 links (Figtree 16px/600) and a lilac CTA with a dark border. Once the forest announcement bar above it scrolls off (frame 2 on), the box sits near the top edge, still cream over dark sections (docked by the `div.banner.v2` ScrollTrigger, inferred).
2. **Scroll:** Native scrolling with GSAP 3.15.0 ScrollTrigger:
   - the frames show a **pinned "4x faster than typing" stage** (1080-3240px): the headline holds while one video card grows from a 45 / 220 wpm split to wide, then shrinks to a portrait card carried into the next section;
   - `section.section_fl-wrap` is **pinned with snap** (mid.jpg: a 3-step feature list beside a centre video);
   - `div.testiv2_height` has **scrub 1.5** (the tilted testimonials);
   - `path#heading-underline` draws in on scroll.

   Parallax of 0.28-0.39x on flow cards; Lottie and Webflow interactions.
3. **Mobile menu (first capture):** A Webflow **dropdown**: the bar grows into a bordered cream card with 5 hairline-separated links; the CTA stays and the toggle becomes an X.
4. **Micro-interactions:** 0.3s ease on 71 elements, 0.2-0.25s elsewhere; tab hover showed no change. No custom cursor.
5. **Steal this:**
   - A pinned feature chapter: pin for 3×100vh, snap per step, a 3px orange bar on the active serif item, media crossfading over 0.3s ease.
   - One video card that morphs (split → wide → portrait) under a held headline.
   - A boxed nav (2px border, 12px radius, 16px inset) with a segmented product switch.
   - Testimonials on `scrub: 1.5`.
