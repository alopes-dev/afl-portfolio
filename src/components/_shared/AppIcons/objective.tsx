import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});
export const ObjectiveIcon = () => {
  return (
    <div className={`flex items-center justify-center ${nunito.className}`}>
      <h1 className="md:text-4xl text-2xl font-semibold tracking-tight  text-black">
        {/* O com gradiente */}
        <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
          O
        </span>
        {/* resto das letras */}b
        <span className="relative inline-block">
          j
          <span className="absolute top-1 right-[2px] w-[6px] h-[10px] bg-gradient-to-r from-orange-500 to-red-500 skew-y-12"></span>
        </span>
        e<span className="relative inline-block">c</span>t
        <span className="relative inline-block">
          i
          <span className="absolute top-1 right-[2px] w-[6px] h-[10px] bg-gradient-to-r from-orange-500 to-red-500 skew-y-12"></span>
        </span>
        v<span className="relative inline-block">e</span>
      </h1>
    </div>
  );
};
