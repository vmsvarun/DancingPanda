# Aruaan

Monorepo containing the main project and a small `landing` site served with Cloudflare Workers (Wrangler).

Landing (static site)
- Location: `landing/`
- Entrypoint: `landing/public/index.html`

Quick commands (from repo root)

- Install dependencies:

	npm install

- Start the landing dev server (Wrangler):

	npm run dev:landing

	This runs `wrangler dev --config ./landing/wrangler.jsonc` and serves the landing at http://localhost:8787/.

- Serve the landing statically (no Wrangler):

	python3 -m http.server 8787 --directory ./landing/public

Makefile targets:
- `make install` — runs `npm install` at repo root
- `make dev-landing` — starts `npm run dev:landing`
- `make serve-static` — starts a Python static server for the landing
- `make clean` — removes generated node_modules directories
