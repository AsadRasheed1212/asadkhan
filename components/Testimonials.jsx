'use client';

import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { testimonials } from '@/lib/data';

export default function Testimonials() {
  return (
    <section className="py-32">
      <div className="max-w-[1200px] mx-auto px-10">
        <Reveal className="text-center mb-16">
          <div className="eyebrow">Client Feedback</div>
          <h2 className="font-slab text-[clamp(32px,4vw,52px)] font-medium text-heading leading-[1.15] mb-4">
            What Clients Say
          </h2>
          <p className="text-mid max-w-[560px] mx-auto">
            Real feedback from real projects — kaam ki quality khud dekh lo.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Reveal key={t.name + i} delay={(i % 3) * 0.08}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
                className="h-full bg-soft border border-line/[0.08] rounded-[10px] p-7 flex flex-col"
              >
                <div className="text-primary text-lg mb-3">
                  {'★'.repeat(t.rating)}
                  <span className="text-line/20">{'★'.repeat(5 - t.rating)}</span>
                </div>
                <p className="text-mid text-[15px] leading-[1.8] mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center font-slab text-sm font-semibold text-darker shrink-0">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-heading text-sm font-medium">{t.name}</div>
                    <div className="text-mid text-xs">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
