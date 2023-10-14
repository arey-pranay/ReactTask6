import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-scroll";
import "./CSS Files/Navbar.css";
import Typewriter from "typewriter-effect/dist/core";

function Navbar() {
  const typewriterRef = useRef(null);

  useEffect(() => {
    const typewriter = new Typewriter(typewriterRef.current, {
      strings: [
        "I am a CSE student",
        "I love web development",
        "I like working out",
        "Go down to know more!",
      ],
      autoStart: true,
      loop: true,
      typeSpeed: 30,
      deleteSpeed: 50,
    });

    typewriterRef.current.style.display = "flex";
    typewriterRef.current.style.flexWrap = "wrap";

    return () => {
      typewriter.stop();
    };
  }, []);

  return (
    <nav id="navbar">
      <a
        href="https://www.linkedin.com/in/pranay-parikh-530331218/"
        target="_blank"
        className="icons"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
      <a
        href="https://github.com/arey-pranay"
        target="_blank"
        className="icons"
        rel="noreferrer"
      >
        <FontAwesomeIcon icon={faGithub} size="2x" />
      </a>

      <ul className="nav-links">
        <div className="name-box">
          <li className="Name">
            P <span className="period">.</span>
          </li>
        </div>
        <Link to="About" smooth={true} duration={500}>
          <li>About</li>
        </Link>
        <Link to="Projects" smooth={true} duration={500}>
          <li>Projects</li>
        </Link>
        <Link to="Contact" smooth={true} duration={500}>
          <li>Contact</li>
        </Link>
      </ul>
      <div className="Introduction">
        <h1>Heyyy, I&apos;m Pranay</h1>
        <h2>
          <span ref={typewriterRef}></span>
        </h2>
        <p>
          As a Full Stack Developer right now, I&apos;m looking for several
          opportunities to develop my abilities through project development and
          issue solutions. Please scroll down to find out more about me.
        </p>
        <Link to="Contact" smooth={true} duration={900}>
          <button>Contact Me</button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
