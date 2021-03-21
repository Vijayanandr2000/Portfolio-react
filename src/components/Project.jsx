import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Project.css";
import project from "../components/Data/project";
import Button from "./button";
import Data from "./Data";

const all = ["all", ...project.map((e) => e.cat)];

const Project = () => {
  const [pro, setPro] = useState(project);
  const [btn, setBtn] = useState(all);

  const filter = (btns) => {
    if (btns === "all") {
      setPro(project);
      return;
    }
    const filterData = project.filter((e) => e.cat === btns);
    setPro(filterData);
  };
  return (
    <section id="project">
      <div className="container">
        <div className="title">
          <h1>projects</h1>
        </div>
        <Button btns={btn} filter={filter} />

        <Data pro={pro} />
      </div>
    </section>
  );
};

export default Project;
