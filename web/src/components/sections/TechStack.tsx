import { Reveal } from "@/components/primitives/Reveal";
import { Badge } from "@/components/ui/badge";
import { techStack } from "@/lib/data";

export function TechStack() {
  return (
    <section id="stack" className="container-px py-24 sm:py-32">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Stack</span>
        <h2 className="section-title mt-3">Tools I build with.</h2>
      </Reveal>

      <div className="mt-14 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-white/[0.02]">
        {techStack.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.04}>
            <div className="grid gap-4 p-6 sm:grid-cols-[160px_1fr] sm:items-center sm:gap-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-accent">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
