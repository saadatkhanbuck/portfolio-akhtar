"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, } from "lucide-react";

export default function ExperienceHero() {
  return (
    <section className="relative min-h-screen overflow-hidden  text-neutral-900">
      {/* gradient background */}

      {/* radial glow */}
      <div className="absolute left-1/2 top-[-20%] -z-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-neutral-200/40 blur-3xl" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-24 md:grid-cols-2">
          {/* LEFT */}
          <div className="text-center md:text-left">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-sm"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Career Path
            </motion.div>

            {/* heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-semibold dark:text-white leading-[1.05] tracking-tight md:text-7xl"
            >
              Experience that builds.
              <br />
              <span className="bg-gradient-to-r from-neutral-400 to-neutral-400 bg-clip-text text-transparent">
                Impact that lasts.
              </span>
            </motion.h1>

            {/* desc */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-300"
            >
              Over the years I’ve worked across startups and enterprise
              environments, leading teams, architecting systems, and shipping
              reliable products used by thousands.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-start justify-center"
            >
              <Link
                href="/contactme"
                className="group relative border border-black dark:border dark:border-white inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-neutral-900 px-8 py-3 font-medium text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-white  transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  Contact Me
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href="/#projects"
                className="group relative border border-black inline-flex items-center dark:border dark:border-white justify-center gap-2 overflow-hidden rounded-xl bg-neutral-900 px-8 py-3 font-medium text-white"
              >
                <span className="absolute inset-0 translate-y-full bg-white  dark:border dark:border-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  View Work
                </span>
              </Link>
            </motion.div>

            {/* credibility numbers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-12 md:justify-start justify-center"
            >
              {[
                { value: "13+", label: "Years" },
                { value: "100+", label: "Products" },
                { value: "50+", label: "Teams Led" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl dark:text-neutral-300 font-semibold">{item.value}</p>
                  <p className="text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative hidden md:flex justify-center"
          >
            {/* main container */}
            <div className="relative w-[560px] rounded-3xl border border-neutral-200 bg-white p-8 shadow-[0_40px_120px_rgba(0,0,0,0.12)]">
              <div className="absolute left-8 top-8 bottom-8 w-px bg-neutral-200" />

              <div className="space-y-10">
                {[
                  {
                    role: "Principal Software Engineer",
                    company: "Soliton Technologies",
                    period: "2019 – 2024",
                  },
                  {
                    role: "Senior Software Engineer",
                    company: "FutureNow",
                    period: "2016 – 2019",
                  },
                  {
                    role: "Software Engineer",
                    company: "Digital Logix",
                    period: "2014 – 2015",
                  },
                ].map((job, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.12 }}
                    className="relative pl-12"
                  >
                    <div className="absolute left-[-6px] top-2 h-3 w-3 rounded-full bg-neutral-900" />
                    <p className="text-sm text-neutral-500">{job.period}</p>
                    <p className="font-semibold">{job.role}</p>
                    <p className="text-neutral-600">{job.company}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* floating card */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-8 -top-8 rounded-xl border border-neutral-200 bg-white px-4 py-3 shadow-xl"
            >
              <p className="text-xs text-neutral-500">Currently</p>
              <p className="text-sm font-semibold">Open to opportunities</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
