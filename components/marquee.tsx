'use client'

import { motion, useReducedMotion } from 'framer-motion'

export function Marquee({
  items,
  reverse = false,
  duration = 28,
}: {
  items: string[]
  reverse?: boolean
  duration?: number
}) {
  const reduceMotion = useReducedMotion()
  const row = [...items, ...items]

  return (
    <div className="relative flex overflow-hidden py-2">
      <motion.div
        className="flex shrink-0 items-center gap-6 pr-6"
        animate={
          reduceMotion ? undefined : { x: reverse ? ['-50%', '0%'] : ['0%', '-50%'] }
        }
        transition={{ repeat: Infinity, ease: 'linear', duration }}
      >
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-6">
            <span className="font-heading text-4xl font-bold tracking-tight text-muted-foreground/40 transition-colors hover:text-accent md:text-6xl">
              {item}
            </span>
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
