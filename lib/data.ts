import {
  Activity,
  Braces,
  Database,
  GraduationCap,
  Globe,
  PenTool,
  Terminal,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------
 * Central content file. Edit here — components never hardcode content.
 * ------------------------------------------------------------------ */

export const site = {
  name: "Kasali Damilola",
  initials: "KD",
  email: "kasalidamilola@gmail.com",
  year: 2026,
  /** Manually configured status — not a live presence indicator. */
  availability: "Open to new opportunities",
};

export const nav = [
  { id: "home", label: "Home" },
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
] as const;

/** TODO: replace each href with your real profile URL. */
export const social = [
  { id: "github", label: "GitHub", href: "https://github.com/theRealNexa/" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/kasali-damilola/" },
  { id: "x", label: "X (Twitter)", href: "https://x.com/" },
] as const;

export const focus = [
  { label: "Focus", value: "Web products" },
  { label: "Interests", value: "Systems & data" },
  { label: "Approach", value: "Build, test, improve" },
];

export type MockupVariant = "websites" | "systems" | "opensource";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  meta: string[];
  description: string;
  /** TODO: point each at its real case study / repo. */
  href: string;
  mockup: MockupVariant;
  featured: boolean;
  /** Honest label for the preview image. */
  imageNote: string;
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "websites",
    name: "Monolith Build",
    tagline: "Architecture Studio Concept",
    meta: ["Frontend", "Next.js"],
    description:
      "Concept website for a Nigerian architecture studio",
    href: "https://monolith-build-architecture-studio.vercel.app/",
    mockup: "websites",
    featured: true,
    imageNote: "Websites",
    image: "/images/monolith-build.PNG",
  },
  {
    slug: "systems",
    name: "AcadAlert",
    tagline: "Monitoring Bot Pipeline",
    meta: ["Puppeteer", "Telegram Bot API", "AI Integration"],
    description:
      "Monitor bot for academic related issues buried in multiple group chats and DMs in WhatsApp and redirects to personal DMs via WhatsApp and Telegram.",
    href: "https://github.com/theRealNexa/AcadAlert/",
    mockup: "systems",
    featured: true,
    imageNote: "Systems",
    image: "/images/acadalert.PNG"
  },
  {
    slug: "opensource",
    name: "Essai AI",
    tagline: "A stateless, privacy-first academic writing assistant.",
    meta: ["Open Source", "Frontend", "Next.js"],
    description:
      "It processes raw text and specific document types, dynamically builds prompts, and proxies them to Large Language Models (LLMs) to return structured writing evaluations.",
    href: "https://essai-frontend.vercel.app/",
    mockup: "studyhub",
    featured: true,
    imageNote: "OPEN SOURCE",
    image: "/images/essaiai.PNG"
  },
];

type Row = { icon: LucideIcon; title: string; text: string };

export const principles: Row[] = [
  { icon: Braces, title: "API Design & Validation", text: "Clean endpoints, proper error handling" },
  { icon: Database, title: "Database Design", text: "Efficient schema & relationships" },
  { icon: Activity, title: "Testing & Observability", text: "Logs, health checks, useful metrics" },
  { icon: TrendingUp, title: "Future Improvements", text: "Caching, message broker, scaling" },
];

export const skills: Row[] = [
  { icon: GraduationCap, title: "B.Sc. Computer Science", text: "LASU · 3rd Year" },
  { icon: Globe, title: "Web Development", text: "Frontend & Backend" },
  { icon: Terminal, title: "Python", text: "Data & Automation" },
  { icon: PenTool, title: "Design", text: "UI/UX · Graphics · Motion" },
];

export const links = {
  technicalDetails: "#work",
  moreAbout: "https://www.linkedin.com/in/kasali-damilola/",
  allProjects: "https://github.com/theRealNexa/",
};
