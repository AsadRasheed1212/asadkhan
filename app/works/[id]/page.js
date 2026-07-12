import Link from 'next/link';
import { notFound } from 'next/navigation';
import Reveal from '@/components/Reveal';
import { works } from '@/lib/data';

export function generateStaticParams() {
  return works.map((w) => ({ id: String(w.id) }));
}

export function generateMetadata({ params }) {
  const work = works.find((w) => String(w.id) === params.id);
  return { title: work ? work.title : 'Project' };
}

export default function WorkDetailPage({ params }) {
  const work = works.find((w) => String(w.id) === params.id);
  if (!work) notFound();

  const related = works.filter((w) => w.category === work.category && w.id !== work.id).slice(0, 3);

  return (
    <section className="py-36">
      <div className="max-w-[900px] mx-auto px-10">
        <Reveal className="mb-6">
          <Link href="/works" className="text-mid text-sm hover:text-primary transition-colors flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Works
          </Link>
        </Reveal>

        <Reveal>
          <div className="text-[11px] tracking-[2px] uppercase text-primary font-medium mb-3">{work.category}</div>
          <h1 className="font-slab text-[clamp(32px,5vw,56px)] font-medium text-heading leading-[1.1] mb-6">
            {work.title}
          </h1>
        </Reveal>

        {work.thumbnail && (
          <Reveal delay={0.1} className="aspect-video bg-dark rounded-sm overflow-hidden mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={work.thumbnail} alt={work.title} className="w-full h-full object-cover" />
          </Reveal>
        )}

        <Reveal delay={0.15}>
          <p className="text-mid text-[17px] leading-[1.9] mb-8">{work.description}</p>
          {work.tech && (
            <div className="flex flex-wrap gap-2.5 mb-8">
              {work.tech.map((t) => (
                <span key={t} className="stag">
                  {t}
                </span>
              ))}
            </div>
          )}
          {work.url && (
            <a href={work.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Visit Project ↗
            </a>
          )}
        </Reveal>

        {related.length > 0 && (
          <div className="mt-24">
            <Reveal className="mb-8">
              <h3 className="font-slab text-2xl font-medium text-heading">More in {work.category}</h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((w, i) => (
                <Reveal key={w.id} delay={i * 0.08}>
                  <Link href={`/works/${w.id}`} className="work-card block">
                    <div className="p-6">
                      <div className="text-[11px] tracking-[2px] uppercase text-primary font-medium mb-2">
                        {w.category}
                      </div>
                      <h4 className="font-slab text-base font-medium text-heading">{w.title}</h4>
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
