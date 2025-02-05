import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Title from "../Components/Title";
import bgSvg from "./bg.svg";
import { GrFacebookOption, GrInstagram } from "react-icons/gr";
import { FaLinkedinIn, FaViber, FaWhatsapp } from "react-icons/fa6";
import Footer from "../Footer";

const Contact: React.FC = () => {
  return (
    <PageWrapper
      name="contact"
      bgSrc={bgSvg.src}
      elementClassName="!min-h-[90vh]"
    >
      <Title
        className="pt-24"
        // sub="Highlighting innovation, problem-solving, and creativity in my work."
      >
        Get in touch
      </Title>
      <div className="mx-auto flex lg:flex-nowrap flex-wrap   justify-center  min-h-[50vh] pt-[5vh]">
        <div className="lg:w-2/3 bg-darkGrey rounded-lg overflow-hidden lg:mr-10 p-10 flex items-end justify-start relative ">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22247.907001821106!2d120.95965757786952!3d14.423781869525529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d21386171d05%3A0xf7d5f7f358ed6d9d!2sBacoor%20City%20Hall!5e0!3m2!1sen!2sph!4v1738735105099!5m2!1sen!2sph"
            width="100%"
            height="100%"
            className="absolute inset-0 filter grayscale contrast-125  opacity-70"
            loading="lazy"
          ></iframe>
          <div className="bg-darkGrey relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1">Molino VII, City of Bacoor, Cavite</p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a
                className="text-blue-500 leading-relaxed"
                href="mailto: eofuntanar@email.com"
              >
                eofuntanar@email.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE / VIBER
              </h2>
              <p className="leading-relaxed">+63 977 628 1917</p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2  bg-darkGrey flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg ">
          <div className="text-center lg:text-left">
            <h2 className="text-primary text-center text-3xl mb-4 font-medium title-font">
              {`Let's get in touch!`}
            </h2>
            <p className="leading-relaxed text-lightGrey text-center font-extralight">
              Send me an email by clicking this link{" "}
              <a
                className="text-blue-500 leading-relaxed block font-normal"
                href="mailto: eofuntanar@email.com"
              >
                eofuntanar@email.com
              </a>
            </p>
          </div>

          <div className="py-4">
            <p className="text-base text-lightGrey  text-center  ">
              <span className="bg-darkGrey w-[50px] h-[10px]"> or</span>
            </p>
            <hr className="border-lightGrey/20 -mt-2.5 z-10 max-w-[200px] mx-auto" />
          </div>
          <div className="">
            <p className="leading-relaxed mb-2 text-lightGrey text-center font-extralight">
              reaching me through this platforms
            </p>
            <div className="flex place-content-center place-items-center">
              <span className="flex gap-1">
                <a
                  className="ml-3 text-lightGrey"
                  href="https://www.linkedin.com/in/eof-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="0"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="none"
                      d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                    ></path>
                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                  </svg>
                </a>
                <a
                  className="ml-3 text-lightGrey"
                  href="https://www.instagram.com/eofuntanar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                  >
                    <rect
                      width="20"
                      height="20"
                      x="2"
                      y="2"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                  </svg>
                </a>

                <a
                  className="ml-3 text-lightGrey"
                  href="viber://chat?number=09776281917"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaViber className="w-5 h-5" />
                </a>
                <a
                  className="ml-3 text-lightGrey"
                  href="https://wa.me/09776281917"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp className="w-5 h-5" />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
export default Contact;
