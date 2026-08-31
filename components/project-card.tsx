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
import { ArrowUpRight, ChevronLeft, ChevronRight, Code2 } from 'lucide-react'
import type { Project } from '@/lib/site-data'

export function ProjectCard({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const reduceMotion = useReducedMotion()
  const [hovered, setHovered] = useState(false)
  const [activeImage, setActiveImage] = useState(0)
  const images = project.images ?? []
  const previousImage = images.length
    ? images[(activeImage - 1 + images.length) % images.length]
    : undefined
  const nextImage = images.length
    ? images[(activeImage + 1) % images.length]
    : undefined

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

  function showPreviousImage(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    setActiveImage((current) => (current === 0 ? images.length - 1 : current - 1))
  }

  function showNextImage(e: React.MouseEvent<HTMLButtonElement>) {
    e.stopPropagation()
    setActiveImage((current) => (current + 1) % images.length)
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

        {images.length > 0 ? (
          <div className="mt-6">
            <div className="relative overflow-hidden rounded-xl border border-border bg-background px-7 py-5">
              <div className="relative mx-auto h-[360px] max-w-[300px] sm:h-[400px]">
                {images.length > 1 && previousImage ? (
                  <img
                    src={previousImage}
                    alt=""
                    aria-hidden
                    className="absolute left-0 top-1/2 h-[82%] w-[58%] -translate-x-[34%] -translate-y-1/2 rounded-[1.35rem] border border-border object-cover opacity-45 shadow-sm blur-[0.2px]"
                  />
                ) : null}

                {images.length > 1 && nextImage ? (
                  <img
                    src={nextImage}
                    alt=""
                    aria-hidden
                    className="absolute right-0 top-1/2 h-[82%] w-[58%] -translate-y-1/2 translate-x-[34%] rounded-[1.35rem] border border-border object-cover opacity-45 shadow-sm blur-[0.2px]"
                  />
                ) : null}

                <div className="absolute inset-x-1/2 top-0 h-full w-[68%] -translate-x-1/2 overflow-hidden rounded-[1.75rem] border border-border bg-black shadow-xl">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={images[activeImage]}
                      src={images[activeImage]}
                      alt={`${project.title} preview ${activeImage + 1}`}
                      initial={{ opacity: 0, x: reduceMotion ? 0 : 24, scale: reduceMotion ? 1 : 1.03 }}
                      animate={{ opacity: 1, x: 0, scale: 1 }}
                      exit={{ opacity: 0, x: reduceMotion ? 0 : -24, scale: reduceMotion ? 1 : 0.98 }}
                      transition={{ duration: 0.35 }}
                      className="h-full w-full object-cover"
                    />
                  </AnimatePresence>
                </div>

              {images.length > 1 ? (
                <>
                  <button
                    type="button"
                    aria-label="Previous project image"
                    data-cursor=""
                    onClick={showPreviousImage}
                    className="absolute left-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity hover:border-accent hover:text-accent group-hover:opacity-100"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    aria-label="Next project image"
                    data-cursor=""
                    onClick={showNextImage}
                    className="absolute right-0 top-1/2 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background/85 text-foreground opacity-0 backdrop-blur transition-opacity hover:border-accent hover:text-accent group-hover:opacity-100"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>

                  <div className="absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 gap-2">
                    {images.map((image, i) => (
                      <button
                        key={image}
                        type="button"
                        aria-label={`Show project image ${i + 1}`}
                        data-cursor=""
                        onClick={(e) => {
                          e.stopPropagation()
                          setActiveImage(i)
                        }}
                        className={`h-1.5 rounded-full transition-all ${
                          activeImage === i
                            ? 'w-6 bg-accent'
                            : 'w-1.5 bg-background/80 hover:bg-accent/70'
                        }`}
                      />
                    ))}
                  </div>
                </>
              ) : null}
              </div>
            </div>
          </div>
        ) : null}

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

        <div className="mt-7 flex items-center gap-5 border-t border-border pt-6">
          <a
            href={project.playStore ?? project.github}
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
