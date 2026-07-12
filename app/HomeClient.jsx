'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import TextReveal from '@/components/TextReveal';
import TiltCard from '@/components/TiltCard';
import MagneticButton from '@/components/MagneticButton';
import Testimonials from '@/components/Testimonials';
import { services, works } from '@/lib/data';

const heroContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
};
const heroItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomeClient() {
  const featured = works.slice(0, 4);

  return (
    <>
      {/* HERO */}
      <section className="min-h-screen flex items-center pt-36 pb-20 px-0">
        <div className="max-w-[1200px] mx-auto px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center w-full">
          <motion.div variants={heroContainer} initial="hidden" animate="show">
            <motion.div variants={heroItem} className="flex items-center gap-3 mb-7">
              <div className="w-10 h-px bg-primary" />
              <span className="text-[11px] tracking-[3px] uppercase text-primary font-medium">
                Available for work
              </span>
            </motion.div>

            <motion.h1
              variants={heroItem}
              className="font-slab text-[clamp(44px,6vw,78px)] font-medium leading-[1.07] text-heading mb-7"
            >
              <TextReveal as="span" className="block">Creative</TextReveal>
              <TextReveal as="span" className="block text-primary" delay={0.1}>Developer</TextReveal>
              <TextReveal as="span" className="block text-heading/90" delay={0.2}>from Pakistan</TextReveal>
            </motion.h1>

            <motion.p variants={heroItem} className="text-[17px] text-mid leading-[1.85] mb-12 max-w-[460px]">
              I handle <span className="text-primary font-medium">Data Entry</span>,{' '}
              <span className="text-primary font-medium">MS Excel</span>,{' '}
              <span className="text-primary font-medium">WordPress</span>,{' '}
              <span className="text-primary font-medium">Next.js</span>, and{' '}
              <span className="text-primary font-medium">PHP Laravel</span> websites — plus{' '}
              <span className="text-primary font-medium">video editing</span> for content that pops.
            </motion.p>

            <motion.div variants={heroItem} className="flex gap-5 flex-wrap">
              <MagneticButton>
                <Link href="/works" className="btn btn-primary">
                  View My Works
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link href="/contact" className="btn btn-outline">
                  Let&apos;s Talk
                </Link>
              </MagneticButton>
              <MagneticButton>
                <a
                  href="/cv/Muhammad_Asad_Rasheed_CV.pdf"
                  download
                  className="btn btn-outline"
                >
                  Download CV
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M12 3v12m0 0l-5-5m5 5l5-5M4 21h16" />
                  </svg>
                </a>
              </MagneticButton>
            </motion.div>
          </motion.div>

          {/* Right floating cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative h-[500px] hidden lg:block"
          >
            <div
              className="absolute w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-morph rounded-[60%_40%_70%_30%/50%_60%_40%_50%]"
              style={{
                background:
                  'radial-gradient(circle at 30% 40%,rgba(110,193,228,.12) 0%,transparent 60%),radial-gradient(circle at 70% 70%,rgba(97,206,112,.08) 0%,transparent 60%)',
              }}
            />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
              className="card absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] p-5 text-center"
            >
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center font-slab text-3xl font-semibold text-darker">
                MA
              </div>
              <h3 className="text-heading text-base font-medium mb-1">Muhammad Asad</h3>
              <p className="text-mid text-[13px]">Full-Stack Developer</p>
            </motion.div>

            <motion.div
              animate={{ y: [0, -9, 0] }}
              transition={{ duration: 3.1, repeat: Infinity, ease: 'easeInOut', delay: 0.6 }}
              className="card absolute top-[8%] right-0 p-4 min-w-[140px]"
            >
              <Counter to={5} suffix="+" className="font-slab text-[34px] font-medium text-primary block leading-none" />
              <span className="text-[12px] text-mid mt-1 block tracking-wide">Years Exp.</span>
            </motion.div>

            <motion.div
              animate={{ y: [0, -11, 0] }}
              transition={{ duration: 2.9, repeat: Infinity, ease: 'easeInOut', delay: 1.1 }}
              className="card absolute bottom-[8%] left-0 p-4 min-w-[140px]"
            >
              <Counter to={50} suffix="+" className="font-slab text-[34px] font-medium text-primary block leading-none" />
              <span className="text-[12px] text-mid mt-1 block tracking-wide">Projects Done</span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <div className="sec-div" />

      {/* SERVICES */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-10">
          <Reveal className="text-center mb-16">
            <div className="eyebrow">What I Do</div>
            <h2 className="font-slab text-[clamp(32px,4vw,52px)] font-medium text-heading leading-[1.15] mb-4">
              Services I Offer
            </h2>
            <p className="text-mid max-w-[560px] mx-auto text-[16px]">
              From concept to deployment — full lifecycle of your digital product.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.title} delay={(i % 3) * 0.08} className="relative">
                <TiltCard className="svc-card glow-hover h-full" max={6}>
                  <span className="absolute top-6 right-6 font-slab text-5xl font-medium text-primary/[0.04] leading-none select-none">
                    0{i + 1}
                  </span>
                  <div className="w-[52px] h-[52px] bg-primary/[0.07] border border-primary/15 rounded-sm flex items-center justify-center text-2xl mb-6">
                    {s.icon}
                  </div>
                  <h3 className="font-slab text-xl font-medium text-heading mb-3">{s.title}</h3>
                  <p className="text-mid text-[15px] leading-[1.8]">{s.desc}</p>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="sec-div" />

      {/* WORKS */}
      <section className="py-32">
        <div className="max-w-[1200px] mx-auto px-10">
          <Reveal className="text-center mb-16">
            <div className="eyebrow">Portfolio</div>
            <h2 className="font-slab text-[clamp(32px,4vw,52px)] font-medium text-heading leading-[1.15] mb-4">
              Selected Works
            </h2>
            <p className="text-mid max-w-[560px] mx-auto">Projects I&apos;m proud of — updated regularly.</p>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((work, i) => (
              <Reveal key={work.id} delay={(i % 2) * 0.1}>
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
                    <p className="text-sm text-mid">{work.description.slice(0, 100)}…</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center mt-12">
            <Link href="/works" className="btn btn-outline">
              View All Projects
            </Link>
          </Reveal>
        </div>
      </section>

      {/* STATS */}
      <section className="py-24 border-y border-line/[0.07]">
        <div className="max-w-[1200px] mx-auto px-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line/[0.07]">
            {[
              { n: 5, suf: '+', lbl: 'Projects Completed' },
              { n: 5, suf: '+', lbl: 'Years Experience' },
              { n: 4, suf: '+', lbl: 'Happy Clients' },
              { n: 100, suf: '%', lbl: 'Dedication' },
            ].map((stat) => (
              <div key={stat.lbl} className="bg-card py-10 text-center px-4">
                <Counter to={stat.n} suffix={stat.suf} className="font-slab text-[52px] font-medium text-primary leading-none block" />
                <span className="text-sm text-mid mt-1 block tracking-wide">{stat.lbl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
    </>
  );
}
