import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png"; // Placeholder for the logo image

function Home() {
  return (
    <div className="home">
      <div className="hero">
        {/* <img src={logo} alt="Springdale Public School Logo" className="logo" /> */}
        <h1>Springdale Public School</h1>
        <p>
          Welcome to Springdale Public School, where we nurture young minds for
          a brighter future.
        </p>
      </div>
      <Carousel className="carousel">
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `url("../src/assets/sports.jpg")`,
              height: "50vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <Carousel.Caption>
            <h3>Annual Sports Day</h3>
            <p>Celebrating Excellence in Sports</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `url("../src/assets/lab.jpg")`,
              height: "50vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <Carousel.Caption>
            <h3>Science Exhibition</h3>
            <p>Showcasing Student Innovations</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div
            className="carousel-image"
            style={{
              backgroundImage: `url("../src/assets/schooldance.jpg")`,
              height: "50vh",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <Carousel.Caption>
            <h3>Cultural Fest</h3>
            <p>Embracing Diversity and Creativity</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Home;
