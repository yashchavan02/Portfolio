import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ArrowUpRight,
} from 'lucide-react'
import { profile, projects } from '@/data/profile'
import { scrollToSection } from '@/lib/utils'

const todayLabel = () => {
  const d = new Date()
  return d.toLocaleDateString('en-GB', { day: '2-digit', month: 'long', year: 'numeric' })
}

export function Hero() {
  const featured = projects.slice(0, 2)
  const [dateLabel, setDateLabel] = useState(todayLabel)

  useEffect(() => {
    const id = setInterval(() => setDateLabel(todayLabel()), 60_000)
    return () => clearInterval(id)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-24 sm:pt-28 pb-12 overflow-hidden"
    >
      <div className="container-narrow px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-3 mb-16"
        >
          <div className="flex items-center gap-3">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full opacity-75" style={{ background: '#4B5694' }} />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} />
            </span>
            <span className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.5)' }}>
              Open to work · {dateLabel}
            </span>
          </div>
          <div className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
            Portfolio
          </div>
        </motion.div>

        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="font-display font-bold text-[clamp(2.5rem,7.5vw,6rem)] leading-[0.95] tracking-[-0.04em]"
          >
            <span className="block" style={{ color: '#f0ece4' }}>
              I build{' '}
              <span style={{ color: '#4B5694' }}>backend systems</span>
            </span>
            <span className="block" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
              that ship to production.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button onClick={() => scrollToSection('projects')} className="btn-primary group">
              View selected work
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
            </button>
            <button onClick={() => scrollToSection('contact')} className="btn-secondary">
              <Mail size={15} /> Get in touch
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="mt-20"
        >
          <div className="flex items-baseline justify-between gap-4 mb-6">
            <div className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
              Selected work · 2024–2026
            </div>
            <button
              onClick={() => scrollToSection('projects')}
              className="mono text-xs uppercase tracking-widest transition-colors hover:text-white"
              style={{ color: 'rgba(240, 236, 228, 0.4)' }}
            >
              All projects →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {featured.map((p, idx) => (
              <motion.a
                key={p.id}
                href={p.link || p.github || '#'}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -3 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                className="group block rounded-2xl p-6 transition-colors"
                style={{
                  background: 'rgba(240, 236, 228, 0.025)',
                  border: '1px solid rgba(240, 236, 228, 0.05)',
                }}
              >
                <div className="flex items-start justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="mono text-[10px] tabular-nums" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-widest"
                      style={{ color: '#4B5694' }}
                    >
                      <span className="h-1 w-1 rounded-full" style={{ background: '#4B5694' }} />
                      {p.status}
                    </span>
                  </div>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform group-hover:rotate-45"
                    style={{ color: 'rgba(240, 236, 228, 0.3)' }}
                  />
                </div>

                <h3 className="font-display text-2xl font-bold" style={{ color: '#f0ece4' }}>
                  {p.title}
                </h3>
                <p className="mt-1 text-sm" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
                  {p.subtitle}
                </p>

                <p className="mt-4 text-sm leading-relaxed line-clamp-2" style={{ color: 'rgba(240, 236, 228, 0.55)' }}>
                  {p.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded-md px-2 py-0.5 text-[10px] font-mono"
                      style={{
                        color: 'rgba(240, 236, 228, 0.5)',
                        background: 'rgba(240, 236, 228, 0.03)',
                        border: '1px solid rgba(240, 236, 228, 0.04)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16"
        >
          <div className="h-px w-full mb-6" style={{ background: 'rgba(240, 236, 228, 0.06)' }} />
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="flex items-center gap-2">
              <span className="mono text-[10px] uppercase tracking-widest mr-2" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
                Elsewhere
              </span>
              {[
                { icon: Github, href: profile.social.github, label: 'GitHub' },
                { icon: Linkedin, href: profile.social.linkedin, label: 'LinkedIn' },
                { icon: Mail, href: `mailto:${profile.social.email}`, label: 'Email' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  aria-label={label}
                  className="group grid place-items-center h-8 w-8 rounded-lg transition"
                  style={{
                    background: 'rgba(240, 236, 228, 0.03)',
                    border: '1px solid rgba(240, 236, 228, 0.05)',
                    color: 'rgba(240, 236, 228, 0.5)',
                  }}
                >
                  <Icon size={13} />
                </a>
              ))}
            </div>

            <div className="flex items-center gap-5 mono text-[10px] uppercase tracking-widest">
              {[
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'experience', label: 'Experience' },
                { id: 'github', label: 'GitHub' },
              ].map((s, i) => (
                <button
                  key={s.id}
                  onClick={() => scrollToSection(s.id)}
                  className="group flex items-center gap-1.5 transition-colors hover:text-white"
                  style={{ color: 'rgba(240, 236, 228, 0.4)' }}
                >
                  <span className="tabular-nums" style={{ color: 'rgba(240, 236, 228, 0.25)' }}>
                    0{i + 1}
                  </span>
                  <span>{s.label}</span>
                </button>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
