import Link from 'next/link';
import Reveal from '@/components/Reveal';
import SkillBar from '@/components/SkillBar';
import { skills, skillBars } from '@/lib/data';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <section className="py-36">
      <div className="max-w-[1200px] mx-auto px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <Reveal as="left" className="relative">
            <div className="aspect-[4/5] bg-card border border-line/[0.07] rounded-sm overflow-hidden relative flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/assets/portfolio.jpg" alt="Muhammad Asad" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-5 -right-5 w-36 h-36 border border-primary/30 rounded-sm" />
          </Reveal>

          <Reveal as="right">
            <div className="eyebrow">Who I Am</div>
            <h2 className="font-slab text-[40px] font-medium text-heading mb-5 leading-[1.2]">
              Passionate Developer
              <br />
              Based in Karachi
            </h2>
            <p className="text-mid leading-[1.9] mb-4">
              I am an Economics graduate with strong expertise in Data Entry, MS Excel, WordPress
              website management, Next.js development, and PHP Laravel. I also do video editing
              for reels, ads, and social content. I handle website content management, product
              listing, data organization, and administrative tasks with attention to detail.
            </p>
            <p className="text-mid leading-[1.9] mb-8">
              From designing pixel-perfect interfaces to architecting robust backend systems — I
              handle the complete development cycle.
            </p>

            <div className="flex flex-wrap gap-2.5 mb-8">
              {skills.map((s) => (
                <span key={s} className="stag">
                  {s}
                </span>
              ))}
            </div>

            <Link href="/contact" className="btn btn-primary">
              Hire Me
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </Reveal>
        </div>

        <Reveal>
          <div className="eyebrow">Tech Stack</div>
          <h3 className="font-slab text-3xl font-medium text-heading mb-10">My Skills</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-7">
            {skillBars.map((s) => (
              <SkillBar key={s.name} name={s.name} pct={s.pct} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
