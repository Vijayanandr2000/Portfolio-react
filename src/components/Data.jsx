import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Data({ pro }) {
  return (
    <div>
      <div className="container">
        <div className="row">
          {pro.map((e) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12 col-pro">
                <div
                  className="card"
                  style={{ width: 19 + "em" }}
                  id="pro-card"
                >
                  <div className="card-body card-pro">
                    <h4 className=" card-protitle">{e.title}</h4>

                    <h6 className="card-subtitle ">{e.des}</h6>
                    <div className="link">
                      <a href={e.code} target="_blank">
                        CODE
                      </a>
                      <a href={e.demo} target="_blank">
                        DEMO
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Data;
