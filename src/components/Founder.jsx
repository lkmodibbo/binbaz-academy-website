import './Founder.css';
import FounderImage from '../assets/founder.jpg';

export const Founder = () => {
  return (
    <div className="founder">
      <h2 className="founder-title">Meet Our Founder</h2>

      <div className="founder-wrapper">
        
        {/* LEFT SIDE - IMAGE + NAME */}
        <div className="founder-left">
          <img 
            src={FounderImage} 
            alt="Founder" 
            className="founder-img"
          />

          <h3 className="founder-name">Malam Abdullahi Yusuf</h3>
        </div>

        {/* RIGHT SIDE - EXTENDED CONTENT */}
        <div className="founder-right">
          <p>
            <strong>Malam Abdullahi Yusuf</strong> is not just the founder of this institution —
            he is the heart behind its values, vision, and direction. With over 
            three decades of teaching, community development, and educational 
            leadership, he has devoted his life to shaping young minds and providing 
            learning opportunities for children regardless of their background.
          </p>

          <p>
            Born and raised within a community where access to quality education was 
            limited, his early experiences inspired him to build a school that promotes 
            knowledge, character, discipline, and moral integrity. His dream was simple 
            yet powerful: <em>to raise generations of learners who excel academically, 
            think independently, and uphold Islamic and ethical principles in all areas 
            of their lives.</em>
          </p>

          <p>
            His leadership philosophy is rooted in compassion, patience, and service 
            to humanity. He firmly believes that education is the greatest gift one can 
            offer a child, because it unlocks doors that poverty, fear, or circumstance 
            may have closed. Today, his vision continues to guide every teacher, student, 
            and parent who walks through our gates.
          </p>

          <blockquote className="founder-quote">
            "Education is not preparation for life; education is life itself."
          </blockquote>

          <blockquote className="founder-quote">
            "Knowledge without character is incomplete — our aim is to build both."
          </blockquote>

          <blockquote className="founder-quote">
            "Let every child walk out of this school knowing they are valuable, capable, 
            and created to make a difference."
          </blockquote>
        </div>
      </div>
    </div>
  );
};
