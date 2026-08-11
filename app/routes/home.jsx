import React from "react";
import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Skills from "../components/skills";
import Experience from "../components/experience";
import Projects from "../components/projects";
import Education from "../components/education";
import About from "../components/about";
import Footer from "../components/footer";

export function meta() {
  return [
    { title: "Rushikesh Belkunde — Software Developer" },
    {
      name: "description",
      content:
        "Software Developer with 2.5+ years of experience in React, Node.js, Go, and AI/LLM integration.",
    },
  ];
}

export default function HomeRoute() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <About />
      <Footer />
    </>
  );
}
