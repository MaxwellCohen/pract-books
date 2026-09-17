# Pracht App

## Commands

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run preview` — build and serve the production build locally
- `npm run deploy` — build and deploy

## Scaffolding

Use the CLI to generate new files:

- `pracht generate route --path /about` — add a route
- `pracht generate shell --name app` — add a shell
- `pracht generate middleware --name auth` — add middleware
- `pracht generate api --path /health --methods GET` — add an API route
- `pracht generate capability --name notes.search --effect read --expose http` — add a capability (agent-callable operation)
- `pracht doctor` — check project health
- `pracht verify` — enforce route and constraint invariants
- `pracht plan --write` — refresh the committed `.pracht/app-graph.json` snapshot after route changes
- `pracht report` — PR-ready markdown summary (plan diff, verify, budgets)
- `pracht llms --write` — write an `llms.txt` authoring guide for coding agents

## Project structure

This app uses **manifest routing**.

- `src/routes.ts` — route manifest (defines all routes and shells)
- `src/routes/` — route components and loaders
- `src/routes/not-found.tsx` — not-found page, wired via `notFound` in the manifest
- `src/shells/` — shell components (layouts)
- `src/api/` — API route handlers
- `vite.config.ts` — Vite config with Vercel, Netlify, or Cloudflare adapters
- `src/styles/global.css` — Tailwind CSS entry stylesheet, imported by the shell
- `wrangler.jsonc` — Cloudflare Workers configuration
- `src/env.d.ts` — TypeScript types for Cloudflare bindings

## Conventions

- Navigate by route id, not by path: `<Link route="home">`, `href("home")`, `navigate({ route: "home" })`. Dynamic routes take their segments through `params`. `<Link href>` is a type error — the id survives a path change and `pracht typegen` types both the id and its params. Use a plain `<a href>` for external and user-provided URLs.
- Run `pracht typegen` once to type route ids, params, and `apiFetch()`; `pracht dev` keeps them in sync.

## Agent tooling

- `.claude/skills/` — the 5 core pracht skills (pracht-scaffold, pracht-debug, pracht-deploy, upgrade-pracht, add-capabilities); invoke with `/<skill-name>`
- More skills — audits, testing scaffolds, and the `add-*` integrations — are published at https://pracht.resynapse.dev/.well-known/agent-skills/index.json. Run `pracht skills list` to see the catalog and `pracht skills add <name...>` to install one; do not hand-write a SKILL.md that already exists there.
- `.mcp.json` — registers the `pracht dev-mcp` server so MCP clients can inspect the app graph, run doctor/verify, and scaffold natively
