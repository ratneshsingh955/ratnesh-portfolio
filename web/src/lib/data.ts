/**
 * Single source of truth for all portfolio content.
 * Every claim here is intentionally defensible in a technical interview.
 */

export const heroStats = [
  { value: "150K+", label: "Downloads" },
  { value: "4+", label: "Years shipping" },
  { value: "3", label: "Companies" },
  { value: "12+", label: "Apps shipped" },
] as const;

export type WhyCard = {
  title: string;
  body: string;
  icon: string; // lucide icon name
};

export const whyCards: WhyCard[] = [
  {
    icon: "BrainCircuit",
    title: "Production AI",
    body: "I integrate LLMs into apps that real users depend on daily — handling latency, cost, streaming, and graceful failure, not just happy-path demos.",
  },
  {
    icon: "MessagesSquare",
    title: "Generative AI & LLMs",
    body: "Google Gemini integration, prompt orchestration, and speech interfaces — turning probabilistic models into reliable product features.",
  },
  {
    icon: "Smartphone",
    title: "Mobile engineering",
    body: "4+ years shipping Flutter & native Android to scale — the surface where most people actually meet AI today.",
  },
  {
    icon: "Gauge",
    title: "Performance optimization",
    body: "Baseline Profiles, memory and startup tuning, and a hybrid on-device/cloud strategy to keep AI features fast on real phones.",
  },
  {
    icon: "Layers",
    title: "Clean architecture",
    body: "Clean Architecture + MVVM so AI features stay testable and maintainable as the product grows, not throwaway prototypes.",
  },
  {
    icon: "Target",
    title: "Product thinking",
    body: "I optimize for outcomes — adoption, reliability, and retention — and have shipped features tied to measurable revenue growth.",
  },
];

/* ----------------------------- MySA case study ---------------------------- */

export const mysa = {
  name: "MySA",
  tagline: "My Smart AI Assistant",
  summary:
    "An AI productivity assistant that brings chat, real-time voice, and document understanding into one app — live on Android, iOS, and Web with 150K+ downloads.",
  role:
    "As part of the AI engineering team, I work on the AI layer end-to-end on the Flutter client — model integration, prompt orchestration, speech, and the on-device performance that keeps it fast.",
  platforms: ["Android", "iOS", "Web"],
  metrics: [
    { value: "150K+", label: "Downloads" },
    { value: "3", label: "Platforms" },
    { value: "Live", label: "In production" },
  ],
  features: [
    "AI Chat",
    "Real-time Voice",
    "Voice Assistant",
    "Smart Calendar",
    "Tasks",
    "Workspace",
    "Smart Notes",
    "Document AI",
  ],
  // Real, defensible engineering decisions.
  decisions: [
    {
      title: "Gemini 2.5 Flash Lite for chat at scale",
      body: "Chose Flash Lite to keep response latency and per-request cost low across 150K+ users while preserving quality for everyday productivity tasks — the right point on the speed/cost/quality curve for a consumer app.",
    },
    {
      title: "Hybrid speech-to-text",
      body: "Pair on-device transcription (instant, works offline, private) with Whisper large v3 (high accuracy) and route between them by context — so voice feels immediate without sacrificing correctness.",
    },
    {
      title: "Real-time voice mode",
      body: "A live, conversational voice experience (ChatGPT-style talk) built on streaming responses, so the assistant feels responsive instead of request/response slow.",
    },
  ],
  // Architecture pipeline (left → right).
  pipeline: [
    { label: "Flutter client", sub: "Android · iOS · Web" },
    { label: "Speech-to-Text", sub: "On-device + Whisper v3" },
    { label: "Prompt orchestration", sub: "Context + instructions" },
    { label: "Gemini 2.5 Flash Lite", sub: "Streaming LLM" },
    { label: "Response layer", sub: "Streamed chat · voice" },
  ],
  proprietaryNote:
    "Built as part of my professional experience at MySmartAssistant.ai. Production source code is proprietary.",
} as const;

/* ------------------------------- Experience ------------------------------- */

export type Job = {
  role: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
};

