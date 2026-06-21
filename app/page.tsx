import { CustomCursor } from '@/components/custom-cursor'
import { ScrollProgress } from '@/components/scroll-progress'
import { SiteNav } from '@/components/site-nav'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { About } from '@/components/sections/about'
import { Projects } from '@/components/sections/projects'
import { Experience } from '@/components/sections/experience'
import { Skills } from '@/components/sections/skills'
import { Contact } from '@/components/sections/contact'

export default function Page() {
  return (
    <>
      <div className="grain-overlay" aria-hidden />
      <CustomCursor />
      <ScrollProgress />
      <SiteNav />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
