# Contributing to Pillar Design System

Thank you for your interest in contributing to **Pillar**! We welcome contributions from everyone in the community—developers, designers, and users alike. This guide will help you get started.

---

## Getting Started

Before contributing, please review our  
📜 [Code of Conduct](https://github.com/HamzaAmar/pillar-ui/blob/main/CODE_OF_CONDUCT.md).

To get started:

- Check the [GitHub issues](https://github.com/HamzaAmar/pillar-ui/issues) and the project board to find open tasks or bugs.
- Feel free to pick an issue and start working on it!

---

## How to Contribute

1. **Fork and clone** the [Pillar repository](https://github.com/HamzaAmar/pillar-ui).
2. **Install dependencies**: `yarn`
3. **Start the development environment**:`yarn dev`

   This will:

   - Build all subdirectories (`core`, `hooks`, `utils`, `icons`, `docs`, `storybook`)
   - Open:
     - Docs site at [http://localhost:3000](http://localhost:3000)
     - Storybook at [http://localhost:6006](http://localhost:6006)

4. **Create a new branch**, make your changes, and commit them.
5. **Push your branch** to your forked repository.
6. **Open a Pull Request (PR)** on the main repository with a detailed description of your changes.
7. Adhere to the [Code of Conduct](https://github.com/HamzaAmar/pillar-ui/blob/main/CODE_OF_CONDUCT.md).

---

## Bug Reports and Feature Requests

To report bugs or request features, open a [GitHub Issue](https://github.com/HamzaAmar/pillar-ui/issues). Please provide as much detail as possible.

---

## Style Guide

Pillar follows strict design and coding standards for consistency and maintainability.

### Component Class Naming Convention

We use a BEM-like convention adapted for scalability:

- **Folder prefixes**: Use the first two letters of the folder name. If a conflict arises, add a third distinguishing letter.
  - `table` → `ta-`
  - `tabs` → `tab-`
- **Elements**: Capitalize the first letter.
  - `row` → `ta-R`
  - `item` → `ta-I`
- **Modifiers**: Use `_` + the modifier name.
  - `fluid` → `ta_fluid`
  - `inline` → `ta_inline`

---

### Utility Class Naming Convention

Utility classes follow a file–property–value pattern to keep them distinct and traceable.

#### Format

- **File Initial**:
  - `alignment.css` → `A`
  - `font.css` → `F`
- **Property**:
  - `justify-content` → `jc`
  - `font-style` → `st` _(`F` is already used for file, so we add `t`)_
- **Value**:
  - `flex-start` → `start`
  - `italic` → `italic`

---

### Implementation Guidelines

1. **Consistency**:  
   Use the same prefix and naming structure across all components.
2. **Scalability**:  
   Use camelCase for sub-elements to ensure readability.
3. **Separation of Concerns**:  
   Keep base classes, sub-elements, and modifiers distinct.  
   Use modifiers only when necessary.

---

### Why This Naming Convention?

- ⚡ **Lightweight**: Minimizes CSS file size for better performance and LCP.
- 🔍 **Traceable**: Utility classes are easy to identify and debug.
- 🔧 **Clear purpose**: Each class clearly represents a property and value.
- 🛠️ **Maintainable**: Keeps the system consistent as it grows.

---

## Commit Messages

Pillar uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) so changelogs
and versions can be generated automatically. Every commit must be atomic: one `why` per commit.

Format: `type(scope): imperative subject under 72 chars`

- `type`: `feat`, `fix`, `docs`, `style`, `refactor`, `test`, `chore`, `perf`, `ci`, `build`, `revert`
- `scope` (required in this monorepo): `core`, `hooks`, `icons`, `utils`, `docs`, `stories`, `ci`, `build`, `deps`, `release`, `contrib`
- Write in imperative mood: `add`, `fix`, `remove`, `update` — never `added`, `fixes`, `mistakes`.

Good examples:

```bash
feat(core): add switch component with high-contrast support
fix(hooks): export useCounter types from package index
fix(icons): rename multiply icon to x for consistency
docs(docs): fix tooltip props table and add live example
refactor(core): share variant styles to reduce css size
chore(ci): cache yarn dependencies in GitHub Actions
```

Anti-patterns to avoid (real mistakes from our own history):

```bash
# Bad: vague, no scope, no why
fix: icons problem
fix: the pillar ui core mistakes
fix: fix other design issues
# Bad: god commit doing 5 things at once
refactor: Add new release with modifications
```

Before committing, run `git status` and stage by topic — never blindly `git add .`.
Prefer `git add -p` to split unrelated hunks. If you would not want to revert
everything together, split it into separate commits.

---

## Running Tests

Before submitting a PR, run:

```bash
yarn ci
```

This ensures everything builds and tests pass.

---

## Pull Request Reviews

PRs will be reviewed by the Pillar team. We appreciate your patience and welcome your openness to feedback.

---

## Conclusion

We hope you find contributing to Pillar rewarding and educational. Your input helps us build a better design system for everyone.

If you need help getting started, feel free to reach out to the maintainers or open a discussion on GitHub.
