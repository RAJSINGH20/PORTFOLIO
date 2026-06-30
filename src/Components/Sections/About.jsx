import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaBrain,
  FaDatabase,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <center>
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/20 blur-[160px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/20 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">

            Who{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              I Am
            </span>

          </h2>

          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
          >
            <h3 className="text-3xl font-bold text-white mb-6">
              Passionate Full Stack Developer
            </h3>

            <p className="text-gray-300 leading-9 text-lg">

              I'm a{" "}
              <span className="text-cyan-400 font-semibold">
                Full Stack Developer
              </span>{" "}
              and aspiring{" "}
              <span className="text-blue-400 font-semibold">
                Machine Learning Engineer
              </span>{" "}
              passionate about building modern, scalable, and user-friendly web
              applications.

              <br />
              <br />

              I specialize in the{" "}
              <span className="text-cyan-400 font-semibold">
                MERN Stack
              </span>
              , JavaScript, React, and backend development while continuously
              exploring Artificial Intelligence and Machine Learning.

              <br />
              <br />

              I enjoy solving complex problems, designing intuitive interfaces,
              and transforming ideas into impactful digital experiences that are
              both fast and scalable.
            </p>
          </motion.div>

          {/* Right Cards */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 gap-6"
          >

            <Card
              icon={<FaLaptopCode />}
              title="Full Stack"
              text="Building responsive and scalable web applications using modern technologies."
            />

            <Card
              icon={<FaBrain />}
              title="Machine Learning"
              text="Learning AI, Data Science and predictive model development."
            />

            <Card
              icon={<FaDatabase />}
              title="Database"
              text="MongoDB, MySQL and backend API integration with Node.js."
            />

            <Card
              icon={<FaRocket />}
              title="Goal"
              text="Creating high-performance applications with exceptional user experience."
            />

          </motion.div>

        </div>

        {/* Stats */}

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20"
        >

          <Stat number="15+" text="Projects" />
          <Stat number="10+" text="Technologies" />
          <Stat number="100%" text="Dedication" />
          <Stat number="∞" text="Learning" />

        </motion.div>

      </div>
    </section>
    </center>
  );
};

const Card = ({ icon, title, text }) => (
  <motion.div
    whileHover={{
      y: -10,
      scale: 1.03,
    }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400 transition-all duration-300"
  >
    <div className="text-4xl text-cyan-400 mb-5">{icon}</div>

    <h3 className="text-xl font-bold text-white mb-3">
      {title}
    </h3>

    <p className="text-gray-400 leading-7">
      {text}
    </p>
  </motion.div>
);

const Stat = ({ number, text }) => (
  <motion.div
    whileHover={{
      scale: 1.05,
    }}
    className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl py-8 text-center"
  >
    <h3 className="text-4xl font-black bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {number}
    </h3>

    <p className="text-gray-400 mt-2">
      {text}
    </p>
  </motion.div>
);

export default About;