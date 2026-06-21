'use client'

import { motion } from 'framer-motion'
import { ArrowDownRight, ArrowUpRight } from 'lucide-react'
import { DotGrid } from '@/components/dot-grid'
import { Magnetic } from '@/components/magnetic'
import { ScrambleText } from '@/components/scramble-text'

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden px-6 pt-28 pb-16 md:px-12"
    >
      <DotGrid className="absolute inset-0 -z-10 h-full w-full opacity-70" />

      <div className="mx-auto w-full max-w-[1400px]">
        {/* top meta row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-10 flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-xs uppercase tracking-widest text-muted-foreground"
        >
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Available for work
          </span>
          <span>Mumbai, India · IST</span>
          <span className="hidden md:inline">Android · Mobile</span>
        </motion.div>

        {/* Name */}
        <h1 className="font-heading text-[clamp(2.75rem,12vw,11rem)] font-bold leading-[0.92] tracking-tight">
          <span className="block overflow-hidden">
            <ScrambleText text="SAGAR" startDelay={250} duration={900} />
          </span>
          <span className="block overflow-hidden text-accent">
            <ScrambleText text="BHALSING" startDelay={450} duration={1100} />
          </span>
        </h1>

        {/* Tagline + CTA */}
        <div className="mt-10 grid gap-10 md:mt-16 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-2xl"
          >
            Android developer building things that work —{' '}
            <span className="text-foreground">
              high-performance mobile apps in Kotlin &amp; Jetpack Compose for
              10M+ users.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic strength={0.5}>
              <button
                type="button"
                data-cursor="View"
                onClick={() => scrollTo('work')}
                className="group flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-accent-foreground transition-transform"
              >
                View Work
                <ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </button>
            </Magnetic>

            <Magnetic strength={0.5}>
              <button
                type="button"
                data-cursor=""
                onClick={() => scrollTo('contact')}
                className="group flex items-center gap-2 rounded-full border border-border px-6 py-3.5 font-mono text-sm font-medium uppercase tracking-wider text-foreground transition-colors hover:border-accent hover:text-accent"
              >
                Contact
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </Magnetic>
          </motion.div>
        </div>
      </div>

      {/* scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="mx-auto mt-16 flex w-full max-w-[1400px] items-center gap-3 font-mono text-[11px] uppercase tracking-widest text-muted-foreground"
      >
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          ↓
        </motion.span>
        Scroll to explore
      </motion.div>
    </section>
  )
}
