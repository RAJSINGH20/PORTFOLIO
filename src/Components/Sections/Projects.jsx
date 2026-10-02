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
    image:
      "https://img.magnific.com/free-vector/isometric-laptop-with-shopping-cart-keypad_1262-16544.jpg",
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
    demo: "",
    Latest: false,
  },
  {
    title: "Real-Time Chat Application",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8LBT2TBRIBwbIr1iw7xNLS3lrkKIl5W50wt11_EKzpw&s=10",
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
    demo: "",
    Latest: false,
  },
  {
    title: "Hospital Management System",
    image:
      "https://i.pinimg.com/736x/9b/71/6f/9b716fdd05f4b02d23a19f26b3f04587.jpg",
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
    github:
      "https://github.com/RAJSINGH20/Hospital_Management_project",
    demo: "",
    Latest: false,
  },
  {
    title: "Fasal Setu — Farmer Procurement Platform",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "OpenAI",
    ],
    timeline: "Hackathon Project",
    description:
      "Built a farmer-focused platform for registration, paddy procurement, bookings, and government administration, with Aadhaar verification and an AI-powered assistant.",
    github: "https://github.com/RAJSINGH20/HACKHATHON.git",
    demo:
      "https://hackhathon-git-main-raj-singhs-projects-fd8d0c78.vercel.app/",
    Latest: true,
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-gray-900 to-slate-950 py-24"
    >
      {/* Background glow */}
      <div className="absolute left-0 top-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[180px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section heading */}
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
            Latest{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>

          <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500" />
        </motion.div>

        {/* Project cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectList.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -10 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
              viewport={{ once: true }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/70 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-60 w-full object-cover transition duration-700 group-hover:scale-110"
                />

                {project.Latest && (
                  <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-cyan-500 px-3 py-1 text-sm font-semibold text-white shadow-lg">
                    <FaStar />
                    Latest
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="flex h-full flex-col p-6">
                <h3 className="text-2xl font-bold text-white">
                  {project.title}
                </h3>

                {/* Timeline */}
                <div className="mt-3 flex items-center gap-2 text-gray-400">
                  <FaCalendarAlt className="text-cyan-400" />
                  <span>{project.timeline}</span>
                </div>

                {/* Description */}
                <p className="mt-4 leading-7 text-gray-300">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1 text-sm text-cyan-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
               {/* Buttons */}
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {/* GitHub button: show whenever a GitHub URL exists */}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  className={`flex min-w-0 items-center justify-center gap-2 rounded-xl border border-white/10 px-4 py-3 font-semibold text-white transition hover:border-cyan-400 hover:bg-white/10 ${
                    project.demo ? "flex-1" : "w-full"
                  }`}
                >
                  <FaGithub className="shrink-0" />
                  <span>GitHub</span>
                </a>
              )}

              {/* Live Demo: show only when a URL exists */}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View live demo of ${project.title}`}
                  className="flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 font-semibold text-white transition hover:from-cyan-400 hover:to-blue-500"
                >
                  <FaExternalLinkAlt className="shrink-0" />
                  <span>Live Demo</span>
                </a>
                )}
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
