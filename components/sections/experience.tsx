'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { EXPERIENCE } from '@/lib/site-data'

function TimelineItem({
  item,
  index,
}: {
  item: (typeof EXPERIENCE)[number]
  index: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: 0.05 * index, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative grid gap-2 pl-10 md:grid-cols-[180px_1fr] md:gap-8 md:pl-16"
    >
      {/* node */}
      <span className="absolute left-[11px] top-2 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-background bg-border transition-colors duration-300 group-hover:bg-accent md:left-[19px]" />

      <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground md:pt-1">
        {item.year}
      </span>

      <div className="pb-12">
        <div className="flex flex-wrap items-baseline gap-x-3">
          <h3 className="font-heading text-2xl font-bold tracking-tight md:text-3xl">
            {item.role}
          </h3>
          <span className="font-mono text-sm text-accent">@ {item.company}</span>
        </div>
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {item.description}
        </p>
      </div>
    </motion.div>
  )
}

export function Experience() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start center', 'end center'],
  })
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1])

  return (
    <section id="experience" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading index="03" label="Experience" />

        <h2 className="mt-12 max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
          Where I&apos;ve made things.
        </h2>

        <div ref={ref} className="relative mt-20">
          {/* base line */}
          <div className="absolute bottom-0 left-[11px] top-0 w-px bg-border md:left-[19px]" />
          {/* animated fill */}
          <motion.div
            style={{ scaleY }}
            className="absolute bottom-0 left-[11px] top-0 w-px origin-top bg-accent md:left-[19px]"
          />

          <div>
            {EXPERIENCE.map((item, i) => (
              <TimelineItem key={item.company} item={item} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
