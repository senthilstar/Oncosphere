---
layout: default
title: "Deep-dive quiz: eight questions on November 2026's trial deep dives"
description: "Interactive questions on November trial deep dives and a recent FDA approval."
permalink: /deep-dive-quiz-november-2026/
---
<div class="wrap narrow block">
<h1>Deep-dive quiz: eight questions on November 2026's trial deep dives</h1>
<p class="note"><strong>Educational only.</strong> Eight quick questions on trial deep dives and an FDA approval covered on this site. Every answer comes from the linked trial page and its primary sources. Nothing is saved or sent; your score stays in your browser.</p>
<p id="quiz-score" role="status" aria-live="polite">Score: 0 / 0</p>
<ol id="quiz" class="quiz-list"></ol>
<p><button type="button" id="quiz-reset" class="quiz-btn">Start again</button></p>
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
var Q=[
{q:"RASolute 302 studied daraxonrasib in which setting?",o:["Previously treated metastatic pancreatic cancer","Adjuvant colon cancer","Untreated localised prostate cancer","Early breast cancer"],a:0,w:"The comparison enrolled patients with previously treated metastatic pancreatic cancer.",l:"/daraxonrasib-pancreatic-cancer-rasolute-302/"},
{q:"What was the primary endpoint result in NHS-Galleri?",o:["A significant reduction in stage III–IV cancer","No significant reduction in stage III–IV cancer","A demonstrated mortality benefit","A replacement for established screening"],a:1,w:"The primary stage III–IV endpoint was not met; mortality benefit remains unestablished.",l:"/nhs-galleri-multi-cancer-early-detection-trial/"},
{q:"Which treatment was paired with relacorilant in ROSELLA?",o:["Enzalutamide","Everolimus","Nab-paclitaxel","Oxaliplatin"],a:2,w:"ROSELLA studied relacorilant with nab-paclitaxel in platinum-resistant ovarian cancer.",l:"/relacorilant-platinum-resistant-ovarian-cancer-rosella/"},
{q:"TALAPRO-3 selected patients using which biology?",o:["ESR1 mutation","ALK fusion","Mismatch repair deficiency","HRR mutation"],a:3,w:"TALAPRO-3 studied talazoparib plus enzalutamide in HRR-mutated metastatic hormone-sensitive prostate cancer.",l:"/talazoparib-enzalutamide-hrr-mhspc-talapro-3/"},
{q:"What triggered the endocrine switch in SERENA-6?",o:["A new ALK fusion","An ESR1 mutation detected in circulating tumour DNA before radiographic progression","Surgical recurrence","A positive PSMA scan"],a:1,w:"The trial tested a switch at molecular progression while continuing CDK4/6 inhibition.",l:"/camizestrant-esr1-ctdna-switch-serena-6/"},
{q:"What did ATOMIC establish about overall survival at its reported analysis?",o:["A definitive survival benefit","A survival disadvantage","It remained immature","Survival was its only endpoint"],a:2,w:"Disease-free survival improved, while overall survival remained immature.",l:"/atezolizumab-adjuvant-dmmr-colon-cancer-atomic/"},
{q:"How were patients selected for PSMAddition?",o:["ESR1 mutation alone","A negative PSMA PET","Resected colon cancer","PSMA-positive metastatic disease on PSMA PET"],a:3,w:"Central PSMA-11 PET review required at least one PSMA-positive metastasis.",l:"/lutetium-psma-hormone-sensitive-prostate-cancer-psmaddition/"},
{q:"What type of FDA approval did neladalkib receive for eligible previously treated ALK-positive advanced NSCLC?",o:["Adjuvant approval","Prevention approval","Accelerated approval","Diagnostic approval"],a:2,w:"The FDA granted accelerated approval based on ALKOVE-1 cohorts.",l:"/oncology-fda-decisions-to-watch-november-2026/"}
];
var list=document.getElementById('quiz'),score=document.getElementById('quiz-score'),right=0,done=0;
function render(){list.innerHTML='';right=0;done=0;upd();Q.forEach(function(it){var li=document.createElement('li');var p=document.createElement('p');p.className='quiz-q';p.textContent=it.q;li.appendChild(p);var box=document.createElement('div');box.className='quiz-opts';var why=document.createElement('p');why.className='quiz-why';why.innerHTML='';var t=document.createElement('span');t.textContent=it.w+' ';var a=document.createElement('a');a.href=it.l;a.textContent='Read the trial page';why.appendChild(t);why.appendChild(a);
it.o.forEach(function(txt,i){var b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=txt;b.onclick=function(){var bs=box.querySelectorAll('button');bs.forEach(function(x){x.disabled=true});bs[it.a].classList.add('right');if(i===it.a){right++}else{b.classList.add('wrong')}done++;why.classList.add('show');upd()};box.appendChild(b)});li.appendChild(box);li.appendChild(why);list.appendChild(li)})}
function upd(){score.textContent='Score: '+right+' / '+done+(done===Q.length?' — finished':'')}
document.getElementById('quiz-reset').onclick=render;render();
})();
</script>
