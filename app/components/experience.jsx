import React from "react";
import SectionHeading from "./section-heading";
import ExperienceCard from "./experience-card";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-5 py-24">
      <SectionHeading id="experience">Experience</SectionHeading>

      <div className="stagger-children">
        {experiences.map((exp) => (
          <ExperienceCard key={exp.title} {...exp} />
        ))}
      </div>
    </section>
  );
}
