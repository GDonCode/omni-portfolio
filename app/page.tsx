'use client';

import { useEffect, useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const NAV = ['Services', 'Process', 'Work', 'Contact'];

const SERVICES = [
  {
    num: '01',
    name: 'Web Development',
    desc: 'High-performance websites and web applications. From landing pages that convert to full-stack platforms that scale — built clean, fast, and right.',
    accent: 'bg-cobalt',
    icon: (
      <path d="M8 9l-4 3 4 3M16 9l4 3-4 3M13.5 6l-3 12" />
    ),
  },
  {
    num: '02',
    name: 'Brand Design',
    desc: 'Identity systems that mean something. Logo, typography, colour, and visual language crafted for distinction — not trend-chasing.',
    accent: 'bg-steel',
    icon: (
      <>
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="3" />
      </>
    ),
  },
  {
    num: '03',
    name: 'Live Commerce',
    desc: 'Real-time selling that drives revenue. Production, talent coordination, and platform strategy for live shopping experiences that convert.',
    accent: 'bg-jungle',
    icon: (
      <>
        <rect x="3" y="6" width="13" height="12" rx="2" />
        <path d="M16 10l5-3v10l-5-3" />
      </>
    ),
  },
  {
    num: '04',
    name: 'Operations',
    desc: 'The systems behind the scenes. Project management, workflow design, and operational support that keeps your business running without friction.',
    accent: 'bg-forest',
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" />
      </>
    ),
  },
];

const PROCESS = [
  { step: 'See', desc: 'We start by listening — your goals, your audience, and the gaps holding you back.' },
  { step: 'Shape', desc: 'Strategy, brand and product design come together into one clear plan.' },
  { step: 'Build', desc: 'Engineering, production and operations execute it — under one roof, on one timeline.' },
  { step: 'Grow', desc: 'We launch, measure and keep refining so the work keeps compounding.' },
];

const MARQUEE_ITEMS = [
  'Web Development',
  'Brand Design',
  'Live Commerce',
  'Operations',
  'Digital Solutions',
  'Creative Strategy',
];

const WORK = [
  { title: 'Brand Identity',       type: 'Brand Design',    year: '2024', art: 'from-cobalt to-steel' },
  { title: 'E-Commerce Platform',  type: 'Web Development', year: '2024', art: 'from-ocean to-jungle' },
  { title: 'Live Shopping Event',  type: 'Live Commerce',   year: '2024', art: 'from-jungle to-forest' },
  { title: 'Operations Overhaul',  type: 'Operations',      year: '2025', art: 'from-forest to-cobalt' },
  { title: 'Digital Brand System', type: 'Brand Design',    year: '2025', art: 'from-steel to-grass' },
];

const CONTACTS = [
  { label: 'Email', value: 'hello@omniray.com', href: 'mailto:hello@omniray.com' },
  { label: 'Instagram', value: '@omniraygroup', href: '#' },
  { label: 'LinkedIn', value: 'OmniRay Group', href: '#' },
];

