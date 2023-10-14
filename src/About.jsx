import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFaceSmileWink,
  faFaceSmileBeam,
} from "@fortawesome/free-regular-svg-icons";
import "./CSS Files/about.css";

function About() {
  const languages = [
    "Github/Git",
    "AWS",
    "Tailwind",
    "Bootstrap CSS",
    "C++",
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "React",
    "NodeJS",
    "MongoDB",
    "Java",
    "JQuery",
    "SQL",
    "C",
    "Python",
  ];

  const learning = [
    "Next",
    "Android / IOS Development",
    "ThreeJS",
    "Framer Motion",
    "Motion One",
  ];

  return (
    <section className="about-section" id="About">
      <h1 className="about-title">
        About<span style={{ color: "#00ffff" }}>.</span>
      </h1>
      <div className="section-divider"></div>
      <div className="content-wrapper">
        <div className="about-text">
          <p>
            Hey! I&apos;m a full stack web developer with a versatile skill set,
            specializing primarily in frontend development. I possess a deep
            understanding of both back-end development also and am constantly
            refining my abilities while seeking opportunities for growth in both
            domains.
          </p>
          <br />
          <p>
            I&apos;d be happy to connect with you and talk about prospective
            partnerships if you&apos;re interested. I&apos;m now engaged in a
            number of projects that have an emphasis on particular tech stacks
            and frameworks, enabling me to increase the depth of my knowledge.
          </p>
          <br />
          <p>
            In my personal life, I like working out, watching television, making
            UI/UX ideas, and collecting different figurines.{" "}
          </p>
          <br />
        </div>
        <div className="right-section">
          <div className="tools">
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileWink}
                style={{ color: "#00ffff" }}
              />{" "}
              Languages/Frameworks
            </h1>
            {languages.map((language, index) => (
              <span key={index}>{language}</span>
            ))}
            <br />
            <h1>
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                style={{ color: "#00ffff" }}
              />{" "}
              Learning
            </h1>
            {learning.map((item, index) => (
              <span key={index}>{item}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
