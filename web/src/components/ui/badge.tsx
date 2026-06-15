import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<HTMLSpanElement, React.HTMLAttributes<HTMLSpanElement>>(
  ({ className, ...props }, ref) => (
    <span
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border border-border bg-white/[0.03] px-3 py-1.5 text-sm text-muted transition-colors hover:border-white/20 hover:text-fg",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
