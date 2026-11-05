import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { usePageTitle, PageHero, CtaBand } from '../components/Layout.jsx';
import SoundVideo from '../components/SoundVideo.jsx';
import DemoForm from '../components/DemoForm.jsx';
import { MODULES, AUDIENCES, INDUSTRIES, STEPS, FAQS, TEAM, CONTACT_EMAIL } from '../data/content.js';

function useHashScroll() {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    return () => clearTimeout(t);
  }, [hash]);
}

export function Platform() {
  usePageTitle('Platform');
  useHashScroll();
  return (
    <>
      <PageHero eyebrow="The Loyvexa platform" title="More than loyalty. A smarter way to grow."
        text="Three connected modules that bring product trust, channel participation and customer engagement into one place." />
      <section>
        <div className="wrap module-list">
          {MODULES.map((m, i) => (
            <div key={m.slug} id={m.slug} className={`module reveal${i % 2 ? ' flip' : ''}`}>
              <div className="module-img"><img src={m.img} alt={m.alt} /></div>
              <div className="module-copy">
                <small>{m.tag}</small>
                <h2>{m.title}</h2>
                <p>{m.short}</p>
                <ul className="ticks">{m.points.map((p) => <li key={p}>{p}</li>)}</ul>
                <Link className="btn btn-primary" to="/contact">Book a demo →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function Solutions() {
  usePageTitle('Solutions');
  return (
    <>
      <PageHero eyebrow="Solutions" title="Every scan can start a stronger relationship."
        text="Loyvexa gives each part of your channel a simple way to take part — and gives your brand team a clear view of what is happening." />
      <section className="solution">
        <div className="wrap solution-grid">
          <div className="solution-art reveal">
            <SoundVideo src="/assets/qr-scan-loop.mp4" poster="/assets/qr-scan-poster.jpg" />
          </div>
          <div className="solution-copy reveal">
            <span className="eyebrow">A connected experience</span>
            <h2>One scan. Three outcomes.</h2>
            <div className="feature"><div className="feature-icon">✓</div><div><h3>Build product confidence</h3><p>Give customers a clear product verification journey.</p></div></div>
            <div className="feature"><div className="feature-icon">✦</div><div><h3>Recognise channel partners</h3><p>Support dealer and retailer participation through loyalty experiences.</p></div></div>
            <div className="feature"><div className="feature-icon">↗</div><div><h3>See engagement more clearly</h3><p>Bring key channel activity into a useful business view.</p></div></div>
          </div>
        </div>
      </section>
      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Built for your whole channel</span>
            <h2>Something for everyone in the chain.</h2>
          </div>
          <div className="audience-grid">
            {AUDIENCES.map((a) => (
              <div key={a.title} className="audience reveal">
                <div className="feature-icon">{a.icon}</div>
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function Industries() {
  usePageTitle('Industries');
  return (
    <>
      <PageHero eyebrow="Industries we empower" title="Built for brands with a channel to grow."
        text="Flexible experiences for product-led businesses and partner-driven networks." />
      <section>
        <div className="wrap industry-cards">
          {INDUSTRIES.map((i) => (
            <div key={i.name} className="card reveal">
              <img src={i.img} alt={i.alt} />
              <div className="card-body">
                <h3>{i.name}</h3>
                <p>{i.text}</p>
                <Link className="more" to="/contact">Talk to us →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand title="Don't see your industry?" text="If you sell through distributors, dealers or retailers, Loyvexa can likely fit. Tell us about your channel." />
    </>
  );
}

export function HowItWorks() {
  usePageTitle('How it works');
  return (
    <>
      <PageHero eyebrow="Simple by design" title="A clear journey from scan to insight."
        text="Keep the experience easy for customers and channel partners, and useful for your brand team." />
      <section className="steps">
        <div className="wrap timeline">
          {STEPS.map((s) => (
            <div key={s.n} className="timeline-item reveal">
              <b>{s.n}</b>
              <div><h3>{s.title}</h3><p>{s.detail}</p></div>
            </div>
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}

export function Faq() {
  usePageTitle('FAQ');
  return (
    <>
      <PageHero eyebrow="Frequently asked questions" title="Questions about Loyvexa?"
        text="A quick overview of the platform and how it can support your channel." />
      <section className="faq-section">
        <div className="wrap">
          <div className="faq-list">
            {FAQS.map((f) => (
              <details key={f.q} className="reveal"><summary>{f.q}</summary><p>{f.a}</p></details>
            ))}
          </div>
          <div className="center-link">
            <p className="muted">Still have a question?</p>
            <Link className="btn btn-primary" to="/contact">Contact us →</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function Team() {
  usePageTitle('Team');
  return (
    <>
      <PageHero eyebrow="The people behind Loyvexa" title="Meet the team behind Loyvexa"
        text="Loyvexa is built by Wayne E Solutions — a product and marketing team helping brands build stronger relationships with their channel." />
      <section>
        <div className="wrap">
          <div className="team-grid">
            {TEAM.map((m) => (
              <div key={m.name} className="team-card reveal">
                <div className="avatar">{m.initials}</div>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </div>
            ))}
          </div>
          <div className="team-cta reveal">
            <h2>Want to talk to us directly?</h2>
            <p>We're happy to walk you through Loyvexa and how it fits your channel.</p>
            <Link className="btn btn-light" to="/contact">Book a Demo ↗</Link>
          </div>
        </div>
      </section>
    </>
  );
}

export function Contact() {
  usePageTitle('Book a Demo');
  return (
    <>
      <PageHero eyebrow="Let's talk growth" title="Tell us what you want to build."
        text="Share a few details about your business. The Loyvexa team will get in touch to understand your requirements and arrange a walkthrough." />
      <section className="contact-section">
        <div className="wrap contact-grid">
          <div className="contact-copy reveal">
            <h2>Book your free demo</h2>
            <p>We'll understand your products, partners and goals, then show you how Loyvexa can fit.</p>
            <div className="contact-points">
              <div>✦ &nbsp;Product authentication</div>
              <div>✦ &nbsp;Dealer & retailer loyalty</div>
              <div>✦ &nbsp;Channel engagement insights</div>
            </div>
            <p className="contact-mail">Prefer email? <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a></p>
          </div>
          <DemoForm />
        </div>
      </section>
    </>
  );
}

export function NotFound() {
  usePageTitle('Page not found');
  return (
    <PageHero eyebrow="404" title="This page doesn't exist." text="The link may be broken or the page may have moved.">
      <div className="hero-actions"><Link className="btn btn-primary" to="/">Go to home →</Link></div>
    </PageHero>
  );
}
