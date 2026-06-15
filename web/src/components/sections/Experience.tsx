import { Reveal } from "@/components/primitives/Reveal";
import { Badge } from "@/components/ui/badge";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="container-px py-24 sm:py-32">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Experience</span>
        <h2 className="section-title mt-3">From shipping at scale to shipping AI.</h2>
      </Reveal>

      <ol className="mt-14 space-y-4 border-l border-border pl-6 sm:pl-8">
        {experience.map((job, i) => (
          <Reveal as="li" key={job.company} delay={i * 0.05} className="relative">
            {/* node */}
            <span className="absolute -left-[31px] top-7 h-3 w-3 rounded-full border-2 border-accent bg-bg shadow-[0_0_0_4px_hsl(var(--accent)/0.15)] sm:-left-[39px]" />
            <div className="glass rounded-2xl p-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-lg font-semibold">{job.role}</h3>
                <span className="text-sm font-medium text-accent2">{job.period}</span>
              </div>
              <p className="mt-0.5 font-medium text-fg">{job.company}</p>

              <ul className="mt-4 space-y-2">
                {job.points.map((p) => (
                  <li key={p} className="relative pl-5 text-sm text-muted">
                    <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-accent" />
                    {p}
                  </li>
                ))}
              </ul>

              <div className="mt-5 flex flex-wrap gap-2">
                {job.tags.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
