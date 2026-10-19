# houseofblanks: design notes

Caveat: a Cookiebot modal covers the centre of all three shots. Its styling is inherited from the site (mono font, pills), which is informative in itself.

1. **Signature**: Everything is set in uppercase monospace, with crop-mark corners around the hero and a trailing underscore cursor on headings ("T-SHIRT GUIDE_").

2. **Type**: Antarctican Mono for 100% of text (138 uses), weight 500, uppercase on h1, h2 and body. Sizes: h1 28.8, h2 21.6 (−0.1px tracking), body 16.2, display up to 43px. Small spec lines (240 GSM JERSEY) are grey #5E5F5A. Header nav is mixed case in a small mono size. The "accessibly" font belongs to the accessibility widget.

3. **Colour**: Large areas use cool grey #F2F2F2 and warm sand #DFD8CE (alternate section bands). The badge accent is brown #7C664E. Text is #231F20, with #5E5F5A for secondary. Product photo backgrounds are light grey (inferred: #D9D9D9-ish).

4. **Layout & rhythm**: Generous gutters. The hero is an inset image with registration/crop marks at the corners, a "01 / 04" slide counter and an outline "EXPLORE →" pill. Products sit in a 4-column grid with a flush-left heading and a "View all" outline pill at right. The newsletter is a 50/50 split with factory photography. About 5.8 screens.

5. **Imagery & motion**: Ghost-mannequin/flat product shots on grey, plus documentary factory photography (a worker at a sewing line). No animation libs, no video.

6. **Components**: Product cards have a model number in the name ("1016 OVERSIZED BOXY T-SHIRT"), a GSM spec, the price, then square colour swatches with a "+" overflow. Badges are a brown pill ("BUY 3 – SAVE 10%") or a grey "RECYCLED" pill. Buttons are full pills (9999px). The newsletter is an underline-only input.

7. **Anti-slop moves**:
   - Monospace as the brand voice for a clothing store.
   - Print crop marks framing the hero image.
   - Product names with model numbers and fabric weight, like a spec sheet.
   - The underscore cursor glyph after section titles.
   - Square swatches inside an otherwise pill-shaped system.

8. **Commerce mechanics**: Flat prices ($35, $110). The promo is a multi-buy ("BUY 3 – SAVE 10%") badge on every tile instead of a % discount. USD currency switch in the nav. Trust comes from fabric specs and factory imagery. No urgency.

## Navigation and motion

Caveat: a Cookiebot modal covers the centre of every shot, and listeners.json failed. Scrolling worked in the recapture: the 8 real frames are in `frames/` (strip.jpg is still the first capture's, with blank frames 3–8).

1. **Navbar**: A 104px transparent header. At left: Shop, About, Wholesale, Journal, widely spaced. Wordmark centred. At right: USD $, Search, Account, Cart as text, with no icons. Links are Antarctican Mono 12.6px/500 in mixed case. The section is `sticky`, but its top tracked −scrollY going down and back up (−400 at 400px, still −1500 at 1500px on the way up), so it **scrolls away and does not return**; frames 2–8 have no header. There is no background, blur or shadow change. Hover is instant (0s): ink from 75% to 100%, and the underline darkens.
2. **Scroll**: Native, with no libraries, parallax or reveals: the frames show stacked product grids (Classic, Relaxed and Oversized fits, recycled cotton) and photo bands at normal speed. The hero slider snaps on x (mandatory) and shows a "01 / 04" counter.
3. **Mobile menu**: Not observable in either capture. The tap opened the Cookiebot sheet (mobile-menu.jpg), and the detector logged the empty cart drawer.
4. **Micro-interactions**: 0.1s ease (x30) for UI, and 0.4s cubic-bezier(0.25, …) (x24) for larger moves. The accessibility button scales 1.2. Custom cursor.
5. **Steal this**:
   - A text-only utility nav (currency, Search, Account, Cart) in mono.
   - Instant hover from 75% to 100% ink plus an underline, for a terminal feel.
   - A "01 / 04" slider counter with chevrons inside crop-mark corners.
