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
    <div className="p-10 md:fixed md:top-0">
      <div className="flex h-screen flex-col items-center justify-center">
        <Avatar />
        <nav
          className="fade relative mt-10 flex flex-row justify-center "
          id="nav"
        >
          <div className="flex flex-col items-center gap-4">
            {Object.entries(navItems).map(([path, name]) => {
              return (
                <Link
                  key={path}
                  href={`#${path}`}
                  className={cn(
                    "relative m-1 flex px-2 py-1 uppercase text-foreground transition-all hover:text-foreground-secondary",
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
    </div>
  );
}
