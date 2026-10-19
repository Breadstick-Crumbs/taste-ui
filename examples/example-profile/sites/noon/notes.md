# noon: design notes

Source: tokens.json only. All three screenshots show an Edge "can't reach this page" error (ERR_HTTP2_PROTOCOL_ERROR), so nothing below comes from them. Tokens were captured at 312px mobile width.

1. **Signature**: A solid yellow header (#FEEE00) on top of a very dense, image-heavy marketplace feed.

2. **Type**: One custom family, "Noontree", for all text. Sizes run only 12–15px. The page is dense and has no display type (from tokens). Arabic is a first-class script: the search placeholder is bilingual.

3. **Colour**: Signature yellow #FEEE00 on the header. The rest is white #FFFFFF and a cool off-white #F7F7FA used to separate sections. Accent colours were not captured (inferred: colour comes mostly from product images and promo banners).

4. **Layout & rhythm**: 463 images on one page, so the layout is built from carousels and tiles (inferred). The header carries location, language switch and search together.

5. **Imagery & motion**: No canvas, no video, no three.js. Everything is static images.

6. **Components**: Mixed radii of 3px, 10px, 12px and 100% (inferred: 3px on chips/badges, 10–12px on cards/banners, 100% on circular category icons). Shadow data was not captured.

7. **Anti-slop moves**:
   - One saturated brand colour floods the whole header bar. It is not used as a small accent.
   - The type range is tiny (12–15px), with no hero headline. Density is the brand.
   - The Arabic/English switch and the delivery location sit at the top of the page, not in the footer.
   - A custom typeface instead of Inter or Poppins.

8. **Commerce mechanics**: Search and location are in the header (inferred: delivery-promise messaging is tied to the location). Price, badges and urgency could not be observed.

## Navigation and motion

Not observable: noon blocked the headless browser, so the motion capture is an error page (no navbar, scroll, hover or mobile-menu data).
