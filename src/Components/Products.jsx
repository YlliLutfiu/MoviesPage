import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import noimg from "../Assets/No-image-found.jpg";

const Products = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US"
      )
      .then((res) => {
        console.log("RES", res);
        setData(res.data.results);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="movies-wrapper">
      {data &&
        data.map((el) => (
          <div className="movie" key={el.id}>
            {el.backdrop_path === null ? (
              <img src={noimg} className="movie-img" alt={el.original_title} />
            ) : (
              <img
                src={`https://image.tmdb.org/t/p/original${el.backdrop_path}`}
                className="movie-img"
                alt={el.original_title}
              />
            )}
            <h2>{el.original_title}</h2>
            <p>{el.overview}</p>
            <Link to={`/movies/${el.id}`}>
              <button>Go to movie</button>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default Products;
