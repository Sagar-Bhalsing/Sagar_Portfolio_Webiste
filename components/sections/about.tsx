'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { FadeIn, RevealText } from '@/components/reveal'

const CHIPS = [
  'Kotlin',
  'Android',
  'Jetpack Compose',
  'KMP',
  'CMP',
  'MVVM',
  'MVI',
  'Clean Architecture',
  'GraphQL',
  'REST APIs',
  'Coroutines',
  'Flow',
  'Hilt',
  'Koin',
  'Room',
  'SQLDelight',
  'Firebase',
  'GitHub Actions',
  'CI/CD',
]

export function About() {
  return (
    <section id="about" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading index="01" label="About" />

        <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7 md:col-start-1">
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              <RevealText text="I build Android experiences that are
fast, scalable, and thoughtfully
engineered — from the first line of
Kotlin to the final production release." />
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-2">
            <FadeIn delay={0.1}>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I&apos;m an Android developer with 2+ years of experience building production applications across sports and health-tech. I specialize in Kotlin, Jetpack Compose, MVVM/MVI, and scalable architecture, with a focus on performance, reliability, and clean user experiences.

I enjoy solving complex engineering problems — from real-time data and interactive UI to GraphQL integrations, AI-powered features, and biomarker visualizations. I care about writing maintainable code, building things that scale, and continuously improving how products feel and perform.
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
                When I&apos;m not shipping, you&apos;ll find me contributing to
                open source or chasing good light with a film camera.
              </p>
            </FadeIn>
          </div>
        </div>

        {/* Skill chips */}
        <div className="mt-12 flex flex-wrap gap-3">
          {CHIPS.map((chip, i) => (
            <motion.span
              key={chip}
              data-cursor=""
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{
                duration: 0.5,
                delay: i * 0.05,
                ease: [0.21, 0.47, 0.32, 0.98],
              }}
              whileHover={{ y: -4 }}
              className="cursor-default rounded-full border border-border px-4 py-2 font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              {chip}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  )
}
