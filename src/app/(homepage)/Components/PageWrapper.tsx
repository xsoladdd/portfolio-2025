import { joinClass } from "@/utils/joinClass";
import React from "react";
import { Element } from "react-scroll";

interface IPageWrapperProps {
  children: React.ReactNode;
  bgSrc?: string;
  name?: string;
  className?: string;
  elementClassName?: string;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({
  children,
  bgSrc,
  name,
  className,
  elementClassName,
}) => {
  return (
    <>
      <Element
        name={name || ""}
        id={name}
        className={joinClass("min-h-screen relative", elementClassName)}
      >
        <div className={joinClass(`container mx-auto`, className)}>
          {children}
        </div>
        {bgSrc && (
          <div className="absolute inset-0 -z-10 ">
            <img
              src={bgSrc}
              alt=""
              className="w-full h-full object-cover animate-in fade-in slide-in-from-top-10 duration-700 "
            />
          </div>
        )}
      </Element>
    </>
  );
};
export default PageWrapper;
