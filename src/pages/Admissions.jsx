import React from "react";

function Admissions() {
  return (
    <div className="admissions">
      <div className="hero">
        <h1>Admissions</h1>
      </div>
      <div className="content">
        <div className="section">
          <h2>Admission Process</h2>
          <p>
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
        </div>
        <div className="section">
          <h2>Criteria</h2>
          <p>
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </div>
        <div className="section">
          <h2>Important Dates</h2>
          <ul>
            <li>Admission Form Availability: March 1st</li>
            <li>Last Date for Submission: March 31st</li>
            <li>Entrance Test: April 15th</li>
            <li>Announcement of Results: April 30th</li>
          </ul>
        </div>
        <div className="section">
          <h2>Fees Structure</h2>
          <p>
            Our fee structure is designed to be affordable and transparent.
            Please contact our admissions office for detailed information.
          </p>
        </div>
        <div className="section">
          <h2>Scholarships and Financial Aid</h2>
          <p>
            We offer scholarships and financial aid to deserving students based
            on merit and need. Contact our admissions office for more details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Admissions;
