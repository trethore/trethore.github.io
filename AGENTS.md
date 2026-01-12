# Repository Guidelines

This repository contains my personal portfolio website.

## Project Overview & Architecture

- Framework: Next.js (App Router) with React + TypeScript.
- Styling: Tailwind CSS (v4) + utility helpers (`clsx`, `tailwind-merge`, `class-variance-authority`).
- UI building blocks: Radix UI primitives.
- Theme: `next-themes`.
- Animations: GSAP.

High-level structure:

- `src/app/`: Next.js routes, root layout, global styles.
  - `src/app/layout.tsx`: application shell (providers, layout).
  - `src/app/page.tsx`: main landing page.
  - `src/app/globals.css`: global styles and Tailwind layers.
- `src/components/`: reusable React components.
  - `src/components/layout/`: layout-level components.
  - `src/components/sections/`: page sections used by routes.
  - `src/components/ui/`: UI primitives/patterns (shadcn-like).
  - `src/components/icons/`: icon components/assets.
- `src/config/`: data/config used to drive the UI (navigation, projects).
- `src/lib/`: shared utilities and integrations (e.g. `gsap` helpers, generic utils).
- `src/types/`: shared TypeScript types.
- `public/`: static assets.

## Coding Conventions

- TypeScript first: prefer typed props, exported types in `src/types/` when shared.
- Components:
  - Keep components small and focused; extract reusable pieces into `src/components/`.
  - Prefer functional components and hooks.
  - Avoid prop drilling for cross-cutting concerns; use providers in `src/app/layout.tsx` when appropriate.
- Styling:
  - Use Tailwind utilities by default.
  - Use `clsx`/`tailwind-merge` patterns for conditional classes (follow existing `cn`/merge utilities if present).
- Files and naming:
  - Use `PascalCase.tsx` for components and `kebab-case` for assets when applicable.
  - Keep imports tidy and consistent with existing code style.
- Comments:
  - comments must always be in lowercase.
  - comments must explain the why, not the what.
  - keep comments useful; no bloat.
- Safety constraints:
  - never run `npm run dev`.
  - never run `git reset --hard`.

## Commits and Pull Requests

- Commits must explain changes clearly and concisely, including the intent.
- Keep pull requests focused on a single concern; avoid unrelated cleanups.
- Use conventional commit conventions (e.g., `feat(ui): add slider snap support`).
- Flag breaking API changes early.
