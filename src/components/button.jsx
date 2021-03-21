import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Button = ({ btns, filter }) => {
  return (
    <div>
      <nav>
        <div className="row btn-row">
          <div className="col-lg-2 col-sm-12 col-md-1 col-btn ">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => filter("all")}
            >
              ALL
            </button>
          </div>
          <div className="col-lg-2 col-sm-3 col-btn ">
            <button
              type="button"
              class="btn btn-primary"
              onClick={() => filter("fe")}
            >
              FRONTEND
            </button>
          </div>
          <div className="col-lg-2 col-sm-3 col-btn">
            <button
              type="button"
              class="btn btn-warning"
              onClick={() => filter("react")}
            >
              REACT
            </button>
          </div>
          <div className="col-lg-2 col-sm-3 col-btn">
            <button
              type="button"
              class="btn btn-secondary"
              onClick={() => filter("fs")}
            >
              FULL STACK
            </button>
          </div>
          <div className="col-lg-2 col-sm-3 col-btn">
            <button
              type="button"
              class="btn btn-light"
              onClick={() => filter("clg")}
            >
              ACADEMIC
            </button>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};
export default Button;
