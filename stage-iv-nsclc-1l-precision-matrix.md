---
layout: post
title: "Stage IV NSCLC: first-line actionable drivers (EGFR/ALK) & non-driver IO matrix"
display_date: 2026-11-22
updated: 2026-11-22
category: "First-line principles"
audience: "clinicians"
cover: "lung"
permalink: "/stage-iv-nsclc-1l-precision-matrix/"
description: "Never start immunotherapy before broad NGS returns in stage IV NSCLC — match EGFR and ALK disease to targeted therapy and PD-L1 to the right immunotherapy backbone."
summary: "Never start immunotherapy before broad NGS returns in stage IV NSCLC — match EGFR and ALK disease to targeted therapy and PD-L1 to the right immunotherapy backbone."
tldr: "Wait for broad NGS before any immunotherapy. EGFR disease gets osimertinib with or without chemotherapy intensification, ALK disease gets lorlatinib, and non-driver disease is stratified by PD-L1: single-agent IO at ≥50%, chemo-IO at 1–49%, and chemo-IO or dual IO below 1%."
sources:
  - title: "FLAURA2 (NCT04035486)"
    url: "https://clinicaltrials.gov/study/NCT04035486"
  - title: "MARIPOSA (NCT04487080)"
    url: "https://clinicaltrials.gov/study/NCT04487080"
  - title: "CROWN (NCT03052608)"
    url: "https://clinicaltrials.gov/study/NCT03052608"
  - title: "KEYNOTE-189 (NCT02578680)"
    url: "https://clinicaltrials.gov/study/NCT02578680"
  - title: "KEYNOTE-407 (NCT02775435)"
    url: "https://clinicaltrials.gov/study/NCT02775435"
  - title: "CheckMate 9LA (NCT03215706)"
    url: "https://clinicaltrials.gov/study/NCT03215706"
  - title: "ESMO Metastatic NSCLC Living Guidelines"
    url: "https://www.esmo.org/guidelines"
---
## Clinical Synthesis & Molecular Priority

Never start immunotherapy before broad NGS (tissue ± liquid) returns in non-squamous NSCLC (and never-smokers with squamous histology)—IO prior to EGFR/ALK TKIs causes severe hepatotoxicity and pneumonitis without improving efficacy.

- EGFR Common Mutations (Exon 19 del / L858R): Three 1L options now exist:
  1. Osimertinib monotherapy (FLAURA): Best tolerability; preferred for low disease burden, elderly, or comorbidity-heavy patients.
  2. Osimertinib + Platinum-Pemetrexed (FLAURA2): 8.8-month mPFS gain (25.5 vs 16.7 mo; HR 0.62), with pronounced benefit in baseline CNS metastases (mPFS 24.9 vs 13.8 mo) and L858R.
  3. Amivantamab + Lazertinib (MARIPOSA): Chemo-free intensification (mPFS 23.7 vs 16.6 mo; HR 0.70; emerging OS advantage). Requires prophylactic anticoagulation for the first 4 months (VTE rate 37% without prophylaxis) and aggressive dermatologic/paronychia prophylaxis (COCOON protocol).
- ALK Rearrangement: Lorlatinib (CROWN) has redefined 1L therapy with a 60% 5-year PFS (mPFS still not reached) and 92% 5-year intracranial PFS. Proactively manage hyperlipidemia (statins/ezetimibe), weight gain, and neurocognitive AEs via dose reduction (75 mg → 50 mg) without compromising efficacy.
- Non-Driver NSCLC (No EGFR/ALK/ROS1/RET/MET/BRAF/NTRK/HER2/KRAS G12C):
  - PD-L1 ≥50%: Single-agent pembrolizumab (KEYNOTE-024), atezolizumab, or cemiplimab; add chemotherapy if high tumor burden, rapid progression, or visceral crisis.
  - PD-L1 1%–49%: Chemo + IO (KEYNOTE-189 non-squamous; KEYNOTE-407 squamous).
  - PD-L1 <1%: Chemo + IO or dual-IO + short-course chemo (CheckMate 9LA — 5-yr OS 22% vs 8% in PD-L1 <1%; POSEIDON in STK11/KEAP1 co-mutated subsets).

## Landmark Trial Statistics

