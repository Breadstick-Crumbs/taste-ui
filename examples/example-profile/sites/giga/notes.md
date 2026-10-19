# Giga (giga.ai)

1. **Signature**: Pixel-line headlines over a blurred thermal spectrum, with a skeuomorphic hardware "TALK" device as the hero demo.

2. **Type**: Geist (50 uses), Inter (43), Geist Mono (21), and Geist Pixel Line for h1 (72px, line-height 64px) and h2 (52.6px), both weight 400. Body is tiny: 12px with line-height 16px, and nothing outside headings exceeds 16px. Mono uppercase is used for eyebrows, the CTA, device labels and trace logs.

3. **Colour**: Dark: black / #17181A, plus a warm grey device panel (#E1DEDA). The hero background is a vertical-bar blur running yellow, orange, red, violet, blue. The CTA is orange, about #F26522 (inferred). Text is #E8EDEF, or white at 72% or 55%.

4. **Layout & rhythm**: Hero: headline on the left, paragraph on the right, wide device below. The mid section has exposed vertical grid lines, a numbered 01-05 step list with a progress rule, and a chat demo. Then a full-screen particle field. 17.5 screens across only 4 sections, so long pinned scenes (inferred).

5. **Imagery & motion**: 3 images, 19 running animations, WebGL particles coloured by category (Orders, Billing, Scheduling, and so on). The chat prints a mono reasoning trace: "Mood detected: polite panic".

6. **Components**: Radii of 4-8px, and 50% for the dial. Shadows imitate physical bevels: a 1px white inset highlight and a hard short drop shadow. The device has corner screws and dotted grilles. A segmented BUILD / OBSERVE / IMPROVE switch.

7. **Anti-slop moves**:
- A pixel font on an enterprise support product.
- A physical-looking device instead of a dashboard screenshot.
- A thermal spectrum instead of a purple mesh.
- Visible grid lines kept as decoration.
- The agent's trace shown in mono as part of the story.

8. **Copy voice**: Terse and wry: "No time to wait.", "Agents that keep getting better."

## Navigation and motion

*Caveats:* mid.jpg and low.jpg are still identical black grids (content not painted), and strip frames 6-8 are mostly empty grid. Listener capture failed.

1. **Navbar:** `header#bar.docked`, fixed, full width, about 54px visible (86px tall at top -32), unchanged in every sample. Logo on the left; 4 links with chevrons centred, opening mega dropdowns (34 links in total); Sign in and an orange mono-caps "SEE A DEMO" on the right. It is **translucent smoky grey over the hero** (frames 1-2) and solid black with a hairline rule over dark sections (frames 3-8). No hide or shrink.
2. **Scroll:** Native, with no GSAP or Lenis. One fixed **WebGL canvas** is pinned and animates on scroll. The hero `h1` moves at **0.27x parallax**; in frames 1-2 the hero drifts up slower than the page. Long pinned scenes are unconfirmed.
3. **Mobile menu:** The hamburger becomes an X and opens a **dark floating card** inset about 8px: a "Platform" label with 5 large links, small links for Solutions, Industries and Company in 2 columns, and a full-width orange "SEE A DEMO".
4. **Micro-interactions:** 0.15s cubic-bezier(0.16,...) on 63 elements (probably expo-out; inferred), 0.1s linear on dropdown items, 0.68s for large moves. "Continue" hover goes from #F2F1EC to #FFF. Blinking "hello_" caret. Custom cursor flagged (unconfirmed).
5. **Steal this:**
   - Every hover at 0.15s `cubic-bezier(0.16,1,0.3,1)`; menu items at 0.1s linear.
   - A 54px full-width bar: translucent dark over the hero, solid black with a 1px `rgba(255,255,255,.08)` rule over dark sections.
   - A hero headline drifting at 0.27x over a fixed WebGL canvas.
   - A mobile menu as an inset dark card: one large primary group, a small 2-column grid, one CTA.
