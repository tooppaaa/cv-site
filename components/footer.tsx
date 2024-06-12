import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Social from "@/components/social";

function Footer() {
  return (
    <footer className="container my-16 flex flex-col items-center print:hidden">
      <Social />
      <Link
        href="/Clément DUNGLER.pdf"
        target="_blank"
        className={cn(buttonVariants(), "mt-8")}
        download
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        Télécharger mon CV
      </Link>
      <div
        className="mt-8 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
        data-aos-delay="500"
      >
        <p>© {new Date().getFullYear()} MIT</p>
      </div>
    </footer>
  );
}

export default Footer;
