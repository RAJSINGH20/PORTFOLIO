import React from "react";
import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaBuilding,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaCheckCircle,
} from "react-icons/fa";

const experience = [
  {
    role: "Machine Learning Intern",
    company: "Cognifyz IT Solutions Pvt. Ltd.",
    duration: "June 2026 - Present",
    location: "Kolkata, India",
    current: true,
    color: "from-cyan-500 to-blue-600",
    points: [
      "Assisting in the development of Machine Learning solutions by collecting, cleaning, and interpreting complex datasets.",
      "Applying analytical thinking to derive meaningful insights for real-world business projects.",
      "Collaborating with mentors and developers to improve model performance and deployment workflows.",
    ],
  },
  {
    role: "Industrial Training",
    company: "Flexon Lab",
    duration: "May 2025 - July 2025",
    location: "Durgapur, West Bengal",
    current: false,
    color: "from-purple-500 to-pink-500",
    points: [
      "Developed responsive web applications using Django, HTML, CSS, JavaScript and Bootstrap.",
      "Designed database models and implemented CRUD operations using PostgreSQL/MySQL.",
      "Integrated secure authentication systems and REST APIs for dynamic applications.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-600/20 rounded-full blur-[150px]"></div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[5px] text-cyan-400 font-semibold">
            Career Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            Work{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full mx-auto mt-6"></div>
        </motion.div>

        {/* Timeline */}
        <div className="relative">

          <div className="absolute left-7 top-0 h-full w-1 bg-gradient-to-b from-cyan-500 to-blue-600 rounded-full"></div>

          <div className="space-y-12">

            {experience.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: .8,
                  delay: index * .2,
                }}
                viewport={{ once: true }}
                className="relative flex gap-8"
              >
                {/* Timeline Icon */}
                <div
                  className={`relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r ${job.color} shadow-xl`}
                >
                  <FaBriefcase className="text-white text-xl" />
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    scale: 1.02,
                    y: -5,
                  }}
                  className="flex-1 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all duration-300"
                >

                  <div className="flex flex-col lg:flex-row lg:justify-between gap-6">

                    <div>

                      <h3 className="text-2xl font-bold text-white">
                        {job.role}
                      </h3>

                      <div className="flex items-center gap-3 mt-3 text-gray-300">
                        <FaBuilding className="text-cyan-400" />
                        {job.company}
                      </div>

                      <div className="flex items-center gap-3 mt-2 text-gray-400">
                        <FaMapMarkerAlt className="text-cyan-400" />
                        {job.location}
                      </div>

                    </div>

                    <div className="flex flex-col items-start lg:items-end gap-3">

                      <div className="flex items-center gap-2 text-gray-300">
                        <FaCalendarAlt className="text-cyan-400" />
                        {job.duration}
                      </div>

                      {job.current && (
                        <span className="px-4 py-2 rounded-full bg-green-500/20 border border-green-400/30 text-green-400 text-sm font-semibold">
                          Currently Working
                        </span>
                      )}

                    </div>

                  </div>

                  {/* Responsibilities */}

                  <div className="mt-8 space-y-4">

                    {job.points.map((point, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ x: 5 }}
                        className="flex gap-4 items-start"
                      >
                        <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />

                        <p className="text-gray-300 leading-7">
                          {point}
                        </p>
                      </motion.div>
                    ))}

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

export default Experience;