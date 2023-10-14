import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/Contact.css";

function Contact() {
  return (
    <section className="contact-wrap" id="Contact">
      <div className="content">
        <h1>
          Contact <span style={{ color: "#00ffff" }}>.</span>{" "}
        </h1>
        <p>
          Hey, send me an email if you want to connect! Additionally, you can
          find me on{" "}
          <a
            className="linked-in"
            href="https://www.linkedin.com/in/pranay-parikh-530331218/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn{" "}
          </a>
        </p>
        <a className="email" href="mailto:pranayparikh2004@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            style={{ color: "#00ffff", marginRight: "5px" }}
          />
          pranayparikh2004@gmail.com
        </a>
      </div>
    </section>
  );
}

export default Contact;
