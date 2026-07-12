'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import Reveal from '@/components/Reveal';
import { works } from '@/lib/data';

function slug(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function WorksClient() {
  const categories = useMemo(() => [...new Set(works.map((w) => w.category))], []);
  const [active, setActive] = useState('all');
  const [query, setQuery] = useState('');

  const filtered = works.filter((w) => {
    const matchesCategory = active === 'all' || slug(w.category) === active;
    const q = query.trim().toLowerCase();
    const matchesQuery =
      !q ||
      w.title.toLowerCase().includes(q) ||
      w.description.toLowerCase().includes(q) ||
      (w.tech || []).some((t) => t.toLowerCase().includes(q));
    return matchesCategory && matchesQuery;
  });

  return (
    <section className="py-36">
      <div className="max-w-[1200px] mx-auto px-10">
        <Reveal className="text-center mb-16">
          <div className="eyebrow">Portfolio</div>
          <h2 className="font-slab text-[clamp(32px,4vw,52px)] font-medium text-heading leading-[1.15] mb-4">
            All Projects
          </h2>
          <p className="text-mid max-w-[560px] mx-auto">Every project built with purpose and precision.</p>
        </Reveal>

        <Reveal className="max-w-[420px] mx-auto mb-8">
          <div className="relative">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search projects — title, tech, keyword…"
              className="w-full bg-soft border border-line/[0.08] rounded-full py-3 pl-11 pr-4 text-sm text-heading placeholder:text-mid focus:outline-none focus:border-primary/40 transition-colors"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-mid text-sm">🔍</span>
          </div>
        </Reveal>

        <Reveal className="flex gap-3 flex-wrap justify-center mb-12">
          <button
            onClick={() => setActive('all')}
            className={`btn text-xs py-2 px-5 ${active === 'all' ? 'btn-primary' : 'btn-outline'}`}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(slug(cat))}
              className={`btn text-xs py-2 px-5 ${active === slug(cat) ? 'btn-primary' : 'btn-outline'}`}
            >
              {cat}
            </button>
          ))}
        </Reveal>

        {filtered.length === 0 && (
          <Reveal className="text-center text-mid py-16">
            Koi project nahi mila — search ya filter change karke dekho.
          </Reveal>
        )}

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((work) => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
              >
                <div className="work-card">
                  <div className="relative aspect-video bg-dark overflow-hidden zoom-card">
                    {work.thumbnail ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-5xl text-heading/10">🖥️</div>
                    )}
                    <div className="work-overlay">
                      <Link href={`/works/${work.id}`} className="work-btn">
                        VIEW PROJECT
                      </Link>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="text-[11px] tracking-[2px] uppercase text-primary font-medium mb-2">
                      {work.category}
                    </div>
                    <h3 className="font-slab text-xl font-medium text-heading mb-2">{work.title}</h3>
                    <p className="text-sm text-mid mb-4">{work.description.slice(0, 100)}…</p>
                    {work.tech && (
                      <div className="flex flex-wrap gap-2">
                        {work.tech.map((t) => (
                          <span
                            key={t}
                            className="text-[11px] bg-line/[0.05] border border-line/[0.07] text-mid px-3 py-1 rounded-sm"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
