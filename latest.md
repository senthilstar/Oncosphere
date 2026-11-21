---
layout: default
permalink: /latest/
title: "Latest in oncology"
---
<div class="wrap block latest-page">
<h1>Latest in oncology</h1>
<p class="note">Feeds are scheduled to refresh daily at 06:00 IST; runs may be delayed or fail. PubMed: cancer[tiab] AND oncology, filtered by publication date in the last 30 days. ClinicalTrials.gov: cancer studies ordered by last posted update; an update may not include new results. Automated listings are not editorial recommendations or clinical guidance.</p>
<h2>Recent PubMed publications</h2>
<ul class="research-list">
{% for item in site.data.latest_pubmed %}
<li><a href="{{ item.url | escape }}">{{ item.title | escape }}</a><span class="meta">{{ item.journal | escape }} · {{ item.pubdate | escape }} · PMID {{ item.pmid | escape }}</span></li>
{% else %}<li>No publications available yet.</li>{% endfor %}
</ul>
<h2>Recently updated oncology studies</h2>
<ul class="research-list">
{% for item in site.data.latest_trials %}
<li><a href="{{ item.url | escape }}">{{ item.title | escape }}</a><span class="meta">{{ item.nct | escape }} · {{ item.status | replace: '_', ' ' | escape }} · {{ item.phase | replace: '_', ' ' | escape }} · Updated {{ item.updated | escape }}</span></li>
{% else %}<li>No trial records available yet.</li>{% endfor %}
</ul>
<p>Sources: <a href="https://pubmed.ncbi.nlm.nih.gov/">PubMed / NLM</a> and <a href="https://clinicaltrials.gov/">ClinicalTrials.gov</a>. Open a record for details.</p>
</div>
