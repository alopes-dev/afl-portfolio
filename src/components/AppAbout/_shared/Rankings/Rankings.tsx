import { cn } from "@/lib/utils";

const rankings = [
  {
    experience: "+6",
    name: "Years of experience",
    active: true,
  },
  {
    experience: "+100",
    name: "Project",
    active: true,
  },
  {
    experience: "+100",
    name: "Working",
    active: false,
  },
];
export const Rankings = () => {
  return (
    <div className="flex flex-col items-center mt-6 gap-4">
      <div className="grid grid-cols-2 gap-4">
        {rankings?.map((ranking, index) => (
          <div
            key={`${ranking.name}-${index}`}
            className={cn(
              "relative  p-6 rounded-lg w-[162px] h-[146px] bg-dark-800/30 dark:bg-dark-800 flex flex-col items-center justify-center",
              ranking.active
                ? "border-[1.36px] border-solid border-purple-dark"
                : "bg-dark-800/30 dark:bg-dark-800"
            )}
          >
            <span className="text-5xl font-bold text-center text-light-950 dark:text-dark-100">
              {ranking.experience}
            </span>
            <span className="text-xs font-normal text-purple dark:text-purple-light text-center mt-2">
              {ranking.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
