import { motion } from 'framer-motion'
import { Server, Layout, Database, Cloud, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { skillCategories } from '@/data/profile'
import { SectionReveal } from '@/components/SectionReveal'

const iconMap: Record<string, LucideIcon> = {
  Backend: Server,
  Frontend: Layout,
  Database: Database,
  'Cloud & DevOps': Cloud,
  'Tools & AI': Wrench,
}

export function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="container-narrow">
        <SectionReveal>
          <div className="mb-14">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} /> Skills
            </span>
            <h2 className="section-heading mt-5 text-balance">
              A toolkit built around{' '}
              <span style={{ color: '#4B5694' }}>production</span>
            </h2>
            <p className="mt-4 max-w-lg" style={{ color: 'rgba(240, 236, 228, 0.45)' }}>
              Curated stack — not a checklist. The tools I reach for when
              shipping real products.
            </p>
          </div>
        </SectionReveal>

        {/* Specialty statement — editorial, not a glass card */}
        <SectionReveal delay={0.05}>
          <div className="mb-12 p-8 md:p-10 rounded-3xl relative overflow-hidden" style={{ background: 'rgba(240, 236, 228, 0.02)', border: '1px solid rgba(240, 236, 228, 0.04)' }}>
            <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(75, 86, 148, 0.2), transparent 60%)' }} />
            <div className="relative">
              <div className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                specialty
              </div>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold" style={{ color: '#f0ece4' }}>
                Designing and shipping{' '}
                <span style={{ color: '#4B5694' }}>secure, scalable</span>{' '}
                backends.
              </h3>
              <p className="mt-3 max-w-2xl" style={{ color: 'rgba(240, 236, 228, 0.45)' }}>
                Python · Django · DRF on the server, React on the front,
                Postgres in the middle, Docker + Linux in production.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 sm:gap-8">
                <Stat label="Languages" value="5+" />
                <Stat label="Frameworks" value="8+" />
                <Stat label="Deploys / yr" value="20+" />
              </div>
            </div>
          </div>
        </SectionReveal>

        {/* Category grid — mixed styles, not all identical */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillCategories.map((cat, idx) => {
            const Icon = iconMap[cat.title] ?? Wrench
            return (
              <SectionReveal key={cat.title} delay={0.1 + idx * 0.04}>
                <motion.div
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="group relative overflow-hidden rounded-2xl p-5 h-full"
                  style={{
                    background: idx % 2 === 0 ? 'rgba(240, 236, 228, 0.025)' : 'rgba(17, 17, 17, 0.6)',
                    border: '1px solid rgba(240, 236, 228, 0.04)',
                  }}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className="grid place-items-center h-9 w-9 rounded-lg shrink-0"
                      style={{
                        background: idx % 2 === 0 ? 'rgba(75, 86, 148, 0.12)' : 'rgba(75, 86, 148, 0.05)',
                        border: `1px solid ${idx % 2 === 0 ? 'rgba(75, 86, 148, 0.2)' : 'rgba(75, 86, 148, 0.1)'}`,
                      }}
                    >
                      <Icon size={15} style={{ color: idx % 2 === 0 ? '#4B5694' : 'rgba(75, 86, 148, 0.7)' }} />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold" style={{ color: '#f0ece4' }}>
                        {cat.title}
                      </h3>
                      <p className="text-[11px]" style={{ color: 'rgba(240, 236, 228, 0.35)' }}>{cat.description}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {cat.skills.map((s) => (
                      <span
                        key={s.name}
                        className="rounded-md px-2 py-1 text-[11px] font-mono transition-colors"
                        style={{
                          color: 'rgba(240, 236, 228, 0.6)',
                          background: 'rgba(240, 236, 228, 0.02)',
                          border: '1px solid rgba(240, 236, 228, 0.04)',
                        }}
                      >
                        {s.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </SectionReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="font-display text-2xl font-bold" style={{ color: '#4B5694' }}>{value}</div>
      <div className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
        {label}
      </div>
    </div>
  )
}
