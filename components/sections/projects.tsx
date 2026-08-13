'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/site-data'

function ParallaxCard({
  index,
  children,
}: {
  index: number
  children: React.ReactNode
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  // alternate offset direction for editorial rhythm
  const dir = index % 2 === 0 ? -40 : 40
  const y = useTransform(scrollYProgress, [0, 1], [dir, -dir])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="work" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading index="02" label="Selected Work" />

        <h2 className="mt-10 max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
          A few things I&apos;ve built recently.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-2 md:gap-8">
          {PROJECTS.map((project, i) => (
            <div
              key={project.title}
              className={i % 2 === 1 ? 'md:mt-12' : undefined}
            >
              <ParallaxCard index={i}>
                <ProjectCard project={project} />
              </ParallaxCard>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
