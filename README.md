# News Portal (React + TypeScript + Vite)

This project fetches news from NewsAPI. To work in production (e.g., on Vercel) without CORS errors and without exposing your API key to the browser, it uses a serverless proxy at `/api/news`.

## What changed (CORS/426 fix)
- Added a Vercel Serverless Function: `api/news/[endpoint].ts` that proxies requests to NewsAPI (`top-headlines` and `everything`).
- The client now calls `/api/news/...` instead of `https://newsapi.org/v2/...`.
- The serverless function reads the API key from a server env var `NEWS_API_KEY` and injects it server-side.
- This prevents browser-to-NewsAPI calls (that cause `426 Upgrade Required`/CORS issues on Vercel) and keeps the key secret.

## Environment variables
- On Vercel (Production/Preview): set `NEWS_API_KEY` in Project Settings → Environment Variables.
- Locally: when using `vercel dev`, create a `.env` (or use Vercel CLI to link/secrets) with:

```
NEWS_API_KEY=your_newsapi_key_here
```

Note: The previous `VITE_API_KEY` is no longer used in the client.

## Local development
You have two options:

1) Vercel Dev (recommended for parity)
- Install Vercel CLI: `npm i -g vercel`
- Run Vercel dev server: `vercel dev` (defaults to port 3000)
- In another terminal, run Vite: `npm run dev`
- The Vite dev server is configured to proxy `/api` to `http://localhost:3000` (see `vite.config.ts`).

2) Build-time only (no serverless)
- Not recommended because the NewsAPI key should not be exposed and CORS will block browser requests in production.

## Deployment (Vercel)
1. Push the repo to GitHub/GitLab/Bitbucket and import into Vercel.
2. In Vercel Project Settings → Environment Variables, add `NEWS_API_KEY` with your NewsAPI key.
3. Deploy. The site will call `/api/news/...`, which runs on Vercel Functions.

## Usage in code
- Base URL for API calls is now `"/api/news"` (see `src/utils/constants.tsx`).
- `src/utils/api.ts` constructs URLs like:
  - `GET /api/news/top-headlines?country=us&category=Business&page=2`
  - `GET /api/news/everything?q=bitcoin&page=1&pageSize=20`
- The serverless function forwards supported query params and adds the API key on the server.

## Troubleshooting
- 401 from NewsAPI: verify `NEWS_API_KEY` value and quota.
- 404 from `/api/news/...`: ensure the path matches `top-headlines` or `everything` and Vercel functions are built.
- Works locally but fails on Vercel: confirm the env var is set on Vercel and that you redeployed after adding it.
- CORS/426 again: ensure the frontend calls `/api/...` and not `https://newsapi.org/...` directly.
