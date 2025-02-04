import { joinClass } from "@/utils/joinClass";
import React from "react";

interface ITitleProps {
  children: React.ReactNode;
  sub?: string;
  className?: string;
}

const Title: React.FC<ITitleProps> = ({ children, className, sub }) => {
  return (
    <>
      <h1
        className={joinClass(`text-center  text-primary text-5xl `, className)}
      >
        {children}
      </h1>
      {sub && (
        <p className="text-center w-full text-lightGrey font-extralight italic">
          "{sub}"
        </p>
      )}
    </>
  );
};
export default Title;
