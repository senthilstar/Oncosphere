---
layout: post
title: "First-line treatment principles: Metastatic hormone-sensitive prostate cancer"
display_date: 2026-11-22
updated: 2026-11-22
category: "First-line principles"
audience: "clinicians"
cover: "general"
permalink: "/first-line/mhspc-doublet-vs-triplet-therapy/"
description: "Intensify metastatic hormone-sensitive prostate cancer by CHAARTED volume, presentation timing and chemotherapy fitness — triplet or ARPI doublet, never ADT alone."
summary: "Intensify metastatic hormone-sensitive prostate cancer by CHAARTED volume, presentation timing and chemotherapy fitness — triplet or ARPI doublet, never ADT alone."
tldr: "ADT alone is obsolete. Synchronous high-volume, chemo-fit disease gets triplet therapy (ADT + docetaxel + darolutamide or abiraterone); low-volume or chemo-unfit disease gets an ARPI doublet, with prostate radiotherapy added for low-volume de novo disease."
sources:
  - title: "ARASENS (NCT02799602)"
    url: "https://clinicaltrials.gov/study/NCT02799602"
  - title: "PEACE-1 (NCT01957436)"
    url: "https://clinicaltrials.gov/study/NCT01957436"
  - title: "ARANOTE (NCT04736199)"
    url: "https://clinicaltrials.gov/study/NCT04736199"
  - title: "TITAN (NCT02489318)"
    url: "https://clinicaltrials.gov/study/NCT02489318"
  - title: "ARCHES (NCT02677896)"
    url: "https://clinicaltrials.gov/study/NCT02677896"
  - title: "STAMPEDE (NCT00268476)"
    url: "https://clinicaltrials.gov/study/NCT00268476"
  - title: "ESMO Prostate Cancer Guidelines"
    url: "https://www.esmo.org/guidelines"
---
## Clinical Synthesis & Risk Stratification

ADT monotherapy is obsolete for nearly all mHSPC patients. Treatment intensity is dictated by CHAARTED disease volume (High Volume = visceral metastases OR ≥4 bone lesions with ≥1 outside the vertebral bodies/pelvis), presentation timing (synchronous/de novo vs. metachronous/recurrent), and chemotherapy fitness.

- Synchronous High-Volume + Chemo-Fit: Triplet therapy is the gold standard — ADT + Docetaxel (6 cycles) + Darolutamide (ARASENS) or ADT + Docetaxel + Abiraterone/Prednisone (PEACE-1).
- Low-Volume (Synchronous or Metachronous) OR Chemo-Unfit: ARPI Doublet — ADT + Darolutamide (ARANOTE), Apalutamide (TITAN), Enzalutamide (ARCHES / ENZAMET), or Abiraterone (LATITUDE / STAMPEDE).
- Primary Tumor Radiotherapy: In low-volume de novo mHSPC, add prostate-directed external beam radiotherapy (STAMPEDE Arm H: 3-yr OS 81% vs 73%, HR 0.68).
- ARPI Selection Nuances:
  - Darolutamide: Lowest blood-brain barrier penetration (minimal fatigue, falls, cognitive impairment) and fewest CYP drug-drug interactions.
  - Abiraterone: Cost-effective generic option; requires prednisone 5 mg daily, potassium/LFT/BP monitoring; avoid in brittle diabetes or severe CHF.
  - Apalutamide / Enzalutamide: Watch for rash/hypothyroidism (apalutamide) and fatigue/seizure threshold/hypertension (enzalutamide).

## Landmark Trial Statistics

