import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export function LoadingScreen() {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const t = window.setTimeout(() => setVisible(false), 900)
    return () => window.clearTimeout(t)
  }, [])

  const handleExitComplete = () => {
    window.dispatchEvent(new Event('portfolio:ready'))
  }

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="fixed inset-0 z-[100] grid place-items-center bg-background"
        >
          <div className="flex flex-col items-center gap-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="grid place-items-center h-16 w-16 rounded-2xl text-sm"
              style={{ background: 'rgba(75, 86, 148, 0.1)', border: '1px solid rgba(75, 86, 148, 0.15)', color: '#4B5694' }}
            >
              <span className="font-display font-bold text-2xl">YC</span>
            </motion.div>
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: 140 }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
              className="h-px"
              style={{ background: 'linear-gradient(90deg, transparent, rgba(240, 236, 228, 0.4), transparent)' }}
            />
            <p className="mono text-xs uppercase tracking-widest" style={{ color: 'rgba(240, 236, 228, 0.4)' }}>
              Loading experience
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
