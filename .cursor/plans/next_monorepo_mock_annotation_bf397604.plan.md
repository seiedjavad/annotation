---
name: Next Monorepo Mock Annotation
overview: Create a new standalone Next.js monorepo (Node 24 + nvm) and implement a mock annotation page inspired by the current `cdAccRej`/`cdImageAccRej` interaction model, including Prompt/Context/Responses without backend dependencies.
todos:
  - id: bootstrap-monorepo
    content: Scaffold standalone pnpm+turbo monorepo with Node 24 nvm support and shared configs
    status: completed
  - id: create-web-app
    content: Create Next.js app and route for annotation page (`/annotation`) with App Router and TypeScript
    status: in_progress
  - id: extract-ui-components
    content: Implement reusable annotation UI components and accept/reject response item behavior
    status: pending
  - id: add-mock-data
    content: Add typed local mock dataset and wire page state to it (no API)
    status: pending
  - id: wire-validation-and-scripts
    content: Add submit validation/reset behavior and verify dev/build/lint/typecheck scripts in turbo pipeline
    status: pending
  - id: write-readme-usage
    content: Document setup/run steps with nvm + Node 24 instructions
    status: pending
isProject: false
---

# Next.js Monorepo + Mock Annotation Plan

## Scope and defaults
- Build a **new standalone monorepo** using `pnpm workspaces + Turborepo`.
- Pin runtime to **Node 24** with `.nvmrc` and `engines` to match your nvm workflow.
- Implement a single web app that renders an annotation screen with `Prompt`, `Context`, `Images`, and `Responses` using fully mocked data.

## What we will model from current code
- Reuse the core interaction pattern from [`/Users/seyyedjavadhosseini/projects/calibrion-frontend/frontend/labelview-app/src/features/annotation/components/cdAccRej/cdAccRejResponse.tsx`](/Users/seyyedjavadhosseini/projects/calibrion-frontend/frontend/labelview-app/src/features/annotation/components/cdAccRej/cdAccRejResponse.tsx):
  - mapping over response options (`watch('response.options')`) and rendering per-item accept/reject controls
  - submit-disable rule when any item is unanswered
  - reset and edit-mode style behavior (in mock form)
- Borrow layout cues from image-based variant in [`/Users/seyyedjavadhosseini/projects/calibrion-frontend/frontend/labelview-app/src/features/annotation/components/cdImageAccRej/cdImageAccRejResponse.tsx`](/Users/seyyedjavadhosseini/projects/calibrion-frontend/frontend/labelview-app/src/features/annotation/components/cdImageAccRej/cdImageAccRejResponse.tsx).

## Monorepo structure
- `apps/web`: Next.js app (App Router + TypeScript)
- `packages/ui`: shared presentational components (cards/buttons/badges/layout wrappers)
- `packages/mock-data`: static typed mock dataset + generators/helpers
- root configs: `turbo.json`, `pnpm-workspace.yaml`, `.nvmrc`, root `package.json`, shared `tsconfig` base

## Page and component plan
- Route: `apps/web/app/annotation/page.tsx`
- Split UI into focused components:
  - `AnnotationShell` (two-column layout)
  - `PromptContextPanel`
  - `ReferenceImagesPanel`
  - `ResponsesPanel` (ordered items with accept/reject)
  - `ResponseItem` (single option row/card)
- Local state (React) for answers and tags; keep behavior aligned with existing accept/reject UX:
  - `undone | accept | reject`
  - disable submit if any `undone`
  - reset returns to initial mocked state
- Add lightweight visual styling close to your screenshot (clean card layout, placeholders/drop zones, footer controls).

## Mock data strategy
- Define typed interfaces (`Prompt`, `Context`, `ResponseOption`, `ReferenceImage`, `AnnotationTask`).
- Seed at least one realistic task object with:
  - prompt text
  - context text
  - left-side source images
  - right-side candidate responses + empty ranking/drop placeholders
- Keep all mock data local (no API calls), but shape it so it can be swapped with real backend payload later.

## Validation and dev UX
- Add simple client-side validation message for incomplete responses.
- Ensure scripts are ready: `dev`, `build`, `lint`, `typecheck` at root via turbo pipelines.
- Confirm Node version guidance in README with `nvm use`.

## Delivery checklist
- Monorepo boots with `pnpm install && pnpm dev`.
- Visiting `/annotation` shows fully functional mock page.
- Accept/reject, reset, and submit-disable logic work as intended.
- No backend dependency required.