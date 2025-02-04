import { FaReact } from "react-icons/fa6";
import { ISkillItemProps } from "./SkillItem";
import {
  SiGraphql,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skills: ISkillItemProps[] = [
  {
    icon: SiReact,
    title: "React JS",
    subTitle:
      "React is a JavaScript library for building fast and interactive user interfaces. Developed by Facebook, it uses a component-based architecture and a virtual DOM to efficiently update and render UI elements.  ",
  },
  {
    icon: SiTypescript,
    title: "Typescript",
    subTitle:
      "TypeScript is a strongly typed superset of JavaScript that adds static typing and advanced features to improve code quality and maintainability. Developed by Microsoft, it compiles to plain JavaScript and enhances development with better tooling, error detection, and modern ES6+ features.",
  },
  {
    icon: SiNodedotjs,
    title: "NodeJS",
    subTitle:
      "Node.js is a runtime environment that allows JavaScript to run on the server side. Built on Chrome's V8 engine, it enables non-blocking, event-driven programming, making it ideal for scalable and high-performance applications. ",
  },
  {
    icon: SiGraphql,
    title: "GraphQL",
    subTitle:
      "GraphQL is a query language for APIs that enables clients to request only the data they need. Developed by Facebook, it provides a flexible and efficient alternative to REST by allowing clients to fetch, modify, and subscribe to data in a structured manner.",
  },
  {
    icon: SiTailwindcss,
    title: "TailwindCSS",
    subTitle:
      "Tailwind CSS is a utility-first CSS framework that enables rapid UI development with pre-defined, composable classes. It allows developers to style elements directly in HTML without writing custom CSS, promoting consistency and maintainability.  ",
  },
  {
    icon: SiNextdotjs,
    title: "NextJS",
    subTitle:
      "Next.js is a React framework for building fast and scalable web applications. It supports server-side rendering (SSR), static site generation (SSG), and API routes, making it ideal for SEO-friendly and high-performance applications. ",
  },
];
