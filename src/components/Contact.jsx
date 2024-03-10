import React from "react";
import "./Main.css";

export default function Contact() {
  return (
    <div>
      <div class="container" style={{marginTop: "8%"}}>
        <div class="row justify-content-center">
          <div class="col-md-8 contact-form">
            <h2>Contact Me</h2>
            <form action="" method="post">
              <div class="mb-3">
                <label for="name" class="form-label">
                  Name:
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="message" class="form-label">
                  Message:
                </label>
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
