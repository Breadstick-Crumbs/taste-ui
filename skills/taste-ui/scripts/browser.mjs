// Shared helpers: find a local Chrome/Edge/Chromium and drive it headless over the DevTools protocol.
// Node 22+ built-ins only (global fetch and WebSocket). No npm install needed.
import { spawn, spawnSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { join } from 'node:path';
import { tmpdir } from 'node:os';

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** Path to a Chromium-based browser: $TASTE_BROWSER, then the usual install locations, then PATH. */
export function findBrowser() {
  if (process.env.TASTE_BROWSER) return process.env.TASTE_BROWSER;
  const env = process.env;
  const candidates = {
    win32: [
      `${env['PROGRAMFILES(X86)']}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${env.PROGRAMFILES}\\Microsoft\\Edge\\Application\\msedge.exe`,
      `${env.PROGRAMFILES}\\Google\\Chrome\\Application\\chrome.exe`,
      `${env['PROGRAMFILES(X86)']}\\Google\\Chrome\\Application\\chrome.exe`,
      `${env.LOCALAPPDATA}\\Google\\Chrome\\Application\\chrome.exe`,
    ],
    darwin: [
      '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
      '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
      '/Applications/Chromium.app/Contents/MacOS/Chromium',
      '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
    ],
  }[process.platform] ?? [];
  const found = candidates.find((p) => p && !p.includes('undefined') && existsSync(p));
  if (found) return found;
  for (const name of ['google-chrome', 'google-chrome-stable', 'chromium', 'chromium-browser', 'microsoft-edge', 'microsoft-edge-stable']) {
    const r = spawnSync(process.platform === 'win32' ? 'where' : 'which', [name], { encoding: 'utf8' });
    if (r.status === 0 && r.stdout.trim()) return r.stdout.trim().split(/\r?\n/)[0];
  }
  throw new Error('No Chrome, Edge or Chromium found. Install one, or set TASTE_BROWSER to its executable.');
}

/** Launch the browser headless; returns { newPage, close }. Each page is { send, events, close }. */
export async function launch(extraArgs = []) {
  // Port 0 lets the browser pick a free port; it writes the port to DevToolsActivePort in the profile folder.
  const profile = join(tmpdir(), `taste-ui-${process.pid}-${Date.now()}`);
  const proc = spawn(findBrowser(), ['--headless=new', '--remote-debugging-port=0', `--user-data-dir=${profile}`,
    '--hide-scrollbars', '--mute-audio', '--no-first-run', '--no-default-browser-check', ...extraArgs, 'about:blank'], { stdio: 'ignore' });
  let port = 0;
  for (let i = 0; i < 80 && !port; i++) {
    try { port = Number(readFileSync(join(profile, 'DevToolsActivePort'), 'utf8').split(/\r?\n/)[0]) || 0; } catch {}
    if (!port) await sleep(250);
  }
  if (!port) { proc.kill(); throw new Error('The browser did not start (no DevTools port).'); }

  async function newPage() {
    const t = await (await fetch(`http://127.0.0.1:${port}/json/new?about:blank`, { method: 'PUT' })).json();
    const ws = new WebSocket(t.webSocketDebuggerUrl);
    await new Promise((res, rej) => { ws.onopen = res; ws.onerror = rej; });
    let id = 0; const waiting = new Map(); const events = [];
    ws.onmessage = (m) => { const d = JSON.parse(m.data); if (d.id && waiting.has(d.id)) { waiting.get(d.id)(d); waiting.delete(d.id); } else if (d.method) events.push(d); };
    const send = (method, params = {}) => new Promise((res) => { const i = ++id; waiting.set(i, res); ws.send(JSON.stringify({ id: i, method, params })); });
    const evaluate = async (expression) => (await send('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true })).result?.result?.value;
    const close = async () => { ws.close(); await fetch(`http://127.0.0.1:${port}/json/close/${t.id}`).catch(() => {}); };
    return { send, evaluate, events, close };
  }
  async function close() {
    proc.kill();
    await sleep(800);
    try { rmSync(profile, { recursive: true, force: true }); } catch {}
  }
  return { newPage, close };
}
