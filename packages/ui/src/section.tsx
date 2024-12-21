import type { HTMLAttributes } from "react";
import { cn } from "@anishshobithps/ui";

export const SectionBase = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 items-start gap-6 md:grid-cols-3 lg:gap-8",
        className,
      )}
      {...props}
    />
  );
};

export const SectionContent = ({
  className,
  ...props
}: HTMLAttributes<HTMLElement>) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-8 md:col-span-2 md:gap-10 lg:gap-12",
        className,
      )}
      {...props}
    />
  );
};

export const Section = Object.assign(SectionBase, {
  Content: SectionContent,
});
