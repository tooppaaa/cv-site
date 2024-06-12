import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  children: React.ReactNode;
  title: string;
}

const Section = ({ children, title, ...props }: SectionProps) => {
  return (
    <section {...props} aria-label={title}>
      <div className="container my-auto mt-40 break-after-avoid md:mt-44 print:mt-8">
        <div
          className="relative mb-20 text-center print:mb-8"
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <h2
            className={cn(
              "relative z-10 text-2xl uppercase tracking-wide text-primary",
              "before:absolute before:-bottom-4 before:left-1/2 before:h-[2px] before:w-40 before:-translate-x-1/2 before:bg-line before:content-['']",
              "after:absolute after:-bottom-4 after:left-1/2 after:h-[2px] after:w-16 after:-translate-x-1/2 after:bg-primary after:content-['']"
            )}
          >
            {title}
          </h2>
          <h2
            className="absolute left-1/2 top-0 -m-4 w-full -translate-x-1/2 overflow-hidden text-nowrap text-7xl font-bold uppercase text-foreground-light blur-sm print:hidden"
            aria-hidden
          >
            {title}
          </h2>
        </div>
      </div>
      <div className="container">{children}</div>
    </section>
  );
};

export default Section;
