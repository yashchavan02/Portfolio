import { useEffect, useState } from 'react'

/**
 * Smooth-scroll to an in-page anchor, accounting for the sticky header height.
 */
export function scrollToSection(id: string) {
  const el = document.getElementById(id)
  if (!el) return
  const headerOffset = 80
  const top = el.getBoundingClientRect().top + window.scrollY - headerOffset
  window.scrollTo({ top, behavior: 'smooth' })
}

export function useScrollProgress() {
  const [progress, setProgress] = useState(0)
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement
      const scrolled = h.scrollTop
      const max = h.scrollHeight - h.clientHeight
      setProgress(max > 0 ? scrolled / max : 0)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return progress
}

export function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>(ids[0] ?? '')
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [ids])
  return active
}
