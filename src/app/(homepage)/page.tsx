"use client";

import React from "react";
import { Element } from "react-scroll";
import Hero from "./Hero";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import ScrollToTopButton from "./Components/ScrollToTopButton";

const page: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Projects />

      {/* <Element name="author" className="min-h-screen">
        test 5
      </Element> */}
      <Contact />
      <Footer />
      <ScrollToTopButton />
    </>
  );
};
export default page;
