import { Image1, Image2 } from "../../../shared/assets";
import { Ref } from "../../../shared/interface";
// import "./Project.css";

interface IProject {
  image: string;
  title: string;
  description: string;
  link: string;
}

const projectList: IProject[] = [
  {
    image: Image1,
    title: "HealthHarmony",
    description:
      "HealthHarmony is an information management system designed for the DHVSU Medical and Dental Services, replacing the previously paper-based system. It enables students, teachers, and staff to securely access their medical information. The system also streamlines clinic operations by allowing staff to efficiently manage patient records and inventory, improving organization and accessibility within the clinic.",
    link: "https://github.com/IamIsthill/healthharmony",
  },
  {
    image: Image2,
    title: "Health Record Management System",
    description:
      " A comprehensive record management system designed for a health clinic in Sta. Rita, Pampanga. This system enables administrators to efficiently manage patient data, generate and export records as PDFs, and streamline clinic operations. Additionally, the system provides analytics and insights, helping the health center monitor patient trends and improve overall healthcare services.",
    link: "https://github.com/IamIsthill/dila-dila",
  },
];

const ProjectCard = (props: IProject) => {
  const onClickRerouteToGithub = (link: string) => {
    window.open(link, "_blank");
  };
  return (
    <article
      onClick={() => onClickRerouteToGithub(props.link)}
      className="grid xl:grid-cols-[200px_1fr] gap-10 cursor-pointer  transition-all  p-4 rounded-sm group relative z-1"
    >
      <div className="absolute -inset-x-1 -inset-y-1 z-0 hidden rounded-sm transition motion-reduce:transition-none md:-inset-x-6 md:block md:group-hover:bg-slate-800/50 md:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] md:group-hover:drop-shadow-lg"></div>
      <figure className="pt-2 relative z-20 ">
        <img
          src={props.image}
          alt={props.title || "Project Image"}
          className="w-full h-auto object-contain md:group-hover:border-slate-600/50 border-2 border-transparent rounded-sm"
        />
      </figure>
      <div className="description relative z-20">
        <h3 className="text-lg font-bold group-hover:text-accent">
          {props.title}
        </h3>
        <p className="text-sm leading-6">{props.description}</p>
      </div>
    </article>
  );
};

export const Project = ({ ref }: Ref) => {
  return (
    <section id="projects" className="grid gap-10 py-20" ref={ref}>
      {projectList.map(({ title, description, image, link }) => (
        <ProjectCard
          title={title}
          description={description}
          image={image}
          link={link}
        />
      ))}
    </section>
  );
};
