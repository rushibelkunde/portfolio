import React from "react";

/**
 * Reusable project card for side projects with images.
 */
export default function ProjectCard({ name, src, live, git, tech }) {
  return (
    <div className="glass-card group rounded-2xl overflow-hidden flex flex-col">
      {/* Image */}
      {src && (
        <div className="project-image-wrapper">
          <img
            src={src}
            alt={name}
            className="aspect-video w-full object-cover"
            loading="lazy"
          />
        </div>
      )}

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        <h3
          className="mb-2 text-lg font-bold text-zinc-100"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {name}
        </h3>

        {/* Tech tags */}
        <div className="mb-4 flex flex-wrap gap-1.5">
          {tech.map((t) => (
            <span key={t} className="skill-tag text-xs">
              {t}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="mt-auto flex gap-3">
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-indigo-600/15 px-4 py-2 text-xs font-semibold text-indigo-300 transition-all duration-300 hover:bg-indigo-600/25 border border-indigo-500/20"
            >
              <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live
            </a>
          )}
          {git && (
            <a
              href={git}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-800/50 px-4 py-2 text-xs font-semibold text-zinc-300 transition-all duration-300 hover:bg-zinc-700/50 border border-zinc-700/30"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
