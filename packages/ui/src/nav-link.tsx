"use client";

import type { ComponentProps } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cva } from "class-variance-authority";
import { cn } from "@anishshobithps/ui";

const navLinkVariants = cva(
  [
    "group -m-0.5 flex cursor-pointer items-center gap-2 p-0.5 text-sm",
    "text-muted hover:text-foreground disabled:opacity-50",
  ],
  {
    variants: {
      isActive: {
        true: "font-medium text-foreground",
        false: "",
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);

const isItemActive = (href: string | undefined, pathname: string) => {
  if (href && href !== "/") {
    return pathname.includes(href);
  }
  return false;
};

const NavLink = ({
  className,
  ...props
}: ComponentProps<"a"> & ComponentProps<typeof Link>) => {
  const pathname = usePathname();
  const isActive = isItemActive(props.href, pathname);

  return (
    <Link
      prefetch={true}
      className={cn(navLinkVariants({ isActive, className }))}
      {...props}
    />
  );
};

export { NavLink, navLinkVariants };
