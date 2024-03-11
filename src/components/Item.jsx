import React from "react";

export default function Item(props) {
  let {title, imgUrl, imdbId, year, type, mode}= props;
   
  return (
    <div className="my-3">
      <div className={`card bg-${mode}`}>
        <img src={imgUrl} className="card-img-top" alt="..." />
        <div className={`card-body text-${
                      mode === "light" ? "dark" : "light"
                    }`}>
          <h5 className="card-title">{title}</h5>
          <hr />
          <h5 className="list-group-item">Year : {year}</h5>
          <h5 className="list-group-item">IMDB Id: {imdbId}</h5>
          <h5 className="list-group-item">Type: {type}</h5>
        </div>
      </div>
    </div>
  );
}
