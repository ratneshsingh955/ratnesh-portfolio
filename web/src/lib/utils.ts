import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind classes with conflict resolution. */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Prefix a public asset / route path with the deployment base path.
 * Keeps links correct on GitHub Pages (/ratnesh-portfolio) and Vercel ("").
 * Use for <a href> to files in /public; next/image & next/link handle basePath
 * automatically, so they do NOT need this.
 */
export function withBase(path: string): string {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
  if (!path.startsWith("/")) path = `/${path}`;
  return `${base}${path}`;
}
