import React, { useState, useEffect } from "react";
import "../styles/CertificateGallery.css";
import Image1 from "../Certificates/CertificateOfCompletion_AI_Productivity.jpg"
import Image2 from "../Certificates/CertificateOfCompletion_Git.jpg"
import Image3 from "../Certificates/CertificateOfCompletion_Introduction_to_Prompt_Engineering_for_Generative_AI.jpg"
import Image4 from "../Certificates/Edubot_InternShip_completion_certificates.jpg"
import Image5 from "../Certificates/Fundamentals_of_Web_Devolopment.jpg"


const CertificateGallery = () => {
  const certificates = [
    { src: Image1, alt: "Certificate of Completion: AI Productivity" },
    { src: Image2, alt: "Certificate of Completion: Git" },
    { src: Image3, alt: "Certificate of Completion: Introduction to Prompt Engineering for Generative AI" },
    { src: Image4, alt: "Edubot Internship Completion Certificate" },
    { src: Image5, alt: "Fundamentals of Web Development Certificate" },
  ];

  const [currentIndex, setCurrentIndex] = useState(2); // Start with the third image in focus

  // Automatically slide images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
    }, 3000);
    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [certificates.length]);

  // Handle clicking on a specific image
  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="certificates py-5">
      <div className="text-center">
        <h1 className="text-head"><b>Certificates</b></h1>
      </div>
      <div className="gallery-container">
        {certificates.map((cert, index) => {
          // Calculate the class based on the position relative to the currentIndex
          const position =
            (index - currentIndex + certificates.length) % certificates.length;

          return (
            <img
              key={index}
              className={`gallery-item position-${position}`}
              src={cert.src}
              alt={cert.alt}
              onClick={() => handleImageClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CertificateGallery;
