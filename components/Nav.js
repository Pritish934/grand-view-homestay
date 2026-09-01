'use client';

import { useEffect, useState } from 'react';

const links = [
  { href: '#view', label: 'The view' },
  { href: '#stay', label: 'The stay' },
  { href: '#reviews', label: 'Guests' },
  { href: '#find-us', label: 'Getting here' },
];

export default function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-500 ${
        solid ? 'bg-mist/90 backdrop-blur-sm border-b border-stone/20' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 flex items-center justify-between h-16 md:h-20">
        <a
          href="#top"
          className={`font-display text-lg tracking-tight transition-colors duration-500 ${
            solid ? 'text-pine' : 'text-mist'
          }`}
        >
          Grand View
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors duration-500 hover:opacity-70 ${
                solid ? 'text-slate' : 'text-mist/85'
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#stay"
          className={`text-sm px-4 py-2 rounded-full border transition-colors duration-500 ${
            solid
              ? 'border-pine text-pine hover:bg-pine hover:text-mist'
              : 'border-mist/60 text-mist hover:bg-mist hover:text-pine'
          }`}
        >
          Check dates
        </a>
      </div>
    </header>
  );
}
