'use client'

import { useEffect, useRef, useState } from 'react'
import { useReducedMotion } from 'framer-motion'

const CHARS = '!<>-_\\/[]{}—=+*^?#________'

export function ScrambleText({
  text,
  className,
  startDelay = 0,
  duration = 1400,
}: {
  text: string
  className?: string
  startDelay?: number
  duration?: number
}) {
  const reduceMotion = useReducedMotion()
  const [display, setDisplay] = useState(reduceMotion ? text : '')
  const frame = useRef<number>(0)

  useEffect(() => {
    if (reduceMotion) {
      setDisplay(text)
      return
    }

    let raf = 0
    let start = 0
    const timeout = window.setTimeout(() => {
      const tick = (now: number) => {
        if (!start) start = now
        const progress = Math.min((now - start) / duration, 1)
        const revealCount = Math.floor(progress * text.length)
        let out = ''
        for (let i = 0; i < text.length; i++) {
          if (text[i] === ' ') {
            out += ' '
          } else if (i < revealCount) {
            out += text[i]
          } else {
            out += CHARS[Math.floor(Math.random() * CHARS.length)]
          }
        }
        setDisplay(out)
        frame.current++
        if (progress < 1) {
          raf = requestAnimationFrame(tick)
        } else {
          setDisplay(text)
        }
      }
      raf = requestAnimationFrame(tick)
    }, startDelay)

    return () => {
      window.clearTimeout(timeout)
      cancelAnimationFrame(raf)
    }
  }, [text, duration, startDelay, reduceMotion])

  return (
    <span className={className} aria-label={text}>
      <span aria-hidden>{display || '\u00A0'}</span>
    </span>
  )
}
