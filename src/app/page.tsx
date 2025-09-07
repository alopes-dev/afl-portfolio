import { AppAvatar } from "@/components/_shared/AppAvatar/AppAvatar";
import { AppAbout } from "@/components/AppAbout/AppAbout";
import { AppHero } from "@/components/AppHero/AppHero";
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
    <main className="flex h-full w-full flex-col items-center p-6 pt-36">
      <div className="absolute dark:top-[-166px] top-[-15px] w-[354px] rounded-full h-[354px] md:hidden dark:blur-[600px] blur-[250px] dark:bg-purple bg-purple-light opacity-100"></div>
      <AppHero />
      <AppAbout />
    </main>
  );
}
