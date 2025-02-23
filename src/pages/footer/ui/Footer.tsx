import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="social">
          <a href="#">
            <i className="bx bxl-linkedin"></i>
          </a>
          <a href="#">
            <i className="bx bxl-github"></i>
          </a>
        </div>
        <ul>
          <li>
            <a href="#">FAQ</a>
          </li>
          <li>
            <a href="#">Services</a>
          </li>
          <li>
            <a href="#">About Me</a>
          </li>
        </ul>
      </footer>
    </>
  );
};
