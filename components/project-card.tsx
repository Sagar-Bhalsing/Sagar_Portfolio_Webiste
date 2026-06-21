'use client'

import { useRef, useState } from 'react'
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  useReducedMotion,
} from 'framer-motion'
import { Code2, ArrowUpRight } from 'lucide-react'
import type { Project } from '@/lib/site-data'

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)

  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), {
    stiffness: 200,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), {
    stiffness: 200,
    damping: 20,
  })

  function handleMove(e: React.MouseEvent<HTMLDivElement>) {
    if (reduceMotion || !ref.current) return
    const rect = ref.current.getBoundingClientRect()
    mx.set((e.clientX - rect.left) / rect.width - 0.5)
    my.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function reset() {
    mx.set(0)
    my.set(0)
    setHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      data-cursor="Open"
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={reset}
      style={{ rotateX, rotateY, transformPerspective: 1000 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors duration-500 hover:border-accent/60 md:p-9"
    >
      {/* glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-accent/10 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
      />

      <div className="relative">
        <div className="flex items-start justify-between">
          <span className="font-mono text-xs tracking-widest text-accent">
            {project.index}
          </span>
          <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {project.year}
          </span>
        </div>

        <h3 className="mt-6 font-heading text-3xl font-bold tracking-tight md:text-4xl">
          {project.title}
        </h3>

        {/* Expanding details */}
        <motion.div
          initial={false}
          animate={{
            height: hovered ? 'auto' : 0,
            opacity: hovered ? 1 : 0,
          }}
          transition={{ duration: 0.45, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="overflow-hidden"
        >
          <p className="mt-5 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>
        </motion.div>
      </div>

      <div className="relative mt-8">
        {/* Tech tags */}
        <div className="flex flex-wrap gap-2">
          <AnimatePresence>
            {project.tags.map((tag, i) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0.6 }}
                animate={{
                  opacity: 1,
                  y: hovered ? 0 : 0,
                  scale: hovered ? 1.02 : 1,
                }}
                transition={{ delay: hovered ? i * 0.05 : 0, duration: 0.3 }}
                className={`rounded-full border px-3 py-1 font-mono text-[11px] uppercase tracking-wider transition-colors ${
                  hovered
                    ? 'border-accent/40 text-foreground'
                    : 'border-border text-muted-foreground'
                }`}
              >
                {tag}
              </motion.span>
            ))}
          </AnimatePresence>
        </div>

        {/* Links */}
        <div className="mt-7 flex items-center gap-5 border-t border-border pt-6">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor=""
            onClick={(e) => e.stopPropagation()}
            className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent"
          >
            <Code2 className="h-4 w-4" />
            Source
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor=""
            onClick={(e) => e.stopPropagation()}
            className="group/link flex items-center gap-1.5 font-mono text-xs uppercase tracking-wider text-foreground transition-colors hover:text-accent"
          >
            Live Demo
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </motion.div>
  )
}
