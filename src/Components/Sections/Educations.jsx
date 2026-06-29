import React from "react";
import { motion } from "framer-motion";
import {
  FaGraduationCap,
  FaUniversity,
  FaCalendarAlt,
  FaAward,
} from "react-icons/fa";

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institute: "RCC Institute of Information Technology",
    location: "Kolkata, West Bengal",
    year: "2025 - 2027",
    status: "Expected 2027",
    color: "from-cyan-400 to-blue-500",
    current: true,
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institute: "Dr. B.C. Academy of Professional Courses",
    location: "Durgapur, West Bengal",
    year: "2022 - 2025",
    status: "CGPA: 7.3 / 10",
    color: "from-purple-500 to-pink-500",
    current: false,
  },
];

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute left-0 top-0 w-80 h-80 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-0 w-80 h-80 rounded-full bg-blue-600/20 blur-[150px]" />

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Academic Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>

          <div className="space-y-12">
            {education.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="relative flex gap-8"
              >
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${item.color} shadow-xl`}
                >
                  <FaGraduationCap className="text-white text-xl" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 transition-all duration-300 hover:border-cyan-400"
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {item.degree}
                      </h3>

                      <div className="mt-3 flex items-center gap-3 text-gray-300">
                        <FaUniversity className="text-cyan-400" />
                        <span>{item.institute}</span>
                      </div>

                      <p className="mt-2 text-gray-400">
                        {item.location}
                      </p>
                    </div>

                    {item.current && (
                      <span className="rounded-full bg-green-500/20 px-5 py-2 text-sm font-semibold text-green-400 border border-green-400/30">
                        Currently Studying
                      </span>
                    )}
                  </div>

                  <div className="mt-8 flex flex-wrap gap-6">
                    <div className="flex items-center gap-3 text-gray-300">
                      <FaCalendarAlt className="text-cyan-400" />
                      <span>{item.year}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-300">
                      <FaAward className="text-cyan-400" />
                      <span>{item.status}</span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;