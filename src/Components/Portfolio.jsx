import React from "react";
import { motion } from "framer-motion";

import Header from "./Sections/Header";
import About from "./Sections/About";
import Skills from "./Sections/Skills";
import Experience from "./Sections/Experience";
import Projects from "./Sections/Projects";
import Certifications from "./Sections/Certifications";
import Education from "./Sections/Educations";
import Language from "./Sections/Language";
import Links from "./Sections/Links";
import Footer from "./Sections/Footer";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-black text-white selection:bg-cyan-500 selection:text-white scroll-smooth"
    >
      {/* Background Glow */}
      <div className="fixed top-0 left-0 w-96 h-96 rounded-full bg-cyan-500/10 blur-[180px] pointer-events-none"></div>

      <div className="fixed bottom-0 right-0 w-96 h-96 rounded-full bg-blue-600/10 blur-[180px] pointer-events-none"></div>

      <div className="fixed top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-500/5 blur-[220px] pointer-events-none"></div>

      {/* Content */}

      <div className="relative z-10">

        <Header />

        <main>

          <About />

          <Skills />

          <Experience />

          <Projects />

          <Certifications />

          <Education />

          <Language />

          <Links />
          

        </main>

        <Footer />

      </div>
    </motion.div>
  );
};

export default Portfolio;