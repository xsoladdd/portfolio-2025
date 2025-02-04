"use client";

import React from "react";
import { Element } from "react-scroll";
import Hero from "./Hero";
import Skills from "./Skills";
import Services from "./Services";
import Projects from "./Projects";

const page: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Services />
      <Projects />

      <Element name="author" className="min-h-screen">
        test 5
      </Element>
    </>
  );
};
export default page;
