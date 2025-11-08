# Dancing Kitties Web App

Single-page static experience served by Cloudflare Workers via Wrangler.

## Local development

1. Install deps:

   ```sh
   npm install
   ```

2. Run the Worker locally:

   ```sh
   npm run dev
   ```

Wrangler serves the contents of `public/` at http://localhost:8787/.

## Deploy

```sh
npm run deploy
```
