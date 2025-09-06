import { AppAvatar } from "@/components/_shared/AppAvatar/AppAvatar";
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
    <main className="flex h-full flex-col items-center p-24">
      <div className="absolute dark:top-[-10px] top-[-15px] w-[354px] rounded-full h-[354px] md:hidden dark:blur-[600px] blur-[150px] dark:bg-purple bg-purple-light opacity-100"></div>
      <div className="mt-16 flex flex-col items-center gap-5">
        <AppAvatar className="w-[120px] h-[120px]" size={120} />
        <h1 className="text-2xl leading-[30px] font-light text-light-950 dark:text-dark-100">
          Antonio Lopes
        </h1>
      </div>
    </main>
  );
}
