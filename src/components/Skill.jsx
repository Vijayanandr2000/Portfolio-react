import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import html from "./icons/html.png";
import css from "./icons/css.png";
import bootstrap from "./icons/bootstrap.png";
import js from "./icons/javascript.png";
import react from "./icons/react.png";
import mongo from "./icons/mongo.png";
import node from "./icons/node.png";
import c from "./icons/c.png";
import "./Skill.css";

const Skill = () => {
  return (
    <section id="skill">
      <div className="container">
        <div className="title">
          <h1>Skills</h1>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12 col1 ">
            <img className="img" src={html} alt="" srcset="" />
          </div>
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={css} alt="" srcset="" />
          </div>
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={bootstrap} alt="" srcset="" />
          </div>
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={js} alt="" srcset="" />
          </div>
        </div>
        <div className="row">
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={react} alt="" srcset="" />
          </div>
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={node} alt="" srcset="" />
          </div>
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={mongo} alt="" srcset="" />
          </div>
          <div className="col-md-3 col-sm-12 col1">
            <img className="img" src={c} alt="" srcset="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
