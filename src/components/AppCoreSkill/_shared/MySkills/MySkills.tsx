import { Code2 } from "lucide-react";

const mySkills = [
  {
    name: "Full Stack Development",
    description:
      "Experienced in building scalable web and mobile applications using React, Next.js, React Native, Flutter, and Node.js with a strong focus on clean architecture and performance.",
  },
  {
    name: "Mobile Development",
    description:
      "Skilled in developing cross-platform mobile applications with React Native (Expo) and Flutter, as well as native iOS apps using SwiftUI.",
  },
  {
    name: "AI-Assisted Development",
    description:
      "Leverages tools like MCP (Model context protocols), GitHub Copilot, Cursor, and V0 to accelerate coding workflows, optimize integrations, and improve code quality.",
  },
  {
    name: "Domain-Driven Design (DDD)",
    description:
      "Applies domain-driven design principles along with SOLID, DRY, and KISS to create maintainable, modular, and well-structured software solutions.",
  },
  {
    name: "Clean Architecture & Best Practices",
    description:
      "Focuses on applying engineering best practices such as SOLID, DRY, YAGNI, and design patterns to deliver scalable, maintainable, and high-performance software.",
  },
];
export const MySkills = () => {
  return (
    <div className="flex flex-col items-start mt-6 gap-6 md:w-[50%]">
      {mySkills?.map((mySkill) => (
        <div
          className="flex flex-col items-start gap-2 border-b border-solid border-light-400 dark:border-dark-700 pb-2 "
          key={mySkill.name}
        >
          <div className="flex flex-row items-center justify-center gap-2 ">
            <Code2 className="text-purple-dark" />
            <h5 className="text-[22px] font-semibold text-light-950 dark:text-dark-100">
              {mySkill.name}
            </h5>
          </div>
          <p className="text-sm font-normal text-start text-light-900 dark:text-dark-300">
            {mySkill.description}
          </p>
        </div>
      ))}
    </div>
  );
};
