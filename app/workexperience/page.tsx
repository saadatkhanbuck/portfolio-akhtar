"use client";

import { LayoutDashboard, EarthLock, Code2, LucideIcon, ChevronDown, X } from "lucide-react";
import { useState } from "react";
import ExperienceHero from "../components/experiencehero";
import Work from "../components/work";
import LeadershipImpact from "../components/leadership";

/* =========================
   TYPES
========================= */

type WorkExperience = {
  icon: LucideIcon;
  role: string;
  company: string;
  duration: string;
  highlights: string[];
  skills: string[];
};

/* =========================
   DATA
========================= */

const workExperienceData: WorkExperience[] = [
  {
    icon: LayoutDashboard,
    role: "Principal Software Engineer, Soliton Technologies",
    company: "Persivia Inc.",
    duration: "Nov 2019 - Dec 2026",
    highlights: [
      "Led development of scalable web, mobile, and desktop applications using Xamarin Forms, Python/Django, ASP.NET (Web Forms, MVC and Core) and ReactJS.",
      "Designed and implemented RESTful APIs for seamless system integration.",
      "Managed database design and optimization across MS SQL Server, PostgreSQL, and ClickHouse DB.",
      "Integrated third-party controls (Telerik) to enhance UI/UX.",
      "Developed front-end solutions with JavaScript, HTML5, CSS3, and ReactJS for responsive, dynamic interfaces.",
      "Created and optimized stored procedures, triggers, and views for efficient database performance.",
      "Collaborated with cross-functional teams, ensuring high-quality product delivery and Agile process adherence.",
      "Mentored junior developers and conducted code reviews to promote best practices."
    ],
    skills: ["React", "Tailwind CSS", "TypeScript", "REST APIs"]
  },
  {
    icon: EarthLock,
    role: "Senior Software Engineer, FutureNow Technologies",
    company: "FutureNow Technologies",
    duration: "Jan 2016 - Oct 2019",
    highlights: [
      "Worked on ASP.NET Web Forms, ASP.NET MVC and ASP.NET Windows Forms to create web and Desktop applications using ADO.NET and Entity Framework.",
      "Built and maintained RESTful APIs.",
      "Developed console applications to support applications running live to update databases and scheduled jobs to send emails to respective recipients.",
      "Optimized databases (SQL Server) including stored procedures and views.",
      "Integrated Telerik controls to enhance UI/UX.",
      "Implemented responsive front-end solutions with JavaScript, HTML5, CSS3.",
      "Collaborated with teams to ensure high-quality software delivery and code best practices."
    ],
    skills: ["Next.js", "Node.js", "PostgreSQL", "Tailwind CSS"]
  },
  {
    icon: Code2,
    role: "Software Engineer, Digital Logix",
    company: "Digital Logix",
    duration: "Feb 2014 - Dec 2015",
    highlights: [
      "Worked on ASP.NET Web Forms and ASP.NET Windows Forms to create web and Desktop applications using ADO.NET and Entity Framework.",
      "Built and maintained RESTful APIs, WCF, and ASMX web services.",
      "Optimized databases (SQL Server) including stored procedures and views.",
      "Integrated Telerik and Infragistics controls to enhance UI/UX.",
      "Implemented responsive front-end solutions with JavaScript, HTML5, CSS3.",
      "Collaborated with teams."
    ],
    skills: ["React", "Telerik", "TypeScript"]
  },
];

/* =========================
   WORK EXPERIENCE SECTION
========================= */

export default function WorkExperienceSection() {
  return (
    <>
    <ExperienceHero/>
    <Work/>
    <LeadershipImpact/>
    <section  className="max-w-6xl mx-auto my-20 px-4">
      {/* Heading */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
        <LayoutDashboard className="w-7 h-7 text-neutral-700 dark:text-white" />
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white text-center md:text-left">
          Work Experience
        </h2>
        <div className="h-0.5 flex-1 max-w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {workExperienceData.map((exp, i) => (
          <ModernWorkExperienceCard key={i} {...exp} />
        ))}
      </div>
    </section>
    </>
  );
};

const ModernWorkExperienceCard = ({
  icon: Icon,
  role,
  company,
  duration,
  highlights,
  skills,
}: WorkExperience) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group w-full">
      {/* Glow / hover effect */}
      <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-gray-500 via-blue-200 to-gray-300 opacity-20 blur-lg group-hover:opacity-60 transition duration-500 pointer-events-none" />

      {/* Card */}
      <div
        className="relative bg-neutral-950 rounded-2xl p-5 border border-white/10 cursor-pointer
        transform transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full">
            <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-white/10 text-white transition-transform group-hover:scale-110">
              <Icon className="w-6 h-6 animate-pulse" />
            </div>
            <div className="flex-1">
              <h3 className="text-lg font-bold text-white">{role}</h3>
              <p className="text-sm text-neutral-400">
                {company} • {duration}
              </p>
            </div>
          </div>
          <ChevronDown
            className={`w-5 h-5 text-neutral-400 transition-transform mt-2 sm:mt-0 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* Expandable Content */}
        <div
          className={`overflow-hidden transition-all duration-500 mt-4 ${
            isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="list-disc list-inside text-sm text-neutral-300 space-y-1">
            {highlights.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
          <div className="mt-4 flex flex-wrap gap-2">
            {skills.map((skill, i) => (
              <span
                key={i}
                className="text-xs px-2 py-1 bg-white/10 text-white rounded-full font-medium"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
