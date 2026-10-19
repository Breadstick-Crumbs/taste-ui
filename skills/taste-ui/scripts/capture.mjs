// Capture reference sites for a taste profile: measured design tokens, header/scroll behaviour, screenshots.
//   node capture.mjs <taste-dir> <slug>=<url> [<slug>=<url> ...]
// Writes <taste-dir>/sites/<slug>/{tokens.json, motion.json, top.jpg, mid.jpg, low.jpg, mobile-top.jpg}.
// Cookie/consent overlays are hidden (never accepted) so screenshots show the page.
// Screenshots of other people's sites are for your private reference: don't publish them.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launch, sleep } from './browser.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const [dirArg, ...pairs] = process.argv.slice(2);
const sites = pairs.map((p) => { const i = p.indexOf('='); return [p.slice(0, i), p.slice(i + 1)]; }).filter(([s, u]) => /^[a-z0-9][a-z0-9-]*$/.test(s) && /^https?:\/\//.test(u));
if (!dirArg || !sites.length) { console.error('usage: node capture.mjs <taste-dir> <slug>=<url> [...]   (slug: lowercase letters, digits, dashes)'); process.exit(2); }
const EXTRACT = readFileSync(join(HERE, 'extract.js'), 'utf8');

const HIDE_CONSENT = `(() => { const vw = innerWidth * innerHeight; let n = 0;
  document.querySelectorAll('body *').forEach((el) => { const s = getComputedStyle(el); const r = el.getBoundingClientRect();
    if ((s.position === 'fixed' || s.position === 'sticky' || +s.zIndex > 999) && /cookie|consent|privacy|gdpr|we use/i.test(el.textContent.slice(0, 600)) && r.width * r.height > vw * 0.03) { el.style.setProperty('display', 'none', 'important'); n++; } });
  document.documentElement.style.overflow = 'auto'; document.body.style.overflow = 'auto'; return n; })()`;

// The header is found by position (fixed/sticky near the top, wide), not only by <nav>.
const HEADER_SAMPLE = `(() => {
  const els = [...document.querySelectorAll('body *')].filter((e) => { const s = getComputedStyle(e); const r = e.getBoundingClientRect();
    return (s.position === 'fixed' || s.position === 'sticky') && r.top < 120 && r.bottom > 0 && r.width > innerWidth * 0.5 && r.height < 220; });
  const h = els.sort((a, b) => b.getBoundingClientRect().width - a.getBoundingClientRect().width)[0];
  if (!h) return { found: false, y: scrollY };
  const s = getComputedStyle(h), r = h.getBoundingClientRect();
  const kids = [...h.querySelectorAll('*')].filter((k) => { const ks = getComputedStyle(k); return ks.backdropFilter !== 'none' || (ks.backgroundColor !== 'rgba(0, 0, 0, 0)' && k.getBoundingClientRect().width > r.width * 0.5); }).slice(0, 2)
    .map((k) => { const ks = getComputedStyle(k); return { bg: ks.backgroundColor, blur: ks.backdropFilter, radius: ks.borderRadius, inset: Math.round(k.getBoundingClientRect().left - r.left) }; });
  return { found: true, y: scrollY, tag: h.tagName.toLowerCase(), position: s.position, top: Math.round(r.top), height: Math.round(r.height), width: Math.round(r.width),
    bg: s.backgroundColor, blur: s.backdropFilter, shadow: s.boxShadow.slice(0, 80), border: s.borderBottom.slice(0, 60), transform: s.transform, opacity: s.opacity,
    transition: s.transition.slice(0, 120), links: h.querySelectorAll('a').length, layers: kids };
})()`;

const SCROLL_FX = `(() => {
  const rules = []; for (const sh of document.styleSheets) { try { for (const r of sh.cssRules) rules.push(r); } catch {} }
  const flat = (rs) => rs.flatMap((r) => (r.cssRules ? [r, ...flat([...r.cssRules])] : [r]));
  const all = flat(rules).map((r) => r.cssText);
  const sticky = [...document.querySelectorAll('body *')].filter((e) => getComputedStyle(e).position === 'sticky').slice(0, 12)
    .map((e) => ({ tag: e.tagName.toLowerCase(), cls: String(e.className).slice(0, 60), top: getComputedStyle(e).top, h: e.offsetHeight }));
  const snap = [...document.querySelectorAll('body *')].filter((e) => getComputedStyle(e).scrollSnapType !== 'none').slice(0, 6).map((e) => ({ tag: e.tagName.toLowerCase(), snap: getComputedStyle(e).scrollSnapType }));
  const transitions = {}; [...document.querySelectorAll('a, button, [class*="card"]')].slice(0, 400).forEach((e) => { const t = getComputedStyle(e).transition; if (t && !t.startsWith('all 0s')) { const k = t.slice(0, 50); transitions[k] = (transitions[k] || 0) + 1; } });
  return { stickyElements: sticky, scrollSnap: snap,
    scrollDrivenRules: all.filter((t) => /animation-timeline|view-timeline|scroll-timeline/.test(t)).slice(0, 10).map((t) => t.slice(0, 200)),
    keyframes: all.filter((t) => t.startsWith('@keyframes')).map((t) => t.slice(11, t.indexOf('{')).trim()).slice(0, 30),
    reducedMotionRules: all.filter((t) => /prefers-reduced-motion/.test(t)).length,
    commonTransitions: Object.entries(transitions).sort((a, b) => b[1] - a[1]).slice(0, 5) };
})()`;

const root = resolve(dirArg);
const browser = await launch(['--window-size=1440,900']);
let failures = 0;
try {
  for (const [slug, url] of sites) {
    const out = join(root, 'sites', slug); mkdirSync(out, { recursive: true });
    const page = await browser.newPage();
    try {
      await page.send('Page.enable'); await page.send('Runtime.enable');
      await page.send('Emulation.setDeviceMetricsOverride', { width: 1440, height: 900, deviceScaleFactor: 1, mobile: false });
      await page.send('Page.navigate', { url }); await sleep(8000);
      await page.evaluate(HIDE_CONSENT);
      for (const f of [0.15, 0.3, 0.45, 0]) { await page.evaluate(`window.scrollTo(0, document.documentElement.scrollHeight * ${f})`); await sleep(700); }
      const tokens = (await page.evaluate(EXTRACT)) ?? { error: 'token extraction failed' };
      writeFileSync(join(out, 'tokens.json'), JSON.stringify(tokens, null, 2));
      const header = [];
      for (const y of [0, 400, 1200, 2000, 1500]) { await page.evaluate(`window.scrollTo(0, ${y})`); await sleep(900); header.push({ label: y === 1500 ? 'back-up-1500' : `down-${y}`, ...(await page.evaluate(HEADER_SAMPLE)) }); }
      const motion = { header, scroll: await page.evaluate(SCROLL_FX), libraries: tokens.motion ?? null };
      writeFileSync(join(out, 'motion.json'), JSON.stringify(motion, null, 2));
      for (const [name, frac] of [['top', 0], ['mid', 0.3], ['low', 0.6]]) {
        await page.evaluate(`window.scrollTo(0, document.documentElement.scrollHeight * ${frac})`); await sleep(2200);
        const shot = await page.send('Page.captureScreenshot', { format: 'jpeg', quality: 60 });
        if (shot.result?.data) writeFileSync(join(out, `${name}.jpg`), Buffer.from(shot.result.data, 'base64'));
      }
      await page.send('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
      await page.send('Page.navigate', { url }); await sleep(5000); await page.evaluate(HIDE_CONSENT); await sleep(500);
      const m = await page.send('Page.captureScreenshot', { format: 'jpeg', quality: 60 });
      if (m.result?.data) writeFileSync(join(out, 'mobile-top.jpg'), Buffer.from(m.result.data, 'base64'));
      console.log(JSON.stringify({ slug, ok: !tokens.error, title: tokens.title ?? null, headerFound: header.some((h) => h.found) }));
    } catch (e) { failures++; console.log(JSON.stringify({ slug, ok: false, error: String(e).slice(0, 200) })); }
    finally { await page.close(); }
  }
} finally { await browser.close(); }
process.exit(failures ? 1 : 0);
