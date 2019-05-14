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

export interface HomeProps {}

const Home: React.FunctionComponent<HomeProps> = ({}) => (
  <>
    <AppBar />
    <Hero />
    <Bio />
    <Interests />
    <Education />
    <Experience />
    <Expertise />
    <Quote />
    <Hobbies />
    <Footer />
  </>
);

export default Home;
