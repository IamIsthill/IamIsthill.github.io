import React, { useEffect, useState } from "react";
import "./styles/reset.css";
import "boxicons";

export const App = () => {
  const [activeSection, setActiveSection] = useState("");
  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    });
    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);
  return (
    <>
      <header className="header">
        <div>
          <h1 className="big-heading">Charles Bercasio</h1>
          <p className="small-heading">Aspiring Full Stack Developer</p>
          <p>I build things for the internet.</p>
        </div>
        <nav>
          <button>
            <a
              href="#about"
              className={activeSection == "about" ? "active" : ""}
            >
              <span></span>About
            </a>
          </button>
          <button>
            <a
              href="#projects"
              className={activeSection == "about" ? "active" : ""}
            >
              Projects
            </a>
          </button>
          <button>
            <a
              href="#experience"
              className={activeSection == "experience" ? "active" : ""}
            >
              Experience
            </a>
          </button>
        </nav>
      </header>
      <main>
        <About />
        <Projects />
        <Experience />
      </main>
    </>
  );
};

const Nav = () => {
  const navigations = ["Projects", "Contact"];

  const onClickMakeActive = (e: React.BaseSyntheticEvent, linkName: string) => {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach((link: Element) => {
      link.classList.remove("active");
    });

    e.currentTarget.classList.add("active");

    const findPage = document.getElementById(linkName);

    findPage?.focus();
  };

  return (
    <>
      <nav className="navbar">
        {navigations.map((nav: string) => (
          <button>
            <a
              className={
                nav.toLowerCase() === "home" ? "nav-link active" : "nav-link"
              }
              href={"#" + nav.toLowerCase()}
              onClick={(e: React.BaseSyntheticEvent) => {
                onClickMakeActive(e, nav.toLowerCase());
              }}
              key={nav}
            >
              {nav}
            </a>
          </button>
        ))}
      </nav>
    </>
  );
};

const About = () => {
  return (
    <section className="about" id="about">
      <article>
        <p>
          I am a passionate software developer with a strong foundation in
          backend development. I started as a backend developer during my
          capstone project in my 4th year, where I gained hands-on experience in
          building scalable systems.
        </p>
        <p>
          During my internship at A2K, I expanded my skill set by delving into
          frontend development, which led me to refine my expertise as a
          full-stack developer. Now, I continuously strive to build efficient,
          well-structured applications across the entire tech stack.
        </p>
        <p className="highlight">
          <strong>Backend:</strong> Django, Python, Node.js, Express.js
          <br />
          <strong>Frontend:</strong> JavaScript, HTML, CSS
          <br />
          <strong>Database & Caching:</strong> MongoDB, PostgreSQL, Redis
          <br />
          <strong>DevOps & Cloud:</strong> Docker, AWS, Google Cloud Platform,
          Nginx
        </p>
        <p>
          I enjoy solving complex problems, optimizing performance, and learning
          new technologies to stay ahead in the ever-evolving world of software
          development.
        </p>
      </article>
    </section>
  );
};

import { Image1, Image2 } from "../shared/assets";
const Projects = () => {
  return (
    <section id="projects" className="projects">
      <article>
        <figure>
          <img src={Image1} alt="" width={200} height={100} />
        </figure>
        <div className="description">
          <h3>HealthHarmony</h3>
          <p>
            HealthHarmony is an information management system designed for the
            DHVSU Medical and Dental Services, replacing the previously
            paper-based system. It enables students, teachers, and staff to
            securely access their medical information. The system also
            streamlines clinic operations by allowing staff to efficiently
            manage patient records and inventory, improving organization and
            accessibility within the clinic.
          </p>
        </div>
      </article>
      <article>
        <figure>
          <img src={Image2} alt="" width={200} height={100} />
        </figure>
        <div className="description">
          <h3>Health Record Management System</h3>
          <p>
            A comprehensive record management system designed for a health
            clinic in Sta. Rita, Pampanga. This system enables administrators to
            efficiently manage patient data, generate and export records as
            PDFs, and streamline clinic operations. Additionally, the system
            provides analytics and insights, helping the health center monitor
            patient trends and improve overall healthcare services.
          </p>
        </div>
      </article>
    </section>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <article>
        <h6 className="date">February 2025 - Present</h6>
        <div className="details">
          <p className="title">Backend Developer Intern · A2K Group</p>
          <p>
            Contributing to the design and development of scalable RESTful APIs,
            optimizing backend processes, and collaborating with
            cross-functional teams to enhance system performance.
          </p>
        </div>
      </article>
    </section>
  );
};
