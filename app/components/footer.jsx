import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 py-8 text-center">
      <p className="text-sm text-zinc-600">
        © {new Date().getFullYear()} Rushikesh Belkunde. Built with{" "}
        <span className="text-zinc-400">React Router v7</span> &{" "}
        <span className="text-zinc-400">Tailwind CSS</span>.
      </p>
    </footer>
  );
}
