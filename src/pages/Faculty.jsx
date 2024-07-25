import React from "react";

function Faculty() {
  return (
    <div className="faculty">
      <div className="hero">
        <h1>Faculty</h1>
      </div>
      <div className="content">
        <div className="section">
          <h2>Profiles</h2>
          <ul>
            <li>
              <img
                className="profile-image"
                src="../src/assets/pri.jpg"
                alt="John Doe"
              />
              John Doe: Principal, M.Ed, 20 years of experience in educational
              administration.
            </li>
            <li>
              <img
                className="profile-image"
                src="../src/assets/last1.jpg"
                alt="Jane Smith"
              />
              Jane Smith: Vice Principal, M.Sc. in Physics, 15 years of teaching
              experience.
            </li>
            <li>
              <img
                className="profile-image"
                src="../src/assets/eng.jpg"
                alt="Emily Johnson"
              />
              Emily Johnson: English Teacher, M.A. in English, 10 years of
              teaching experience.
            </li>
            <li>
              <img
                className="profile-image"
                src="../src/assets/pfp.jpg"
                alt="Michael Brown"
              />
              Michael Brown: Mathematics Teacher, M.Sc. in Mathematics, 8 years
              of teaching experience.
            </li>
            <li>
              <img
                className="profile-image"
                src="../src/assets/che.jpg"
                alt="Sophia Davis"
              />
              Sophia Davis: Science Teacher, M.Sc. in Chemistry, 12 years of
              teaching experience.
            </li>
            <li>
              <img
                className="profile-image"
                src="../src/assets/last.jpg"
                alt="David Wilson"
              />
              David Wilson: Computer Science Teacher, B.Tech in Computer
              Science, 5 years of teaching experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
