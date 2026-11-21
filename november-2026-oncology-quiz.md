---
layout: default
title: "November 2026 oncology quiz: 10 questions on this month's FDA news, EGFR NSCLC after osimertinib and SITC"
description: "Interactive quiz on November 2026 oncology: Rybrevant Faspro in head and neck cancer, pimicotinib for TGCT, November FDA decisions, post-osimertinib phase 3 trials and SITC 2026 late-breakers."
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
{q:"The FDA indication for subcutaneous amivantamab and hyaluronidase in recurrent or metastatic head and neck squamous cell carcinoma excludes which group?",o:["Patients over 75","HPV-associated oropharyngeal cancer","Oral cavity primaries","Patients previously treated with cetuximab"],a:1,w:"HPV-associated oropharyngeal squamous cell carcinoma is excluded. The indication requires progression on or after platinum chemotherapy and an anti-PD-1 or anti-PD-L1 antibody.",l:R,c:[["https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/761433s002lbl.pdf","FDA 2026"]]},
{q:"In OrigAMI-4 cohort 1 (n=102), what was the confirmed objective response rate with subcutaneous amivantamab?",o:["18%","27%","42%","61%"],a:2,w:"Blinded independent central review found a 42% response rate (95% CI 32–52%); 56% of responders had a response lasting at least 6 months.",l:R,c:[["https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/761433s002lbl.pdf","FDA 2026"]]},
{q:"Which targets does amivantamab bind?",o:["PD-1 and VEGF","EGFR and MET","HER2 and HER3","EGFR and HER3"],a:1,w:"Amivantamab binds EGFR and MET. In OrigAMI-4, rash occurred in 79% of patients.",l:R,c:[["https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/761433s002lbl.pdf","FDA 2026"]]},
{q:"In MANEUVER, what was the week-25 response rate with pimicotinib versus placebo in symptomatic tenosynovial giant cell tumour?",o:["56% vs 3.2%","39% vs 0%","72% vs 12%","31% vs 5%"],a:0,w:"By blinded central review using RECIST v1.1, response was 56% (95% CI 42–68%) versus 3.2%. The trial enrolled patients for whom surgery could cause dysfunction or serious complications.",l:T,c:[["https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220414s000lbl.pdf","FDA 2026"]]},
{q:"Which pimicotinib warning requires scheduled blood monitoring?",o:["QT prolongation","Hepatotoxicity","Tumour lysis syndrome","Hypothyroidism"],a:1,w:"Check liver tests before treatment, monthly for the first 3 months, every 3 months for the first year, and thereafter as clinically indicated. The label also warns about embryo-fetal toxicity and creatinine increases without an effect on renal function.",l:T,c:[["https://www.accessdata.fda.gov/drugsatfda_docs/label/2026/220414s000lbl.pdf","FDA 2026"]]},
{q:"In HARMONi, what was the primary overall survival (OS) result for ivonescimab plus chemotherapy after a third-generation EGFR inhibitor?",o:["HR 0.58, statistically significant","HR 0.79 (95% CI 0.62–1.01), not statistically significant","HR 0.95, not statistically significant","OS was not analysed"],a:1,w:"The primary OS analysis did not meet statistical significance (p=0.057). A later sponsor-reported analysis gave HR 0.76 with a nominal p-value. The sponsor reported an FDA complete response letter on 15 November 2026.",l:F,c:[["https://www.sciencedirect.com/science/article/pii/S1470204526002822","Lancet Oncol 2026"],["https://docs.publicnow.com/viewDoc?filename=70118%5CEXT%5C9BB75B7D535F7DF5E2A1C841F1B307B22464E0EC_4F9BAC742699721FB4A9BC8405ADAA6299BE56D5.PDF","Sponsor report 2026"],["https://www.sec.gov/Archives/edgar/data/1599298/000159929826000092/ivonescimabcrlscenariopr.htm","Sponsor filing 2026"]]},
{q:"In lidERA, what were the 3-year invasive disease-free survival rates with adjuvant giredestrant versus standard endocrine therapy for ER-positive, HER2-negative early breast cancer?",o:["92.4% vs 89.6%","88.0% vs 80.1%","95.1% vs 94.8%","90.2% vs 84.0%"],a:0,w:"The rates were 92.4% versus 89.6% (HR 0.70; 95% CI 0.57–0.87). Overall survival data were immature.",l:F,c:[["https://aacrjournals.org/clincancerres/article/32/4_Supplement/GS1-10/772276/Abstract-GS1-10-Giredestrant-vs-standard-of-care","AACR 2026"]]},
{q:"In the ALKOVE-1 analysis, which TKI-pretreated subgroup had the highest reported response rate to neladalkib among these choices?",o:["Lorlatinib-pretreated patients regardless of mutation","Patients with a G1202R mutation after a prior ALK TKI","Patients with leptomeningeal disease only","Patients treated only with crizotinib"],a:1,w:"Response was 68% in the G1202R subgroup (32/47), 46% in the lorlatinib-naive group (29/63), and 31% across all ALK TKI-pretreated patients (79/253). These are non-randomised subgroup results.",l:F,c:[["https://ascopubs.org/doi/10.1200/JCO.2026.44.16_suppl.8503","ASCO 2026"]]},
{q:"Among SAFFRON, HERON-Lung01, PANKU-Lung01 and HARMONi after osimertinib, which trial has reported a statistically significant overall survival benefit?",o:["PANKU-Lung01","HERON-Lung01","SAFFRON","HARMONi"],a:2,w:"In SAFFRON, osimertinib plus savolitinib improved final OS versus platinum–pemetrexed in MET-overexpressed or amplified disease (HR 0.68; 95% CI 0.50–0.91). The other trials have immature or non-significant OS results.",l:E,c:[["https://pubmed.ncbi.nlm.nih.gov/42929693/","NEJM 2026"],["https://www.sciencedirect.com/science/article/pii/S0140673626018994","Lancet 2026"],["https://pubmed.ncbi.nlm.nih.gov/42933461/","Lancet 2026"],["https://www.sciencedirect.com/science/article/pii/S1470204526002822","Lancet Oncol 2026"]]},
{q:"What distinguishes the investigational amsoki-cel regimen studied in checkpoint inhibitor-resistant melanoma?",o:["It is given as a tablet","It omits post-infusion high-dose IL-2","It requires neither lymphodepletion nor tumour tissue","It is already approved in India"],a:1,w:"The engineered TIL regimen omits post-infusion IL-2, but still requires tumour tissue, lymphodepletion and monitoring. At the recommended dose, 10 of 15 patients responded (67%); this small single-arm result does not establish comparative benefit.",l:S,c:[["https://www.nature.com/articles/s41591-026-04743-6","Nature Medicine 2026"]]}
];
var list=document.getElementById('quiz'),score=document.getElementById('quiz-score'),right=0,done=0;
function render(){list.innerHTML='';right=0;done=0;upd();Q.forEach(function(it){var li=document.createElement('li');var p=document.createElement('p');p.className='quiz-q';p.textContent=it.q;li.appendChild(p);var box=document.createElement('div');box.className='quiz-opts';var why=document.createElement('p');why.className='quiz-why';why.innerHTML='';var t=document.createElement('span');t.textContent=it.w+' ';var a=document.createElement('a');a.href=it.l;a.textContent='Read the source note';why.appendChild(t);it.c.forEach(function(ref){var cite=document.createElement('a');cite.className='cite';cite.href=ref[0];cite.textContent='['+ref[1]+']';why.appendChild(cite);why.appendChild(document.createTextNode(' '))});why.appendChild(a);
it.o.forEach(function(txt,i){var b=document.createElement('button');b.type='button';b.className='quiz-opt';b.textContent=txt;b.onclick=function(){var bs=box.querySelectorAll('button');bs.forEach(function(x){x.disabled=true});bs[it.a].classList.add('right');if(i===it.a){right++}else{b.classList.add('wrong')}done++;why.classList.add('show');upd()};box.appendChild(b)});li.appendChild(box);li.appendChild(why);list.appendChild(li)})}
function upd(){score.textContent='Score: '+right+' / '+done+(done===Q.length?' — finished':'')}
document.getElementById('quiz-reset').onclick=render;render();
})();
</script>
