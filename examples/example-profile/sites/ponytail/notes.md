# ponytail (ponytail.dev)

1. **Signature**: Warm near-black, with a heavy mono headline over an italic second line and ASCII figures drawn out of real source code.

2. **Type**: JetBrains Mono (62 uses) for display and labels; system-ui (55) for body. h1 is 57.6px/800 with -0.045em tracking; h2 is 46.4px/800. The second heading line is mono italic in a dimmer tone ("And yet better."). Body is 17.3px with line-height 1.6. Section labels are mono, uppercase and wide-tracked ("02 TESTS"). The h2 strings contain glyph noise, which points to a scramble text effect (inferred).

3. **Colour**: Base #070606. Panels are #EFE9DD at 1.6% or 8%. Text is #EFE9DD (headings), #CFC8BA (body), #9A9284 (italic lines) and #6A6358. Accents are minimal: a lilac cursor block by the logo, lilac/blue glowing code art and blue section numbers (inferred).

4. **Layout & rhythm**: Numbered labels in a left rail, content in a wide right column, hairline rules between sections. The hero is left-aligned with the ASCII figure on the right, over a full wall of dim code.

5. **Imagery & motion**: Zero images, 3 WebGL canvases. All art is typographic code. A "Pause motion" button sits bottom-right. The review demo is a numbered diff beside "MUST FIX" findings.

6. **Components**: Radii are 999px and 50% only, with no shadows. The nav is a dark pill with a GitHub chip and a "soon" tag. The CTA is a pill with a faint gradient border. Tabs use an underline for the active state.

7. **Anti-slop moves**:
- The illustration is the product's own medium: code as ASCII art.
- Warm brown-black and cream, not #000 / #FFF.
- 800-weight mono display paired with mono italic.
- Benchmarks in the hero copy (53% / 41% / 26%).
- A "Pause motion" control.

8. **Copy voice**: Dry and opinionated: "Half the code. And yet better.", "Stop at the first rung that holds."

## Navigation and motion

*Caveats:* the detector still reports "no navbar found", so the nav is judged from the screenshots and the 8 frames. It also found 0 mobile links, but mobile-menu.jpg shows 8.

1. **Navbar:** A **centred floating dark pill**: about 710px by 50px, 18px from the top, 1px hairline, near-opaque warm black. Inside: the mono logo with a lilac cursor block, then 7 grey links (system sans about 14px). The active "Stories" is blue and GitHub sits in a filled chip. A **detached circular theme button** sits beside the pill. It holds the same place in all 8 frames, so it stays visible; no shrink, hide or blur.
2. **Scroll:** CSS smooth scrolling and 3 WebGL canvases (a code wall and ASCII figures). Nothing pinned or parallax: every section moves at normal speed in the frames. Glyph noise in the h2s suggests a scramble reveal (inferred). A fixed "Pause motion" button sits at the bottom right.
3. **Mobile menu:** The hamburger in the pill becomes an X and opens a **dropdown card** below it: dark, about 20px radius, 8 rows, the active row blue and the GitHub row filled. The theme button stays detached.
4. **Micro-interactions:** 0.2s ease (11 elements) and 0.15s ease (9). The CTA pill has a faint gradient border. No custom cursor.
5. **Steal this:**
   - A split nav: a menu pill plus a detached 50px circular utility button, both with a 1px `rgba(239,233,221,.12)` hairline, 8px apart.
   - A "Pause motion" toggle that stops the canvases and starts paused under `prefers-reduced-motion`.
   - A mobile dropdown card that grows out of the pill instead of a full-screen takeover.
