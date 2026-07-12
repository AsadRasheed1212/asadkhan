'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { navLinks, services, contactInfo, whatsappLink } from '@/lib/data';
import SocialLinks from './SocialLinks';

export default function Footer() {
  const email = contactInfo.find((c) => c.label === 'Email')?.value || '';
  return (
    <footer className="relative z-10 bg-darker overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-10 pt-20 pb-0">
        {/* Columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          <Reveal>
            <div className="text-[11px] tracking-[2px] uppercase text-mid mb-5">Services</div>
            <div className="flex flex-col gap-3">
              {services.slice(0, 4).map((s) => (
                <Link key={s.title} href="/service" className="footer-link !text-[15px] !font-semibold !text-white/80">
                  {s.title}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <div className="text-[11px] tracking-[2px] uppercase text-mid mb-5">Explore</div>
            <div className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className="footer-link !text-[15px] !font-semibold !text-white/80">
                  {link.label}
                </Link>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.12} className="col-span-2 md:col-span-1">
            <div className="text-[11px] tracking-[2px] uppercase text-mid mb-5">Get In Touch</div>
            <a
              href={`mailto:${email}`}
              className="block font-slab text-[clamp(18px,2vw,26px)] font-medium text-white mb-4 hover:text-primary transition-colors break-all"
            >
              {email}
            </a>
            <div className="flex flex-col gap-2">
              {contactInfo
                .filter((c) => c.label !== 'Email')
                .map((item) => (
                  <div key={item.label} className="flex items-center gap-2.5 text-mid text-[13px]">
                    <span className="text-sm">{item.icon}</span>
                    {item.value}
                  </div>
                ))}
            </div>
          </Reveal>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-6 pb-10 border-b border-white/[0.07]">
          <div className="flex gap-5 text-[13px] text-mid">
            <Link href="/about" className="hover:text-white transition-colors">About</Link>
            <Link href="/credentials" className="hover:text-white transition-colors">Credentials</Link>
            <Link href="/contact" className="hover:text-white transition-colors">Contact</Link>
          </div>

          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-3 bg-white/[0.06] border border-white/10 rounded-full pl-4 pr-2 py-2"
          >
            <span className="text-xs text-white/80 font-medium">Chat on WhatsApp</span>
            <span className="w-8 h-8 rounded-full bg-accent flex items-center justify-center text-darker text-sm">💬</span>
          </motion.a>
        </div>

        {/* Giant wordmark */}
        <Reveal as="scale" className="py-8 select-none">
          <Link
            href="/"
            aria-label="Muhammad Asad — Home"
            className="block font-slab font-medium text-white leading-none tracking-tight text-center hover:text-primary transition-colors"
            style={{ fontSize: 'clamp(38px, 7vw, 92px)' }}
          >
            Muhammad<span className="text-primary">.</span>Asad
          </Link>
        </Reveal>
      </div>

      {/* Bottom banner strip */}
      <div className="footer-banner relative">
        <div className="absolute inset-0 bg-gradient-to-t from-darker via-darker/70 to-darker/30" />
        <div className="relative max-w-[1200px] mx-auto px-10 py-10 flex flex-col gap-8">
          <p className="font-slab text-[clamp(18px,2.4vw,30px)] font-medium text-white text-center">
            Let&apos;s build your next project
          </p>
          <div className="flex items-center justify-between gap-4">
            <SocialLinks className="!gap-3" />
            <p className="text-white/50 text-xs">
              © {new Date().getFullYear()} Muhammad Asad Corp.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
