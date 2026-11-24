'use client'

import { useState } from 'react'
import { ArrowUpRight } from 'lucide-react'
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from 'framer-motion'
import type { Project } from '@/lib/site-data'

type PhonePosition = 'left' | 'center' | 'right'

const phonePositions: Record<
  PhonePosition,
  { left: string; top: string; width: string; zIndex: number; entryX: number }
> = {
  left: { left: '2%', top: '16%', width: '42%', zIndex: 10, entryX: -34 },
  center: { left: '26%', top: '0%', width: '48%', zIndex: 30, entryX: 0 },
  right: { left: '56%', top: '16%', width: '42%', zIndex: 20, entryX: 34 },
}

function Phone({ image, title, aspectRatio }: { image?: string; title: string; aspectRatio?: string }) {
  const [failed, setFailed] = useState(false)

  return (
    <div
      style={{ aspectRatio: aspectRatio ?? '9 / 19' }}
      className="relative box-content overflow-hidden rounded-[clamp(1.25rem,2.5vw,2rem)] border-[5px] border-[#17151d] bg-[#24212a] shadow-[0_20px_44px_rgba(0,0,0,0.38)]"
    >
      <span className="absolute left-1/2 top-1 z-20 h-1 w-[28%] -translate-x-1/2 rounded-full bg-[#08070b]" />
      {image && !failed ? (
        <img
          src={image}
          alt={`${title} application screen`}
          onError={() => setFailed(true)}
          className="h-full w-full bg-[#121116] object-contain"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(145deg,#26222e,#111015_70%)] px-4 text-center font-mono text-[9px] uppercase tracking-[0.16em] text-white/35">
          Screen preview
        </div>
      )}
    </div>
  )
}

function PhoneSlot({
  image,
  title,
  aspectRatio,
  position,
  smoothX,
  smoothY,
  reduceMotion,
}: {
  image?: string
  title: string
  aspectRatio?: string
  position: PhonePosition
  smoothX: ReturnType<typeof useMotionValue<number>>
  smoothY: ReturnType<typeof useMotionValue<number>>
  reduceMotion: boolean | null
}) {
  const layout = phonePositions[position]
  const depth = position === 'center' ? 22 : position === 'left' ? 4 : 9
  const x = useTransform(smoothX, [-0.5, 0.5], position === 'center' ? [-12, 12] : position === 'left' ? [6, -6] : [-8, 8])
  const y = useTransform(smoothY, [-0.5, 0.5], position === 'center' ? [-10, 10] : position === 'left' ? [-4, 4] : [5, -5])

  return (
    <motion.div
      layout
      initial={reduceMotion ? { opacity: 0 } : { opacity: 0, x: layout.entryX, scale: position === 'center' ? 0.94 : 0.97 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: reduceMotion ? 0.2 : 0.55, delay: reduceMotion ? 0 : 0.12 + (position === 'center' ? 0 : position === 'left' ? 0.1 : 0.2), ease: [0.21, 0.47, 0.32, 0.98] }}
      style={{ left: layout.left, top: layout.top, width: layout.width, zIndex: layout.zIndex }}
      className="absolute will-change-transform"
    >
      <motion.div
        animate={reduceMotion ? undefined : { rotate: position === 'left' ? -9 : position === 'right' ? 9 : 0, scale: position === 'center' ? 1.03 : 1 }}
        transition={{ duration: 0.42, ease: [0.21, 0.47, 0.32, 0.98] }}
        style={reduceMotion ? undefined : { x, y, translateZ: depth }}
        className="will-change-transform"
      >
        <Phone image={image} title={title} aspectRatio={aspectRatio} />
      </motion.div>
    </motion.div>
  )
}

function PhoneComposition({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion()
  const [activeImage, setActiveImage] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const [hasInteracted, setHasInteracted] = useState(false)
  const pointerX = useMotionValue(0)
  const pointerY = useMotionValue(0)
  const smoothX = useSpring(pointerX, { stiffness: 180, damping: 24 })
  const smoothY = useSpring(pointerY, { stiffness: 180, damping: 24 })
  const tiltX = useTransform(smoothY, [-0.5, 0.5], [6, -6])
  const tiltY = useTransform(smoothX, [-0.5, 0.5], [-6, 6])
  const glowX = useTransform(smoothX, [-0.5, 0.5], [-30, 30])
  const glowY = useTransform(smoothY, [-0.5, 0.5], [-20, 20])
  const images = project.images ?? []
  const orderedImages = images.length
    ? [images[activeImage], ...images.filter((_, index) => index !== activeImage)]
    : [undefined, undefined, undefined]
  const positions: PhonePosition[] = ['center', 'left', 'right']
  const glowOpacity = reduceMotion ? 0.24 : isHovering ? 1 : hasInteracted ? 0.78 : 0.64
  const glowBackground = `radial-gradient(ellipse at 34% 50%, ${project.glowPrimary} 0%, transparent 58%), radial-gradient(ellipse at 68% 42%, ${project.glowSecondary} 0%, transparent 54%), radial-gradient(ellipse at 52% 68%, ${project.glowAccent} 0%, transparent 48%)`

  function resetPointer() {
    pointerX.set(0)
    pointerY.set(0)
    setIsHovering(false)
  }

  function handlePointerMove(event: React.PointerEvent<HTMLDivElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5)
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  return (
    <div
      className="relative mx-auto w-full max-w-[34rem] py-2 [perspective:1000px]"
      onPointerEnter={(event) => {
        if (!reduceMotion && event.pointerType === 'mouse') setIsHovering(true)
      }}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPointer}
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: reduceMotion ? 0.2 : 0.7, delay: reduceMotion ? 0 : 0.25 }}
      >
        <motion.div
          animate={{ opacity: glowOpacity }}
          transition={{ duration: 0.35 }}
          style={{
            ...(reduceMotion ? {} : { x: glowX, y: glowY }),
            background: glowBackground,
            boxShadow: `0 0 82px 22px ${project.glowPrimary}99, 0 0 118px 30px ${project.glowSecondary}66`,
          }}
          className="pointer-events-none absolute left-1/2 top-[17%] h-[62%] w-[84%] -translate-x-1/2 rounded-full blur-[42px] saturate-150 md:blur-[50px]"
        />
      </motion.div>

      <motion.div
        style={reduceMotion ? undefined : { rotateX: tiltX, rotateY: tiltY, transformStyle: 'preserve-3d' }}
        className="relative aspect-[1.45/1]"
      >
        {orderedImages.slice(0, 3).map((image, slot) => (
          <PhoneSlot
            key={image ?? `placeholder-${slot}`}
            image={image}
            title={project.title}
            aspectRatio={project.screenAspectRatio}
            position={positions[slot]}
            smoothX={smoothX}
            smoothY={smoothY}
            reduceMotion={reduceMotion}
          />
        ))}
      </motion.div>

      {images.length > 1 ? (
        <div className="mt-5 flex items-center justify-center gap-2" role="group" aria-label={`Choose a ${project.title} screen`}>
          {images.map((image, index) => (
            <button
              key={image}
              type="button"
              aria-label={`Show screen ${index + 1}`}
              aria-pressed={activeImage === index}
              onClick={() => {
                setActiveImage(index)
                setHasInteracted(true)
              }}
              className="group relative flex h-7 w-7 items-center justify-center"
            >
              <span className={`h-1.5 rounded-full transition-all duration-300 ${activeImage === index ? 'w-5 bg-[#a88af1]' : 'w-1.5 bg-muted-foreground/50 group-hover:bg-[#a88af1]/80'}`} />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

function ExploreLink({ project }: { project: Project }) {
  const reduceMotion = useReducedMotion()
  const linkX = useMotionValue(0)
  const linkY = useMotionValue(0)
  const arrowX = useTransform(linkX, [-0.5, 0.5], [-2, 3])
  const arrowY = useTransform(linkY, [-0.5, 0.5], [-2, 2])
  const linkMoveX = useTransform(linkX, [-0.5, 0.5], [-2, 2])
  const linkMoveY = useTransform(linkY, [-0.5, 0.5], [-1, 1])
  const arrowRotate = useTransform(linkX, [-0.5, 0.5], [-8, 10])

  function handleMove(event: React.PointerEvent<HTMLAnchorElement>) {
    if (reduceMotion || event.pointerType !== 'mouse') return
    const rect = event.currentTarget.getBoundingClientRect()
    linkX.set((event.clientX - rect.left) / rect.width - 0.5)
    linkY.set((event.clientY - rect.top) / rect.height - 0.5)
  }

  function reset() {
    linkX.set(0)
    linkY.set(0)
  }

  return (
    <motion.a
      href={project.exploreUrl ?? project.playStore ?? project.github}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor="Open"
      onPointerMove={handleMove}
      onPointerLeave={reset}
      style={reduceMotion ? undefined : { x: linkMoveX, y: linkMoveY }}
      className="group relative mt-10 inline-flex items-center gap-2 pb-1.5 font-mono text-xs uppercase tracking-[0.14em] text-foreground transition-colors hover:text-[#a88af1]"
    >
      Explore project
      <motion.span style={reduceMotion ? undefined : { x: arrowX, y: arrowY, rotate: arrowRotate }}>
        <ArrowUpRight className="size-4" />
      </motion.span>
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-100 bg-foreground transition-transform duration-300 group-hover:scale-x-0" />
      <span className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#a88af1] transition-transform duration-300 group-hover:scale-x-100" />
    </motion.a>
  )
}

export function ProjectCard({ project, reversed = false }: { project: Project; reversed?: boolean }) {
  const reduceMotion = useReducedMotion()

  return (
    <article className="border-t border-border py-16 first:border-t-0 first:pt-0 md:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.45fr)_minmax(0,0.55fr)] lg:gap-16 xl:gap-24">
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : 'hidden'}
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          className={reversed ? 'lg:order-2' : undefined}
        >
          <motion.div variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 14 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0.2 : 0.45 }}>
            <div className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
              <span className="text-accent">{project.index}</span><span className="h-px w-8 bg-border" /><span>{project.year}</span><span className="text-foreground/75">{project.category}</span>
            </div>
          </motion.div>
          <motion.h3 variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0.2 : 0.5 }} className="mt-6 max-w-md font-heading text-4xl font-bold tracking-[-0.04em] md:text-5xl">{project.title}</motion.h3>
          <motion.p variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 18 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0.2 : 0.5 }} className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">{project.description}</motion.p>
          <motion.div variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0.2 : 0.45 }} className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="border border-border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-muted-foreground">{tag}</span>)}
          </motion.div>
          <motion.div variants={{ hidden: { opacity: 0, y: reduceMotion ? 0 : 12 }, visible: { opacity: 1, y: 0 } }} transition={{ duration: reduceMotion ? 0.2 : 0.45 }}>
            <ExploreLink project={project} />
          </motion.div>
        </motion.div>
        <div className={reversed ? 'lg:order-1' : undefined}>
          <PhoneComposition project={project} />
        </div>
      </div>
    </article>
  )
}
