import { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setMovie(data);
      })
      .catch((error) => {
        console.log("Error fetching movie details:", error);
      });
  }, [id]);
  const removeTags = (html) => {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
   <> <div className="movie_details_container">
   <div className="movie_details_left">
     <img src={movie.image?.original} alt={movie.name} />
     <button className="common_btn">Watch Now</button>
   </div>
   <div className="movie_details_info">
     <h3>{movie.name}</h3>
     <p>Average Run Time: {movie.runtime} minutes</p>
     <p>Status: {movie.status}</p>
     <p>{removeTags(movie.summary)}</p>
   </div>
   <div className="">
     <button data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap" className="common_btn">
       Buy Ticket Now
     </button>
   </div>
   
 </div>
 <div className="modal-container">
 <div
   className="modal fade"
   id="exampleModal"
   tabIndex={-1}
   aria-labelledby="exampleModalLabel"
   aria-hidden="true"
 >
   <div className="modal-dialog">
     <div className="modal-content">
       <div className="modal-header">
         <h5 className="modal-title" id="exampleModalLabel">
           Ticket Booking
         </h5>
         <button
           type="button"
           className="btn-close"
           data-bs-dismiss="modal"
           aria-label="Close"
         />
       </div>
       <div className="modal-body">
         <form>
           <div className="mb-3">
             <label htmlFor="recipient-name" className="col-form-label">
               <span className="text-primary">Movie Name:</span>
             </label>
             <input
               type="text"
               className="form-control"
               id="recipient-name"
               defaultValue={movie.name}
               
             />
           </div>
           <div className="mb-3">
             <label htmlFor="message-text" className="col-form-label">
               <span className="text-primary">Show Time:</span>
             </label>
             <textarea
               className="form-control"
               id="message-text"
               defaultValue={movie.schedule.time}
             />
           </div>
           <div>
            <p><span className="text-primary">Run Time</span> {movie.runtime} minutes</p>
           </div>
           <div>
            <p><span className="text-primary">Ticket Price:</span> 500</p>
           </div>
         </form>
       </div>
       <div className="modal-footer">
         <button
           type="button"
           className="btn btn-secondary"
           data-bs-dismiss="modal"
         >
           Close
         </button>
         <button type="button" className="btn btn-primary">
           Pay Now
         </button>
       </div>
     </div>
   </div>
 </div>
</div></>
  );
};

export default MovieDetails;
