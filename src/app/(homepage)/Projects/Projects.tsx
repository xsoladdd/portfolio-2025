import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Title from "../Components/Title";
import bg from "./s4-bg.svg";

const Projects: React.FC = () => {
  return (
    <PageWrapper bgSrc={bg.src} name="projects">
      <Title
        className="pt-24"
        sub="Highlighting innovation, problem-solving, and creativity in my work."
      >
        Projects
      </Title>
      <div className=" px-5 py-24 mx-auto -m-4 grid grid-cols-1 lg:grid-cols-3">
        {/* {services.map((service, index) => (
      <SerivceItem
        key={index}
        desc={service.desc}
        title={service.title}
        image={service.image?.src}
        // icon={ || ""}
      />
    ))} */}
      </div>
    </PageWrapper>
  );
};
export default Projects;
