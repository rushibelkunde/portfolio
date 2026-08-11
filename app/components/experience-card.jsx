import React from "react";

/**
 * Reusable experience card for a single job entry.
 * Handles both project-based and flat highlight formats.
 */
export default function ExperienceCard({
  title,
  company,
  period,
  tech,
  projects,
  highlights,
}) {
  return (
    <div className="glass-card rounded-2xl p-6 mb-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-center">
        <h3
          className="text-xl font-bold text-zinc-100"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          {title}
        </h3>
        <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-semibold text-indigo-400 border border-indigo-500/20 whitespace-nowrap">
          {period}
        </span>
      </div>

      <p className="mt-1 text-sm font-medium text-zinc-400">{company}</p>

      {/* Tech stack */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {tech.split(", ").map((t) => (
          <span key={t} className="skill-tag text-xs">
            {t}
          </span>
        ))}
      </div>

      {/* Project blocks */}
      {projects?.map((project) => (
        <div key={project.name} className="mt-5">
          <h4 className="mb-2 text-base font-semibold text-indigo-300">
            ▸ {project.name}
          </h4>
          <ul className="space-y-1.5 text-sm leading-relaxed text-zinc-400">
            {project.highlights.map((h, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/60" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Flat highlights (for trainee role) */}
      {highlights && highlights.length > 0 && (
        <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-zinc-400">
          {highlights.map((h, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-indigo-500/60" />
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
