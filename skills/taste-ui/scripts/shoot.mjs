// Screenshot a page you built at phone, tablet and desktop widths, and collect console errors.
//   node shoot.mjs <url-or-html-file> <out-dir>
// Writes w375.jpg, w768.jpg, w1280.jpg, w1280-mid.jpg (further down the page) and console.json.
// Exits non-zero if the browser fails or a screenshot could not be taken.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';
import { pathToFileURL } from 'node:url';
import { launch, sleep } from './browser.mjs';

const [target, outArg] = process.argv.slice(2);
if (!target || !outArg) { console.error('usage: node shoot.mjs <url-or-html-file> <out-dir>'); process.exit(2); }
const url = /^https?:\/\//.test(target) ? target : pathToFileURL(resolve(target)).href;
const out = resolve(outArg); mkdirSync(out, { recursive: true });

const SHOTS = [['w375', 375, 812, true, 0], ['w768', 768, 1024, true, 0], ['w1280', 1280, 800, false, 0], ['w1280-mid', 1280, 800, false, 0.45]];
let exitCode = 0;
const browser = await launch();
try {
  const page = await browser.newPage();
  await page.send('Page.enable'); await page.send('Runtime.enable');
  const written = [];
  for (const [name, w, h, mobile, frac] of SHOTS) {
    await page.send('Emulation.setDeviceMetricsOverride', { width: w, height: h, deviceScaleFactor: 1, mobile });
    await page.send('Page.navigate', { url }); await sleep(3000);
    await page.evaluate(`window.scrollTo(0, document.documentElement.scrollHeight * ${frac})`); await sleep(900);
    const s = await page.send('Page.captureScreenshot', { format: 'jpeg', quality: 72 });
    if (!s.result?.data) { exitCode = 1; console.error(`screenshot failed: ${name}`); continue; }
    writeFileSync(join(out, `${name}.jpg`), Buffer.from(s.result.data, 'base64')); written.push(name);
  }
  const errors = page.events
    .filter((e) => e.method === 'Runtime.exceptionThrown' || (e.method === 'Runtime.consoleAPICalled' && e.params.type === 'error'))
    .map((e) => JSON.stringify(e.params).slice(0, 300));
  writeFileSync(join(out, 'console.json'), JSON.stringify({ url, errors }, null, 2));
  console.log(JSON.stringify({ out, shots: written, consoleErrors: errors.length }));
  await page.close();
} catch (e) { exitCode = 1; console.error(String(e)); }
finally { await browser.close(); }
process.exit(exitCode);
