import "./Header.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
export const Header = () => {
  return (
    <header className="header">
      <div>
        <h1 className="big-heading">Charles Bercasio</h1>
        <p className="small-heading">Aspiring Full Stack Developer</p>
        <p>I build things for the internet.</p>
      </div>
      <nav>
        <button>
          <a href="#about">
            <span></span>About
          </a>
        </button>
        <button>
          <a href="#projects">Projects</a>
        </button>
        <button>
          <a href="#experience">Experience</a>
        </button>
      </nav>
      <div className="socials">
        <button>
          <FaGithub />
        </button>
        <button>
          <FaLinkedin />
        </button>
      </div>
    </header>
  );
};
