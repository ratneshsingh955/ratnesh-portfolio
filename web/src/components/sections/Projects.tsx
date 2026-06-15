import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { Icon } from "@/components/primitives/Icon";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="container-px py-24 sm:py-32">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Projects</span>
        <h2 className="section-title mt-3">Selected work.</h2>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2">
        {projects.map((p, i) => {
          const Wrapper = p.href ? "a" : "div";
          return (
            <Reveal key={p.title} delay={i * 0.05}>
              <Wrapper
                {...(p.href
                  ? { href: p.href, target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="group glass flex h-full flex-col rounded-2xl p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                    <Icon name={p.icon} />
                  </div>
                  {p.status && (
                    <span className="rounded-full border border-border px-2.5 py-1 text-xs text-faint">
                      {p.status}
                    </span>
                  )}
                </div>

                <p className="mt-5 text-xs font-medium text-accent2">{p.meta}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.body}</p>

                {p.href && (
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-fg transition-colors group-hover:text-accent2">
                    {p.hrefLabel}
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  </span>
                )}
              </Wrapper>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
