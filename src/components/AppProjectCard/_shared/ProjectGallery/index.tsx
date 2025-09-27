"use client";
import {
  AlertDialog,
  AlertDialogTrigger,
  Badge,
  Button,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import { ProjectViewModal } from "../ProjectViewModal";

const projects = [
  {
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
  },
  {
    id: "2",
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
  },
];
export const ProjectGallery = () => {
  const [selectedTag, setSelectedTag] = useState<string>("all");

  return (
    <AlertDialog>
      <div className="flex flex-col w-full mt-6">
        <h3 className="text-[28px] font-bold text-center text-light-950 dark:text-dark-100">
          Project Gallery
        </h3>

        <ProjectViewModal project={projects[0]} />

        <div className="flex flex-row items-center justify-center gap-4 mt-4">
          <Badge
            variant="outline"
            className={cn(
              "bg-[#6E5DE73D] dark:bg-[#6E5DE766] dark:text-purple text-purple-dark text-xs h-6 uppercase",
              selectedTag === "all" &&
                "bg-purple dark:bg-purple text-white dark:text-white"
            )}
            onClick={() => setSelectedTag("all")}
          >
            all projects
          </Badge>
          <Badge
            variant="outline"
            className={cn(
              "bg-[#6E5DE73D] dark:bg-[#6E5DE766] dark:text-purple text-purple-dark text-xs h-6 uppercase",
              selectedTag === "web" &&
                "bg-purple dark:bg-purple text-white dark:text-white"
            )}
            onClick={() => setSelectedTag("web")}
          >
            WEB
          </Badge>
          <Badge
            variant="outline"
            className={cn(
              "bg-[#6E5DE73D] dark:bg-[#6E5DE766] dark:text-purple text-purple-dark text-xs h-6 uppercase",
              selectedTag === "mobile" &&
                "bg-purple dark:bg-purple text-white dark:text-white"
            )}
            onClick={() => setSelectedTag("mobile")}
          >
            Mobile
          </Badge>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-6 w-full max-w-7xl">
          {projects?.map((project) => (
            <div className="flex flex-col gap-4 " key={project.id}>
              <div className="relative rounded-lg w-full h-80 bg-light-300 dark:bg-dark-700 ">
                <Image
                  src={project.imageSrc}
                  alt={project.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="mb-3">
                <span className="text-purple-dark dark:text-purple-light uppercase text-xs font-normal">
                  web solution (tag)
                </span>
                <h3 className="text-xl font-semibold text-light-950 dark:text-dark-100">
                  {project.name}
                  <span className="text-sm font-normal text-light-700 dark:text-dark-300 ml-2">
                    <small className="text-purple-light ext-sm font-bold dark:text-purple-light">
                      •
                    </small>{" "}
                    {project.companyName}
                  </span>
                </h3>
                <div className="flex flex-wrap gap-2 mt-2 ">
                  {project.tags.map((tag, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="bg-[#6E5DE73D] dark:bg-[#6E5DE766] dark:text-purple text-purple-dark text-xs h-6 uppercase"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
                <AlertDialogTrigger asChild>
                  <Button variant="default" className="mt-4">
                    View details
                  </Button>
                </AlertDialogTrigger>
              </div>

              <div className="border-b border-solid border-dark-700" />
            </div>
          ))}
        </div>
      </div>
    </AlertDialog>
  );
};
