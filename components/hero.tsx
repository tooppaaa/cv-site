import Avatar from "@/components/ui/avatar";
import Contact from "@/components/contact";
import Social from "@/components/social";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex h-screen items-center justify-center overflow-hidden print:h-auto print:justify-start"
      aria-label="Accueil"
    >
      <div className="container">
        <div className="mb-4 flex justify-center md:hidden print:flex print:items-center print:justify-start print:gap-4">
          <Avatar />
          <div className="hidden print:block">
            <Contact />
          </div>
        </div>
        <h1
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="text-center text-3xl font-semibold md:text-6xl print:text-left"
        >
          Bonjour,
          <br />
          <span>je suis </span>
          <span className="text-nowrap text-primary">Clément DUNGLER</span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="400"
          className="mb-5 mt-10 text-center text-lg font-light text-foreground-secondary print:text-left"
        >
          Je suis responsable R&D, achitecte, développeur.
          <br /> J&apos;apprécie l&apos;esprit entrepreneurial où tout est
          possible avec du travail et de la détermination.
          <br />
        </p>

        <Social />
      </div>
      <div id="background-wrap" className="pointer-events-none print:hidden">
        <div className="bubble x1"></div>
        <div className="bubble x2"></div>
        <div className="bubble x3"></div>
        <div className="bubble x4"></div>
        <div className="bubble x5"></div>
        <div className="bubble x6"></div>
        <div className="bubble x7"></div>
        <div className="bubble x8"></div>
        <div className="bubble x9"></div>
        <div className="bubble x10"></div>
      </div>
    </section>
  );
};

export default Hero;
