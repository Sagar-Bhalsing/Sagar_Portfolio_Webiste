'use client'

import { motion } from 'framer-motion'

export function SectionHeading({
  index,
  label,
}: {
  index: string
  label: string
}) {
  return (
    <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      <span className="text-accent">{index}</span>
      <span>{label}</span>
      <motion.span
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        className="h-px flex-1 origin-left bg-border"
      />
    </div>
  )
}
