# taste-ui

**A Claude skill that designs from *your* taste instead of the model's defaults.**

Ask an AI for a landing page and you get the same page everyone gets: a generic sans headline, a purple gradient, three identical feature cards. `taste-ui` fixes the input, not the output. You give it the sites and apps you love; it measures them (real computed fonts, colours, radii, how the navbar behaves on scroll, what moves and how fast), distils what they have in common into a **taste profile**, and designs every UI from that. Then it *uses* what it built (scrolls it, opens the menu, tabs through it, breaks the forms) before handing it back.

## What it does

- **Builds your taste profile.** Point it at 5–10 sites you love. A capture script measures each one in a headless browser and the skill writes a short, specific note per site plus a `TASTE.md` that says what they share, which to borrow from for which kind of product, and which navigation and motion patterns are worth reusing.
- **Designs from it.** For any UI task it reads your profile, picks the 2–3 closest references, checks whether your taste even fits the product (a government form isn't a fashion brand), and proposes three genuinely different directions before building.
- **Asks the questions that change the result**, once, up front, each with options and a default, instead of guessing.
- **Checks its work like a user would.** Screenshots at 375, 768 and 1280 px in light and dark, then real interactions: scroll, mobile menu, keyboard focus, empty/loading/error states, bad form input. For bigger work, a second agent critiques the result without seeing the reasoning.
- **Studies new sites on request.** "Study linear.app and add it to my taste" captures the site, measures it and updates the profile.

It's a quality bar, not a costume: the fundamentals (one type system, real content, accessible, every state designed) always apply; your references' look is a strong default that the skill steps away from, out loud, when the product needs something else.

## Install

**Claude Code (plugin):**

```
/plugin marketplace add Breadstick-Crumbs/taste-ui
/plugin install taste-ui@taste-ui
```

**Manually:** copy `skills/taste-ui/` into `~/.claude/skills/` (for all projects) or `.claude/skills/` inside a project. The release page also has a zip of that folder.

Any agent that supports the Agent Skills format (a folder with a `SKILL.md`) can use it the same way.

### Requirements
- For the capture and screenshot scripts: **Node.js 22+** and a local **Chrome, Edge, Chromium or Brave**. They use only Node built-ins and the browser's DevTools protocol, so there's nothing to `npm install`. If your browser isn't found, set `TASTE_BROWSER` to its executable.
- Without them the skill still works: it uses whatever browser tool your agent has (a browser MCP server, Playwright, an in-app browser).

## Quick start

1. Ask Claude something like:
   > Build my taste profile. Sites I love: linear.app, stripe.com, arc.net, airbnb.com, teenage.engineering. I dislike: generic SaaS templates.
2. It captures each site into `~/.claude/taste/sites/<slug>/`, writes the notes and your `TASTE.md`, and shows you what it concluded.
3. From then on, any UI request ("design a pricing page for…", "make this dashboard look better") goes through your taste.

Prefer to run the capture yourself?

```bash
node ~/.claude/skills/taste-ui/scripts/capture.mjs ~/.claude/taste linear=https://linear.app stripe=https://stripe.com
```

Screenshot something you built:

```bash
node ~/.claude/skills/taste-ui/scripts/shoot.mjs ./index.html ./shots
```

Set `TASTE_DIR` to keep the profile somewhere else (for example inside a repo to share with a team).

## What's in a profile

```
~/.claude/taste/
  TASTE.md                 fundamentals, the shared taste, a reference index, nav and motion patterns, font stand-ins
  sites/<slug>/
    notes.md               signature, type, colour, layout, motion, components, copy voice, "steal this"
    tokens.json            measured fonts, sizes, colours by area, radii, shadows, motion libraries
    motion.json            header behaviour at several scroll depths, sticky/snap/scroll-driven effects, keyframes, transitions
    top.jpg mid.jpg low.jpg mobile-top.jpg
```

See [`examples/example-profile`](examples/example-profile) for a real one: the author's own 15-site profile (text only).

## How the skill works

1. **Understand the job:** audience and market, the one feeling, what the hero shows working. A project's own `DESIGN.md` or brand guidelines win over the profile.
2. **Ask** what's missing and would change the result, in one batch with defaults.
3. **Pick references** from one primary category in `TASTE.md`.
4. **Check the fit** and say so when stepping away from the profile.
5. **Propose three directions** that differ in type voice, colour approach, layout and signature move.
6. **Build** tokens first, with real copy and motion only where it carries the story.
7. **Use it:** screenshots, interactions, journeys, and an independent critique.

The whole procedure is in [`skills/taste-ui/SKILL.md`](skills/taste-ui/SKILL.md).

## Privacy and copyright

- Everything stays on your machine. The scripts talk only to the sites you name and to your local browser.
- Consent and cookie banners are **hidden, never accepted**, so screenshots show the page.
- Screenshots of other people's websites are for your **private reference**. Don't publish them, and don't commit them to a public repo (this repo's `.gitignore` excludes captures for that reason). The example profile here is text only.
- Captured page text is treated as data, never as instructions to the agent.

## Limitations

- Capture measures what a script can see. Hover states, opened menus and how motion *feels* still need a human or an agent looking live; the skill does that step in a browser.
- Some sites block headless browsers or render nothing until you interact. Notes record such caveats.
- Taste is personal: the profile describes yours, it doesn't validate it.

## Contributing

Issues and pull requests are welcome, especially: better header/motion detection in `capture.mjs`, new site-note patterns, and reports of sites the capture misreads.

## License

[MIT](LICENSE)
