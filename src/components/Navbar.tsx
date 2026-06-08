import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, User, Code2, FolderOpen, Mail, Github, Linkedin } from 'lucide-react'
import { profile } from '@/data/profile'
import { navLinks } from '@/data/constants'
import { scrollToSection, useActiveSection } from '@/lib/utils'

const dockLinks = [
  { id: 'home', label: 'Home', Icon: Home },
  { id: 'about', label: 'About', Icon: User },
  { id: 'skills', label: 'Skills', Icon: Code2 },
  { id: 'projects', label: 'Projects', Icon: FolderOpen },
  { id: 'contact', label: 'Contact', Icon: Mail },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
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
      {/* ── Top bar ── */}
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
          <div className="flex items-center justify-between px-2 py-2">
            {/* Left: name */}
            <button
              onClick={() => scrollToSection('home')}
              className="font-display font-bold text-xl tracking-tight transition-colors hover:text-white"
              style={{ color: '#f0ece4' }}
            >
              Yash <span style={{ color: 'rgba(240, 236, 228, 0.4)' }}>Chavan</span>
            </button>

            {/* Desktop nav */}
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

            {/* Right: social icons (always visible on mobile, hidden on desktop since desktop has full links) */}
            <div className="flex items-center gap-2">
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="md:hidden grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="md:hidden grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={profile.social.github}
                target="_blank"
                rel="noreferrer"
                className="hidden md:grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href={profile.social.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hidden md:grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
              <a
                href={`mailto:${profile.social.email}`}
                className="hidden md:grid place-items-center h-9 w-9 rounded-lg hover:bg-white/5 transition"
                style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                aria-label="Email"
              >
                <Mail size={16} />
              </a>
            </div>
          </div>
        </div>
      </motion.header>

      {/* ── Mobile bottom dock ── */}
      <motion.nav
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.3 }}
        className="fixed inset-x-0 bottom-0 z-50 md:hidden flex justify-center pointer-events-none"
        style={{ paddingBottom: 'env(safe-area-inset-bottom, 12px)' }}
      >
        <div
          className="pointer-events-auto flex items-center gap-0.5 px-1.5 py-1.5 my-3 rounded-full max-w-[calc(100vw-2rem)]"
          style={{
            background: 'rgba(17, 17, 17, 0.9)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(240, 236, 228, 0.08)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5)',
          }}
        >
          {dockLinks.map(({ id, label, Icon }) => {
            const isActive = active === id
            return (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-full transition-colors"
                style={{ color: isActive ? '#f0ece4' : 'rgba(240, 236, 228, 0.4)' }}
                aria-label={label}
              >
                {isActive && (
                  <span
                    className="absolute inset-0 rounded-full"
                    style={{ background: 'rgba(75, 86, 148, 0.3)' }}
                  />
                )}
                <Icon size={18} className="relative z-10" />
                <span className="relative z-10 text-[9px] font-medium leading-none">{label}</span>
              </button>
            )
          })}
        </div>
      </motion.nav>
    </>
  )
}
