import { BaseSyntheticEvent } from "react";
// import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Header = () => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };
  const onClickMakeActive = (e: BaseSyntheticEvent) => {
    const links = document.querySelectorAll(".nav-link");

    if (links) {
      links.forEach((link) => {
        link.parentElement?.classList.remove("active");
      });
    }

    e.currentTarget.parentElement.classList.add("active");
  };

  return (
    <header className="h-dvh">
      <div>
        <h1 className="big-heading">Charles Bercasio</h1>
        <p className="small-heading">Aspiring Full Stack Developer</p>
        <p>I build things for the internet.</p>
      </div>
      <nav>
        <button>
          <a href="#about" className="nav-link" onClick={onClickMakeActive}>
            About
          </a>
        </button>
        <button>
          <a href="#projects" className="nav-link" onClick={onClickMakeActive}>
            Projects
          </a>
        </button>
        <button>
          <a
            href="#experience"
            className="nav-link"
            onClick={onClickMakeActive}
          >
            Experience
          </a>
        </button>
      </nav>
      <div className="socials">
        <button onClick={() => goToLink("https://github.com/IamIsthill")}>
          <FaGithub />
        </button>
        <button>
          <FaLinkedin
            onClick={() =>
              goToLink("https://www.linkedin.com/in/charles-bercasio-a6b00a347")
            }
          />
        </button>
      </div>
    </header>
  );
};
