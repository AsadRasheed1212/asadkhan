import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';
import SkillBar from '@/components/SkillBar';
import { credentials, certificates, skillBars } from '@/lib/data';

export const metadata = { title: 'Credentials' };

export default function CredentialsPage() {
  return (
    <section className="py-36">
      <div className="max-w-[1200px] mx-auto px-10">
        <Reveal className="text-center mb-16">
          <div className="eyebrow">My Background</div>
          <h2 className="font-slab text-[clamp(32px,4vw,52px)] font-medium text-heading leading-[1.15] mb-4">
            Credentials
          </h2>
          <p className="text-mid max-w-[560px] mx-auto">Experience, education, and achievements.</p>
        </Reveal>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-line/[0.07] mb-16">
          {[
            { n: 50, suf: '+', lbl: 'Projects' },
            { n: 5, suf: '+', lbl: 'Years Exp.' },
            { n: 30, suf: '+', lbl: 'Clients' },
            { n: 15, suf: '+', lbl: 'Awards' },
          ].map((s) => (
            <div key={s.lbl} className="bg-card py-10 text-center px-4">
              <Counter to={s.n} suffix={s.suf} className="font-slab text-[52px] font-medium text-primary leading-none block" />
              <span className="text-sm text-mid mt-1 block">{s.lbl}</span>
            </div>
          ))}
        </div>

        <Reveal className="card p-8 mb-20 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 bg-primary/[0.07] border border-primary/15 rounded-sm flex items-center justify-center text-2xl flex-shrink-0">
              📄
            </div>
            <div>
              <h3 className="font-slab text-lg font-medium text-heading mb-1">My Resume / CV</h3>
              <p className="text-mid text-sm">Muhammad Asad Rasheed — full background &amp; skills.</p>
            </div>
          </div>
          <div className="flex gap-3 flex-shrink-0">
            <a href="/cv/Muhammad_Asad_Rasheed_CV.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              View CV
            </a>
            <a href="/cv/Muhammad_Asad_Rasheed_CV.pdf" download className="btn btn-primary">
              Download CV
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
              </svg>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <Reveal className="mb-8">
              <h3 className="font-slab text-2xl font-medium text-heading">Experience &amp; Education</h3>
            </Reveal>
            <div className="tl-wrap">
              {credentials.map((cred, i) => (
                <Reveal key={cred.title} delay={i * 0.08} className="relative mb-10">
                  <div className="tl-dot" />
                  <div className="text-[11px] tracking-[2px] uppercase text-primary font-medium mb-1">{cred.year}</div>
                  <div className="font-slab text-lg font-medium text-heading mb-1">{cred.title}</div>
                  <div className="text-mid text-sm mb-2">{cred.organization}</div>
                  {cred.description && <div className="text-mid text-[14px] leading-[1.8]">{cred.description}</div>}
                </Reveal>
              ))}
            </div>
          </div>

          <div>
            <Reveal className="mb-8">
              <h3 className="font-slab text-2xl font-medium text-heading">Technical Skills</h3>
            </Reveal>
            <div className="space-y-6">
              {skillBars.map((s) => (
                <SkillBar key={s.name} name={s.name} pct={s.pct} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-24">
          <Reveal>
            <h3 className="font-slab text-2xl font-medium text-heading mb-3">Certificates</h3>
            <p className="text-mid text-sm mb-10">Aptech Learning — earned credentials and workshop participation.</p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certificates.map((cert, i) => (
              <Reveal key={cert.file} delay={i * 0.06}>
                <div className="work-card">
                  <div className="relative aspect-[3/4] bg-dark overflow-hidden zoom-card">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={`/certificates/${cert.file}`} alt={cert.title} className="w-full h-full object-cover" />
                    <div className="work-overlay">
                      <a href={`/certificates/${cert.file}`} target="_blank" rel="noopener noreferrer" className="work-btn">
                        VIEW FULL
                      </a>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="text-[11px] tracking-[2px] uppercase text-primary font-medium mb-2">{cert.year}</div>
                    <h4 className="font-slab text-base font-medium text-heading mb-1 leading-snug">{cert.title}</h4>
                    <p className="text-mid text-xs mb-4">{cert.org}</p>
                    <a
                      href={`/certificates/${cert.file}`}
                      download
                      className="text-primary text-xs font-medium inline-flex items-center gap-1.5 hover:underline"
                    >
                      Download
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
