# Mindtrip (mindtrip.ai)

1. **Signature**: Huge, tightly tracked Circular headlines over full-bleed aerial travel video. Below the hero come three 48px-radius "chapter" cards, one per verb (Learns / Acts / Adapts). Each has its own saturated colour field (navy, rust, olive), its headline in a pale tint of that same hue, and frosted-glass chat and price-drop chips floating over a real photo.

2. **Type**: Circular Std for display only (17 uses). The h1 is 128px/400 with line-height 104px and **−0.06em tracking** (−7.68px). The h2s are 108px/84px; section h2s are 80px, fitted to the container width with a custom `fit-text` utility (container query units). Inter does all the UI and body: body 18px/29px at **70% black**, nav 13–14px/500. Weight 400 at giant sizes, with hierarchy carried by tracking and line-height. The only flourish is an italic serif *for* in the menu ("*for* Creators", "*for* Business").

3. **Colour**: The page is white, with near-black text set as opacity steps (100 / 70 / 50%) rather than greys. Each chapter card has a deep field colour, and its headline is a pale tint of that same hue:
   - navy rgb(20,38,98) → blush #F9CDCC;
   - rust rgb(141,36,6) → peach #FFCEAB;
   - olive rgb(67,71,23) → butter #F1F2BA.

   Price drops are green with the old price struck through. The CTA is solid black. One hue per section, never two on screen.

4. **Layout & rhythm**: The hero is a centred headline sitting on the bottom of the video, which fades to white underneath: no box, no overlay card. Three chapter cards are inset ~64px from the edges at 48px radius: left column chips + headline + body, right column the photo with floating UI. Then "Do more…" as 4 columns (Watch / Build / Book / Explore), each with a mini product collage; a snap carousel of creator guides; testimonial cards with a pill tag ("Clear Reasoning") and initials avatars; "Featured in" press logos; a closing headline "Every trip, more you." 9 screens.

5. **Imagery & motion**: Aerial lifestyle video with lots of negative space (a swimmer on turquoise, a camel caravan on dunes); it rotates by destination, with a pause button bottom-right. All the product UI is HTML over the photos, never a screenshot:
   - frosted chips (`.glass`: 16px blur, a radial white gradient from 35% to 14%, a 1px rim at 7% white);
   - 8–9 s `float1/2/3` drift keyframes (±2–4% translate), staggered so the chips feel alive;
   - a voice-waveform orb with `voice-breathe` (scale 1.06).

   There is **no GSAP and no smooth scroll**: everything is CSS keyframes, the native `animation-timeline: scroll()` and a little JS.

6. **Components**:
   - The black pill CTA ("Set up your travel assistant") lightens to oklch 0.244 on hover in 0.15s.
   - The nav pill CTA is outlined.
   - "Get app" is a tinted grey pill with a phone glyph.
   - The chapter chips are anchor links (`#learns`); the active one gets a 2px white/80% ring and the others are bare text.
   - Testimonial tags are small black pills.
   - The radius system: full pills for every control, 48px for chapter cards, 12–16px for floating chips. Shadows are effectively none.

7. **Anti-slop moves**:
   - Product UI chips float over real travel photos instead of a device mockup or a dashboard screenshot.
   - Colour-matched tint headlines: the headline is the card's own hue, lightened.
   - Tight-tracked giant geometric sans at weight 400, not bold.
   - Text greys come from opacity on one ink.
   - Copy built on verbs ("Learns your style. Works for you. Keeps you one step ahead.") with real specifics ("SFO–LAX · Sep 22–24 · ~~$598~~ $389 · Price drop", "Hey Elsa, looks like it's going to rain tomorrow").

8. **Copy voice**: Short, warm and declarative, with a full stop on every headline: "Travel that gets you.", "Every trip, more you." The UI copy is concrete: dates, prices, names.

## Navigation and motion

*Caveat:* the capture script's navbar probe missed the header (it is a `div`, not a `nav`), so the header details below were measured live in the browser.

1. **Navbar:** `div.fixed` 64px, `transition-colors 0.5s`. The visible bar is an inner **inset pill** (`absolute inset-x-3.5 inset-y-2 rounded-full bg-background/80 backdrop-blur-md`): 80% white with a 12px blur. Over the hero it is barely visible. Over a coloured chapter card the card bleeds through and tints the pill (peach over rust, pale over navy). It never hides and never shrinks. The logo and a hamburger sit on the left; the categories (Stays, Flights, Eats, Experiences, Events, Trips; 13px/500) are centred; on the right are "Get app" (a tinted pill), "Log in" (text) and "Set up assistant" (an outlined pill). The CSS also has a richer `.glass-bar` (72% tint, a 20px blur with 170% saturation, a top-sheen gradient, an inset rim highlight, a 1px separator and a soft float shadow) for elevated bars.
2. **Scroll:** Native scroll and `overscroll: none`, with no pinning and no parallax. The scroll-driven effects are small and CSS-first:
   - **Word-by-word body reveal.** Every word of the chapter paragraph is a `<span style="--start:.30; --end:.31">`; as the section scrolls through the viewport each word goes from muted to full colour (`voice-word-fade`, `--scroll-highlight`). It reads like the assistant is speaking.
   - **Scroll-fade masks** (`.scroll-fade`, `.scroll-fade-x`) use `animation-timeline: scroll(self)` to grow a mask-image fade at whichever edge still has content, on carousels and lists. It is RTL-aware.
   - **scroll-flatten:** card corners go to 0 as they reach the edge.
   - `.feature-reveal`: a one-shot 0.7s opacity fade when `[data-revealed]` is set, inside `prefers-reduced-motion: no-preference`.
   - The guides carousel is `scroll-snap-type: x mandatory` with `scroll-padding` aligned to the section's start edge and a hidden scrollbar.
3. **Mobile menu:** a **left drawer card** (about 320px, white, with a rounded right edge) over the page. "Start chatting" is at the top, then the categories, each with a **pastel-tinted circular icon** (pink, sky, yellow, lime, lilac, mint), then hairline dividers, "*for* Creators" / "*for* Business", Resources / Help, and the Log in (outlined) and black CTA pinned at the bottom. The same drawer opens from the desktop hamburger.
4. **Micro-interactions:** one curve everywhere: 0.15s `cubic-bezier(0.4,0,0.2,1)` on 49 elements, and 0.5s for nav colour changes. Hover is a tint shift. There is a bounce arrow under the hero CTA, a pause control on the video, and skeleton `pulse` shimmer for loading cards.
5. **Steal this:**
   - **Chapter cards in one hue:** a deep field colour, the headline in its pale tint, and frosted chips floating on a real photo.
   - **Word-by-word scroll highlight** for the one paragraph that matters: per-word `--start/--end` spans driven by a view timeline.
   - **An inset frosted pill nav** that lets the section colour bleed through, instead of a show/hide trick.
   - **Floating chips with slow, staggered drift** (7/8/9 s) so the UI feels alive without a scroll animation.
   - **Edge-fade masks on carousels** using `animation-timeline: scroll(self)`.
   - **A drawer menu with pastel category icons** and an italic *for* before the audience links.
