import React from 'react';
import './Founder.css';
import FounderImage from '/lk.jpg'

export const Founder = () => {
  return (
    <div className="founder">
      <h2>Meet Our Founder</h2>

      <div className="founder-content">
        <img 
          src= {FounderImage} // <-- put founder image inside public/images
          alt="Founder"
          className="founder-img"
        />

        <div className="founder-text">
          <h3>Mr. John Doe</h3>
          <p>
            Our founder, <strong>Mr. Bala Muhammad</strong>, established this school with a vision 
            to provide quality education rooted in discipline, innovation, and 
            excellence. His mission is to nurture students into lifelong learners 
            and leaders of tomorrow.
          </p>
          <blockquote>
            "Education is not preparation for life; education is life itself."
          </blockquote>
        </div>
      </div>
    </div>
  );
};
