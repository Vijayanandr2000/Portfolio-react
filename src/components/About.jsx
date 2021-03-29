import React from "react";
import Pic from "./pic1.jpeg";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";
import resume from "../components/resume/Vijayanand R.pdf";

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row row-abv">
          <div className="col-md-8 ">
            <div className="card-body col">
              <h1 className="center">
                About Me
                <a href={resume} target="_blank" rel="noreferrer">
                  Download Resume
                </a>
              </h1>

              <h3>
                I like to learn new Technologies and I'm good in Problem solving
              </h3>
              <h3>
                I'm a Full Stack Developer primarily woring in MERN stack among
                the Full Stack technologies
              </h3>
              <h4>
                I'm passionate to learn new Technologies and solving
                problems...!
              </h4>
              <h4>
                On the off chance that you might want to connect with me, don't
                hesitate to send me an email at vijayanandr2000@gmail.com or
                contact me at +91 8754833291
              </h4>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card-img">
              <img src={Pic} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
