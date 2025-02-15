"use client";

import React from "react";
import { motion } from "framer-motion";

interface ExperienceItem {
  role: string;
  company: string;
  duration: string;
  description: string;
  expertise: string[];
}

const experienceData: ExperienceItem[] = [
  {
    role: "Website Developer",
    company: "ABC Tech Solutions",
    duration: "Jan 2023 - Present",
    description:
      "Developing responsive, user-friendly websites using modern tools like React, Next.js, and Tailwind CSS. Continuously evolving my skills by integrating the latest web technologies to deliver high-quality digital experiences.",
    expertise: ["React", "Next.js", "Tailwind CSS", "JavaScript"],
  },
  {
    role: "Frontend Developer",
    company: "XYZ Digital Agency",
    duration: "June 2021 - Dec 2022",
    description:
      "Crafted engaging user interfaces and improved website performance. Collaborated with cross-functional teams to produce design-centric and highly functional digital solutions.",
    expertise: ["HTML5", "CSS3", "JavaScript", "Figma"],
  },
  // Add more experience items here if needed
];

const timelineVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: "spring",
      stiffness: 50,
    },
  }),
};

export default function CV() {
  return (
    <section className="min-h-screen bg-black text-gray-100 py-20 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05, rotate: 20, scale: 1.3 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-0 left-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.05, rotate: -20, scale: 1.3 }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "mirror", delay: 2 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500 rounded-full filter blur-2xl"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header: Name */}
        <motion.h1
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-6xl font-extrabold text-center text-yellow-400 mb-8 drop-shadow-lg"
        >
          Fiza Nazz
        </motion.h1>

        {/* Professional Summary */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
            Professional Summary
          </h2>
          <p className="text-gray-200 leading-relaxed">
            Frontend Developer with 2 years of experience in designing and
            developing responsive web applications. Proficient in HTML, CSS,
            JavaScript, and modern frameworks such as React.js, Next.js, and Node.js.
            Experienced in using Tailwind CSS and Framer Motion for creating dynamic
            and interactive user experiences. Strong problem-solving skills and keen
            attention to detail.
          </p>
        </motion.section>

        {/* Experience Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
            Experience
          </h2>
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 top-0 h-full w-1 bg-yellow-500"></div>
            <div className="space-y-12 ml-12">
              {experienceData.map((item, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={timelineVariant}
                  whileHover={{ scale: 1.02 }}
                  className="relative p-6 bg-gray-900 rounded-lg shadow-lg hover:shadow-2xl transition-shadow duration-300"
                >
                  {/* Timeline dot */}
                  <div className="absolute -left-8 top-4 flex items-center justify-center w-6 h-6 bg-yellow-500 rounded-full ring-4 ring-black"></div>

                  <h2 className="text-2xl font-serif font-bold text-yellow-400">
                    {item.role}
                  </h2>
                  <h3 className="text-xl font-semibold text-gray-300 mt-1">
                    {item.company}
                  </h3>
                  <p className="text-sm font-mono text-gray-400 mt-1">
                    {item.duration}
                  </p>
                  <p className="mt-4 font-sans text-gray-200">
                    {item.description}
                  </p>
                  {item.expertise && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.expertise.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-yellow-600 text-black text-sm font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Education & Contact Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
            Education & Contact
          </h2>
          <motion.div
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="p-6 bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
          >
            <h3 className="text-2xl font-bold text-yellow-400">
              Master in Islamic Studies (4th Semester)
            </h3>
            <p className="text-gray-300 mt-1 italic">
              Darsus Salam University, Karachi, Pakistan
            </p>
            <p className="mt-1 text-gray-300 italic">
              Expected Masters: End of 2027
            </p>
            <div className="mt-4 text-gray-200">
              <p>Karachi, Pakistan</p>
              <p>Phone: 03123632197</p>
              <p>Email: FizaNaazz321@gmail.com</p>
              <p>
                Portfolio:{" "}
                <a
                  href="https://fiza-qureshiportfoliof.netlify.app/"
                  className="text-yellow-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  fiza-qureshiportfoliof.netlify.app
                </a>
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-4">
            {[
              "HTML",
              "CSS",
              "JavaScript",
              "TypeScript",
              "React.js",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Framer Motion",
              "Git",
              "VS Code",
              "Responsive Design",
              "Cross-browser Compatibility",
              "UI/UX Best Practices",
            ].map((skill, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-full shadow-md"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-yellow-500 mb-4 border-b border-yellow-500 pb-2">
            Projects
          </h2>
          <div className="space-y-6">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="p-6 bg-gray-800 rounded-lg shadow-lg border-l-4 border-yellow-500"
            >
              <h3 className="text-2xl font-bold text-yellow-400">
                Responsive / E-commerce / Portfolio Website
              </h3>
              <p className="mt-3 text-gray-200 leading-relaxed">
                Developed a responsive website using React.js, Next.js, and Tailwind CSS.
                Key contributions include feature implementation, performance optimization, and an engaging user experience.
              </p>
              <div className="mt-4">
                <a
                  href="https://fiza-qureshi-portfoliof.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:underline mr-4"
                >
                  Live Demo
                </a>
                <a
                  href="https://morent-marketplace-jade.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-500 hover:underline"
                >
                  Marketplace Demo
                </a>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Download CV Section */}
        <motion.section
          variants={fadeInUp}
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <a
            href="/FizaCV.pdf"
            download
            className="inline-block px-10 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-transform duration-300 transform hover:scale-105 font-serif"
          >
            Download CV
          </a>
        </motion.section>
      </div>
    </section>
  );
}

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};
