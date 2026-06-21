'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Magnetic } from '@/components/magnetic'
import { RevealText } from '@/components/reveal'
import { SOCIALS } from '@/lib/site-data'

export function Contact() {
  return (
    <section id="contact" className="px-6 py-28 md:px-12 md:py-40">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading index="05" label="Contact" />

        <div className="mt-16 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="font-heading text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[0.95] tracking-tight">
              <RevealText text="Let's build" />
              <br />
              <span className="text-accent">
                <RevealText text="something." delay={0.15} />
              </span>
            </h2>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10"
            >
              <Magnetic strength={0.4}>
                <a
                  href="mailto:hello@kaimercer.dev"
                  data-cursor="Say hi"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-mono text-sm font-medium uppercase tracking-wider text-accent-foreground"
                >
                  hello@kaimercer.dev
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </Magnetic>
            </motion.div>
          </div>

          {/* Socials */}
          <div className="md:col-span-4 md:col-start-9">
            <ul className="divide-y divide-border border-y border-border">
              {SOCIALS.map((social, i) => (
                <motion.li
                  key={social.label}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    data-cursor=""
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors group-hover:text-accent">
                      {social.label}
                    </span>
                    <span className="flex items-center gap-2 font-heading text-lg font-medium tracking-tight transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:text-accent">
                      {social.value}
                      <ArrowUpRight className="h-4 w-4 opacity-0 transition-opacity group-hover:opacity-100" />
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
