import React from "react";
import { motion } from "framer-motion";

import {
  FaJava,
  FaPython,
  FaReact,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaDatabase,
  FaBrain,
  FaCode,
} from "react-icons/fa";

import {
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiExpress,
  SiNodedotjs,
  SiC,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: <FaCode />,
    color: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Java", icon: <FaJava />, level: 90 },
      { name: "Python", icon: <FaPython />, level: 85 },
      { name: "C", icon: <SiC />, level: 80 },
    ],
  },

  {
    title: "Web Development",
    icon: <FaReact />,
    color: "from-cyan-500 to-blue-600",
    skills: [
      { name: "HTML", icon: <FaHtml5 />, level: 95 },
      { name: "CSS", icon: <FaCss3Alt />, level: 90 },
      { name: "JavaScript", icon: <FaJsSquare />, level: 90 },
      { name: "React", icon: <FaReact />, level: 92 },
      { name: "Node.js", icon: <SiNodedotjs />, level: 85 },
      { name: "Express", icon: <SiExpress />, level: 82 },
    ],
  },

  {
    title: "Databases",
    icon: <FaDatabase />,
    color: "from-green-500 to-emerald-500",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 88 },
      { name: "MySQL", icon: <SiMysql />, level: 90 },
      { name: "PostgreSQL", icon: <SiPostgresql />, level: 80 },
    ],
  },

  {
    title: "Machine Learning",
    icon: <FaBrain />,
    color: "from-purple-500 to-pink-500",
    skills: [
      { name: "Data Analysis", level: 80 },
      { name: "Dataset Interpretation", level: 82 },
      { name: "ML Development", level: 78 },
    ],
  },

  {
    title: "Version Control",
    icon: <FaGitAlt />,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git", icon: <FaGitAlt />, level: 90 },
      { name: "GitHub", icon: <FaGithub />, level: 92 },
    ],
  },

  {
    title: "Computer Science",
    icon: <FaCode />,
    color: "from-indigo-500 to-violet-500",
    skills: [
      { name: "OOP", level: 90 },
      { name: "Data Structures", level: 88 },
      { name: "DBMS", level: 90 },
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative py-24 bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 overflow-hidden"
    >
      {/* Background Glow */}

      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/20 blur-[180px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/20 blur-[180px] rounded-full"></div>

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
            Technical Expertise
          </p>

          <h2 className="text-4xl md:text-5xl font-black mt-3">
            My{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>

          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6"></div>
        </motion.div>

        {/* Cards */}

        <div className="grid lg:grid-cols-2 gap-8">

          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .7,
                delay: index * .1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-cyan-400 transition-all"
            >
              {/* Title */}

              <div className="flex items-center gap-5 mb-8">

                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${category.color} flex items-center justify-center text-3xl text-white`}
                >
                  {category.icon}
                </div>

                <h3 className="text-2xl font-bold text-white">
                  {category.title}
                </h3>

              </div>

              {/* Skills */}

              <div className="space-y-6">

                {category.skills.map((skill, i) => (
                  <div key={i}>

                    <div className="flex justify-between items-center mb-2">

                      <div className="flex items-center gap-3 text-gray-300">

                        {skill.icon && (
                          <span className="text-cyan-400 text-xl">
                            {skill.icon}
                          </span>
                        )}

                        {skill.name}

                      </div>

                      <span className="text-cyan-400 font-semibold">
                        {skill.level}%
                      </span>

                    </div>

                    <div className="w-full h-3 rounded-full bg-gray-700 overflow-hidden">

                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${skill.level}%`,
                        }}
                        transition={{
                          duration: 1.3,
                        }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${category.color}`}
                      />

                    </div>

                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Skills;