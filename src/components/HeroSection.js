import React from "react";
import "../styles/HeroSection.css";
import { ReactTyped } from "react-typed";
import heroBg from "../Images/dp-bg.png";
import heroImg from "../Images/here-Img.png";
const Hero = () => {
  return (
    <>
      <section id="hero" className="hero section dark-background">
        <video
          className="background-video"
          src="https://videos.pexels.com/video-files/8675552/8675552-hd_1920_1080_30fps.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
        <div className="container hero-cont" data-aos="fade-up" data-aos-delay="100">
          <div className="hero-images">
            <div className="hero-bg">
              <img src={heroBg} alt="Background" />
            </div>
            <div className="hero-img">
              <img src={heroImg} alt="Foreground" />
            </div>
          </div>
          <div className="hero-name">
            <h2 className="font-effect-3d-float font-effect-outline">RAVI KUMAR</h2>
            <p className="typing-animation"><b>
              I'm{" "}
              <ReactTyped
                strings={["Web Developer", "Java Developer", "DSA Expert"]}
                typeSpeed={50}
                backSpeed={30}
                loop
              />
            </b>
            </p>
            <div class="Social-media">
              <a href="#facebook"><i class="fab fa-facebook"></i></a>
              <a href="#linkedin"><i class="fab fa-linkedin"></i></a>
              <a href="#instagram"><i class="fab fa-instagram"></i></a>
              <a href="#youtube"><i class="fab fa-youtube"></i></a>
              <a href="#github"><i class="fab fa-github"></i></a>
            </div>
          </div>
          <div className="hire-me mt-4">
          <button className="custom-btn btn-9">Hire Me!</button>
          </div>


        </div>
      </section>
    </>
  );
};

export default Hero;
