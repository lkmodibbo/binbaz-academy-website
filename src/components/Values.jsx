import React from 'react';
import './Values.css';
import ValuesImage from '../assets/image.png';

const Values = () => {
  return (
    <section className="values">
      <h2>Our Core Values</h2>

      <div className="values-container">
        
        {/* Left side – image */}
        <div className="values-image">
          <img src={ValuesImage} alt="Education core values" />
        </div>

        {/* Right side – values list */}
        <div className="values-list">
          <ul>
            <li><span>Excellence</span> — We aim for the highest standards in academics and character.</li>
            <li><span>Discipline</span> — We build strong habits of responsibility and self-control.</li>
            <li><span>Respect</span> — We treat everyone with kindness, empathy, and dignity.</li>
            <li><span>Integrity</span> — We act with honesty and uphold strong moral principles.</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default Values;
