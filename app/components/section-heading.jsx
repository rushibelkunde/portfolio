import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Reusable section heading with GSAP scroll animation.
 * DRY: used by Skills, Experience, Projects, Education, About sections.
 */
export default function SectionHeading({ children, id }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof window === "undefined") return;

    import("gsap/ScrollTrigger").then(({ ScrollTrigger }) => {
      gsap.registerPlugin(ScrollTrigger);
      gsap.fromTo(
        el,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      gsap.killTweensOf(el);
    };
  }, []);

  return (
    <div ref={ref} id={id} className="mb-12 opacity-0" style={{ scrollMarginTop: "5rem" }}>
      <div className="section-accent-bar" />
      <h2
        className="text-3xl sm:text-4xl font-bold tracking-tight"
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {children}
      </h2>
    </div>
  );
}
