import { useEffect, useState } from 'react'
import { Github, GitCommit, Star, BookMarked } from 'lucide-react'
import { SectionReveal } from '@/components/SectionReveal'
import { profile } from '@/data/profile'

type GhData = {
  public_repos: number
  followers: number
  following: number
}

const fallback: GhData = {
  public_repos: 20,
  followers: 30,
  following: 12,
}

const TIMEOUT_MS = 8_000
const MAX_ATTEMPTS = 2
const RETRY_DELAY_MS = 1_500

export function GitHubStats() {
  const [data, setData] = useState<GhData>(fallback)
  const username = profile.social.github.split('/').pop() || 'yashchavan02'

  useEffect(() => {
    const controller = new AbortController()
    let cancelled = false

    const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

    const load = async () => {
      for (let attempt = 1; attempt <= MAX_ATTEMPTS; attempt++) {
        if (cancelled) return
        const timeoutId = setTimeout(() => controller.abort(), TIMEOUT_MS)
        try {
          const res = await fetch(`https://api.github.com/users/${username}`, {
            signal: controller.signal,
            headers: { Accept: 'application/vnd.github+json' },
          })
          clearTimeout(timeoutId)
          if (cancelled) return
          if (res.status === 403 || res.status === 429) {
            return
          }
          if (!res.ok) {
            if (attempt < MAX_ATTEMPTS) {
              await sleep(RETRY_DELAY_MS)
              continue
            }
            return
          }
          const json = await res.json()
          if (cancelled) return
          setData({
            public_repos: json.public_repos ?? fallback.public_repos,
            followers: json.followers ?? fallback.followers,
            following: json.following ?? fallback.following,
          })
          return
        } catch (err) {
          clearTimeout(timeoutId)
          if (cancelled) return
          if (err instanceof DOMException && err.name === 'AbortError') {
            return
          }
          if (attempt < MAX_ATTEMPTS) {
            await sleep(RETRY_DELAY_MS)
            continue
          }
        }
      }
    }
    load()
    return () => {
      cancelled = true
      controller.abort()
    }
  }, [username])

  return (
    <section id="github" className="section-padding relative">
      <div className="container-narrow">
        <SectionReveal>
          <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <span className="eyebrow">
                <span className="h-1.5 w-1.5 rounded-full" style={{ background: '#4B5694' }} />{' '}
                Open Source
              </span>
              <h2 className="section-heading mt-5 text-balance">
                GitHub{' '}
                <span style={{ color: '#4B5694' }}>activity</span>
              </h2>
            </div>
            <a
              href={profile.social.github}
              target="_blank"
              rel="noreferrer"
              className="btn-secondary w-fit"
            >
              <Github size={16} /> @{username}
            </a>
          </div>
        </SectionReveal>

        {/* Simple horizontal stat strip */}
        <SectionReveal delay={0.1}>
          <div
            className="flex flex-col sm:flex-row gap-px overflow-hidden rounded-2xl"
            style={{ background: 'rgba(240, 236, 228, 0.04)' }}
          >
            <StatBlock icon={BookMarked} label="Public Repos" value={data.public_repos} />
            <StatBlock icon={Star} label="Followers" value={data.followers} />
            <StatBlock icon={GitCommit} label="Following" value={data.following} />
          </div>
          <p className="mt-4 text-xs mono uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.3)' }}>
            live data · refreshed from github api
          </p>
        </SectionReveal>
      </div>
    </section>
  )
}

function StatBlock({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Github
  label: string
  value: number
}) {
  return (
    <div
      className="flex-1 p-8 text-left"
      style={{ background: 'rgba(10, 10, 10, 0.9)' }}
    >
      <Icon size={16} style={{ color: '#4B5694' }} />
      <div className="mt-5 font-display text-4xl font-bold" style={{ color: '#4B5694' }}>
        {value}
      </div>
      <div className="mt-1 text-sm" style={{ color: 'rgba(240, 236, 228, 0.5)' }}>
        {label}
      </div>
    </div>
  )
}
