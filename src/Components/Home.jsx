import React, { useState, useEffect } from "react";
import axios from "axios";
import homeimg from "../Assets/Home.jpg";

const Home = () => {
  const [toprated, setToprated] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((res) => setToprated(res.data.results.splice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="toprated-wrapper">
      <img src={homeimg} alt="dfad" className="home-img" />
      <h2 className="toprated-text">Top Rated Movies</h2>
      {toprated &&
        toprated.map((el) => (
          <div className="toprated" key={el.id}>
            <img
              src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
              className="toprated-img"
              alt={el.original_title}
            />
            <h2>{el.original_title}</h2>
            <p>{el.overview}</p>
          </div>
        ))}
    </div>
  );
};

export default Home;
