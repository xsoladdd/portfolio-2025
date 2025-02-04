import React from "react";
import { IconType } from "react-icons";

export interface ISkillItemProps {
  icon: IconType;
  title: string;
  subTitle: string;
}

const SkillItem: React.FC<ISkillItemProps> = ({
  icon: Icon,
  subTitle,
  title,
}) => {
  return (
    <>
      <div className="flex flex-col place-items-center gap-4 pt-6  pb-8 py-4  bg-darkGrey rounded-3xl ">
        <div className=" bg-primary/50 rounded-full p-4 max-h-[80px] max-w-[80px] flex place-content-center place-items-center ">
          <Icon className="h-[80px] w-[80px] text-gray-white" />
        </div>
        <div className="flex flex-col place-content-center pl-2 text-center gap-2">
          <p className="text-primary text-3xl  ">{title}</p>
          <p className="text-lightGrey text-lg font-extralight leading-snug px-8  w-full">
            {subTitle}
          </p>
        </div>
      </div>
    </>
  );
};
export default SkillItem;
