import { Link } from "react-router-dom";

const Movie = ({movie}) => {
    const { id, name, image, language, rating, genres } = movie;
  return (
    <div className="movie_card">
      <img
        src={image.original}
        alt=""
      />
      <div className="movie-info">
        <h3>{name}</h3>
        <p>{language}</p>
        <div>
          <p className="movie-categories">Rating</p>
          <div>
          {
            genres.map(genre => <p>{genre}</p>)
          }
          </div>
        </div>
        <Link to={`/movie-details/${id}`}><button className="common_btn">Details</button></Link>
      </div>
    </div>
  );
};

export default Movie;
