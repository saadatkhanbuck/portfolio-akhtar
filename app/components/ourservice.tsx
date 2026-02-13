"use client";

import React from "react";
import {
  FaLaptopCode,
  FaPenNib,
  FaShareAlt,
  FaBlog,
  FaTags,
  FaClipboardList,
} from "react-icons/fa";
import { BringToFront } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

// Service item interface
interface ServiceItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}

// Skills/Services data array
const services: ServiceItem[] = [
  {
    icon: <FaLaptopCode size={35} />,
    title: "Frontend Development",
    description:
      "Expertise in React, Next.js, and Tailwind CSS to build responsive, interactive user interfaces.",
    link: "/skills/#frontend",
  },
  {
    icon: <FaPenNib size={35} />,
    title: "Backend Development",
    description:
      "Develop scalable backend systems with Node.js, Express, and databases like MongoDB & PostgreSQL.",
    link: "/skills/#backend",
  },
  {
    icon: <FaShareAlt size={35} />,
    title: "Full-Stack Development",
    description:
      "Integrating frontend and backend to build complete web applications with seamless functionality.",
    link: "/skills/#fullstack",
  },
  {
    icon: <FaBlog size={35} />,
    title: "Software Engineering",
    description:
      "Designing maintainable software solutions using best practices and modern architecture.",
    link: "/skills/#softwareengineering",
  },
  {
    icon: <FaTags size={35} />,
    title: "Portfolio & Personal Projects",
    description:
      "Crafting portfolio websites and projects to showcase skills and achievements effectively.",
    link: "/skills/#portfolio",
  },
  {
    icon: <FaClipboardList size={35} />,
    title: "Project Documentation",
    description:
      "Creating clear, concise documentation for code and projects to improve collaboration and maintainability.",
    link: "/skills/#documentation",
  },
];

const OurServices: React.FC = () => {
  return (
    <div className="py-14 px-4 md:px-20 overflow-x-hidden ">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <BringToFront className="text-primary w-5 h-5" />
          <h3 className="text-xl font-bold text-primary">My Skills</h3>
          <div className="h-0.5 w-20  bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-[#000000] dark:text-white mb-2">
          What I Can Do
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          These are some of the skills and technologies I have worked with and used in my projects.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {services.map((service, idx) => {
          const isMiddleCard = idx === 1;

          return (
            <motion.div
              key={idx}
              whileHover="hover"
              className={`relative h-60 p-6 text-sm shadow-lg group overflow-hidden transition-all duration-300 rounded-md ${
                isMiddleCard
                  ? "bg-gradient-to-r from-[#000000] to-[#232a31] text-white"
                  : "bg-white text-zinc-700 hover:bg-gradient-to-r hover:from-[#000000] hover:to-[#232a31] hover:text-white"
              }`}
            >
              {/* Card content animation */}
              <motion.div
                initial={{ y: 0 }}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 120 }}
                className="flex flex-col justify-between h-full"
              >
                <div>
                  {/* Icon */}
                  <motion.div
                    className="mb-3"
                    variants={{
                      hover: { opacity: 0, transition: { duration: 0.5 } },
                      initial: { opacity: 1 },
                    }}
                    initial="initial"
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="leading-relaxed text-sm">{service.description}</p>
                </div>

                {/* Read More */}
                <div
                  className={`${
                    isMiddleCard
                      ? ""
                      : "opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  }`}
                >
                  <Link
                    href={service.link}
                    className={`font-semibold flex items-center gap-2 text-sm transition-colors duration-300 ${
                      isMiddleCard
                        ? "text-white"
                        : "text-blue-600 group-hover:text-white"
                    }`}
                  >
                    Learn More{" "}
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ repeat: Infinity, duration: 1 }}
                    >
                      &rarr;
                    </motion.span>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default OurServices;
