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

## Included in this version
- React + Vite frontend with responsive Loyvexa branding
- Node.js + Express API starter
- Demo enquiry form with API submission and validation
- API health endpoint, request size limit, rate limiting and security headers
- FAQ section, industry sections, video and supplied logo assets
- Demo enquiries stored in `server/demo-submissions.jsonl` for local testing

## Before public launch
The API currently stores submissions in a local JSONL file for development/testing. Connect a persistent database/CRM and email notifications before production deployment. Configure `CLIENT_ORIGIN`, HTTPS, backups, privacy/consent wording and final contact details. Unsplash photos require internet; MP4 animations are included locally.
