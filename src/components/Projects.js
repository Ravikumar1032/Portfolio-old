import React from "react";
import { motion } from "framer-motion";
import "../styles/Portfolio.css";
// import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const projects = [
    {
        title: "Personal Portfolio",
        description: "A responsive portfolio showcasing my projects and skills.",
        technologies: ["React", "CSS", "Bootstrap"],
        image: "https://d502jbuhuh9wk.cloudfront.net/courses/65621bcfe4b0657795c8d43b/65621bcfe4b0657795c8d43b_scaled_cover.jpg?v=7",
        github: "https://github.com/Ravikumar1032/portfolio",
        live: "#",
    },
    {
        title: "Loan Web Application",
        description: "A full-stack loan management system with user authentication, loan application tracking, and an admin panel.",
        technologies: ["MERN", "MongoDB", "Express", "React", "Node.js"],
        image: "https://i.pinimg.com/736x/91/f5/58/91f55880c9588fd59ba450e7aa91062a.jpg",
        github: "https://github.com/Ravikumar1032/Loan-Web-App",
        live: "#",
    },
    {
        title: "Kid Activity Assignment App",
        description: "An app to assign and manage activities for the kids by parents",
        technologies: ["MERN"],
        image: "https://t3.ftcdn.net/jpg/02/14/87/96/240_F_214879686_R3HFJlk6WLr1kcdvy6Q9rtNASKN0BZBS.jpg",
        github: "https://github.com/Ravikumar1032/Kid-Activity-Assignment-App",
        live: "https://github.com/Ravikumar1032/Kid-Activity-Assignment-App",
    },

    
];

const Portfolio = () => {
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.5,
                type: "spring",
            },
        }),
        exit: { opacity: 0, y: 50 },
    };

    const openPortfolioInNewTab = () => {
        window.open('/portfolio', '_blank');
      };

    return (
        <motion.section
            id="portfolio"
            className="portfolio section py-5"
            initial="hidden"
            animate="visible"
            exit="exit"
        >
            <div className="container">
                <h2 className="text-center project-title pb-3">
                    <b>My Projects</b>
                </h2>
                <div className="row">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="col-md-6 col-lg-4 mb-4"
                            custom={index}
                            initial="hidden"
                            animate="visible"
                            // exit="exit"
                            variants={cardVariants}
                        >
                            <div className="card portfolio-card">
                                <div className="portfolio-image-wrapper">
                                    <img
                                        src={project.image}
                                        className="card-img-top portfolio-image"
                                        alt={project.title}
                                    />
                                </div>
                                <div className="card-body">
                                    <div className="btn-con">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn btn-source"
                                        >
                                            Source Code
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        // className="btn "
                                        >
                                            <i class="bi bi-arrow-up-right-circle btn-live px-1"></i>
                                        </a>
                                    </div>
                                    <h5 className="card-title">
                                        <b>{project.title}</b>
                                    </h5>
                                    <p className="card-text">{project.description}</p>
                                    <p>
                                        <strong>Technologies:</strong> {project.technologies.join(", ")}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    ))}
                </div>
                <div className="read-more d-flex justify-content-center">
                <button onClick={openPortfolioInNewTab}>Read More</button>
                </div>
            </div>
        </motion.section>
    );
};

export default Portfolio;
