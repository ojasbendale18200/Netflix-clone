import React from "react";
import Banner from "../components/Banner";
import "./HomeScreen.css";
import Nav from "../components/Nav";
import requests from "../requests";
import Row from "../components/Row";

function HomeScreen() {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* movie Rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romace Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default HomeScreen;
