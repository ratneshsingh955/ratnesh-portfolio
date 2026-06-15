"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { sections } from "@/config/site";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Primary"
        className="glass flex w-full max-w-3xl items-center justify-between rounded-full px-3 py-2 pl-5 shadow-[0_8px_40px_-12px_rgba(0,0,0,0.6)]"
      >
        <a href="#top" className="font-display text-sm font-semibold tracking-tight">
          Ratnesh<span className="text-gradient"> Singh</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-full px-3 py-1.5 text-sm transition-colors",
                  active === s.id ? "text-fg" : "text-muted hover:text-fg"
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-gradient-to-r from-accent to-accent2 px-4 py-1.5 text-sm font-semibold text-black transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Get in touch
        </a>

        <button
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-fg md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="glass absolute top-16 w-[calc(100%-2rem)] max-w-3xl rounded-2xl p-2 md:hidden">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-muted hover:bg-white/5 hover:text-fg"
            >
              {s.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
