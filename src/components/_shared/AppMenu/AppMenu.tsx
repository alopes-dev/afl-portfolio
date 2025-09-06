"use client";
import { useDrawerStore } from "@/store/drawer";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { AppSelectLanguage } from "../AppSelectLanguage/AppSelectLanguage";
import { useTheme } from "@/components/providers";

const navItems = [
  { href: "/", label: "Entry Point()" },
  { href: "/about", label: "About me" },
  { href: "/open-source", label: "Open Source Contributions" },
];
export const AppMenu = () => {
  const pathname = usePathname();
  const { toggle } = useDrawerStore();
  const { theme } = useTheme();

  return (
    <nav className="fixed top-8 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="flex flex-1 items-center justify-between px-4">
          <Menu
            onClick={toggle}
            className="flex md:hidden w-8 h-8 dark:text-purple text-purple-dark"
          />
          <div className="flex items-center justify-center space-x-6 md:hidden">
            <AppSelectLanguage />
          </div>
          <div
            className="md:flex items-start flex-row mt-12 gap-2 hidden "
            key={pathname}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
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
      </div>
    </nav>
  );
};
