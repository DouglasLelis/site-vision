import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const segmentHashes = [
  "solucoes",
  "portfolio",
  "servicos",
  "contact",
  "testimonials",
];

export function useSegmentHashScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const sectionId = hash.replace("#", "");
    if (!sectionId || !segmentHashes.includes(sectionId)) return;

    const element = document.getElementById(sectionId);
    if (element) {
      setTimeout(() => {
        element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [pathname, hash]);
}

export function useRevealOnScroll() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("reveal");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const timeout = setTimeout(() => {
      document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    }, 100);

    return () => {
      clearTimeout(timeout);
      observer.disconnect();
    };
  }, []);
}
