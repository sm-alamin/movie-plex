import { useEffect, useState } from "react";
import "./MovieDetails.css";
import { useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import toast, { Toaster } from 'react-hot-toast';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [userDetails, setUserDetails] = useState({
    name: '',
    email: ''
  });

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserDetails((prevUserDetails) => ({
      ...prevUserDetails,
      [name]: value
    }));
  };

  const handleFormSubmit = () => {
    // Check if name or email is empty
    if (!userDetails.name || !userDetails.email) {
        toast.error("Please provide your name and email");
        return;
      }
    // Retrieve existing user details from local storage
  const existingUserDetails = JSON.parse(localStorage.getItem('userDetails')) || [];
  // Created a new object with user details and ticket information
  const ticketInfo = {
    movieName: movie.name,
    showTime: movie.schedule.time,
    runtime: movie.runtime,
    ticketPrice: 500
  };
  const userData = {
    ...userDetails,
    ticketInfo
  };
  // Add current user data to the array
  const updatedUserDetails = [...existingUserDetails, userData];
  // Store the updated user details array in local storage
  localStorage.setItem('userDetails', JSON.stringify(updatedUserDetails));
  // Perform other necessary actions, such as payment processing
  // You can redirect the user to a success page or perform further operations here

  toast.success("user data successfully store in localstorage")
    
  };

  if (!movie) {
    return <>
    <div className="spinner-border text-primary" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
    </>
  }

  return (
    <>
      <div className="movie_details_container">
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
          <button
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            data-bs-whatever="@getbootstrap"
            className="common_btn"
          >
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
                    <label
                      htmlFor="recipient-name"
                      className="col-form-label"
                    >
                      <span className="text-primary">Movie Name:</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="recipient-name"
                      defaultValue={movie.name}
                      disabled
                    />
                  </div>
                  <div className="mb-3">
                    <label
                      htmlFor="message-text"
                      className="col-form-label"
                    >
                      <span className="text-primary">Show Time:</span>
                    </label>
                    <textarea
                      className="form-control"
                      id="message-text"
                      defaultValue={movie.schedule.time}
                      disabled
                    />
                  </div>
                  <div>
                    <p>
                      <span className="text-primary">Run Time</span>{" "}
                      {movie.runtime} minutes
                    </p>
                  </div>
                  <div>
                    <p>
                      <span className="text-primary">Ticket Price:</span> 500
                    </p>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="name" className="col-form-label">
                      <span className="text-primary">Your Name:</span>
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={userDetails.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="col-form-label">
                      <span className="text-primary">Your Email:</span>
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={userDetails.email}
                      onChange={handleInputChange}
                      required
                    />
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
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFormSubmit}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default MovieDetails;
