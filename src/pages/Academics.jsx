import React from "react";

function Academics() {
  return (
    <div className="academics">
      <div className="hero">
        <h1>Academics</h1>
      </div>
      <div className="content">
        <div className="section">
          <h2>Curriculum</h2>
          <div className="curriculum">
            <div className="curriculum-group">
              <h3>Primary (Grades 1-5)</h3>
              <ul>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science</li>
                <li>Social Studies</li>
                <li>Art</li>
                <li>Physical Education</li>
              </ul>
            </div>
            <div className="curriculum-group">
              <h3>Secondary (Grades 6-10)</h3>
              <ul>
                <li>English</li>
                <li>Mathematics</li>
                <li>Science (Physics, Chemistry, Biology)</li>
                <li>Social Studies</li>
                <li>Computer Science</li>
                <li>Physical Education</li>
                <li>Art</li>
              </ul>
            </div>
            <div className="curriculum-group">
              <h3>Senior Secondary (Grades 11-12)</h3>
              <h4>Science Stream</h4>
              <ul>
                <li>Physics</li>
                <li>Chemistry</li>
                <li>Biology</li>
                <li>Mathematics</li>
                <li>Computer Science</li>
                <li>English</li>
              </ul>
              <h4>Commerce Stream</h4>
              <ul>
                <li>Accountancy</li>
                <li>Business Studies</li>
                <li>Economics</li>
                <li>Mathematics</li>
                <li>English</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Teaching Methodologies</h2>
          <p>
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </div>
        <div className="section">
          <h2>Educational Resources</h2>
          <p>
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Academics;
