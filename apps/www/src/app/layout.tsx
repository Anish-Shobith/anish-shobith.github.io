import type { Metadata, Viewport } from "next";
import { ThemeProvider, ThemeToggle } from "@anishshobithps/ui/theme";
import "~/app/globals.css";
import { cn } from "@anishshobithps/ui";
import { Container } from "@anishshobithps/ui/container";
import { env } from "~/env";
import { palanquin } from "~/shared/fonts";
import { Providers } from "~/shared/providers";
import { Navbar } from "./_components/navbar";

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
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-dvh flex-col bg-background text-foreground",
          palanquin.className,
        )}
      >
        <Providers>
            <Navbar />
          <Container asChild>
            <main className="flex grow flex-col gap-8 md:gap-10 md:py-10 lg:gap-12 lg:py-12">
              {props.children}
            </main>
          </Container>
        </Providers>
      </body>
    </html>
  );
}
