import React, { useState, useCallback } from "react";

const NAV_LINKS = [
  { label: "Home", target: "home" },
  { label: "Skills", target: "skills" },
  { label: "Experience", target: "experience" },
  { label: "Projects", target: "projects" },
  { label: "Education", target: "education" },
  { label: "Contact", target: "contact" },
];

function NavLink({ label, target, onClick }) {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      if (onClick) onClick();
    },
    [target, onClick]
  );

  return (
    <a
      href={`#${target}`}
      onClick={handleClick}
      className="relative text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-indigo-500 after:to-violet-500 after:transition-all after:duration-300 hover:after:w-full"
    >
      {label}
    </a>
  );
}

function MobileNavLink({ label, target, onClose }) {
  const handleClick = useCallback(
    (e) => {
      e.preventDefault();
      const el = document.getElementById(target);
      if (el) el.scrollIntoView({ behavior: "smooth" });
      onClose();
    },
    [target, onClose]
  );

  return (
    <a
      href={`#${target}`}
      onClick={handleClick}
      className="rounded-lg px-4 py-3 text-sm font-medium text-zinc-400 transition-all duration-200 hover:bg-white/5 hover:text-white"
    >
      {label}
    </a>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const close = useCallback(() => setIsOpen(false), []);

  const handleLogoClick = useCallback((e) => {
    e.preventDefault();
    const el = document.getElementById("home");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#09090b]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        {/* Logo */}
        <a
          href="#home"
          onClick={handleLogoClick}
          className="gradient-text text-2xl font-bold tracking-tight"
          style={{ fontFamily: "var(--font-heading)" }}
        >
          RB.
        </a>

        {/* Desktop links */}
        <div className="hidden gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <NavLink key={link.target} {...link} />
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-all duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-all duration-300 ${isOpen ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-zinc-300 transition-all duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden border-t border-white/5 bg-[#09090b]/95 backdrop-blur-xl transition-all duration-500 md:hidden ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="flex flex-col gap-1 px-5 py-4">
          {NAV_LINKS.map((link) => (
            <MobileNavLink key={link.target} {...link} onClose={close} />
          ))}
        </div>
      </div>
    </nav>
  );
}
