import { Link } from "react-router-dom";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
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
          <div className="mb-2 ">
          <Rating style={{ maxWidth: 120 }} value={rating?.average/2}  readOnly />
          </div>
          <div className="d-flex gap-2">
          {genres.map((genre, index) => (
              <p key={index}>{genre}</p>
            ))}
          </div>
        </div>
        <Link to={`/movie-details/${id}`}><button className="common_btn">Details</button></Link>
      </div>
    </div>
  );
};

export default Movie;
