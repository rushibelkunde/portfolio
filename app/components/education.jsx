import React from "react";
import SectionHeading from "./section-heading";
import { education } from "../data/experience";

export default function Education() {
  return (
    <section className="relative z-10 mx-auto max-w-4xl px-5 py-24">
      <SectionHeading id="education">Education</SectionHeading>

      <div className="space-y-4 stagger-children">
        {education.map((edu) => (
          <div key={edu.degree} className="glass-card rounded-2xl p-6">
            <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
              <h3
                className="text-lg font-bold text-zinc-100"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {edu.degree}
              </h3>
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
                {edu.period}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-zinc-400">
              {edu.institution}
            </p>
            <p className="mt-2 text-sm text-zinc-500">{edu.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
