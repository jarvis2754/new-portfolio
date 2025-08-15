import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

const cinematicButtonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group",
  {
    variants: {
      variant: {
        hero: "btn-cinematic txt-primary-foreground hover:shadow-glow-primary",
        ghost: "txt-foreground hover:bg-muted/50 hover:text-[hsl(var(--primary))]",
        outline: "border border-[hsl(var(--border)/0.5)]  bg-[hsl(var(--transparent))] hover:bg-[hsl(var(--primary)/0.1)] hover:border-[hsl(var(--primary)/0.5)] hover:shadow-[hsl(var(--glow-soft))]",
        glow: "bg-[hsl(var(--primary)/0.2)] text-[hsl(var(--primary))] border border-[hsl(var(--border-primary)/0.3)] shadow-glow-soft hover:shadow-glow-primary hover:bg-[hsl(var(--primary)/0.3)]",
        accent: "bg-[hsl(var(--accent))] txt-accent-foreground hover:bg-[hsl(var(--accent)/0.9)] shadow-glow-accent",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-14 px-8 py-4 text-base",
        xl: "h-16 px-12 py-5 text-lg",
        icon: "h-12 w-12",
      },
    },
    defaultVariants: {
      variant: "hero",
      size: "default",
    },
  }
);

export interface CinematicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof cinematicButtonVariants> {
  asChild?: boolean;
}

const CinematicButton = React.forwardRef<HTMLButtonElement, CinematicButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    if (asChild) {
      return (
        <Comp
          className={cn(cinematicButtonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
      );
    }
    
    return (
      <Comp
        className={cn(cinematicButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
        {/* Shimmer effect only for non-asChild buttons */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[200%] transition-transform duration-1000" />
        </div>
      </Comp>
    );
  }
);

CinematicButton.displayName = "CinematicButton";

export { CinematicButton, cinematicButtonVariants };