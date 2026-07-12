'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem('loaded')) {
      setDone(true);
      return;
    }
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 14;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => {
          setDone(true);
          sessionStorage.setItem('loaded', '1');
        }, 250);
      }
      setProgress(Math.round(p));
    }, 55);
    return () => clearInterval(iv);
  }, []);

  const letters = 'MUHAMMAD ASAD'.split('');

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ yPercent: -100 }}
          transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          className="fixed inset-0 z-[9998] bg-dark flex flex-col items-center justify-center gap-6"
        >
          <div className="flex gap-[2px] font-slab text-2xl md:text-4xl font-medium text-heading tracking-wider">
            {letters.map((l, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: 'backOut' }}
                className={l === ' ' ? 'w-2' : ''}
              >
                {l === ' ' ? '\u00A0' : l}
              </motion.span>
            ))}
          </div>
          <div className="w-[200px] h-[2px] bg-line/10 overflow-hidden rounded-full">
            <div
              className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
