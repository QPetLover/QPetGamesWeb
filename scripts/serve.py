#!/usr/bin/env python3
"""Serve the built collection on loopback only."""
import argparse
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

parser = argparse.ArgumentParser()
parser.add_argument('--port', type=int, default=4178)
args = parser.parse_args()
dist = Path(__file__).resolve().parents[1] / 'dist'
if not (dist / 'catalog.json').is_file():
    parser.error('Run npm run build first.')

class Handler(SimpleHTTPRequestHandler):
    extensions_map = {**SimpleHTTPRequestHandler.extensions_map, '.wasm': 'application/wasm'}

with ThreadingHTTPServer(('127.0.0.1', args.port), partial(Handler, directory=str(dist))) as server:
    print(f'Q宠游戏: http://127.0.0.1:{args.port}/', flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
