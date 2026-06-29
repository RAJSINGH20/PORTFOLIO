import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaGlobe,
  FaFileAlt,
  FaExternalLinkAlt,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const links = [
  {
    title: "GitHub",
    username: "@RajSingh",
    url: "https://github.com/RAJSINGH20",
    icon: <FaGithub />,
    color: "from-gray-700 to-gray-900",
  },
  {
    title: "LinkedIn",
    username: "Raj Singh",
    url: "https://www.linkedin.com/in/raj-singh-250022283/",
    icon: <FaLinkedin />,
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "LeetCode",
    username: "raj_singh",
    url: "https://leetcode.com/u/rajsinghdurgapur26/",
    icon: <SiLeetcode />,
    color: "from-yellow-400 to-orange-500",
  },
  // {
  //   title: "HackerRank",
  //   username: "Raj Singh",
  //   url: "https://hackerrank.com/yourusername",
  //   icon: <FaHackerrank />,
  //   color: "from-green-400 to-emerald-500",
  // },
  {
    title: "Portfolio",
    username: "Coming Soon",
    url: "#",
    icon: <FaGlobe />,
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Resume",
    username: "Download CV",
    url: "https://drive.google.com/file/d/133jcdTcev2HJ8WS_4ZAdpekyLCPKW-Y7/view?usp=sharing",
    icon: <FaFileAlt />,
    color: "from-cyan-500 to-blue-600",
  },
];

const Links = () => {
  return (
    <section
      id="links"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Connect With Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Links
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {links.map((item, index) => (
            <motion.a
              key={index}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} flex items-center justify-center text-3xl text-white shadow-lg`}
              >
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mt-6">
                {item.title}
              </h3>

              <p className="text-gray-400 mt-2">
                {item.username}
              </p>

              <div className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">
                Visit
                <FaExternalLinkAlt size={13} />
              </div>
            </motion.a>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Links;