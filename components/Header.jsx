'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { navLinks } from '@/lib/data';
import ThemeToggle from './ThemeToggle';
import SocialLinks from './SocialLinks';

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // Escape key closes the mobile menu
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <motion.header
      initial={false}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`site-header ${scrolled ? 'scrolled' : ''}`}
    >
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="header-inner max-w-[1200px] mx-auto px-10 h-20 flex items-center justify-between relative">
        <Link
          href="/"
          aria-label="Muhammad Asad — Home"
          className="group relative font-slab text-xl font-medium text-heading tracking-wide"
        >
          <motion.span
            whileHover={{ letterSpacing: '0.03em' }}
            transition={{ duration: 0.3 }}
            className="inline-block"
          >
            Muhammad<span className="text-primary">.</span>Asad
          </motion.span>
          <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop nav / mobile full-screen menu (same element, CSS driven) */}
        <nav
          ref={navRef}
          id="primary-navigation"
          aria-label="Primary"
          className={`nav-links-desktop ${open ? 'open' : ''}`}
        >
          {navLinks.map((link, i) => {
            const active = link.href === '/' ? pathname === '/' : pathname.startsWith(link.href);
            return (
              <motion.div
                key={link.href}
                initial={open ? { opacity: 0, y: 16 } : false}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: open ? 0.08 + i * 0.05 : 0, ease: [0.16, 1, 0.3, 1] }}
              >
                <Link href={link.href} className={`nav-link ${active ? 'active' : ''}`} aria-current={active ? 'page' : undefined}>
                  {link.label}
                </Link>
              </motion.div>
            );
          })}

          <motion.div
            initial={open ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: open ? 0.08 + navLinks.length * 0.05 : 0 }}
            className="hidden lg:block"
          >
            <Link href="/contact" className="btn btn-primary !py-2.5 !px-6 !text-xs">
              Hire Me
            </Link>
          </motion.div>

          <motion.div
            initial={open ? { opacity: 0, y: 16 } : false}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: open ? 0.14 + navLinks.length * 0.05 : 0 }}
            className="lg:hidden flex flex-col items-center gap-6 mt-2"
          >
            <Link href="/contact" className="btn btn-primary !py-2.5 !px-6 !text-xs">
              Hire Me
            </Link>
            <ThemeToggle />
            <SocialLinks />
          </motion.div>
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <ThemeToggle />
          </div>
          <button
            className="nav-toggle-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="primary-navigation"
            onClick={() => setOpen((o) => !o)}
          >
            <motion.span animate={open ? { rotate: 45, y: 6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
            <motion.span animate={{ opacity: open ? 0 : 1 }} transition={{ duration: 0.15 }} />
            <motion.span animate={open ? { rotate: -45, y: -6.5 } : { rotate: 0, y: 0 }} transition={{ duration: 0.25 }} />
          </button>
        </div>
      </div>
    </motion.header>
  );
}
