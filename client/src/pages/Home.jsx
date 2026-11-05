import React from 'react';
import { Link } from 'react-router-dom';
import { usePageTitle, CtaBand } from '../components/Layout.jsx';
import SoundVideo, { BgVideo } from '../components/SoundVideo.jsx';
import { MODULES, INDUSTRIES, STEPS } from '../data/content.js';

export default function Home() {
  usePageTitle('');
  return (
    <>
      <section className="hero">
        <BgVideo className="hero-video" src="/assets/network-loop.mp4" poster="/assets/network-poster.jpg" />
        <div className="wrap hero-grid">
          <div>
            <span className="eyebrow">Loyalty. Trust. Growth.</span>
            <h1>Turn every product into a <span className="gradient">lasting connection.</span></h1>
            <p>Loyvexa brings brands, distributors, dealers, retailers and customers closer — with smart loyalty, product authentication and channel engagement.</p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/contact">Book Your Free Demo →</Link>
              <Link className="btn btn-light" to="/platform">Explore Platform</Link>
            </div>
            <div className="hero-proof">
              <div><strong>01</strong>One connected network</div>
              <div><strong>02</strong>Smarter engagement</div>
              <div><strong>03</strong>Measurable growth</div>
            </div>
          </div>
          <div className="visual-stage">
            <div className="orbit" />
            <Link to="/solutions" className="product-card">
              <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=900&q=85" alt="Product scanning technology" />
              <span className="tag">LOYVEXA SMART CONNECT</span>
              <h3>Scan. Connect. Reward.</h3>
              <p>Make every genuine product a new opportunity to engage.</p>
            </Link>
            <Link to="/platform" className="float-chip chip-one">✦ Verified Product</Link>
            <Link to="/platform" className="float-chip chip-two">↗ Dealer Rewards</Link>
            <Link to="/platform" className="float-chip chip-three">◎ Live Insights</Link>
          </div>
        </div>
      </section>

      <div className="trust">Built for connected commerce<strong>One ecosystem. Every channel. Stronger relationships.</strong></div>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">The Loyvexa platform</span>
            <h2>More than loyalty. A smarter way to grow.</h2>
            <p>Bring product trust, channel participation and customer engagement together in one connected experience.</p>
          </div>
          <div className="cards">
            {MODULES.map((m) => (
              <Link key={m.slug} to={`/platform#${m.slug}`} className="card reveal">
                <img src={m.img} alt={m.alt} />
                <div className="card-body">
                  <small>{m.tag}</small>
                  <h3>{m.title}</h3>
                  <p>{m.short}</p>
                  <span className="more">Learn more →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="solution">
        <div className="wrap solution-grid">
          <div className="solution-art reveal">
            <SoundVideo src="/assets/qr-scan-loop.mp4" poster="/assets/qr-scan-poster.jpg" />
          </div>
          <div className="solution-copy reveal">
            <span className="eyebrow">A connected experience</span>
            <h2>Every scan can start a stronger relationship.</h2>
            <p>Give people a simple way to interact with your brand, while your team gets a more organised view of channel engagement.</p>
            <div className="feature"><div className="feature-icon">✓</div><div><h3>Build product confidence</h3><p>Give customers a clear product verification journey.</p></div></div>
            <div className="feature"><div className="feature-icon">✦</div><div><h3>Recognise channel partners</h3><p>Support dealer and retailer participation through loyalty experiences.</p></div></div>
            <div className="feature"><div className="feature-icon">↗</div><div><h3>See engagement more clearly</h3><p>Bring key channel activity into a useful business view.</p></div></div>
            <Link className="btn btn-primary" to="/solutions">See solutions →</Link>
          </div>
        </div>
      </section>

      <section className="showcase">
        <div className="wrap showcase-grid">
          <div className="showcase-copy reveal">
            <span className="eyebrow">Designed for real-world business</span>
            <h2>From the factory floor to the final customer.</h2>
            <p>Loyvexa helps brands strengthen connections across the product journey — from distribution partners to the people who choose your products.</p>
            <div className="stat-row">
              <div className="stat"><strong>360°</strong><span>Channel perspective</span></div>
              <div className="stat"><strong>1 scan</strong><span>Simple interaction</span></div>
              <div className="stat"><strong>1 hub</strong><span>Connected platform</span></div>
            </div>
          </div>
          <div className="showcase-image reveal">
            <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=90" alt="Manufacturing team working with industrial technology" />
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Industries we empower</span>
            <h2>Built for brands with a channel to grow.</h2>
            <p>Flexible experiences for product-led businesses and partner-driven networks.</p>
          </div>
          <div className="industry-grid">
            {INDUSTRIES.map((i) => (
              <Link key={i.name} to="/industries" className="industry reveal">
                <img src={i.img} alt={i.alt} /><span>{i.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="steps">
        <div className="wrap">
          <div className="section-head reveal">
            <span className="eyebrow">Simple by design</span>
            <h2>A clear journey from scan to insight.</h2>
            <p>Keep the experience easy for customers and channel partners, and useful for your brand team.</p>
          </div>
          <div className="step-grid">
            {STEPS.map((s) => (
              <div key={s.n} className="step reveal"><b>{s.n}</b><h3>{s.title}</h3><p>{s.text}</p></div>
            ))}
          </div>
          <div className="center-link"><Link className="btn btn-light" to="/how-it-works">How it works in detail →</Link></div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
