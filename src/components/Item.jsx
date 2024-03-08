import React from "react";

export default function Item(props) {
  let {title, imgUrl, imdbId, year, type, mode}= props;
   

   function convertString(inputString) {
    var lowercaseString = inputString.toLowerCase();
    
    var replacedString = lowercaseString.replace(/ /g, "-");
    
    return replacedString;
}

const downLink = "https://vegamovies.ong/download" + "-" + convertString(title);
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
          <hr />
        </div>
        <div className="card-body">
          <button className={`btn btn-outline-${
                mode === "light" ? "dark" : "light"
              }`}>
            <a href={downLink} target="_blank" style={{textDecoration: "none"}} >
              Download
            </a>
          </button>
          
        </div>
      </div>
    </div>
  );
}
