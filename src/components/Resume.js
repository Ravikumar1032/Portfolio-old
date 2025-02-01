import React from "react";
// import "../styles/About.css";
import '../styles/Resume.css';
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
// import MyPic from "../Images/Nav-dp.jpeg";
import MyResume from "../Resume/Resume.pdf";
// import bgImg from "../Images/About-Img.png";
const Resume1 = () => {
    const [ref, inView] = useInView({ threshold: 0.2 });

    const animationVariants = {
        hiddenLeft: { y: "0vw", opacity: 0 },
        hiddenRight: { y: "0vw", opacity: 0 },
        hiddenBottom: { y: "5vw", opacity: 0 },
        visible: { x: 0, opacity: 1 },
        visibleY: { y: 0, opacity: 1 },
    };

    return (
        <section id="about" className="container py-5">
            {/* Section Title */}
            <h1 className=" text-head"><b>Resume</b></h1>
            <div className="container  mb-5">

                <motion.div
                    className=""
                    variants={animationVariants}
                    initial="hiddenBottom"
                    animate={inView ? "visibleY" : "hiddenBottom"}
                    transition={{ duration: 0.2, type: "spring", stiffness: 30 }}
                >

                    <div className="col-lg-8 mx-auto text-justify">
                        <p>
                            I am <b>Mudhavath Ravikumar Naik</b>, a passionate and driven Computer Science Engineering student at
                            <b> Rajiv Gandhi University of Knowledge Technologies, Nuzvid</b>, graduating in 2025. With a strong foundation
                            in full-stack development and problem-solving, I have hands-on experience in building dynamic and scalable web applications.
                            My expertise includes working with modern technologies such as ReactJS, Java, SQL, and Spring Boot.
                        </p>
                        <p>
                            I have honed my skills through real-world exposure during my internship at Edubot, where I contributed to the
                            development of responsive web applications. I am also a dedicated problem-solver, having solved over
                            <b> 200 LeetCode problems</b>, demonstrating my ability to tackle complex challenges effectively. I am eager to contribute
                            to impactful projects and stay updated with advancements in the tech industry.
                        </p>
                    </div>
                </motion.div>
            </div>

            {/* Section Content */}
            <div className="container">
                <div className="row gy-4 justify-content-center align-items-center" ref={ref}>

                    {/* Profile Content */}
                    <motion.div
                        className="col-lg-7 content"
                        variants={animationVariants}
                        initial="hiddenBottom"
                        animate={inView ? "visibleY" : "hiddenBottom"}
                        transition={{ duration: 0.6, type: "spring", stiffness: 50 }}
                    >
                        {/* Skills */}
                        <h4><b>Achievements</b></h4>
                        <ul>
                            <li><b>LeetCode:</b> Completed over 200+ problems, earning 50 Days and 100 Days badges, showcasing strong problem-solving skills</li>
                            <li><b>Internship:</b> Received an Internship Completion Certificate from Edubot Software Services</li>
                            <li><b>Certifications:</b>
                                <ul>
                                    <li>Completed ‘Fundamentals of Web Development’ course on Udemy</li>
                                    <li>Completed ‘Git & GitHub’ course on LinkedIn Learning</li>
                                </ul>
                            </li>
                            <li><b>Academic Excellence:</b> Secured Mandal First in Secondary Education(10th Class)</li>
                            <li><b>Project Showcase:</b> Developed several projects including a Kid Activity Assignment App, Exam Management System, and Tic-Tac-Toe game with AI</li>
                            <li><b>Portfolio:</b> Built a personal portfolio to highlight technical and professional skills</li>
                        </ul>


                        {/* Buttons */}
                        <div className="mt-4 text-center">
                            <button className="btn btn-primary me-3" data-aos="zoom-in">Hire Me!</button>
                            <button className="btn gradient-button" data-aos="zoom-in">
                                <a
                                    href={MyResume}
                                    download="Ravikumar_CV.pdf"
                                    className="text-white text-decoration-none"
                                >
                                    Download CV
                                </a>
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Resume1;
