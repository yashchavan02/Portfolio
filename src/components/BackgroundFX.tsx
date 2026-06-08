import { motion } from 'framer-motion'

export function BackgroundFX() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Subtle warm blob — top left (hidden on mobile for perf) */}
      <motion.div
        className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full blur-3xl hidden md:block"
        style={{
          background: 'radial-gradient(circle at 30% 30%, rgba(75, 86, 148, 0.2), transparent 60%)',
          opacity: 0.5,
        }}
        animate={{ x: [0, 60, 0], y: [0, 30, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
      {/* Subtle warm blob — bottom right (hidden on mobile for perf) */}
      <motion.div
        className="absolute -bottom-40 -right-40 h-[600px] w-[600px] rounded-full blur-3xl hidden md:block"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(75, 86, 148, 0.15), transparent 60%)',
          opacity: 0.4,
        }}
        animate={{ x: [0, -40, 0], y: [0, -20, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 grid-bg opacity-40" />

      {/* Noise/grain — hidden on mobile */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay hidden md:block"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='160' height='160'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.7'/></svg>\")",
        }}
      />
    </div>
  )
}
