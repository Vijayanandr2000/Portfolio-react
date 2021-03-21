import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Education.css";

const Education = () => {
  return (
    <section id="education">
      <div className="education">
        <h1 className="title">Education</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12 col4 ">
              <div className="card-edu">
                <div className="card-head">
                  <h1>BE-ECE</h1>
                </div>
                <div className="card-body card-educ">
                  <h3>Jeppiaar Institute of Technology, Chennai</h3>
                  <h3>2017-2021</h3>
                  <h3>79%</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col4">
              <div className="card-edu">
                <div className="card-head">
                  <h1>12th Grade</h1>
                </div>
                <div className="card-body card-educ">
                  <h3>Alpha English Hr. Sec. School, Pondicherry</h3>
                  <h3>2016-2017</h3>
                  <h3>90%</h3>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 col4">
              <div className="card-edu">
                <div className="card-head">
                  <h1>10th Grade</h1>
                </div>
                <div className="card-body card-educ">
                  <h3>Fathima High School, Jayankondam</h3>
                  <h3>2014-2015</h3>
                  <h3>95.6%</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Education;
