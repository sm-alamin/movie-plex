
import './MovieDetails.css'
const MovieDetails = () => {
    return (
        <div className="movie_details_container">
            <div className='movie_details_left'>
                <img src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" alt="" />
                <button>Watch Now</button>
            </div>
            <div className='movie_details_info'>
                <h3>Movie Name</h3>
                <p>Average Run Time</p>
                <p>Status</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore voluptatibus illum explicabo exercitationem, eius quam quibusdam non sit iste repellat doloribus corporis fugit hic! Saepe nemo ipsam ut animi?</p>
            </div>
            <div className='movie_details_right'>
                <button>
                    Buy Ticket Now
                </button>
            </div>
        </div>
    );
};

export default MovieDetails;