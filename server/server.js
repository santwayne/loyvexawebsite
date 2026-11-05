import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(helmet());
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173' }));
app.use(express.json({ limit: '20kb' }));
app.use('/api/', rateLimit({ windowMs: 15 * 60 * 1000, limit: 60, standardHeaders: 'draft-7', legacyHeaders: false }));

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'Loyvexa API' }));
app.post('/api/demo', (req, res) => {
  const { name, email, company, phone, industry = '', message = '' } = req.body || {};
  if (![name, email, company, phone].every(v => typeof v === 'string' && v.trim()))
    return res.status(400).json({ message: 'Please complete name, work email, company and phone number.' });
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()))
    return res.status(400).json({ message: 'Please enter a valid email address.' });
  const record = { name:name.trim().slice(0,120), email:email.trim().slice(0,254), company:company.trim().slice(0,160), phone:phone.trim().slice(0,40), industry:String(industry).slice(0,100), message:String(message).slice(0,3000), submittedAt:new Date().toISOString() };
  fs.appendFileSync(path.join(__dirname, 'demo-submissions.jsonl'), JSON.stringify(record) + '\n');
  return res.status(201).json({ message: 'Demo request received.' });
});
app.listen(PORT, () => console.log(`Loyvexa API running at http://localhost:${PORT}`));
