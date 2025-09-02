// import "./styles/Global.css";
import "./styles/style.css";
import { About } from "../pages/about";
import { Project } from "../pages/project";
import { Experience } from "../pages/experience";
import { Header } from "../pages/header";
import { useRef, useState } from "react";
import { useInView } from "react-intersection-observer";

export const App = () => {
  const mainRef = useRef<HTMLElement>(null);
  const [visibleSection, setVisibleSection] = useState<string | null>(null);

  const { ref: about } = useInView({
    threshold: 0.5,
    onChange: (inView) => inView && setVisibleSection("about"),
  });
  const { ref: project } = useInView({
    threshold: 0.5,
    onChange: (inView) => inView && setVisibleSection("projects"),
  });
  const { ref: experience } = useInView({
    threshold: 0.5,
    onChange: (inView) => inView && setVisibleSection("experience"),
  });

  return (
    <div className="bg-main-bg text-slate-400 grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] gap-10 md:gap-20 lg:gap-30 scroll-smooth">
      <div className="relative">
        <Header visibleSection={visibleSection} />
      </div>
      <main
        className="flex flex-col gap-20 scroll-smooth pb-30 md:py-30 px-10 text-md leading-8"
        ref={mainRef}
      >
        <About ref={about} />
        <Project ref={project} />
        <Experience ref={experience} />
      </main>
    </div>
  );
};
