import { readFile, readdir, mkdir, cp, copyFile, writeFile, rm } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { fileURLToPath } from 'node:url';
import path from 'node:path';
import assert from 'node:assert/strict';

const root = fileURLToPath(new URL('../', import.meta.url));
const dist = path.join(root, 'dist');
const runtime = path.join(root, 'node_modules/@ruffle-rs/ruffle');
const readJSON = async file => JSON.parse(await readFile(file, 'utf8'));
const sha = bytes => createHash('sha256').update(bytes).digest('hex');
const pkg = await readJSON(path.join(root, 'package.json'));
const installed = await readJSON(path.join(runtime, 'package.json'));
const lock = await readJSON(path.join(root, 'package-lock.json'));
assert.equal(installed.version, pkg.dependencies['@ruffle-rs/ruffle']);
assert.equal(installed.version, lock.packages['node_modules/@ruffle-rs/ruffle'].version);

// Validate all sources before replacing output. Original SWFs are copied unchanged.
const games = [];
for (const entry of (await readdir(path.join(root, 'games'), { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name))) {
  if (!entry.isDirectory()) continue;
  const id = entry.name;
  assert.match(id, /^[a-z0-9]+(?:-[a-z0-9]+)*$/);
  const source = path.join(root, 'games', id);
  const manifest = await readJSON(path.join(source, 'manifest.json'));
  assert.equal(manifest.id, id);
  assert.equal(manifest.kind, 'classic', `${id}: only original QQ Pet games are collected`);
  assert.match(manifest.sourceId, /^classic-\d{3}$/);
  assert(['started', 'verified-flow'].includes(manifest.verification?.status), `${id}: browser start verification is required before release`);
  assert.equal(manifest.originalUrl, `https://qpetlover.cn/QPetGames/#/play/${manifest.sourceId}`);
  assert.match(manifest.cover, new RegExp(`^games/${id}/cover\\.(jpg|jpeg|png|webp)$`));
  assert.equal(sha(await readFile(path.join(root, manifest.cover))), manifest.coverSha256, `${id}: original cover hash changed`);
  assert.equal(typeof manifest.title, 'string');
  assert(manifest.title.trim(), `${id}: title is required`);
  assert.equal(manifest.rufflePackage, '@ruffle-rs/ruffle');
  for (const field of ['tested', 'notTested', 'knownDifferences']) {
    assert(Array.isArray(manifest.verification?.[field]) && manifest.verification[field].every(value => typeof value === 'string'), `${id}: verification.${field} must be an array of strings`);
  }
  assert.equal(manifest.mode, 'unmodified-swf-on-ruffle');
  assert.equal(manifest.gameplayCodeModified, false);
  assert.equal(manifest.servedPath, `games/${id}/game.swf`);
  assert.equal(manifest.ruffleVersion, installed.version);
  for (const field of ['originalWidth', 'originalHeight', 'originalFrameRate']) assert(manifest[field] > 0, `${id}: invalid ${field}`);
  assert.match(manifest.sourceCommit, /^[a-f0-9]{40}$/);
  const swf = await readFile(path.join(source, 'game.swf'));
  assert(['FWS', 'CWS', 'ZWS'].includes(swf.subarray(0, 3).toString()), `${id}: not an SWF (possibly an LFS pointer)`);
  assert.equal(swf.length, manifest.swfBytes, `${id}: SWF size changed`);
  assert.equal(sha(swf), manifest.swfSha256, `${id}: original SWF hash changed`);
  if (manifest.fontFallback) {
    const font = manifest.fontFallback;
    assert.equal(typeof font.suppliedFace, 'string');
    assert.match(font.servedPath, /^fonts\/[A-Za-z0-9_-]+\.(otf|ttf|ttc|otc|swf)$/);
    const bytes = await readFile(path.join(root, 'assets', font.servedPath));
    assert.equal(sha(bytes), font.sha256, `${id}: font hash changed`);
    assert.equal(bytes.length, font.bytes);
  }
  games.push({ manifest, source });
}
assert(games.length > 0, 'No games found');
assert.equal(new Set(games.map(({ manifest }) => manifest.sourceId)).size, games.length, 'Duplicate original game');
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, 'web'), dist, { recursive: true });
await cp(path.join(root, 'assets/fonts'), path.join(dist, 'fonts'), { recursive: true });
await cp(runtime, path.join(dist, 'vendor/ruffle'), { recursive: true });
for (const { manifest, source } of games) {
  const target = path.join(dist, 'games', manifest.id);
  await mkdir(target, { recursive: true });
  await copyFile(path.join(source, 'game.swf'), path.join(target, 'game.swf'));
  await copyFile(path.join(source, 'manifest.json'), path.join(target, 'manifest.json'));
  await copyFile(path.join(root, manifest.cover), path.join(dist, manifest.cover));
}
await writeFile(path.join(dist, 'catalog.json'), JSON.stringify(games.map(({ manifest }) => ({
  id: manifest.id, title: manifest.title, baseTitle: manifest.baseTitle,
  kind: manifest.kind, kindLabel: manifest.kindLabel, sourceId: manifest.sourceId,
  cover: manifest.cover, originalUrl: manifest.originalUrl,
  verification: manifest.verification, manifest: `games/${manifest.id}/manifest.json`
})), null, 2) + '\n');
await writeFile(path.join(dist, '.nojekyll'), '');
console.log(`Built ${games.length} game(s) with Ruffle ${installed.version}; original SWF hashes verified.`);
