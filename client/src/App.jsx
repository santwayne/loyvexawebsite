import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './style.css';
import Layout from './components/Layout.jsx';
import Home from './pages/Home.jsx';
import { Platform, Solutions, Industries, HowItWorks, Faq, Team, Contact, NotFound } from './pages/Pages.jsx';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/solutions" element={<Solutions />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}
