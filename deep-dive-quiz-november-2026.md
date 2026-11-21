---
layout: default
title: "Deep-dive quiz: eight questions on November 2026's trial deep dives"
description: "Interactive questions on November trial deep dives and a recent FDA approval."
permalink: /deep-dive-quiz-november-2026/
---
<div class="wrap narrow block">
<h1>Deep-dive quiz: eight questions on November 2026's trial deep dives</h1>
<p class="note"><strong>Educational only.</strong> Test your reading of seven trial reports and one FDA decision. Each answer links to the site page and a primary source. Your score stays in this browser; it is not saved or sent.</p>
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
{q:"In RASolute 302, which patients received daraxonrasib or chemotherapy?",o:["Previously treated metastatic pancreatic cancer", "Resected colon cancer receiving adjuvant treatment", "Untreated localised prostate cancer", "Early breast cancer"],a:0,w:"RASolute 302 compared daraxonrasib with chemotherapy after prior treatment for metastatic pancreatic cancer.",l:"{{ '/daraxonrasib-pancreatic-cancer-rasolute-302/' | relative_url }}",s:"https://www.nejm.org/doi/10.1056/NEJMoa2605555",c:"[NEJM 2026]"},
{q:"What happened to the primary endpoint in NHS-Galleri?",o:["Stage III–IV cancer incidence fell significantly", "No significant reduction in stage III–IV cancer incidence", "Cancer mortality fell significantly", "Established screening was replaced"],a:1,w:"The trial did not show a significant reduction in stage III–IV incidence across the prespecified cancers; a mortality benefit remains unproven.",l:"{{ '/nhs-galleri-multi-cancer-early-detection-trial/' | relative_url }}",s:"https://ascopubs.org/doi/10.1200/JCO.2026.44.17_suppl.LBA100",c:"[JCO 2026]"},
{q:"Which drug was combined with relacorilant in ROSELLA?",o:["Enzalutamide", "Everolimus", "Nab-paclitaxel", "Oxaliplatin"],a:2,w:"ROSELLA compared relacorilant plus nab-paclitaxel with nab-paclitaxel alone in platinum-resistant ovarian, fallopian tube or primary peritoneal cancer.",l:"{{ '/relacorilant-platinum-resistant-ovarian-cancer-rosella/' | relative_url }}",s:"https://pubmed.ncbi.nlm.nih.gov/40473448/",c:"[Lancet Oncol 2025]"},
{q:"Which tumour biology was required for TALAPRO-3?",o:["ESR1 mutation", "ALK fusion", "Mismatch repair deficiency alone", "Homologous recombination repair (HRR) gene alteration"],a:3,w:"TALAPRO-3 tested talazoparib plus enzalutamide in metastatic hormone-sensitive prostate cancer with an eligible HRR gene alteration.",l:"{{ '/talazoparib-enzalutamide-hrr-mhspc-talapro-3/' | relative_url }}",s:"https://www.nejm.org/doi/10.1056/NEJMoa2604126",c:"[NEJM 2026]"},
{q:"What finding prompted randomisation to an endocrine switch in SERENA-6?",o:["A new ALK fusion", "An ESR1 mutation in circulating tumour DNA before radiographic progression", "Surgical recurrence", "A positive PSMA scan"],a:1,w:"After an ESR1 mutation emerged without radiographic progression, the trial compared switching the aromatase inhibitor to camizestrant with continuing it; both groups continued CDK4/6 inhibition.",l:"{{ '/camizestrant-esr1-ctdna-switch-serena-6/' | relative_url }}",s:"https://pubmed.ncbi.nlm.nih.gov/42442380/",c:"[Lancet Oncol 2026]"},
{q:"What was known about overall survival in the published ATOMIC analysis?",o:["A definitive survival benefit was established", "A survival disadvantage was established", "The survival data were immature", "Overall survival was the only endpoint"],a:2,w:"In resected stage III mismatch repair-deficient colon cancer, disease-free survival improved with atezolizumab plus mFOLFOX6; overall survival data were immature.",l:"{{ '/atezolizumab-adjuvant-dmmr-colon-cancer-atomic/' | relative_url }}",s:"https://www.nejm.org/doi/10.1056/NEJMoa2507874",c:"[NEJM 2026]"},
{q:"Which imaging finding was required for PSMAddition eligibility?",o:["ESR1 mutation alone", "A negative PSMA PET scan", "Resected colon cancer", "At least one PSMA-positive metastasis on centrally reviewed PSMA PET"],a:3,w:"Eligibility required metastatic prostate cancer on conventional imaging and at least one PSMA-positive metastasis on centrally reviewed PSMA-11 PET.",l:"{{ '/lutetium-psma-hormone-sensitive-prostate-cancer-psmaddition/' | relative_url }}",s:"https://pubmed.ncbi.nlm.nih.gov/42561994/",c:"[Lancet 2026]"},
{q:"What type of FDA approval did neladalkib receive for eligible adults with previously treated ALK-positive advanced NSCLC?",o:["Adjuvant approval", "Prevention approval", "Accelerated approval", "Diagnostic approval"],a:2,w:"The FDA granted accelerated approval for specified previously treated patients, based on response rate and duration of response in ALKOVE-1.",l:"{{ '/oncology-fda-decisions-to-watch-november-2026/' | relative_url }}",s:"https://www.fda.gov/drugs/cancer-approvals/fda-grants-accelerated-approval-neladalkib-previously-treated-locally-advanced-or-metastatic-alk",c:"[FDA 2026]"}
];
var list=document.getElementById('quiz'),score=document.getElementById('quiz-score'),right=0,done=0;
function render(){list.innerHTML='';right=0;done=0;upd();Q.forEach(function(it){var li=document.createElement('li');var p=document.createElement('p');p.className='quiz-q';p.textContent=it.q;li.appendChild(p);var box=document.createElement('div');box.className='quiz-opts';var why=document.createElement('p');why.className='quiz-why';why.innerHTML='';var t=document.createElement('span');t.textContent=it.w+' ';var a=document.createElement('a');a.href=it.l;a.textContent='Read the trial page';why.appendChild(t);var cite=document.createElement('a');cite.className='cite';cite.href=it.s;cite.textContent=it.c;why.appendChild(cite);why.appendChild(document.createTextNode(' '));why.appendChild(a);
it.o.forEach(function(txt,i){var b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=txt;b.onclick=function(){var bs=box.querySelectorAll('button');bs.forEach(function(x){x.disabled=true});bs[it.a].classList.add('right');if(i===it.a){right++}else{b.classList.add('wrong')}done++;why.classList.add('show');upd()};box.appendChild(b)});li.appendChild(box);li.appendChild(why);list.appendChild(li)})}
function upd(){score.textContent='Score: '+right+' / '+done+(done===Q.length?' — finished':'')}
document.getElementById('quiz-reset').onclick=render;render();
})();
</script>
