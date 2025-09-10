import { Nunito } from "next/font/google";
import Image from "next/image";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "900", "1000"],
  style: ["normal", "italic"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});
export const MochiIcon = () => (
  <div
    className={`md:text-4xl text-2xl flex items-center gap-2 font-semibold ${nunito.className}`}
  >
    <div className="md:w-10 md:h-10 w-7 h-7 rounded-full">
      <Image
        src="/images/brands/mochi-noir.jpg"
        alt="Muchi"
        loading="eager"
        priority={true}
        className="w-full h-full object-contain rounded-full"
        draggable="false"
      />
    </div>
    <span className="font-nunito">Mochi</span>
  </div>
);
