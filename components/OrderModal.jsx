'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

export default function OrderModal({ order, onClose }) {
  return (
    <AnimatePresence>
      {order && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && onClose()}
          className="fixed inset-0 bg-black/75 z-[500] flex items-center justify-center px-4"
        >
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.92, opacity: 0, y: 10 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="bg-soft border border-line/[0.12] rounded-[10px] p-8 max-w-[420px] w-[90%] relative"
          >
            <button
              onClick={onClose}
              className="absolute top-3.5 right-4 bg-none border-none text-mid text-xl cursor-pointer"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="eyebrow !mb-1.5">Order Confirm</div>
            <div className="font-slab text-xl text-heading font-medium mb-1">
              {order.service} — {order.pkg}
            </div>
            <div className="text-[13px] text-mid mb-5">Price: {order.price}</div>
            <div className="text-[13px] text-mid mb-[18px] leading-[1.7]">
              Payment karo, phir screenshot WhatsApp ya Contact Form ke zariye bhejo. Payment
              confirm hote hi kaam shuru hoga.
            </div>
            <Link
              href="/contact"
              className="block w-full py-2.5 bg-primary text-darker rounded text-[13px] font-medium text-center mb-2.5"
            >
              Contact Form se Bhejo
            </Link>
            <a
              href="https://wa.me/923162432479"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-2.5 bg-transparent border border-accent text-accent rounded text-[13px] font-medium text-center"
            >
              WhatsApp pe Bhejo
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
