import { Nav } from "./Nav";
import { Socials } from "./Socials";

export const Header = ({
  visibleSection,
}: {
  visibleSection: string | null;
}) => {
  return (
    <header className="sticky top-0 left-0 h-dvh flex flex-col md:justify-between px-10 whitespace-normal min-w-fit max-w-full py-30 gap-10 md:gap-20">
      <div className="flex flex-col gap-5 md:gap-3">
        <h1 className="text-7xl md:text-4xl lg:text-5xl md:whitespace-nowrap font-bold drop-shadow-2xl">
          Charles Bercasio
        </h1>
        <p className="text-2xl font-extralight">Full Stack Developer</p>
        <p className="text-md mt-10 md:mt-0">
          I build things for the internet.
        </p>
      </div>
      <Nav visibleSection={visibleSection} />
      <Socials />
    </header>
  );
};
