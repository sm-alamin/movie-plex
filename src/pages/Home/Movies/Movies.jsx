import { useEffect, useState } from "react";
import "./Movies.css";
import Movie from "./Movie";
import AOS from "aos";
import "aos/dist/aos.css";
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
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div>
      <div className="mb-3">
        <h3 className="border-bottom"><span className="text-primary fs-1">Latest</span> Tv Shows</h3>
      </div>
      <div className="movie-container">
      {movies.map((movie, index) => (
          <div key={movie.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <Movie movie={movie} />
          </div>
        ))}

    </div>
    </div>
  );
};

export default Movies;
