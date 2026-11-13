---
layout: default
title: "November 2026 oncology quiz: 10 questions on this month's FDA news, EGFR NSCLC after osimertinib and SITC"
description: "Interactive quiz on November 2026 oncology: Rybrevant Faspro in head and neck cancer, pimicotinib for TGCT, the three November FDA target dates, post-osimertinib phase 3 trials and SITC 2026 late-breakers."
permalink: /november-2026-oncology-quiz/
---
<div class="wrap narrow block">
<h1>November 2026 oncology quiz</h1>
<p class="note"><strong>Educational only.</strong> Ten quick questions on the oncology news covered on this site in November 2026. Every answer comes from the linked note and its primary sources. Nothing is saved or sent; your score stays in your browser.</p>
<p id="quiz-score" role="status" aria-live="polite">Score: 0 / 0</p>
<ol id="quiz" class="quiz-list"></ol>
<p><button type="button" id="quiz-reset" class="quiz-btn">Start again</button></p>
<p>Read the full notes: <a href="{{ '/rybrevant-faspro-hnscc-fda-approval/' | relative_url }}">Rybrevant Faspro in HNSCC</a> · <a href="{{ '/pimicotinib-tgct-fda-approval/' | relative_url }}">Pimicotinib in TGCT</a> · <a href="{{ '/oncology-fda-decisions-to-watch-november-2026/' | relative_url }}">November FDA decisions</a> · <a href="{{ '/egfr-nsclc-after-osimertinib-2026-phase-3-options/' | relative_url }}">EGFR NSCLC after osimertinib</a> · <a href="{{ '/sitc-2026-late-breakers/' | relative_url }}">SITC 2026</a> · <a href="{{ '/esmo-2026-quiz/' | relative_url }}">ESMO 2026 quiz</a></p>
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
var R="{{ '/rybrevant-faspro-hnscc-fda-approval/' | relative_url }}",T="{{ '/pimicotinib-tgct-fda-approval/' | relative_url }}",F="{{ '/oncology-fda-decisions-to-watch-november-2026/' | relative_url }}",E="{{ '/egfr-nsclc-after-osimertinib-2026-phase-3-options/' | relative_url }}",S="{{ '/sitc-2026-late-breakers/' | relative_url }}";
var Q=[
{q:"Rybrevant Faspro (subcutaneous amivantamab) got FDA accelerated approval on 5 Nov 2026 in recurrent/metastatic HNSCC. Which group is excluded from the indication?",o:["Patients over 75","HPV-associated oropharyngeal cancer","Oral cavity primaries","Patients who had cetuximab"],a:1,w:"The OrigAMI-4 efficacy population excluded HPV-associated (p16-positive) oropharyngeal cancer, and so does the indication. Patients must have progressed after platinum and an anti-PD-(L)1 antibody.",l:R},
{q:"In OrigAMI-4 Cohort 1 (n=102), what was the overall response rate with amivantamab monotherapy?",o:["18%","27%","42%","61%"],a:2,w:"ORR 42% (95% CI 32–52%) by blinded central review; 56% of responders had a response lasting at least 6 months.",l:R},
{q:"Amivantamab is a bispecific antibody against which two targets?",o:["PD-1 and VEGF","EGFR and MET","HER2 and HER3","EGFR and HER3"],a:1,w:"EGFR and MET. Rash was the commonest adverse reaction (79%) in OrigAMI-4.",l:R},
{q:"Pimicotinib (FDA, 10 Nov 2026) is approved for symptomatic tenosynovial giant cell tumour. In MANEUVER, what was the week-25 ORR versus placebo?",o:["56% vs 3.2%","39% vs 0%","72% vs 12%","31% vs 5%"],a:0,w:"56% (95% CI 42–68) vs 3.2% by blinded central review, RECIST v1.1, with significant gains in range of motion, worst pain and physical function.",l:T},
{q:"Which warning on the pimicotinib label most directly calls for regular blood tests?",o:["QT prolongation","Hepatotoxicity","Tumour lysis syndrome","Hypothyroidism"],a:1,w:"Warnings cover hepatotoxicity, embryo-fetal toxicity and a rise in serum creatinine without an effect on kidney function; baseline and periodic liver tests follow from that.",l:T},
{q:"Ivonescimab (PD-1 × VEGF) plus chemotherapy after a third-generation EGFR TKI has an FDA target date of 14 Nov. What was the primary OS result in HARMONi?",o:["HR 0.58, significant","HR 0.79 (0.62–1.01), not significant","HR 0.95, not significant","OS not yet analysed"],a:1,w:"PFS was significant, but primary OS HR was 0.79 (p=0.057). A later June 2026 cut showed HR 0.76 with only a nominal p-value.",l:F},
{q:"lidERA tested adjuvant giredestrant, an oral SERD, against standard endocrine therapy in ER+/HER2- early breast cancer. What was the 3-year iDFS?",o:["92.4% vs 89.6%","88.0% vs 80.1%","95.1% vs 94.8%","90.2% vs 84.0%"],a:0,w:"92.4% vs 89.6%, HR 0.70 (0.57–0.87); OS immature. FDA target date 30 Nov 2026.",l:F},
{q:"In ALKOVE-1, neladalkib (target date 27 Nov) did best in which subgroup of TKI-pretreated ALK+ NSCLC?",o:["Lorlatinib-pretreated, any mutation","G1202R-mutant disease after a prior TKI","Patients with leptomeningeal disease only","Crizotinib-only pretreated"],a:1,w:"ORR 68% with G1202R after a prior TKI (n=47), 46% in lorlatinib-naive patients and 31% overall (n=253).",l:F},
{q:"Of the four 2026 phase 3 trials after osimertinib (SAFFRON, HERON-Lung01, PANKU-Lung01, HARMONi), which one has shown a statistically significant OS gain so far?",o:["PANKU-Lung01","HERON-Lung01","SAFFRON","HARMONi"],a:2,w:"SAFFRON (osimertinib + savolitinib in MET-overexpressed or amplified tumours): OS HR 0.68 (0.50–0.91). The other three rest on PFS with immature or non-significant OS.",l:E},
{q:"At SITC 2026, why does amsoki-cel (engineered TIL with regulatable membrane-bound IL-15) matter for practice?",o:["It is given as a tablet","No high-dose IL-2 is needed after infusion","It needs no lymphodepletion or tumour harvest","It is already approved in India"],a:1,w:"Removing the IL-2 phase could make TIL far less of an ICU-level commitment. ORR 67% at the recommended dose (n=15), single-arm and small.",l:S}
];
var list=document.getElementById('quiz'),score=document.getElementById('quiz-score'),right=0,done=0;
function render(){list.innerHTML='';right=0;done=0;upd();Q.forEach(function(it){var li=document.createElement('li');var p=document.createElement('p');p.className='quiz-q';p.textContent=it.q;li.appendChild(p);var box=document.createElement('div');box.className='quiz-opts';var why=document.createElement('p');why.className='quiz-why';why.innerHTML='';var t=document.createElement('span');t.textContent=it.w+' ';var a=document.createElement('a');a.href=it.l;a.textContent='Read the source note';why.appendChild(t);why.appendChild(a);
it.o.forEach(function(txt,i){var b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=txt;b.onclick=function(){var bs=box.querySelectorAll('button');bs.forEach(function(x){x.disabled=true});bs[it.a].classList.add('right');if(i===it.a){right++}else{b.classList.add('wrong')}done++;why.classList.add('show');upd()};box.appendChild(b)});li.appendChild(box);li.appendChild(why);list.appendChild(li)})}
function upd(){score.textContent='Score: '+right+' / '+done+(done===Q.length?' — finished':'')}
document.getElementById('quiz-reset').onclick=render;render();
})();
</script>
