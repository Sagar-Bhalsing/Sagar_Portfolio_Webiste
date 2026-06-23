'use client'

import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export function SiteFooter() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const update = () => {
      setTime(
        new Intl.DateTimeFormat('en-GB', {
          hour: '2-digit',
          minute: '2-digit',
          timeZone: 'Asia/Kolkata',
        }).format(new Date()),
      )
    }
    update()
    const id = setInterval(update, 30000)
    return () => clearInterval(id)
  }, [])

  return (
    <footer className="border-t border-border px-6 py-10 md:px-12">
      <div className="mx-auto flex w-full max-w-[1400px] flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span>© {new Date().getFullYear()} Sagar Bhalshing</span>
          <span className="hidden md:inline">·</span>
          <span> Mumbai {time}</span>
          <span className="hidden md:inline">·</span>
          <span>Built with care</span>
        </div>

        <button
          type="button"
          data-cursor=""
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground transition-colors hover:text-accent"
        >
          Back to top
          <ArrowUp className="h-4 w-4 transition-transform group-hover:-translate-y-0.5" />
        </button>
      </div>
    </footer>
  )
}
