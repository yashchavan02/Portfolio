import { motion } from 'framer-motion'
import { ArrowUpRight, Github, ExternalLink, Check } from 'lucide-react'
import { projects } from '@/data/profile'
import { SectionReveal } from '@/components/SectionReveal'

export function Projects() {
  return (
    <section id="projects" className="section-padding relative">
      <div className="container-narrow">
        <SectionReveal>
          <div className="mb-14">
            <span className="eyebrow">
              <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} />{' '}
              Featured Work
            </span>
            <h2 className="section-heading mt-5 text-balance">
              Projects that{' '}
              <span style={{ color: '#4B5694' }}>ship to production</span>
            </h2>
          </div>
        </SectionReveal>

        {/* Featured project — full width, different treatment */}
        <SectionReveal delay={0.05}>
          <motion.article
            whileHover={{ y: -3 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className="group relative overflow-hidden rounded-3xl p-8 md:p-10 mb-6"
            style={{
              background: 'linear-gradient(135deg, rgba(75, 86, 148, 0.08), rgba(240, 236, 228, 0.03))',
              border: '1px solid rgba(75, 86, 148, 0.12)',
            }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, rgba(75, 86, 148, 0.3), transparent 60%)' }} />

            <div className="relative">
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-mono" style={{ color: '#4B5694', background: 'rgba(75, 86, 148, 0.1)', border: '1px solid rgba(75, 86, 148, 0.2)' }}>
                  <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ background: '#4B5694' }} />
                  {projects[0].status}
                </span>
                <span className="mono text-[10px] uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                  {projects[0].category}
                </span>
              </div>

              <h3 className="font-display text-3xl md:text-4xl font-bold" style={{ color: '#f0ece4' }}>
                {projects[0].title}
              </h3>
              <p className="mt-1 text-sm" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
                {projects[0].subtitle}
              </p>

              <p className="mt-5 max-w-2xl leading-relaxed" style={{ color: 'rgba(240, 236, 228, 0.55)' }}>
                {projects[0].description}
              </p>

              <ul className="mt-6 grid sm:grid-cols-2 gap-2">
                {projects[0].features.map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm" style={{ color: 'rgba(240, 236, 228, 0.5)' }}>
                    <Check size={14} className="mt-0.5 shrink-0" style={{ color: '#4B5694' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-wrap gap-1.5">
                {projects[0].tech.map((t) => (
                  <span key={t} className="rounded-md px-2.5 py-1 text-[11px] font-mono" style={{ color: 'rgba(240, 236, 228, 0.6)', background: 'rgba(240, 236, 228, 0.04)', border: '1px solid rgba(240, 236, 228, 0.06)' }}>
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-4">
                {projects[0].link && (
                  <a href={projects[0].link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm font-medium" style={{ color: '#4B5694' }}>
                    <ExternalLink size={13} /> Live
                  </a>
                )}
                {projects[0].github && (
                  <a href={projects[0].github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'rgba(240, 236, 228, 0.6)' }}>
                    <Github size={13} /> Source
                  </a>
                )}
                <ArrowUpRight
                  size={18}
                  className="ml-auto text-white/30 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
                />
              </div>
            </div>
          </motion.article>
        </SectionReveal>

        {/* Remaining projects — varied card styles */}
        <div className="grid md:grid-cols-2 gap-4">
          {projects.slice(1).map((project, idx) => (
            <SectionReveal key={project.id} delay={0.1 + idx * 0.04}>
              <motion.article
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="group relative overflow-hidden rounded-2xl p-6 h-full flex flex-col"
                style={{
                  background: idx % 2 === 0 ? 'rgba(240, 236, 228, 0.03)' : 'rgba(17, 17, 17, 0.8)',
                  border: '1px solid rgba(240, 236, 228, 0.05)',
                }}
              >
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                  <span
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: project.status === 'live' ? '#4B5694' : '#4B5694',
                    }}
                  />
                  {project.status === 'live' ? 'Live' : 'Open Source'} ·{' '}
                  {project.category}
                </div>

                <h3 className="mt-3 font-display text-xl font-bold" style={{ color: '#f0ece4' }}>
                  {project.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'rgba(240, 236, 228, 0.35)' }}>
                  {project.subtitle}
                </p>

                <p className="mt-3 text-sm leading-relaxed" style={{ color: 'rgba(240, 236, 228, 0.5)' }}>
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="rounded-md px-2 py-0.5 text-[10px] font-mono" style={{ color: 'rgba(240, 236, 228, 0.5)', background: 'rgba(240, 236, 228, 0.03)', border: '1px solid rgba(240, 236, 228, 0.05)' }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-auto pt-5 flex items-center gap-4">
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'rgba(240, 236, 228, 0.7)' }}>
                      <ExternalLink size={13} /> Live
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-sm" style={{ color: 'rgba(240, 236, 228, 0.7)' }}>
                      <Github size={13} /> Source
                    </a>
                  )}
                  <ArrowUpRight
                    size={16}
                    className="ml-auto text-white/20 group-hover:text-white group-hover:rotate-45 transition-transform duration-300"
                  />
                </div>
              </motion.article>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
