import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/Skills.css";

const cleanPercentage = (percentage) => {
    const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0;
    const isTooHigh = percentage > 100;
    return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

const Circle = ({ colour, percentage }) => {
    const r = 70;
    const circ = 2 * Math.PI * r;
    const strokePct = ((100 - percentage) * circ) / 100;
    return (
        <circle
            r={r}
            cx={100}
            cy={100}
            fill="transparent"
            stroke={strokePct !== circ ? colour : ""}
            strokeWidth={"2rem"}
            strokeDasharray={circ}
            strokeDashoffset={percentage ? strokePct : circ}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0px 4px 6px lightgrey)" }}
        ></circle>
    );
};



const Text = ({ percentage }) => {
    return (
        <text
            x="50%"
            y="50%"
            dominantBaseline="central"
            textAnchor="middle"
            fontSize={"1.5em"}
        >
            {percentage.toFixed(0)}%
        </text>
    );
};

const Pie = ({ percentage }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
        if (percentage > 0) {
            let start = 0;
            const duration = 1000;
            const increment = percentage / (duration / 10); 
            const interval = setInterval(() => {
                start += increment;
                if (start >= percentage) {
                    clearInterval(interval);
                    setAnimatedPercentage(percentage);
                } else {
                    setAnimatedPercentage(start);
                }
            }, 10); 
        }
    }, [percentage]);

    const pct = cleanPercentage(animatedPercentage);

    return (
        <svg width={200} height={200}>
            <g transform={`rotate(-90 100 100)`}>
                <Circle colour="lightgrey" percentage={100} />
                <Circle colour="url(#gradient)" percentage={pct} />
            </g>
            <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="10%" stopColor="#001dff" />
                    <stop offset="80%" stopColor="#b700ff" />
                </linearGradient>
            </defs>
            <Text percentage={pct} />
        </svg>
    );
};

const Skills = () => {
    const { ref, inView } = useInView({ threshold: 0.2 });

    const skills = [
        { name: "Java", percentage: 85 },
        { name: "JavaScript", percentage: 70 },
        { name: "Web Dev", percentage: 70 },
        { name: "MySQL", percentage: 85 },
        { name: "MongoDB", percentage: 65 },
        { name: "React JS", percentage: 75 },
        { name: "Git & GitHub", percentage: 70 },
    ];

    return (
        <section id="skills" className="container-fluid py-5">
            <div className="container">
            <h1 className="text-center mb-4 skill-text"><b>Skills</b></h1>
            <div className="row justify-content-center" ref={ref}>
                {skills.map((skill, index) => (
                    <div
                        className={`col-md-3 col-sm-6 col-6 text-center mb-3 ${inView ? "fadeIn" : ""}`}
                        key={index}
                        style={{ animation: inView ? "fadeIn 0.8s ease-in-out" : "none" }}
                    >
                        <Pie percentage={inView ? skill.percentage : 0} />
                        <h5 className="mt-3">{skill.name}</h5>
                    </div>
                ))}
            </div>
            </div>
        </section>
    );
};

export default Skills;
