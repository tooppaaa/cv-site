import { cn } from "@/lib/utils";

export interface ProgressProps {
  className?: string;
  value: number;
}

const Progress = ({ className, ...props }: ProgressProps) => {
  return (
    <div className={cn(className)}>
      <div className="relative h-2 w-full overflow-hidden rounded-full bg-line print:h-1">
        <div
          className="absolute left-0 top-0 h-full rounded-full bg-primary"
          style={{ width: `${props.value}%` }}
        />
      </div>
    </div>
  );
};

export default Progress;
