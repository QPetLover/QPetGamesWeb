import { readFile, mkdir, copyFile, writeFile, rm, readdir } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
// Explicit release allowlist: native work and archived game/runtime assets stay unpublished.
const pages = ['index.html', 'player.html', 'maintenance.css'];
const pkg = JSON.parse(await readFile(path.join(root, 'package.json'), 'utf8'));
assert.equal(Object.keys(pkg.dependencies || {}).length, 0, 'The holding page has no runtime dependencies');
for (const name of pages) {
  const text = await readFile(path.join(root, 'web', name), 'utf8');
  assert(!/<(?:script|iframe|object|embed)\b/i.test(text), `${name}: executable game content is not allowed`);
  assert(!/\.(?:swf|wasm)\b|ruffle/i.test(text), `${name}: retired runtime resource reference`);
}
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
for (const name of pages) await copyFile(path.join(root, 'web', name), path.join(dist, name));
await writeFile(path.join(dist, '.nojekyll'), '');
assert.deepEqual((await readdir(dist)).sort(), [...pages, '.nojekyll'].sort());
console.log('Built holding page. All previously playable games and runtime assets are excluded.');
