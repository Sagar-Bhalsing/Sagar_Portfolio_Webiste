'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight, Code2, Mail } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { Magnetic } from '@/components/magnetic'
import { RevealText } from '@/components/reveal'
import { SOCIALS } from '@/lib/site-data'

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2C6.48 2 2 6.58 2 12.25c0 4.53 2.87 8.37 6.84 9.73.5.09.68-.22.68-.49v-1.72c-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.56 2.34 1.11 2.91.85.09-.67.35-1.11.63-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.35 9.35 0 0 1 12 7.01c.85 0 1.7.12 2.5.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.94.68 1.9v2.78c0 .27.18.59.69.49A10.16 10.16 0 0 0 22 12.25C22 6.58 17.52 2 12 2Z" />
    </svg>
  )
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M5.34 8.98H2.5V21h2.84V8.98ZM5.57 5.26C5.55 4.42 4.95 3.78 3.98 3.78S2.36 4.42 2.36 5.26c0 .82.62 1.49 1.58 1.49h.02c.99 0 1.61-.67 1.61-1.49ZM21.64 14.11c0-3.68-1.92-5.39-4.47-5.39-2.06 0-2.98 1.16-3.5 1.98V8.98h-2.84c.04 1.13 0 12.02 0 12.02h2.84v-6.71c0-.36.03-.72.13-.98.29-.72.94-1.46 2.04-1.46 1.44 0 2.02 1.13 2.02 2.78V21h2.84l-.06-6.89Z" />
    </svg>
  )
}

const socialIcons = {
  Email: Mail,
  GitHub: GitHubIcon,
  LinkedIn: LinkedInIcon,
  LeetCode: Code2,
} as const

export function Contact() {
  return (
    <section id="contact" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <SectionHeading index="05" label="Contact" />

        <div className="mt-12 grid gap-12 md:grid-cols-12">
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
                  href="mailto:sbhalshing2265@gmail.com"
                  data-cursor="Say hi"
                  className="group inline-flex items-center gap-3 rounded-full bg-accent px-7 py-4 font-mono text-sm font-medium uppercase tracking-wider text-accent-foreground"
                >
                  sbhalshing2265@gmail.com
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
                    className="group flex items-center justify-start gap-4 py-5"
                    aria-label={social.label}
                  >
                    <span className="relative flex size-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors group-hover:border-accent group-hover:text-accent">
                      {(() => {
                        const Icon = socialIcons[social.label as keyof typeof socialIcons] ?? ArrowUpRight
                        return <Icon className="h-5 w-5" aria-hidden />
                      })()}
                      <span className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 -translate-y-[calc(100%+0.5rem)] rounded bg-foreground px-2.5 py-1 font-mono text-[11px] uppercase tracking-widest text-background opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                        {social.label}
                      </span>
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
