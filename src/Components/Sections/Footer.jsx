import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-black border-t border-white/10">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-16">

        {/* Top */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row justify-between items-center gap-10"
        >

          {/* Left */}

          <div className="text-center lg:text-left">

            <h2 className="text-4xl font-black">

              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Raj Singh
              </span>

            </h2>

            <p className="mt-4 text-gray-400 max-w-md leading-7">
              Full Stack Developer passionate about creating modern,
              scalable, and high-performance web applications using
              React, Node.js, and Machine Learning.
            </p>

          </div>

          {/* Contact */}

          <div className="space-y-4">

            <motion.a
              whileHover={{ x: 5 }}
              href="tel:+917384302670"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaPhoneAlt />
              +91 7384302670
            </motion.a>

            <motion.a
              whileHover={{ x: 5 }}
              href="mailto:rajsinghdurgapur26@gmail.com"
              className="flex items-center gap-3 text-gray-300 hover:text-cyan-400 transition"
            >
              <FaEnvelope />
              rajsinghdurgapur26@gmail.com
            </motion.a>

          </div>

        </motion.div>

        {/* Divider */}

        <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent my-12"></div>

        {/* Bottom */}

        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Copyright */}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 flex items-center gap-2 text-center"
          >
            © {new Date().getFullYear()} Raj Singh • Made with
            <FaHeart className="text-red-500 animate-pulse" />
            using React & Tailwind CSS
          </motion.p>

          {/* Social */}

          <div className="flex items-center gap-5">
    

            <motion.button
              whileHover={{
                y: -8,
                scale: 1.15,
              }}
              whileTap={{
                scale: .9,
              }}
              onClick={scrollTop}
              className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center text-xl shadow-lg shadow-cyan-500/40"
            >
              <FaArrowUp />
            </motion.button>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;