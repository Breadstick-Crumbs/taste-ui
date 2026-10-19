# Example profile

The author's own taste profile, built with this skill from **15 reference sites**. It's here to show what a finished profile looks like: specific, measured, and written as taste rather than rules. Read [`TASTE.md`](TASTE.md) first, then any site's `notes.md`.

| Category | Site | Notes | Look at it for |
|---|---|---|---|
| AI / SaaS | [Wispr Flow](https://wisprflow.ai/) | [wisprflow](sites/wisprflow/notes.md) | warm, human SaaS |
| AI / SaaS | [Ponytail](https://ponytail.dev/) | [ponytail](sites/ponytail/notes.md) | developer tools |
| AI / SaaS | [Giga](https://giga.ai/) | [giga](sites/giga/notes.md) | bold AI and ops products |
| AI / SaaS | [Hermes Agent](https://hermes-agent.nousresearch.com/) | [hermes](sites/hermes/notes.md) | research and agent products |
| AI / SaaS | [Angle](https://askangle.com/) | [askangle](sites/askangle/notes.md) | AI commerce |
| AI / SaaS | [SmartMum](https://www.smartmum.ai/) | [smartmum](sites/smartmum/notes.md) | health, regional (GCC) products |
| AI / SaaS | [Arcade](https://www.arcade.software/) | [arcade](sites/arcade/notes.md) | a counter-example: competent but forgettable |
| Consumer AI | [Mindtrip](https://mindtrip.ai/) | [mindtrip](sites/mindtrip/notes.md) | consumer assistants, travel, lifestyle |
| Commerce | [noon](https://www.noon.com/uae-en/) | [noon](sites/noon/notes.md) | mass-market UAE commerce |
| Commerce | [Allbirds UAE](https://allbirds.ae/) | [allbirds](sites/allbirds/notes.md) | friendly direct-to-consumer |
| Commerce | [Kay](https://www.kay.com/) | [kay](sites/kay/notes.md) | premium and jewellery |
| Commerce | [Represent](https://row.representclo.com/) | [represent](sites/represent/notes.md) | fashion brand |
| Commerce | [House of Blanks](https://www.houseofblanks.com/) | [houseofblanks](sites/houseofblanks/notes.md) | minimal, spec-driven |
| Marketplace | [Airbnb UAE](https://www.airbnb.ae/) | [airbnb](sites/airbnb/notes.md) | search-led products |
| Immersive | [Morpho](https://morphowater.com/) | [morpho](sites/morpho/notes.md) | storytelling, 3D |

Only the text is included. The notes mention screenshots and measurement files (`top.jpg`, `tokens.json`, `motion.json`) that were captured privately and are not published, because they show other people's websites. To rebuild all of them for your own reference:

```bash
node skills/taste-ui/scripts/capture.mjs examples/example-profile \
  wisprflow=https://wisprflow.ai/ ponytail=https://ponytail.dev/ giga=https://giga.ai/ \
  hermes=https://hermes-agent.nousresearch.com/ askangle=https://askangle.com/ smartmum=https://www.smartmum.ai/ \
  arcade=https://www.arcade.software/ mindtrip=https://mindtrip.ai/ noon=https://www.noon.com/uae-en/ \
  allbirds=https://allbirds.ae/ kay=https://www.kay.com/ represent=https://row.representclo.com/ \
  houseofblanks=https://www.houseofblanks.com/ airbnb=https://www.airbnb.ae/ morpho=https://morphowater.com/
```

Use it as a model for your own `TASTE.md`, not as your taste.
