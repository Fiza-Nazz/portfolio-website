"use client";

import React from "react";
import { motion } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    title: "Web Development",
    description:
      "Building responsive, high-performance web applications using modern tools like React, Next.js, and Node.js.",
  },
  {
    title: "E-commerce Solutions",
    description:
      "Crafting seamless online shopping experiences with secure payment integrations and intuitive user interfaces.",
  },
  {
    title: "UI/UX Design",
    description:
      "Designing visually appealing and intuitive interfaces that enhance user engagement and brand identity.",
  },
  {
    title: "Mobile App Development",
    description:
      "Developing robust and scalable cross-platform mobile applications tailored to your business needs.",
  },
  {
    title: "SEO Optimization",
    description:
      "Optimizing websites to boost online visibility and drive organic traffic through best SEO practices.",
  },
  {
    title: "Maintenance & Support",
    description:
      "Providing ongoing maintenance and support to ensure your digital platforms run smoothly and efficiently.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50, rotateX: -10 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 60, damping: 20 },
  },
};

export default function Services() {
  return (
    <section className="min-h-screen bg-black text-gray-100 py-20 overflow-hidden relative">
      {/* Background Animated Gold Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          rotate: 30,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.15,
          rotate: -30,
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{
          opacity: 0.1,
          rotate: 45,
          scale: [1, 1.05, 1],
        }}
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
          Our Services
        </motion.h1>

        {/* Services Grid */}
        <motion.div
          className="grid gap-12 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {servicesData.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{
                scale: 1.05,
                rotate: 1,
                boxShadow: "0px 8px 24px rgba(255, 196, 0, 0.5)",
              }}
              className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 backdrop-blur-sm"
            >
              <h2 className="text-3xl font-bold text-yellow-400 mb-4">
                {service.title}
              </h2>
              <p className="text-gray-300 text-lg">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
