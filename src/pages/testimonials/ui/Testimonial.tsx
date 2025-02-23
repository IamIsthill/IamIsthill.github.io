import { Image2, Image3, Image4 } from "../../../shared/assets";
import "./Testimonials.css";

interface ITestimonail {
  image: string;
  name: string;
  data: string;
  stars: number;
}

const dataList: ITestimonail[] = [
  {
    name: "Marilyn",
    image: Image2,
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod ad doloribus dicta deserunt impedit dolores, laborum cupiditate corrupti, vero repudiandae. Corrupti nemo fugiat laudantium veritatis porro quasi, deleniti quos.",
    stars: 4,
  },
  {
    name: "Jaun",
    image: Image3,
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod ad doloribus dicta deserunt impedit dolores, laborum cupiditate corrupti, vero repudiandae. Corrupti nemo fugiat laudantium veritatis porro quasi, deleniti quos.",
    stars: 4,
  },

  {
    name: "kakakaka",
    image: Image4,
    data: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, quod ad doloribus dicta deserunt impedit dolores, laborum cupiditate corrupti, vero repudiandae. Corrupti nemo fugiat laudantium veritatis porro quasi, deleniti quos.",
    stars: 4,
  },
];

const TestimonialCard = (props: ITestimonail) => {
  const result = [];

  let starCount = props.stars;

  while (starCount > 0) {
    result.push(<i className="bx bxs-star"></i>);
    starCount--;
  }

  return (
    <>
      <div className="testimonial-item">
        <img src={props.image} alt="" />
        <h2>{props.name}</h2>
        <div className="rating">{result.map((component) => component)}</div>
        <p>{props.data}</p>
      </div>
    </>
  );
};

export const Testimonial = () => {
  return (
    <>
      <section className="testimonials" id="testimonials">
        <div className="testimonials-box">
          <h2 className="heading">Testimonials</h2>
          <div className="wrapper">
            {dataList.map((data) => (
              <TestimonialCard
                data={data.data}
                name={data.name}
                image={data.image}
                stars={data.stars}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
