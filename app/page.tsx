'use client';

import Image from 'next/image';
import Link from 'next/link';

const SERVICES = [
  {
    num: '01',
    name: 'Web Development',
    desc: 'High-performance websites and web applications. From landing pages that convert to full-stack platforms that scale — built clean, fast, and right.',
  },
  {
    num: '02',
    name: 'Brand Design',
    desc: 'Identity systems that mean something. Logo, typography, colour, and visual language crafted for distinction — not trend-chasing.',
  },
  {
    num: '03',
    name: 'Live Commerce',
    desc: 'Real-time selling that drives revenue. Production, talent coordination, and platform strategy for live shopping experiences that convert.',
  },
  {
    num: '04',
    name: 'Operations',
    desc: 'The systems behind the scenes. Project management, workflow design, and operational support that keeps your business running without friction.',
  },
];

const MARQUEE_ITEMS = [
  'Web Development',
  'Brand Design',
  'Live Commerce',
  'Operations',
  'Digital Solutions',
  'Creative Strategy',
  'OmniRay Group',
];

const PARTNERS = [
  { title: 'Brand Identity',        type: 'Brand Design · 2024' },
  { title: 'E-Commerce Platform',   type: 'Web Development · 2024' },
  { title: 'Live Shopping Event',   type: 'Live Commerce · 2024' },
  { title: 'Operations Overhaul',   type: 'Operations · 2025' },
  { title: 'Digital Brand System',  type: 'Brand Design · 2025' },
];

// SVG sunburst rays – 18 spokes at 20° intervals
const RAYS = Array.from({ length: 18 }, (_, i) => i * 20);

