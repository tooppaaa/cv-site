import * as React from "react";
import AppBar from "../organisms/AppBar";
import Hero from "../organisms/Hero";
import Interests from "../organisms/Interests";
import Education from "../organisms/Education";
import Experience from "../organisms/Experience";
import Expertise from "../organisms/Expertise";
import Quote from "../organisms/Quote";
import Hobbies from "../organisms/Hobbies";
import Footer from "../organisms/Footer";
import Bio from "../organisms/Bio";
import Section from "../atoms/Section";
import Projects from "../organisms/Projects";

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = ({}) => (
  <>
    <AppBar />
    <Hero />
    <Section id="bio" alternate>
      <Bio />
    </Section>
    <Section id="interests">
      <Interests />
    </Section>
    <Section id="education" alternate>
      <Education />
    </Section>
    <Section id="experience">
      <Experience />
    </Section>
    <Section id="projects">
      <Projects />
    </Section>
    <Section id="expertise" alternate>
      <Expertise />
    </Section>
    <Section id="quote" noPadding>
      <Quote />
    </Section>
    <Section id="hobbies" alternate>
      <Hobbies />
    </Section>
    <Footer />
  </>
);

export default Home;
