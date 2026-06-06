import type { Profile, SkillCategory, Project, Experience } from './types'

export const profile: Profile = {
  name: 'Yash Chavan',
  shortName: 'YC',
  role: 'Full Stack Developer & Backend Engineer',
  tagline:
    'Build scalable web applications, secure APIs, cloud-native solutions, and AI-powered products.',
  location: 'Pune, Maharashtra, India',
  available: true,
  bio: 'Computer Engineering student with strong backend development expertise and practical experience building real-world projects using Django, REST APIs, cloud technologies, databases, caching systems, and modern frontend frameworks.',
  social: {
    email: 'officialyashchavan@gmail.com',
    linkedin: 'https://www.linkedin.com/in/yashchavan02/',
    github: 'https://github.com/yashchavan02',
  },
  resumeUrl: 'https://drive.google.com/file/d/your-resume-id/view',
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    description: 'Scalable APIs, authentication, and server architecture.',
    skills: [
      { name: 'Python', level: 95 },
      { name: 'Django', level: 92 },
      { name: 'Django REST Framework', level: 90 },
      { name: 'REST APIs', level: 93 },
      { name: 'JWT Authentication', level: 88 },
      { name: 'Redis', level: 80 },
    ],
  },
  {
    title: 'Frontend',
    description: 'Modern, responsive, and accessible interfaces.',
    skills: [
      { name: 'React.js', level: 88 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5', level: 95 },
      { name: 'CSS3', level: 92 },
      { name: 'Tailwind CSS', level: 90 },
    ],
  },
  {
    title: 'Database',
    description: 'Relational design, query optimization, and persistence.',
    skills: [
      { name: 'PostgreSQL', level: 88 },
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 78 },
    ],
  },
  {
    title: 'Cloud & DevOps',
    description: 'Deployment, containerization, and infrastructure.',
    skills: [
      { name: 'AWS', level: 78 },
      { name: 'Docker', level: 80 },
      { name: 'Linux', level: 82 },
      { name: 'Git', level: 92 },
      { name: 'GitHub', level: 92 },
      { name: 'Vercel / Render', level: 85 },
    ],
  },
  {
    title: 'Tools & AI',
    description: 'Workflow automation and AI integrations.',
    skills: [
      { name: 'Postman', level: 90 },
      { name: 'VS Code', level: 95 },
      { name: 'Cursor', level: 88 },
      { name: 'Claude Code', level: 90 },
      { name: 'AI Integrations', level: 82 },
      { name: 'Automation Workflows', level: 80 },
      { name: 'n8n', level: 80 },
    ],
  },
]

export const projects: Project[] = [
  {
    id: 'cavenote',
    title: 'CaveNote',
    subtitle: 'Secure Zero-Knowledge Note Taking Platform',
    description:
      'A privacy-focused note-taking application that ensures users retain complete ownership of their data through secure architecture and modern authentication mechanisms.',
    features: [
      'Secure note storage with encryption',
      'Modern authentication system',
      'Privacy-first architecture',
      'Responsive design across devices',
    ],
    tech: ['Django', 'PostgreSQL', 'Authentication', 'Security'],
    link: 'https://cavenote.vercel.app/',
    status: 'live',
    category: 'product',
  },
  {
    id: 'cropleaf',
    title: 'CropLeaf',
    subtitle: 'Smart Agriculture Advisory Platform',
    description:
      'A web application designed to assist farmers with intelligent agricultural insights and recommendations using modern web technologies.',
    features: [
      'Intelligent agricultural insights',
      'Modern recommendation engine',
      'Scalable backend architecture',
      'Responsive, accessible UI',
    ],
    tech: ['Django', 'APIs', 'Database Systems'],
    link: 'https://cropleaf-app.onrender.com/',
    status: 'live',
    category: 'product',
  },
  {
    id: 'primevista',
    title: 'PrimeVista Stream',
    subtitle: 'Modern Streaming Platform UI',
    description:
      'A sleek streaming platform interface inspired by modern OTT services featuring responsive layouts and engaging user experiences.',
    features: [
      'OTT-grade streaming UI',
      'Fully responsive layouts',
      'Engaging micro-interactions',
      'Optimized for performance',
    ],
    tech: ['React', 'JavaScript', 'UI/UX'],
    link: 'https://primevista-stream.vercel.app/',
    status: 'live',
    category: 'product',
  },
  {
    id: 'linkify',
    title: 'Linkify',
    subtitle: 'Smart URL Management System',
    description:
      'A modern URL shortening and management platform with analytics and efficient link handling capabilities.',
    features: [
      'URL shortening engine',
      'Analytics & click tracking',
      'Efficient link handling',
      'Clean, modern UI',
    ],
    tech: ['Web', 'URL Shortener', 'Analytics'],
    github: 'https://github.com/yashchavan02/Linkify',
    status: 'open-source',
    category: 'open-source',
  },
  {
    id: 'prodigy-internship',
    title: 'Backend Development Internship',
    subtitle: 'Prodigy Infotech',
    description:
      'Worked on backend-focused development projects involving API design, authentication systems, database management, and scalable web application architecture.',
    features: [
      'Designed RESTful APIs',
      'Implemented authentication systems',
      'Modeled database schemas',
      'Improved application performance',
    ],
    tech: ['Python', 'Django', 'REST', 'Databases'],
    github: 'https://github.com/yashchavan02/Backend-Internship-Prodigy-Infotech',
    status: 'open-source',
    category: 'open-source',
  },
]

export const experience: Experience[] = [
  {
    company: 'Prodigy Infotech',
    role: 'Backend Developer Intern',
    period: 'Recent',
    location: 'Remote',
    description:
      'Worked on backend-focused development projects involving API design, authentication systems, database management, and scalable web application architecture.',
    responsibilities: [
      'Built and shipped RESTful APIs for real-world use cases',
      'Implemented authentication systems and access control',
      'Designed normalized database schemas and migrations',
      'Worked on backend architecture and request lifecycle',
      'Improved application performance through caching and query tuning',
      'Integrated third-party services and external APIs',
    ],
  },
]
