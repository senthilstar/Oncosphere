---
layout: post
title: "First-line treatment principles: Unresectable hepatocellular carcinoma"
display_date: 2026-11-22
updated: 2026-11-22
category: "First-line principles"
audience: "clinicians"
cover: "gi"
permalink: "/first-line/unresectable-hcc-systemic-therapy-guide/"
description: "Choose first-line systemic therapy for unresectable HCC by Child-Pugh class, variceal bleeding risk and the need for rapid tumour shrinkage."
summary: "Choose first-line systemic therapy for unresectable HCC by Child-Pugh class, variceal bleeding risk and the need for rapid tumour shrinkage."
tldr: "All first-line phase III trials enrolled Child-Pugh A patients. Atezolizumab–bevacizumab is the benchmark; STRIDE and nivolumab–ipilimumab are the anti-VEGF-free options when bleeding risk or bevacizumab contraindications apply, and Child-Pugh B7 needs single-agent TKI or nivolumab instead."
sources:
  - title: "IMbrave150 (NCT03434379)"
    url: "https://clinicaltrials.gov/study/NCT03434379"
  - title: "HIMALAYA (NCT03298451)"
    url: "https://clinicaltrials.gov/study/NCT03298451"
  - title: "CheckMate 9DW (NCT04039607)"
    url: "https://clinicaltrials.gov/study/NCT04039607"
  - title: "REFLECT (NCT01761266)"
    url: "https://clinicaltrials.gov/study/NCT01761266"
  - title: "ESMO HCC Clinical Practice Guidelines"
    url: "https://www.esmo.org/guidelines"
  - title: "BCLC Strategy Update (PubMed)"
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=BCLC+strategy+hepatocellular+carcinoma+Reig"
---
## Clinical Synthesis & Stratification

All Phase III first-line uHCC trials enrolled Child-Pugh A patients. Choosing among the three IO-based regimens depends on bleeding/variceal risk, need for rapid tumor shrinkage, and autoimmune/hepatic reserve.

- Atezolizumab + Bevacizumab (IMbrave150): Benchmark for ORR (30%) and mPFS (6.9 mo); preferred in main portal vein invasion (Vp4) if varices are controlled. Mandatory EGD within 6 months; contraindicated in untreated high-risk varices, recent GI bleed, or uncontrolled hypertension/arterial thromboembolism.
- STRIDE — Tremelimumab (single 300 mg priming dose) + Durvalumab (HIMALAYA): Anti-VEGF–free regimen with proven 5-year OS of 19.6% (nearly 1 in 5 alive at 5 years). Preferred when bevacizumab is contraindicated or EGD cannot be delayed.
- Nivolumab + Ipilimumab (CheckMate 9DW): Highest mOS (23.7 mo) and ORR (36%) with a 30.4-month median duration of response, but carries higher early immune-mediated toxicity (hepatitis, adrenal/pituitary, colitis) and an early crossing of the OS curve versus TKIs. Best reserved for fit Child-Pugh A patients who can tolerate intensive irAE monitoring.
- Child-Pugh B7–B8: Single-agent lenvatinib or sorafenib, or nivolumab (CheckMate 040 Cohort 5) for carefully selected patients with preserved performance status.
- 2L Sequencing: Post-IO standard remains TKI (lenvatinib, cabozantinib [CELESTIAL], regorafenib [RESORCE], or ramucirumab if AFP ≥400 ng/mL [REACH-2]).

## Landmark Trial Statistics

