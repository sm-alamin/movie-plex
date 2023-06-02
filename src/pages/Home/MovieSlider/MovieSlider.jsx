import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const MovieSlider = () => {
    const [slidesToShow, setSlidesToShow] = useState(4); // Default value for desktop view

  useEffect(() => {
    const handleResize = () => {
      // Update slidesToShow based on window width
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Mobile view: Show 1 slide
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet view: Show 2 slides
      } else {
        setSlidesToShow(4); // Desktop view: Show 4 slides
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Call handleResize initially
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
      };
    return (
        <Slider {...settings} className="mt-2 my-5">
      <div>
        <img className = "h-60 w-full" src="https://static.tvmaze.com/uploads/images/original_untouched/408/1022051.jpg" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://static.tvmaze.com/uploads/images/original_untouched/200/501970.jpg" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://static.tvmaze.com/uploads/images/original_untouched/425/1064746.jpg" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://static.tvmaze.com/uploads/images/original_untouched/413/1034988.jpg" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://static.tvmaze.com/uploads/images/original_untouched/155/388118.jpg" alt="" />
      </div>
      <div>
        <img className = "h-60 w-full" src="https://static.tvmaze.com/uploads/images/original_untouched/24/60454.jpg" alt="" />
      </div>
      
      
    </Slider>
    );
};

export default MovieSlider;