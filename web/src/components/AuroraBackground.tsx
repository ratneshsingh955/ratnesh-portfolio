/**
 * Ambient aurora background — pure CSS, server-rendered, no JS cost.
 * Subtle by design: credibility over spectacle.
 */
export function AuroraBackground() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-bg">
      {/* aurora blobs */}
      <div className="absolute -left-40 -top-40 h-[36rem] w-[36rem] rounded-full bg-accent/20 blur-[120px] animate-aurora" />
      <div
        className="absolute -right-40 top-1/3 h-[32rem] w-[32rem] rounded-full bg-accent2/15 blur-[120px] animate-aurora"
        style={{ animationDelay: "-6s" }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-[28rem] w-[28rem] rounded-full bg-fuchsia-500/10 blur-[120px] animate-aurora"
        style={{ animationDelay: "-12s" }}
      />
      {/* grid, faded toward the top */}
      <div
        className="absolute inset-0 opacity-[0.6]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--fg)/0.025) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--fg)/0.025) 1px, transparent 1px)",
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 35%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 55% at 50% 0%, #000 35%, transparent 100%)",
        }}
      />
    </div>
  );
}
