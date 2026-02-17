"use client";

import { Tabs } from "@/components/ui/tabs";
import {
  Codepen,
  LayoutDashboard,
  ShoppingCart,
  Code2,
  ExternalLink,
  Github,
  LucideIcon,
  Boxes,
  Blocks,
  Command,
  ChartNetwork,
  Framer,
  Combine,
  Group,
} from "lucide-react";
import { TrustedCompanies } from "../components/trustedcompanies";
import ProjectsHero from "../components/projectshero";
import ProjectSection from "../components/projectsection";

type Project = {
  icon: LucideIcon;
  title: string;
  role: string;
  description: string;
};

const projectsData: Project[] = [
  {
    icon: LayoutDashboard,
    title: "Persivia (EHR System)",
    role: "Senior Team Member",
    description:
      "Developed a web-based Electronic Health Records (EHR) system for medical organizations, enabling patient tracking and management.",
  },
  {
    icon: ShoppingCart,
    title: "SureTec (Insurance Bonding)",
    role: "Senior Team Member",
    description:
      "Built a web application for SureTec, facilitating the purchase of bonds for principals and surety management.",
  },
  {
    icon: Code2,
    title: "EVAC (East Valley Access Center)",
    role: "Team Lead",
    description:
      "Led development of a web application to track patient information, medications, medical reports, and appointments, utilizing Telerik controls for reporting and data visualization.",
  },
  {
    icon: Boxes,
    title: "BI (Business Intelligence)",
    role: "Team Member",
    description:
      "Contributed to an online order management system for Nestlé distributors, integrating Telerik controls for reporting and data visualization.",
  },
  {
    icon: Blocks,
    title: "SalePoint (Retail POS System)",
    role: "Team Member",
    description:
      "Developed a desktop application for a retail store, enabling barcode scanning and order billing.",
  },
  {
    icon: Command,
    title: "SchoolProject (School Management System)",
    role: "Team Member",
    description:
      "Worked on an online system to manage student grades, assignments, and attendance, using Infragistics controls and ActiveReports for data visualization and reporting.",
  },
  {
    icon: ChartNetwork,
    title: "WIMS (Workshop Information Management System)",
    role: "Group Leader",
    description:
      "Led development of a Windows app to manage orders and tasks in an automotive workshop.",
  },
  {
    icon: Framer,
    title: "Spinning Calculations",
    role: "Group Leader",
    description:
      "Developed a Windows app for calculating thread credentials in the spinning industry.",
  },
  {
    icon: Combine,
    title: "Construction Management System",
    role: "Group Leader",
    description:
      "Led the development of a web application to manage inventory for a construction company.",
  },
  {
    icon: Group,
    title: "Random",
    role: "Group Leader",
    description:
      "Led the development of a web application to manage inventory for a construction company.",
  },
];
const tabProjects: Record<string, Project[]> = {
  "Persivia / SureTec": projectsData.slice(0, 2),
  "EVAC / BI": projectsData.slice(2, 4),
  "SalePoint / SchoolProject": projectsData.slice(4, 6),
  "WIMS / Spinning Calculations": projectsData.slice(6, 8),
  "Construction/Random": projectsData.slice(8, 10),
};

export default function ProjectsDemo() {
  const tabs = [
    {
      title: "EHR / ST",
      value: "EHR / ST",
      content: (
        <TabWrapper>
          <ProjectsGrid projects={tabProjects["Persivia / SureTec"]} />
        </TabWrapper>
      ),
    },
    {
      title: "EVAC / BI",
      value: "EVAC / BI",
      content: (
        <TabWrapper>
          <ProjectsGrid projects={tabProjects["EVAC / BI"]} />
        </TabWrapper>
      ),
    },
    {
      title: "SP",
      value: "SP",
      content: (
        <TabWrapper>
          <ProjectsGrid projects={tabProjects["SalePoint / SchoolProject"]} />
        </TabWrapper>
      ),
    },
    {
      title: "WIMS / SC",
      value: "WIMS / SC",
      content: (
        <TabWrapper>
          <ProjectsGrid
            projects={tabProjects["WIMS / Spinning Calculations"]}
          />
        </TabWrapper>
      ),
    },
    {
      title: "CR",
      value: "CR",
      content: (
        <TabWrapper>
          <ProjectsGrid projects={tabProjects["Construction/Random"]} />
        </TabWrapper>
      ),
    },
  ];

  return (
    <>
      <ProjectsHero />
      <TrustedCompanies />
      <ProjectSection />

      <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative flex flex-col max-w-5xl mx-auto w-full my-40">
        <div className="flex items-center justify-center gap-4 mb-10 w-full">
          <Codepen className="w-7 h-7 mt-2 text-neutral-700 dark:text-white" />
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Main Projects
          </h2>
          <div className="h-0.5 flex-1 max-w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
        </div>
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

const TabWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="w-full h-89 rounded-2xl p-8  bg-gradient-to-r from-black to-[#2e3033] overflow-auto">
      {children}
    </div>
  );
};

const ProjectsGrid = ({ projects }: { projects: Project[] }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 overflow-hidden">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
};

const ProjectCard = ({ icon: Icon, title, role, description }: Project) => {
  return (
    <div className="group relative">
      {/* Glow */}
      <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-primary via-gray-400 to-gray-300 opacity-20 blur-lg group-hover:opacity-60 transition duration-500 pointer-events-none" />

      {/* Card */}
      <div
        className="relative rounded-2xl bg-neutral-950 p-5 border border-white/10 
        transform transition-all duration-500 
        group-hover:-translate-y-2 group-hover:shadow-2xl"
      >
        {/* Icon */}
        <div className="mb-4">
          <div
            className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-white/10 
            flex items-center justify-center text-white
            group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
          >
            <Icon className="w-6 h-6 animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-lg md:text-xl font-bold text-white tracking-tight">
          {title}
        </h3>

        {/* Role */}
        <p className="mt-1 text-sm text-white font-medium">{role}</p>

        {/* Description */}
        <p className="mt-3 text-sm text-neutral-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Bottom actions */}
        <div className="mt-5 flex items-center justify-between text-sm text-neutral-400">
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition">
            <ExternalLink className="w-4 h-4" /> Live
          </span>
          <span className="flex items-center gap-1 hover:text-white cursor-pointer transition">
            <Github className="w-4 h-4" /> Code
          </span>
        </div>
      </div>
    </div>
  );
};
