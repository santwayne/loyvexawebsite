import React, { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { NAV, CONTACT_EMAIL } from '../data/content.js';

function useReveal(pathname) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
      }),
      { threshold: 0.12 }
    );
    const t = setTimeout(() => document.querySelectorAll('.reveal:not(.visible)').forEach((el) => io.observe(el)), 30);
    return () => { clearTimeout(t); io.disconnect(); };
  }, [pathname]);
}

function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);
  return (
    <header>
      <div className="wrap nav">
        <Link className="brand" to="/" aria-label="Loyvexa home">
          <img src="/assets/loyvexa-logo.png" alt="Loyvexa logo" />
        </Link>
        <nav className="links" aria-label="Main">
          {NAV.map((n) => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
        </nav>
        <div className="nav-right">
          <Link className="btn btn-primary nav-cta" to="/contact">Book a Demo ↗</Link>
          <button className={`burger${open ? ' open' : ''}`} aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>
            <span /><span /><span />
          </button>
        </div>
      </div>
      <nav className={`mobile-menu${open ? ' open' : ''}`} aria-label="Mobile">
        {NAV.map((n) => <NavLink key={n.to} to={n.to}>{n.label}</NavLink>)}
        <Link className="btn btn-primary" to="/contact">Book a Demo ↗</Link>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <Link to="/"><img className="footer-logo" src="/assets/loyvexa-logo.png" alt="Loyvexa" /></Link>
            <p>Loyalty se Business ko Aage Badhao. Connecting products, partners and people through smarter brand engagement.</p>
          </div>
          <div>
            <h4>Explore</h4>
            <Link to="/platform">Platform</Link>
            <Link to="/solutions">Solutions</Link>
            <Link to="/industries">Industries</Link>
            <Link to="/how-it-works">How it works</Link>
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/team">Team</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Book a Demo</Link>
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
          </div>
        </div>
        <div className="copyright">© {new Date().getFullYear()} Loyvexa. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  useReveal(pathname);
  return (
    <>
      <Header />
      <main><Outlet /></main>
      <Footer />
    </>
  );
}

export function usePageTitle(title) {
  useEffect(() => {
    document.title = title ? `${title} — Loyvexa` : 'Loyvexa — Loyalty se Business ko Aage Badhao';
  }, [title]);
}

export function PageHero({ eyebrow, title, text, children }) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        {text && <p>{text}</p>}
        {children}
      </div>
    </section>
  );
}

export function CtaBand({ title = 'Ready to move loyalty forward?', text = 'See how Loyvexa can fit your products, partners and customer journey. Talk to our team about a tailored walkthrough.' }) {
  return (
    <section className="cta">
      <div className="wrap reveal">
        <span className="eyebrow">Let's build stronger connections</span>
        <h2>{title}</h2>
        <p>{text}</p>
        <Link className="btn btn-light" to="/contact">Request a Demo ↗</Link>
      </div>
    </section>
  );
}
