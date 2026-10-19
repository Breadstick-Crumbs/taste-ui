# Taste profile: example (the author's own)

15 sites the owner likes, each measured live: computed type, colour, radii, navbar behaviour on scroll, motion, the mobile menu, and screenshots. The detail is in `sites/<slug>/notes.md`. This file says what the sites have in common and which to look at for what.

**How to read this:** it describes taste, not law. Nothing here bans a font, a colour or a technique. Pure white, pure black, Inter, a gradient: all are fine when they're a choice that serves the product. What the owner dislikes is choices made *by default*. Use your judgment; when the product or a client's brand calls for something none of these sites does, do that.

## Fundamentals (always)
Ordinary UI craft. These are the only hard rules.
- **One coherent type system:** one or two families, a clear scale, used consistently. No grab-bag of fonts.
- **A deliberate palette, used consistently,** with readable contrast (WCAG AA for text).
- **Consistent spacing and radius logic.** The same kind of element looks the same everywhere.
- **Clear hierarchy:** one primary action per view; the eye knows where to go.
- **Real content:** real names, numbers and places. No lorem ipsum, no invented metrics or testimonials.
- **Works everywhere:** phone width without horizontal scroll, keyboard and focus states, `prefers-reduced-motion`.
- **Right for the market:** currency, language and RTL. For UAE products that means AED and Arabic designed in, not bolted on.
- **Every state is designed:** empty, loading, error, partial and success, not just the happy path with full data.
- **Forms respect people:** labels above the fields, inline validation that says how to fix the problem, nothing lost on an error, and no field the product doesn't need.
- **Comfortable on a phone:** tap targets of at least 44 px, body text of at least 16 px, and the main action within thumb reach.
- **Fast:** images sized and lazy-loaded, fonts preloaded with a fallback, no layout shift as things load.

## The taste: what the 15 sites share
1. **A signature you'd recognise without the logo.** Each site commits to one or two moves and keeps everything else quiet:
   - Wispr: a roman-to-italic Garamond headline on cream;
   - Ponytail: ASCII art made of real code;
   - Hermes: a single electric blue;
   - Mindtrip: one-hue chapter cards with frosted chips over photos;
   - Angle: violet halftone product art;
   - House of Blanks: crop marks and model numbers.

   Find the move that fits the product, then restrain the rest.
2. **The product is shown working.** The hero is real UI with real data, not an illustration of an idea:
   - Airbnb's search bar is the hero;
   - SmartMum shows a live "142 bpm" card;
   - Mindtrip's chips read "SFO–LAX ~~$598~~ $389 · Price drop";
   - Hermes shows the install command.
3. **Type does the heavy lifting.** Headlines have a voice: a book serif, a pixel face, a heavy mono, ultra-condensed light type, or a geometric sans set huge and tight (Mindtrip, 128 px at −0.06em). Hierarchy comes from contrast in size, tracking, case, weight and opacity, not just from bigger and bolder.
4. **Copy with a point of view.** "Don't type, just speak." "Travel that gets you." "Half the code. And yet better." Short and specific, never generic SaaS filler.
5. **Restraint in decoration.** Few or faint shadows; borders, rings or tints do the separating. Colour is used with intent: one accent, a single hue for the whole site (Hermes), or one hue per section (Mindtrip).
6. **Navigation that responds to context.**
   - The navbar changes once you leave the hero, hides and returns in dense commerce, or floats as a frosted pill.
   - The mobile menu is a designed screen, not the desktop links in a dropdown.
7. **Motion that tells the story, once.** At most one section of real scroll choreography; the rest is native scroll with small reveals. Ambient life (slow drift, a breathing voice orb) beats animating every block.

## What reads as "default AI output"
Not a list of banned things, just signs that nothing was decided:
- the template page: a hero, three identical icon cards, a grey logo row and a CTA band, every section the same height, everything centred;
- decoration unrelated to the product: gradient blobs, abstract 3D, stock icons standing in for the product;
- a static full-width navbar and a dropdown mobile menu, where context would have helped;
- fade-up on every element, or a smooth-scroll library added "for polish";
- buzzword copy ("Revolutionize / Unlock / Seamless / Empower").

## Which references to look at
Start from **one primary category**. Borrowing a move from another category is good; do it on purpose and name it ("Mindtrip's chapter cards on an e-commerce page").

| Category | Slug | Look at it for | Signature |
|---|---|---|---|
| AI / SaaS | wisprflow | warm, human SaaS | EB Garamond roman → italic on cream; speech as text on a path; pinned feature chapter |
| AI / SaaS | ponytail | developer tools | warm black, JetBrains Mono 800, ASCII made of real code |
| AI / SaaS | giga | bold AI and ops products | pixel display face, thermal blur, a hardware-dial demo |
| AI / SaaS | hermes | research and agent products | one electric-blue hue, engraving duotone, ultra-condensed light display |
| AI / SaaS | askangle | AI commerce | violet halftone product art, shrinking pill nav |
| AI / SaaS | smartmum | health, GCC | ink → berry two-tone headline, live data card, scroll-spy nav |
| AI / SaaS | arcade | what "competent but forgettable" looks like | Inter and Tailwind defaults (a counter-example) |
| Consumer AI | mindtrip | consumer assistants, travel, lifestyle | giant tight Circular over aerial video; one-hue chapter cards; frosted chips; word-by-word scroll highlight |
| Commerce | noon | mass-market UAE | #FEEE00 header, dense grid, Arabic first-class |
| Commerce | allbirds | friendly D2C | chalk doodles on lifestyle photos, square uppercase CTAs, AED glyph |
| Commerce | kay | premium and jewellery | Larken serif over Poppins, smart-hide header |
| Commerce | represent | fashion | concrete-dark 50/50 campaign hero, one family at small sizes |
| Commerce | houseofblanks | minimal, spec-driven | all-caps mono, crop marks, model numbers and GSM |
| Marketplace | airbnb | search-led products | the segmented search pill as the hero, bottom tab bar on mobile |
| Immersive | morpho | storytelling, 3D | 98 px Gotham Light against Publico italic, "01 / 07" chapters |

