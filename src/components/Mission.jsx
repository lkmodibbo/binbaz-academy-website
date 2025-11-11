import React from "react";
import "./Mission.css";

const Mission = () => {
  return (
    <section className="mission">
      <h2 className="mission-title">Who We Are</h2>

      <div className="mission-container">
        
        {/* Mission */}
        <div className="mission-card">
          <h3 className="card-heading">Our Mission</h3>
          <p>
            Empowering students with a balanced blend of modern Western 
            education and Islamic values. We aim to nurture individuals who
            excel academically, think critically, and contribute positively 
            to society while upholding strong moral principles.
          </p>
        </div>

        {/* Vision */}
        <div className="mission-card">
          <h3 className="card-heading">Our Vision</h3>
          <p>
            To become a leading institution recognized for academic excellence,
            spiritual development, and character building — preparing students
            to thrive in a dynamic and global world rooted in discipline,
            knowledge, and integrity.
          </p>
        </div>

        {/* History */}
        <div className="mission-card">
          <h3 className="card-heading">Our History</h3>
          <p>
            Founded with the goal of merging traditional Islamic values with
            quality modern education, our institution has grown over the years
            through dedication, community support, and a passion for shaping 
            future leaders with strong moral foundations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Mission;
