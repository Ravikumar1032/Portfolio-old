import React from "react";
import "../styles/About.css";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import MyPic from "../Images/Nav-dp.jpeg";
// import bgImg from "../Images/About-Img.png";
const About = () => {
  const [ref, inView] = useInView({ threshold: 0.2 });

  const animationVariants = {
    hiddenLeft: { y: "0vw", opacity: 0 },
    hiddenRight: { y: "0vw", opacity: 0 },
    hiddenBottom: { y: "5vw", opacity: 0 },
    // hiddenBottom2: { y: "10vw", opacity: 0 },
    visible: { x: 0, opacity: 1 },
    visibleY: { y: 0, opacity: 1 },
  };

  return (
    <section id="about" className="container py-5">
      {/* Section Title */}
      <h1 className="text-center text-head"><b>About</b></h1>
      <div className="container text-center mb-5">

        <motion.div
          className=""
          variants={animationVariants}
          initial="hiddenBottom"
          animate={inView ? "visibleY" : "hiddenBottom"}
          transition={{ duration: 0.2, type: "spring", stiffness: 30 }}
        >
          <p>
            Hello! I’m a passionate and dedicated fresher, set to graduate in 2025, with a keen interest in web development and modern technologies. I enjoy creating user-friendly, responsive, and visually appealing web applications using tools like React JS. I'm committed to continuous learning and thrive on turning ideas into impactful digital solutions.
          </p>
        </motion.div>
      </div>

      {/* Section Content */}
      <div className="container">
        <div className="row gy-4 justify-content-center align-items-center" ref={ref}>
          {/* Profile Image */}
          <motion.div
            className="col-md-6 col-lg-4 text-center mb-4 mb-md-0"
            variants={animationVariants}
            initial="hiddenBottom"
            animate={inView ? "visibleY" : "hiddenBottom"}
            transition={{ duration: 0.2, type: "spring", stiffness: 30 }}
          >
            <div>
            {/* <img
              src={bgImg}
              className="img-fluid rounded Profile"
              alt="Profile"
            /> */}
            <img
              src={MyPic}
              className="img-fluid rounded Profile"
              alt="Profile"
            />
            </div>
          </motion.div>

          {/* Profile Content */}
          <motion.div
            className="col-lg-7 content"
            variants={animationVariants}
            initial="hiddenBottom"
            animate={inView ? "visibleY" : "hiddenBottom"}
            transition={{ duration: 0.4, type: "spring", stiffness: 50 }}
          >
            <h2 className="fw-bold">FullStack &amp; Java Developer</h2>
            <p className="fst-italic py-3">
              A dedicated Computer Science Engineering student with hands-on experience in programming, web development, and software projects. Proficient in Java, SQL, and ReactJS, with a passion for problem-solving and building dynamic web applications.
            </p>
            <div className="row">
              {/* Left Info List */}
              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Birthday:</strong>
                    <span> 26 Mar 2001</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <span> +91 8639372906</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>City:</strong>
                    <span> Guntur</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Website:</strong>
                    <span> www.example.com</span>
                  </li>
                </ul>
              </div>

              {/* Right Info List */}
              <div className="col-lg-6">
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Age:</strong>
                    <span> 24</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Degree:</strong>
                    <span> B-Tech</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <span> ravikumarnaik1015@gmail.com</span>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                    <span> Available</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="py-3">
              Outside of coding, I love exploring new trends in technology and finding creative ways to solve problems. I’m eager to contribute to projects that challenge me and provide opportunities for growth.

            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
