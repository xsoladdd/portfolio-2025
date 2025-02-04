import { joinClass } from "@/utils/joinClass";
import React from "react";
import { Element } from "react-scroll";

interface IPageWrapperProps {
  children: React.ReactNode;
  bgSrc?: string;
  name?: string;
  className?: string;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({
  children,
  bgSrc,
  name,
  className,
}) => {
  return (
    <>
      <Element name={name || ""} id={name} className="min-h-screen relative">
        <div className={joinClass(`container mx-auto`, className)}>
          {children}
        </div>
        {bgSrc && (
          <div className="absolute inset-0 -z-10">
            <img src={bgSrc} alt="" className="w-full h-full object-cover" />
          </div>
        )}
      </Element>
    </>
  );
};
export default PageWrapper;
