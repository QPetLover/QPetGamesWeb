import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('every generated bitmap reference has a declared source asset, including linked NPC states',()=>{
  const source=readFileSync(new URL('../assets/artwork.js',import.meta.url),'utf8');
  const provenance=JSON.parse(readFileSync(new URL('../assets/provenance.json',import.meta.url),'utf8'));
  const references=new Set(source.match(/\bimageObj\d+\b/g));
  const definitions=[...source.matchAll(/\b(?:var|let|const)\s+(imageObj\d+)\s*=/g)].map(match=>match[1]);
  assert.equal(new Set(definitions).size,definitions.length,'duplicate generated bitmap declaration');
  assert.deepEqual([...references].sort(),definitions.sort(),'unresolved generated bitmap reference');
  assert.deepEqual(definitions,[...Object.keys(provenance.embeddedImages)].sort(),'bitmap provenance differs from actual declarations');
});
