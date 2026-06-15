import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { AnimatedCounter } from "@/components/primitives/AnimatedCounter";
import { Badge } from "@/components/ui/badge";
import { mysa } from "@/lib/data";

export function FeaturedProduct() {
  return (
    <section id="mysa" className="container-px py-24 sm:py-32">
      <Reveal className="max-w-2xl">
        <span className="eyebrow">Featured product</span>
        <h2 className="section-title mt-3">
          {mysa.name} — <span className="text-muted">{mysa.tagline}</span>
        </h2>
        <p className="mt-4 text-lg text-muted">{mysa.summary}</p>
      </Reveal>

      {/* Top: phone mockup + role/metrics */}
      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal className="order-2 lg:order-1">
          <PhoneMockup />
        </Reveal>

        <Reveal delay={0.1} className="order-1 lg:order-2">
          <div className="flex items-center gap-2 text-accent2">
            <Sparkles size={18} />
            <span className="text-sm font-semibold">Live in production</span>
          </div>
          <p className="mt-4 text-muted">{mysa.role}</p>

          <dl className="mt-8 grid grid-cols-3 gap-4">
            {mysa.metrics.map((m) => (
              <div key={m.label} className="glass rounded-2xl p-4">
                <dd className="font-display text-2xl font-bold text-gradient">
                  <AnimatedCounter value={m.value} />
                </dd>
                <dt className="mt-1 text-xs text-faint">{m.label}</dt>
              </div>
            ))}
          </dl>

          <div className="mt-6 flex flex-wrap gap-2">
            {mysa.features.map((f) => (
              <Badge key={f}>{f}</Badge>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Architecture pipeline */}
      <Reveal className="mt-20">
        <h3 className="font-display text-xl font-semibold">How it works</h3>
        <p className="mt-2 max-w-2xl text-sm text-muted">
          The AI pipeline behind MySA — from a spoken word on a Flutter client to a streamed,
          spoken response.
        </p>
        <ol className="mt-8 flex flex-col gap-3 lg:flex-row lg:items-stretch">
          {mysa.pipeline.map((step, i) => (
            <li key={step.label} className="flex flex-1 items-center gap-3">
              <div className="glass flex-1 rounded-2xl p-4">
                <p className="text-xs text-faint">Step {i + 1}</p>
                <p className="mt-1 font-display font-semibold">{step.label}</p>
                <p className="mt-1 text-xs text-muted">{step.sub}</p>
              </div>
              {i < mysa.pipeline.length - 1 && (
                <ArrowRight
                  size={18}
                  className="hidden shrink-0 text-faint lg:block"
                  aria-hidden
                />
              )}
            </li>
          ))}
        </ol>
      </Reveal>

      {/* Engineering decisions */}
      <div className="mt-16 grid gap-4 md:grid-cols-3">
        {mysa.decisions.map((d, i) => (
          <Reveal as="article" key={d.title} delay={i * 0.06}>
            <div className="glass h-full rounded-2xl p-6">
              <p className="font-display text-3xl font-bold text-gradient">{String(i + 1).padStart(2, "0")}</p>
              <h4 className="mt-3 font-semibold">{d.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted">{d.body}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-10">
        <p className="rounded-2xl border border-border bg-white/[0.02] p-5 text-sm italic text-faint">
          {mysa.proprietaryNote}
        </p>
      </Reveal>
    </section>
  );
}

/** Lightweight CSS phone frame with a faux chat — no heavy image asset. */
function PhoneMockup() {
  return (
    <div className="mx-auto w-[260px]">
      <div className="rounded-[2.5rem] border border-border bg-surface p-3 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.8)]">
        <div className="relative overflow-hidden rounded-[2rem] border border-border bg-bg">
          {/* notch */}
          <div className="absolute left-1/2 top-2 h-1.5 w-16 -translate-x-1/2 rounded-full bg-border" />
          <div className="space-y-3 px-4 pb-5 pt-8">
            <div className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-accent to-accent2" />
              <p className="font-display text-sm font-semibold">MySA</p>
            </div>

            {/* assistant bubble */}
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm border border-border bg-white/[0.04] p-3 text-xs text-muted">
              Good morning, Ratnesh. You have 3 tasks and a 2pm call. Want me to prep notes?
            </div>
            {/* user bubble */}
            <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-gradient-to-r from-accent to-accent2 p-3 text-xs text-black">
              Summarize this PDF and add a follow-up task.
            </div>
            {/* assistant typing */}
            <div className="max-w-[60%] rounded-2xl rounded-tl-sm border border-border bg-white/[0.04] p-3">
              <div className="flex gap-1">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted [animation-delay:150ms]" />
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-muted [animation-delay:300ms]" />
              </div>
            </div>

            {/* voice pill */}
            <div className="mt-2 flex items-center justify-center gap-2 rounded-full border border-accent/30 bg-accent/10 py-2 text-xs text-accent">
              <span className="h-2 w-2 rounded-full bg-accent2 animate-pulse-dot" />
              Listening — real-time voice
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
