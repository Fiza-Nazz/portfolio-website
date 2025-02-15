/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

// TimelineItem component with a subtle hover scale effect
function TimelineItem({
  year,
  title,
  description,
}: {
  year: string;
  title: string;
  description: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileHover={{ scale: 1.02 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-6 bg-black bg-opacity-75 rounded-lg shadow-md border border-yellow-500"
    >
      <div className="absolute -left-5 top-0 w-10 h-10 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold">
        {year}
      </div>
      <h3 className="text-2xl font-semibold mb-2 text-yellow-400 font-serif">
        {title}
      </h3>
      <p className="text-gray-300 font-serif">{description}</p>
    </motion.div>
  );
}

export default function AboutPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  // State to toggle the visibility of the detailed content
  const [contentVisible, setContentVisible] = React.useState(false);

  // Sample timeline data
  const timeline = [
    {
      year: "2023",
      title: "Beginnings",
      description:
        "I launched my career by mastering the basics of HTML, CSS, and JavaScript. TypeScript, and Nodejs",
    },
    {
      year: "2023",
      title: "Growth",
      description:
        "I expanded my skillset and built sophisticated projects with modern technologies.",
    },
    {
      year: "2024",
      title: "Recognition",
      description:
        "My innovative digital solutions earned accolades from industry peers.",
    },
    {
      year: "2025",
      title: "Expansion",
      description:
        "I continue pushing boundaries and exploring new tech horizons.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-yellow-400 relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "mirror" }}
          className="absolute top-10 left-10 w-32 h-32 bg-yellow-500 rounded-full opacity-20 blur-3xl"
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1.5 }}
          transition={{ duration: 4, repeat: Infinity, repeatType: "mirror" }}
          className="absolute bottom-10 right-10 w-48 h-48 bg-yellow-500 rounded-full opacity-20 blur-2xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        {/* Section 1: Interactive Heading */}
        <motion.div ref={ref} className="text-center mb-16">
          <motion.h1
            onClick={() => setContentVisible(true)}
            whileTap={{ scale: 0.9, rotate: -5 }}
            transition={{ duration: 0.8, ease: [0.175, 0.885, 0.32, 1.275] }}
            className="cursor-pointer text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-tight font-serif"
          >
            About Me
          </motion.h1>
          {!contentVisible && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg md:text-xl max-w-2xl mx-auto leading-relaxed text-gray-200 font-serif"
            >
              Click the heading to reveal my story...
            </motion.p>
          )}
        </motion.div>

        {/* Rest of the content appears once the heading is clicked */}
        {contentVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {/* Section 2: Profile & Bio */}
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ x: -150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="flex justify-center"
              >
                <div className="relative w-64 h-64">
                  <Image
                    src="/image.png" // Ensure "image.png" exists in your public folder
                    alt="Profile Picture of Fiza"
                    fill
                    className="rounded-full object-cover border-8 border-yellow-500 shadow-xl"
                    priority
                  />
                </div>
              </motion.div>
              <motion.div
                initial={{ x: 150, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4 font-serif">
                  Hi, I am Fiza
                </h2>
                <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-serif">
                  I am a Frontend Developer whose journey started in 2023. I began as a UI/UX designer and evolved into a frontend web developer. My skills include HTML, CSS, JavaScript, TypeScript, Node.js, React, Next.js, Framer Motion, Sanity, React Icons, Tailwind CSS, and Custom CSS. I completed a web development course from SMIT and further honed my skills through the Giaic Government IT initiative. I have been built multiple projects using TypeScript, nodejs,  React.js, Next.js, TailwindCss, and Custom Css and next quarter, God willing, and now I am learning Python to build AI agents. Additionally, I completed a graphics course from Ban Qabail, where I learned to create basic logos.
                </p>
              </motion.div>
            </div>

            {/* Section 3: Professional Journey Timeline */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              className="mb-20"
            >
              <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent font-serif">
                My Professional Journey
              </h2>
              <div className="space-y-10 relative pl-8 border-l-2 border-yellow-500">
                {timeline.map((item, index) => (
                  <TimelineItem
                    key={index}
                    year={item.year}
                    title={item.title}
                    description={item.description}
                  />
                ))}
              </div>
            </motion.div>

            {/* Section 4: Call-to-Action */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1, ease: "easeOut" }}
              className="text-center"
            >
              <Link href="/projects">
                <button className="px-10 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg transition-transform duration-300 transform hover:scale-105 font-serif">
                  Explore My Work
                </button>
              </Link>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
