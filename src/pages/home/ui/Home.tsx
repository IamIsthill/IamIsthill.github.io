import { Image1 } from "../../../shared/assets";

export const Home = () => {
  return (
    <>
      <section id="home" className="home">
        <div className="home-content">
          <h1>
            Hi, It's <span>Charles</span>
          </h1>
          <h3 className="text-animation">
            I'm a <span></span>
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
            enim dicta laborum quae cum eaque dolorem neque quaerat reiciendis,
            ut quos sit voluptates corrupti quam saepe id sapiente provident
            reprehenderit! Possimus corporis rem minus in eum magnam unde natus
            quisquam, aliquid maiores nihil ipsum, doloribus, illo incidunt
            aliquam nobis. Cum.
          </p>
          <div className="social-icons">
            <a href="#">
              <i className="bx bxl-linkedin"></i>
            </a>
            <a href="#">
              <i className="bx bxl-github"></i>
            </a>
          </div>
          <div className="btn-group">
            <a href="#" className="btn">
              Hire
            </a>
            <a href="#contact" className="btn">
              Contact
            </a>
          </div>
        </div>
        <div className="home-img">
          <img src={Image1} alt="" />
        </div>
      </section>
    </>
  );
};
