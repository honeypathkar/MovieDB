import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
import Spinner from "./Spinner";
import "./Main.css";

export default function Main(props) {
  const { mode } = props;
  const [movie, setMovie] = useState([]); // Initialize movie state as an empty array
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [error, setError] = useState(null); // State to store error message
  const apiKey = "ee1fee82";

  const getMovieData = async () => {
    props.setProgress(10);
    const url = `https://www.omdbapi.com/?s=adventure&page=${page}&apikey=${apiKey}`;
    setLoading(true);
    setError(null); // Clear previous error if any
    const response = await fetch(url);
    props.setProgress(30);
    const result = await response.json();
    props.setProgress(70);
    if (result.Response === "False") {
      setError(result.Error); // Set error message if no movies found
    } else {
      setMovie(result.Search); // Set movie state to the array of movies
      setTotalResults(result.totalResults);
    }
    setLoading(false);
    props.setProgress(100);
  };

  const getMovieDataBySearch = async () => {
    props.setProgress(10);
    const url = `https://www.omdbapi.com/?s=${search}&page=${page}&type=${props.type}&apikey=${apiKey}`;
    setLoading(true);
    setError(null); // Clear previous error if any
    const response = await fetch(url);
    props.setProgress(30);
    const result = await response.json();
    props.setProgress(70);
    if (result.Response === "False") {
      setError(result.Error); // Set error message if no movies found
    } else {
      setMovie(result.Search); // Set movie state to the array of movies
      setTotalResults(result.totalResults);
    }
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    let timer = setTimeout(() => {
      getMovieData();
    }, 1000);
    return () => clearTimeout(timer);
  }, [page, props.type]);

  const handlePrevious = async () => {
    getMovieData();
    setPage(page - 1);
  };

  const handleNext = async () => {
    getMovieData();
    setPage(page + 1);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    getMovieDataBySearch();
  };

  return (
    <div className="container" style={{ marginTop: "6rem" }}>
      <div className="my-3">
        <form className="d-flex" role="search" onSubmit={handleSearch}>
          <input
            className={`form-control me-2 ${
              mode === "dark" ? "placeholder-light" : "placeholder-dark"
            }`}
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            style={{
              backgroundColor: mode === "dark" ? "#404040" : "white",
              color: mode === "dark" ? "white" : "black",
            }}
          />
          <button
            className={`btn btn-outline-${mode === "light" ? "dark" : "light"}`}
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
      {loading && <Spinner />}
      {error && (
        <div
          className={`text-center bg-${mode} text-${
            mode === "light" ? "dark" : "light"
          } fs-2 my-5 mx-5 px-5 py-5`}
        >
          {error}
        </div>
      )}{" "}
      {/* Render error message if there is any */}
      {!loading && !error && (
        <div>
          <div className="row my-3">
            {movie.map((element) => (
              <div key={element.imdbID} className="col-md-3">
                <Item
                  title={element.Title}
                  imgUrl={element.Poster}
                  year={element.Year}
                  type={element.Type}
                  imdbId={element.imdbID}
                  mode={mode}
                />
              </div>
            ))}
          </div>
          <div className="container d-flex justify-content-between my-5">
            <button
              className={`btn btn-outline-${
                mode === "light" ? "dark" : "light"
              }`}
              disabled={page <= 1}
              onClick={handlePrevious}
            >
              &larr; Previous
            </button>
            <button
              className={`btn btn-outline-${
                mode === "light" ? "dark" : "light"
              }`}
              disabled={page + 1 > Math.ceil(totalResults / 10)}
              onClick={handleNext}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

Main.defaultProps = {
  type: "movie"
}
Main.propTypes = {
  type : PropTypes.string,
}
