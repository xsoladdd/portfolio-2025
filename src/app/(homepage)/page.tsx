"use client";

import React from "react";
import { Element } from "react-scroll";
import Hero from "./Hero";
import Skills from "./Skills";

const page: React.FC = () => {
  return (
    <>
      <Hero />
      <Skills />
      <Element name="services" className="min-h-screen">
        test 3
      </Element>

      <Element name="projects" className="min-h-screen">
        test 4
      </Element>

      <Element name="author" className="min-h-screen">
        test 5
      </Element>
    </>
  );
};
export default page;
