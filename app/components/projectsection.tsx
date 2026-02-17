"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  shortTitle: string;
  title: string;
  role: string;
  duration: string;
  description: string;
  tech: string[];
  highlights: string[];
}

const projects: Project[] = [
  {
    shortTitle: "TROUNCE",
    title: "TROUNCE – Social Media Content Scheduling System",
    role: "Team Lead",
    duration: "Feb 2025 – Present",
    description:
      "TROUNCE is a social media content scheduling and automation platform that enables businesses to manage, schedule, and publish content across LinkedIn, Facebook, Instagram, and Twitter from a centralized dashboard.",
    tech: [
      "Express.js",
      "React.js",
      "MongoDB",
      "OAuth 2.0",
      "JWT Authentication",
      "LinkedIn API",
      "Facebook Graph API",
      "Instagram Graph API",
      "Twitter API",
      "Bootstrap",
    ],
    highlights: [
      "Designed and developed backend APIs for content scheduling and publishing",
      "Implemented OAuth 2.0 secure authentication and account linking",
      "Built a scheduling engine using background jobs for automated posting",
      "Developed real-time dashboard for post status tracking",
      "Integrated analytics module for engagement metrics (likes, shares, comments, reach)",
    ],
  },
  {
    shortTitle: "ASKAII",
    title: "ASKAII – Heathrow Airport Parking Booking System (UK)",
    role: "Full Stack Developer",
    duration: "Apr 2024 – Present",
    description:
      "ASKAII is a modern web-based airport parking reservation system developed for Heathrow Airport, allowing users to search, book, and manage parking with real-time availability and secure payment processing.",
    tech: [
      "React.js",
      "ASP.NET Core Web API",
      "Entity Framework Core",
      "SQL Server",
      "Redux",
      "Bootstrap",
      "REST APIs",
      "JWT Authentication",
      "Stripe",
    ],
    highlights: [
      "Developed RESTful APIs for bookings, pricing, and user management",
      "Integrated SQL Server using Entity Framework Core",
      "Built responsive UI in React.js with Redux state management",
      "Implemented JWT-based authentication and role-based authorization",
      "Optimized API performance and production reliability",
      "Integrated secure online payment processing",
    ],
  },
  {
    shortTitle: "Persivia",
    title: "Persivia Carespace – Healthcare Data Monitoring Platform",
    role: "Principal Software Engineer",
    duration: "Nov 2019 – Present",
    description:
      "Healthcare data monitoring and analytics platform supporting population health management, care coordination, and compliance with CMS, MIPS, and ACO programs.",
    tech: [
      ".NET",
      "SQL Server",
      "ClickHouse",
      "MongoDB",
      "HL7",
      "FHIR",
      "Healthcare Compliance",
      "Microservices Architecture",
    ],
    highlights: [
      "Designed high-performance backend systems for processing clinical and claims data",
      "Integrated HL7 and FHIR healthcare data feeds",
      "Built real-time monitoring dashboards for compliance programs",
      "Optimized ingestion pipelines for large-scale data processing",
      "Ensured HIPAA-compliant handling of PHI",
      "Led automation of compliance reporting reducing manual effort by 60%",
    ],
  },
  {
    shortTitle: "SureTec",
    title: "SureTec – Surety Bond Management System (US)",
    role: "Senior ASP.NET Developer / Full Stack Developer",
    duration: "Jul 2016 – Oct 2019",
    description:
      "Comprehensive web-based system for managing the full lifecycle of surety bonds including underwriting, issuance, renewal, claims processing, and compliance reporting.",
    tech: [
      "ASP.NET Web Forms",
      "C#",
      "Entity Framework",
      "SQL Server",
      "Web API",
      "jQuery",
      "Bootstrap",
      "iTextSharp",
      "Authorize.NET",
    ],
    highlights: [
      "Developed bond creation and underwriting workflows",
      "Implemented automated PDF bond document generation",
      "Designed relational database structure for contracts and financial data",
      "Built REST APIs for third-party integrations",
      "Collaborated with business teams to ensure regulatory compliance",
    ],
  },
  {
    shortTitle: "EVAC",
    title: "EVAC – Electronic Medical Record (EMR) System",
    role: "Senior ASP.NET Developer / Full Stack Developer",
    duration: "Jan 2016 – Mar 2018",
    description:
      "Secure HIPAA-compliant Electronic Medical Record (EMR) system for managing patient records, clinical workflows, appointments, and healthcare documentation.",
    tech: [
      "ASP.NET MVC",
      "C#",
      "Entity Framework",
      "ADO.NET",
      "SQL Server",
      "HL7 Integration",
      "Bootstrap",
      "Telerik Controls",
    ],
    highlights: [
      "Developed clinical modules and workflows",
      "Implemented HL7 data integration for lab interoperability",
      "Enforced role-based access control for HIPAA compliance",
      "Optimized SQL queries and stored procedures",
      "Built reporting dashboards for clinical and administrative metrics",
    ],
  },
  {
    shortTitle: "BI System",
    title: "Business Intelligence – Supply Chain Analytics Platform",
    role: "ASP.NET MVC Developer",
    duration: "Jun 2015 – Jan 2016",
    description:
      "Business Intelligence web application developed for monitoring warehouse distribution and product analytics with interactive dashboards and reporting.",
    tech: [
      "ASP.NET MVC",
      "C#",
      "Entity Framework",
      "SQL Server",
      "jQuery",
      "CSS",
    ],
    highlights: [
      "Built real-time inventory monitoring dashboards",
      "Developed dynamic data visualization modules",
      "Created complex stored procedures for large datasets",
      "Implemented drill-down reporting for warehouse analytics",
    ],
  },
  {
    shortTitle: "Limos4Less",
    title: "Limos4Less – Online Limousine Booking System",
    role: "ASP.NET Developer",
    duration: "Mar 2014 – Jun 2015",
    description:
      "Web-based limousine booking platform supporting real-time availability, fare calculation, online reservations, and secure payments.",
    tech: [
      "ASP.NET Web Forms",
      "C#",
      "ADO.NET",
      "SQL Server",
      "Google APIs",
      "PayPal",
    ],
    highlights: [
      "Developed booking workflows and fare estimation logic",
      "Integrated Google APIs for location services",
      "Designed optimized database schema for bookings",
      "Implemented role-based admin and customer portals",
    ],
  },
  {
    shortTitle: "POS",
    title: "Point of Sale (POS) Desktop Application",
    role: "Desktop Application Developer",
    duration: "Oct 2014 – Jun 2015",
    description:
      "Windows-based POS system for managing sales transactions, inventory tracking, billing, and reporting for retail businesses.",
    tech: [
      "VB.NET",
      "Windows Forms",
      "ADO.NET",
      "SQL Server",
      "Crystal Reports",
    ],
    highlights: [
      "Developed full desktop UI and backend logic",
      "Integrated barcode scanning support",
      "Implemented inventory control and low-stock alerts",
      "Built sales and profit analysis reports",
    ],
  },
  {
    shortTitle: "School MS",
    title: "School Management System",
    role: "ASP.NET Developer",
    duration: "Aug 2014 – Jun 2015",
    description:
      "Web-based academic management system handling admissions, fee management, exams, staff operations, and reporting.",
    tech: [
      "ASP.NET Web Forms",
      "C#",
      "ADO.NET",
      "SQL Server",
      "Crystal Reports",
      "JavaScript",
    ],
    highlights: [
      "Developed admissions, fees, and examination modules",
      "Implemented role-based access for admin, teachers, students",
      "Integrated Crystal Reports for report cards and receipts",
      "Optimized database queries for performance",
    ],
  },
  {
    shortTitle: "WIMS",
    title: "Workshop Information Management System",
    role: "Full Stack Developer",
    duration: "Oct 2012 – Aug 2013",
    description:
      "Workshop automation system for managing vehicle service records, job cards, spare parts inventory, billing, and technician assignments.",
    tech: ["ASP.NET Web Forms", "C#", "ADO.NET", "SQL Server"],
    highlights: [
      "Developed job card and service tracking modules",
      "Designed database schema and data access layers",
      "Implemented billing and invoice generation",
      "Ensured role-based access control and input validation",
    ],
  },
];

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="min-h-screen mt-10 flex flex-col md:flex-row text-black dark:text-white">
      {/* LEFT SIDEBAR */}
      {/* DESKTOP SIDEBAR */}
      <aside className="w-1/4 hidden md:flex flex-col p-6 border-r border-neutral-200 dark:border-neutral-800">
        <h2 className="text-xl font-bold mb-6">Projects</h2>

        <div className="flex flex-col gap-3">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              onClick={() => setActiveIndex(idx)}
              className={`cursor-pointer text-sm px-3 py-2 rounded-lg transition ${
                activeIndex === idx
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "hover:bg-neutral-200 dark:hover:bg-neutral-800"
              }`}
            >
              {project.shortTitle}
            </div>
          ))}
        </div>
      </aside>

      {/* MOBILE TABS */}
      <div className="md:hidden overflow-x-auto border-b border-neutral-200 dark:border-neutral-800">
        <div className="flex gap-3 p-4 min-w-max">
          {projects.map((project, idx) => (
            <button
              key={project.title}
              onClick={() => setActiveIndex(idx)}
              className={`text-xs whitespace-nowrap px-4 py-2 rounded-full border transition ${
                activeIndex === idx
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "border-neutral-300 dark:border-neutral-700"
              }`}
            >
              {project.shortTitle}
            </button>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <main className="flex-1 p-5 sm:p-6 md:p-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={projects[activeIndex].title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="space-y-6 max-w-4xl"
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold leading-tight">
                {projects[activeIndex].title}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">
                {projects[activeIndex].role} • {projects[activeIndex].duration}
              </p>
            </div>

            <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
              {projects[activeIndex].description}
            </p>

            <div>
              <h4 className="font-semibold mb-3">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {projects[activeIndex].tech.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs border border-neutral-300 dark:border-neutral-700 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Key Contributions</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm text-neutral-700 dark:text-neutral-300">
                {projects[activeIndex].highlights.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </main>
    </section>
  );
}
