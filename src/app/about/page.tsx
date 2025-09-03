import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Your Portfolio",
  description: "Learn more about me and my work",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">About Me</h1>
    </main>
  );
}