export const experience: Job[] = [
  {
    role: "AI Software Engineer",
    company: "MySmartAssistant.ai",
    period: "Dec 2025 — Present",
    points: [
      "Build MySA, an AI productivity assistant with 150K+ downloads across Android, iOS, and Web.",
      "Integrate Google Gemini 2.5 Flash Lite and design prompt orchestration for chat and real-time voice.",
      "Ship hybrid speech-to-text (on-device + Whisper large v3) for fast, accurate voice input.",
      "Optimize Android performance with Baseline Profiles; build on Clean Architecture + MVVM.",
    ],
    tags: ["Google Gemini", "LLMs", "Prompt Engineering", "Speech-to-Text", "Flutter", "Kotlin"],
  },
  {
    role: "Software Engineer",
    company: "Witzeal Technologies",
    period: "Jul 2023 — Nov 2025",
    points: [
      "Shipped 12+ multiplayer Android games used by thousands of daily players.",
      "Integrated payment SDKs, Firebase, and REST APIs with robust error handling.",
      "Improved performance, stability, and memory usage across the game portfolio.",
      "Contributed to engineering initiatives supporting 12–15% revenue growth.",
    ],
    tags: ["Kotlin", "Java", "Android SDK", "LibGDX", "Firebase", "Payments"],
  },
  {
    role: "Project Engineer",
    company: "Wipro Ltd",
    period: "Apr 2022 — Jun 2023",
    points: [
      "Built enterprise applications on the SAP Hybris Commerce platform.",
      "Delivered production support and feature enhancements for enterprise clients.",
    ],
    tags: ["Java", "SAP Hybris", "Enterprise", "Agile"],
  },
];

/* -------------------------------- Projects -------------------------------- */

export type Project = {
  title: string;
  meta: string;
  body: string;
  icon: string;
  href?: string;
  hrefLabel?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    icon: "Mic",
    title: "Real-time Voice AI",
    meta: "MySA capability",
    body: "Live, conversational voice — speak naturally and the assistant replies in real time. Built on streaming LLM responses and hybrid speech-to-text.",
    status: "In production",
  },
  {
    icon: "Scale",
    title: "Legal-Ease",
    meta: "Academic · IEEE",
    body: "Hybrid lawyer recommendation system using the AGE-MOEA multi-objective evolutionary algorithm. Peer-reviewed and published by IEEE.",
    href: "https://ieeexplore.ieee.org/document/9792700",
    hrefLabel: "Read publication",
  },
  {
    icon: "Globe",
    title: "This Portfolio",
    meta: "Web · Open source",
    body: "Built from scratch with Next.js 15, TypeScript, Tailwind, and Framer Motion — static-exported to deploy on both Vercel and GitHub Pages.",
    href: "https://github.com/ratneshsingh955/ratnesh-portfolio",
    hrefLabel: "View source",
  },
  {
    icon: "FlaskConical",
    title: "AI Demos",
    meta: "In progress",
    body: "A growing set of small, focused experiments with LLMs and generative AI — shipping to GitHub as they're built.",
    href: "https://github.com/ratneshsingh955",
    hrefLabel: "Follow on GitHub",
    status: "Coming soon",
  },
];

/* ------------------------------- Tech stack ------------------------------- */

export const techStack: { category: string; items: string[] }[] = [
  { category: "AI", items: ["Google Gemini 2.5", "LLM Integration", "Prompt Engineering", "Speech-to-Text", "Whisper large v3"] },
  { category: "Mobile", items: ["Flutter", "Dart", "Android SDK", "Jetpack"] },
  { category: "Programming", items: ["Kotlin", "Java", "TypeScript", "JavaScript"] },
  { category: "Architecture", items: ["Clean Architecture", "MVVM", "REST APIs", "Baseline Profiles"] },
  { category: "Tools", items: ["Firebase", "Git", "GitHub", "Android Studio", "VS Code"] },
];

/* ------------------------------- Research --------------------------------- */

export const research = {
  badge: "IEEE Publication",
  title: "Hybrid Lawyer Recommendation System Based on AGE-MOEA",
  body: "Peer-reviewed research on a hybrid recommendation system driven by a multi-objective evolutionary algorithm (AGE-MOEA) — published on IEEE Xplore.",
  href: "https://ieeexplore.ieee.org/document/9792700",
} as const;
