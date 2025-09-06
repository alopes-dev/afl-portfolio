"use client";

import { useDrawerStore } from "@/store/drawer";
import { Backdrop, DrawerContent } from "./_shared/DrawerContent";

export const AppDrawer = () => {
  const { isOpen, close } = useDrawerStore();

  return (
    <aside
      className="relative"
      role="complementary"
      aria-label="Sidebar navigation"
    >
      {isOpen && <Backdrop onClose={close} />}

      <div
        className={`
          fixed top-0 left-0 h-full w-4/5 max-w-sm 
          bg-light-sidebar dark:bg-dark-sidebar  z-[999] border-r overflow-hidden shadow-mediumDropShadow
          transition-transform duration-300 ease-in-out transform
          rounded-tr-[2rem] rounded-br-[2rem]
          ${isOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        role="dialog"
        aria-modal="true"
        aria-expanded={isOpen}
        aria-hidden={!isOpen}
      >
        <div className="absolute top-[-10px] left-[62%]  overflow-hidden w-[150px] rounded-full h-[150px]  blur-3xl dark:bg-purple bg-purple-light opacity-100"></div>
        <DrawerContent />
      </div>
    </aside>
  );
};
