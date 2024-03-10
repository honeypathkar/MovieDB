import React from "react";
import "./Main.css";

export default function Contact(props) {
  const myStyle = {
    backgroundColor: props.mode === "dark" ? "#404040" : "white",
    color: props.mode === "dark" ? "white" : "black",
  };
  return (
    <div>
      <div
        className={`container text-${
          props.mode === "light" ? "dark" : "light"
        }`}
        style={{ marginTop: "8%" }}
      >
        <div className="row justify-content-center">
          <div className="col-md-8 contact-form">
            <h2>Contact Me</h2>
            <form action="" method="post">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  className={`form-control ${
                    props.mode === "dark" ? "placeholder-light" : "placeholder-dark"
                  }`}
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                  style={myStyle}
                />
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className={`form-control ${
                    props.mode === "dark" ? "placeholder-light" : "placeholder-dark"
                  }`}
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  style={myStyle}
                />
              </div>
              <div className="mb-3">
                <label for="message" className="form-label">
                  Message:
                </label>
                <textarea
                  className={`form-control ${
                    props.mode === "dark" ? "placeholder-light" : "placeholder-dark"
                  }`}
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Write your message here"
                  required
                  style={myStyle}
                ></textarea>
              </div>
              <button
                type="submit"
                className={`btn btn-outline-${
                  props.mode === "light" ? "dark" : "light"
                }`}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
