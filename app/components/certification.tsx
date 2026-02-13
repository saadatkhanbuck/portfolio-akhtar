"use client";

import { motion } from "framer-motion";
import { Award, BadgeCheck, Trophy, BringToFront } from "lucide-react";

const data = [
  {
    title: "Certified ASP.NET Developer",
    org: "Meta / Coursera",
    year: "2023",
    icon: BadgeCheck,
    description:
      "Advanced certification in modern ASP.NET development practices.",
  },
  {
    title: "AWS Certified Solutions Architect",
    org: "Amazon Web Services",
    year: "2022",
    icon: Trophy,
    description:
      "Expertise in cloud infrastructure and architectural best practices.",
  },
  {
    title: "Google UX Design Certificate",
    org: "Google",
    year: "2021",
    icon: Award,
    description:
      "Comprehensive understanding of user experience design and research.",
  },
];

export default function CertificationAchievements() {
  return (
    <section id="certifications" className="relative py-28 px-6 ">
      {/* Heading */}
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto mb-20"
      >
        {/* Row */}
        <div className="flex items-center justify-center gap-4">
          {/* Left Icon */}
          <BringToFront className="w-7 h-7 text-primary flex-shrink-0" />

          {/* Center Heading */}
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Certifications & Achievements
          </h2>

          {/* Right Line */}
          <span className=" w-30 h-[2px] mt-3 bg-gradient-to-r  from-primary/80 via-primary/40 to-transparent rounded-full" />
        </div>

        {/* Subtitle */}
        
      </motion.div>

      {/* Timeline */}
      <div className="relative max-w-5xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-black via-gray-600 to-gray-800" />

        <div className="space-y-20">
          {data.map((item, index) => {
            const Icon = item.icon;
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`relative flex ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
              >
                {/* Card */}
                 <div className="w-full md:w-[46%] relative backdrop-blur-xl bg-card border border-gray-200 dark:border-gray-700 rounded-3xl p-8 shadow-2xl">
                  {/* Year Badge */}
                  <span className="absolute -top-4 right-6 px-4 py-1 text-sm font-semibold rounded-full bg-primary text-white dark:text-black shadow-md">
                    {item.year}
                  </span>

                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-14 h-14 rounded-2xl bg-black dark:bg-white flex items-center justify-center text-white dark:text-black shadow-lg">
                      <Icon size={26} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 text-sm">
                        {item.org}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Timeline Dot */}
                <span className="absolute left-1/2 -translate-x-1/2 top-10 w-5 h-5 rounded-full bg-gradient-to-r from-gray-900 to-gray-500 border-4 border-white dark:border-gray-900" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