| Trial | Regimen vs Control | n | mOS (HR; 95% CI) | mPFS (HR; 95% CI) | ORR (RECIST 1.1) | Landmark OS / Key Signal |
| --- | --- | --- | --- | --- | --- | --- |
| IMbrave150 | Atezo + Bev vs Sorafenib | 501 | 19.2 vs 13.4 mo (0.66; 0.52–0.85) | 6.9 vs 4.3 mo (0.65; 0.53–0.81) | 30% vs 11% | 18-mo OS: 52% vs 40%; GI bleed risk |
| HIMALAYA | STRIDE (Treme+Durva) vs Sorafenib | 782 | 16.4 vs 13.8 mo (0.78; 0.65–0.93) | 3.8 vs 4.1 mo (0.90; 0.77–1.05) | 20.1% vs 5.1% | 5-yr OS: 19.6% vs 9.4%; no anti-VEGF |
| CheckMate 9DW | Nivo + Ipi vs Lenvatinib/Sorafenib | 668 | 23.7 vs 20.6 mo (0.79; 0.65–0.96) | 9.1 vs 9.2 mo (0.87) | 36% vs 13% | mDoR 30.4 vs 12.9 mo; 36-mo OS 38% |
| REFLECT | Lenvatinib vs Sorafenib | 954 | 13.6 vs 12.3 mo (0.92; 0.79–1.06) | 7.4 vs 3.7 mo (0.66; 0.57–0.77) | 18.8% (24.1% mRECIST) | Strong 1L TKI if IO contraindicated |

## Interactive Element: uHCC 1L Regimen & Contraindication Filter

<div id="hcc-widget" style="font-family:system-ui,sans-serif;border:1px solid #d0d7de;border-radius:10px;padding:16px;max-width:640px;background:#f8fafc;">
  <h4 style="margin:0 0 12px;color:#0f172a;">uHCC First-Line Regimen Selector</h4>
  <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:12px;">
    <label>Child-Pugh:<select id="h-cp" style="width:100%;padding:6px;"><option value="A">Child-Pugh A</option><option value="B">Child-Pugh B7</option></select></label>
    <label>Varices / Bleed Risk:<select id="h-bleed" style="width:100%;padding:6px;"><option value="low">Low (EGD cleared)</option><option value="high">High / Recent Bleed / No EGD</option></select></label>
    <label>Autoimmune / Transplant:<select id="h-ai" style="width:100%;padding:6px;"><option value="no">None (IO eligible)</option><option value="yes">Liver Transplant / Severe Autoimmune</option></select></label>
    <label>Clinical Priority:<select id="h-goal" style="width:100%;padding:6px;"><option value="bal">Balanced OS + PFS</option><option value="orr">Max ORR / Rapid Shrinkage</option></select></label>
  </div>
  <div id="h-out" style="padding:12px;border-radius:8px;background:#fff;border-left:4px solid #059669;font-size:14px;"></div>
</div>
<script>
(function(){
  const ids=['h-cp','h-bleed','h-ai','h-goal'];
  function run(){
    const cp=document.getElementById('h-cp').value, bleed=document.getElementById('h-bleed').value,
          ai=document.getElementById('h-ai').value, goal=document.getElementById('h-goal').value;
    let out='';
    if(ai==='yes') out='<strong>Lenvatinib (REFLECT) or Sorafenib</strong> — Immune checkpoint inhibitors are contraindicated in liver transplant recipients or severe autoimmune disease.';
    else if(cp==='B') out='<strong>Child-Pugh B7:</strong> Consider single-agent <strong>Lenvatinib / Sorafenib</strong> or <strong>Nivolumab</strong> (off-trial/CheckMate 040 data); avoid dual IO or bevacizumab due to decompensation/bleed risk.';
    else if(bleed==='high') out='<strong>STRIDE (Tremelimumab + Durvalumab, HIMALAYA)</strong> or <strong>Nivolumab + Ipilimumab (CheckMate 9DW)</strong> — Anti-VEGF-free; avoids variceal bleeding risk.';
    else if(goal==='orr') out='<strong>Nivolumab + Ipilimumab (CheckMate 9DW, ORR 36%, mOS 23.7 mo)</strong> or <strong>Atezolizumab + Bevacizumab (IMbrave150, ORR 30%, mPFS 6.9 mo)</strong>.';
    else out='<strong>Atezolizumab + Bevacizumab (IMbrave150)</strong> — mOS 19.2 mo, mPFS 6.9 mo. Alternatives: <strong>STRIDE</strong> (5-yr OS 19.6%) or <strong>Nivo + Ipi</strong> (mOS 23.7 mo).';
    document.getElementById('h-out').innerHTML=out;
  }
  ids.forEach(i=>document.getElementById(i).addEventListener('change',run)); run();
})();
</script>
