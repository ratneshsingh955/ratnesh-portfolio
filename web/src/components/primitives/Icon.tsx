import {
  BrainCircuit,
  MessagesSquare,
  Smartphone,
  Gauge,
  Layers,
  Target,
  Mic,
  Scale,
  Globe,
  FlaskConical,
  type LucideIcon,
} from "lucide-react";

/** Whitelisted icon map — keeps the static bundle small (no dynamic import). */
const icons: Record<string, LucideIcon> = {
  BrainCircuit,
  MessagesSquare,
  Smartphone,
  Gauge,
  Layers,
  Target,
  Mic,
  Scale,
  Globe,
  FlaskConical,
};

export function Icon({
  name,
  className,
  size = 22,
}: {
  name: string;
  className?: string;
  size?: number;
}) {
  const Cmp = icons[name] ?? BrainCircuit;
  return <Cmp className={className} size={size} aria-hidden />;
}
