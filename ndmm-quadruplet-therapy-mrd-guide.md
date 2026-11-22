---
layout: post
title: "Newly diagnosed multiple myeloma: the anti-CD38 quadruplet era"
display_date: 2026-11-22
updated: 2026-11-22
category: "First-line principles"
audience: "clinicians"
cover: "general"
permalink: "/ndmm-quadruplet-therapy-mrd-guide/"
description: "Anti-CD38 quadruplets have replaced triplets for newly diagnosed myeloma — Dara-VRd with transplant, Isa-VRd or Dara-VRd without it, and Dara-Rd for frail patients, with MRD guiding maintenance."
summary: "Anti-CD38 quadruplets have replaced triplets for newly diagnosed myeloma — Dara-VRd with transplant, Isa-VRd or Dara-VRd without it, and Dara-Rd for frail patients, with MRD guiding maintenance."
tldr: "Quadruplets are the new standard: Dara-VRd plus transplant for eligible patients, Isa-VRd or Dara-VRd for fit transplant-ineligible patients, and Dara-Rd for frail patients — with sustained MRD negativity allowing maintenance de-escalation."
sources:
  - title: "PERSEUS (NCT03710603)"
    url: "https://clinicaltrials.gov/study/NCT03710603"
  - title: "IMROZ (NCT03319667)"
    url: "https://clinicaltrials.gov/study/NCT03319667"
  - title: "CEPHEUS (NCT03652064)"
    url: "https://clinicaltrials.gov/study/NCT03652064"
  - title: "MAIA (NCT02252172)"
    url: "https://clinicaltrials.gov/study/NCT02252172"
  - title: "EHA-ESMO Multiple Myeloma Guidelines"
    url: "https://www.esmo.org/guidelines"
  - title: "IMWG Consensus Criteria (PubMed)"
    url: "https://pubmed.ncbi.nlm.nih.gov/?term=IMWG+MRD+criteria+Kumar"
---
## Clinical Synthesis & Transplant Stratification

Upfront anti-CD38 quadruplets have replaced triplets across both transplant-eligible (TE) and fit transplant-ineligible (TI) NDMM, driving unprecedented MRD-negativity (10⁻⁵) and multi-year PFS gains.

- Transplant-Eligible (TE) NDMM:
  - Standard of Care: Dara-VRd (4 induction cycles) → Melphalan 200 mg/m² + ASCT → Dara-VRd consolidation (2 cycles) → Dara-R maintenance (PERSEUS).
  - MRD-Adapted Maintenance: In PERSEUS, patients achieving sustained MRD-negativity (10⁻⁵ for ≥12 months after ≥24 months of Dara-R) safely de-escalated to lenalidomide alone.
  - High-Risk Cytogenetics (del(17p), t(4;14), t(14;16), gain/amp 1q21): Dual maintenance (PI + IMiD or anti-CD38 + IMiD) is favored; avoid single-agent lenalidomide.
- Transplant-Ineligible (TI) / Transplant-Deferred NDMM:
  - Fit TI (age ≤80 yrs, low frailty): Isa-VRd (IMROZ) or Dara-VRd (CEPHEUS). Weekly subcutaneous bortezomib dramatically reduces Grade ≥3 peripheral neuropathy (as shown in BENEFIT).
  - Frail / Elderly TI: Dara-Rd (MAIA) remains the benchmark—median OS exceeds 7.5 years (90.3 mo) with minimal neurotoxicity.
- Supportive Essentials: Acyclovir/valacyclovir prophylaxis (mandatory with PI + anti-CD38), VTE prophylaxis (aspirin or DOAC based on IMPEDE-VTE/SAVED score), bone-modifying agent (zoledronic acid or denosumab), and baseline red cell phenotyping/type & screen before the first anti-CD38 dose.

## Landmark Trial Statistics

