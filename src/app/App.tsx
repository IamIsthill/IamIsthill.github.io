// import "./styles/Global.css";
import "./styles/style.css";
import { About } from "../pages/about";
import { Project } from "../pages/project";
import { Experience } from "../pages/experience";
import { Header } from "../pages/header";
import { useRef, useEffect, useState } from "react";

export const App = () => {
  const ref = {
    about: useRef<HTMLElement>(null),
    project: useRef<HTMLElement>(null),
    experience: useRef<HTMLElement>(null),
  };
  const observer = useRef<IntersectionObserver>(null);
  const mainRef = useRef<HTMLElement>(null);
  const [visibleSection, setVisibleSection] = useState<String | null>(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Consider visible when at least 10% is in view
            if (entry.intersectionRatio > 0.1) {
              setVisibleSection(entry.target.id);
            }
          } else {
            // If it was the visible section and now less than 10% is visible
            if (
              visibleSection === entry.target.id &&
              entry.intersectionRatio < 0.1
            ) {
              setVisibleSection(null); // Or logic to find the next visible
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: [0, 0.1],
      }
    );
    Object.values(ref).forEach((key) => {
      if (!key.current) return;
      observer.current?.observe(key.current);
    });
    console.log(observer);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-main-bg text-slate-400 grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] max-w-dvw gap-10 md:gap-20 lg:gap-30 scroll-smooth md:px-5 lg:px-6">
      <Header visibleSection={visibleSection} />
      <main
        className="md:overflow-y-auto flex flex-col gap-20 md:h-dvh w-full scroll-smooth pb-30 md:py-30 px-10 text-md leading-8"
        ref={mainRef}
      >
        <About ref={ref.about} />
        <Project ref={ref.project} />
        <Experience ref={ref.experience} />
      </main>
    </div>
  );
};
