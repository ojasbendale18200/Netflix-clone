import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../axios";
import requests from "../requests";

function Banner() {
  const [movie, setMovie] = useState([]);

  const fetchData = async () => {
    const res = await axios.get(requests.fetchNetflixOriginals);
    setMovie(
      res.data.results[Math.floor(Math.random() * res.data.results.length - 1)]
    );
    return res;
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__content">
        <h1 className="banner__title">
          {movie?.name || movie?.title || movie?.original_name}
        </h1>

        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.description || movie?.overview, 150)}
        </h1>
      </div>

      <div className="banner__fadebottom" />
    </header>
  );
}

export default Banner;
