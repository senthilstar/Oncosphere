---
layout: default
permalink: /calculators/
title: "Calculators"
---
<link rel="stylesheet" href="{{ '/assets/calculators.css' | relative_url }}">
<div class="wrap block calculators-page">
<h1>Calculators</h1>
<p class="note"><strong>Educational only.</strong> These calculators are not for clinical decisions without clinician judgment. Verify inputs, units, results and applicability against current guidelines. Adult models unless stated otherwise. No patient data: use hypothetical values only; entries stay in your browser and are not saved or transmitted.</p>
<nav class="calc-nav" aria-label="Calculator groups"><a href="#hematology">Hematology</a> <a href="#solid-tumour">Solid tumour</a> <a href="#chemo-dosing">Chemo dosing</a> <a href="#labs-supportive">Labs &amp; supportive</a> <a href="#performance">Performance</a></nav>
<label class="calc-search" for="calculator-search">Filter calculators by name<input id="calculator-search" type="search" placeholder="e.g. MIPI, BSA, sodium" autocomplete="off"></label>
<p id="calculator-count" role="status"></p>
<noscript><p>Enable JavaScript to use the client-side calculators.</p></noscript>
<div id="calculator-groups"></div>
</div>
<script src="{{ '/assets/js/calculators.js' | relative_url }}" defer></script>
