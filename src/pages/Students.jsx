import React from "react";

function Students() {
  return (
    <div className="students">
      <div className="hero">
        <h1>Students</h1>
      </div>
      <div className="content">
        <div className="section">
          <h2>Life at Springdale</h2>
          <ul>
            <li>
              Extracurricular Activities: Music, Dance, Drama, Art, Sports,
              Robotics, Debate Club, Science Club
            </li>
            <li>
              Clubs and Societies: Literary Society, Environmental Club,
              Astronomy Club, Coding Club
            </li>
          </ul>
        </div>
        <div className="section achievements">
          <h2>Achievements</h2>
          <div className="grid">
            <div className="grid-item">
              <img
                className="profile-image"
                src="../src/assets/boy1.jpg"
                alt="John Smith"
              />
              <p>John Smith - National Level Math Olympiad Winner</p>
            </div>
            <div className="grid-item">
              <img
                className="profile-image"
                src="../src/assets/girl1.jpg"
                alt="Sarah Lee"
              />
              <p>Sarah Lee - Gold Medalist in State Swimming Championship</p>
            </div>
            <div className="grid-item">
              <img
                className="profile-image"
                src="../src/assets/club.jpg"
                alt="Tech Innovators Club"
              />
              <p>
                Tech Innovators Club - Winners of Inter-School Robotics
                Competition
              </p>
            </div>
          </div>
        </div>
        <div className="section student-council">
          <h2>Student Council</h2>
          <div className="grid">
            <div className="grid-item">
              <img
                className="profile-image"
                src="../src/assets/girl2.jpg"
                alt="Amy Parker"
              />
              <p>President: Amy Parker, Grade 12</p>
            </div>
            <div className="grid-item">
              <img
                className="profile-image"
                src="../src/assets/boy2.jpg"
                alt="Rajiv Mehta"
              />
              <p>Vice President: Rajiv Mehta, Grade 11</p>
            </div>
            <div className="grid-item">
              <img
                className="profile-image"
                src="../src/assets/girl3.jpg"
                alt="Lisa Wong"
              />
              <p>Secretary: Lisa Wong, Grade 10</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Students;
