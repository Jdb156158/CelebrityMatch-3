import {test} from 'node:test';
import assert from 'node:assert/strict';
import {existsSync} from 'node:fs';
import {ART,artAsset,artStyle} from '../dist/portraits.js';

test('100 distinct entries retain existing saved IDs and reach the last portrait',()=>{
 assert.equal(ART.length,100);
 assert.equal(new Set(ART.map(a=>a[0])).size,100);
 assert.equal(ART[0][0],'戴珍珠耳环的少女');
 assert.equal(ART[11][0],'牛顿');
 assert.equal(ART[12][0],'达尔文');
 assert.equal(ART[99][0],'谷爱凌');
 assert.ok(ART.every(a=>a.length===3&&a.every(v=>typeof v==='string'&&v.trim().length>0)));
});
test('every portrait maps to a unique in-bounds cell in an existing atlas',()=>{
 const cells=new Set(),sheets=new Set();
 for(let i=0;i<ART.length;i++){
  const a=artAsset(i);
  assert.ok(a.x>=0&&a.x<a.columns&&a.y>=0&&a.y<a.rows,`portrait ${i+1}`);
  assert.ok(existsSync(new URL('../dist/'+a.src,import.meta.url)),a.src);
  cells.add(`${a.src}:${a.x}:${a.y}`);sheets.add(a.src);
  assert.ok(artStyle(i).includes(`background-size:${a.columns*100}% ${a.rows*100}%`));
 }
 assert.equal(cells.size,100);assert.equal(sheets.size,9);
 assert.deepEqual(artAsset(99),{src:'assets/portraits-08.webp',columns:2,rows:2,x:1,y:1});
});
