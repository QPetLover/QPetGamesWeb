import { createArtwork } from './assets/artwork.js';
import { instances, buttonBounds } from './assets/instances.js';
import { contains } from './scene.js';

export async function createRenderer(canvas, options = {}) {
  const ctx = canvas.getContext('2d'); let game, active, activeColor; let regions = [];
  const masks = new Map(); let rootLayers = [], layerKey = null;
  const immutable = node => !node.dynamic && !node.removed && !game.kind(node.id)?.startsWith('button') && !['1071','1158','1159'].includes(node.id) && (!instances[node.id] || instances[node.id].frames.length === 1 && node.children.every(immutable));
  function actionFor(node) {
    if (node.name === 'anStart') return 'start';
    if (node.name === 'anReplay') return 'replay';
    if (node.name === 'anGameBack') return 'exit';
    if (node.parent?.name === 'gameSoundControl') return 'mute';
    return null;
  }
  function draw(node, context, color) {
    if (!node || node.removed || !node.visible) return;
    const profileStart = options.profile ? performance.now() : 0;
    const previous = active, previousColor = activeColor;
    active = node; activeColor = color;
    const name = game.kind(node.id);
    if (!name) throw new Error('Unmapped original symbol ' + node.id);
    const action = actionFor(node);
    let frame = node.frame - 1;
    if (name.startsWith('button')) {
      const box = game.bounds(node);
      if (action && box) regions.push({ action, id: node.id, node, box, matrix: game.worldMatrix(node) });
      if (action && contains(box, game.pointer.x, game.pointer.y)) frame = game.pointer.down ? 2 : 1;
    }
    artwork.draw(name, context, frame, 0, color, node.ratio);
    // Flash addChild content follows the authored display list. The role's
    // empty dishs anchor receives each original Dish at x=i*7,y=10.
    for (const child of node.children.filter(child => child.dynamic && !child.removed)) {
      context.save();
      const factor = node.id === 'main' ? 1 / 20 : 1;
      context.transform(...child.matrix.map(value => value * factor));
      draw(child, context, child.color ? color.merge(artwork.color(child.color)) : color);
      context.restore();
    }
    active = previous; activeColor = previousColor;
    if(options.profile)options.profile({id:node.id,frame:node.frame,milliseconds:performance.now()-profileStart});
  }
  const artwork = createArtwork(canvas, {
    pathCache: options.pathCache, bitmapCache: options.bitmapCache, filterCache: options.filterCache,
    text(id) { return id === '1071' ? game.resultMessage || '' : id === '1158' ? game.rules.totalScoreText ?? '' : id === '1159' ? game.rules.dishNumText ?? '' : ''; },
    place({ obj, slot }) {
      if (!active || !instances[active.id]) return;
      const row = instances[active.id].frames[active.frame - 1]?.[slot];
      if (!row) return { skip: true };
      const child = active.children.find(child => !child.dynamic && !child.removed && child.depth === row.depth && child.id === row.id);
      if (!child) return { skip: true };
      if (obj !== game.kind(child.id)) throw new Error('Trays drawing closure mismatch ' + active.id + ':' + slot + ' ' + obj);
      const color = child.color ? activeColor.merge(artwork.color(child.color)) : activeColor;
      return { matrix: child.matrix.map(value => value * game.drawingFactor(active.id)), frame: child.frame - 1, ratio: child.ratio, time: 0, draw(context) { draw(child, context, color); } };
    }
  });
  artwork.prepare(ctx); await artwork.ready();
  function alphaMask(region) {
    if (masks.has(region.id)) return masks.get(region.id);
    const box = buttonBounds[region.id];
    if (!box) return null;
    const c = document.createElement('canvas'); c.width = Math.max(1, Math.ceil(box[2] - box[0]) + 2); c.height = Math.max(1, Math.ceil(box[3] - box[1]) + 2);
    const context = c.getContext('2d'); artwork.prepare(context);
    context.setTransform(.05, 0, 0, .05, 1 - box[0], 1 - box[1]);
    const previous = active; active = null; artwork.draw('button' + region.id, context, 3); active = previous;
    const mask = { box, width: c.width, height: c.height, pixels: context.getImageData(0, 0, c.width, c.height).data };
    masks.set(region.id, mask); return mask;
  }
  function paintRoot(context, color) {
    const children = game.root.children.filter(child => !child.dynamic && !child.removed);
    const key = JSON.stringify([canvas.width, canvas.height, game.root.frame, children.filter(immutable).map(n => [n.id,n.frame,n.matrix,n.color,n.visible])]);
    if (key !== layerKey) {
      rootLayers = []; let batch = [];
      const finish = () => { if (!batch.length) return; const nodes = batch; batch = []; const layer = document.createElement('canvas'); layer.width = canvas.width; layer.height = canvas.height; const target = layer.getContext('2d'); artwork.prepare(target); target.setTransform(canvas.width/800,0,0,canvas.height/600,0,0);
        for (const child of nodes) { target.save(); target.transform(...child.matrix.map(v=>v/20)); draw(child,target,child.color?color.merge(artwork.color(child.color)):color); target.restore(); }
        rootLayers.push({canvas:layer}); };
      for (const child of children) { if (options.layerCache!==false && immutable(child)) batch.push(child); else { finish(); rootLayers.push({node:child}); } } finish(); layerKey = key;
    }
    for (const layer of rootLayers) {
      if (layer.canvas) { context.save(); context.setTransform(1,0,0,1,0,0); context.drawImage(layer.canvas,0,0); context.restore(); }
      else { const child=layer.node; context.save(); context.transform(...child.matrix.map(v=>v/20)); draw(child,context,child.color?color.merge(artwork.color(child.color)):color); context.restore(); }
    }
    for (const child of game.root.children.filter(child=>child.dynamic&&!child.removed)) { context.save();context.transform(...child.matrix.map(v=>v/20));draw(child,context,child.color?color.merge(artwork.color(child.color)):color);context.restore(); }
  }
  return {
    artwork,
    cacheStats(){return{...artwork.cacheStats(),layers:rootLayers.filter(l=>l.canvas).length,layerBytes:rootLayers.filter(l=>l.canvas).reduce((n,l)=>n+l.canvas.width*l.canvas.height*4,0)};},
    render(next) {
      game = next; regions = [];
      ctx.save(); ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.setTransform(canvas.width / 800, 0, 0, canvas.height / 600, 0, 0);
      ctx.beginPath(); ctx.rect(0, 0, 800, 600); ctx.clip();
      if(options.layerCache!==true)draw(game.root,ctx,artwork.color([0,0,0,0,256,256,256,256]));else paintRoot(ctx,artwork.color([0, 0, 0, 0, 256, 256, 256, 256])); ctx.restore();
    },
    hitTest(x, y) {
      for (const region of [...regions].reverse()) {
        if (!contains(region.box, x, y)) continue;
        const m = region.matrix, determinant = m[0] * m[3] - m[1] * m[2];
        if (!determinant) continue;
        const px = x * 20 - m[4], py = y * 20 - m[5], mask = alphaMask(region);
        if (!mask) continue;
        const u = (m[3] * px - m[2] * py) / determinant / 20 - mask.box[0] + 1;
        const v = (-m[1] * px + m[0] * py) / determinant / 20 - mask.box[1] + 1;
        const ix = Math.floor(u), iy = Math.floor(v);
        if (ix >= 0 && iy >= 0 && ix < mask.width && iy < mask.height && mask.pixels[(iy * mask.width + ix) * 4 + 3]) return region.action;
      }
      return null;
    },
    regions() { return regions.map(({ action, id, box }) => ({ action, id, box: [...box] })); }
  };
}
