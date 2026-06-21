export const SECTIONS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'experience', label: 'Experience' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
] as const

export type Project = {
  index: string
  title: string
  description: string
  tags: string[]
  year: string
  github: string
  demo: string
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    title: 'Halcyon',
    description:
      'A real-time collaborative editor with conflict-free sync, presence cursors, and offline support. Built for teams that move fast and never lose a keystroke.',
    tags: ['Next.js', 'TypeScript', 'WebSockets', 'CRDT'],
    year: '2025',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    index: '02',
    title: 'Northwind',
    description:
      'An analytics platform that turns raw event streams into readable narratives. Ingests millions of events daily with sub-second query latency.',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'React'],
    year: '2024',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    index: '03',
    title: 'Pocketsmith',
    description:
      'A native Android budgeting app with delightful motion design and a privacy-first local engine. Featured on Google Play.',
    tags: ['Kotlin', 'Jetpack Compose', 'Room', 'Coroutines'],
    year: '2024',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    index: '04',
    title: 'Lumen UI',
    description:
      'An open-source component library focused on accessibility and motion. 4k+ stars and used in production by dozens of teams.',
    tags: ['React', 'TypeScript', 'Framer Motion', 'a11y'],
    year: '2023',
    github: 'https://github.com',
    demo: 'https://example.com',
  },
]

export type Experience = {
  company: string
  role: string
  year: string
  description: string
}

export const EXPERIENCE: Experience[] = [
  {
    company: 'Vercel',
    role: 'Senior Full-stack Engineer',
    year: '2023 — Present',
    description:
      'Lead engineer on developer tooling. Shipped features used by millions of developers and mentored a team of five.',
  },
  {
    company: 'Linear',
    role: 'Product Engineer',
    year: '2021 — 2023',
    description:
      'Built core issue-tracking workflows and the real-time sync engine. Obsessed over performance and interaction polish.',
  },
  {
    company: 'Stripe',
    role: 'Software Engineer',
    year: '2019 — 2021',
    description:
      'Worked on the payments dashboard and internal design systems. Improved render performance across key flows.',
  },
  {
    company: 'Freelance',
    role: 'Full-stack Developer',
    year: '2017 — 2019',
    description:
      'Partnered with startups to design and ship web and mobile products from zero to launch.',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'PostgreSQL', 'Redis', 'GraphQL', 'tRPC'],
  },
  {
    category: 'Mobile',
    skills: ['Kotlin', 'Android', 'Jetpack Compose', 'Swift'],
  },
  {
    category: 'Tools',
    skills: ['Git', 'Docker', 'Figma', 'Vercel', 'Linear'],
  },
]

export const MARQUEE_SKILLS = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'Kotlin',
  'Android',
  'Jetpack Compose',
  'PostgreSQL',
  'GraphQL',
  'Tailwind',
  'Framer Motion',
  'Docker',
]

export const SOCIALS = [
  { label: 'Email', value: 'hello@kaimercer.dev', href: 'mailto:hello@kaimercer.dev' },
  { label: 'GitHub', value: 'github.com/kaimercer', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/kaimercer', href: 'https://linkedin.com' },
  { label: 'X / Twitter', value: '@kaimercer', href: 'https://x.com' },
]
