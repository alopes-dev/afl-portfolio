import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Your Portfolio",
  description: "Read my latest blog posts",
};

export default function BlogPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Blog</h1>
    </main>
  );
}
