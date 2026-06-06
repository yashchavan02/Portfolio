import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react'
import { navLinks } from '@/data/constants'
import { profile } from '@/data/profile'
import { scrollToSection } from '@/lib/utils'

export function Footer() {
  return (
    <footer className="relative mt-12" style={{ borderTop: '1px solid rgba(240, 236, 228, 0.04)' }}>
      <div className="container-narrow px-6 md:px-10 py-12 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-2 font-display font-bold text-lg">
            <span className="grid place-items-center h-9 w-9 rounded-xl text-sm" style={{ background: 'rgba(75, 86, 148, 0.1)', border: '1px solid rgba(75, 86, 148, 0.12)', color: '#4B5694' }}>
              YC
            </span>
            <span style={{ color: '#f0ece4' }}>
              Yash <span style={{ color: 'rgba(240, 236, 228, 0.4)' }}>Chavan</span>
            </span>
          </div>
          <p className="mt-3 max-w-xs text-sm" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
            Full Stack Developer & Backend Engineer building scalable, secure,
            and delightful products.
          </p>
        </div>

        <div>
          <h4 className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
            Quick Links
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2">
            {navLinks.map((l) => (
              <li key={l.id}>
                <button
                  onClick={() => scrollToSection(l.id)}
                  className="text-sm transition-colors hover:!text-white"
                  style={{ color: 'rgba(240, 236, 228, 0.6)' }}
                >
                  {l.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
            Social
          </h4>
          <div className="mt-4 flex gap-2">
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-white/10"
              aria-label="GitHub"
            >
              <Github size={16} />
            </a>
            <a
              href={profile.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-white/10"
              aria-label="LinkedIn"
            >
              <Linkedin size={16} />
            </a>
            <a
              href={`mailto:${profile.social.email}`}
              className="grid place-items-center h-10 w-10 rounded-full glass hover:bg-white/10"
              aria-label="Email"
            >
              <Mail size={16} />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('home')}
            className="mt-6 btn-secondary !px-3 !py-2 text-xs"
          >
            <ArrowUp size={14} /> Back to top
          </button>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(240, 236, 228, 0.04)' }}>
        <div className="container-narrow px-6 md:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
          <div>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1.5">
            Crafted with <Heart size={12} style={{ color: '#4B5694' }} /> using
            React, Tailwind & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  )
}
