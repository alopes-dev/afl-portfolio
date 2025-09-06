import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

interface ButtonStyleProps {
  variant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

const BASE_BUTTON_STYLES = [
  "inline-flex",
  "items-center",
  "justify-center",
  "gap-2",
  "whitespace-nowrap",
  "rounded-md",
  "text-sm",
  "font-medium",
  "transition-all",
  "shrink-0",
  "outline-none",
].join(" ");

const BUTTON_STATES = {
  disabled: "disabled:pointer-events-none disabled:opacity-50",
  focus: "",
  invalid:
    "aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  svg: "[&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0",
};

const buttonVariants = cva(
  `${BASE_BUTTON_STYLES} ${Object.values(BUTTON_STATES).join(" ")}`,
  {
    variants: {
      variant: {
        default:
          "dark:bg-purple bg-purple text-primary-foreground shadow-xs dark:hover:bg-purple-dark hover:bg-purple-light",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-solid dark:border-purple border-purple outline-0 shadow-xs dark:border-purple-dark border-purple-light",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps extends React.ComponentProps<"button">, ButtonStyleProps {
  asChild?: boolean;
}

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : "button";

  return (
    <Component
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps, type ButtonStyleProps };
