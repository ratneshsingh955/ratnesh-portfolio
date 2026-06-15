import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-accent to-accent2 text-black shadow-[0_8px_30px_-8px_hsl(var(--accent)/0.6)] hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-10px_hsl(var(--accent)/0.7)]",
        ghost:
          "border border-border bg-white/[0.03] text-fg backdrop-blur-md hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]",
      },
      size: {
        md: "h-12 px-6 text-sm",
        sm: "h-10 px-4 text-sm",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button ref={ref} className={cn(buttonVariants({ variant, size }), className)} {...props} />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
