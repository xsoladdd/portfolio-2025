import Image, { StaticImageData } from "next/image";
import React from "react";
import { serviceProps } from "./res";

const SerivceItem2: React.FC<serviceProps> = ({ title, desc, image }) => {
  return (
    <>
      <div className="p-4  animateIn  ">
        <div className="h-full border-2 border-lightGrey border-opacity-60 rounded-lg overflow-hidden bg-darkGrey/50 ">
          <div className="w-full m-auto p-3 flex align-middle justify-center  scale-85  py-12 min-h-[280px]  ">
            <Image src={image} width={200} height={200} alt={title} />
          </div>
          <div className="p-6 pt-4 h-full">
            <h1 className=" text-3xl font-medium text-primary mb-3 text-center">
              {title}
            </h1>
            <p className="leading-snug mb-3 text-center text-lg text-lightGrey font-extralight px-6">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default SerivceItem2;
