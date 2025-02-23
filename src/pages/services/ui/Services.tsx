import "./Services.css";

interface Service {
  name: string;
  details: string;
}

const serviceList: Service[] = [
  {
    name: "UI Design",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officiis rchitecto cupiditate nostrum quo accusamus asperiores ipsam placeat.",
  },
  {
    name: "UI Design",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officii.",
  },
  {
    name: "UI Design",
    details:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo officiis harum est minus cumque, aliquid illo labore nihil tempoArchitecto cupiditate nostrum quo accusamus asperiores ipsam placeat.",
  },
];

const ServiceBox = ({ name, details }: Service) => {
  return (
    <>
      <div className="service-box">
        <div className="service-info">
          <h4>{name}</h4>
          <p>{details}</p>
        </div>
      </div>
    </>
  );
};

export const Services = () => {
  return (
    <>
      <section className="services" id="services">
        <h2 className="heading">Services</h2>
        <div className="services-container">
          {serviceList.map((service: Service) => (
            <ServiceBox name={service.name} details={service.details} />
          ))}
        </div>
      </section>
    </>
  );
};
