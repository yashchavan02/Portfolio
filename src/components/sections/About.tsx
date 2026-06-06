import { motion } from 'framer-motion'
import { Brain, Code2, Cloud, Cpu, Workflow, ShieldCheck } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'

const highlights = [
  { icon: Brain, label: 'Problem Solving' },
  { icon: Code2, label: 'API Development' },
  { icon: Cpu, label: 'System Design' },
  { icon: Cloud, label: 'Cloud Deployment' },
  { icon: Workflow, label: 'AI Integration' },
  { icon: ShieldCheck, label: 'Security First' },
]

export function About() {
  return (
    <section id="about" className="section-padding relative">
      <div className="container-narrow">
        <SectionReveal>
          <div className="mb-16">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} /> About
            </span>
            <h2 className="section-heading mt-5 text-balance">
              Engineering with{' '}
              <span style={{ color: '#4B5694' }}>intent and craft</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Two-column: narrative + stats — NOT bento */}
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left — the story */}
          <SectionReveal delay={0.05}>
            <div>
              <p className="text-lg md:text-xl leading-relaxed" style={{ color: 'rgba(240, 236, 228, 0.75)' }}>
                I'm a{' '}
                <span style={{ color: '#f0ece4' }}>Computer Engineering student</span>{' '}
                with strong backend expertise and hands-on experience building
                real-world projects using{' '}
                <span style={{ color: '#4B5694' }}>
                  Django, REST APIs, cloud, databases, caching systems,
                </span>{' '}
                and modern frontend frameworks.
              </p>
              <p className="mt-5 text-base md:text-lg leading-relaxed" style={{ color: 'rgba(240, 236, 228, 0.45)' }}>
                I enjoy building production-ready applications with a focus on
                performance, scalability, security, clean architecture, and
                user experience.
              </p>

              <div className="mt-8 flex flex-wrap gap-2">
                {highlights.map(({ icon: Icon, label }) => (
                  <motion.div
                    key={label}
                    whileHover={{ y: -2 }}
                    className="inline-flex items-center gap-2.5 rounded-full px-4 py-2 text-sm"
                    style={{
                      color: 'rgba(240, 236, 228, 0.7)',
                      background: 'rgba(240, 236, 228, 0.04)',
                      border: '1px solid rgba(240, 236, 228, 0.06)',
                    }}
                  >
                    <Icon size={14} style={{ color: '#4B5694' }} />
                    {label}
                  </motion.div>
                ))}
              </div>
            </div>
          </SectionReveal>

          {/* Right — quick facts, stacked vertically */}
          <div className="space-y-6">
            {[
              { label: 'focus', value: 'Backend', desc: 'APIs, auth, data modeling, scalable services.' },
              { label: 'cloud', value: 'AWS · Docker', desc: 'Production workloads on the cloud.' },
              { label: 'edge', value: 'AI', desc: 'Integrations + automation workflows.' },
            ].map((item, i) => (
              <SectionReveal key={item.label} delay={0.1 + i * 0.05}>
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  className="group flex items-start gap-4 p-5 rounded-2xl transition-colors"
                  style={{
                    background: 'rgba(240, 236, 228, 0.02)',
                    border: '1px solid rgba(240, 236, 228, 0.04)',
                  }}
                >
                  <span className="mono text-[10px] uppercase tracking-widest mt-1 shrink-0 w-16" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                    {item.label}
                  </span>
                  <div>
                    <div className="font-display text-xl font-bold" style={{ color: '#f0ece4' }}>
                      {item.value}
                    </div>
                    <p className="mt-1 text-sm" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
