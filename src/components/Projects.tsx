"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

interface Project {
  title: string;
  image: string;
  description: string;
  category: string;
  tech: string[];
  link?: string;
}

// Sample project data (update images and links as needed)
const projects: Project[] = [
  {
    title: "ToDo App",
    image: "/todo.png",
    description:
      "A productivity app built with TypeScript and JavaScript for managing tasks efficiently.",
    category: "TypeScript",
    tech: ["TypeScript", "Nodejs"],
    link: "https://github.com/Fiza-Qureshi22/Fiza_Todo_app.git",
  },
  {
    title: "ATM",
    image: "/atm.png",
    description:
      "An interactive adventure game developed with TypeScript featuring engaging gameplay and animations.",
    category: "TypeScript",
    tech: ["TypeScript", "Nodejs"],
    link: "https://github.com/Fiza-Qureshi22/fiza_Atm.git",
  },
  {
    title: "Number Guessing Game",
    image: "/number.png",
    description:
      "A dynamic countdown timer built with TypeScript to track events in real-time.",
    category: "TypeScript",
    tech: ["TypeScript", "Nodejs"],
    link: "https://github.com/Fiza-Qureshi22/fiza_numberGessing_game.git",
  },
  {
    title: "Currency Converter",
    image: "/currency.png",
    description:
      "A utility tool for converting currencies, built with TypeScript and JavaScript.",
    category: "TypeScript",
    tech: ["TypeScript", "Nodejs"],
    link: "https://github.com/Fiza-Qureshi22/Fiza_Currency_Converter.git",
  },
  {
    title: "Word Counter",
    image: "/word.png",
    description:
      "An app to count words in text, built with TypeScript and JavaScript.",
    category: "TypeScript",
    tech: ["TypeScript", "Nodejs"],
    link: "https://github.com/Fiza-Qureshi22/Fiza_Word_Counter.git",
  },
  {
    title: "Calculator",
    image: "/calculator.png",
    description:
      "A calculator for ATM transactions built with TypeScript for quick computations.",
    category: "TypeScript",
    tech: ["TypeScript", "Nodejs"],
    link: "https://github.com/Fiza-Qureshi22/fiza_cli_calculator.git",
  },
  {
    title: "Morent Rental E-Commerce Website",
    image: "/morent.png",
    description:
      "A rental platform built with Next.js and Tailwind CSS offering a seamless e-commerce experience for property rentals.",
    category: "E-commerce",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Apis",
      "Sanity",
      "Framer Motion",
      "Authentication",
      "Dynamic Structure",
    ],
    link: "https://morent-marketplace-jade.vercel.app/",
  },
  {
    title: "E-Commerce Fake Store Website",
    image: "/fake.png",
    description:
      "A fully functional e-commerce store developed with React and Next.js featuring intuitive UI and secure checkout.",
    category: "E-commerce",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "Apis",
      "Sanity",
      "Framer Motion",
      "Authentication",
      "Dynamic Structure",
    ],
    link: "https://fake-store-three-green.vercel.app/",
  },
  {
    title: "Dynamic Resume",
    image: "/resume.png",
    description:
      "A dynamic resume platform built with Next.js that features real-time content updates and optimized performance.",
    category: "Dynamic Resume",
    tech: ["Html", "Css", "TypeScript"],
    link: "https://fiza-dynamic-resume.netlify.app/",
  },
]

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

export default function Projects() {
  // Filtering state & available categories
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [activeProject, setActiveProject] = React.useState<Project | null>(null);
  const categories = ["All", "TypeScript", "E-commerce", "Blog"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="relative min-h-screen bg-black text-yellow-400 py-20 px-4">
      {/* Gold Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1.2 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1.5 }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-500 rounded-full blur-2xl"
        />
      </div>

      <div className="relative container mx-auto">
        {/* Page Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-5xl font-bold text-center mb-4 font-serif bg-gradient-to-r from-yellow-500 to-yellow-400 bg-clip-text text-transparent"
        >
          Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center text-lg md:text-xl mb-8 font-serif text-gray-200 max-w-2xl mx-auto"
        >
          Discover innovative web solutions built with cutting-edge technologies that merge creativity and technical excellence.
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

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              onClick={() => setActiveProject(project)}
              className="bg-black bg-opacity-75 rounded-xl p-6 border border-yellow-500 shadow-2xl cursor-pointer transform transition-all duration-300 hover:-translate-y-1"
            >
              <Image
                src={project.image}
                alt={project.title}
                width={500}
                height={300}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-bold mb-2 font-serif">{project.title}</h3>
              <p className="text-gray-300 font-serif mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-2 py-1 text-xs rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal for Project Details */}
      <AnimatePresence>
        {activeProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
              className="bg-black rounded-xl p-8 border border-yellow-500 shadow-2xl max-w-lg w-full relative"
            >
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 text-yellow-500 hover:text-white text-2xl"
              >
                &times;
              </button>
              <Image
                src={activeProject.image}
                alt={activeProject.title}
                width={800}
                height={400}
                className="w-full h-64 object-cover rounded-md mb-6"
              />
              <h3 className="text-3xl font-bold mb-4 font-serif text-yellow-500">
                {activeProject.title}
              </h3>
              <p className="text-gray-300 font-serif mb-6">
                {activeProject.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {activeProject.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="bg-yellow-500 text-black px-3 py-1 text-sm rounded-full font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {activeProject.link && (
                <Link
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-yellow-500 text-black px-6 py-2 rounded-full font-semibold hover:bg-yellow-600 transition-colors duration-300"
                >
                  View Live Demo
                </Link>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
