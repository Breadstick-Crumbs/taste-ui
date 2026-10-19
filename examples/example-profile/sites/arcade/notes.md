# Arcade (arcade.software)

Note: a cookie banner covers the bottom-right of all three shots, and the mid.jpg video looks unloaded (a flat lime fill).

1. **Signature**: An inset rounded hero panel in a white-to-electric-blue wash, with a URL input as the main CTA.

2. **Type**: Inter Variable almost only (154 uses). h1 is 48px/600 with -0.02em tracking, colour #111827. Body is 16px/400, colour #4B5563. Balig Script is used once, probably for the hand-drawn "Try with your website!" note (inferred). Scale 12-36px.

3. **Colour**: Light: #FFFFFF, #F9FAFB, and #111827 bands. Text is the Tailwind grays exactly (#111827 / #4B5563 / #6B7280). The primary is blue, about #2747E6 (inferred). The only warm accent is a lime video stage, about #C3F48F.

4. **Layout & rhythm**: The hero is inset about 16px with rounded corners. Centred inside: an announcement pill, the h1, a Video/Demo toggle and the URL field. Then a video stage with a Claude / Gemini / Arcade switcher. Then use-case tabs, with copy on the left and a cropped dashboard bleeding off the right.

5. **Imagery & motion**: GSAP and ScrollTrigger. 113 images and 7 videos, mostly partial UI screenshots. A hand-drawn arrow points at the input.

6. **Components**: Radii are 8 / 12 / 16, and 80 for pills. Shadows are stacked, very faint and tinted gray-900 (0.03 at 16px, 0.04 at 32px, 1px ring at 0.1). The nav is a floating bordered bar.

7. **Anti-slop moves** (the most conventional site of the set):
- An inset hero card instead of a full-bleed one.
- The CTA input runs the product on your own website.
- A comparison toggle that names competitors.
- A script annotation and an arrow that break up the Inter.

8. **Copy voice**: Standard B2B SaaS triplets: "No designers. No agencies. No waiting."

## Navigation and motion

*Caveats:* a cookie card sits at the bottom right of every frame (it does not cover the nav). The detector's "opened" element was a HubSpot modal, but mobile-menu.jpg shows the real menu.

1. **Navbar:** `div#nav-wrapper`, fixed 16px from the top, 88px tall. At the top it has no container and sits inside the inset blue hero. Logo plus 5 links on the left (Inter about 14px/500, #4B5563); "Talk to sales" and a blue "Sign up for free" on the right. From frame 2 (540px) on it is a **floating frosted bar**: about 1300px wide, 1px border, 16px radius, faint shadow, translucent white with blur. It never hides. Dropdown sub-nav, 0.24s ease on hover.
2. **Scroll:** Native scrolling. GSAP is loaded but **0 ScrollTriggers** are registered. Webflow interactions are on, with 5 autoplay videos. The 8 frames confirm plain stacked sections, with nothing pinned, parallax or scroll-animated: the motion comes from video.
3. **Mobile menu:** A **full-screen white sheet** with 5 rows (3 of them accordions with chevrons), hairline dividers and text at about 20px. Full-width blue and outline CTAs sit below the rows.
4. **Micro-interactions:** 0.2s ease (32 elements), 0.24s ease, and cubic-bezier(0.6,...) at 0.2s and 0.35s. No custom cursor.
5. **Steal this:**
   - A nav with no container over the hero that turns frosted once content passes under it: `rgba(255,255,255,.8)`, `blur(12px)`, 1px #E5E7EB border, 16px radius, shadow `0 16px 32px rgba(17,24,39,.04)`, 0.24s ease.
   - An accordion mobile sheet with the 2 CTAs stacked full width.
