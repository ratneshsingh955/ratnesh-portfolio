import Image from "next/image";
import { ArrowRight, Download } from "lucide-react";
import { Reveal } from "@/components/primitives/Reveal";
import { AnimatedCounter } from "@/components/primitives/AnimatedCounter";
import { Button } from "@/components/ui/button";
import { heroStats } from "@/lib/data";
import { withBase } from "@/lib/utils";

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center pt-28">
      <div className="container-px grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: the pitch */}
        <Reveal className="max-w-2xl">
          <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs text-muted">
            <span className="h-2 w-2 rounded-full bg-accent2 animate-pulse-dot" />
            Available for AI, Mobile &amp; Frontend roles
          </span>

          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
            Ratnesh Singh
            <span className="mt-2 block text-gradient">AI Software Engineer</span>
          </h1>

          <p className="mt-6 text-lg text-muted sm:text-xl">
            I build production-grade AI products. I ship LLM-powered mobile
            experiences to <strong className="text-fg">150K+ users</strong> with{" "}
            <strong className="text-fg">Google Gemini</strong>, hybrid speech-to-text, and
            real-time voice.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#mysa">
              <Button>
                View my work <ArrowRight size={16} />
              </Button>
            </a>
            <a href={withBase("/resume.pdf")} download>
              <Button variant="ghost">
                <Download size={16} /> Download résumé
              </Button>
            </a>
          </div>

          <dl className="mt-12 grid max-w-lg grid-cols-2 gap-x-8 gap-y-6 sm:grid-cols-4">
            {heroStats.map((s) => (
              <div key={s.label}>
                <dd className="font-display text-3xl font-bold">
                  <AnimatedCounter value={s.value} />
                </dd>
                <dt className="mt-1 text-xs text-faint">{s.label}</dt>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* Right: identity card */}
        <Reveal delay={0.15} className="justify-self-center lg:justify-self-end">
          <div className="glass relative w-[min(22rem,85vw)] rounded-3xl p-6">
            <div className="flex items-center gap-4">
              <Image
                src="/profile.jpg"
                alt="Portrait of Ratnesh Singh"
                width={72}
                height={72}
                priority
                className="h-[72px] w-[72px] rounded-2xl object-cover"
              />
              <div>
                <p className="font-semibold">Ratnesh Singh</p>
                <p className="text-sm text-muted">AI Software Engineer</p>
                <p className="text-xs text-faint">@ MySmartAssistant.ai</p>
              </div>
            </div>

            <div className="my-6 h-px bg-border" />

            <pre className="overflow-x-auto rounded-xl border border-border bg-black/30 p-4 font-mono text-[0.78rem] leading-relaxed text-muted">
              <code>
                <span className="text-fuchsia-400">const</span> focus = {"{"}
                {"\n"}  ship: <span className="text-emerald-300">{`"production AI"`}</span>,
                {"\n"}  product: <span className="text-emerald-300">{`"MySA"`}</span>,
                {"\n"}  model: <span className="text-emerald-300">{`"gemini-2.5-flash-lite"`}</span>,
                {"\n"}
                {"}"};
              </code>
            </pre>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
