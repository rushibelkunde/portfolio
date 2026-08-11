import React from "react";
import SectionHeading from "./section-heading";
import SkillCategory from "./skill-category";
import { skillCategories } from "../data/skills";

export default function Skills() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <SectionHeading id="skills">Technical Skills</SectionHeading>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
        {skillCategories.map((category) => (
          <SkillCategory key={category.title} {...category} />
        ))}
      </div>
    </section>
  );
}
