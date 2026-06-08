import { motion } from 'framer-motion'

const items = [
  'Full Stack Developer',
  'Backend Engineer',
  'API Architecture',
  'Cloud Native',
  'AI Integrations',
]

export function LiveTicker() {
  const itemsList = [...items, ...items]
  return (
    <div className="relative overflow-hidden" style={{ borderTop: '1px solid rgba(240, 236, 228, 0.04)', borderBottom: '1px solid rgba(240, 236, 228, 0.04)', background: 'rgba(240, 236, 228, 0.01)' }}>
      <motion.div
        className="flex w-max gap-10 py-3.5 px-6 md:px-10 whitespace-nowrap text-xs font-mono uppercase tracking-widest"
        style={{ color: 'rgba(240, 236, 228, 0.35)' }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      >
        {itemsList.map((text, i) => (
          <span key={`${text}-${i}`} className="flex items-center gap-2.5">
            {text}
            <span className="h-1 w-1 rounded-full" style={{ background: 'rgba(75, 86, 148, 0.5)' }} />
          </span>
        ))}
      </motion.div>
    </div>
  )
}
