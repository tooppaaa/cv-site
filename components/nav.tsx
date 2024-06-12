"use client";

import Link from "next/link";

import useActiveSection from "@/lib/useActiveSection";
import { cn } from "@/lib/utils";
import Avatar from "@/components/ui/avatar";

const navItems = {
  about: "A propos",
  skills: "Compétences",
  experience: "Expérience",
  education: "Éducation",
  projects: "Projets",
};

export function Navbar() {
  const active = useActiveSection(["home", ...Object.keys(navItems)]);
  return (
    <div className="p-10 md:fixed md:top-20">
      <Avatar />
      <nav
        className="fade relative mt-20 flex scroll-pr-6 flex-row items-start px-0 pb-0 md:relative md:overflow-auto"
        id="nav"
      >
        <div className="flex flex-col gap-4 pr-10">
          {Object.entries(navItems).map(([path, name]) => {
            return (
              <Link
                key={path}
                href={`#${path}`}
                className={cn(
                  "relative m-1 flex px-2 py-1 align-middle uppercase text-foreground transition-all hover:text-foreground-secondary",
                  active === path ? "text-primary" : "text-foreground"
                )}
              >
                {name}
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
