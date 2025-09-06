"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

interface AvatarImage {
  src: string;
  alt: string;
}

const FLIP_INTERVAL_MS = 4000;
const TRANSITION_DURATION_MS = 1000;
const OPACITY_TRANSITION_MS = 500;

const AVATAR_IMAGES: AvatarImage[] = [
  {
    src: "/images/human-avatar.jpg",
    alt: "Antonio Lopes profile picture",
  },
  {
    src: "/images/anime-avatar.png",
    alt: "Antonio Lopes anime profile picture",
  },
];

type AppAvatarProps = {
  size?: number;
  className?: string;
};

export const AppAvatar = ({ className, size = 64 }: AppAvatarProps) => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    const flipTimer = setInterval(
      () => setIsFlipped((prev) => !prev),
      FLIP_INTERVAL_MS
    );

    return () => clearInterval(flipTimer);
  }, []);

  return (
    <div
      className={`w-16 h-16 rounded-full flex items-center justify-center border border-purple-dark border-solid dark:border-dark-400 ${className}`}
    >
      <div
        className={`relative w-full h-full transition-transform duration-${TRANSITION_DURATION_MS} ease-in-out ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {AVATAR_IMAGES.map((image, index) => (
          <Image
            key={image.src}
            src={image.src}
            alt={image.alt}
            width={size}
            height={size}
            loading="eager"
            priority={false}
            className={`absolute w-full h-full rounded-full object-cover backface-hidden transition-opacity duration-${OPACITY_TRANSITION_MS} ${
              index === 0
                ? isFlipped
                  ? "opacity-0"
                  : "opacity-100"
                : `rotate-y-180 ${isFlipped ? "opacity-100" : "opacity-0"}`
            }`}
          />
        ))}
      </div>
    </div>
  );
};
