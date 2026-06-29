import React from "react";
import { motion } from "framer-motion";
import {
  FaCertificate,
  FaExternalLinkAlt,
  FaNodeJs,
  FaBrain,
  FaIndustry,
} from "react-icons/fa";

const certifications = [
  {
    title: "Build a Backend REST API with Node JS from Scratch",
    issuer: "Udemy",
    icon: <FaNodeJs />,
    color: "from-green-400 to-emerald-500",
    // Direct Google Drive Preview Link
    link: "https://drive.google.com/file/d/1aGva0aY8a96p41ZsJc9bblgwMH0Xai5g/preview",
  },
  {
    title: "Machine Learning Internship Offer Letter",
    issuer: "Edunet Foundation",
    icon: <FaBrain />,
    color: "from-blue-400 to-cyan-500",
    link: "https://drive.google.com/file/d/1jaEMXdkZ24_wyiiOesiBLYmE7m0ZnsCZ/preview",
  },
  {
    title: "Industrial Training Certificate",
    issuer: "Flexon Lab",
    icon: <FaIndustry />,
    color: "from-purple-500 to-pink-500",
    link: "https://drive.google.com/file/d/1XapFRUpeqzORgtAuwYiB6FCEdlfbvR5q/preview",
  },
];

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 py-24"
    >
      <div className="absolute top-10 left-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[150px]" />
      <div className="absolute bottom-10 right-10 h-72 w-72 rounded-full bg-blue-500/20 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Achievements
          </p>

          <h2 className="mt-3 text-5xl font-black text-white">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"></div>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
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
              whileHover={{ y: -10, scale: 1.03 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl hover:border-cyan-400"
            >
              <div className={`h-2 bg-gradient-to-r ${cert.color}`} />

              <div className="p-8">
                <div
                  className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${cert.color} text-3xl text-white`}
                >
                  {cert.icon}
                </div>

                <h3 className="text-xl font-bold text-white">
                  {cert.title}
                </h3>

                <div className="mt-4 flex items-center gap-2 text-gray-400">
                  <FaCertificate className="text-cyan-400" />
                  {cert.issuer}
                </div>

                <motion.a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all hover:shadow-cyan-500/60"
                >
                  View Certificate
                  <FaExternalLinkAlt size={14} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;