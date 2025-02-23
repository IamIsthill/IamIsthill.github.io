import "./Education.css";

interface IData {
  date: string;
  content: string;
  title: string;
}

const educationData: IData[] = [
  {
    date: "2021",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, debitis omnis repellat velit delectus similique, nam, vitae veritatis officiis fugit quis sunt ad sapiente hic odio voluptates suscipit dolorem asperiores.",
    title: "University",
  },
  {
    date: "2022",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, debitis omnis repellat velit delectus similique, nam, vitae veritatis officiis fugit quis sunt ad sapiente hic odio voluptates suscipit dolorem asperiores.",
    title: "University",
  },
  {
    date: "2023",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, debitis omnis repellat velit delectus similique, nam, vitae veritatis officiis fugit quis sunt ad sapiente hic odio voluptates suscipit dolorem asperiores.",
    title: "University",
  },
  {
    date: "2024",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, debitis omnis repellat velit delectus similique, nam, vitae veritatis officiis fugit quis sunt ad sapiente hic odio voluptates suscipit dolorem asperiores.",
    title: "University",
  },
];

interface ITimelineCard {
  date: string;
  content: string;
  title: string;
}

const TimelineCard = ({ date, content, title }: ITimelineCard) => {
  return (
    <>
      <div className="timeline-item">
        <div className="timeline-dot"></div>
        <div className="timeline-date">{date}</div>
        <div className="timeline-content">
          <h3>{title}</h3>
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export const Education = () => {
  return (
    <>
      <section id="education" className="education">
        <h2 className="heading">Education</h2>
        <div className="timeline-items">
          {educationData.map((data) => (
            <TimelineCard
              date={data.date}
              content={data.content}
              title={data.title}
              key={data.date}
            />
          ))}
        </div>
      </section>
    </>
  );
};
