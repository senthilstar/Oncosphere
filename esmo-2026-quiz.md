---
layout: default
title: "ESMO 2026 trial quiz: 10 questions on the Presidential Symposium and NEJM trials"
description: "Interactive ESMO 2026 quiz: test yourself on INTerpath-001, VOLGA, DeLLphi-305, DASL-HiCaP, Krascendo 1, SAFFRON, CLARITY-Gastric 01, HARMONi-GI1, HEALER and OptiTROP-Lung06."
permalink: /esmo-2026-quiz/
---
<div class="wrap narrow block">
<h1>ESMO 2026 trial quiz</h1>
<p class="note"><strong>Educational only.</strong> Ten questions on trials presented at ESMO 2026 in Madrid. Each answer links to its source and the corresponding trial summary. Nothing is saved or sent; your score stays in your browser.</p>
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
{q:"INTerpath-001 studied adjuvant intismeran autogene plus pembrolizumab after complete resection of which cancer?",o:["Stage IIB–IV cutaneous melanoma","Metastatic NSCLC","Muscle-invasive bladder cancer","Extensive-stage SCLC"],a:0,w:"In resected stage IIB–IV cutaneous melanoma, recurrence-free survival (RFS) HR was 0.58 (95% CI 0.45–0.75); overall survival (OS) was immature.",src:"https://doi.org/10.1056/NEJMoa2609762",cite:"NEJM 2026",l:P1},
{q:"In the prespecified INTerpath-001 piecewise analysis, what were the RFS hazard ratios before and after 6 months?",o:["0.42 before and 0.99 after","0.99 before and 0.42 after","0.58 in both periods","1.08 before and 0.88 after"],a:1,w:"The RFS HR was 0.99 before 6 months and 0.42 thereafter. These time-period estimates do not establish an exact onset of effect.",src:"https://doi.org/10.1056/NEJMoa2609762",cite:"NEJM 2026",l:P1},
{q:"In VOLGA, what was the event-free survival (EFS) HR for perioperative durvalumab with neoadjuvant enfortumab vedotin versus cystectomy alone?",o:["0.88","0.77","0.51","0.34"],a:2,w:"Among patients ineligible for or declining cisplatin, EFS HR was 0.51 (95% CI 0.38–0.67); OS HR was 0.58 at interim analysis.",src:"https://pubmed.ncbi.nlm.nih.gov/42929692/",cite:"NEJM 2026",l:P1},
{q:"In DeLLphi-305, what was the OS HR for maintenance tarlatamab plus durvalumab versus durvalumab alone after induction chemoimmunotherapy for extensive-stage SCLC?",o:["0.42","0.62","0.80","1.08"],a:0,w:"Among patients without progression after induction, median OS from maintenance randomisation was 21.1 versus 12.7 months; HR 0.42 (95% CI 0.32–0.54).",src:"https://pubmed.ncbi.nlm.nih.gov/42929702/",cite:"NEJM 2026",l:P1},
{q:"DASL-HiCaP added darolutamide to radiotherapy and androgen deprivation for very high-risk localised or recurrent prostate cancer. What was the interim OS result?",o:["Significant, HR 0.42","Not significant, HR 0.88","Significant, HR 0.58","Not reported"],a:1,w:"Conventional-imaging metastasis-free survival HR was 0.42; OS HR was 0.88 (95% CI 0.49–1.59), with follow-up ongoing.",src:"https://prostate.uroonco.uroweb.org/publication/darolutamide-with-androgen-deprivation-therapy-and-definitive-or-salvage-locoregional-radiation-therapyfor-localised-very-high-risk-prostate-cancer-interim-analysis-of-an-international-placebo-cont/",cite:"ESMO 2026 abstract",l:P1},
{q:"Krascendo 1 compared divarasib with sotorasib or adagrasib in previously treated KRAS G12C-mutant advanced NSCLC. What was median progression-free survival (PFS)?",o:["7.6 versus 5.4 months","9.8 versus 5.7 months","15.0 versus 5.7 months","4.2 versus 3.8 months"],a:1,w:"Median PFS was 9.8 versus 5.7 months (HR 0.58); at the first interim analysis, median OS was 17.7 versus 12.0 months (HR 0.56).",src:"https://doi.org/10.1056/NEJMoa2605703",cite:"NEJM 2026",l:P2},
{q:"SAFFRON compared osimertinib plus savolitinib with platinum–pemetrexed in which population?",o:["Previously untreated EGFR-mutant NSCLC","EGFR-mutant NSCLC with MET overexpression or amplification after progression on osimertinib","KRAS G12C-mutant NSCLC","PD-L1-negative non-squamous NSCLC"],a:1,w:"Eligibility required MET IHC 3+ in at least 90% of tumour cells or at least 10 MET copies by FISH. PFS HR was 0.55 and final OS HR was 0.68.",src:"https://doi.org/10.1056/NEJMoa2611335",cite:"NEJM 2026",l:P2},
{q:"In CLARITY-Gastric 01, which prespecified OS endpoint was met at interim analysis?",o:["OS in second-line GEJ tumours alone","OS in the third-line-or-later population","OS in CLDN18.2-negative tumours","OS in untreated patients"],a:1,w:"In the third-line-or-later population, median OS was 10.0 versus 5.0 months (HR 0.47). The overall-population PFS endpoint did not meet its prespecified significance threshold. Site and treatment-line subgroup estimates are exploratory.",src:"https://www.astrazeneca.com/media-centre/press-releases/2026/sonesitatug-vedotin-reduced-the-risk-of-death-by-42-pct-in-2nd-and-later-line-cldn182-positive-advanced-gastricgej-cancers-in-clarity-gastric01.html",cite:"AstraZeneca 2026, sponsor-reported",l:P2},
{q:"HARMONi-GI1 compared ivonescimab with durvalumab, each with gemcitabine–cisplatin, for untreated advanced biliary cancer. Where was the trial conducted?",o:["India alone","China","Europe alone","North America alone"],a:1,w:"The China-based trial reported interim OS HR 0.75 and investigator-assessed PFS HR 0.61. Follow-up and evidence in other populations are needed.",src:"https://akesobio.com/en/media/akeso-news/20261025/",cite:"Akeso 2026, sponsor-reported",l:P2},
{q:"OptiTROP-Lung06 tested first-line sacituzumab tirumotecan plus pembrolizumab in PD-L1-negative advanced non-squamous NSCLC. What was median PFS versus platinum–pemetrexed plus pembrolizumab?",o:["15.0 versus 5.7 months","8.4 versus 5.8 months","24.9 versus 16.3 months","9.8 versus 5.7 months"],a:0,w:"Median PFS was 15.0 versus 5.7 months (HR 0.49; 95% CI 0.36–0.65); OS was immature. The trial excluded tumours with targetable EGFR or ALK alterations.",src:"https://pubmed.ncbi.nlm.nih.gov/42929694/",cite:"NEJM 2026",l:P3}
];
var list=document.getElementById('quiz'),score=document.getElementById('quiz-score'),right=0,done=0;
function render(){list.innerHTML='';right=0;done=0;upd();Q.forEach(function(it){var li=document.createElement('li');var p=document.createElement('p');p.className='quiz-q';p.textContent=it.q;li.appendChild(p);var box=document.createElement('div');box.className='quiz-opts';var why=document.createElement('p');why.className='quiz-why';why.innerHTML='';var t=document.createElement('span');t.textContent=it.w+' ';var a=document.createElement('a');a.href=it.l;a.textContent='Read the trial page';why.appendChild(t);var c=document.createElement('a');c.className='cite';c.href=it.src;c.textContent='['+it.cite+']';why.appendChild(c);why.appendChild(document.createTextNode(' '));why.appendChild(a);
it.o.forEach(function(txt,i){var b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=txt;b.onclick=function(){var bs=box.querySelectorAll('button');bs.forEach(function(x){x.disabled=true});bs[it.a].classList.add('right');if(i===it.a){right++}else{b.classList.add('wrong')}done++;why.classList.add('show');upd()};box.appendChild(b)});li.appendChild(box);li.appendChild(why);list.appendChild(li)})}
function upd(){score.textContent='Score: '+right+' / '+done+(done===Q.length?' — finished':'')}
document.getElementById('quiz-reset').onclick=render;render();
})();
</script>
