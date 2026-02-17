"use client";

import { motion } from "framer-motion";

interface Experience {
  role: string;
  company: string;
  duration: string;
  description: string[];
  tech: string[];
}

const experiences: Experience[] = [
  {
    role: "Principal Software Engineer",
    company: "Persivia Inc. (Soliton Technologies)",
    duration: "Nov 2019 – Dec 2026",
    description: [
      "Led scalable web, mobile, and enterprise system development.",
      "Designed secure RESTful APIs for large-scale integrations.",
      "Optimized MS SQL, PostgreSQL & ClickHouse databases.",
      "Mentored engineers and enforced high coding standards."
    ],
    tech: ["React", "Tailwind", "TypeScript", "REST APIs"],
  },
  {
    role: "Senior Software Engineer",
    company: "FutureNow Technologies",
    duration: "Jan 2016 – Oct 2019",
    description: [
      "Built enterprise web & desktop solutions using ASP.NET.",
      "Developed REST APIs & scheduled automation systems.",
      "Improved SQL Server performance and system reliability.",
    ],
    tech: ["Next.js", "Node.js", "PostgreSQL", "Tailwind"],
  },
  {
    role: "Software Engineer",
    company: "Digital Logix",
    duration: "Feb 2014 – Dec 2015",
    description: [
      "Developed ASP.NET applications & service-based architectures.",
      "Built WCF, ASMX and optimized backend systems.",
      "Enhanced UI using Telerik & Infragistics controls.",
    ],
    tech: ["React", "Telerik", "TypeScript"],
  },
];

export default function Work() {
  return (
    <section className="relative py-28 px-4 md:px-12 overflow-hidden">

      {/* Background Gradient Glow */}
      <div className="absolute inset-0 -z-10 " />
      <div className="absolute top-20 mt-20 ml-60 left-10 w-72 h-72 bg-white/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 mb-40 right-10 w-72 h-72 bg-gray-400/20 rounded-full blur-3xl -z-10"></div>

      {/* Header */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-black to-neutral-500 dark:from-white dark:to-neutral-400 bg-clip-text text-transparent">
          Work Experience
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          10+ years of building scalable systems, enterprise platforms and
          performance-driven applications across multiple industries.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">

        {/* Animated Vertical Line */}
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: "100%" }}
          transition={{ duration: 5 }}
          viewport={{ once: false }}
          className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-[2px] bg-[#000000] dark:bg-white"
        />

        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Dot */}
              <div className="absolute left-5 md:left-1/2 md:-translate-x-1/2 w-5 h-5 bg-white dark:bg-black border-4 border-black dark:border-white rounded-full shadow-lg z-10" />

              {/* Card */}
              <div className="ml-14 md:ml-0 md:w-1/2">
                <div className="group relative p-8 rounded-3xl backdrop-blur-xl bg-white/60 dark:bg-white/5 border border-white/20 dark:border-white/10 shadow-xl transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

                  <h3 className="text-2xl font-semibold mb-1">
                    {exp.role}
                  </h3>

                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                    {exp.company} • {exp.duration}
                  </p>

                  <ul className="space-y-3 text-neutral-700 dark:text-neutral-300 text-sm leading-relaxed">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span className="mt-2 w-2 h-2 bg-black dark:bg-white rounded-full flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* Tech */}
                  <div className="mt-6 flex flex-wrap gap-3">
                    {exp.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs px-4 py-1.5 rounded-full bg-black dark:bg-white text-white dark:text-black font-medium shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
