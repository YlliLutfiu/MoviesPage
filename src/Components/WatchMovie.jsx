import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import moviesoon from "../Assets/movie-soon.jpg";
import { Link } from "react-router-dom";

const WatchMovie = () => {
  const { movieId } = useParams();
  const [watchmovie, setWatchmovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => {
        console.log(res);
        setWatchmovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  return (
    <div className="watch-wrapper">
      <Link to={`/movies/${movieId}`}>&larr;</Link>
      {watchmovie && (
        <div className="watchmovie">
          <h2>{watchmovie.original_title}</h2>
          <img src={moviesoon} alt="Movie" />
        </div>
      )}
    </div>
  );
};

export default WatchMovie;
