"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [result, setResult] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResult("Sending....");

    const payload = new FormData();
    payload.append("access_key", "acdf9cb1-d6cf-411a-b344-b4d2ca605b30");
    payload.append("name", formData.name);
    payload.append("email", formData.email);
    payload.append("subject", formData.subject);
    payload.append("message", formData.message);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error("Error:", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setResult("Error submitting form");
    }
  };

  // Variants for overall container and elements
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const inputVariants = {
    hover: { scale: 1.02 },
    focus: { scale: 1.02 },
  };

  const buttonVariants = {
    hover: {
      scale: 1.05,
      backgroundColor: "#F59E0B",
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95 },
  };

  return (
    <section className="min-h-screen bg-black text-gray-100 py-20 overflow-hidden relative">
      {/* Animated Gold Background Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, rotate: 30, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, rotate: -30, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, rotate: 45, scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 right-0 w-56 h-56 bg-yellow-500 rounded-full filter blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Heading */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-6xl font-serif font-extrabold text-center mb-16 text-yellow-400 drop-shadow-lg"
        >
          Get In Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Contact Information
            </h2>
            <motion.p className="text-gray-300 flex items-center space-x-2" whileHover={{ x: 5 }}>
              <FaEnvelope />
              <span>
                <strong>Email:</strong> FizaNaazz321@gmail.com
              </span>
            </motion.p>
            <motion.p className="text-gray-300 flex items-center space-x-2" whileHover={{ x: 5 }}>
              <FaPhone />
              <span>
                <strong>Phone:</strong> +92 3123632197
              </span>
            </motion.p>
            <motion.p className="text-gray-300 flex items-center space-x-2" whileHover={{ x: 5 }}>
              <FaMapMarkerAlt />
              <span>
                <strong>Address:</strong> Karachi, Pakistan
              </span>
            </motion.p>
            {/* Embedded Google Map */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="mt-8"
            >
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">
                Our Location
              </h3>
              <iframe
                title="Karachi, Pakistan Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3623.5627630168374!2d67.03092941499398!3d24.8607351841979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33d3a1e5c3f63%3A0x4c8a54e0d0d324b4!2sKarachi%2C%20Pakistan!5e0!3m2!1sen!2sus!4v1618439048422!5m2!1sen!2sus"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                className="rounded-xl shadow-lg"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="bg-gray-900 p-8 rounded-xl shadow-2xl"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg text-gray-300 mb-1">
                  Name
                </label>
                <motion.input
                  variants={inputVariants}
                  whileHover="hover"
                  whileFocus="focus"
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your Name"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-gray-300 mb-1">
                  Email
                </label>
                <motion.input
                  variants={inputVariants}
                  whileHover="hover"
                  whileFocus="focus"
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="email@example.com"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg text-gray-300 mb-1">
                  Subject
                </label>
                <motion.input
                  variants={inputVariants}
                  whileHover="hover"
                  whileFocus="focus"
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg text-gray-300 mb-1">
                  Message
                </label>
                <motion.textarea
                  variants={inputVariants}
                  whileHover="hover"
                  whileFocus="focus"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <motion.button
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md shadow-md transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
            {result && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="block mt-4 text-center text-lg text-yellow-400"
              >
                {result}
              </motion.span>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
