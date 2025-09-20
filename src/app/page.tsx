import { AppAbout } from "@/components/AppAbout/AppAbout";
import { AppBrandsWorkedWithMe } from "@/components/AppBrandsWorkedWithMe/AppBrandsWorkedWithMe";
import { AppCoreSkill } from "@/components/AppCoreSkill/AppCoreSkill";
import { AppExperienceTimeline } from "@/components/AppExperienceTimeline/AppExperienceTimeline";
import { AppHero } from "@/components/AppHero/AppHero";
import { AppProjectCarousel } from "@/components/AppProjectCarousel/AppProjectCarousel";
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
      {/* <AppWarpper> */}
      <div className="absolute top-[-166px] w-[354px] rounded-full h-[354px] md:hidden blur-3xl bg-purple-dark dark:opacity-40 opacity-30"></div>
      <AppHero />
      <AppAbout />
      <AppCoreSkill />
      <AppBrandsWorkedWithMe />
      <AppProjectCarousel />
      <AppExperienceTimeline />
      {/* </AppWarpper> */}
    </main>
  );
}
