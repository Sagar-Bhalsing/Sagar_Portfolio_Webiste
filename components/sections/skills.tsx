'use client'

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { Marquee } from '@/components/marquee'
import { SKILL_GROUPS, MARQUEE_SKILLS } from '@/lib/site-data'

function DraggableChip({ label }: { label: string }) {
  const constraintsRef = useRef(null)
  return (
    <motion.span
      drag
      dragSnapToOrigin
      dragElastic={0.4}
      dragConstraints={{ left: -40, right: 40, top: -40, bottom: 40 }}
      whileDrag={{ scale: 1.12, cursor: 'grabbing' }}
      whileHover={{ y: -3 }}
      data-cursor="Drag"
      className="cursor-grab select-none rounded-full border border-border bg-background px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-accent hover:text-foreground"
    >
      {label}
    </motion.span>
  )
}

export function Skills() {
  return (
    <section id="skills" className="overflow-hidden py-28 md:py-40">
      <div className="mx-auto w-full max-w-[1400px] px-6 md:px-12">
        <SectionHeading index="04" label="Skills & Tools" />

        <h2 className="mt-12 max-w-2xl font-heading text-4xl font-bold leading-tight tracking-tight text-balance md:text-6xl">
          The stack I reach for.
        </h2>

        {/* Grouped grid */}
        <div className="mt-20 grid gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: gi * 0.08 }}
            >
              <h3 className="mb-5 font-mono text-xs uppercase tracking-widest text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <DraggableChip key={skill} label={skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-12 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          Tip — try dragging the chips around.
        </p>
      </div>

      {/* Infinite marquee */}
      <div className="mt-24 border-y border-border py-6">
        <Marquee items={MARQUEE_SKILLS} duration={32} />
      </div>
      <div className="border-b border-border py-6">
        <Marquee items={[...MARQUEE_SKILLS].reverse()} reverse duration={36} />
      </div>
    </section>
  )
}
