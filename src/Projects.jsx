import "./CSS Files/projects.css";

import medical from "./Images/medical.png";
import fault from "./Images/FaultFinder.png";
import calendar from "./Images/Calendar.png";
import discord from "./Images/DiscordBot.png";

function ProjectCard({ title, imageSrc, description }) {
  return (
    <div className="project">
      <a href="#" target="_blank" rel="noopener noreferrer">
        <img className="images" src={imageSrc} alt={title} />
      </a>
      <div className="project-info">
        <div className="project-title">
          <h2>{title}</h2>
          <div className="liness"></div>
        </div>

        <p>{description}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div id="Projects">
      <h1 className="title">
        My Projects <span style={{ color: "#00ffff" }}>.</span>{" "}
      </h1>
      <div className="projects-wrapper">
        <ProjectCard
          title="Sum-Rizzer"
          imageSrc={medical}
          description="The website is used to summarize long paragraphs by taking their links and using GPT and Ai to return a smmary"
        />

        <ProjectCard
          title="Stoic Stocks"
          imageSrc={fault}
          description="Get the live data from stock market right into this site wit numerous options to customize"
        />

        <ProjectCard
          title="MyCycle"
          imageSrc={calendar}
          description="www.mycycle.me - The official website for VIT pre-incubated amazing startup MyCycle, you can look at site for more information"
        />

        <ProjectCard
          title="Pranay Ki Picturey"
          imageSrc={discord}
          description="Get the data of all movies and web or tv series all over the world by searching"
        />
      </div>
    </div>
  );
}

export default Projects;
