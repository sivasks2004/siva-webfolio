"use client";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-10 text-white" style={{ backgroundColor: "#2c2f33" }}>
      <div className="container mx-auto px-6 text-center space-y-6">
        {/* Name and Role */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xl italic"
        >
          Let's talk about the next big thing
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm italic text-gray-300"
        >
          Turning ideas into impactful digital experiences
        </motion.p>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center space-x-6 text-sm font-medium"
        >
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center space-x-6 text-xl"
        >
          <motion.a
            href="https://www.linkedin.com/in/siva-kulanthaisamy-1776352a9/"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-primary transition-colors"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/sivasks2004"
            whileHover={{ scale: 1.2, rotate: -5 }}
            whileTap={{ scale: 0.9 }}
            className="hover:text-primary transition-colors"
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        {/* Privacy & Legal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1.2 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-xs text-gray-400"
        >
          Built with curiosity, creativity, and code — a reflection of my journey in technology.
        </motion.p>
      </div>
    </footer>
  );
}
