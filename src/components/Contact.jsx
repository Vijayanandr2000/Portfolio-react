import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";
import emailjs from "emailjs-com";
import maill from "../components/icons/mail.png";
import insta from "../components/icons/insta3.png";
import github from "../components/icons/github.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [msg, setMsg] = useState("");
  const send = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    emailjs
      .sendForm(
        "service_shgo76a",
        "template_he38xcc",
        e.target,
        "user_rM25u0c0PzpysF80cgRIG"
      )
      .then(
        (result) => {
          window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
        },
        (error) => {
          console.log(error.text);
        }
        // e.Reset();
      );
  };
  return (
    <section id="contact">
      <div className="container">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="containerbox">
          <div className="contact">
            <img src={insta} alt="" className="insta" />
            <a href="https://github.com/Vijayanandr2000" target="_blank">
              <img src={github} alt="" className="git" />
            </a>
            <a href="mailto:vijayanandr2000@gmail.com" target="_blank">
              <img src={maill} alt="" className="mail" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
