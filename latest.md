---
layout: default
permalink: /latest/
title: "Latest in oncology"
---
<div class="wrap block">
<h1>Latest in oncology</h1>
<p class="note">Research metadata, auto-updated daily at approximately 06:00 IST (scheduled runs may be delayed). Automated discovery, not editorial endorsement or clinical guidance. PubMed: cancer[tiab] AND oncology, published in the last 30 days. Trial records are ordered by last update; an update does not necessarily mean new results.</p>
<h2>Recent PubMed publications</h2>
<ul>
{% for item in site.data.latest_pubmed %}
<li><a href="{{ item.url | escape }}">{{ item.title | escape }}</a><br><span class="meta">{{ item.journal | escape }} · {{ item.pubdate | escape }} · PMID {{ item.pmid | escape }}<br>{{ item.authors | join: ', ' | escape }}</span></li>
{% else %}<li>No publications available yet.</li>{% endfor %}
</ul>
<h2>Recently updated oncology studies</h2>
<ul>
{% for item in site.data.latest_trials %}
<li><a href="{{ item.url | escape }}">{{ item.title | escape }}</a><br><span class="meta">{{ item.nct | escape }} · {{ item.status | replace: '_', ' ' | escape }} · {{ item.phase | replace: '_', ' ' | escape }} · Updated {{ item.updated | escape }}</span></li>
{% else %}<li>No trial records available yet.</li>{% endfor %}
</ul>
<p>Sources: <a href="https://pubmed.ncbi.nlm.nih.gov/">PubMed / NLM</a> and <a href="https://clinicaltrials.gov/">ClinicalTrials.gov</a>. Check the source record for full details.</p>
</div>
