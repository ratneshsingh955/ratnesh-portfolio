import { Github, Linkedin, Mail, Phone, Globe, ArrowRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

const channels = [
  { icon: Linkedin, label: "LinkedIn", value: "in/ratnesh-singhs", href: siteConfig.links.linkedin },
  { icon: Github, label: "GitHub", value: "ratneshsingh955", href: siteConfig.links.github },
  { icon: Mail, label: "Email", value: siteConfig.links.email, href: `mailto:${siteConfig.links.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.links.phone, href: `tel:${siteConfig.links.phone.replace(/\s/g, "")}` },
  { icon: Globe, label: "Portfolio", value: "ratneshsingh955.github.io", href: siteConfig.links.portfolio },
];

export function Contact() {
  return (
    <section id="contact" className="container-px py-24 sm:py-32">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-3xl p-8 sm:p-14">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/20 blur-[100px]" aria-hidden />
          <div className="relative">
            <span className="eyebrow">Contact</span>
            <h2 className="section-title mt-3 max-w-xl text-4xl sm:text-5xl">
              Let&apos;s build <span className="text-gradient">AI products</span> together.
            </h2>
            <p className="mt-4 max-w-lg text-muted">
              I&apos;m open to AI / software engineering roles and collaborations. Email is the
              fastest way to reach me.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a href={`mailto:${siteConfig.links.email}`}>
                <Button>
                  Email me <ArrowRight size={16} />
                </Button>
              </a>
              <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                <Button variant="ghost">
                  <Linkedin size={16} /> Connect on LinkedIn
                </Button>
              </a>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {channels.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex items-center gap-3 rounded-2xl border border-border bg-white/[0.02] p-4 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted transition-colors group-hover:text-fg">
                    <c.icon size={18} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs text-faint">{c.label}</span>
                    <span className="block truncate text-sm text-fg">{c.value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
