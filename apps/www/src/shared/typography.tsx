import React from "react";
import { cn } from "@anishshobithps/ui";
import { lato, marcellus, palanquin } from "./fonts";

type Variant = "h1" | "h2" | "h3" | "h4" | "p" | "blockquote" | "li";
type StyleVariant = "lead" | "muted";

type TextProps = {
  as: Variant;
  styleVariant?: StyleVariant;
  className?: string;
  children: React.ReactNode;
};

const variantStyles: Record<Variant, string> = {
  h1: cn(
    "scroll-m-20",
    "text-3xl sm:text-4xl lg:text-5xl xl:text-6xl",
    "font-extrabold",
    "tracking-tight",
    "leading-tight",
    "mb-4 sm:mb-6",
    lato.className,
  ),
  h2: cn(
    "scroll-m-20",
    "text-2xl sm:text-3xl lg:text-4xl",
    "font-semibold",
    "tracking-tight",
    "pb-2",
    "transition-colors",
    "first:mt-0",
    "mt-8 sm:mt-10 lg:mt-12",
    "mb-4",
    lato.className,
  ),
  h3: cn(
    "scroll-m-20",
    "text-xl sm:text-2xl lg:text-3xl",
    "font-semibold",
    "tracking-tight",
    "mt-6 sm:mt-8",
    "mb-3",
    marcellus.className,
  ),
  h4: cn(
    "scroll-m-20",
    "text-lg sm:text-xl lg:text-2xl",
    "font-semibold",
    "tracking-tight",
    "mt-4 sm:mt-6",
    "mb-2",
    marcellus.className,
  ),
  p: cn(
    "text-base sm:text-lg",
    "leading-7 sm:leading-8",
    "[&:not(:first-child)]:mt-4 sm:[&:not(:first-child)]:mt-6",
    "max-w-prose",
    palanquin.className,
  ),
  blockquote: cn(
    "mt-4 sm:mt-6",
    "pl-4 sm:pl-6",
    "border-l-2",
    "border-muted-foreground/60",
    "italic",
    "text-muted-foreground",
    "py-1 sm:py-2",
  ),
  li: cn(
    "my-2 sm:my-3",
    "ml-4 sm:ml-6",
    "list-disc",
    "[&:not(:first-child)]:mt-2",
    "text-base sm:text-lg",
  ),
};

const styleVariants: Record<StyleVariant, string> = {
  lead: cn(
    "text-lg sm:text-xl lg:text-2xl",
    "text-muted-foreground",
    "leading-relaxed",
  ),
  muted: cn("text-sm sm:text-base", "text-muted-foreground", "leading-normal"),
};

export const Text: React.FC<TextProps> = ({
  as: Component,
  styleVariant,
  className,
  children,
}) => {
  return (
    <Component
      className={cn(
        variantStyles[Component],
        styleVariant ? styleVariants[styleVariant] : "",
        className,
      )}
    >
      {children}
    </Component>
  );
};
