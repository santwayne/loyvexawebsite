// Vercel serverless function: POST /api/demo
// Sends each demo request by email through Resend (https://resend.com).
// Required Vercel env vars:
//   RESEND_API_KEY   — API key from resend.com
//   DEMO_TO_EMAIL    — inbox that receives demo requests (comma-separated for several)
// Optional:
//   DEMO_FROM_EMAIL  — verified sender, e.g. "Loyvexa <noreply@loyvexa.com>"
//                      (defaults to Resend's test sender onboarding@resend.dev)
// Without these vars the endpoint returns 503 and the site falls back to
// opening the visitor's email app.

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ message: 'Method not allowed.' });
  }

  let body = req.body || {};
  if (typeof body === 'string') { try { body = JSON.parse(body); } catch { body = {}; } }
  const { name, email, company, phone, industry = '', message = '' } = body;

  if (![name, email, company, phone].every((v) => typeof v === 'string' && v.trim()))
    return res.status(400).json({ message: 'Please complete name, work email, company and phone number.' });
  if (!EMAIL_RE.test(email.trim()))
    return res.status(400).json({ message: 'Please enter a valid email address.' });

  const r = {
    name: name.trim().slice(0, 120),
    email: email.trim().slice(0, 254),
    company: company.trim().slice(0, 160),
    phone: phone.trim().slice(0, 40),
    industry: String(industry).slice(0, 100),
    message: String(message).slice(0, 3000),
  };

  const { RESEND_API_KEY, DEMO_TO_EMAIL, DEMO_FROM_EMAIL } = process.env;
  if (!RESEND_API_KEY || !DEMO_TO_EMAIL)
    return res.status(503).json({ message: 'Demo form email is not configured yet.' });

  const rows = [['Name', r.name], ['Email', r.email], ['Company', r.company], ['Phone', r.phone], ['Industry', r.industry || '-']]
    .map(([k, v]) => `<tr><td style="padding:6px 14px 6px 0;color:#63758a">${k}</td><td style="padding:6px 0"><b>${esc(v)}</b></td></tr>`).join('');
  const html = `<h2 style="font-family:sans-serif;color:#071a33">New Loyvexa demo request</h2>
<table style="font-family:sans-serif;font-size:14px">${rows}</table>
<p style="font-family:sans-serif;font-size:14px;white-space:pre-wrap">${esc(r.message || '')}</p>`;

  try {
    const resp = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: DEMO_FROM_EMAIL || 'Loyvexa Website <onboarding@resend.dev>',
        to: DEMO_TO_EMAIL.split(',').map((s) => s.trim()).filter(Boolean),
        reply_to: r.email,
        subject: `Loyvexa demo request — ${r.company}`,
        html,
      }),
    });
    if (!resp.ok) {
      console.error('Resend error', resp.status, await resp.text());
      return res.status(502).json({ message: 'Could not send your request right now.' });
    }
    return res.status(201).json({ message: 'Demo request received.' });
  } catch (err) {
    console.error('Demo email failed', err);
    return res.status(502).json({ message: 'Could not send your request right now.' });
  }
}
