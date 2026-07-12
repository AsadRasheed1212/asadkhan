'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { whatsappLink } from '@/lib/data';

const PKG_LABELS = { basic: 'Basic', standard: 'Standard', premium: 'Premium' };

export default function GigCard({ gig, onOrder }) {
  const [pkg, setPkg] = useState('basic');
  const data = gig.packages[pkg];

  return (
    <motion.div
      className="gig-card"
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
    >
      {/* Hero — photo-style gradient panel with badge pills overlaid */}
      <div className="relative h-[130px] flex items-center justify-center text-[44px] gig-hero overflow-hidden">
        <span className="relative z-10">{gig.icon}</span>
        <div className="absolute top-3 left-3 flex items-center gap-1.5 z-10">
          <span className="gig-pill gig-pill-solid">{gig.category}</span>
          {gig.badge && <span className="gig-pill gig-pill-outline">{gig.badge}</span>}
        </div>
        <span className="absolute bottom-3 right-3 text-[11px] text-[#FFD700] bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-full z-10">
          ★ {gig.rating}
        </span>
      </div>

      <div className="p-[18px]">
        <div className="font-slab text-[15px] text-heading font-medium leading-[1.35] mb-3">
          {gig.title}
        </div>

        <div className="flex border border-line/[0.08] rounded overflow-hidden mb-3">
          {Object.keys(gig.packages).map((key) => (
            <button
              key={key}
              onClick={() => setPkg(key)}
              className={`pkg-tab ${pkg === key ? 'pkg-tab-active' : ''}`}
            >
              {PKG_LABELS[key]}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={pkg}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.2 }}
            className="bg-line/[0.03] border border-line/[0.06] rounded p-3 mb-3"
          >
            <div className="flex items-center justify-between mb-0.5">
              <div className="font-slab text-[22px] text-heading font-medium">{data.price}</div>
              <span className="text-[10px] px-2 py-0.5 rounded-sm bg-accent/[0.08] text-accent border border-accent/[0.18]">
                {data.delivery}
              </span>
            </div>
            <div className="text-[11px] text-mid mb-2">{data.label}</div>
            {data.hostingAddon && (
              <div className="text-[10px] text-accent bg-accent/[0.08] border border-accent/[0.18] rounded px-2 py-1 mb-2 leading-[1.5]">
                🌐 {data.hostingAddon}
              </div>
            )}
            <ul className="flex flex-col gap-1.5">
              {data.features.map((f) => {
                const disabled = f.startsWith('!');
                const label = disabled ? f.slice(1) : f;
                return (
                  <li
                    key={label}
                    className={`text-[11px] flex items-center gap-1.5 ${disabled ? 'text-heading/25' : 'text-mid'}`}
                  >
                    <span className={`text-[10px] ${disabled ? '' : 'text-accent'}`}>{disabled ? '✕' : '✓'}</span>
                    {label}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>

        {/* Seller row — avatar + quick actions, then the order button */}
        <div className="flex items-center justify-between mb-3 pt-1">
          <div className="flex items-center gap-2">
            <span className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-slab text-[11px] font-semibold text-darker shrink-0">
              MA
            </span>
            <span className="text-[11px] text-mid">Muhammad Asad</span>
          </div>
          <div className="flex items-center gap-1.5">
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
              className="gig-icon-btn"
            >
              💬
            </a>
            <a href="tel:+923162432479" aria-label="Call Muhammad Asad" className="gig-icon-btn">
              📞
            </a>
          </div>
        </div>

        <button
          onClick={() => onOrder(gig.category, PKG_LABELS[pkg], data.price)}
          className="block w-full py-2.5 bg-transparent border border-primary text-primary rounded text-xs font-medium cursor-pointer transition-all hover:bg-primary hover:text-darker"
        >
          Order Now ({data.price})
        </button>
      </div>
    </motion.div>
  );
}
