import Image, { StaticImageData } from "next/image";
import React from "react";
import { serviceProps } from "./res";

const SerivceItem: React.FC<serviceProps> = ({ title, desc, image }) => {
  return (
    <>
      <div className="p-4 md:w-1/3 flex">
        {/* <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-primary text-primary mb-4 flex-shrink-0"></div> */}
        <div className="flex-grow pl-6">
          <div className="w-full m-auto p-3 flex align-middle justify-center  scale-85  py-12 min-h-[280px]  ">
            <Image src={image} width={200} height={200} alt={title} />
          </div>
          <h2 className="text-2xl title-font font-medium mb-2 text-primary">
            {title}
          </h2>
          <p className="  text-base leading-snug">{desc}</p>
        </div>
      </div>

      {/* <div className="p-4    ">
        <div className="h-full border-2 border-lightGrey border-opacity-60 rounded-lg overflow-hidden bg-darkGrey/40 ">
          <div className="w-full m-auto p-3 flex align-middle justify-center  scale-85  py-12 min-h-[280px] bg-darkGrey/90 ">
            <Image src={image} width={200} height={200} alt={title} />
          </div>
          <div className="p-6 pt-4 h-full">
            <h1 className=" text-3xl font-medium text-primary mb-3 text-center">
              {title}
            </h1>
            <p className="leading-snug mb-3 text-center text-lg text-lightGrey font-extralight">
              {desc} 
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};
export default SerivceItem;