| Trial | Molecular / PD-L1 Subset | Regimen vs Control | mPFS (HR; 95% CI) | OS / 5-Yr Landmark | Key Safety / Clinical Pearl |
| --- | --- | --- | --- | --- | --- |
| FLAURA2 | EGFR ex19del / L858R | Osi + Pem/Plat vs Osi | 25.5 vs 16.7 mo (HR 0.62; 0.49–0.79) | OS HR 0.75 (interim) | Strongest gain in CNS mets (HR 0.58) & L858R |
| MARIPOSA | EGFR ex19del / L858R | Amivantamab + Lazertinib vs Osi | 23.7 vs 16.6 mo (HR 0.70; 0.58–0.85) | OS favorable (HR 0.75) | Mandatory 4-mo VTE prophylaxis; SC ami cuts IRR |
| CROWN | ALK-Positive | Lorlatinib vs Crizotinib | NR vs 9.1 mo (HR 0.19; 0.13–0.27) | 5-yr PFS: 60% vs 8% | 5-yr intracranial PFS 92%; manage lipids/CNS |
| KEYNOTE-189 | Non-Sq, No Driver | Pembro + Pem/Plat vs Chemo | 9.0 vs 4.9 mo (HR 0.50) | mOS 22.0 vs 10.6 mo; 5-yr OS 19.4% | Universal non-squamous 1L backbone |
| KEYNOTE-407 | Squamous | Pembro + Carbo/Taxane vs Chemo | 8.0 vs 5.1 mo (HR 0.57) | mOS 17.2 vs 11.6 mo; 5-yr OS 18.4% | Carboplatin + paclitaxel or nab-paclitaxel |
| CheckMate 9LA | All-comers (No Driver) | Nivo + Ipi + 2c Chemo vs Chemo | 6.7 vs 5.3 mo (HR 0.70) | 5-yr OS 18% vs 11% (PD-L1 <1%: 22%) | High-value option in PD-L1 <1% / squamous |

## Interactive Element: Stage IV NSCLC 1L Decision Matrix

<div id="nsclc-widget" style="font-family:system-ui,sans-serif;border:1px solid #d0d7de;border-radius:10px;padding:16px;max-width:640px;background:#f8fafc;">
  <h4 style="margin:0 0 12px;color:#0f172a;">Stage IV NSCLC 1L Treatment Navigator</h4>
  <div style="display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-bottom:12px;">
    <label>Driver:<select id="l-drv" style="width:100%;padding:6px;"><option value="none">No Actionable Driver</option><option value="egfr">EGFR (ex19del/L858R)</option><option value="alk">ALK+</option></select></label>
    <label>PD-L1 TPS:<select id="l-pdl1" style="width:100%;padding:6px;"><option value="high">≥50%</option><option value="mid">1–49%</option><option value="low"><1%</option></select></label>
    <label>CNS Mets / High Burden:<select id="l-cns" style="width:100%;padding:6px;"><option value="no">No</option><option value="yes">Yes</option></select></label>
  </div>
  <div id="l-out" style="padding:12px;border-radius:8px;background:#fff;border-left:4px solid #dc2626;font-size:14px;"></div>
</div>
<script>
(function(){
  const ids=['l-drv','l-pdl1','l-cns'];
  function evalL(){
    const drv=document.getElementById('l-drv').value, pdl1=document.getElementById('l-pdl1').value, cns=document.getElementById('l-cns').value;
    let r='';
    if(drv==='egfr') r=cns==='yes'?'<strong>Intensified 1L EGFR:</strong> <em>Osimertinib + Platinum-Pemetrexed</em> (FLAURA2, CNS mPFS 24.9 mo) or <em>Amivantamab + Lazertinib</em> (MARIPOSA, requires 4-mo VTE prophylaxis).':'<strong>Osimertinib Monotherapy (FLAURA)</strong> — Best QoL; discuss FLAURA2 or MARIPOSA intensification if L858R or young/fit.';
    else if(drv==='alk') r='<strong>Lorlatinib 100 mg daily (CROWN)</strong> — 5-yr PFS 60%, 5-yr intracranial PFS 92%. Alternatives: Alectinib or Brigatinib if neurocognitive/lipid concerns.';
    else if(pdl1==='high' && cns==='no') r='<strong>Single-Agent IO</strong> (Pembrolizumab, Atezolizumab, or Cemiplimab) — Avoids chemo toxicity with durable 5-yr OS (~30%).';
    else if(pdl1==='low') r='<strong>CheckMate 9LA (Nivo + Ipi + 2c Chemo)</strong> — Strong 5-yr OS (22% vs 8%) in PD-L1 <1%. Alternative: KEYNOTE-189 / 407.';
    else r='<strong>Chemo + Immunotherapy</strong> — <em>KEYNOTE-189</em> (Non-Sq: Pembro + Pem/Plat) or <em>KEYNOTE-407</em> (Sq: Pembro + Carbo/Taxane).';
    document.getElementById('l-out').innerHTML=r;
  }
  ids.forEach(i=>document.getElementById(i).addEventListener('change',evalL)); evalL();
})();
</script>
