import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Menu, X, Github, Linkedin, Mail, Download } from 'lucide-react'
import { profile } from '@/data/profile'
import { navLinks } from '@/data/constants'
import { scrollToSection, useActiveSection } from '@/lib/utils'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const sectionIds = useMemo(() => navLinks.map((l) => l.id), [])
  const active = useActiveSection(sectionIds)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 backdrop-blur ${
          scrolled
            ? 'py-4 bg-[#0a0a0a]/80 border-b'
            : 'py-4 bg-transparent border-b border-transparent'
        }`}
        style={{
          borderColor: scrolled ? 'rgba(240, 236, 228, 0.08)' : 'transparent',
        }}
      >
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center px-2 py-2">
            <button
              onClick={() => scrollToSection('home')}
              className="justify-self-start font-display font-bold text-xl tracking-tight transition-colors hover:text-white"
              style={{ color: '#f0ece4' }}
            >
              Yash <span style={{ color: 'rgba(240, 236, 228, 0.4)' }}>Chavan</span>
            </button>

            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="relative px-3 py-2 text-sm font-medium rounded-lg transition-colors"
                  style={{ color: active === link.id ? '#f0ece4' : 'rgba(240, 236, 228, 0.5)' }}
                >
                  {link.label}
                  {active === link.id && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-lg"
                      style={{ background: 'rgba(240, 236, 228, 0.06)' }}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-2 justify-self-end">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.social.email}`}
                className="hidden sm:grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
              <button
                onClick={() => setMobileOpen((v) => !v)}
                className="md:hidden grid place-items-center h-9 w-9 rounded-lg"
                style={{ color: 'rgba(240, 236, 228, 0.8)' }}
                aria-label="Toggle menu"
              >
                {mobileOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-16 inset-x-3 z-40 md:hidden"
          >
            <div className="rounded-2xl glass-strong p-3 shadow-soft">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => {
                    setMobileOpen(false)
                    scrollToSection(link.id)
                  }}
                  className="block w-full text-left px-3 py-3 rounded-lg hover:bg-white/5 transition"
                  style={{ color: 'rgba(240, 236, 228, 0.8)' }}
                >
                  {link.label}
                </button>
              ))}
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 w-full btn-secondary justify-center"
              >
                <Download size={14} /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
