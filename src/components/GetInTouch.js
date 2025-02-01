import React, { useState } from 'react';
import { motion } from 'framer-motion'; // Import Framer Motion
import '../styles/GetInTouch.css';

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4 pb-5 text-center text-head ">Get in Touch</h2>
      <div className="row">
        {/* Images Section */}
        <div className="col-md-6 mb-4">
          <motion.img
            src={`https://picsum.photos/500/300?random=${Math.floor(Math.random() * 1000)}`}
            alt="Random"
            className="img-fluid rounded"
            initial={{ y: 0 }}
            animate={{ y: -20 }}
            transition={{
              y: {
                yoyo: Infinity,
                duration: 2,
                ease: "easeInOut",
              },
            }}
          />
        </div>

        {/* Form Section */}
        <div className="col-md-6">
          <form>
            {/* Name Field */}
            <div className="mb-3">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="form-control"
              />
            </div>

            {/* Email Field */}
            <div className="mb-3">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="form-control"
              />
            </div>

            {/* Message Field */}
            <div className="mb-3">
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Enter your message"
                className="form-control"
                rows="4"
              />
            </div>

            {/* Submit Button */}
            <button type="submit" className="btn btn-primary w-100">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
