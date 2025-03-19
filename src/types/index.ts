export interface Experience {
  company: string;
  location: string;
  position: string;
  period: string;
  contributions: string[];
  categories?: { [key: string]: string[] };
}

export interface Education {
  institution: string;
  location: string;
  degree: string;
  achievements: string[];
}

export interface Project {
  name: string;
  description: string;
  role: string;
  technologies: string[];
}

export interface SkillCategory {
  name: string;
  skills: string[];
}
