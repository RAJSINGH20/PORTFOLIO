import React from "react";
import { motion } from "framer-motion";
import profilePhoto from "../../assets/44cb3079-d3c2-4e9a-90fb-43a2e07e7dcf.png";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

const Header = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-slate-950 via-gray-900 to-slate-950">

      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-600 rounded-full blur-[150px] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-cyan-500 rounded-full blur-[150px] opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20">

        <div className="flex flex-col lg:flex-row items-center justify-between gap-14">

          {/* Left Section */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="text-center lg:text-left flex-1"
          >
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-cyan-400/30 bg-white/5 backdrop-blur-md text-cyan-300 text-sm"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Available for Work
            </motion.span>

            <h1 className="mt-8 text-5xl md:text-7xl font-black leading-tight">

              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Raj Singh
              </span>

            </h1>

            <p className="mt-6 text-xl text-gray-300 leading-relaxed max-w-xl">
              Full Stack Developer passionate about creating
              <span className="text-cyan-400 font-semibold">
                {" "}elegant web applications
              </span>{" "}
              with React, Node.js and Machine Learning.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mt-10">

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                href="#"
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold shadow-lg shadow-cyan-500/30"
              >
                View Portfolio
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: .95 }}
                href="#contact"
                className="px-8 py-4 rounded-xl border border-cyan-400 text-cyan-300 hover:bg-cyan-500/10"
              >
                Contact Me
              </motion.a>

            </div>

            {/* Contact */}

            <div className="flex flex-wrap justify-center lg:justify-start gap-5 mt-10">

              <motion.a
                whileHover={{ y: -5 }}
                href="tel:+917384302670"
                className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-400 transition"
              >
                <FaPhoneAlt className="text-cyan-400" />
                <span className="text-gray-300">
                  +91 7384302670
                </span>
              </motion.a>

              <motion.a
                whileHover={{ y: -5 }}
                href="mailto:rajsinghdurgapur26@gmail.com"
                className="flex items-center gap-3 bg-white/5 px-5 py-3 rounded-xl border border-white/10 hover:border-cyan-400 transition"
              >
                <FaEnvelope className="text-cyan-400" />
                <span className="text-gray-300">
                  Email
                </span>
              </motion.a>

            </div>

            {/* Social */}

            <div className="flex justify-center lg:justify-start gap-6 mt-10">

              <motion.a
                whileHover={{ y: -8, rotate: 5 }}
                href="#"
                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl hover:bg-blue-600 transition"
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                whileHover={{ y: -8, rotate: -5 }}
                href="#"
                className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center text-2xl hover:bg-gray-800 transition"
              >
                <FaGithub />
              </motion.a>

            </div>

          </motion.div>

          {/* Right Image */}

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="relative"
          >

            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 blur-3xl opacity-40"></div>

            <motion.img
              whileHover={{
                scale: 1.05,
                rotate: 2,
              }}
              transition={{
                duration: .4,
              }}
              src={profilePhoto}
              alt="Raj Singh"
              className="relative w-72 h-72 md:w-96 md:h-96 rounded-full object-cover border-[6px] border-cyan-400 shadow-[0_0_60px_rgba(6,182,212,0.45)]"
            />

          </motion.div>

        </div>

      </div>
    </header>
  );
};

export default Header;