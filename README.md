# Oncosphere

Jekyll site built natively by GitHub Pages (no build step). Live: https://senthilstar.github.io/Oncosphere/

## Add a news post
Create `_posts/YYYY-MM-DD-short-slug.md`:

```markdown
---
title: "Headline"
category: Approvals   # Approvals | Conference | Trial | Perspective
audience: clinicians  # optional
summary: One-sentence summary shown on cards and in SEO description.
sources:
  - title: Source name
    url: https://...
---
Body in Markdown.
```
Commit and push to `main`; Pages rebuilds in ~1 minute.

Patient guides live in `explainers/*.md` with `section: explainer` front matter.
The 2025 placeholder page is preserved in `legacy/`.

## Weekly (Monday) post
Add `_posts/YYYY-MM-DD-slug.md` with front matter: `title`, `category`, `audience`, `summary`, `sources` (list of `title`/`url`), optional `cover` (general|lung|breast|bladder|gi|sarcoma|news), `tldr`, `updated`.
Helpers: `{% include chart.html title="..." labels="A|B" values="1|2" max="10" unit=" mo" note="..." %}` and `{% include india.html text="..." %}`.

## AdSense
`_config.yml`: `adsense_client` (publisher ID; empty disables all ad code) and `adsense_slots` (header / in_article / sidebar unit IDs; empty = slot hidden). `ads.txt` is generated from `adsense_client` (must sit at the domain root, i.e. after oncosphere.in is live).
