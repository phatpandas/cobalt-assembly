# Cobalt Assembly

## Canonical business ecosystem blueprint

Cobalt Assembly is a couture-grade AI operating layer for modern digital businesses. It connects premium templates, focused micro-SaaS tools, and intelligent content products through a light-mode, blue-and-silver visual system.

This repository is the export-ready canonical record of the approved work created in this session. Superseded naming and catalog drafts are intentionally excluded.

## Contents

| Document | Purpose |
|---|---|
| [01 Brand Identity](docs/01-brand-identity.md) | Naming direction, positioning, palette, typography, voice, and visual principles |
| [02 Product Catalog](docs/02-product-catalog.md) | Templates, tools, content products, pricing, and ecosystem paths |
| [03 Visual System](docs/03-visual-system.md) | Logo logic, UI styling, editorial layout, motion, and asset specification |
| [04 Website Architecture](docs/04-website-architecture.md) | Sitemap, navigation, homepage, product pages, conversion paths, and deck outline |
| [05 Launch Funnel](docs/05-launch-funnel.md) | Lead magnet, email journey, conversion path, offer ladder, and cross-sells |
| [06 Weekly Release Schedule](docs/06-weekly-release-schedule.md) | Sustainable publishing cadence and twelve-week release season |
| [07 Automation System](docs/07-automation-system.md) | Approval-gated content, product, SaaS, and marketing operating loops |
| [Asset Directory](assets/README.md) | Reserved location for future production logo, motion, and campaign assets |

## Design guardrails

- Strictly light-mode: white and near-white surfaces only.
- Cobalt directs interaction; silver creates structure; white space creates luxury.
- Motion must clarify state or relationship, never act as decoration alone.
- Product experiences are component-led, accessible, editorial, and enterprise-grade.

## Repository use

This repository now includes a dependency-free, responsive launch site built from the canonical Cobalt Assembly system:

- `index.html` is the public homepage and interactive Precision Path diagnostic.
- `tokens.css` contains the canonical blue, silver, and light-mode design tokens.
- `config.js` is the only place checkout URLs need to be added before sales go live.
- `.github/workflows/deploy-pages.yml` deploys the static site to GitHub Pages after a push to `main`.

## Local preview

Run a static server from the repository root, then open `index.html` in a browser. No build step or package installation is required.

## Revenue launch checklist

1. Create and fulfil the first launch offers (for example, Market Premise, Glassline Identity, and Release Current).
2. Add their secure HTTPS checkout URLs to `config.js`.
3. Enable GitHub Pages for this repository using GitHub Actions as the source, then push `main`.
4. Test every checkout and the delivery flow before promoting the site.

Until checkout URLs are added, product CTAs intentionally return visitors to the Precision Path diagnostic instead of sending them to a broken purchase flow.
