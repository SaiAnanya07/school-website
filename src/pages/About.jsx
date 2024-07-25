import React from "react";
import {
  FaHistory,
  FaEye,
  FaBullseye,
  FaUserTie,
  FaBuilding,
} from "react-icons/fa";

function About() {
  return (
    <div className="home">
      <div className="hero">
        <h1>About Us</h1>
      </div>
      <div className="content-grid">
        <div className="card">
          <FaHistory className="icon" />
          <h2>History</h2>
          <p>
            "Founded in 1985, Springdale Public School has been dedicated to
            providing quality education and holistic development to students."
          </p>
        </div>
        <div className="card">
          <FaEye className="icon" />
          <h2>Vision</h2>
          <p>
            "To create a learning environment that fosters academic excellence,
            critical thinking, and ethical values."
          </p>
        </div>
        <div className="card">
          <FaBullseye className="icon" />
          <h2>Mission</h2>
          <p>
            "To empower students with the knowledge, skills, and values needed
            to thrive in a dynamic world."
          </p>
        </div>
        <div className="card">
          <FaUserTie className="icon" />
          <h2>Principal's Message</h2>
          <p>
            "At Springdale, we believe in nurturing the potential of every
            student and guiding them towards a successful future."
          </p>
        </div>
        <div className="card">
          <FaBuilding className="icon" />
          <h2>Infrastructure and Facilities</h2>
          <ul>
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>
              Library with a vast collection of books and digital resources
            </li>
            <li>
              Sports facilities including a playground, gymnasium, and swimming
              pool
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
