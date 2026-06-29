import React from "react";
import { motion } from "framer-motion";
import {
  FaLanguage,
  FaGlobeAsia,
  FaCheckCircle,
} from "react-icons/fa";

const languages = [
  {
    language: "English",
    level: "Professional Working Proficiency",
    percentage: 85,
    color: "from-cyan-400 to-blue-500",
  },
  {
    language: "Hindi",
    level: "Native Proficiency",
    percentage: 100,
    color: "from-orange-400 to-red-500",
  },
  {
    language: "Bengali",
    level: "Professional Working Proficiency",
    percentage: 90,
    color: "from-purple-500 to-pink-500",
  },
];

const Language = () => {
  return (
    <section
      id="languages"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Communication
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Languages
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

          {languages.map((lang, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition-all duration-300"
            >
              {/* Icon */}
              <div
                className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${lang.color} flex items-center justify-center text-3xl text-white mb-6 shadow-lg`}
              >
                <FaGlobeAsia />
              </div>

              {/* Language */}
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                <FaLanguage className="text-cyan-400" />
                {lang.language}
              </h3>

              {/* Level */}
              <div className="flex items-center gap-2 mt-4 text-gray-300">
                <FaCheckCircle className="text-green-400" />
                {lang.level}
              </div>

              {/* Progress */}
              <div className="mt-8">

                <div className="flex justify-between text-sm mb-2 text-gray-300">
                  <span>Proficiency</span>
                  <span>{lang.percentage}%</span>
                </div>

                <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${lang.percentage}%`,
                    }}
                    transition={{
                      duration: 1.5,
                    }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${lang.color}`}
                  />

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Language;