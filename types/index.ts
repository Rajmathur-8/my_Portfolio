export interface PersonalInfo {
  name: string
  title: string
  subtitle: string
  email: string
  phone: string
  location: string
  avatar: string
  resume: string
  social: {
    github: string
    linkedin: string
    twitter: string
    website: string
    leetcode?: string
  }
}

export interface AboutData {
  description: string
  highlights: string[]
}

export interface Skill {
  name: string
  level: number
  category: string
}

export interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  github: string
  demo: string
  featured: boolean
}

export interface Experience {
  id: number
  company: string
  position: string
  duration: string
  location: string
  description: string
  achievements: string[]
}

export interface Achievement {
  id: number
  title: string
  organization: string
  date: string
  description: string
  icon: string
  category: string
}

export interface ContactData {
  title: string
  description: string
  cta: string
}

export interface PortfolioData {
  personal: PersonalInfo
  about: AboutData
  skills: Skill[]
  projects: Project[]
  experience: Experience[]
  achievements: Achievement[]
  contact: ContactData
}
