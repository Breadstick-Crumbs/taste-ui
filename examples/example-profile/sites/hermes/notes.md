# Hermes Agent (hermes-agent.nousresearch.com)

1. **Signature**: Pure electric blue (#0000F2) and off-white only, with blue duotone engravings and ultra-condensed thin display type.

2. **Type**: The Rules family: Condensed (74 uses), Gothic Compressed (26) and Variable (14). Aeonik Fono (29) for small text. h1 is Rules Gothic Condensed 108px at weight 200 with line-height 1.0; h2 is 80px. Body is Aeonik Fono 11px uppercase, label-sized. Prices use tall condensed numerals; buttons are uppercase condensed.

3. **Colour**: Two colours that flip between sections. Blue areas use #0000F2, with darker #0000C2 and #000091. Light areas use #F2F2F2 with #000091 text. Translucent whites sit at 90% and 20%. No other hue.

4. **Layout & rhythm**: The page sits inside a blue border frame that glows at the edges. Six nav items are spread evenly across the full width around a centred stacked wordmark. The hero has the headline on the left with joined Download/Deploy buttons and a tabbed terminal install widget; the art is on the right. Features are 3 columns labelled "#1 CONNECT". Pricing is open columns with no cards.

5. **Imagery & motion**: Etching-style figures (a multi-armed Hermes, faces, hands, an anime girl holding a moon) duotoned blue with halftone and scanline grain. Tiny pixel icons. Three.js, Lenis and WebGL.

6. **Components**: Corners are 0-4px. Segmented buttons use split radii (4px 0 0 4px). The shadow is a 1px inset navy ring at 20%. Tier chips are boxed (FREE / PLUS / SUPER / ULTRA).

7. **Anti-slop moves**:
- One hue at 100% saturation as the page colour.
- Classical engravings instead of 3D blobs or UI shots.
- A 200-weight ultra-condensed headline at 108px.
- A terminal command as the secondary CTA.
- A framed page with an evenly distributed nav.

8. **Copy voice**: Plain labels with a mythic brand: "The Agent That Grows With You", "Features", "FAQs".

## Navigation and motion

*Caveats:* the detector tracked only the in-flow hero header and misread the opened mobile element (mobile-menu.jpg shows the menu). listeners.json found no handlers on the navbar or body.

1. **Navbar:** The hero nav (145px) is in the page flow and scrolls away. Six condensed caps links (about 14px, tracked) are **spread evenly across the full width** around a centred stacked wordmark with social icons; an INSTALL chip sits on the right. Separately, a **compact fixed paper (#F2F2F2) bar** slides in on the way down: absent in frames 2-5 (540-2160px), present from frame 6 (2700px) on, with the 6 links spread across, a small blue mark centred and a blue "INSTALL HERMES" button. Link hover is instant: opacity 0.8 to 1.
2. **Scroll:** **Lenis** smooth scrolling (options unreadable). A fixed full-viewport canvas is pinned, probably the glowing frame and grain (inferred). One image is pinned and one moves at 0.65x parallax. The blue frame persists round the viewport over light sections (frames 4-8).
3. **Mobile menu:** A **full-screen blue overlay**: 5 condensed caps links at about 36px, with chevrons and hairlines; an INSTALL grid of 5 small underlined links in 2 columns; social icons at the bottom; an INSTALL HERMES chip beside the X.
4. **Micro-interactions:** 0.15s cubic-bezier(0,...) and cubic-bezier(0.4,...). Button hovers are instant: "Deploy" goes from 20% to 30% white. Custom cursor flagged (unconfirmed).
5. **Steal this:**
   - `justify-content: space-between` across 6 caps links around a centred stacked wordmark.
   - A compact bar held at `translateY(-100%)` that slides in once the reader is past the hero chapters and stays while scrolling down; 0.3s (inferred).
   - A full-screen menu with 36px condensed links plus a two-column secondary grid.
