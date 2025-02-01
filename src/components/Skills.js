import React, { useEffect, useRef } from "react";
import "../styles/Skills.css"; // Include your CSS file

const Skills = () => {
    const skillSections = useRef([]); // Ref to store multiple SVGs

    // Define the skills array inside the component
    const skills = [
        { name: "Java", percentage: 85 },
        { name: "JavaScript", percentage: 70 },
        { name: "Web Dev", percentage: 70 },
        { name: "MySQL", percentage: 85 },
        { name: "MongoDB", percentage: 65 },
        { name: "React JS", percentage: 75 },
        { name: "Git & GitHub", percentage: 70 },
        { name: "REST Api", percentage: 50 },
    ];

    const checkIfInView = () => {
        skillSections.current.forEach((skill) => {
            if (!skill) return;
            const rect = skill.getBoundingClientRect();
            const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

            if (inView) {
                const percent = parseInt(skill.dataset.countervalue, 10);
                const circle = skill.querySelector("circle.bar--animated");
                const radius = circle.r.baseVal.value;
                const circumference = 2 * Math.PI * radius;
                const strokeDashOffset =
                    circumference - (percent * circumference) / 100;

                circle.style.transition = "stroke-dashoffset 1.2s ease";
                circle.style.strokeDashoffset = strokeDashOffset;

                const text = skill.querySelector("text.countervalue");
                let counter = 0;
                const interval = setInterval(() => {
                    if (counter >= percent) {
                        clearInterval(interval);
                    } else {
                        counter += 1;
                        text.textContent = `${counter}%`;
                    }
                }, 1000 / percent);
            } else {
                // Reset animation for scroll-back
                const circle = skill.querySelector("circle.bar--animated");
                circle.style.strokeDashoffset = "219.91148575129";
            }
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", checkIfInView);
        window.addEventListener("load", checkIfInView);
        return () => {
            window.removeEventListener("scroll", checkIfInView);
            window.removeEventListener("load", checkIfInView);
        };
    }, []);

    return (
        <div className="container-fluid skills py-4">
            <section className=" svg-container d-flex flex-wrap justify-content-center flex-row">
            <h1 className="text-center mb-4 skill-text"><b>Skills</b></h1>
                <div className="row d-flex flex-wrap justify-content-center ">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="col-lg-3 col-md-4 col-sm-6 col-5 text-center mb-4"
                        >
                            <svg
                                className="radial-progress"
                                data-countervalue={skill.percentage}
                                viewBox="0 0 80 80"
                                ref={(el) => (skillSections.current[index] = el)}
                            >
                                <circle
                                    className="bar-static"
                                    cx="40"
                                    cy="40"
                                    r="35"
                                ></circle>
                                <circle
                                    className="bar--animated"
                                    cx="40"
                                    cy="40"
                                    r="35"
                                    style={{ strokeDashoffset: "219.91148575129" }}
                                ></circle>
                                <text
                                    className="countervalue start"
                                    x="50%"
                                    y="57%"
                                    transform="matrix(0, 1, -1, 0, 80, 0)"
                                >
                                    0%
                                </text>
                            </svg>
                            <p className="text-white mt-2"><b>{skill.name}</b></p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Skills;
