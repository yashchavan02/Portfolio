import { Helmet } from 'react-helmet-async'
import { useEffect } from 'react'
import { BackgroundFX } from '@/components/BackgroundFX'
import { LoadingScreen } from '@/components/LoadingScreen'
import { LiveTicker } from '@/components/LiveTicker'
import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Skills } from '@/components/sections/Skills'
import { Projects } from '@/components/sections/Projects'
import { Experience } from '@/components/sections/Experience'
import { GitHubStats } from '@/components/GitHubStats'
import { Contact } from '@/components/sections/Contact'
import { Footer } from '@/components/sections/Footer'
import { profile } from '@/data/profile'

function App() {
  // Lock scroll while the loading screen is up; release when it finishes exiting.
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    const release = () => {
      document.body.style.overflow = ''
    }
    window.addEventListener('portfolio:ready', release, { once: true })
    return () => {
      window.removeEventListener('portfolio:ready', release)
      document.body.style.overflow = ''
    }
  }, [])

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{`${profile.name} — ${profile.role}`}</title>
        <meta
          name="description"
          content={`${profile.name} is a ${profile.role} based in ${profile.location}. ${profile.tagline}`}
        />
        <meta property="og:title" content={`${profile.name} — Portfolio`} />
        <meta
          property="og:description"
          content="Full Stack Developer & Backend Engineer portfolio."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://yashchavan.dev" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: profile.name,
            jobTitle: profile.role,
            url: 'https://yashchavan.dev',
            sameAs: [profile.social.linkedin, profile.social.github],
            email: profile.social.email,
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Pune',
              addressRegion: 'Maharashtra',
              addressCountry: 'IN',
            },
          })}
        </script>
      </Helmet>

      <BackgroundFX />
      <LoadingScreen />

      <div className="relative z-10">
        <Navbar />
        <main className="pb-24 md:pb-0">
          <Hero />
          <LiveTicker />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <GitHubStats />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App
