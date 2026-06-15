import { ArrowUpRight, BookOpen } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { research } from "@/lib/data";

export function Research() {
  return (
    <section id="research" className="container-px py-24 sm:py-32">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Research</span>
        <h2 className="section-title mt-3">Peer-reviewed work.</h2>
      </Reveal>

      <Reveal className="mt-12">
        <a
          href={research.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass flex flex-col gap-6 rounded-3xl p-8 transition-colors hover:border-white/20 hover:bg-white/[0.05] sm:flex-row sm:items-center"
        >
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent2/25 bg-accent2/10 text-accent2">
            <BookOpen size={26} aria-hidden />
          </div>
          <div className="flex-1">
            <span className="text-xs font-semibold uppercase tracking-wide text-accent">
              {research.badge}
            </span>
            <h3 className="mt-1 font-display text-xl font-semibold">{research.title}</h3>
            <p className="mt-2 text-sm text-muted">{research.body}</p>
          </div>
          <span className="inline-flex items-center gap-1 self-start whitespace-nowrap text-sm font-semibold text-fg transition-colors group-hover:text-accent2 sm:self-center">
            IEEE Xplore
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </span>
        </a>
      </Reveal>
    </section>
  );
}
