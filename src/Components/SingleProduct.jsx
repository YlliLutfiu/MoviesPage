import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const SingleProduct = () => {
  const { movieId } = useParams();
  const [dataMovie, setDataMovie] = useState();

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${movieId}popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`
      )
      .then((res) => {
        setDataMovie(res.data);
      })
      .catch((err) => console.log(err));
  }, [movieId]);

  return (
    <div className="single">
      <Link to={"/movies"}>&larr;</Link>
      {dataMovie && (
        <div className="single-movie">
          <h1>{dataMovie.original_title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/original${dataMovie.backdrop_path}`}
            alt="Movie"
          />
          <p>{dataMovie.overview}</p>
          <Link to={`/movies/${dataMovie.id}/${dataMovie.imdb_id}`}>
            <button>Watch Movie</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default SingleProduct;
