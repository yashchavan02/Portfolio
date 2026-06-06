export type SocialLinks = {
  email: string
  linkedin: string
  github: string
}

export type Profile = {
  name: string
  shortName: string
  role: string
  tagline: string
  location: string
  available: boolean
  bio: string
  social: SocialLinks
  resumeUrl: string
}

export type Skill = {
  name: string
  level: number // 0-100
  icon?: string
}

export type SkillCategory = {
  title: string
  description: string
  skills: Skill[]
}

export type Project = {
  id: string
  title: string
  subtitle: string
  description: string
  features: string[]
  tech: string[]
  link?: string
  github?: string
  status: 'live' | 'open-source'
  category: 'product' | 'open-source' | 'internship'
}

export type Experience = {
  company: string
  role: string
  period: string
  location: string
  description: string
  responsibilities: string[]
}
