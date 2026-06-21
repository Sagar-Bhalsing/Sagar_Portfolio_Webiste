'use client'

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/section-heading'
import { FadeIn, RevealText } from '@/components/reveal'

const CHIPS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Kotlin',
  'Android',
  'Jetpack Compose',
]

export function About() {
  return (
    <section id="about" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading index="01" label="About" />

        <div className="mt-16 grid gap-12 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7 md:col-start-1">
            <h2 className="font-heading text-3xl font-bold leading-tight tracking-tight text-balance md:text-5xl">
              <RevealText text="I build software that respects both the people who use it and the people who maintain it." />
            </h2>
          </div>

          <div className="md:col-span-4 md:col-start-9 md:pt-2">
            <FadeIn delay={0.1}>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                I&apos;m a full-stack developer with eight years of experience
                spanning web platforms and native Android. I care about the
                details others skip — motion, latency, accessibility, and the
                quiet decisions that make a product feel considered.
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
        <div className="mt-16 flex flex-wrap gap-3">
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
