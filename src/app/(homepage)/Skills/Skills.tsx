import React from "react";
import { Element } from "react-scroll";
import bg from "./s2-bg.svg";
import PageWrapper from "../Components/PageWrapper";
import Title from "../Components/Title";
import { FaBook } from "react-icons/fa6";
import SkillItem from "./SkillItem";
import { skills } from "./res";

const Skills: React.FC = () => {
  return (
    <PageWrapper bgSrc={bg.src} name="skills">
      <Title className="pt-24" sub=" Here are some skills, but not limited to.">
        Skills
      </Title>
      {/* Test */}
      <div className=" pt-12 grid grid-cols-3 gap-x-8 gap-y-8">
        {skills.map((skill, index) => (
          <SkillItem
            key={index}
            icon={skill.icon}
            subTitle={skill.subTitle}
            title={skill.title}
          />
        ))}
      </div>
    </PageWrapper>
  );
};
export default Skills;
