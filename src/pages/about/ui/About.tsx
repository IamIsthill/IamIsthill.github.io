import "./About.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <article>
        <p>
          I am a passionate software developer with a strong foundation in
          backend development. I started as a backend developer during my
          capstone project in my 4th year, where I gained hands-on experience in
          building scalable systems.
        </p>
        <p>
          During my internship at A2K, I expanded my skill set by delving into
          frontend development, which led me to refine my expertise as a
          full-stack developer. Now, I continuously strive to build efficient,
          well-structured applications across the entire tech stack.
        </p>
        <p className="highlight">
          <strong>Backend:</strong> Django, Python, Node.js, Express.js
          <br />
          <strong>Frontend:</strong> JavaScript, HTML, CSS
          <br />
          <strong>Database & Caching:</strong> MongoDB, PostgreSQL, Redis
          <br />
          <strong>DevOps & Cloud:</strong> Docker, AWS, Google Cloud Platform,
          Nginx
        </p>
        <p>
          I enjoy solving complex problems, optimizing performance, and learning
          new technologies to stay ahead in the ever-evolving world of software
          development.
        </p>
      </article>
    </section>
  );
};
