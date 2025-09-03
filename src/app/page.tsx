import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Antonio Ferraz Lopes",
  description: "Welcome to my portfolio website",
  openGraph: {
    title: "Home | Antonio Ferraz Lopes",
    description: "Welcome to my portfolio website",
    type: "website",
    url: "https://www.antonioferrazlopes.com",
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
    </main>
  );
}
