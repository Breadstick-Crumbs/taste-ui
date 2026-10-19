# SmartMum (smartmum.ai)

1. **Signature**: Two-tone headlines (an ink line, then a berry line) beside a live fetal-heart-rate card, with Gulf-region personas.

2. **Type**: Urbanist only (203 uses), plus ui-monospace for tracked uppercase eyebrows ("AI-POWERED CARE"). h2 is 48px/700; body is a light-looking 20px with line-height 32.5px. The tokens give the h1 as 16px (a wrapper). The visible h1 is about 80px bold (inferred) with a rotating word: mothers / babies / families.

3. **Colour**: Light: #FFFFFF / #FAFAFA / about #F8FAFC. The single accent is berry #A94064 (CTA, the second headline line, chart bars, outcome card), with a 5% berry tint for chips. Text is slate, approximately #0F172A / #475569 / #64748B.

4. **Layout & rhythm**: The hero is split: copy on the left, and a product card on a slightly rotated backing plate on the right. Then a stats row (24/7, 30s, 99.9%). "Two sides, one platform" places a phone mockup and a browser mockup side by side, labelled with pills.

5. **Imagery & motion**: All imagery is product UI (vitals, bar chart, doctor dashboard). Avatars wear hijabs, and one is "Fatima Al-Mansouri, Dubai, UAE". No motion libraries, 11 CSS animations.

6. **Components**: 12px radius buttons and pills, no shadows (tinted plates give the depth). The nav floats, marks the active item with a pill and has a dark-mode toggle. The secondary CTA is a black pill.

7. **Anti-slop moves**:
- A real clinical number (142 bpm) is the hero visual.
- The second headline line turns accent-coloured or drops to grey ("what you feel").
- Mono eyebrows against a rounded sans.
- Localised personas plus HIPAA / UNFPA trust badges.
- The backing plate is tilted a few degrees.

8. **Copy voice**: Calm and caring: "Monitoring made effortless", "Your doctor sees what you feel".

## Navigation and motion

*Caveat:* the recapture found no menu toggle, so the mobile menu is still not captured (mobile-menu.jpg is the first capture's dark-mode shot).

1. **Navbar:** `header.fixed`, 80-82px. Logo on the left; 4 links centred (Urbanist 16px/400); Contact, a theme toggle and a berry "Book Demo" on the right. At the top it has no container. From frame 2 (540px) on it is a **floating white card**: about 1150px wide, 16px inset, 1px border, faint shadow. It never hides or shrinks. **Scroll-spy:** a berry-tint active pill moves Home → Features (1200px) → How It Works (2000px), and back to Features at 1500px going up.
2. **Scroll:** CSS smooth scrolling only, no libraries. The 8 frames show plain stacked sections with nothing pinned, parallax or scroll-animated. 11 CSS animations, including the rotating hero word.
3. **Mobile menu:** Not captured. mobile-top.jpg shows the logo, a moon icon and a hamburger. The first capture found a `div.fixed.inset-0` with 5 links, which suggests a full-screen overlay (inferred). The dark theme keeps the berry accent.
4. **Micro-interactions:** 0.15s cubic-bezier(0.4,...) on 39 elements; 0.2s on nav links; 0.3s ease on buttons. Hover registered no style change. The detector flagged a custom cursor (unconfirmed).
5. **Steal this:**
   - Scroll-spy pill: the active item gets a 5% accent tint and accent-coloured text. Switch it with an IntersectionObserver at 40% of the viewport, with a 0.2s transition.
   - A transparent header that becomes a white card after 80px (inferred): 1px `#eee` border, 16px radius, 16px inset, 0.3s.
   - A theme toggle in the nav that keeps the accent in both themes.
