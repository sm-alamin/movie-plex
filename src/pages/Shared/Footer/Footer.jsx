import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer py-3 bg-customize pt-5 mt-5">
      <div className="container text-center">
        <div className="row">
          <div className="col-md-4">
            {/* Social Icons */}
            <div className="social-icons">
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaInstagram /></a>
            </div>
          </div>
          <div className="col-md-4">
            {/* Logo */}
            <div className="logo">
              <img src="/fav_icon.png" alt="Logo" />
            </div>
          </div>
          <div className="col-md-4">
            {/* Address */}
            <div className="address">
              <p>123 Movie Street, City</p>
              <p>India</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <span className="text-muted">All Right Reserved by Movie Plex &copy; 2023</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
