import marketing from "./marketing.svg";
import webapp from "./webapp.svg";
import website from "./website.svg";

export interface serviceProps {
  title: string;
  desc: string;
  image: any;
}
export const services: serviceProps[] = [
  {
    desc: "A comprehensive marketing website solution to boost your online presence and engage your audience effectively.",
    title: "Marketing Website",
    image: marketing,
  },
  {
    desc: "A custom web application tailored to your business needs, optimized for performance and scalability.",
    title: "Web Application",
    image: webapp,
  },
  {
    desc: "A professional website that showcases your brand, services, and portfolio to attract potential customers.",
    title: "Website",
    image: website,
  },
];
