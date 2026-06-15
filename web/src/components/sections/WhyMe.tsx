import { Reveal } from "@/components/primitives/Reveal";
import { Icon } from "@/components/primitives/Icon";
import { whyCards } from "@/lib/data";

export function WhyMe() {
  return (
    <section id="why" className="container-px py-24 sm:py-32">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Why me</span>
        <h2 className="section-title mt-3">
          I don&apos;t just use AI — I ship it to production.
        </h2>
        <p className="mt-4 text-muted">
          The gap between an AI demo and an AI product is reliability at scale. Here&apos;s
          where I operate.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {whyCards.map((c, i) => (
          <Reveal as="article" key={c.title} delay={i * 0.05}>
            <div className="glass h-full rounded-2xl p-6 transition-colors hover:border-white/20 hover:bg-white/[0.05]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/25 bg-accent/10 text-accent">
                <Icon name={c.icon} />
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{c.body}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
