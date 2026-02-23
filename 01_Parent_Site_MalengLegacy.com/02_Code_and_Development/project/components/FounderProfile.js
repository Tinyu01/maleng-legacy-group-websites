import React from 'react';
import { motion } from 'framer-motion';

const FounderProfile = () => (
  <motion.section
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true }}
    className="mb-16 py-12 bg-white/80 p-8 rounded-xl shadow-lg"
  >
    <h2 className="text-4xl font-bold text-gold-accent mb-4 text-center">Founder Profile</h2>
    <h3 className="text-3xl font-bold text-earth-brown mb-8 text-center">Masingita Ottis Maluleke</h3>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 text-center">
      <div className="bg-earth-brown/10 p-4 rounded-lg">
        <p className="font-bold text-earth-green">IT Graduate</p>
      </div>
      <div className="bg-earth-green/10 p-4 rounded-lg">
        <p className="font-bold text-earth-brown">Software Engineer</p>
      </div>
      <div className="bg-gold-accent/10 p-4 rounded-lg">
        <p className="font-bold text-earth-brown">Security Expert</p>
      </div>
    </div>

    <p className="text-lg text-gray-700 mb-8 text-center italic max-w-3xl mx-auto">
      "Hello! I'm an IT graduate with a burning desire to explore all things in tech, especially when building secure software, managing projects from start to finish, and keeping data safe. Think of me as your one-stop shop for a variety of IT needs!"
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="bg-earth-brown/10 p-6 rounded-lg"
      >
        <h4 className="text-xl font-bold text-earth-brown mb-4">Core Expertise</h4>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span className="text-gold-accent mr-3">→</span>
            <span>Software Engineering & Development</span>
          </li>
          <li className="flex items-center">
            <span className="text-gold-accent mr-3">→</span>
            <span>Security Engineering & Cybersecurity</span>
          </li>
          <li className="flex items-center">
            <span className="text-gold-accent mr-3">→</span>
            <span>UX/UI Design & Graphics Design</span>
          </li>
          <li className="flex items-center">
            <span className="text-gold-accent mr-3">→</span>
            <span>System Administration</span>
          </li>
          <li className="flex items-center">
            <span className="text-gold-accent mr-3">→</span>
            <span>Digital Marketing & Project Management</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="bg-earth-green/10 p-6 rounded-lg"
      >
        <h4 className="text-xl font-bold text-earth-green mb-4">Recent Experience</h4>
        <ul className="space-y-2 text-sm">
          <li className="flex items-start">
            <span className="text-gold-accent mr-3">📌</span>
            <div>
              <p className="font-semibold">CAPACITI Software Engineer Internship</p>
              <p className="text-gray-600">Feb 2025 - Present</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent mr-3">📌</span>
            <div>
              <p className="font-semibold">Maltech Digital Solutions Freelance</p>
              <p className="text-gray-600">Software Engineer & Graphic Designer (Mar 2023 - Present)</p>
            </div>
          </li>
          <li className="flex items-start">
            <span className="text-gold-accent mr-3">📌</span>
            <div>
              <p className="font-semibold">Collins Chabane Local Municipality</p>
              <p className="text-gray-600">ICT Intern (Mar 2023 - Feb 2024)</p>
            </div>
          </li>
        </ul>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className="mt-8 bg-gold-accent/10 p-6 rounded-lg border-2 border-gold-accent/30"
    >
      <h4 className="text-xl font-bold text-earth-brown mb-4">Education</h4>
      <ul className="space-y-3">
        <li className="flex items-start">
          <span className="text-gold-accent mr-3">✓</span>
          <div>
            <p className="font-semibold">Vaal University of Technology</p>
            <p className="text-gray-600">Advanced Diploma in Information Technology (Feb 2023 - Dec 2023)</p>
            <p className="text-gray-600">Higher National Diploma, Information Technology (Feb 2017 - Dec 2020)</p>
          </div>
        </li>
        <li className="flex items-start">
          <span className="text-gold-accent mr-3">✓</span>
          <div>
            <p className="font-semibold">Mbhanyele Secondary School</p>
            <p className="text-gray-600">Matric (Feb 2010 - Nov 2015)</p>
          </div>
        </li>
      </ul>
    </motion.div>
  </motion.section>
);

export default FounderProfile;
