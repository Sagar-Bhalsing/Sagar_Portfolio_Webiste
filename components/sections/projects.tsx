import { ProjectCard } from '@/components/project-card'
import { PROJECTS } from '@/lib/site-data'

export function Projects() {
  const orderedProjects = [...PROJECTS].sort(
    (first, second) => Number(first.index) - Number(second.index),
  )

  return (
    <section id="work" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto w-full max-w-[1400px]">
        <div className="flex items-center gap-4">
          <span className="shrink-0 font-mono text-xs uppercase tracking-[0.16em] text-accent">02 / Selected work</span>
          <span className="h-px w-full bg-border" />
        </div>
        <h2 className="mt-10 max-w-3xl font-heading text-4xl font-bold leading-[1.05] tracking-[-0.045em] text-balance md:text-6xl">A few things I&apos;ve built recently.</h2>
        <p className="mt-5 max-w-xl text-pretty leading-relaxed text-muted-foreground md:text-lg">A selection of mobile experiences, from health-tech to sports and gaming.</p>
        <div className="mt-20 md:mt-28">
          {orderedProjects.map((project, index) => <ProjectCard key={project.title} project={project} reversed={index % 2 === 1} />)}
        </div>
      </div>
    </section>
  )
}
