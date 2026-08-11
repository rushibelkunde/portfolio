import React from "react";
import SectionHeading from "./section-heading";
import ProjectCard from "./project-card";
import { featuredProjects, moreProjects } from "../data/projects";

function FeaturedPersonalProject({ project }) {
  return (
    <div className="glass-card rounded-2xl p-6 mb-8 animate-pulse-glow">
      <div className="flex items-center gap-2 mb-3">
        <span className="inline-block rounded-full bg-violet-500/15 px-3 py-1 text-xs font-semibold text-violet-400 border border-violet-500/20">
          Featured — Personal Project
        </span>
      </div>

      <h3
        className="text-2xl font-bold gradient-text mb-3"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {project.name}
      </h3>

      <p className="text-sm leading-relaxed text-zinc-400 mb-4">
        {project.description}
      </p>

      {/* Tech tags */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span key={t} className="skill-tag text-xs">
            {t}
          </span>
        ))}
      </div>

      {/* Highlights */}
      <ul className="space-y-2 text-sm text-zinc-400">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-violet-500/60" />
            <span>{h}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MoreProjectRow({ project }) {
  return (
    <div className="glass-card flex items-center justify-between rounded-xl px-5 py-3">
      <span className="text-sm font-semibold text-zinc-200">
        {project.name}
      </span>
      <div className="flex items-center gap-4 text-xs font-medium">
        <a
          href={project.git}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 transition-colors duration-200 hover:text-green-400"
        >
          Github
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noreferrer"
          className="text-zinc-500 transition-colors duration-200 hover:text-rose-400"
        >
          Live
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const personalProject = featuredProjects.find((p) => p.type === "personal");
  const sideProjects = featuredProjects.filter((p) => p.type === "side");

  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 py-24">
      <SectionHeading id="projects">Projects</SectionHeading>

      {/* Featured personal project */}
      {personalProject && <FeaturedPersonalProject project={personalProject} />}

      {/* Side project grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 stagger-children">
        {sideProjects.map((project) => (
          <ProjectCard key={project.name} {...project} />
        ))}
      </div>

      {/* More projects */}
      {moreProjects.length > 0 && (
        <div className="mt-16">
          <h3
            className="mb-4 text-xl font-semibold text-zinc-300"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            More Projects
          </h3>
          <div className="space-y-2 stagger-children">
            {moreProjects.map((project) => (
              <MoreProjectRow key={project.name} project={project} />
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
