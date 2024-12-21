import { cn } from "@anishshobithps/ui";
import { Button } from "@anishshobithps/ui/button";
import { Section } from "@anishshobithps/ui/section";
import { Text } from "~/shared/typography";

export default function Hero() {
  return (
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
      <div className="text-center">
        <Text as="h1">Welcome to Shadcn UI</Text>
        <Text as="h2">Beautiful UI Blocks</Text>
        <Text as="p">
          Over 10+ fully responsive UI blocks you can drop into your Shadcn UI
          projects and customize to your heart's content.
        </Text>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Button size="lg">Get started</Button>
          <Button size="lg" variant="outline">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
}
