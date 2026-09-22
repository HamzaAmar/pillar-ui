---
"@pillar-ui/core": patch
"@pillar-ui/hooks": patch
"@pillar-ui/icons": patch
"@pillar-ui/utils": patch
---

Migrate the repository toolchain from ESLint/Prettier to Oxlint/Oxfmt.

Replaces the `eslint`/`prettier` scripts and devDependencies with `oxlint`/`oxfmt` across every workspace, adds root `.oxlintrc.json`/`.oxfmtrc.json` as the single source of truth for lint/format rules, removes the internal `@pillar-ui/eslint` config package, and updates CI, lint-staged, VS Code settings, `.gitattributes`, and the contributing guide to match. Published package runtime code is unchanged; only tooling, scripts, and formatting were touched.
