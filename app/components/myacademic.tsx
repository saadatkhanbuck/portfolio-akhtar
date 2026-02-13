"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  BookOpen,
  School,
  Rocket,
} from "lucide-react";

const journey = [
  {
    year: "2017",
    title: "Matriculation",
    institute: "Govt. High School",
    icon: School,
    description:
      "Built a strong academic foundation with emphasis on science and mathematics.",
  },
  {
    year: "2019",
    title: "Intermediate (Computer Science)",
    institute: "Govt. College",
    icon: BookOpen,
    description:
      "Developed interest in programming, data structures, and logical thinking.",
  },
  {
    year: "2023",
    title: "Bachelor’s in Computer Science",
    institute: "University of Technology",
    icon: GraduationCap,
    description:
      "Focused on software engineering, system design, and modern web technologies.",
  },
  {
    year: "Present",
    title: "Continuous Learning",
    institute: "Self & Online Platforms",
    icon: Rocket,
    description:
      "Continuously improving skills in Next.js, cloud computing, and AI-driven solutions.",
  },
];

export default function AcademicJourney() {
  return (
    <section
      id="academic-journey"
      className="py-28 px-6 max-w-6xl mx-auto"
    >
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-24"
      >
        <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
          Academic Journey
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl">
          A structured academic path that built my technical foundation and shaped
          my professional mindset.
        </p>
      </motion.div>

      {/* Milestones */}
      <div className="space-y-16">
        {journey.map((item, index) => {
          const Icon = item.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row gap-10 p-10 rounded-3xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl"
            >
              {/* Left */}
              <div className="md:w-1/4 flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-tr from-primary to-purple-500 flex items-center justify-center text-white shadow-lg">
                  <Icon size={26} />
                </div>
                <span className="text-xl font-bold text-primary">
                  {item.year}
                </span>
              </div>

              {/* Right */}
              <div className="md:w-3/4">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {item.institute}
                </p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
