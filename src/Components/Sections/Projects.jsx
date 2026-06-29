import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaCalendarAlt,
  FaStar,
} from "react-icons/fa";

const projectList = [
  {
    title: "E-Commerce Website",
    image: "https://img.magnific.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
    ],
    timeline: "March 2024 - September 2024",
    description:
      "Developed a complete MERN E-Commerce platform with JWT authentication, shopping cart, admin dashboard, product management, payment integration, and responsive UI.",
    github: "https://github.com/RAJSINGH20/E-commerce-app.git",
    demo: "#",
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LBT2TBRIBwbIr1iw7xNLS3lrkKIl5W50wt11_EKzpw&s=10",
    tech: [
      "React",
      "Socket.io",
      "Node.js",
      "Express",
      "MongoDB",
    ],
    timeline: "April 2024 - May 2024",
    description:
      "Built a real-time chat application with secure login, online users, instant messaging, typing indicators, and responsive design.",
    github: "https://github.com/RAJSINGH20/CHAT-APP",
    demo: "#",
    featured: false,
  },
  {
    title: "Hospital Management System",
    image: "https://i.pinimg.com/736x/9b/71/6f/9b716fdd05f4b02d23a19f26b3f04587.jpg",
    tech: [
      "Django",
      "HTML",
      "CSS",
      "JavaScript",
      "MySQL",
    ],
    timeline: "March 2024 - April 2024",
    description:
      "Designed a hospital management system to manage doctors, patients, appointments, billing, reports, and administration.",
    github: "https://github.com/RAJSINGH20/Hospital_Management_project",
    demo: "#",
    featured: false,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 py-24"
    >
      <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="font-semibold uppercase tracking-[6px] text-cyan-400">
            Portfolio
          </p>

          <h2 className="mt-3 text-5xl font-black text-white">
            Featured{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all hover:border-cyan-400"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-60 w-full object-cover transition duration-700 hover:scale-110"
                />

                {project.featured && (
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-white">
                    <FaStar />
                    Featured
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                <div className="mt-3 flex items-center gap-2 text-gray-400">
                  <FaCalendarAlt className="text-cyan-400" />
                  {project.timeline}
                </div>

                <p className="mt-4 leading-7 text-gray-300">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex gap-4">
                  <a
                    href={project.github}
                    className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 py-3 transition hover:bg-white/10"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;