import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});
export const SoftoIcon = () => (
  <div className={`md:text-5xl text-3xl font-semibold ${nunito.className}`}>
    <span className="font-nunito">
      sof<small className="text-orange-300">.</small>to
    </span>
  </div>
);
