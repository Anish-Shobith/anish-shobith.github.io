import type { Metadata, Viewport } from "next";
import { ThemeProvider, ThemeToggle } from "@anishshobithps/ui/theme";
import { Toaster } from "@anishshobithps/ui/toast";

import "~/app/globals.css";

import { env } from "~/env";

const title = "Anish Shobith P S - Full Stack Dev & Automation Enthusiast";
const description =
  "Anish Shobith P S is a full stack developer passionate about web development and automation. Explore projects, insights, and innovations.";
const domain = "anishshobithps.com";
const metadataBase = new URL(
  env.VERCEL_ENV === "production" ? domain : "localhost:3000",
);

export const metadata: Metadata = {
  metadataBase,
  title,
  description,
  openGraph: {
    title,
    description,
    url: "https://anishshobithps.com",
    siteName: title,
  },
  twitter: {
    card: "summary_large_image",
    site: "@anishshobithps",
    creator: "@anishshobithps",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-background font-sans text-foreground antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {props.children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
