---
layout: default
title: "ESMO 2026 trial matching game: match 10 trials to disease or regimen"
description: "Interactive ESMO 2026 matching game: pair INTerpath-001, VOLGA, DeLLphi-305, DASL-HiCaP, Krascendo 1, SAFFRON, CLARITY-Gastric 01, HARMONi-GI1, HEALER and OptiTROP-Lung06 with the correct disease setting or regimen."
permalink: /esmo-2026-match/
---
<div class="wrap narrow block">
<h1>ESMO 2026 trial matching game</h1>
<p class="note"><strong>Educational only.</strong> Match each trial name to its disease setting or regimen. Each match includes a trial result and its source. The linked summaries provide more context. Nothing is saved or sent; your score stays in your browser.</p>
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
{id:"interpath",left:"INTerpath-001",right:"Adjuvant treatment after complete resection of stage IIB–IV cutaneous melanoma (intismeran autogene + pembrolizumab)",why:"Recurrence-free survival at 24 months was 82.2% with intismeran plus pembrolizumab versus 70.0% with placebo plus pembrolizumab; overall survival data remained immature.",src:"https://pubmed.ncbi.nlm.nih.gov/43013837/",cite:"NEJM 2026",l:P1},
{id:"volga",left:"VOLGA",right:"Cisplatin-ineligible or declining muscle-invasive bladder cancer (perioperative durvalumab + neoadjuvant enfortumab vedotin)",why:"Versus cystectomy alone, event-free survival HR was 0.51 (95% CI 0.38–0.67) and overall survival HR was 0.58 (95% CI 0.40–0.83) at interim analysis.",src:"https://pubmed.ncbi.nlm.nih.gov/42929692/",cite:"NEJM 2026",l:P1},
{id:"dellphi",left:"DeLLphi-305",right:"Extensive-stage small-cell lung cancer maintenance without progression after induction chemoimmunotherapy (tarlatamab + durvalumab)",why:"At interim analysis, median overall survival from maintenance randomisation was 21.1 versus 12.7 months with durvalumab alone (HR 0.42; 95% CI 0.32–0.54).",src:"https://pubmed.ncbi.nlm.nih.gov/42929702/",cite:"NEJM 2026",l:P1},
{id:"dasl",left:"DASL-HiCaP",right:"Very high-risk localised or recurrent prostate cancer (darolutamide + radiotherapy + androgen deprivation)",why:"At interim analysis, conventional-imaging metastasis-free survival HR was 0.42 (95% CI 0.27–0.66) versus placebo on the same backbone; overall survival HR was 0.88 (95% CI 0.49–1.59), with follow-up ongoing.",src:"https://www.bayer.com/media/en-us/darolutamide-plus-adt-and-radiation-therapy-reduces-risk-of-metastasis-or-death-by-58-in-prostate-cancer-patients-at-high-risk-of-recurrence/",cite:"Sponsor-reported 2026",l:P1},
{id:"krascendo",left:"Krascendo 1",right:"Previously treated KRAS G12C-mutant advanced NSCLC (divarasib vs sotorasib or adagrasib)",why:"Median progression-free survival was 9.8 versus 5.7 months (HR 0.58; 95% CI 0.44–0.76); overall survival HR at interim analysis was 0.56 (95% CI 0.41–0.78).",src:"https://pubmed.ncbi.nlm.nih.gov/42929675/",cite:"NEJM 2026",l:P2},
{id:"saffron",left:"SAFFRON",right:"EGFR-mutant advanced NSCLC progressing on osimertinib with MET overexpression (IHC 3+ in ≥90% of tumour cells) or amplification (FISH ≥10 copies) (osimertinib + savolitinib)",why:"Against platinum–pemetrexed, progression-free survival HR was 0.55 (95% CI 0.42–0.72) and final overall survival HR was 0.68 (95% CI 0.50–0.91).",src:"https://pubmed.ncbi.nlm.nih.gov/42929693/",cite:"NEJM 2026",l:P2},
{id:"clarity",left:"CLARITY-Gastric 01",right:"Previously treated advanced gastric, gastro-oesophageal junction or oesophageal adenocarcinoma with CLDN18.2 staining in ≥25% of tumour cells (sonesitatug vedotin)",why:"Against investigator’s choice, median overall survival in the third-line or later population was 10.0 versus 5.0 months (HR 0.47; 95% CI 0.36–0.62); the overall-population progression-free survival endpoint did not meet its significance threshold.",src:"https://www.astrazeneca.com/media-centre/press-releases/2026/sonesitatug-vedotin-reduced-the-risk-of-death-by-42-pct-in-2nd-and-later-line-cldn182-positive-advanced-gastricgej-cancers-in-clarity-gastric01.html",cite:"Sponsor-reported 2026",l:P2},
{id:"harmoni",left:"HARMONi-GI1",right:"First-line advanced biliary tract cancer (ivonescimab + gemcitabine–cisplatin)",why:"In this China-based trial, interim overall survival HR was 0.75 (95% CI 0.61–0.92) and progression-free survival HR was 0.61 (95% CI 0.51–0.72) versus durvalumab plus gemcitabine–cisplatin.",src:"https://akesobio.com/en/media/akeso-news/20261025/",cite:"Sponsor-reported 2026",l:P2},
{id:"healer",left:"HEALER",right:"First-line HER2-positive advanced breast cancer (anbenitamab + albumin-bound docetaxel vs trastuzumab, pertuzumab and docetaxel)",why:"At interim analysis, progression-free survival HR was 0.46 (95% CI 0.37–0.56); estimated progression-free survival at 24 months was 58.5% versus 34.4%.",src:"https://pubmed.ncbi.nlm.nih.gov/42929681/",cite:"NEJM 2026",l:P3},
{id:"optitrop",left:"OptiTROP-Lung06",right:"First-line PD-L1-negative advanced non-squamous NSCLC without targetable alterations (sacituzumab tirumotecan + pembrolizumab)",why:"Against platinum–pemetrexed plus pembrolizumab, median progression-free survival was 15.0 versus 5.7 months (HR 0.49; 95% CI 0.36–0.65); overall survival data were immature.",src:"https://pubmed.ncbi.nlm.nih.gov/42929694/",cite:"NEJM 2026",l:P3}
];
var board=document.getElementById('match-board'),scoreEl=document.getElementById('match-score'),fb=document.getElementById('match-feedback');
var leftOrder=[],rightOrder=[],matched={},wrong=0,pickL=null,pickR=null,busy=false;
function shuffle(a){var b=a.slice(),i,j,t;for(i=b.length-1;i>0;i--){j=Math.floor(Math.random()*(i+1));t=b[i];b[i]=b[j];b[j]=t}return b}
function remaining(){return PAIRS.filter(function(p){return !matched[p.id]}).length}
function upd(){var m=Object.keys(matched).length;scoreEl.textContent='Score: '+m+' matched · '+wrong+' wrong · '+remaining()+' left'+(remaining()===0?' — finished':'')}
function clearPick(){pickL=null;pickR=null;board.querySelectorAll('.match-item.selected').forEach(function(el){el.classList.remove('selected')})}
function setFb(ok,html){fb.className='match-feedback '+(ok?'ok':'bad');fb.innerHTML=html}
function citation(p){return ' <a class="cite" href="'+p.src+'">['+p.cite+']</a>'}
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
setFb(true,'Correct. '+L.why+citation(L)+' <a href="'+L.l+'">Read the trial page</a>');
clearPick();busy=false;upd();
}else{
wrong++;
if(btnL)btnL.classList.add('wrong-flash');
if(btnR)btnR.classList.add('wrong-flash');
setFb(false,'Not a match. '+L.left+' belongs with: '+L.right+'. '+L.why+citation(L)+' <a href="'+L.l+'">Read the trial page</a>');
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
