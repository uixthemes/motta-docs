# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

User documentation for the Motta WordPress theme, built with **Astro 6 + Starlight 0.39**. Hosted at `https://docs.uix.store/motta/`. Pure documentation site — no API routes, no server code, no database.

The site was migrated from Docsify. The original Docsify sources (`_sidebar.md`, section folders at the repo root, `_images/`) are in git history before the migration commit.

## Developer commands

```bash
nvm use            # Node 22 LTS (pinned in .nvmrc)
pnpm install
pnpm dev           # http://localhost:4321/motta/
pnpm build         # production build → ./dist/
pnpm check         # Astro type-check
pnpm exec prettier --check .
pnpm exec markdownlint-cli2 "**/*.md"
vale src/content/docs   # requires `brew install vale && vale sync`
```

Pre-commit (husky + lint-staged) auto-formats and lints staged `.md` files. Do not bypass it.

## Architecture

- **Framework**: Starlight (Astro). Pages are plain Markdown/MDX in `src/content/docs/<section>/`.
- **`base: '/motta'`** in `astro.config.mjs` — all internal links/assets are prefixed. Never change this.
- **Sidebar is explicitly configured** in `astro.config.mjs` (page slugs, nested groups, external links). It mirrors the old Docsify `_sidebar.md`. When you add a page, add its slug to the sidebar too.
- **Images** live in `src/assets/images/` (flat, shared across pages). Reference them with a relative path, e.g. `![Logo settings](../../../assets/images/customize--header-logo.png)`. Astro optimizes them at build.
- **No code logic** — this is a pure documentation site.

## Content structure

```
src/content/docs/
├── index.mdx            # homepage (splash)
├── getting-started/
├── installation/
├── theme-options/
├── elementor/
├── header/
├── pages/
├── woocommerce/
├── shop/
├── product-page/
├── mobile/
├── popup/
├── translation/
├── customize-theme/
├── other/
└── updates/             # includes changelog.md
```

Folder names become URL slugs. Filenames become URL slugs within a folder.

## Frontmatter (every page)

```yaml
---
title: Change your logo # sentence case, required
description: Replace the default... # meta description, required, ≤160 chars
draft: false # set true to hide from prod build
---
```

## Writing standards

- **Voice**: second person ("you"), present tense, active voice, contractions OK.
- **No**: "easy", "simple", "just", "obviously", "merely", "of course" (enforced by Vale).
- **UI labels**: **bold** — "Click **Save Changes**".
- **Paths**: **Appearance → Customize → Header**.
- **Admonitions**: `:::note`, `:::tip`, `:::caution`, `:::danger` only.
- **Plain words**: use not utilize, help not assist, change not modify, turn on/off not enable/disable.
- Vale rules: `.vale/styles/Motta/`. Drafting skill: `.claude/skills/write-docs/`.

Migrated pages keep their original wording; they have not been rewritten to this style yet.

## Updating the changelog

Add the new release at the top of `src/content/docs/updates/changelog.md`, using the same format as the existing entries.

## Deploying

- `./deploy.sh` builds and rsyncs `dist/` to the VPS (configure `SSH_TARGET` via `.env`).
- `.github/workflows/deploy.yml` is manual (`workflow_dispatch`) until VPS secrets are configured.

## Conventions

- Package manager: **pnpm** (not npm or yarn).
- Markdown files only for content. Astro components only if customizing Starlight.
- `draft: true` hides a page from production builds — safe to commit WIP.
- Internal links use relative paths with a trailing slash (`../logo/`, `../../shop/wishlist/`). Never use absolute URLs for internal pages.
