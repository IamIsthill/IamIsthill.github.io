import "./styles/Global.css";
import { About } from "../pages/about";
import { Project } from "../pages/project";
import { Experience } from "../pages/experience";
import { Header } from "../pages/header";

export const App = () => {
  return (
    <>
      <Header />
      <main>
        <About />
        <Project />
        <Experience />
      </main>
    </>
  );
};
