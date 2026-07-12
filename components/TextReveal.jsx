'use client';

import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.06, delayChildren: 0 },
  },
};

const word = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Animates its text word-by-word, sliding up into place.
 * Usage: <TextReveal as="h1" className="...">Creative Developer</TextReveal>
 */
export default function TextReveal({ children, as: Tag = 'span', className = '', once = true, delay = 0 }) {
  const text = typeof children === 'string' ? children : '';
  const words = text.split(' ');

  return (
    <motion.span
      className={`inline-block overflow-hidden ${className}`}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount: 0.6 }}
      variants={container}
      transition={{ delayChildren: delay }}
    >
      {words.map((w, i) => (
        <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em]">
          <motion.span variants={word} className="inline-block">
            {w}
          </motion.span>
        </span>
      ))}
    </motion.span>
  );
}
