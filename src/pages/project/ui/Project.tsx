import { Image1, Image2 } from "../../../shared/assets";
import "./Project.css";

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
    <article onClick={() => onClickRerouteToGithub(props.link)}>
      <figure>
        <img src={props.image} alt="" width={200} height={100} />
      </figure>
      <div className="description">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </article>
  );
};

export const Project = () => {
  return (
    <section id="projects" className="projects">
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
