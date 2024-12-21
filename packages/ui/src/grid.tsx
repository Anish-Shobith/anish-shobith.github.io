import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@anishshobithps/ui";

const gridVariants = cva("grid w-full place-content-start gap-5", {
  variants: {
    size: {
      "2xs": "grid-cols-2xs",
      xs: "grid-cols-xs",
      sm: "grid-cols-sm",
      md: "grid-cols-md",
      lg: "grid-cols-lg",
      xl: "grid-cols-xl",
    },
  },
  defaultVariants: {
    size: "lg",
  },
});

type GridProps = ComponentProps<"div"> & VariantProps<typeof gridVariants>;

export const Grid = ({ className, size, ...props }: GridProps) => {
  return <div className={cn(gridVariants({ size }), className)} {...props} />;
};
