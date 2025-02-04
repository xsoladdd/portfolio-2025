"use client";

import React, { useState } from "react";
import logoSvg from "@/app/(homepage)/assets/logo.svg";
import { Link } from "react-scroll";

const routes = ["home", "skills", "services", "projects", "author", "contact"];

const Nav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between container mx-auto pt-8 px-4 md:px-0">
      <img src={logoSvg.src} alt="" className="max-h-[20px]  md:max-h-[35px]" />
      <ul className="hidden md:flex place-items-center ">
        {routes.map((route) => (
          <li key={route} className="mx-3  capitalize text-lg cursor-pointer">
            <Link
              // activeClass="text-secondary "
              className="test1"
              to={route}
              spy={true}
              smooth={true}
              duration={500}
            >
              {route}
            </Link>
          </li>
        ))}
      </ul>
      <div className="md:hidden flex items-center">
        <button
          className="text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-background shadow-md">
            {routes.map((route) => (
              <li
                key={route}
                className="px-4 py-2 border-b border-gray-200 font-semibold capitalize text-lg cursor-pointer"
              >
                <Link
                  className="block"
                  to={route}
                  spy={true}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsOpen(false)}
                >
                  {route}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};
export default Nav;
