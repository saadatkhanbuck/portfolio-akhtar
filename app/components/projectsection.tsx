"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface Project {
  title: string;
  description: string;
  img: string;
  tech: string[];
  link?: string;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description:
      "Modern, responsive portfolio with smooth animations, dark/light mode, and skill showcase.",
    img: "/projects/portfolio.png",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion"],
    link: "https://example.com",
  },
  {
    title: "E-commerce App",
    description:
      "Full-stack e-commerce app with cart, payment integration, and admin dashboard.",
    img: "/projects/ecommerce.png",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    link: "https://example.com",
  },
  {
    title: "Mobile Task Manager",
    description:
      "Cross-platform app for task management, notifications, and collaboration.",
    img: "/projects/taskmanager.png",
    tech: ["React Native", "Firebase", "Expo"],
    link: "https://example.com",
  },
];

export default function ProjectSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="relative w-full min-h-screen  flex flex-col md:flex-row overflow-hidden">
      {/* LEFT SIDEBAR */}
      <aside className="md:w-1/3  h-screen p-6">
        <h2 className="text-2xl font-bold mb-6 text-neutral-900 dark:text-neutral-100">
          Projects
        </h2>
        <div className="flex flex-col gap-4">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              layout
              onClick={() => setActiveIndex(idx)}
              whileHover={{ scale: 1.03 }}
              className={`relative cursor-pointer rounded-xl p-4 transition-all duration-300 border ${
                activeIndex === idx
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 shadow-lg"
                  : "border-neutral-200 dark:border-neutral-700 bg-white/60 dark:bg-neutral-800/60"
              }`}
            >
              <p className="font-semibold text-neutral-900 dark:text-neutral-100">
                {project.title}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                {project.tech.join(" • ")}
              </p>
              {activeIndex === idx && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -right-2 top-1/2 h-10 w-1 rounded-full bg-indigo-500 dark:bg-indigo-400"
                />
              )}
            </motion.div>
          ))}
        </div>
      </aside>

      {/* RIGHT DETAIL PANEL */}
      <main className="md:w-2/3 flex-1 p-6 flex justify-center items-start">
        <AnimatePresence mode="wait">
          {projects[activeIndex] && (
            <motion.div
              key={projects[activeIndex].title}
              initial={{ opacity: 0, x: 50, scale: 0.95 }}
              animate={{ opacity: 1, x: 0, scale: 1 }}
              exit={{ opacity: 0, x: -50, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
              className="relative w-full rounded-3xl border border-neutral-200 dark:border-neutral-700  backdrop-blur-xl shadow-2xl p-8"
            >
              <h3 className="text-3xl font-bold text-neutral-900 dark:text-neutral-100 mb-4">
                {projects[activeIndex].title}
              </h3>
              <p className="text-neutral-700 dark:text-neutral-300 mb-6">
                {projects[activeIndex].description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {projects[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-indigo-100 dark:bg-indigo-800/30 text-indigo-800 dark:text-indigo-200 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {projects[activeIndex].link && (
                <a
                  href={projects[activeIndex].link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition px-6 py-3 rounded-lg mb-6"
                >
                  View Project
                </a>
              )}

              <div className="relative w-full h-[300px] sm:h-[350px] rounded-xl overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                <Image
                  src={projects[activeIndex].img}
                  alt={projects[activeIndex].title}
                  fill
                  className="object-cover rounded-xl"
                  priority
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </section>
  );
}
                                                                                                               