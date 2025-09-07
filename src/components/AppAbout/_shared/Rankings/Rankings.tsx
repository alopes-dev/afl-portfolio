import { cn } from "@/lib/utils";

const rankings = [
  {
    experience: "+6",
    name: "Years of experience",
    active: true,
  },

  {
    experience: "+100",
    name: "Working",
    active: false,
  },

  {
    experience: "+100",
    name: "Working",
    active: false,
  },
  {
    experience: "+100",
    name: "Project",
    active: true,
  },
];
export const Rankings = () => {
  return (
    <div className="flex flex-col items-center mt-6 gap-4">
      <div className="grid grid-cols-2 gap-4 relative">
        <div className="w-5 h-5 border-[1px] border-solid dark:border-purple-dark bg-purple dark:bg-transparent rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        {rankings?.map((ranking, index) => (
          <div
            key={`${ranking.name}-${index}`}
            className={cn(
              "relative  p-6 rounded-lg w-[162px] h-[146px] bg-dark-800/30 dark:bg-dark-800 flex flex-col items-center justify-center",
              ranking.active
                ? "border-[1px] border-solid dark:border-purple-dark bg-purple"
                : "bg-dark-800/30 dark:bg-dark-800"
            )}
          >
            <span
              className={cn(
                "text-5xl font-bold text-center  dark:text-dark-100",
                ranking.active ? "text-light-100" : "text-light-950"
              )}
            >
              {ranking.experience}
            </span>
            <span
              className={cn(
                "text-xs font-normal text-purple dark:text-purple-light text-center mt-2",
                ranking.active ? "text-light-100" : "text-light-950"
              )}
            >
              {ranking.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
