// SecondBanner.js
import React from 'react';

const Banner2 = () => {
  return (
    <section className="second-banner-container">
      <div className="container py-5">
        <h2 className="text-center mb-4">Explore Our Pricing Plans</h2>
        <p className="text-center mb-5">
          Choose the perfect plan for your real estate needs. Whether you're looking to buy, sell, or rent, our tailored plans offer the best options to match your goals.
        </p>
        <div data-aos="zoom-in" data-aos-duration="2000" className="row">
          {/* Basic Plan Card */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Basic Plan</h5>
                <h6 className="card-price text-center mb-4">$99 / month</h6>
                <p className="card-text">
                  Our Basic Plan is perfect for individuals or small families looking to get started in the real estate market. This plan includes basic listing options and access to our comprehensive property database, allowing you to explore available properties and find your dream home with ease. Additional benefits include:
                </p>
                <ul>
                  <li>Access to standard property listings</li>
                  <li>Basic support from our expert agents</li>
                  <li>Weekly market updates</li>
                  <li>Guidance on making offers and negotiations</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Premium Plan Card */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Premium Plan</h5>
                <h6 className="card-price text-center mb-4">$199 / month</h6>
                <p className="card-text">
                  The Premium Plan is ideal for those looking for a more hands-on experience. You will benefit from personalized support, advanced market analytics, and priority access to new listings. Perfect for both buyers and sellers, this plan is designed to maximize your opportunities and streamline the entire process.
                </p>
                <ul>
                  <li>Priority access to new property listings</li>
                  <li>Dedicated agent support</li>
                  <li>Advanced market analysis and insights</li>
                  <li>Comprehensive marketing for sellers</li>
                  <li>Enhanced property search filters</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Elite Plan Card */}
          <div className="col-md-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title text-center">Elite Plan</h5>
                <h6 className="card-price text-center mb-4">$299 / month</h6>
                <p className="card-text">
                  The Elite Plan is our top-tier offering, providing the ultimate level of service and access to the market. Perfect for high-end buyers, sellers, and investors, this plan includes VIP access, full agent representation, and a complete suite of tools to help you make informed decisions and secure the best deals in the market.
                </p>
                <ul>
                  <li>VIP access to exclusive listings</li>
                  <li>Full representation and legal support</li>
                  <li>Personalized investment advice</li>
                  <li>Custom marketing campaigns for luxury properties</li>
                  <li>24/7 priority support</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner2;