**Category notes:**
- **Commerce:** locale lives in the header (Arabic toggle, AED, delivery location, free-shipping threshold). Photography is the brand. Commerce cues are specific: struck-through price, "(31% Off)", multi-buy badges. Choose a density: mass-market (noon) or brand (Represent).
- **Immersive:** scroll chapters with a progress rail; prefer pre-rendered video or one WebGL scene over a heavy live 3D page.
- **Agentic products** (an agent acts on the user's behalf: applies, books, buys, sends). Here, trust *is* the UX:
  - **Preview, then act.** Show exactly what the agent will do before it does anything irreversible, costly or public. Submitting, paying and sending need an explicit approval, and one review screen can approve a batch.
  - **"Needs you" is the home screen.** The user's job is to unblock the agent: approve this, upload that, answer one question. Lead with that queue, sorted by deadline, before any progress charts.
  - **Every item has one clear status** in plain words (Drafting → Needs you → Ready → Submitted → Decision), with the next step and who owns it.
  - **Live and legible.** Show what the agent is doing now, what's done and what's waiting, as real steps rather than a spinner. Mindtrip's chat and price chips are the tone to aim for: specific and calm.
  - **Explain the why.** Every recommendation names the profile facts and preferences behind it ("fits: CS, under AED 60k a year, campus in a city") and lets the user correct them.
  - **The user stays the author.** Anything written in their name (essays, statements, emails) is shown in full, editable, with changes visible, and is never sent unseen.
  - **Receipts for everything:** a dated activity log with the evidence (confirmation numbers, the submitted PDF, screenshots of the portal).
  - **Honest failures.** When a portal is down, a document is missing or a deadline is at risk, say what happened, what the agent will try next, and what the user can do.
  - **Deadlines, fees and time zones** are always visible where a decision is made.
  - **Build the profile progressively.** Use conversation and document upload (pull fields from a transcript), not a 40-field form. Profile and preferences stay visible and editable, and a change shows what it affects.
- **Dashboards:** no references yet. Carry over the marketing site's type and palette, big numbers with units, and mono numerals for data. **Ask the owner for 3–5 dashboard references before the first serious dashboard.**
- **Thin coverage:** if a category has fewer than 2 references, say so and ask whether to add some.

## Navigation and motion library
Proven patterns from the references. Pick what fits; none is required.
- **Shrinking pill** (Angle): a full-width bar over the hero. After ~80 px it becomes a centred frosted pill, 640–760 px wide, and drops the secondary CTA, over 0.3 s.
- **Always-on frosted pill** (Mindtrip): an inset pill at 80% background with a 12 px blur; the section colour bleeds through.
- **Smart-hide header** (Kay): sticky; it hides on scroll down and returns on any scroll up, over 0.25 s. Good for tall commerce headers.
- **Scroll-spy** (SmartMum): an active-section pill moves between the links.
- **Pinned story section** (Wispr, Morpho): one section pinned for 2–3 viewport heights with its steps scrubbed to scroll, using GSAP ScrollTrigger or CSS `position: sticky` plus `animation-timeline: view()`.
- **Small reveals:** an underline that draws in (Wispr), split-text headlines (Kay), and a word-by-word highlight of the one paragraph that matters (Mindtrip).
- **Ambient drift** (Mindtrip): floating UI chips on staggered 7–9 s keyframes, plus edge-fade masks on carousels via `animation-timeline: scroll(self)`.
- **Mobile menus:**
  - a full-screen sheet in the brand colour with big links and the CTAs at the bottom (Angle, Hermes);
  - a left drawer with tinted category icons (Mindtrip);
  - a bottom tab bar (Airbnb);
  - a full-height list with locale and log-in in its footer (Allbirds).
- **Timing:** one duration and curve per site: 0.15–0.3 s for interface elements and up to 0.5 s for large blocks. Hover is a tint change or a 1 px lift.

## Free font stand-ins (when a reference font is licensed)
| Licensed font | Free stand-in |
|---|---|
| Gotham Light | Montserrat 300 |
| Publico italic | Newsreader italic |
| Larken | Fraunces |
| STKBureau | Space Grotesk or Satoshi |
| Circular | Plus Jakarta Sans or General Sans |
| Pixel display | Pixelify Sans or Silkscreen |

The free sources: EB Garamond, Figtree, Geist, JetBrains Mono and Poppins on Google Fonts; General Sans, Satoshi, Clash Display and Zodiak on Fontshare.
