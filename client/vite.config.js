import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// In local dev, /api is proxied to the Express server in ../server (port 5000).
// On Vercel, /api/demo is served by client/api/demo.js.
export default defineConfig({
  plugins: [react()],
  server: { proxy: { '/api': 'http://localhost:5000' } },
});
