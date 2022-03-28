import axios from "../axios";
import React, { useEffect, useState } from "react";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const baseURL = "https://image.tmdb.org/t/p/original/";

  const [movies, setmovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const fetchData = async () => {
    const request = await axios.get(fetchUrl);
    setmovies(request.data.results);
    return request;
  };

  useEffect(() => {
    fetchData();
  }, [fetchUrl]);
  console.log(movies);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(movie?.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
        })
        .catch((error) => alert("there is no trailer for this movie"));
    }
  };

  return (
    <div className="row">
      <h2>{title} </h2>
      <div className="row__posters">
        {movies &&
          movies.map((movie) => (
            <img
              className={`row__poster ${isLargeRow && "row__posterLarge"}`}
              key={movie.id}
              src={`${baseURL}${
                isLargeRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
              onClick={() => handleClick(movie)}
            />
          ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;

// import React, { useEffect, useState } from "react";
// import axios from "../axios";

// function Row({ fetchUrl, title, isLargeRow }) {
//   console.log("FetchUrl", fetchUrl);
//   const [movie, setMovie] = useState([]);

//   useEffect(() => {
//     async function getMovies() {
//       const request = await axios.get(fetchUrl);
//       setMovie(request.data.results);
//       return request;
//     }
//     getMovies();
//   }, [fetchUrl]);
//   console.log("MMM", movie);
//   return (
//     <div className="row">
//       <h2 className="row-title">{title}</h2>
//       <div className="row-contents">
//         {movie &&
//           movie.map((elem) => {
//             return (
//               <img
//                 key={elem.id}
//                 alt={`${elem.title}`}
//                 src={`https://image.tmdb.org/t/p/original/${
//                   isLargeRow ? elem.poster_path : elem.backdrop_path
//                 }`}
//               />
//             );
//           })}
//       </div>
//     </div>
//   );
// }

// export default Row;
