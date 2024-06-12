import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  IconGitHub,
  LinkedinIcon,
  MailIcon,
  PhoneIcon,
} from "@/components/ui/icon";

const Social = () => {
  return (
    <div
      className="flex justify-center gap-6 print:hidden"
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-delay="500"
    >
      <Link
        className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
        href="https://github.com/tooppaaa"
      >
        <IconGitHub className="size-5 text-inherit" />
      </Link>
      <Link
        className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
        href="https://www.linkedin.com/in/clement-dungler/"
      >
        <LinkedinIcon className="size-5 text-inherit" />
      </Link>
      <Link
        href="mailto:clementdungler@gmail.com"
        className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
      >
        <MailIcon className="size-5 text-inherit" />
      </Link>
      <Link
        href="tel:+33612571894"
        className={cn(buttonVariants({ size: "icon", variant: "outline" }))}
      >
        <PhoneIcon className="size-5 text-inherit" />
      </Link>
    </div>
  );
};

export default Social;
