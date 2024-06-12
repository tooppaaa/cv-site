import { cn } from "@/lib/utils";

interface TimelineProps {
  children: React.ReactNode;
}

export const Timeline = ({ children }: TimelineProps) => {
  return (
    <div className="ml-1 space-y-4  border-l border-line pl-5 md:ml-5 md:space-y-8 md:pl-10">
      {children}
    </div>
  );
};

interface TimelineItemProps {
  title: string;
  duration: string;
  subtitle: string;
  text?: React.ReactNode;
}
export const TimelineItem = ({
  title,
  duration,
  subtitle,
  text,
}: TimelineItemProps) => {
  return (
    <div
      className={cn(
        "aos-init aos-animate relative print:break-inside-avoid",
        "before:absolute before:-bottom-4 before:left-[-27px] before:top-0 before:size-3 before:rounded-full before:border-2 before:border-line before:bg-background before:transition-colors before:duration-300 before:ease-in-out before:content-[''] md:before:left-[-47px]",
        "hover:before:bg-primary"
      )}
      data-aos="fade-up"
      data-aos-duration="400"
      data-aos-delay="200"
    >
      <h3 className="mb-1 text-xl font-bold text-primary">{title}</h3>
      <p className="mb-4 text-foreground-secondary">{duration}</p>
      <p className="mb-4">{subtitle}</p>
      {text && <div className="text-sm text-foreground-secondary">{text}</div>}
    </div>
  );
};
