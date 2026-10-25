import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdtemp, writeFile, readFile, rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
import {execFile} from 'node:child_process';
import {promisify} from 'node:util';

const repo = fileURLToPath(new URL('../../', import.meta.url));
const exec = promisify(execFile);
const sha = bytes => createHash('sha256').update(bytes).digest('hex');

test('source-list CLI keeps the actual portable cache regressions and its own guard', async () => {
    const folder = await mkdtemp(path.join(tmpdir(), 'qpet-source-list-'));
    try {
        // No game pack or build is generated here. The source-list tool's
        // existing verified-manifest boundary is exercised with one tiny entry.
        const manifest = {
            mode: 'web',
            entries: [{id: 'source-list-fixture', inputs: [], pcmFiles: []}],
            shared: [], notices: [],
            font: {source: 'package.json'},
            host: 'native/qpet-adventure/common/host.js',
            template: 'native/qpet-adventure/page-template.html',
        };
        await writeFile(path.join(folder, 'build-manifest.json'), JSON.stringify(manifest));
        await writeFile(path.join(folder, 'verification.json'), JSON.stringify({passed: true, entries: 1}));
        const output = path.join(folder, 'required-source');
        await exec(process.execPath, [path.join(repo, 'scripts/adventure-source-list.mjs'), folder, '--output=' + output]);
        const report = JSON.parse(await readFile(output + '.json', 'utf8'));
        const paths = await readFile(output + '.txt', 'utf8');
        const pathspec = await readFile(output + '.paths0');
        const required = [
            'native/qpet-adventure/tests/path-cache.test.mjs',
            'native/qpet-adventure/tests/bitmap-cache.test.mjs',
            'native/qpet-adventure/tests/visible-fill.test.mjs',
            'scripts/tests/adventure-source-list.test.mjs',
        ];
        for (const name of required) {
            const row = report.files.find(file => file.path === name);
            assert(row, name + ' must survive the exact source closure');
            const actual = await readFile(path.join(repo, name));
            assert.equal(row.bytes, actual.length);
            assert.equal(row.sha256, sha(actual));
            assert(paths.split('\n').includes(name));
            assert(pathspec.includes(Buffer.from(name + '\0')));
        }
        assert.deepEqual(report.entries, ['source-list-fixture']);
        assert(!report.files.some(file => /\.(?:swf|as|wasm|xml)$/i.test(file.path)));
    } finally {
        await rm(folder, {recursive: true, force: true});
    }
});
