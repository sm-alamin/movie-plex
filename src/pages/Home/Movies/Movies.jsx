import { useEffect, useState } from "react";
import "./Movies.css";
import Movie from "./Movie";
const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((res) => res.json())
      .then((data) => {
        const extractedMovies = data.map((item) => item.show);
        setMovies(extractedMovies);
      });
  }, []);

  return (
    <div className="movie-container">
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

export default Movies;
