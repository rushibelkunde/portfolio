import React, { useEffect, useState } from "react";

const FULL_NAME = "Rushikesh Belkunde";
const RESUME_URL =
  "https://drive.google.com/file/d/125q0ke2HaVcmf0g8ZNuBQiOZ3B8lsB6r/view?usp=sharing";

function useTypewriter(text, speed = 80) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (displayed.length >= text.length) {
      setDone(true);
      return;
    }
    const timer = setTimeout(() => {
      setDisplayed(text.slice(0, displayed.length + 1));
    }, speed);
    return () => clearTimeout(timer);
  }, [displayed, text, speed, done]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypewriter(FULL_NAME, 80);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center px-5 pt-16"
    >
      <div className="relative z-10 mx-auto max-w-3xl animate-fade-in-up">
        {/* Greeting */}
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-indigo-400">
          Namaste 🙏
        </p>

        {/* Name with typewriter */}
        <h1
          className="mb-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          <span className="text-zinc-100">I&apos;m </span>
          <span className="gradient-text">{displayed}</span>
          <span
            className={`ml-1 inline-block w-[3px] h-[1em] align-middle bg-indigo-400 ${done ? "animate-[typing-cursor_1s_ease-in-out_infinite]" : ""}`}
          />
        </h1>

        {/* Title */}
        <h2
          className="mb-5 text-xl font-semibold text-zinc-300 sm:text-2xl"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          Software Developer
        </h2>

        {/* Summary */}
        <p className="mb-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
          Results-driven Software Developer with{" "}
          <span className="text-zinc-200 font-medium">2.5+ years</span> of
          experience designing scalable web applications. Expertise in
          full-stack JavaScript/TypeScript, Go microservices, real-time
          systems, and AI/LLM integration.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap gap-4">
          <a
            href="mailto:rushibelkunde18@gmail.com"
            className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-indigo-500 hover:shadow-lg hover:shadow-indigo-500/25"
          >
            <span className="relative z-10">Contact Me</span>
            <svg
              className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>

          <a
            href={RESUME_URL}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-6 py-3 text-sm font-semibold text-zinc-300 transition-all duration-300 hover:border-indigo-500/50 hover:bg-white/5 hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
              />
            </svg>
            View Resume
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="flex flex-col items-center gap-2 text-zinc-500">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
