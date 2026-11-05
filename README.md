# Loyvexa Website — React + Node.js

## Local setup
Node.js 20 LTS recommended. Open two terminals.

### API
```bash
cd server
npm install
cp .env.example .env
npm run dev
```
Health check: http://localhost:5000/api/health

### React frontend
```bash
cd client
npm install
npm run dev
```
Open http://localhost:5173

### Production build
```bash
cd client
npm run build
```

## Pages
`/` Home · `/platform` · `/solutions` · `/industries` · `/how-it-works` · `/faq` · `/team` · `/contact` (Book a Demo). Routing uses React Router; `client/vercel.json` sends every route to `index.html` so direct links and refresh work on Vercel.

## Deploying on Vercel
Import the repo and choose **client** as the single project (Root Directory `client`, preset Vite).

The demo form posts to `/api/demo`, served on Vercel by `client/api/demo.js`, which emails each request through [Resend](https://resend.com). Add these in Vercel → Project → Settings → Environment Variables, then redeploy:

| Variable | Value |
|---|---|
| `RESEND_API_KEY` | API key from resend.com |
| `DEMO_TO_EMAIL` | Inbox that receives demo requests (comma-separated for several) |
| `DEMO_FROM_EMAIL` | Optional. Verified sender, e.g. `Loyvexa <noreply@loyvexa.com>` (defaults to Resend's test sender) |

Until these are set, submitting the form opens the visitor's email app with the request pre-filled to hello@loyvexa.com.

In local dev, Vite proxies `/api` to the Express server in `server/` (port 5000).

## Included in this version
- React + Vite frontend with responsive Loyvexa branding
- Node.js + Express API starter
- Demo enquiry form with API submission and validation
- API health endpoint, request size limit, rate limiting and security headers
- FAQ section, industry sections, video and supplied logo assets
- Demo enquiries stored in `server/demo-submissions.jsonl` for local testing

## Before public launch
The API currently stores submissions in a local JSONL file for development/testing. Connect a persistent database/CRM and email notifications before production deployment. Configure `CLIENT_ORIGIN`, HTTPS, backups, privacy/consent wording and final contact details. Unsplash photos require internet; MP4 animations are included locally.
