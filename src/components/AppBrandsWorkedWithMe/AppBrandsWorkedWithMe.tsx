"use client";

import { useEffect, useRef } from "react";
import { SoftoIcon } from "../_shared/AppIcons/softo";
import { ObjectiveIcon } from "../_shared/AppIcons/objective";
import { MochiIcon } from "../_shared/AppIcons/mochi";
import { IpirangaIcon } from "../_shared/AppIcons/ipiranga";
import Image from "next/image";
import { NebulanceIcon } from "../_shared/AppIcons/nebulance";
import { MalgaIcon } from "../_shared/AppIcons/malga";
import { FAIcon } from "../_shared/AppIcons/fa";

export const AppBrandsWorkedWithMe = () => {
  const brands = [
    { id: 1, name: "NebulanceIcon", component: () => <NebulanceIcon /> },
    {
      id: 2,
      name: "SoftoIcon",
      component: () => <SoftoIcon />,
    },
    { id: 3, name: "sheerme", logo: "/images/brands/sheerme-light.svg" },
    { id: 4, name: "IpirangaIcon", component: () => <IpirangaIcon /> },
    { id: 5, name: "ObjectiveIcon", component: () => <ObjectiveIcon /> },
    { id: 6, name: "MochiIcon", component: () => <MochiIcon /> },
    { id: 7, name: "MalgaIcon", component: () => <MalgaIcon /> },
    { id: 8, name: "ifood", logo: "/images/brands/ifood.svg" },
    { id: 9, name: "nutrebem", logo: "/images/brands/nutrebem.png" },
    { id: 10, name: "inspecte", logo: "/images/brands/inspecte.svg" },
    { id: 11, name: "metcare", logo: "/images/brands/metcare.webp" },
    { id: 12, name: "FA", component: () => <FAIcon /> },
    { id: 13, name: "Avatar", logo: "/images/brands/goal.png" },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let isUserScrolling = false;
    let scrollTimeout: NodeJS.Timeout;
    let autoScrollInterval: NodeJS.Timeout;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainer;

      // Clear the previous timeout
      clearTimeout(scrollTimeout);

      // Set user scrolling flag
      isUserScrolling = true;

      // Reset the flag after user stops scrolling
      scrollTimeout = setTimeout(() => {
        isUserScrolling = false;
        startAutoScroll();
      }, 100);

      // Looping logic
      if (scrollLeft + clientWidth >= scrollWidth - 1) {
        scrollContainer.style.scrollBehavior = "auto";
        scrollContainer.scrollLeft = clientWidth;
        requestAnimationFrame(() => {
          scrollContainer.style.scrollBehavior = "smooth";
        });
      }

      if (scrollLeft <= 0) {
        scrollContainer.style.scrollBehavior = "auto";
        scrollContainer.scrollLeft = scrollWidth - 2 * clientWidth;
        requestAnimationFrame(() => {
          scrollContainer.style.scrollBehavior = "smooth";
        });
      }
    };

    const startAutoScroll = () => {
      clearInterval(autoScrollInterval);

      if (!isUserScrolling) {
        autoScrollInterval = setInterval(() => {
          if (!scrollContainer || isUserScrolling) return;
          scrollContainer.scrollLeft += 1;
        }, 30);
      }
    };

    startAutoScroll();
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(autoScrollInterval);
      clearTimeout(scrollTimeout);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const repeatedBrands = [...brands, ...brands, ...brands, ...brands];

  return (
    <div className="w-full py-12 bg-background flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-4">
          {"Brands I've Worked With"}
        </h2>

        <div
          ref={scrollRef}
          className="relative w-full overflow-x-auto scrollbar-hide scroll-smooth"
        >
          <div className="flex gap-6 min-w-max">
            {repeatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-none w-[120px] md:w-[170px] h-[80px]"
              >
                <div className="bg-card w-full h-full cursor-pointer rounded-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg flex items-center justify-center p-2">
                  {brand?.component && (
                    <>
                      <brand.component />
                    </>
                  )}
                  {!brand?.component && (
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      loading="eager"
                      priority={true}
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                      draggable="false"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
