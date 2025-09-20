"use client";

import { useState } from "react";
import { AppAnimation } from "../_shared/AppAnimation/AppAnimation";
import { Button } from "../ui/button";

interface Experience {
  id: number;
  company: string;
  title: string;
  period: string;
  description: string;
}

export const AppExperienceTimeline = () => {
  const [selectedCompany, setSelectedCompany] = useState<number>(0);

  const experiences: Experience[] = [
    {
      id: 0,
      company: "Softo",
      title: "Senior Frontend Developer",
      period: "2022 - Present",
      description:
        "Led the development of modern web applications using React, Next.js, and TypeScript. Implemented responsive designs and optimized performance for better user experience.",
    },
    {
      id: 1,
      company: "sheerMe",
      title: "Frontend Developer",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple client-facing applications. Collaborated with designers to implement pixel-perfect UI components and animations.",
    },
    {
      id: 2,
      company: "Abastece Aí/KMV",
      title: "UI/UX Developer",
      period: "2018 - 2020",
      description:
        "Created interactive prototypes and implemented UI designs. Worked closely with product managers to deliver features that meet user needs.",
    },
    {
      id: 3,
      company: "Objective",
      title: "Web Developer",
      period: "2016 - 2018",
      description:
        "Built responsive websites and web applications. Implemented frontend functionality using modern JavaScript frameworks.",
    },
    {
      id: 4,
      company: "SNIR",
      title: "Web Developer",
      period: "2016 - 2018",
      description:
        "Built responsive websites and web applications. Implemented frontend functionality using modern JavaScript frameworks.",
    },
    {
      id: 5,
      company: "Mochi Noir",
      title: "Web Developer",
      period: "2016 - 2018",
      description:
        "Built responsive websites and web applications. Implemented frontend functionality using modern JavaScript frameworks.",
    },
  ];

  return (
    <AppAnimation id="experience" className="mb-16 container">
      <div className="flex flex-col items-start mt-16 gap-4 translate-y-4 transition-all duration-700">
        <div className="w-full flex md:flex-row flex-col justify-between md:items-center items-start gap-4">
          <h4 className="text-[28px] font-bold text-light-950 dark:text-dark-100">
            Experience Timeline - (Top 5)
          </h4>
          <Button variant="default">Full Resume</Button>
        </div>

        <div className="w-full flex flex-col md:flex-row gap-6 mt-4">
          {/* Timeline */}
          <div className="md:w-1/3 w-full flex flex-col relative">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-dark-700/30 to-purple-dark-600/30 dark:from-dark-700/50 dark:to-dark-600/50"></div>

            {experiences.map((exp) => (
              <div
                key={exp.id}
                onClick={() => setSelectedCompany(exp.id)}
                className={`relative pl-10 py-4 h-16 w-full flex items-center cursor-pointer transition-all duration-300 ${
                  selectedCompany === exp.id
                    ? "bg-gradient-to-r from-purple-light to-light-background/20 dark:from-purple/30 dark:to-dark-900/30 border-l-4 border-purple border-solid"
                    : "hover:bg-light-200/20 dark:hover:bg-dark-800/30 border-l-4 border-transparent"
                }`}
              >
                <h3
                  className={`font-bold transition-all duration-300 ${
                    selectedCompany === exp.id
                      ? "text-light-900  dark:text-dark-100"
                      : "text-light-700 dark:text-dark-100"
                  }`}
                >
                  {exp.company}
                </h3>
              </div>
            ))}
          </div>

          {/* Job Details */}
          <div className="md:w-2/3 w-full  pb-4 border-b border-solid border-light-400 dark:border-dark-700 flex justify-between flex-col">
            <div className="md:p-6 pl-0 md:pl-6 pb-1 transition-all duration-500 min-h-[200px] w-full ">
              <div key={selectedCompany} className="animate-fade-in w-full">
                <h2 className="text-xl font-bold text-light-950 dark:text-dark-100 mb-1">
                  {experiences[selectedCompany].title}
                </h2>
                <p className="text-sm text-light-600 dark:text-dark-400 mb-4">
                  {experiences[selectedCompany].company}{" "}
                  <small className="text-purple-light ext-sm font-bold dark:text-purple-light">
                    •
                  </small>{" "}
                  {experiences[selectedCompany].period}
                </p>
                <p className="text-light-800 dark:text-dark-300">
                  {experiences[selectedCompany].description}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple/40 text-purple-dark dark:text-purple-light">
                React
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple/40 text-purple-dark dark:text-purple-light">
                TypeScript
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple/40 text-purple-dark dark:text-purple-light">
                Next.js
              </span>
              <span className="px-3 py-1 text-xs font-medium rounded-full bg-purple/40 text-purple-dark dark:text-purple-light">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </AppAnimation>
  );
};