export default function Home() {
  return (
    <div className="bg-[#0A0A0A] text-[#F5F0E8] overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <header className="navbar fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 h-26">
        <Image src="/OmniRay.png" alt="OmniRay logo" width={220} height={24} priority className="pt-4" />

        <nav className="hidden md:flex gap-8">
          {['Services', 'About', 'Partners', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[0.7rem] tracking-[0.2em] uppercase text-[#181818] transition-colors duration-200"
            >
              {item}
            </Link>
          ))}
        </nav>

        <a href="#contact">
          <button className="btn-gold hidden md:block">Get a Quote</button>
        </a>

        {/* Mobile hamburger placeholder */}
        <div className="md:hidden flex flex-col gap-1.5 cursor-pointer">
          <span className="block w-6 h-px bg-[#F5A623]" />
          <span className="block w-6 h-px bg-[#F5A623]" />
          <span className="block w-6 h-px bg-[#F5A623]" />
        </div>
      </header>

      {/* ─── HERO ─── */}
      <main>
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-16">

          {/* Sunburst background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <svg
              viewBox="0 0 800 800"
              xmlns="http://www.w3.org/2000/svg"
              className="w-[140vmax] h-[140vmax] opacity-[0.11] animate-spin-slow"
            >
              <g transform="translate(400,400)">
                {RAYS.map((deg) => (
                  <polygon
                    key={deg}
                    points="0,-420 18,-30 -18,-30"
                    fill="#F5A623"
                    transform={`rotate(${deg})`}
                  />
                ))}
              </g>
            </svg>
          </div>

          {/* Vignette overlay */}
          <div className="hero-vignette absolute inset-0 z-[1] pointer-events-none" />

          {/* Hero content */}
          <div className="relative z-[2] text-center px-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6 animate-fade-in-up">
              <span className="block w-10 h-px bg-[#F5A623] opacity-50" />
              <span className="text-[0.65rem] tracking-[0.4em] uppercase text-[#F5A623]">
                Jamaica's Creative Conglomerate
              </span>
              <span className="block w-10 h-px bg-[#F5A623] opacity-50" />
            </div>

            <h1 className="font-display text-[clamp(5rem,14vw,11rem)] leading-[0.88] tracking-wide text-[#F5F0E8] animate-fade-in-up-delay-1">
              OMNI<br />
              <span className="text-[#F5A623]">RAY</span>
              <br />GROUP
            </h1>

            <p className="mt-6 text-sm text-[rgba(245,240,232,0.45)] tracking-[0.08em] font-light animate-fade-in-up-delay-2">
              Web Development&nbsp; · &nbsp;Brand Design&nbsp; · &nbsp;Live Commerce&nbsp; · &nbsp;Operations
            </p>

            <div className="mt-10 flex gap-4 justify-center flex-wrap animate-fade-in-up-delay-3">
              <a href="#partners">
                <button className="btn-gold">View Our Work</button>
              </a>
              <a href="#contact">
                <button className="btn-ghost">Start a Project</button>
              </a>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[2] flex flex-col items-center gap-2">
            <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[rgba(245,240,232,0.25)]">Scroll</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#F5A623] to-transparent animate-scroll-line" />
          </div>
        </section>

        {/* ─── MARQUEE ─── */}
        <div className="border-y border-[rgba(245,166,35,0.12)] py-3 overflow-hidden">
          <div className="animate-marquee gap-0">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span
                key={i}
                className="font-display text-base tracking-[0.25em] text-[rgba(245,166,35,0.28)] px-10 whitespace-nowrap border-r border-[rgba(245,166,35,0.12)]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* ─── SERVICES ─── */}
        <section id="services" className="py-28 max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="mb-4 flex items-center gap-3">
            <span className="block w-6 h-px bg-[#F5A623]" />
            <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#F5A623]">What We Do</span>
          </div>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[#F5F0E8] mb-16">
            Four Disciplines.<br />One Roof.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[rgba(245,166,35,0.1)] border border-[rgba(245,166,35,0.1)]">
            {SERVICES.map((s) => (
              <div key={s.num} className="service-card p-8 md:p-10">
                <div className="font-display text-[3.5rem] leading-none text-[rgba(245,166,35,0.1)] mb-4 transition-colors duration-300 group-hover:text-[rgba(245,166,35,0.2)]">
                  {s.num}
                </div>
                <h3 className="font-display text-[1.5rem] tracking-wide text-[#F5F0E8] mb-3">{s.name}</h3>
                <p className="text-[0.82rem] text-[rgba(245,240,232,0.42)] leading-[1.7] font-light">{s.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ─── ABOUT STRIP ─── */}
        <section id="about" className="about-strip py-24">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <div>
              <h2 className="font-display text-[clamp(2.8rem,5vw,5.5rem)] leading-[0.93] text-[#0A0A0A]">
                We Don't<br />Freelance.<br />We Build.
              </h2>
            </div>
            <div>
              <p className="text-[0.92rem] text-[rgba(10,10,10,0.65)] leading-[1.8] font-light mb-8">
                OmniRay Group is a Caribbean-rooted creative conglomerate built to replace the chaos
                of juggling multiple vendors. We combine web development, brand design, live commerce,
                and operations under one roof — so your vision moves from concept to execution without
                getting lost in translation.
              </p>
              <div className="flex gap-10">
                {[['4', 'Disciplines'], ['1', 'Point of Contact'], ['∞', 'Ambition']].map(([num, label]) => (
                  <div key={label}>
                    <div className="font-display text-[2.8rem] leading-none text-[#0A0A0A]">{num}</div>
                    <div className="text-[0.65rem] tracking-[0.2em] uppercase text-[rgba(10,10,10,0.5)] mt-1">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ─── PARTNERS / PORTFOLIO ─── */}
        <section id="partners" className="py-28 max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="flex items-end justify-between mb-16 flex-wrap gap-6">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-[#F5A623]" />
                <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#F5A623]">Our Work</span>
              </div>
              <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] text-[#F5F0E8]">
                Partners &<br />Portfolio
              </h2>
            </div>
            <button className="btn-ghost self-end">View All Work</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[rgba(245,166,35,0.1)]">
            {PARTNERS.map((p) => (
              <div key={p.title} className="partner-card relative aspect-[4/3] bg-[#0A0A0A] overflow-hidden cursor-pointer group">
                {/* Placeholder background */}
                <div className="absolute inset-0 bg-[rgba(245,166,35,0.03)] flex flex-col items-center justify-center gap-3 transition-colors duration-300 group-hover:bg-[rgba(245,166,35,0.07)]">
                  <div className="w-12 h-12 border border-[rgba(245,166,35,0.18)] flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(245,166,35,0.3)" strokeWidth="1.5">
                      <rect x="3" y="3" width="18" height="18" rx="2" />
                    </svg>
                  </div>
                  <span className="text-[0.6rem] tracking-[0.3em] uppercase text-[rgba(245,240,232,0.18)]">
                    {p.title}
                  </span>
                </div>
                {/* Hover overlay */}
                <div className="partner-card-overlay absolute inset-0 bg-[rgba(10,10,10,0.92)] flex flex-col justify-end p-6">
                  <div className="font-display text-[1.35rem] text-[#F5A623] mb-1">{p.title}</div>
                  <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[rgba(245,240,232,0.38)]">{p.type}</div>
                </div>
              </div>
            ))}
            {/* CTA slot */}
            <div className="relative aspect-[4/3] bg-[rgba(245,166,35,0.04)] flex flex-col items-center justify-center text-center p-6 cursor-pointer group border border-[rgba(245,166,35,0.08)]">
              <div className="font-display text-[1.8rem] text-[#F5A623] mb-1">Your Project</div>
              <div className="text-[0.6rem] tracking-[0.25em] uppercase text-[rgba(245,240,232,0.22)]">Next in line</div>
            </div>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="py-28 border-t border-[rgba(245,166,35,0.1)] bg-[rgba(245,166,35,0.02)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left */}
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="block w-6 h-px bg-[#F5A623]" />
                <span className="text-[0.65rem] tracking-[0.35em] uppercase text-[#F5A623]">Let's Talk</span>
              </div>
              <h2 className="font-display text-[clamp(3rem,5vw,5rem)] leading-[0.93] text-[#F5F0E8] mb-6">
                Ready to<br />
                <span className="text-[#F5A623]">Radiate?</span>
              </h2>
              <p className="text-[0.85rem] text-[rgba(245,240,232,0.38)] leading-[1.8] font-light mb-10">
                Tell us what you're building. We'll tell you how we can make it happen — across as
                many of our disciplines as your project needs.
              </p>
              <div className="flex flex-col gap-0 divide-y divide-[rgba(245,166,35,0.15)]">
                {[
                  ['hello@omniray.com', 'Email'],
                  ['@omniraygroup', 'Instagram'],
                  ['OmniRay Group', 'LinkedIn'],
                ].map(([label, platform]) => (
                  <a
                    key={platform}
                    href="#"
                    className="flex justify-between items-center py-4 text-[0.72rem] tracking-[0.15em] uppercase text-[rgba(245,240,232,0.45)] hover:text-[#F5A623] transition-colors duration-200 group"
                  >
                    <span>{platform}</span>
                    <span className="text-sm opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">→</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Right – form */}
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Your name"
                className="field-underline"
              />
              <input
                type="email"
                placeholder="Email address"
                className="field-underline"
              />
              <select className="field-underline cursor-pointer appearance-none">
                <option value="" disabled>Service needed</option>
                <option>Web Development</option>
                <option>Brand Design</option>
                <option>Live Commerce</option>
                <option>Operations</option>
                <option>Multiple services</option>
              </select>
              <textarea
                placeholder="Tell us about your project"
                rows={5}
                className="field-underline resize-none"
              />
              <button className="btn-gold w-full mt-2">Send Message</button>
            </div>

          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="bg-[#0A0A0A] border-t border-[rgba(245,166,35,0.1)] px-6 md:px-12 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-[1.15rem] tracking-[0.2em] text-[#F5A623]">OmniRay Group</div>
        <p className="text-[0.65rem] tracking-[0.15em] uppercase text-[rgba(245,240,232,0.2)]">
          © {new Date().getFullYear()} OmniRay Group. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Instagram'].map((link) => (
            <a
              key={link}
              href="#"
              className="text-[0.65rem] tracking-[0.15em] uppercase text-[rgba(245,240,232,0.2)] hover:text-[#F5A623] transition-colors duration-200"
            >
              {link}
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
}