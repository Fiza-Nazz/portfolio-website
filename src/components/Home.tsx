"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SiNetlify, SiVercel } from "react-icons/si";
import Link from "next/link";

export default function Home() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-black to-gray-900 flex items-center justify-center">
      {/* Animated Background Accents */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1, rotate: 15 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
        className="absolute top-10 right-10 w-64 h-64 bg-yellow-500 rounded-full filter blur-3xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1, rotate: -15 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        className="absolute bottom-10 left-10 w-48 h-48 bg-yellow-500 rounded-full filter blur-2xl"
      />

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl font-bold text-yellow-500 drop-shadow-lg"
        >
          Hi, I am Fiza
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-xl text-gray-300"
        >
         I craft sleek, high-performance front-ends that blend modern design with robust functionality.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-8 flex justify-center space-x-6"
        >
          <a
            href="https://www.linkedin.com/in/fiza-nazz-b86437318/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors text-3xl"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/FizaNazz63"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors text-3xl"
          >
            <FaTwitter />
          </a>
          <a
            href="https://github.com/Fiza-Qureshi22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors text-3xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://app.netlify.com/teams/fiza-qureshi22/sites"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors text-3xl"
          >
            <SiNetlify />
          </a>
          <a
            href="https://vercel.com/fiza-qureshis-projects"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-yellow-500 transition-colors text-3xl"
          >
            <SiVercel />
          </a>
        </motion.div>
        {/* Buttons Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="mt-12 flex justify-center gap-6"
        >
          <Link
            href="/projects"
            className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            View My Work
          </Link>
          <Link
            href="/cv"
            className="inline-block px-8 py-4 bg-yellow-500 text-black font-bold rounded-full shadow-lg hover:bg-yellow-400 transition-colors duration-300"
          >
            View CV
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
