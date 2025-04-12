// import "./Experience.css";
import { Ref } from "../../../shared/interface";

export const Experience = ({ ref }: Ref) => {
  return (
    <section id="experience" className="experience" ref={ref}>
      <article>
        <h6 className="text-3xl font-light">February 2025 - Present</h6>
        <div className="mt-2 flex flex-col gap-2">
          <p className="text-sm font-semibold">
            Backend Developer Intern · A2K Group
          </p>
          <p className="text-md">
            Contributing to the design and development of scalable RESTful APIs,
            optimizing backend processes, and collaborating with
            cross-functional teams to enhance system performance.
          </p>
        </div>
      </article>
    </section>
  );
};
