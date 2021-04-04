import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="body">
      <div className="home text-center">
        <h1>programmer</h1>
      </div>
      <div className="me">
        <h3>hey ! i am</h3>
        <h1>vijayanand</h1>
        <h3>i like</h3>
        <h2 className="typing">
          {
            <Typewriter
              options={{
                strings: [
                  "Coding",
                  "Web Developing",
                  "Problem Solving",
                  "Learning",
                ],
                autoStart: true,
                loop: true,
                pause: false,
              }}
            />
          }
        </h2>
      </div>
    </div>
  );
};

export default Home;
