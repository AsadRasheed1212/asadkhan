'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function SkillBar({ name, pct }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref}>
      <div className="flex justify-between mb-2">
        <span className="text-heading text-sm font-medium">{name}</span>
        <span className="text-primary text-[13px]">{pct}%</span>
      </div>
      <div className="h-[3px] bg-primary/10 rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
          initial={{ width: 0 }}
          animate={{ width: inView ? `${pct}%` : 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>
    </div>
  );
}
