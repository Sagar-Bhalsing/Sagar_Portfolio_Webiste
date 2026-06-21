'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { SECTIONS } from '@/lib/site-data'
import { useActiveSection } from '@/lib/use-active-section'
import { ThemeToggle } from '@/components/theme-toggle'

const IDS = SECTIONS.map((s) => s.id)

export function SiteNav() {
  const active = useActiveSection(IDS)
  const [mobileOpen, setMobileOpen] = useState(false)

  function go(id: string) {
    setMobileOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-5 md:px-12">
        <button
          type="button"
          data-cursor=""
          onClick={() => go('home')}
          className="font-mono text-sm font-medium tracking-tight text-foreground"
        >
          KM<span className="text-accent">.</span>
        </button>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 rounded-full border border-border bg-background/70 px-2 py-1.5 backdrop-blur-md md:flex">
          {SECTIONS.map((s) => {
            const isActive = active === s.id
            return (
              <button
                key={s.id}
                type="button"
                data-cursor=""
                onClick={() => go(s.id)}
                className="relative rounded-full px-3.5 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors"
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-accent"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    isActive
                      ? 'text-accent-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {s.label}
                </span>
              </button>
            )
          })}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            data-cursor=""
            onClick={() => setMobileOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="mx-4 overflow-hidden rounded-2xl border border-border bg-card/95 backdrop-blur-md md:hidden"
          >
            <ul className="flex flex-col p-2">
              {SECTIONS.map((s) => (
                <li key={s.id}>
                  <button
                    type="button"
                    onClick={() => go(s.id)}
                    className={`flex w-full items-center justify-between rounded-xl px-4 py-3 text-left font-mono text-sm uppercase tracking-wider transition-colors ${
                      active === s.id
                        ? 'bg-secondary text-accent'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {s.label}
                    <span className="text-xs opacity-60">
                      {String(SECTIONS.indexOf(s) + 1).padStart(2, '0')}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}
