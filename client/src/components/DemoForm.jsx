import React, { useState } from 'react';
import { CONTACT_EMAIL, INDUSTRIES } from '../data/content.js';

const API = import.meta.env.VITE_API_URL || '';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function mailtoFallback(p) {
  const body = [
    `Name: ${p.name}`, `Email: ${p.email}`, `Company: ${p.company}`, `Phone: ${p.phone}`,
    `Industry: ${p.industry || '-'}`, '', p.message || '',
  ].join('\n');
  window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Loyvexa Demo Request — ' + p.company)}&body=${encodeURIComponent(body)}`;
}

export default function DemoForm() {
  const [status, setStatus] = useState({ text: '', type: '' });
  const [sending, setSending] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const p = Object.fromEntries(new FormData(form).entries());
    if (!EMAIL_RE.test(String(p.email).trim())) {
      setStatus({ text: 'Please enter a valid email address.', type: 'error' });
      return;
    }
    setSending(true);
    setStatus({ text: '', type: '' });
    try {
      const res = await fetch(`${API}/api/demo`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(p),
      });
      const result = await res.json().catch(() => ({}));
      if (res.status === 400) throw Object.assign(new Error(result.message || 'Please check the form.'), { user: true });
      if (!res.ok) throw new Error('unavailable');
      setStatus({ text: 'Thank you! Your demo request has been received. Our team will get in touch soon.', type: 'success' });
      form.reset();
    } catch (err) {
      if (err.user) {
        setStatus({ text: err.message, type: 'error' });
      } else {
        // API not configured or unreachable: hand over to the visitor's email app
        mailtoFallback(p);
        setStatus({ text: `Opening your email app to send this request to ${CONTACT_EMAIL}.`, type: 'success' });
      }
    } finally {
      setSending(false);
    }
  };

  return (
    <form className="demo-form reveal" onSubmit={submit} noValidate={false}>
      <h3>Request a Demo</h3>
      <p>Fields marked * are required.</p>
      <div className="form-grid">
        <label>Full name *<input name="name" required autoComplete="name" placeholder="Your full name" /></label>
        <label>Work email *<input name="email" type="email" required autoComplete="email" placeholder="you@company.com" /></label>
        <label>Company name *<input name="company" required autoComplete="organization" placeholder="Your company" /></label>
        <label>Phone number *<input name="phone" required autoComplete="tel" placeholder="+91..." /></label>
        <label className="full">Industry
          <select name="industry" defaultValue="">
            <option value="">Select industry</option>
            {INDUSTRIES.map((i) => <option key={i.name}>{i.name}</option>)}
            <option>Other</option>
          </select>
        </label>
        <label className="full">What would you like to improve?
          <textarea name="message" rows="4" placeholder="Tell us about your products, channel partners or goals..." />
        </label>
      </div>
      <button className="btn btn-primary form-submit" type="submit" disabled={sending}>
        {sending ? 'Sending...' : 'Send Demo Request →'}
      </button>
      <div className={`form-status ${status.type}`} role="status" aria-live="polite">{status.text}</div>
      <small className="form-note">Your details will only be used to respond to this enquiry.</small>
    </form>
  );
}
