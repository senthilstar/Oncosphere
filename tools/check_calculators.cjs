// Independent numerical examples and boundary checks; no patient data.
const assert = require('node:assert/strict');
const {calculators: cs} = require('../assets/js/calculators.js');
const get = id => cs.find(c => c.id === id);
const run = (id, v) => get(id).run(v);
assert.equal(cs.length, 37);
assert.equal(new Set(cs.map(c=>c.id)).size, cs.length);
for(const c of cs){
 const v=Object.fromEntries(c.fields.map(f=>[f.key,f.options?Number(f.options[0][0]): f.key==='ht'?170:f.key==='wt'?70:f.key==='age'?50:f.key==='kps'?80:Math.max(f.min,1)]));
 const result=c.run(v);
 assert.equal(typeof result,'string',c.id);
 assert(!/NaN|Infinity|undefined/.test(result),c.id+': '+result);
 assert(c.source && /^https:\/\//.test(c.url) && c.bands,c.id);
}
assert.match(run('mosteller',{ht:180,wt:80}),/^2.00 m²/);
assert.match(run('dubois',{ht:180,wt:80}),/^2.00 m²/);
assert.match(run('cg',{age:60,wt:72,scr:1,female:0}),/^80.00/);
assert.match(run('calvert',{auc:5,gfr:150}),/^750.00 mg; GFR used 125/);
assert.match(run('anc',{wbc:1,neut:40,bands:5}),/^0.450.*Severe/);
assert.throws(()=>run('anc',{wbc:1,neut:80,bands:30}));
assert.match(run('sodium',{na:130,glucose:600}),/Katz: 138.00.*Hillier: 142.00/);
assert.match(run('qtc',{qt:400,hr:60,female:0}),/Bazett: 400 ms.*Fridericia: 400 ms/);
assert.match(run('hasford',{age:50,spleen:0,plt:1500,blasts:0,eos:0,baso:3}),/^1966.10/);
assert.match(run('eutos',{spleen:6,baso:9}),/^87.00 — Low/);
assert.match(run('eutos',{spleen:6.1,baso:9}),/High/);
assert.match(run('elts',{age:50,spleen:0,plt:1000,blasts:0}),/^0.7229 — Low/);
assert.match(run('sokal',{age:43.4,spleen:7.51,plt:700*Math.sqrt(.563),blasts:2.1}),/^1.0000 — Intermediate/);
assert.match(run('mipi',{age:60,ecog:0,ldh:200,uln:200,wbc:10}),/^5.8782 — Intermediate/);
assert.match(run('iss',{b2:5.5,alb:4}),/3/);
assert.match(run('riss',{b2:5.5,alb:4,ldh:200,uln:200,cyto:0}),/II$/);
assert.match(run('riss',{b2:5.5,alb:4,ldh:201,uln:200,cyto:0}),/III$/);
assert.match(run('ipssr',{bm:2,cyto:0,hb:10,plt:100,anc:.8}),/^0.0 — Very low/);
assert.match(run('ipssr',{bm:10,cyto:4,hb:7,plt:49,anc:.7}),/^9.0 — Very high/);
assert.match(run('breastgpa',{kps:100,age:59,sub:2}),/^4.0/);
assert.match(run('child',{bili:1,alb:4,inr:1,asc:1,enc:1}),/^5\/15 — Child–Pugh A/);
const doses=Object.fromEntries(get('mme').fields.map(f=>[f.key,0]));
assert.match(run('mme',{...doses,hydromorphone:10,methadone:10,fentanyl:25,tramadol:100}),/^177.00/);
assert.match(run('khorana',{site:2,plt:350,wbc:12,hb:9,esa:1,ht:100,wt:35}),/^6 — High/);
console.log('37 calculator smoke checks and independent numerical/boundary checks passed.');
