import Image, { StaticImageData } from "next/image";
import bike from "@/public/bike.webp";
import code from "@/public/code.jpg";
import family from "@/public/family.jpg";
import run from "@/public/run.jpg";
import swim from "@/public/swim.jpg";

import { cn } from "@/lib/utils";
import Contact from "@/components/contact";

const About = () => {
  return (
    <div className="flex flex-col gap-8">
      <p
        className="text-foreground-secondary md:text-center print:text-left"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="200"
      >
        Je m&apos;appuie sur trois piliers fondamentaux qui définissent ma vie
        professionnelle et personnelle.
        <br /> Chacun de ces piliers me guide et m&apos;inspire au quotidien,
        tant dans mes projets que dans mes passions.
        <br />
        Un bon équilibre entre la famille, le sport et le travail est essentiel
        pour moi.
        <br /> Si l&apos;un de ces aspects est perturbé, cela impacte
        l&apos;ensemble.
      </p>

      <div className="grid gap-8 md:grid-cols-2">
        <PillarContent
          title="Famille"
          description="Marié, papa d'un petit garçon de 3 ans"
        />

        <div className="flex items-center justify-center gap-4 md:justify-start print:hidden">
          <AboutImage src={family} />
        </div>
      </div>
      <div className="grid gap-8 md:grid-cols-2">
        <div className="order-2 flex items-center justify-center gap-4 md:order-1 md:justify-end print:hidden">
          <div className="">
            <AboutImage src={swim} start size="small" />
          </div>
          <div className="flex flex-col gap-4">
            <AboutImage src={bike} start size="small" />
            <AboutImage src={run} start size="small" />
          </div>
        </div>
        <PillarContent
          title="Sport"
          description="Natation, vélo, course à pied, trail"
          start
          className="md:order-2"
        >
          <p>Membre du club Saint Herblain Triathlon</p>
          <p>Participation à des triathlons / trail longue distance</p>
          <p className="mt-2 text-xs print:hidden">
            Ce n&apos;est pas moi en photo
          </p>
        </PillarContent>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        <PillarContent
          title="Travail"
          description="De manière professionelle mais aussi personelle"
        >
          <p className="md:text-right">
            Plusieurs projets perso, experimentations, essai de nouvelles choses
          </p>
        </PillarContent>
        <div className="flex items-center justify-center gap-4 md:justify-start print:hidden">
          <AboutImage src={code} />
        </div>
      </div>
    </div>
  );
};

interface AboutImageProps {
  src: StaticImageData;
  start?: boolean;
  size?: "small" | "medium";
}

const AboutImage = ({ src, start, size = "medium" }: AboutImageProps) => {
  return (
    <div
      className={cn(
        " relative size-40 overflow-hidden rounded-3xl grayscale sm:size-52 lg:size-72",
        size === "small" && "size-36 sm:size-40 lg:size-52"
      )}
      data-aos={start ? "fade-right" : "fade-left"}
      data-aos-duration="800"
      data-aos-delay="200"
    >
      <Image
        src={src}
        fill
        alt=""
        style={{
          objectFit: "cover",
        }}
      />
    </div>
  );
};

interface PillarContentProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  start?: boolean;
  className?: string;
}

const PillarContent = ({
  title,
  description,
  children,
  start,
  className,
}: PillarContentProps) => {
  return (
    <div
      className={cn(
        " flex flex-col justify-center print:items-start",
        !start && "md:items-end",
        className
      )}
      data-aos={start ? "fade-left" : "fade-right"}
      data-aos-duration="800"
      data-aos-delay="200"
    >
      <h3 className="mb-1 text-xl text-primary">{title}</h3>
      <p className="mb-1">{description}</p>
      <div className="text-foreground-secondary">{children}</div>
    </div>
  );
};

export default About;
