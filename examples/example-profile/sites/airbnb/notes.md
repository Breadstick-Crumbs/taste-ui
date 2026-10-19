# airbnb: design notes

Caveat: the listing grid did not render in the headless capture. The shots show only the header/search, "Inspiration for future getaways" and the footer (page height 1.4 screens, 8 images). Mid and low shots are identical, at the bottom of the page.

1. **Signature**: A floating segmented pill search bar (Where | When | Who) with a coral-red circular search button, under 3D-rendered skeuomorphic category icons.

2. **Type**: One family, Airbnb Cereal VF (variable), 85 uses. h1 28px/700, h2 22px/500 with −0.44px tracking. The scale is 12/14/21/22/28, so it is small and flat. Two-line link pairs use #222222 at weight 500 for the city and #6C6C6C at 400 for the descriptor.

3. **Colour**: Text #222222 (not black) and #6C6C6C. Surfaces are #FFFFFF, #F7F7F7 (inspiration/footer band), #EBEBEB and #F2F2F2 (dividers and icon buttons). The single brand accent is #DA1249 on the search button and logo.

4. **Layout & rhythm**: A centred search hero with no image. The inspiration block is a 6-column grid of text links under underline tabs (Popular, Arts & culture, Beach…). The footer has 3 columns. Generous 48px side margins (inferred from the shots).

5. **Imagery & motion**: Category tabs use rendered 3D icons (globe, house, hot-air balloon, service bell). Lottie and WebGL are present on 1 canvas, with 3 running animations (inferred: the icons animate on select). On scroll the search compacts into a mini pill ("Anywhere | Anytime | Add guests").

6. **Components**: Search pill with 32px radius, internal dividers and stacked label/placeholder. Radii 4/8/12px/50%. Circular grey icon buttons for the account and menu. The shadow is a hairline ring, 0 0 0 1px rgba(0,0,0,.02), plus a soft blur. The active tab has a thick black underline.

7. **Anti-slop moves**:
   - Skeuomorphic 3D icons in a flat UI.
   - The search bar is the hero, with no marketing headline or image.
   - The sticky header morphs the search into a compact summary pill.
   - Off-black #222 and a hairline-ring shadow instead of heavy drop shadows.
   - A 2-tone weight/colour pairing does the hierarchy, not size.

8. **Commerce mechanics**: Not observable (no listings rendered). The AED currency and English (AE) locale are shown in the footer. Trust links (AirCover, Cancellation options, Anti-discrimination) are given footer prominence.

## Navigation and motion

Caveat: in both captures the listings did not render, so the scroll max is 237px (2 frames).

1. **Navbar**: A static 96px header that **scrolls away** (top −237, and frame 2 has no header). Logo at left. Centred 3D-icon tabs (All, Homes, Experiences, Services), with a thick black underline on the active one. At right: "Become a host" plus round grey account and menu buttons. Below sits the Where | When | Who pill with a coral search button. Links are Cereal VF 14px/400. The existing note says the search compacts into a mini pill on scroll; neither capture **reproduced that** (inferred: it needs the full page). Tab hover registered no change.
2. **Scroll**: Native, with no libraries. 3 sections were flagged as parallax at 1.44×, but over only 237px this is likely an artefact (inferred). Nothing was pinned and there were no reveals.
3. **Mobile menu**: There is no hamburger (the recapture found no toggle). Instead: a "Start your search" pill, a horizontal row of icon chips (the active one is raised), and a fixed **bottom tab bar** with 3 items (Explore in coral, Wishlists, Log in).
4. **Micro-interactions**: Everything uses cubic-bezier(0.2, …) (inferred: 0.2,0,0,1), at 0.3s (x33), 0.2s (x21) and 0.25s, plus 0.001s instant switches.
5. **Steal this**:
   - Mobile bottom tab bar instead of a hamburger: 3 line icons with small labels, the active one in the brand colour.
   - Category tabs with a 3D icon beside the label: inactive is grey, active is ink with a 2px underline.
   - One easing curve: 0.2s for small state changes, 0.3s for panels.