| Trial | Setting & Regimen | n | PFS (HR; 95% CI) | MRD-Negativity (10⁻⁵) | ≥CR Rate | Key Takeaway |
| --- | --- | --- | --- | --- | --- | --- |
| PERSEUS | TE: Dara-VRd + ASCT + Dara-R vs VRd | 709 | 4-yr PFS 84.3% vs 67.7% (HR 0.42; 0.30–0.59) | 75.2% vs 47.5% | 87.9% vs 70.1% | New global TE benchmark; MRD de-escalation built in |
| IMROZ | TI (≤80 y): Isa-VRd vs VRd | 446 | 5-yr PFS 63.2% vs 45.2% (HR 0.60; 0.41–0.88) | 55.5% vs 40.9% (MRD− + CR) | 74.7% vs 64.1% | First Phase III TI quadruplet OS/PFS proof |
| CEPHEUS | TI / Deferred: Dara-VRd vs VRd | 395 | 54-mo PFS 68.1% vs 49.5% (HR 0.57; 0.41–0.79) | 60.9% vs 39.4% (OR 2.37) | 81.2% vs 61.6% | Confirms Dara-VRd in TI/deferred transplant |
| MAIA | TI (All ages/frail): Dara-Rd vs Rd | 737 | mPFS 61.9 vs 34.4 mo (HR 0.55) | 32% vs 11% | 51% vs 30% | mOS 90.3 vs 64.1 mo (HR 0.67); best for frail TI |

## Interactive Element: NDMM Induction & Maintenance Selector

<div id="ndmm-widget" style="font-family:system-ui,sans-serif;border:1px solid #d0d7de;border-radius:10px;padding:16px;max-width:640px;background:#f8fafc;">
  <h4 style="margin:0 0 12px;color:#0f172a;">NDMM Regimen & Frailty Selector</h4>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">
    <label>ASCT Eligibility:<select id="m-te" style="width:100%;padding:6px;"><option value="te">Transplant-Eligible</option><option value="ti">Transplant-Ineligible</option></select></label>
    <label>Fitness:<select id="m-fit" style="width:100%;padding:6px;"><option value="fit">Fit (≤80y)</option><option value="frail">Frail / Neuropathy</option></select></label>
    <label>Cytogenetics:<select id="m-risk" style="width:100%;padding:6px;"><option value="std">Standard Risk</option><option value="high">High Risk (del17p/t4;14/1q+)</option></select></label>
  </div>
  <div id="m-out" style="padding:12px;border-radius:8px;background:#fff;border-left:4px solid #d97706;font-size:14px;"></div>
</div>
<script>
(function(){
  const ids=['m-te','m-fit','m-risk'];
  function go(){
    const te=document.getElementById('m-te').value, fit=document.getElementById('m-fit').value, risk=document.getElementById('m-risk').value;
    let txt='';
    if(te==='te') txt='<strong>Induction:</strong> Dara-VRd × 4 → Mel200 ASCT → Dara-VRd × 2 (<strong>PERSEUS</strong>, 4-yr PFS 84.3%).<br><strong>Maintenance:</strong> '+(risk==='high'?'Dual maintenance (Dara-R or Bortezomib-R); do not de-escalate early.':'Dara-R; consider stopping Dara after ≥24 mo if sustained MRD− (10⁻⁵) for ≥12 mo.');
    else if(fit==='frail') txt='<strong>Induction & Continuous:</strong> <strong>Dara-Rd (MAIA)</strong> — mOS 90.3 mo, avoids bortezomib neuropathy. Use dose-reduced dexamethasone (20 mg weekly) and consider stopping dex after 9–12 cycles.';
    else txt='<strong>Induction:</strong> <strong>Isa-VRd (IMROZ)</strong> or <strong>Dara-VRd (CEPHEUS)</strong> with weekly SC bortezomib to limit neuropathy → Anti-CD38 + Rd maintenance.';
    document.getElementById('m-out').innerHTML=txt;
  }
  ids.forEach(i=>document.getElementById(i).addEventListener('change',go)); go();
})();
</script>
