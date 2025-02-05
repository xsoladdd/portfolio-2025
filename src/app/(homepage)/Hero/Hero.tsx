import React from "react";
import Nav from "./Nav";
import { Link, animateScroll as scroll } from "react-scroll";
import bg from "./s1-bg.svg";
import PageWrapper from "../Components/PageWrapper";
const Hero: React.FC = () => {
  return (
    <PageWrapper name="home" bgSrc={bg.src}>
      <Nav />
      <div className="flex container mx-auto ">
        <div className=" pt-[20vh] md:pt-96 text-center md:text-left w-full px-4 md:px-0">
          <p className="text-2xl md:text-4xl  animateIn">Hello, I am</p>
          <p className="text-3xl md:text-7xl text-primary font-semibold animateIn">
            Ericson Funtanar
          </p>
          <p className="text-xl md:text-2xl text-lightGrey max-w-[700px] pt-1 pb-4 animateIn ">
            A Software Engineer based on philippines
          </p>
          <div className="flex gap-6 flex-col max-w-[300px] md:flex-row  mx-auto md:mx-0 md:max-w-[500px]  ">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <button className="bg-primary text-black px-8 py-3 text-xl rounded-xl border border-transparent animateIn">
                Get in touch
              </button>
            </Link>
            <button className="  text-primary px-8 py-3 text-xl rounded-xl border border-primary   animateIn  ">
              Curicculum vitae
            </button>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Hero;