| Trial | Regimen | Population | mOS / OS HR (95% CI) | rPFS / PFS HR (95% CI) | Key Clinical Pearl |
| --- | --- | --- | --- | --- | --- |
| ARASENS | ADT + Doce + Darolutamide vs ADT + Doce | 86% de novo, 77% HV | NR vs 48.9 mo (HR 0.68; 0.57–0.80) | Time to CRPC HR 0.36 | Consistent OS benefit in HV (0.69) & LV (0.68) |
| PEACE-1 | ADT + Doce + Abi vs ADT + Doce | 100% de novo mHSPC | HV: 5.1 vs 3.5 yr (HR 0.72; 0.55–0.95) | HV: 4.5 vs 2.0 yr (HR 0.50) | Do not use triplet in LV de novo unless select |
| TITAN | ADT + Apalutamide vs ADT | All-comers (63% HV) | NR vs 52.2 mo (HR 0.65; 0.53–0.79) | rPFS HR 0.48 | Monitor TSH and skin rash (27%) |
| ARCHES | ADT + Enzalutamide vs ADT | All-comers (63% HV) | OS HR 0.66 (0.53–0.81) | rPFS HR 0.39 | 4-yr OS 71% vs 57% despite 31% crossover |
| ARANOTE | ADT + Darolutamide vs ADT | All-comers (71% HV) | OS immature (HR 0.81) | rPFS HR 0.54 (0.41–0.71) | 24-mo rPFS 70.3% vs 52.1%; low fatigue (5.6%) |

## Interactive Element: CHAARTED Volume & Triplet Eligibility Checker

<div id="mhspc-widget" style="font-family:system-ui,sans-serif;border:1px solid #d0d7de;border-radius:10px;padding:16px;max-width:640px;background:#f8fafc;">
  <h4 style="margin:0 0 12px;color:#0f172a;">mHSPC Doublet vs. Triplet Decision Tool</h4>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px;">
    <label>Presentation:<select id="p-pres" style="width:100%;padding:6px;"><option value="denovo">Synchronous (De Novo)</option><option value="meta">Metachronous (Recurrent)</option></select></label>
    <label>Chemo-Fit (Docetaxel):<select id="p-fit" style="width:100%;padding:6px;"><option value="yes">Fit</option><option value="no">Unfit / Declines Chemo</option></select></label>
    <label><input type="checkbox" id="p-visc"> Visceral metastases</label>
    <label><input type="checkbox" id="p-bone"> ≥4 bone mets (≥1 extra-axial)</label>
  </div>
  <div id="p-out" style="padding:12px;border-radius:8px;background:#fff;border-left:4px solid #7c3aed;font-size:14px;"></div>
</div>
<script>
(function(){
  const ids=['p-pres','p-fit','p-visc','p-bone'];
  function calc(){
    const pres=document.getElementById('p-pres').value, fit=document.getElementById('p-fit').value,
          hv=document.getElementById('p-visc').checked || document.getElementById('p-bone').checked;
    let msg=`<div style="margin-bottom:6px;"><strong>CHAARTED Status:</strong> ${hv?'High Volume':'Low Volume'}</div>`;
    if(hv && pres==='denovo' && fit==='yes') msg+='<strong>Recommendation: Triplet Therapy</strong> — ADT + Docetaxel (6 cycles) + <em>Darolutamide</em> (ARASENS) or <em>Abiraterone</em> (PEACE-1).';
    else if(hv && fit==='yes') msg+='<strong>Recommendation: ARPI Doublet or Triplet</strong> — Strongest triplet data is in <em>de novo</em> HV; ARPI doublet (ADT + Darolutamide/Enza/Apa/Abi) is an established alternative in metachronous HV.';
    else if(!hv && pres==='denovo') msg+='<strong>Recommendation: ARPI Doublet + Prostate Radiotherapy</strong> — ADT + ARPI (TITAN/ARCHES/ARANOTE/LATITUDE) plus local prostate EBRT (STAMPEDE Arm H).';
    else msg+='<strong>Recommendation: ARPI Doublet</strong> — ADT + Darolutamide, Apalutamide, Enzalutamide, or Abiraterone. Avoid ADT monotherapy.';
    document.getElementById('p-out').innerHTML=msg;
  }
  ids.forEach(i=>document.getElementById(i).addEventListener('change',calc)); calc();
})();
</script>
