import React from "react";
import PageWrapper from "../Components/PageWrapper";
import Title from "../Components/Title";
import { services } from "./res";
import bg from "./s3-bg.svg";
import SerivceItem from "./SerivceItem";
import SerivceItem2 from "./SerivceItem2";

const Services: React.FC = () => {
  return (
    <PageWrapper bgSrc={bg.src} name="services">
      <Title className="pt-24" sub="What I can do for you">
        Services
      </Title>
      <div className=" px-5 py-24 mx-auto -m-4 grid grid-cols-1 lg:grid-cols-3">
        {services.map((service, index) => (
          <SerivceItem2
            key={index}
            desc={service.desc}
            title={service.title}
            image={service.image?.src}
            // icon={ || ""}
          />
        ))}
      </div>
      {/* <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
        {services.map((service, index) => (
          <SerivceItem
            key={index}
            desc={service.desc}
            title={service.title}
            image={service.image?.src}
            // icon={ || ""}
          />
        ))}
        </div>
      </div> */}
    </PageWrapper>
  );
};
export default Services;
