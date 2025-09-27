import type { Metadata } from "next";
import { AppProjectCard } from "@/components/AppProjectCard/AppProjectCard";
import { Fragment } from "react";
import { ProjectGallery } from "@/components/AppProjectCard/_shared/ProjectGallery";

export const metadata: Metadata = {
  title: "Projects | Your Portfolio",
  description: "Explore my projects and work",
};

export default function ProjectsPage() {
  // Sample project data - you can replace this with data from your Contentful store
  const project = {
    id: "1",
    name: "Project name",
    companyName: "Company name or logo",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    approach:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    solution:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["WEB", "MOBILE", "UI/UX"],
    imageSrc: "/images/human-avatar.jpg",
  };
  // Add more projects as needed

  return (
    <Fragment>
      <h1 className="text-4xl font-bold text-light-950 dark:text-dark-100 mb-12">
        Featured Projects
      </h1>

      <div className="w-full max-w-7xl">
        <AppProjectCard project={project} />
      </div>
      <ProjectGallery />
    </Fragment>
  );
}