function Eyebrow({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs font-semibold tracking-[0.14em] uppercase ${
        dark ? 'bg-snow/10 text-grass' : 'bg-forest/10 text-forest'
      }`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${dark ? 'bg-grass' : 'bg-jungle'}`} />
      {children}
    </span>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  // Highlight the nav link for whichever section is in the middle of the viewport
  useEffect(() => {
    const sections = NAV.map((item) => document.getElementById(item.toLowerCase())).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: '-50% 0px -50% 0px' },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const subject = `New project enquiry — ${data.get('service') || 'General'}`;
    const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\n\n${data.get('message')}`;
    window.location.href = `mailto:hello@omniray.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="overflow-x-hidden">

      {/* ─── NAVBAR ─── */}
      <header className="fixed inset-x-0 top-0 z-50 bg-ocean shadow-[0_8px_30px_-12px_rgba(0,74,173,0.6)]">
        <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between gap-6 px-5 md:px-10">
          <Link href="#top" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
            <Image
              src="/omniray-emblem.webp"
              alt=""
              width={72}
              height={72}
              priority
              className="drop-shadow-[0_4px_10px_rgba(0,0,0,0.25)]"
            />
            <span className="font-display text-2xl font-extrabold tracking-tight text-snow">
              OmniRay
            </span>
          </Link>

          {/* Signature square link container */}
          <nav className="hidden items-center gap-1 border border-snow/25 bg-snow/10 p-1.5 md:flex">
            {NAV.map((item) => {
              const id = item.toLowerCase();
              const active = activeSection === id;
              return (
                <Link
                  key={item}
                  href={`#${id}`}
                  aria-current={active ? 'true' : undefined}
                  className={`px-5 py-2.5 text-sm font-bold uppercase tracking-[0.12em] transition-colors ${
                    active ? 'bg-snow text-ocean' : 'text-snow hover:bg-snow/15'
                  }`}
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          <a href="#contact" className="btn-square hidden md:inline-flex">
            Get a Quote <span aria-hidden>→</span>
          </a>

          <button
            type="button"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((o) => !o)}
            className="flex h-12 w-12 flex-col items-center justify-center gap-1.5 border border-snow/25 bg-snow/10 md:hidden"
          >
            <span className={`block h-0.5 w-5 bg-snow transition-transform ${menuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`block h-0.5 w-5 bg-snow transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-5 bg-snow transition-transform ${menuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-snow/15 bg-ocean px-5 pb-6 pt-4 md:hidden">
            <div className="flex flex-col gap-1 border border-snow/25 bg-snow/10 p-1.5">
              {NAV.map((item) => {
                const id = item.toLowerCase();
                return (
                  <Link
                    key={item}
                    href={`#${id}`}
                    onClick={() => setMenuOpen(false)}
                    className={`px-4 py-3 text-sm font-bold uppercase tracking-[0.12em] ${
                      activeSection === id ? 'bg-snow text-ocean' : 'text-snow hover:bg-snow/15'
                    }`}
                  >
                    {item}
                  </Link>
                );
              })}
            </div>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-square mt-3 flex justify-center">
              Get a Quote <span aria-hidden>→</span>
            </a>
          </nav>
        )}
      </header>

      <main id="top">

        {/* ─── HERO ─── */}
        <section className="hero-bg relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
          <div className="dot-grid pointer-events-none absolute inset-0" />

          <div className="relative mx-auto grid max-w-[1240px] items-center gap-14 px-5 md:px-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <div className="fade-up">
                <Eyebrow>Jamaica&apos;s Creative Conglomerate</Eyebrow>
              </div>

              <h1 className="fade-up-1 mt-6 font-display text-[clamp(2.75rem,7vw,5.5rem)] font-extrabold leading-[0.98] tracking-tight">
                We see further.<br />
                <span className="text-gradient">We grow what we build.</span>
              </h1>

              <p className="fade-up-2 mt-6 max-w-xl text-lg leading-relaxed text-carbon/70">
                OmniRay Group brings web development, brand design, live commerce and operations
                under one roof — one team with the vision to plan it and the roots to make it last.
              </p>

              <div className="fade-up-3 mt-9 flex flex-wrap gap-3">
                <a href="#contact" className="btn btn-primary">
                  Start a Project
                  <span aria-hidden>→</span>
                </a>
                <a href="#work" className="btn btn-outline">View Our Work</a>
              </div>

              <dl className="fade-up-3 mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-carbon/10 pt-8">
                {[['4', 'Disciplines'], ['1', 'Point of contact'], ['∞', 'Ambition']].map(([num, label]) => (
                  <div key={label}>
                    <dt className="sr-only">{label}</dt>
                    <dd className="font-display text-4xl font-extrabold text-cobalt">{num}</dd>
                    <dd className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-carbon/55">{label}</dd>
                  </div>
                ))}
              </dl>
            </div>

            {/* Emblem */}
            <div className="relative mx-auto aspect-square w-full max-w-[480px]">
              <div className="animate-spin-slow absolute inset-0 rounded-full border-2 border-dashed border-steel/30" />
              <div className="animate-spin-slower absolute inset-[9%] rounded-full border border-jungle/40" />
              <div className="absolute inset-[16%] rounded-full bg-gradient-to-br from-cobalt/15 via-snow to-grass/30 blur-sm" />
              <div className="animate-float absolute inset-[6%]">
                <Image
                  src="/omniray-emblem.webp"
                  alt="OmniRay emblem — a golden eye encircled by a green ribbon and vines"
                  fill
                  priority
                  sizes="(max-width: 1024px) 80vw, 440px"
                  className="object-contain drop-shadow-[0_30px_40px_rgba(0,128,55,0.25)]"
                />
              </div>

              {/* Floating discipline chips */}
              {[
                { label: 'Web', pos: 'left-0 top-[14%]', dot: 'bg-cobalt' },
                { label: 'Brand', pos: 'right-0 top-[8%]', dot: 'bg-steel' },
                { label: 'Live Commerce', pos: '-left-2 bottom-[16%]', dot: 'bg-jungle' },
                { label: 'Operations', pos: 'right-0 bottom-[6%]', dot: 'bg-forest' },
              ].map((chip) => (
                <span
                  key={chip.label}
                  className={`absolute ${chip.pos} hidden items-center gap-2 rounded-full border border-carbon/5 bg-white/90 px-4 py-2 text-sm font-semibold shadow-[0_10px_30px_-12px_rgba(26,29,31,0.35)] backdrop-blur sm:inline-flex`}
                >
                  <span className={`h-2 w-2 rounded-full ${chip.dot}`} />
                  {chip.label}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ─── MARQUEE ─── */}
        <div className="overflow-hidden bg-carbon py-5" aria-hidden>
          <div className="animate-marquee">
            {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
              <span key={i} className="flex items-center gap-8 whitespace-nowrap px-8 font-display text-2xl font-bold text-snow">
                {item}
                <span className="text-grass">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* ─── SERVICES ─── */}
        <section id="services" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>What We Do</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight">
                Four disciplines.<br />
                <span className="text-cobalt">One roof.</span>
              </h2>
            </div>
            <p className="max-w-md text-carbon/65">
              No more juggling vendors. Every capability your project needs, coordinated by one
              team that sees the whole picture.
            </p>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map((s) => (
              <article key={s.num} className="service-card flex flex-col rounded-3xl border border-carbon/8 bg-white p-7">
                <div className="flex items-center justify-between">
                  <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${s.accent} text-snow`}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                      {s.icon}
                    </svg>
                  </span>
                  <span className="font-display text-sm font-bold text-carbon/30">{s.num}</span>
                </div>
                <h3 className="mt-8 font-display text-2xl font-bold">{s.name}</h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-carbon/65">{s.desc}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ─── ABOUT + PROCESS ─── */}
        <section id="process" className="scroll-mt-24 px-3 md:px-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-cobalt px-5 py-20 text-snow md:rounded-[2.5rem] md:px-10 md:py-28">
            <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-steel/50 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-jungle/40 blur-3xl" />

            <div className="relative mx-auto max-w-[1240px]">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                <div>
                  <Eyebrow dark>Who We Are</Eyebrow>
                  <h2 className="mt-5 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1] tracking-tight">
                    We don&apos;t freelance.<br />
                    <span className="text-grass">We build.</span>
                  </h2>
                </div>
                <p className="self-end text-lg leading-relaxed text-snow/80">
                  OmniRay Group is a Caribbean-rooted creative conglomerate built to replace the chaos
                  of juggling multiple vendors. We combine web development, brand design, live
                  commerce and operations — so your vision moves from concept to execution without
                  getting lost in translation.
                </p>
              </div>

              <ol className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {PROCESS.map((p, i) => (
                  <li key={p.step} className="rounded-3xl border border-snow/15 bg-snow/[0.06] p-7 backdrop-blur-sm">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-grass font-display font-bold text-carbon">
                      {i + 1}
                    </span>
                    <h3 className="mt-6 font-display text-2xl font-bold">{p.step}</h3>
                    <p className="mt-2 leading-relaxed text-snow/75">{p.desc}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* ─── WORK ─── */}
        <section id="work" className="mx-auto max-w-[1240px] scroll-mt-24 px-5 py-24 md:px-10 md:py-32">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Eyebrow>Our Work</Eyebrow>
              <h2 className="mt-5 font-display text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.02] tracking-tight">
                Partners &amp; portfolio
              </h2>
            </div>
            <a href="#contact" className="btn btn-outline">View All Work</a>
          </div>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {WORK.map((w, i) => (
              <article
                key={w.title}
                className={`work-card group relative aspect-[4/3] overflow-hidden rounded-3xl ${i === 0 ? 'lg:col-span-2 lg:aspect-auto' : ''}`}
              >
                <div className={`work-art absolute inset-0 bg-gradient-to-br ${w.art}`}>
                  <svg className="h-full w-full opacity-25" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice" aria-hidden>
                    <circle cx="320" cy="60" r="120" fill="none" stroke="#F7F9F8" strokeWidth="1.5" />
                    <circle cx="320" cy="60" r="80" fill="none" stroke="#F7F9F8" strokeWidth="1.5" />
                    <circle cx="320" cy="60" r="40" fill="#F7F9F8" />
                  </svg>
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 bg-gradient-to-t from-carbon/80 to-transparent p-6 pt-16 text-snow">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-grass">
                      {w.type} · {w.year}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-bold">{w.title}</h3>
                  </div>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-snow text-carbon transition-transform group-hover:-rotate-45" aria-hidden>
                    →
                  </span>
                </div>
              </article>
            ))}

            <a
              href="#contact"
              className="group flex aspect-[4/3] flex-col justify-between rounded-3xl border-2 border-dashed border-jungle/50 bg-grass/10 p-7 transition-colors hover:bg-grass/20 sm:col-span-2 sm:aspect-auto sm:min-h-[200px] lg:col-span-3"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-forest">Next in line</span>
              <div>
                <h3 className="font-display text-3xl font-extrabold">Your project</h3>
                <p className="mt-2 text-carbon/65">Let&apos;s make it the next one here.</p>
              </div>
            </a>
          </div>
        </section>

        {/* ─── CONTACT ─── */}
        <section id="contact" className="scroll-mt-24 px-3 pb-3 md:px-6 md:pb-6">
          <div className="relative overflow-hidden rounded-[2rem] bg-carbon px-5 py-20 text-snow md:rounded-[2.5rem] md:px-10 md:py-28">
            <div className="pointer-events-none absolute -right-24 top-10 h-80 w-80 rounded-full bg-forest/50 blur-3xl" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-ocean/40 blur-3xl" />

            <div className="relative mx-auto grid max-w-[1240px] gap-14 lg:grid-cols-2 lg:gap-20">
              <div>
                <Eyebrow dark>Let&apos;s Talk</Eyebrow>
                <h2 className="mt-5 font-display text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold leading-[1] tracking-tight">
                  Ready to<br />
                  <span className="text-grass">grow?</span>
                </h2>
                <p className="mt-6 max-w-md text-lg leading-relaxed text-snow/70">
                  Tell us what you&apos;re building. We&apos;ll tell you how we can make it happen —
                  across as many of our disciplines as your project needs.
                </p>

                <ul className="mt-10 divide-y divide-snow/10 border-y border-snow/10">
                  {CONTACTS.map((c) => (
                    <li key={c.label}>
                      <a href={c.href} className="group flex items-center justify-between py-4">
                        <span className="text-sm uppercase tracking-[0.14em] text-snow/50">{c.label}</span>
                        <span className="flex items-center gap-3 font-medium transition-colors group-hover:text-grass">
                          {c.value}
                          <span className="transition-transform group-hover:translate-x-1" aria-hidden>→</span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-4 rounded-3xl border border-snow/10 bg-snow/[0.04] p-6 md:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="name">Your name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="field" />
                  <label className="sr-only" htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" required placeholder="Email address" className="field" />
                </div>
                <label className="sr-only" htmlFor="service">Service needed</label>
                <select id="service" name="service" defaultValue="" className="field cursor-pointer">
                  <option value="" disabled>Service needed</option>
                  <option>Web Development</option>
                  <option>Brand Design</option>
                  <option>Live Commerce</option>
                  <option>Operations</option>
                  <option>Multiple services</option>
                </select>
                <label className="sr-only" htmlFor="message">Tell us about your project</label>
                <textarea id="message" name="message" rows={5} required placeholder="Tell us about your project" className="field resize-none" />
                <button type="submit" className="btn btn-grass mt-2 justify-center">
                  Send Message <span aria-hidden>→</span>
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="mx-auto flex max-w-[1240px] flex-col items-center justify-between gap-5 px-5 py-10 md:flex-row md:px-10">
        <div className="flex items-center gap-3">
          <Image src="/omniray-emblem.webp" alt="" width={32} height={32} />
          <span className="font-display text-lg font-bold">
            OmniRay <span className="text-cobalt">Group</span>
          </span>
        </div>
        <p className="text-sm text-carbon/55">
          © {new Date().getFullYear()} OmniRay Group. All rights reserved.
        </p>
        <div className="flex gap-6">
          {['Privacy', 'Terms', 'Instagram'].map((link) => (
            <a key={link} href="#" className="text-sm text-carbon/60 transition-colors hover:text-cobalt">
              {link}
            </a>
          ))}
        </div>
      </footer>

    </div>
  );
}
