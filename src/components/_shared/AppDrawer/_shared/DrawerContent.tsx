"use client";
import { AppSwitcher } from "../../AppSwitcher/AppSwitcher";
import { useTheme } from "@/components/providers";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppAvatar } from "../../AppAvatar/AppAvatar";
import { useDrawerStore } from "@/store/drawer";

const navItems = [
  { href: "#home", label: "Entry Point()" },
  { href: "#about", label: "About me" },
  { href: "/projects", label: "Projects" },
  { href: "/open-source", label: "Open Source Contributions" },
];

export const DrawerContent = () => {
  const { theme } = useTheme();
  const pathname = usePathname();
  const { toggle } = useDrawerStore();

  return (
    <nav className="p-4 h-full" role="navigation" aria-label="Main navigation">
      <main className="space-y-4 py-16 h-full justify-between flex flex-col">
        <div className="flex items-start flex-col gap-2 p-4">
          <AppAvatar />
          <div className="gap-3">
            <h1 className="text-2xl leading-[30px] font-light text-light-950 dark:text-dark-100">
              Antonio Lopes
            </h1>
            <p className="text-xs font-bold text-light-950 dark:text-dark-100">
              Full Stack Web
              <span className="text-xs font-bold  dark:text-purple-light text-purple-dark">
                {" & "}
              </span>
              Mobile Engineer
            </p>
          </div>
          <div className="flex items-start flex-col mt-12 gap-2" key={pathname}>
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={toggle}
                className={`text-sm h-9 font-medium transition-colors hover:text-foreground/80 ${
                  pathname === item.href
                    ? " text-purple-dark dark:text-purple-light"
                    : "dark:text-dark-100 text-light-950"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4">
          <AppSwitcher />
          <span className="text-sm font-medium dark:text-dark-100 text-light-950">
            {theme === "dark" ? "Dark mode" : "Light mode"}
          </span>
        </div>
      </main>
    </nav>
  );
};

export const Backdrop = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 bg-black/80 z-[998]"
    onClick={onClose}
    role="presentation"
    aria-hidden="true"
  />
);
