import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Socials = () => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <div className="flex gap-4 text-4xl mt-20">
      <button
        onClick={() => goToLink("https://github.com/IamIsthill")}
        className="cursor-pointer hover:-translate-y-2 hover:scale-110 ease-in transition-all hover:text-accent"
        title="Visit Github Account"
      >
        <FaGithub />
      </button>
      <button>
        <FaLinkedin
          onClick={() =>
            goToLink("https://www.linkedin.com/in/charles-bercasio-a6b00a347")
          }
          className="cursor-pointer hover:-translate-y-2 hover:scale-110 ease-in transition-all hover:text-accent"
          title="Visit LinkedIn Profile"
        />
      </button>
    </div>
  );
};
