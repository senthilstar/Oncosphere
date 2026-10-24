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
