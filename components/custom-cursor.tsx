'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring, useReducedMotion } from 'framer-motion'

export function CustomCursor() {
  const reduceMotion = useReducedMotion()
  const [enabled, setEnabled] = useState(false)
  const [hovering, setHovering] = useState(false)
  const [label, setLabel] = useState<string | null>(null)
  const [hidden, setHidden] = useState(true)

  const x = useMotionValue(-100)
  const y = useMotionValue(-100)

  const springConfig = { damping: 28, stiffness: 400, mass: 0.5 }
  const cx = useSpring(x, springConfig)
  const cy = useSpring(y, springConfig)

  useEffect(() => {
    // Only enable on fine pointer (mouse) devices
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine || reduceMotion) return
    setEnabled(true)
    document.documentElement.classList.add('hide-cursor')

    const move = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
      setHidden(false)

      const target = (e.target as HTMLElement)?.closest<HTMLElement>(
        '[data-cursor]',
      )
      if (target) {
        setHovering(true)
        setLabel(target.dataset.cursor || null)
      } else {
        setHovering(false)
        setLabel(null)
      }
    }

    const leave = () => setHidden(true)

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseout', leave)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseout', leave)
      document.documentElement.classList.remove('hide-cursor')
    }
  }, [reduceMotion, x, y])

  if (!enabled) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[70] flex items-center justify-center"
      style={{ x: cx, y: cy }}
      animate={{ opacity: hidden ? 0 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex items-center justify-center rounded-full"
        animate={{
          width: hovering ? (label ? 72 : 48) : 12,
          height: hovering ? (label ? 72 : 48) : 12,
          marginLeft: hovering ? (label ? -36 : -24) : -6,
          marginTop: hovering ? (label ? -36 : -24) : -6,
          backgroundColor: hovering
            ? 'var(--accent)'
            : 'var(--foreground)',
        }}
        transition={{ type: 'spring', damping: 20, stiffness: 300, mass: 0.4 }}
      >
        {label ? (
          <span className="font-mono text-[10px] font-medium uppercase tracking-wider text-accent-foreground">
            {label}
          </span>
        ) : null}
      </motion.div>
    </motion.div>
  )
}
