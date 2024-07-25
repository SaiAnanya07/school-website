import React from "react";

function Contact() {
  return (
    <div className="contact">
      <div className="hero">
        <h1>Contact Us</h1>
      </div>
      <div className="content">
        <div className="section">
          <h2>Address</h2>
          <p>
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </p>
        </div>
        <div className="section">
          <h2>Phone</h2>
          <p>+1 (123) 456-7890</p>
        </div>
        <div className="section">
          <h2>Email</h2>
          <p>info@springdale.edu</p>
        </div>
        <div className="section">
          <h2>Contact Form</h2>
          <form className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="section">
          <h2>Location</h2>
          <iframe
            title="School Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093747!2d144.95565131561648!3d-37.81732397975168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775d1f60e0c597!2sEducation%20Lane%2C%20Cityville%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1629825175952!5m2!1sen!2sus"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
