import React from "react";
import './Banner.css'
import { FaLeaf } from "react-icons/fa";

const Banner = ({ pageName }) => {
  return (
    <div className="banner mt-20 lg:mt-0">
      <FaLeaf className="text-2xl mr-3" />
      <h2>{pageName}</h2>
      <FaLeaf className="text-2xl ms-3" />
    </div>
  );
};

export default Banner;
