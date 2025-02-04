import React from "react";
import Nav from "./Nav";
import { Element } from "react-scroll";
import bg from "./s1-bg.svg";
import PageWrapper from "../Components/PageWrapper";
const Hero: React.FC = () => {
  return (
    <PageWrapper name="home" bgSrc={bg.src}>
      <Nav />
      <div className="flex container mx-auto ">
        <div className=" pt-24 md:pt-96 text-center md:text-left w-full px-4 md:px-0">
          <p className="text-2xl md:text-4xl">Hello, I am</p>
          <p className="text-3xl md:text-7xl text-primary font-semibold">
            Ericson Funtanar
          </p>
          <p className="text-xl md:text-2xl text-lightGrey max-w-[700px] pt-1 pb-4">
            A Software Engineer based on philippines
          </p>
          <div className="flex gap-6 flex-col max-w-[300px] md:flex-row  mx-auto md:mx-0 md:max-w-[500px]">
            <button className="bg-primary text-black px-12 py-4 text-xl rounded-xl border border-transparent">
              Get in touch
            </button>
            <button className="  text-primary px-12 py-4 text-xl rounded-xl border border-primary">
              Curicculum vitae
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Hero;
