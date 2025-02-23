import React from "react";
import "./styles/reset.css";
import "boxicons";
import { Home } from "../pages/home";
import { Education } from "../pages/education";
import { Services } from "../pages/services";
import { Testimonial } from "../pages/testimonials";
import { Contact } from "../pages/contact";
import { Footer } from "../pages/footer";

export const App = () => {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">
          Charles
          <span>Bercasio</span>
        </a>
        <i className="bx bx-menu menu-icon"></i>
        <Nav />
      </header>
      <Home />
      <Education />
      <Services />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

const Nav = () => {
  const navigations = ["Home", "Projects", "Education", "Services", "Contact"];

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
        ))}
      </nav>
    </>
  );
};
