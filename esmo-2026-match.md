---
layout: default
title: "ESMO 2026 trial matching game: match 10 trials to disease or regimen"
description: "Interactive ESMO 2026 matching game: pair INTerpath-001, VOLGA, DeLLphi-305, DASL-HiCaP, Krascendo 1, SAFFRON, CLARITY-Gastric 01, HARMONi-GI1, HEALER and OptiTROP-Lung06 with the correct disease setting or regimen."
permalink: /esmo-2026-match/
---
<div class="wrap narrow block">
<h1>ESMO 2026 trial matching game</h1>
<p class="note"><strong>Educational only.</strong> Match each trial name to its disease setting or regimen. Every pair comes from the linked trial page and its primary sources. Nothing is saved or sent; your score stays in your browser.</p>
<p id="match-score" role="status" aria-live="polite">Score: 0 matched · 0 wrong · 10 left</p>
<div id="match-board" class="match-board" aria-live="polite"></div>
<p id="match-feedback" class="match-feedback" role="status" aria-live="polite"></p>
<p class="match-actions">
<button type="button" id="match-reset" class="match-btn">Start again</button>
<button type="button" id="match-shuffle" class="match-btn">Shuffle</button>
</p>
<p>Read the full summaries: <a href="{{ '/esmo-2026-presidential-symposium-1/' | relative_url }}">Presidential Symposium I</a> · <a href="{{ '/esmo-2026-presidential-symposium-2/' | relative_url }}">Presidential Symposium II</a> · <a href="{{ '/esmo-2026-china-phase-3-healer-optitrop-lung06/' | relative_url }}">HEALER and OptiTROP-Lung06</a> · <a href="{{ '/esmo-2026-quiz/' | relative_url }}">Trial quiz</a> · <a href="{{ '/esmo-2026/' | relative_url }}">ESMO 2026 hub</a></p>
<noscript><p>Enable JavaScript to play the matching game.</p></noscript>
</div>
<style>
.match-board{display:grid;grid-template-columns:1fr 1fr;gap:.75em 1em;margin:1em 0}
@media(max-width:640px){.match-board{grid-template-columns:1fr}}
.match-col{display:flex;flex-direction:column;gap:.45em}
.match-col h2{font-size:1em;margin:0 0 .35em;font-weight:600}
.match-item,.match-btn{text-align:left;padding:.55em .8em;border:1px solid #c9ced6;border-radius:8px;background:#fff;cursor:pointer;font:inherit;color:inherit}
.match-item:hover:not(:disabled){border-color:#4a6fa5}
.match-item.selected{border-color:#4a6fa5;background:#eef3fa;box-shadow:0 0 0 2px rgba(74,111,165,.25)}
.match-item.done{background:#e3f4e8;border-color:#2e8b57;cursor:default}
.match-item.wrong-flash{background:#fbe6e6;border-color:#c0392b}
.match-item:disabled{cursor:default}
.match-feedback{min-height:1.4em;font-size:.95em;margin:.4em 0 1em}
.match-feedback.ok{color:#1e6b3a}
.match-feedback.bad{color:#9b2c1f}
.match-actions{display:flex;flex-wrap:wrap;gap:.5em}
#match-score{font-weight:600}
</style>
<script>
(function(){
var P1="{{ '/esmo-2026-presidential-symposium-1/' | relative_url }}",P2="{{ '/esmo-2026-presidential-symposium-2/' | relative_url }}",P3="{{ '/esmo-2026-china-phase-3-healer-optitrop-lung06/' | relative_url }}";
var PAIRS=[
{id:"interpath",left:"INTerpath-001",right:"Adjuvant resected stage IIB–IV melanoma (intismeran autogene + pembrolizumab)",why:"RFS HR 0.58 (95% CI 0.45–0.75); OS immature.",l:P1},
{id:"volga",left:"VOLGA",right:"Cisplatin-ineligible/refusing MIBC (durvalumab + enfortumab vedotin)",why:"EFS HR 0.51; OS HR 0.58 vs surgery alone.",l:P1},
{id:"dellphi",left:"DeLLphi-305",right:"ES-SCLC first-line maintenance (tarlatamab + durvalumab)",why:"Median OS 21.1 vs 12.7 months; OS HR 0.42.",l:P1},
{id:"dasl",left:"DASL-HiCaP",right:"Very high-risk localised prostate (darolutamide + RT + ADT)",why:"MFS HR 0.42; OS HR 0.88, not significant.",l:P1},
{id:"krascendo",left:"Krascendo 1",right:"Pretreated KRAS G12C NSCLC (divarasib vs sotorasib/adagrasib)",why:"PFS 9.8 vs 5.7 months (HR 0.58); interim OS HR 0.56.",l:P2},
{id:"saffron",left:"SAFFRON",right:"EGFR-mutant NSCLC post-osimertinib with MET alteration (osimertinib + savolitinib)",why:"Vs platinum–pemetrexed; PFS HR 0.55; final OS HR 0.68.",l:P2},
{id:"clarity",left:"CLARITY-Gastric 01",right:"CLDN18.2+ gastric/GEC (sonesitatug vedotin)",why:"OS benefit concentrated in 3L+: 10.0 vs 5.0 months (HR 0.47); ITT PFS not met.",l:P2},
{id:"harmoni",left:"HARMONi-GI1",right:"First-line biliary cancer (ivonescimab + GemCis)",why:"Vs durvalumab + GemCis; OS HR 0.75; PFS HR 0.61.",l:P2},
{id:"healer",left:"HEALER",right:"First-line HER2+ advanced breast (anbenitamab + nab-docetaxel vs THP)",why:"PFS HR 0.46; 24-month PFS 58.5% vs 34.4%; OS immature.",l:P3},
{id:"optitrop",left:"OptiTROP-Lung06",right:"PD-L1 <1% non-squamous NSCLC (sacituzumab tirumotecan + pembrolizumab)",why:"Vs chemo + pembrolizumab; median PFS 15.0 vs 5.7 months (HR 0.49).",l:P3}
];
var board=document.getElementById('match-board'),scoreEl=document.getElementById('match-score'),fb=document.getElementById('match-feedback');
var leftOrder=[],rightOrder=[],matched={},wrong=0,pickL=null,pickR=null,busy=false;
function shuffle(a){var b=a.slice(),i,j,t;for(i=b.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=b[i];b[i]=b[j];b[j]=t}return b}
function remaining(){return PAIRS.filter(function(p){return !matched[p.id]}).length}
function upd(){var m=Object.keys(matched).length;scoreEl.textContent='Score: '+m+' matched · '+wrong+' wrong · '+remaining()+' left'+(remaining()===0?' — finished':'')}
function clearPick(){pickL=null;pickR=null;board.querySelectorAll('.match-item.selected').forEach(function(el){el.classList.remove('selected')})}
function setFb(ok,html){fb.className='match-feedback '+(ok?'ok':'bad');fb.innerHTML=html}
function tryMatch(){
if(pickL===null||pickR===null||busy)return;
busy=true;
var L=PAIRS[pickL],R=PAIRS[pickR];
var btnL=board.querySelector('[data-side="L"][data-idx="'+pickL+'"]');
var btnR=board.querySelector('[data-side="R"][data-idx="'+pickR+'"]');
if(L.id===R.id){
matched[L.id]=true;
if(btnL){btnL.classList.add('done');btnL.disabled=true}
if(btnR){btnR.classList.add('done');btnR.disabled=true}
setFb(true,'Correct. '+L.why+' <a href="'+L.l+'">Read the trial page</a>');
clearPick();busy=false;upd();
}else{
wrong++;
if(btnL)btnL.classList.add('wrong-flash');
if(btnR)btnR.classList.add('wrong-flash');
setFb(false,'Not a match. '+L.left+' belongs with: '+L.right+'. '+L.why+' <a href="'+L.l+'">Read the trial page</a>');
upd();
setTimeout(function(){
if(btnL)btnL.classList.remove('wrong-flash');
if(btnR)btnR.classList.remove('wrong-flash');
clearPick();busy=false;
},700);
}
}
function onPick(side,idx){
if(busy||matched[PAIRS[idx].id])return;
if(side==='L'){
if(pickL===idx){pickL=null;board.querySelector('[data-side="L"][data-idx="'+idx+'"]').classList.remove('selected');return}
board.querySelectorAll('[data-side="L"].selected').forEach(function(el){el.classList.remove('selected')});
pickL=idx;board.querySelector('[data-side="L"][data-idx="'+idx+'"]').classList.add('selected');
}else{
if(pickR===idx){pickR=null;board.querySelector('[data-side="R"][data-idx="'+idx+'"]').classList.remove('selected');return}
board.querySelectorAll('[data-side="R"].selected').forEach(function(el){el.classList.remove('selected')});
pickR=idx;board.querySelector('[data-side="R"][data-idx="'+idx+'"]').classList.add('selected');
}
if(pickL!==null&&pickR!==null)tryMatch();
}
function render(doShuffle){
matched={};wrong=0;pickL=null;pickR=null;busy=false;fb.textContent='';fb.className='match-feedback';
var idxs=PAIRS.map(function(_,i){return i});
leftOrder=doShuffle===false?idxs.slice():shuffle(idxs);
rightOrder=doShuffle===false?idxs.slice():shuffle(idxs);
board.innerHTML='';
var colL=document.createElement('div');colL.className='match-col';
var hL=document.createElement('h2');hL.textContent='Trial';colL.appendChild(hL);
leftOrder.forEach(function(i){var b=document.createElement('button');b.type='button';b.className='match-item';b.setAttribute('data-side','L');b.setAttribute('data-idx',String(i));b.textContent=PAIRS[i].left;b.onclick=function(){onPick('L',i)};colL.appendChild(b)});
var colR=document.createElement('div');colR.className='match-col';
var hR=document.createElement('h2');hR.textContent='Disease / regimen';colR.appendChild(hR);
rightOrder.forEach(function(i){var b=document.createElement('button');b.type='button';b.className='match-item';b.setAttribute('data-side','R');b.setAttribute('data-idx',String(i));b.textContent=PAIRS[i].right;b.onclick=function(){onPick('R',i)};colR.appendChild(b)});
board.appendChild(colL);board.appendChild(colR);upd();
}
document.getElementById('match-reset').onclick=function(){render(true)};
document.getElementById('match-shuffle').onclick=function(){
if(Object.keys(matched).length===PAIRS.length){render(true);return}
var leftOpen=[],rightOpen=[];
leftOrder.forEach(function(i){if(!matched[PAIRS[i].id])leftOpen.push(i)});
rightOrder.forEach(function(i){if(!matched[PAIRS[i].id])rightOpen.push(i)});
leftOpen=shuffle(leftOpen);rightOpen=shuffle(rightOpen);
var li=0,ri=0;
leftOrder=leftOrder.map(function(i){return matched[PAIRS[i].id]?i:leftOpen[li++]});
rightOrder=rightOrder.map(function(i){return matched[PAIRS[i].id]?i:rightOpen[ri++]});
pickL=null;pickR=null;fb.textContent='';fb.className='match-feedback';
board.innerHTML='';
var colL=document.createElement('div');colL.className='match-col';
var hL=document.createElement('h2');hL.textContent='Trial';colL.appendChild(hL);
leftOrder.forEach(function(i){var b=document.createElement('button');b.type='button';b.className='match-item'+(matched[PAIRS[i].id]?' done':'');b.setAttribute('data-side','L');b.setAttribute('data-idx',String(i));b.textContent=PAIRS[i].left;if(matched[PAIRS[i].id])b.disabled=true;else b.onclick=function(){onPick('L',i)};colL.appendChild(b)});
var colR=document.createElement('div');colR.className='match-col';
var hR=document.createElement('h2');hR.textContent='Disease / regimen';colR.appendChild(hR);
rightOrder.forEach(function(i){var b=document.createElement('button');b.type='button';b.className='match-item'+(matched[PAIRS[i].id]?' done':'');b.setAttribute('data-side','R');b.setAttribute('data-idx',String(i));b.textContent=PAIRS[i].right;if(matched[PAIRS[i].id])b.disabled=true;else b.onclick=function(){onPick('R',i)};colR.appendChild(b)});
board.appendChild(colL);board.appendChild(colR);
};
render(true);
})();
</script>
