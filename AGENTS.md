# Repository Guidelines

This repository contains a personal portfolio website built with Next.js.

## Project Structure & Module Organization

Key directories (most work happens in `src/`):

- `src/app/`: Next.js App Router routes and global application shell.
  - `src/app/layout.tsx`: root layout (providers, global layout).
  - `src/app/[locale]/`: locale-aware routes (internationalization).
  - `src/app/globals.css`: global CSS + Tailwind layers.
- `src/components/`: reusable React components.
  - `src/components/layout/`: layout-level components.
  - `src/components/sections/`: page sections used by routes.
  - `src/components/ui/`: UI primitives/patterns (shadcn-like), often Radix-based.
  - `src/components/icons/`: icon components/assets.
- `src/config/`: configuration/data used to drive the UI (navigation, projects).
- `src/lib/`: shared utilities and integrations (e.g. GSAP helpers).
- `src/types/`: shared TypeScript types.
- `src/i18n/`: `next-intl` routing/request utilities.
- `messages/`: translation dictionaries per locale (e.g. `en.json`, `fr.json`).
  - keep keys nested by feature/section (e.g. `nav.about`, `hero.greeting`).
- `public/`: static assets served as-is.
- `docs/`: project documents (PDFs, specs).

Import alias:

- `@/*` maps to `src/*` (see `tsconfig.json`).

## Build, Test, and Development Commands

Package manager: `npm`.

- `npm ci`: install dependencies from `package-lock.json` (preferred in CI).
- `npm install`: install/update dependencies (local development).
- `npm run lint`: run ESLint across the repo.
- `npm run lint:fix`: auto-fix lint issues where safe.
- `npm run build`: build the Next.js app.
- `npm run start`: start the production build locally.
- `npm run dev`: start the local dev server.

Agent note:

- avoid running long-lived commands (`npm run dev`, `npm run start`) from an agent session. Provide the command to the user to run in their own terminal.

## Coding Style & Naming Conventions

General:

- TypeScript first; keep types explicit and reusable. Prefer shared exported types in `src/types/`.
- Keep nesting shallow (no more than ~3 levels) and prefer early returns.
- Prefer small, focused components and composable utilities (DRY, KISS).

React/Next.js:

- Use function components and hooks.
- Avoid prop drilling for cross-cutting concerns; prefer colocated context/providers in `src/app/layout.tsx` when needed.
- Use `next-intl` APIs:
  - client components: `useTranslations()`
  - server components: `getTranslations()`

Styling:

- Tailwind CSS is the default styling approach.
- For conditional classes, use existing `clsx`/`tailwind-merge` utilities/patterns in the codebase (e.g. a `cn` helper if present).

Files and naming:

- React components: `PascalCase.tsx`.
- Assets: `kebab-case` when applicable.
- Keep imports tidy and consistent; prefer the `@/*` alias for internal modules.

Linting/formatting:

- ESLint is configured in `eslint.config.mjs` and should remain green.
- There is no dedicated Prettier configuration; follow existing formatting patterns and ESLint guidance.

Comments:

- comments must always be in lowercase.
- comments should explain unusual or complex behavior and the why (trade-offs, constraints), not the obvious what.
- avoid comment bloat; delete stale comments when refactoring.

## Testing Guidelines

- there is currently no automated test runner configured (no `test` script in `package.json`).
- validate changes with `npm run lint` and `npm run build`.

If you introduce tests as part of a change:

- keep the setup minimal and consistent with the existing tooling.
- use clear naming (`*.test.ts` / `*.test.tsx`) and colocate tests near the code they cover unless a new test structure is explicitly introduced.

## Commit & Pull Request Guidelines

Commits:

- follow Conventional Commits style as seen in history:
  - `feat: ...`, `fix: ...`, `refactor: ...`, `chore: ...`, `docs: ...`
  - scopes are welcome when helpful (e.g. `feat(ui): ...`).
- commit messages must communicate intent (why), not just a file list.
- avoid committing `WIP` to shared branches unless explicitly requested.

Pull requests:

- keep PRs focused on a single concern; avoid drive-by cleanups.
- include:
  - a short summary of intent and key changes.
  - screenshots/gifs for UI changes.
  - notes about i18n updates when touching `messages/*.json`.
- flag breaking changes early and clearly.
- ensure `npm run lint` and `npm run build` pass before requesting review.

## Security & Safety Constraints

- never commit secrets (tokens, passwords) or private keys.
- use `.env.local` for local secrets (do not commit it).
- do not run destructive git commands (e.g. `git reset --hard`) unless explicitly instructed.
