import type { VariantProps } from "class-variance-authority";
import type { ComponentProps } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "@anishshobithps/ui";

const containerVariants = cva({
  base: "relative mx-auto w-full max-w-[64rem] px-6 lg:px-8",
});

type ContainerProps = ComponentProps<"div"> &
  VariantProps<typeof containerVariants> & {
    asChild?: boolean;
  };

const Container = ({ className, asChild, ...props }: ContainerProps) => {
  const Comp = asChild ? Slot : "div";

  return <Comp className={cn(containerVariants({ className }))} {...props} />;
};

export { Container, containerVariants };
