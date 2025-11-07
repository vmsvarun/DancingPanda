# Landing

This folder contains the static site for the landing page (served by Cloudflare Wrangler).

How to run locally from the repository root:

1. Install dependencies at the repo root if needed:

   npm install

2. Start the landing dev server from the repo root:

   npm run dev:landing

This runs `wrangler dev --config ./landing/wrangler.jsonc` which serves `landing/public/index.html` at http://localhost:8787/.
