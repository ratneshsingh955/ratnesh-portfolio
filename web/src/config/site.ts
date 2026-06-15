export const siteConfig = {
  name: "Ratnesh Singh",
  role: "AI Software Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://ratneshsingh955.github.io/ratnesh-portfolio",
  description:
    "Ratnesh Singh is an AI Software Engineer building production-grade, AI-powered products. He ships LLM-powered mobile experiences to 150K+ users with Google Gemini, hybrid speech-to-text, and real-time voice.",
  ogImage: "/profile.jpg",
  links: {
    email: "ratneshsingh955@gmail.com",
    phone: "+91 8934068644",
    linkedin: "https://www.linkedin.com/in/ratnesh-singhs/",
    github: "https://github.com/ratneshsingh955",
    portfolio: "https://ratneshsingh955.github.io/ratnesh-portfolio/",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Section ids — single source of truth for nav + scrollspy. */
export const sections = [
  { id: "why", label: "Why me" },
  { id: "mysa", label: "MySA" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "stack", label: "Stack" },
  { id: "research", label: "Research" },
  { id: "contact", label: "Contact" },
] as const;
