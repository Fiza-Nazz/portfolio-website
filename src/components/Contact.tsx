"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send email or API call)
    console.log(formData);
    // Reset form if needed
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="min-h-screen bg-black text-gray-100 py-20 overflow-hidden relative">
      {/* Animated Gold Background Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, rotate: 30, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15, rotate: -30, scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1, rotate: 45, scale: [1, 1.05, 1] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 right-0 w-48 h-48 bg-yellow-500 rounded-full filter blur-2xl"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Section Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-6xl font-serif font-extrabold text-center mb-16 text-yellow-400 drop-shadow-lg"
        >
          Get In Touch
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold text-yellow-400 mb-4">
              Contact Information
            </h2>
            <p className="text-gray-300 mb-2">
              <strong>Email:</strong>FizaNaazz321@gmail.com
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Phone:</strong> +92 3123632197
            </p>
            <p className="text-gray-300 mb-2">
              <strong>Address:</strong> karachi pakistan
            </p>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg text-gray-300 mb-1">
                  Name
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg text-gray-300 mb-1">
                  Email
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-lg text-gray-300 mb-1">
                  Subject
                </label>
                <motion.input
                  whileFocus={{ scale: 1.02 }}
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg text-gray-300 mb-1">
                  Message
                </label>
                <motion.textarea
                  whileFocus={{ scale: 1.02 }}
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full p-3 rounded-md bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                type="submit"
                className="w-full py-3 bg-yellow-500 text-black font-bold rounded-md shadow-md hover:bg-yellow-400 transition-colors duration-300"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
