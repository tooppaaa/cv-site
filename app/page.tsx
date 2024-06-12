import Section from "@/components/ui/section";
import About from "@/components/about";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Hero from "@/components/hero";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Page() {
  return (
    <>
      <Hero />
      <Section title="A propos" id="about">
        <About />
      </Section>
      <Section title="Compétences" id="skills">
        <Skills />
      </Section>
      <Section title="Expérience" id="experience">
        <Experience />
      </Section>
      <Section title="Éducation" id="education">
        <Education />
      </Section>
      <Section title="Projets" id="projects">
        <Projects />
      </Section>
    </>
  );
}
