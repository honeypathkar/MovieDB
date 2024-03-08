import React from "react";

export default function Footer(props) {
  return (
    <div className="container my-3">
      <div className={`card text-center bg-${props.mode} text-${props.mode === "light" ? "dark" : "light"}`}>
        <div className="card-body">
          <h5 className="card-title">More about App</h5>
          <p className="card-text">
            The Download link is not provided by OMDB so here the download is provided by VEGAMOVIES.
           
          </p>
          <p> Credit for Download Link : VEGAMOVIES</p>
        </div>
      </div>
    </div>
  );
}
