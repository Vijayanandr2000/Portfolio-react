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
                <a href={resume} target="_blank">
                  Download Resume
                </a>
              </h1>

              <h3>
                I like to learn new Technologies and I'm good in Problem solving
              </h3>
              <h2>
                Name.:
                <span>
                  <p>Vijayanand R</p>
                </span>
              </h2>
              <h2>
                Email:
                <span>
                  <p>vijayanandr2000@gmail.com</p>
                </span>
              </h2>
              <h2>
                Mobile:
                <span>
                  <p>8754833291</p>
                </span>
              </h2>
              <h2>
                City:
                <span>
                  <p>Jayankondam</p>
                </span>
              </h2>
              <h2>
                Country:
                <span>
                  <p>India</p>
                </span>
              </h2>
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
