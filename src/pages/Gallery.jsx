import React from "react";

function Gallery() {
  return (
    <div className="gallery">
      <div className="hero">
        <h1>Gallery</h1>
      </div>
      <div className="content">
        <div className="section">
          <h2>Photos</h2>
          <div className="photo-grid">
            <div className="photo-item">
              <img
                src="../src/assets/sports.jpg"
                alt="Students participating in various sports events"
              />
              <p>Students participating in various sports events.</p>
            </div>
            <div className="photo-item">
              <img
                src="../src/assets/present.jpg"
                alt="Students presenting their science projects"
              />
              <p>Students presenting their science projects.</p>
            </div>
            <div className="photo-item">
              <img
                src="../src/assets/schooldance.jpg"
                alt="Students performing in the cultural fest"
              />
              <p>Students performing in the cultural fest.</p>
            </div>
            <div className="photo-item">
              <img
                src="../src/assets/admissions.jpg"
                alt="A glimpse of our interactive classrooms"
              />
              <p>A glimpse of our interactive classrooms.</p>
            </div>
            <div className="photo-item">
              <img
                src="../src/assets/librarystudents.jpg"
                alt="Students reading and studying in the school library"
              />
              <p>Students reading and studying in the school library.</p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Videos</h2>
          <div className="video-grid">
            <div className="video-item">
              <iframe
                width="235"
                height="150"
                src="https://www.youtube.com/embed/ktlfwnEvJQE"
                title="Seoul Foreign School - Facilities, Video Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
              <p>Virtual tour of Springdale Public School.</p>
            </div>
            <div className="video-item">
              <iframe
                width="235"
                height="150"
                src="https://www.youtube.com/embed/5LTWkLhCPa8"
                title="Mixed Tamil Dance| 22nd Annual Day Celebration | Saraswathi Matric. Hr. Sec. School"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <p>Highlights from the Annual Function 2023.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Gallery;
