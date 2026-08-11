import React from "react";

/**
 * Reusable skill category card with gradient header and tag list.
 */
export default function SkillCategory({ title, color, borderColor, items }) {
  return (
    <div
      className={`glass-card rounded-2xl p-5 ${borderColor}`}
    >
      <h3
        className={`mb-3 bg-gradient-to-r ${color} bg-clip-text text-lg font-bold text-transparent`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((item) => (
          <span key={item} className="skill-tag">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
