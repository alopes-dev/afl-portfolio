import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

type Highlight = {
  name: string;
  numbers: string;
  isActive: boolean;
};

type RankingsProps = {
  highlights: Highlight[];
};
export const Rankings = ({ highlights: contentHighlights }: RankingsProps) => {
  const [highlights, setHighlights] = useState(contentHighlights);

  useEffect(() => {
    const interval = setInterval(() => {
      setHighlights((prev) =>
        prev.map((highlight) => ({
          ...highlight,
          isActive: !highlight.isActive,
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center mt-6 gap-4">
      <div className="grid grid-cols-2 gap-4 relative">
        <div className="w-5 h-5 border-[1px] border-solid dark:border-purple-dark bg-purple dark:bg-transparent rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        {highlights?.map((highlight, index) => (
          <div
            key={`${highlight.name}-${index}`}
            className={cn(
              "relative p-6 rounded-lg w-[162px] h-[146px] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out",
              highlight.isActive
                ? "border-[1px] border-solid dark:border-purple-dark bg-purple dark:bg-dark-800 opacity-100"
                : "bg-dark-800/30 dark:bg-dark-800 opacity-80"
            )}
          >
            <span
              className={cn(
                "text-5xl font-bold text-center dark:text-dark-100 transition-colors duration-1000 ease-in-out",
                highlight.isActive
                  ? "text-light-100 opacity-100"
                  : "text-light-950 opacity-80"
              )}
            >
              {highlight.numbers}
            </span>
            <span
              className={cn(
                "text-xs font-normal text-purple dark:text-purple-light text-center mt-2 transition-colors duration-1000 ease-in-out",
                highlight.isActive
                  ? "text-light-100 opacity-100"
                  : "text-light-950 opacity-80"
              )}
            >
              {highlight.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
