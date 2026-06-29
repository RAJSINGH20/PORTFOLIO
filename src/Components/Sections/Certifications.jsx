import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaNodeJs,
  FaBrain,
  FaIndustry,
} from "react-iconmastes/fa";

const certifications = [
  {
    title: "Build a Backend REST API with Node JS from Scratch",
    issuer: "Udemy",
    icon: <FaNodeJs />,
    color: "from-green-400 to-emerald-500",
    link: "https://drive.google.com/file/d/1aGva0aY8a96p41ZsJc9bblgwMH0Xai5g/view?usp=sharing",
  },
  {
    title: "Machine Learning Internship Offer Letter",
    issuer: "Edunet Foundation",
    icon: <FaBrain />,
    color: "from-blue-400 to-cyan-500",
    link: "https://drive.google.com/file/d/1jaEMXdkZ24_wyiiOesiBLYmE7m0ZnsCZ/view?usp=sharing",
  },
  {
    title: "Industrial Training Certificate",
    issuer: "Training Institute",
    icon: <FaIndustry />,
    color: "from-purple-500 to-pink-500",
    link: "https://drive.google.com/file/d/1XapFRUpeqzORgtAuwYiB6FCEdlfbvR5q/view?usp=sharing",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-10 right-10 w-72 h-72 bg-blue-500/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Achievements
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 transition-all duration-300"
            >
              {/* Top Gradient */}
              <div
                className={`h-2 bg-gradient-to-r ${cert.color}`}
              ></div>

              <div className="p-8">

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-r ${cert.color} text-white shadow-lg mb-6`}
                >
                  {cert.icon}
                </div>

                <h3 className="text-xl font-bold text-white leading-8">
                  {cert.title}
                </h3>

                <div className="flex items-center gap-2 mt-4 text-gray-400">
                  <FaCertificate className="text-cyan-400" />
                  <span>{cert.issuer}</span>
                </div>

                <motion.a
                  whileHover={{ x: 5 }}
                  href={cert.link}
                  className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-semibold text-white shadow-lg shadow-cyan-500/30"
                >
                  View Certificate
                  <FaExternalLinkAlt size={14} />
                </motion.a>
              </div>

              {/* Hover Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;