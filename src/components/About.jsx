import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About Us</h2>

      <p className="about-intro">
        Bin-Baz Memorial Academy is more than just a school — it is a community built on 
        discipline, knowledge, and strong moral values. Our goal is to create an environment 
        where every student can grow academically, spiritually, and socially.
      </p>

      <div className="about-details">

        <div className="about-card">
          <h3>Our Story</h3>
          <p>
            Founded with the vision to uplift education within our community, Bin-Baz Memorial 
            Academy started as a small learning center guided by passion and commitment. Today, 
            it stands as a growing institution dedicated to shaping young minds into responsible 
            leaders rooted in integrity and excellence.
          </p>
        </div>

        <div className="about-card">
          <h3>Our Philosophy</h3>
          <p>
            We believe that true education goes beyond the classroom. We focus on character 
            building, personal discipline, critical thinking, and moral guidance. Our teachers 
            work closely with students, creating a supportive and encouraging atmosphere.
          </p>
        </div>

        <div className="about-card">
          <h3>What Makes Us Unique</h3>
          <ul>
            <li>Dedicated and well-trained teachers</li>
            <li>A balanced blend of Western education and Islamic values</li>
            <li>A calm, safe, and structured learning environment</li>
            <li>Personal attention for each student</li>
            <li>Strong community involvement</li>
          </ul>
        </div>

        <div className="about-card">
          <h3>Our Impact</h3>
          <p>
            Over the years, we have nurtured students who have excelled academically, grown 
            spiritually, and become role models within their communities. We continue to expand 
            our programs and improve our facilities to better serve our students.
          </p>
        </div>
      </div>

      <p className="about-footer">
        At Bin-Baz Memorial Academy, every child matters. Every dream counts. Every step forward
        is our shared success.
      </p>
    </section>
  );
};

export default About;
