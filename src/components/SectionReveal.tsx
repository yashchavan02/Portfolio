import { motion, type Variants } from 'framer-motion'
import { type ReactNode } from 'react'

type Props = {
  children: ReactNode
  delay?: number
  className?: string
  id?: string
}

const variants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
}

/**
 * Wraps content in a section-level reveal animation.
 * Once revealed, the element stays put (no flicker on re-render).
 */
export function SectionReveal({ children, delay = 0, className = '', id }: Props) {
  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      custom={delay}
    >
      {children}
    </motion.div>
  )
}
