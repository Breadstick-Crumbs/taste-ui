# kay: design notes

1. **Signature**: Romantic, close-cropped skin-and-ring photography with Larken serif headlines centred over it, plus white pill buttons.

2. **Type**: Poppins is the UI/body font (500 uses), body 12px/18px. Larken serif is for editorial headings (h2 32px/400, colour #121418), and display sizes reach 44px. Sub-brand names (Rocksbox, JAXXON) are also set in the serif. Open Sans appears once (h1 29.6px), a legacy leftover. Small kickers are uppercase grey ("GEMSTONES, ELEVATED"). Tracking is normal throughout.

3. **Colour**: Mostly #FFFFFF and warm #F7F6F4. Dark content cards are #1D292F (deep blue-slate). The promo strip is pale blue #E4EEF6. Text is #121418, with #747474 for secondary. Hero overlays use rgba(0,0,0,.6) and rgba(0,0,0,.1) scrims. There is no gold accent colour: the jewellery supplies the shine.

4. **Layout & rhythm**: Full-bleed hero with centred copy, and a row of four pill buttons acting as category shortcuts. Below that, edge-to-edge image mosaics (one large tile plus two portrait tiles, then 50/50 brand splits) with little gutter. An editorial 50/50 split pairs an image with a serif headline. The page is 9.4 screens with 13 sections, so it is long.

5. **Imagery & motion**: Close-up portraits: hands on faces, lips, curls, studio-lit on grey. The couple hero is shot outdoors. 2 running animations (the promo-bar carousel has prev/pause/next controls). No libraries.

6. **Components**: White pill CTAs ("Shop Now", "Learn More"). The one recorded radius is 4px, with a shadow of 0 2px 8px rgba(0,0,0,.08). Small round white shopping-bag buttons sit on image corners (shop-the-look). The nav is a long text-only category list with 6 badge counts on an icon.

7. **Anti-slop moves**:
   - The serif is kept for emotion and the geometric sans for utility, and they are never swapped.
   - Tight macro crops of skin instead of product-on-white packshots on the homepage.
   - A shop-the-look bag icon is pinned to lifestyle images.
   - The promo bar has accessible carousel controls (pause button).
   - Sub-brands get the serif treatment over a photo, not logo images.

8. **Commerce mechanics**: Discounts dominate: "50% Off† Limited Time Deals" is repeated in the bar, the hero and the h1. A dagger footnote links to "Exclusions Apply". Trust and service links (Find a Store, Book an Appointment, KAY Credit Card) are in the utility bar. Urgency is "Limited Time".

## Navigation and motion

1. **Navbar**: A 128px fixed white stack with a 0 2px 8px rgba(0,0,0,.08) shadow. It has 3 rows: a utility bar (Find a Store, Help | KAY Credit Card, Book an Appointment); a main row (wordmark at left, 10 centred links, 5 icons at right including a deals tag with a "6" badge); and a #E4EEF6 promo carousel with prev/pause/next. **Hides on scroll down** (−95px at 400px, −128px by 1200px; no header in frames 2–8) and **returns on scroll up**, moving as one block. Links are Poppins 12px/400. No listeners on the header or body (inferred: on window).
2. **Scroll**: Native. The recapture found nothing pinned and no parallax. `libs`: 40 split-text elements (inferred: heading line reveals), but every heading in the frames is already set, so no reveal was caught. The carousel uses x-mandatory snap.
3. **Mobile menu**: The hamburger becomes an X in a grey circle, and a **full-screen white drawer** opens under the persistent header. 10 rows in the Larken serif, about 64px each with a chevron and no dividers, then a warm grey footer: Sign In / Register, Wishlist, Find a Store.
4. **Micro-interactions**: A slow house transition of 0.5s ease (x91), with 0.22s and 0.3s secondary. Hero pills go from white to #E4EEF6 in 0.5s.
5. **Steal this**:
   - Hide the whole header stack with translateY(-100%) on scroll down past it, and return it on any scroll up (inferred ~0.3–0.5s ease). Keep the shadow.
   - An accessible promo carousel: prev/pause/next at left, the "Exclusions Apply" link at right.
   - Pill hover tints to the promo-bar blue in 0.5s.
   - Mobile category rows in the editorial serif, utilities in a tinted footer.
