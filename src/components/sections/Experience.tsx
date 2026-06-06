import { Briefcase, CheckCircle2 } from 'lucide-react'
import { experience } from '@/data/profile'
import { SectionReveal } from '@/components/SectionReveal'

export function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="container-narrow">
        <SectionReveal>
          <div className="mb-14">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} />{' '}
              Experience
            </span>
            <h2 className="section-heading mt-5 text-balance">
              Building real systems,{' '}
              <span style={{ color: '#4B5694' }}>not toy projects</span>
            </h2>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px" style={{ background: 'linear-gradient(to bottom, transparent, rgba(240, 236, 228, 0.1), transparent)' }} />

          <div className="space-y-10">
            {experience.map((exp, idx) => (
              <SectionReveal key={exp.company} delay={idx * 0.05}>
                <div className="relative grid md:grid-cols-2 gap-6 md:gap-12">
                  {/* marker */}
                  <div className="absolute left-4 md:left-1/2 -translate-x-1/2 top-6">
                    <div className="grid place-items-center h-9 w-9 rounded-full" style={{ background: '#0a0a0a', border: '1px solid rgba(240, 236, 228, 0.1)' }}>
                      <Briefcase size={14} style={{ color: '#4B5694' }} />
                    </div>
                  </div>

                  <div className="md:text-right pl-14 md:pl-0 md:pr-12">
                    <div className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                      {exp.period}
                    </div>
                    <h3 className="mt-2 font-display text-2xl font-bold" style={{ color: '#f0ece4' }}>
                      {exp.role}
                    </h3>
                    <div className="mt-1" style={{ color: 'rgba(240, 236, 228, 0.6)' }}>
                      {exp.company} · {exp.location}
                    </div>
                  </div>

                  <div className="pl-14 md:pl-12">
                    <div className="rounded-2xl p-6" style={{ background: 'rgba(240, 236, 228, 0.02)', border: '1px solid rgba(240, 236, 228, 0.04)' }}>
                      <p style={{ color: 'rgba(240, 236, 228, 0.6)', lineHeight: 1.7 }}>
                        {exp.description}
                      </p>
                      <ul className="mt-5 space-y-2.5">
                        {exp.responsibilities.map((r) => (
                          <li
                            key={r}
                            className="flex items-start gap-2.5 text-sm"
                            style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                          >
                            <CheckCircle2
                              size={15}
                              className="mt-0.5 shrink-0"
                              style={{ color: '#4B5694' }}
                            />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
