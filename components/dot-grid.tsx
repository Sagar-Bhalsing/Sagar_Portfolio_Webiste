'use client'

import { useEffect, useRef } from 'react'

export function DotGrid({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    const c = canvas
    const g = ctx

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)
    const spacing = 34
    const mouse = { x: -9999, y: -9999 }
    const radius = 130

    function getAccent() {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue('--accent')
        .trim()
      return v || '#ff9f1c'
    }
    function getDot() {
      const v = getComputedStyle(document.documentElement)
        .getPropertyValue('--muted-foreground')
        .trim()
      return v || '#8a857a'
    }

    let accent = getAccent()
    let dotColor = getDot()

    function resize() {
      const parent = c.parentElement
      width = parent?.clientWidth ?? window.innerWidth
      height = parent?.clientHeight ?? window.innerHeight
      c.width = width * dpr
      c.height = height * dpr
      c.style.width = `${width}px`
      c.style.height = `${height}px`
      g.setTransform(dpr, 0, 0, dpr, 0, 0)
      accent = getAccent()
      dotColor = getDot()
    }

    let raf = 0
    function draw() {
      g.clearRect(0, 0, width, height)
      const cols = Math.ceil(width / spacing)
      const rows = Math.ceil(height / spacing)

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * spacing
          const y = j * spacing
          const dx = x - mouse.x
          const dy = y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)

          let r = 1
          let color = dotColor
          let alpha = 0.25

          if (dist < radius) {
            const t = 1 - dist / radius
            r = 1 + t * 2.8
            alpha = 0.25 + t * 0.75
            color = accent
          }

          g.globalAlpha = alpha
          g.fillStyle = color
          g.beginPath()
          g.arc(x, y, r, 0, Math.PI * 2)
          g.fill()
        }
      }
      g.globalAlpha = 1
      raf = requestAnimationFrame(draw)
    }

    function onMove(e: MouseEvent) {
      const rect = c.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', onMove)
    document.addEventListener('mouseleave', onLeave)

    if (reduce) {
      draw()
      cancelAnimationFrame(raf)
    } else {
      draw()
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className={className} aria-hidden />
}
