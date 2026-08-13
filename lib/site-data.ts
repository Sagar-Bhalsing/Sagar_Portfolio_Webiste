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
  playStore?: string
  video?: string
}

export const PROJECTS: Project[] = [
  {
    index: '01',
    title: '101+',
    description:
      'A longevity & health optimization app live on the US Play Store. Built biomarker visualizations in Jetpack Compose with real-time metric tracking, GraphQL APIs, and Shen AI SDK face-scan analysis for personalized health insights.',
    tags: ['Kotlin', 'Jetpack Compose', 'GraphQL', 'Shen AI SDK'],
    year: '2025',
    github: 'https://play.google.com/store/apps/details?id=com.bond.fireapp&pcampaignid=web_share',
    demo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    playStore: 'https://play.google.com/store/apps/details?id=com.bond.fireapp&pcampaignid=web_share',
    video: '/videos/5217386-hd_1080_1920_30fps.mp4'
  },
  {
    index: '02',
    title: 'UEFA More or Less',
    description:
      'A real-time interactive sports game supporting 200K+ quarterly active users. Improved retention by 25% through personalized push notifications and analytics-driven feature enhancements.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'Analytics'],
    year: '2024',
    github: 'https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&pcampaignid=web_share',
    demo: 'https://play.google.com',
    video: '/videos/5217386-hd_1080_1920_30fps.mp4'
  },
  {
    index: '03',
    title: 'UEFA Trivia Quiz',
    description:
      'An image-based trivia experience driving 30% higher engagement through optimized UI and smooth state handling. Reduced load times by 35% using DataStore caching and optimized network interactions.',
    tags: ['Kotlin', 'Jetpack Compose', 'DataStore', 'REST'],
    year: '2024',
    github: 'https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&pcampaignid=web_share',
    demo: 'https://play.google.com',
    video: '/videos/5217386-hd_1080_1920_30fps.mp4'
  },
  {
    index: '04',
    title: 'F1 Predictor Game',
    description:
      'An Android prediction game built on modern MVI architecture with predictable unidirectional data flow. Architected an extensible codebase supporting rapid feature expansion with minimal refactoring.',
    tags: ['Kotlin', 'MVI', 'Clean Architecture', 'Coroutines'],
    year: '2023',
    github: 'https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&pcampaignid=web_share',
    demo: 'https://play.google.com',
    video: '/videos/5217386-hd_1080_1920_30fps.mp4'
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
    company: 'Bond.AI',
    role: 'Android Developer',
    year: 'Dec 2025 — Present',
    description:
      'Building 101+, a longevity-focused app live on the US Play Store. Develop scalable Jetpack Compose features with MVVM and GraphQL integration, integrated the Shen AI SDK for face-scan biomarker analysis, and maintain 90%+ unit test coverage across weekly production releases.',
  },
  {
    company: 'Sportz Interactive',
    role: 'Associate — Android',
    year: 'Aug 2024 — Dec 2025',
    description:
      'Delivered 5+ production features increasing user engagement by 20% within three months across high-traffic sports apps. Collaborated with 10+ cross-functional teammates in Agile sprints, cutting delivery timelines by 15% and enhancing Firebase analytics instrumentation.',
  },
  {
    company: 'Sportz Interactive',
    role: 'Jr. Associate — Android',
    year: 'Jul 2023 — Aug 2024',
    description:
      'Built core Android modules achieving 99.9% crash-free sessions and 15% faster startup performance. Contributed to sprint planning, code reviews, and QA processes ensuring production stability.',
  },
]

export type SkillGroup = {
  category: string
  skills: string[]
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Kotlin', 'Java', 'SQL'],
  },
  {
    category: 'Architecture',
    skills: ['MVVM', 'MVI', 'Clean Architecture', 'Coroutines', 'Modularization'],
  },
  {
    category: 'Networking & Data',
    skills: ['Retrofit', 'REST APIs', 'GraphQL', 'Room', 'DataStore', 'OkHttp'],
  },
  {
    category: 'Quality & Tools',
    skills: ['Unit Testing', 'SonarQube', 'Git', 'Bitbucket', 'Jira', 'Crashlytics'],
  },
]

export const MARQUEE_SKILLS = [
  'Kotlin',
  'Java',
  'Jetpack Compose',
  'MVVM',
  'MVI',
  'Clean Architecture',
  'Coroutines',
  'Retrofit',
  'GraphQL',
  'Room',
  'DataStore',
  'Firebase',
  'Crashlytics',
  'SonarQube',
]

export const SOCIALS = [
  {
    label: 'Email',
    value: 'sbhalshing2265@gmail.com',
    href: 'mailto:sbhalshing2265@gmail.com',
  },
  {
    label: 'GitHub',
    value: 'github.com/Sagar-Bhalsing',
    href: 'https://github.com/Sagar-Bhalsing',
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sagar-bhalsing',
    href: 'https://linkedin.com/in/sagar-bhalsing',
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/CypherBot-XT',
    href: 'https://leetcode.com/u/CypherBot-XT',
  },
]
