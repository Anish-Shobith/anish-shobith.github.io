"use client";

import { PropsWithChildren } from "react";
import { ThemeProvider } from "@anishshobithps/ui/theme";
import { Toaster } from "@anishshobithps/ui/toast";

export const Providers = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {children}
      <Toaster />
    </ThemeProvider>
  );
};
