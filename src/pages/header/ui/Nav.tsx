import React from "react";

export const Nav = ({ visibleSection }: { visibleSection: String | null }) => {
  const onClickMakeActive = (e: React.BaseSyntheticEvent) => {
    const links = document.querySelectorAll(".nav-link");

    if (links) {
      links.forEach((link) => {
        link.parentElement?.classList.remove("active");
      });
    }

    e.currentTarget.parentElement.classList.add("active");
  };
  const links = [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Experience",
      link: "#experience",
    },
  ];

  return (
    <nav className="md:flex flex-col justify-start align-middle md:gap-6 lg:gap-8 hidden">
      {links.map((link) => (
        <button
          className={`text-start hover:translate-x-5 transition-all cursor-pointer hover:text-accent ${
            link.title.toLocaleLowerCase() == visibleSection &&
            "translate-x-5 text-accent"
          }`}
        >
          <a href={link.link} onClick={onClickMakeActive}>
            {link.title}
          </a>
        </button>
      ))}
    </nav>
  );
};
