---
layout: default
title: "ESMO 2026 trial quiz: 10 questions on the Presidential Symposium and NEJM trials"
description: "Interactive ESMO 2026 quiz: test yourself on INTerpath-001, VOLGA, DeLLphi-305, DASL-HiCaP, Krascendo 1, SAFFRON, CLARITY-Gastric 01, HARMONi-GI1, HEALER and OptiTROP-Lung06."
permalink: /esmo-2026-quiz/
---
<div class="wrap narrow block">
<h1>ESMO 2026 trial quiz</h1>
<p class="note"><strong>Educational only.</strong> Ten quick questions on the ESMO 2026 (Madrid) practice-changing trials covered on this site. Every answer comes from the linked trial page and its primary sources. Nothing is saved or sent; your score stays in your browser.</p>
<p id="quiz-score" role="status" aria-live="polite">Score: 0 / 0</p>
<ol id="quiz" class="quiz-list"></ol>
<p><button type="button" id="quiz-reset" class="quiz-btn">Start again</button></p>
<p>Read the full summaries: <a href="{{ '/esmo-2026-presidential-symposium-1/' | relative_url }}">Presidential Symposium I</a> · <a href="{{ '/esmo-2026-presidential-symposium-2/' | relative_url }}">Presidential Symposium II</a> · <a href="{{ '/esmo-2026-china-phase-3-healer-optitrop-lung06/' | relative_url }}">HEALER and OptiTROP-Lung06</a> · <a href="{{ '/esmo-2026/' | relative_url }}">ESMO 2026 hub</a></p>
<noscript><p>Enable JavaScript to play the quiz.</p></noscript>
</div>
<style>
.quiz-list{padding-left:1.2em}
.quiz-list li{margin:0 0 1.4em}
.quiz-q{font-weight:600;margin:0 0 .5em}
.quiz-opts{display:flex;flex-direction:column;gap:.4em}
.quiz-opt,.quiz-btn{text-align:left;padding:.55em .8em;border:1px solid #c9ced6;border-radius:8px;background:#fff;cursor:pointer;font:inherit;color:inherit}
.quiz-opt:hover:not(:disabled){border-color:#4a6fa5}
.quiz-opt.right{background:#e3f4e8;border-color:#2e8b57}
.quiz-opt.wrong{background:#fbe6e6;border-color:#c0392b}
.quiz-opt:disabled{cursor:default}
.quiz-why{margin:.5em 0 0;font-size:.95em;display:none}
.quiz-why.show{display:block}
#quiz-score{font-weight:600}
</style>
<script>
(function(){
var P1="{{ '/esmo-2026-presidential-symposium-1/' | relative_url }}",P2="{{ '/esmo-2026-presidential-symposium-2/' | relative_url }}",P3="{{ '/esmo-2026-china-phase-3-healer-optitrop-lung06/' | relative_url }}";
var Q=[
{q:"INTerpath-001 tested intismeran autogene (individualised mRNA neoantigen therapy) plus pembrolizumab in which setting?",o:["Adjuvant, resected stage IIB–IV melanoma","First-line metastatic NSCLC","Muscle-invasive bladder cancer","Extensive-stage SCLC maintenance"],a:0,w:"Adjuvant resected stage IIB–IV melanoma; RFS HR 0.58 (95% CI 0.45–0.75), OS immature.",l:P1},
{q:"In INTerpath-001, when did the RFS curves start to separate?",o:["From the first month","Only after the 6-month immunisation course","Only after 3 years","They never separated"],a:1,w:"No separation in the first 6 months (HR 0.99); after the course, piecewise HR 0.42.",l:P1},
{q:"VOLGA (cisplatin-ineligible or cisplatin-refusing MIBC): what was the EFS HR for durvalumab + enfortumab vedotin vs control?",o:["0.88","0.77","0.51","0.34"],a:2,w:"EFS HR 0.51 (0.38–0.67) and OS HR 0.58; the triplet with tremelimumab added toxicity without a significant OS gain.",l:P1},
{q:"DeLLphi-305 added tarlatamab to durvalumab as first-line maintenance in ES-SCLC. What was the OS HR?",o:["0.42","0.62","0.80","1.08"],a:0,w:"Median OS 21.1 vs 12.7 months; HR 0.42 (0.32–0.54).",l:P1},
{q:"DASL-HiCaP (darolutamide with RT + ADT, very high-risk localised prostate cancer) met MFS. What about OS?",o:["Significant, HR 0.42","Not significant, HR 0.88","Significant, HR 0.58","Not reported"],a:1,w:"MFS HR 0.42; OS HR 0.88 (0.49–1.59), not significant, with 4-year OS 97% vs 95%.",l:P1},
{q:"Krascendo 1 compared divarasib with sotorasib or adagrasib in pretreated KRAS G12C NSCLC. Median PFS?",o:["7.6 vs 5.4 months","9.8 vs 5.7 months","15.0 vs 5.7 months","4.2 vs 3.8 months"],a:1,w:"9.8 vs 5.7 months, HR 0.58; first-interim OS 17.7 vs 12.0 months, HR 0.56.",l:P2},
{q:"SAFFRON: osimertinib + savolitinib beat platinum–pemetrexed in which population?",o:["Treatment-naive EGFR-mutant NSCLC","MET-altered NSCLC after progression on osimertinib","KRAS G12C NSCLC","PD-L1 <1% non-squamous NSCLC"],a:1,w:"Post-osimertinib, MET-overexpressed or amplified; PFS HR 0.55, final OS HR 0.68.",l:P2},
{q:"CLARITY-Gastric 01 (sonesitatug vedotin, CLDN18.2+): where was the OS benefit concentrated?",o:["Second-line GEJ/oesophageal tumours","Third-line and later gastric primaries","All subgroups equally","CLDN18.2-negative tumours"],a:1,w:"3L+ OS 10.0 vs 5.0 months (HR 0.47); 2L subgroup HR 0.88 and GEJ/oesophageal HR 1.08. ITT PFS was not met.",l:P2},
{q:"HARMONi-GI1 compared ivonescimab + gemcitabine-cisplatin with durvalumab + gemcitabine-cisplatin in first-line biliary cancer. Which caveat matters when reading the OS gain?",o:["Crossover to ivonescimab was mandatory","Subsequent therapy was less frequent in the ivonescimab arm (31.8% vs 45.9%)","The trial had no control arm","OS was the only endpoint reported"],a:1,w:"OS HR 0.75 and PFS HR 0.61, but fewer patients in the ivonescimab arm received later therapy.",l:P2},
{q:"OptiTROP-Lung06 tested sacituzumab tirumotecan + pembrolizumab in PD-L1 <1% non-squamous NSCLC. Median PFS vs chemo + pembrolizumab?",o:["15.0 vs 5.7 months","8.4 vs 5.8 months","24.9 vs 16.3 months","9.8 vs 5.7 months"],a:0,w:"15.0 vs 5.7 months, HR 0.49 (0.36–0.65); OS immature. HEALER (anbenitamab + albumin-bound docetaxel vs THP, HER2+ breast) had PFS HR 0.46.",l:P3}
];
var list=document.getElementById('quiz'),score=document.getElementById('quiz-score'),right=0,done=0;
function render(){list.innerHTML='';right=0;done=0;upd();Q.forEach(function(it){var li=document.createElement('li');var p=document.createElement('p');p.className='quiz-q';p.textContent=it.q;li.appendChild(p);var box=document.createElement('div');box.className='quiz-opts';var why=document.createElement('p');why.className='quiz-why';why.innerHTML='';var t=document.createElement('span');t.textContent=it.w+' ';var a=document.createElement('a');a.href=it.l;a.textContent='Read the trial page';why.appendChild(t);why.appendChild(a);
it.o.forEach(function(txt,i){var b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=txt;b.onclick=function(){var bs=box.querySelectorAll('button');bs.forEach(function(x){x.disabled=true});bs[it.a].classList.add('right');if(i===it.a){right++}else{b.classList.add('wrong')}done++;why.classList.add('show');upd()};box.appendChild(b)});li.appendChild(box);li.appendChild(why);list.appendChild(li)})}
function upd(){score.textContent='Score: '+right+' / '+done+(done===Q.length?' — finished':'')}
document.getElementById('quiz-reset').onclick=render;render();
})();
</script>
