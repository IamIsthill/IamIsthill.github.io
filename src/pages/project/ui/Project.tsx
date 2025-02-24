import { Image1, Image2 } from "../../../shared/assets";
import "./Project.css";

export const Project = () => {
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
