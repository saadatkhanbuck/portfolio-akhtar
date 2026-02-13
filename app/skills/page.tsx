"use client";

import React from "react";
import {
  CodeIcon,
  BarChartIcon,
  LayersIcon,
  TerminalIcon,
  CloudIcon,
  DatabaseIcon,
  BoxIcon,
  WrenchIcon,
  SparklesIcon,
} from "lucide-react";

import {
  FaPython,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaBootstrap,
} from "react-icons/fa";
import {
  SiDotnet,
  SiSharp,
  SiPostgresql,
  SiMui,
  SiJquery,
  SiNodedotjs,
  SiMongodb,
} from "react-icons/si";

import { InfiniteSkillsCards } from "@/components/ui/infinitemovingcard";
import SkillsHero from "../components/skillshero";

import OurServices from "../components/ourservice";
import { TrustedCompanies } from "../components/trustedcompanies";

/* ------------------ DATA ------------------ */

const skills = [
  { name: "ASP.NET C#", icon: SiSharp, category: "Web & Desktop Apps" },
  { name: "ASP.NET Web API", icon: SiDotnet, category: "Backend API" },
  { name: "Node.js", icon: SiNodedotjs, category: "Backend" },
    { name: "Bootstrap", icon: FaBootstrap, category: "UI Framework" },
  { name: "ASP.NET MVC", icon: SiSharp, category: "Backend" },
   { name: "jQuery", icon: SiJquery, category: "Frontend" },
   { name: "MongoDB", icon: SiMongodb, category: "NoSQL" },
  { name: "Python (Django)", icon: FaPython, category: "Backend" },
  { name: "Android Development", icon: SiMui, category: "Mobile Apps" },
  { name: "ADO.NET", icon: SiSharp, category: "Data Access" },
   { name: "Entity Framework", icon: SiDotnet, category: "ORM" },
  { name: "React JS", icon: FaReact, category: "Front-end" },
  { name: "JavaScript", icon: FaJs, category: "Front-end" },
  { name: "HTML 5", icon: FaHtml5, category: "Front-end" },
  { name: "CSS 3", icon: FaCss3Alt, category: "Front-end" },
  { name: "MS SQL Server", icon: FaDatabase, category: "Database" },
  { name: "ClickHouse", icon: DatabaseIcon, category: "Analytics DB" },
  { name: "PostgreSQL", icon: SiPostgresql, category: "Database" },
];

const tools = [
  { icon: <LayersIcon />, label: "Xamarin Forms" },
  { icon: <BarChartIcon />, label: "Telerik Reports" },
  { icon: <BarChartIcon />, label: "Active Reports" },
  { icon: <CodeIcon />, label: "Visual Studio" },
  { icon: <TerminalIcon />, label: "VS Code" },
  { icon: <CodeIcon />, label: "PyCharm" },
  { icon: <BoxIcon />, label: "Git" },
  { icon: <CloudIcon />, label: "Azure DevOps" },
  { icon: <DatabaseIcon />, label: "Docker" },
  { icon: <WrenchIcon />, label: ".NET Tooling" },
];

/* ------------------ COMPONENT ------------------ */

export default function SkillsDemo() {
  return (
    <>
    <SkillsHero/>
    <section  className="relative overflow-hidden py-16">
      <div className="max-w-8xl mx-auto px-4 space-y-8">

        {/* ===== CORE SKILLS HEADER ===== */}
        <SectionHeader
          icon={<SparklesIcon className="w-6 h-6" />}
          title="Core Skills"
        />

        {/* ===== SKILLS CARDS ===== */}
        <div className="flex items-center justify-center overflow-hidden">
          <InfiniteSkillsCards
            skills={skills}
            direction="right"
            speed="slow"
          />
        </div>

        {/* ===== TOOLS HEADER ===== */}
        <SectionHeader
          icon={<WrenchIcon className="w-6 h-6" />}
          title="Tools & Reporting"
        />

        {/* ===== TOOLS MARQUEE (LEFT → RIGHT → LEFT) ===== */}
        <div className="space-y-2">
          <Marquee direction="left" />
          <Marquee direction="right" />
          {/* <Marquee direction="left" /> */}
        </div>
      </div>
    </section>
    {/* <TrustedCompanies/> */}
    <OurServices/>
    </>
  );
}

/* ------------------ HEADER ------------------ */

function SectionHeader({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3">
      <span className="text-primary w-6 h-6">{icon}</span>
      <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight">
        {title}
      </h2>
      <div className="h-0.5 w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
    </div>
  );
}

/* ------------------ MARQUEE ------------------ */

function Marquee({ direction }: { direction: "left" | "right" }) {
  return (
    <div
      className={`whitespace-nowrap ${
        direction === "left"
          ? "animate-marquee-left"
          : "animate-marquee-right"
      }`}
    >
      <div className="flex gap-4 w-fit">
        {[...tools, ...tools].map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 px-5 py-4 bg-card rounded-xl shadow-sm min-w-[200px]"
          >
            <span className="text-foreground dark:text-blue-400">
              {item.icon}
            </span>
            <span className="text-foreground font-medium text-sm">
              {item.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
