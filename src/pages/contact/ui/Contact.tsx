import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="heading">
          Contact <span>Me</span>
        </h2>
        <form action="">
          <div className="input-group">
            <div className="input-box">
              <input type="text" placeholder="Full Name" />
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-box">
              <input type="number" placeholder="Phone Number" />
              <input type="text" placeholder="Subject" />
            </div>
          </div>
          <div className="input-group-2">
            <textarea
              name=""
              id=""
              cols={30}
              rows={10}
              placeholder="Your message here..."
            ></textarea>
            <input type="submit" value="Send Message" className="btn" />
          </div>
        </form>
      </section>
    </>
  );
};
