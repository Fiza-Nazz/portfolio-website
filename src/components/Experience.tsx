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
    company: "  SMIT (Saylani Mass It Training)",
    duration: "Jan 2023 - Present",
    description:"Crafted engaging user interfaces and improved website performance. Collaborated with cross-functional teams to produce design-centric and highly functional digital solutions.",
     
    expertise:  ["HTML5", "CSS3", "JavaScript","TypeScript", "Figma",],
  },

  {
    role: "Frontend Developer",
    company: "Giaic (Governor It Initiative)",
    duration: "February 2024 - present",
    description:
    "Developing responsive, user-friendly websites using modern tools like React, Next.js, and Tailwind CSS. Continuously evolving my skills by integrating the latest web technologies to deliver high-quality digital experiences.",
    expertise:  ["React.js", "Next.js", "Tailwind CSS", "JavaScript", "Custom Css", "Framer Motion","React-Icons","Ui-Ux Designer",],
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

export default function Experience() {
  return (
    <section className="min-h-screen bg-black text-gray-100 py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Animated Heading with Creative Font */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 50 }}
          className="text-5xl font-serif font-extrabold text-center mb-12 text-yellow-400"
        >
          My Experience
        </motion.h1>

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
      </div>
    </section>
  );
}
