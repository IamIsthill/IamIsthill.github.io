// import "./styles/Global.css";
import "./styles/style.css";
import { About } from "../pages/about";
import { Project } from "../pages/project";
import { Experience } from "../pages/experience";
import { Header } from "../pages/header";

export const App = () => {
  return (
    <div className="bg-main-bg text-text grid grid-cols-1 md:grid-cols-[300px_1fr] lg:grid-cols-[400px_1fr] w-dvw px-4">
      <Header />
      <main className="overflow-y-auto flex flex-col gap-2 h-dvh w-full">
        <About />
        <Project />
        <Experience />
      </main>
    </div>
  );
};
