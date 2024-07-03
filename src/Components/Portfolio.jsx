/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/code.png";
import image1 from "../images/webProject.jpg";

const imageAltText = "PORTFOLIO-BANNER";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "MyResume",
    description:
      "A dynamic and continually updated repository showcasing my professional journey, skills, and accomplishments. Designed to highlight expertise, experience, and career aspirations in a clear and concise format.",
    url: "https://github.com/kakkar2/MyResume",
  },
  {
    title: "Airline Reservation System",
    description:
      "A comprehensive software solution designed to streamline operations, enhance efficiency, and ensure seamless management of airline resources, bookings, and customer interactions.",
    url: "https://aeroscape.infinityfreeapp.com/",
  },
  {
    title: "Netflix clone",
    description:
      "A project replicating the popular streaming service's user interface and functionalities, showcasing skills in frontend development, API integration, and responsive design.",
    url: "#",
  },
  {
    title: "Anime Streaming Site",
    description:
      "A dedicated platform for streaming anime content, offering a user-friendly interface, curated selections, and seamless playback for anime enthusiasts.",
    url: "#",
  },
];

const Portfolio = () => {
  return (
    <section className="" id="portfolio" style={{background:`url(${image})`, color: "#ffff"}}>
      <div className="padding" style={{backdropFilter: "blur(0.3rem)", padding: "5rem 0"}}>
      <h2 style={{ textAlign: "center", fontWeight: "bold" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image1}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px", color: "#ffff" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default Portfolio;
