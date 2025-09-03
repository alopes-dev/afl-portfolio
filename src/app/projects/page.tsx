import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Your Portfolio",
  description: "Explore my projects and work",
};

export default function ProjectsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">My Projects</h1>
    </main>
  );
}
