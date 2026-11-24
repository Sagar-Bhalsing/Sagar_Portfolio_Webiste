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
  category: string
  description: string
  tags: string[]
  year: string
  github: string
  demo: string
  playStore?: string
  exploreUrl?: string
  screenAspectRatio?: string
  glowPrimary: string
  glowSecondary: string
  glowAccent: string
  images?: string[]
}

export const PROJECTS: Project[] = [
  {
    index: '04',
    title: '101+',
    category: 'Health-tech',
    description:
      'A longevity and health optimization application with biomarker visualizations, real-time metric tracking and AI-powered face-scan analysis using the Shen AI SDK.',
    tags: ['Kotlin', 'Jetpack Compose', 'GraphQL', 'Shen AI SDK'],
    year: '2025',
    github: 'https://play.google.com/store/apps/details?id=com.bond.fireapp&pcampaignid=web_share',
    demo: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    playStore: 'https://play.google.com/store/apps/details?id=com.bond.fireapp&pcampaignid=web_share',
    glowPrimary: '#A855F7',
    glowSecondary: '#C084FC',
    glowAccent: '#8B5CF6',
    screenAspectRatio: '1240 / 2552',
    images: [
      'project-images/101-face-scan-guide.jpg',
      'project-images/101-aging-speed-dashboard.jpg',
      'project-images/101-healthspan.jpg',
    ],
  },
  {
    index: '01',
    title: 'UEFA More or Less',
    category: 'Sports',
    description:
      'A real-time, interactive sports game where users predict match outcomes and engage with in-game statistics. The application reached 200K+ quarterly active users and delivered a 25% improvement in user retention.',
    tags: ['Kotlin', 'Jetpack Compose', 'Firebase', 'REST API'],
    year: '2024',
    screenAspectRatio: '1240 / 2386',
    glowPrimary: '#0066FF',
    glowSecondary: '#00D9FF',
    glowAccent: '#164BFF',
    github: 'https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&pcampaignid=web_share',
    demo: 'https://play.google.com',
    images: [
      'project-images/more-or-less-home.jpg',
      'project-images/more-or-less-gameplay.jpg',
      'project-images/more-or-less-leaderboard.jpg',
    ],
  },
  {
    index: '02',
    title: 'UEFA Trivia Quiz',
    category: 'Gaming',
    description:
      'A football trivia application featuring image-based questions, multiple game modes and an engaging quiz experience.',
    tags: ['Kotlin', 'Jetpack Compose', 'DataStore', 'REST API'],
    year: '2024',
    screenAspectRatio: '1144 / 2392',
    glowPrimary: '#174BFF',
    glowSecondary: '#00D4E8',
    glowAccent: '#365CFF',
    github: 'https://play.google.com/store/apps/details?id=com.uefa.eurofantasy&pcampaignid=web_share',
    demo: 'https://play.google.com',
    images: [
      'project-images/uefa-quiz-arena-home.jpg',
      'project-images/uefa-quiz-categories.jpg',
      'project-images/uefa-stadium-question.jpg',
    ],
  },
  {
    index: '03',
    title: 'F1 Predictor Game',
    category: 'Motorsport',
    description:
      'An Android prediction game for Formula 1, featuring race forecasts, live results and leaderboards, built using MVI and clean architecture for a scalable and maintainable codebase.',
    tags: ['Kotlin', 'MVI', 'Clean Architecture', 'REST API'],
    year: '2023',
    screenAspectRatio: '1144 / 2386',
    glowPrimary: '#EF2525',
    glowSecondary: '#FF4545',
    glowAccent: '#B91C1C',
    github: 'https://play.google.com/store/apps/details?id=com.softpauer.f1timingapp2014.basic&pcampaignid=web_share',
    demo: 'https://play.google.com',
    images: [
      'project-images/f1-predict-home.jpg',
      'project-images/f1-qualifying-prediction.jpg',
      'project-images/f1-podium-prediction.jpg',
    ],
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
