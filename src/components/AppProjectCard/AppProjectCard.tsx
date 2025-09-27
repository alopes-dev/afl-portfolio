"use client";

import Image from "next/image";
import { useState } from "react";
import { Badge } from "@/components/ui";

interface ProjectProps {
  project: {
    id: string;
    name: string;
    companyName?: string;
    description: string;
    approach?: string;
    solution?: string;
    tags?: string[];
    imageSrc: string;
  };
  hideBranding?: boolean;
}

export function AppProjectCard({
  project,
  hideBranding = false,
}: ProjectProps) {
  return (
    <div className="rounded-lg relative bg-light-100 dark:bg-dark-800 shadow-md hover:shadow-lg transition-shadow duration-300 dark:border-dark-700 border border-solid">
      {/* Project Image */}
      {!hideBranding && (
        <div className="flex items-center justify-center top-[-24px] right-2 absolute z-10">
          <Image
            src="/images/brand-new.png"
            alt="brand-new"
            width={50}
            height={50}
          />
        </div>
      )}
      <div className="relative rounded-t-lg w-full h-80 bg-light-300 dark:bg-dark-700 ">
        {project.imageSrc ? (
          <Image
            src={project.imageSrc}
            alt={project.name}
            fill
            className="object-cover rounded-t-lg"
          />
        ) : (
          <div className="flex items-center justify-center h-full">
            <span className="text-light-500 dark:text-dark-400">No image</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Project Name and Company */}
        <div className="mb-3">
          <span className="text-purple-dark dark:text-purple-light uppercase text-xs font-normal">
            web solution (tag)
          </span>
          <h3 className="text-xl font-semibold text-light-950 dark:text-dark-100">
            {project.name}
            {project.companyName && (
              <span className="text-sm font-normal text-light-700 dark:text-dark-300 ml-2">
                <small className="text-purple-light ext-sm font-bold dark:text-purple-light">
                  •
                </small>{" "}
                {project.companyName}
              </span>
            )}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-light-800 dark:text-dark-300 mb-4">
          {project.description}
        </p>

        {/* Tabs */}
        <div className="flex flex-col gap-2 mb-5 border-b border-light-300 dark:border-dark-600">
          <h4 className="text-lg font-medium text-light-700 dark:text-dark-400">
            Approach
          </h4>

          <p className="text-sm text-light-800 dark:text-dark-300 ">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-2">
            {project.tags?.map((tag, index) => (
              <Badge
                key={index}
                variant="outline"
                className="bg-light-200 dark:bg-[#6E5DE766] dark:text-purple text-xs h-6 uppercase"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-3 border-b border-light-300 dark:border-dark-600">
          <h4 className="text-lg font-medium text-light-700 dark:text-dark-400">
            Solution and Impact
          </h4>

          <p className="text-sm text-light-800 dark:text-dark-300 mb-4">
            {project.description}
          </p>
        </div>
      </div>
    </div>
  );
}
