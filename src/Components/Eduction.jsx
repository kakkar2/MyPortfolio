/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/wave_background.png";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Competent Web Developer with years of experience working with tech startups and freelance. Creative and people-oriented. Well-versed in numerous programming languages including HTML5, PHP, React JS, JavaScript, CSS, and MySQL.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
// const skillsList = [
//   "HTML & CSS",
//   "Javascript",
//   "React Js",
//   "User experience",
//   "Mobile user interfaces",
//   "Graphic design",
// ];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about solving problems in new creative ways to drive innovation. By leveraging my UI/UX experience I continually look for new and better ways to make tech accessible by all.";

const Eduction = () => {
  return (
    <section className="padding" id="eduction">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>Eduction</h2>
        <div className="large">
          <h2 style={{fontWeight: "bold"}}>Lovely Professional University, Phagwara, India</h2>
          <p>B.Tech in computer science & engineering</p>
          <p style={{fontWeight: "bold"}}>Grades: 7.29 out of 10</p>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default Eduction;
