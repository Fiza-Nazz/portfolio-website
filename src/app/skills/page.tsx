"use client";

import React from "react";
import { motion } from "framer-motion";

interface Skill {
  title: string;
  description: string;
  category: string;
}

// Define your skills along with their categories
const skills: Skill[] = [
  {
    title: "HTML5",
    description: "Semantic markup with modern HTML standards.",
    category: "Core",
  },
  {
    title: "CSS3",
    description: "Responsive designs, animations, and modern styling.",
    category: "Core",
  },
  {
    title: "JavaScript",
    description: "ES6+, asynchronous programming, and DOM manipulation.",
    category: "Core",
  },
  {
    title: "React",
    description: "Component-based development and hooks for dynamic UI.",
    category: "Frameworks",
  },
  {
    title: "Next.js",
    description:
      "Server-side rendering, static generation, and powerful routing.",
    category: "Frameworks",
  },
  {
    title: "TypeScript",
    description: "Typed JavaScript for scalable and maintainable code.",
    category: "Core", // TypeScript now appears under Core
  },
  {
    title: "Tailwind CSS",
    description:
      "Utility-first CSS framework for rapid and responsive UI development.",
    category: "Frameworks",
  },
  {
    title: "Framer Motion",
    description: "Smooth animations and interactive transitions.",
    category: "Frameworks",
  },
  {
    title: "Git & GitHub",
    description:
      "Version control and collaborative development best practices.",
    category: "Tools",
  },
];

// Framer Motion variants for container and cards
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  hover: { scale: 1.05 },
};

export default function Skills() {
  // Filter functionality: default category "All"
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const categories = ["All", "Core", "Frameworks", "Tools"];

  // Filter skills based on the selected category
  const filteredSkills =
    selectedCategory === "All"
      ? skills
      : skills.filter((skill) => skill.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-black to-gray-900 text-yellow-400 py-20 px-4">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full opacity-10 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-500 rounded-full opacity-10 blur-2xl"
        />
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/2 left-1/2 w-64 h-64 border border-yellow-500 rounded-full opacity-20"
        />
      </div>

      <div className="relative container mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
        >
          My Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-lg md:text-xl mb-8 font-serif text-gray-200 max-w-2xl mx-auto"
        >
          A comprehensive skill set in modern web development and design.
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-4 mb-10">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className={`px-4 py-2 rounded-full border transition-colors duration-300 font-semibold ${
                selectedCategory === category
                  ? "bg-yellow-500 text-black"
                  : "bg-transparent text-yellow-500 border-yellow-500"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredSkills.map((skill, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-black bg-opacity-75 rounded-lg p-6 border border-yellow-500 shadow-lg cursor-pointer"
            >
              <h3 className="text-2xl font-semibold mb-2 font-serif">
                {skill.title}
              </h3>
              <p className="text-gray-300 font-serif">{skill.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
