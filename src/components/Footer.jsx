// Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-4">
            <h5>About Us</h5>
            <p>
              We are a leading real estate company dedicated to helping you find your dream home. Our mission is to provide the best services in the industry, offering a wide range of properties and personalized assistance to meet all your real estate needs.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-white text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="text-white text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="text-white text-decoration-none">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white text-decoration-none">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 mb-4">
            <h5>Contact Us</h5>
            <p>
              <i className="fas fa-map-marker-alt"></i> 123 Real Estate Ave, Suite 100, City, Country
            </p>
            <p>
              <i className="fas fa-phone"></i> +1 (123) 456-7890
            </p>
            <p>
              <i className="fas fa-envelope"></i> info@realestate.com
            </p>
            {/* Social Media Links */}
            <div>
              <a href="#" className="text-white me-2">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-white me-2">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="text-center py-3 border-top mt-3">
          © 2024 Real Estate Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
