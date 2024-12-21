import { Text } from "~/shared/typography";

export default function HomePage() {
  return (
    <main className="container h-screen py-16">
        <Text as="h2" >
            Welcome to{" "} Anish Shobith P S's Website
        </Text>
        <Text as="p">
            This is a simple monorepo with shared backend for web & mobile apps.
        </Text>
    </main>
  );
}
