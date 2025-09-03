import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Antonio Ferraz Lopes",
  description: "Welcome to my portfolio website",
  openGraph: {
    title: "Home | Antonio Ferraz Lopes",
    description: "Welcome to my portfolio website",
    type: "website",
    url: "https://www.antonioferrazlopes.com",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/49714406?v=4", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "Antonio Ferraz Lopes Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Antonio Ferraz Lopes",
    description: "Welcome to my portfolio website",
    images: ["/https://avatars.githubusercontent.com/u/49714406?v=4"], // Same image as OpenGraph
  },
};

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Antonio Ferraz Lopes</h1>
    </main>
  );
}
