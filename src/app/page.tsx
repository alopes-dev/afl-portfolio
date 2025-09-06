import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Antonio Ferraz Lopes",
  robots: {
    index: true,
    follow: true,
  },
  description:
    "Full Stack Developer specializing in web development, cloud solutions, and modern JavaScript frameworks. Explore my projects and technical expertise.",
  openGraph: {
    title: "Home | Antonio Ferraz Lopes",
    description:
      "Full Stack Developer specializing in web development, cloud solutions, and modern JavaScript frameworks. Explore my projects and technical expertise.",
    type: "website",
    url: "https://www.antonioferrazlopes.com",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/49714406?v=4",
        width: 1200,
        height: 630,
        alt: "Antonio Ferraz Lopes Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home | Antonio Ferraz Lopes",
    description:
      "Full Stack Developer specializing in web development, cloud solutions, and modern JavaScript frameworks. Explore my projects and technical expertise.",
    images: ["https://avatars.githubusercontent.com/u/49714406?v=4"],
  },
};

export default function HomePage() {
  return (
    <main className="flex h-full flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-dark-900 dark:text-light-100">
        Antonio Ferraz Lopes
      </h1>
    </main>
  );
}
