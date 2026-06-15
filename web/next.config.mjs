/**
 * Dual-target config: the SAME application code deploys to both Vercel and
 * GitHub Pages. Platform differences are injected via environment variables,
 * never via code changes.
 *
 *  - Vercel:       no env vars needed (basePath = "")
 *  - GitHub Pages: NEXT_PUBLIC_BASE_PATH=/ratnesh-portfolio  (see package.json `build:ghpages`)
 *
 * `output: "export"` produces a fully static site in `out/`, which Vercel
 * serves natively and GitHub Pages requires.
 */
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: basePath || undefined,
  // Static export cannot use the Next.js image optimizer.
  images: { unoptimized: true },
  // Emit `/section/index.html` style routes — friendlier for static hosts.
  trailingSlash: true,
  reactStrictMode: true,
};

export default nextConfig;
