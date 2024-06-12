import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import lifeevent from "@/public/lifeevent.png";
import spaetzle from "@/public/spaetzle.webp";
import storybook from "@/public/storybook.webp";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { ArrowIcon } from "@/components/ui/icon";

const Projects = () => {
  return (
    <div className="grid gap-8 md:grid-cols-3 print:grid-cols-1">
      <Project
        src={spaetzle}
        label="Spaetzle"
        description="Application de gestion de recettes de cuisine. Application mobile React Native et web Next.js"
        order={0}
        href="https://spaetzle.app"
      />
      <Project
        src={storybook}
        label="Storybook"
        description="Contributions à Storybook, l'outil de développement d'interface utilisateur. Ajout de fonctionnalités, correction de bugs"
        order={1}
        objectFit="contain"
        href="https://storybook.js.org/"
      />
      <Project
        src={lifeevent}
        label="LifeEvent"
        description="(Abandonné) Application mobile de gestion d'album photos avec ses proches."
        order={2}
        objectFit="contain"
      />
    </div>
  );
};

interface ProjectProps {
  src: StaticImageData;
  label: string;
  description: string;
  order: number;
  objectFit?: "contain" | "cover";
  href?: string;
}

const Project = ({
  src,
  label,
  description,
  order,
  objectFit = "cover",
  href,
}: ProjectProps) => {
  return (
    <div
      className="flex break-inside-avoid flex-col items-center gap-6 print:flex-row"
      data-aos={"fade-up"}
      data-aos-duration="800"
      data-aos-delay={(order + 1) * 150}
    >
      <div className="relative size-40 overflow-hidden rounded-3xl bg-slate-50 sm:size-60 md:size-72 print:size-20 print:min-w-20">
        <Image
          src={src}
          fill
          alt=""
          style={{
            objectFit: objectFit,
          }}
        />
      </div>
      <div className="text-center print:text-left">
        <p className="text-lg text-primary">{label}</p>
        <p className="text-foreground-secondary">{description}</p>
        {href && (
          <Link
            href={href}
            className={cn(
              buttonVariants({ size: "icon", variant: "outline" }),
              "print:hidden"
            )}
            target="_blank"
          >
            <ArrowIcon />
          </Link>
        )}
      </div>
    </div>
  );
};

export default Projects;
