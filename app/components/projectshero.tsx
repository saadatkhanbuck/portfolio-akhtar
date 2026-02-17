"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProjectsHero() {
  return (
    <section className="relative min-h-screen overflow-hidden  text-neutral-900">
      {/* background gradient */}
      <div className="absolute inset-0 -z-20" />

      {/* grid */}
      <div className="absolute inset-0 -z-10 " />

      {/* glow accents */}
     
      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* LEFT */}
          <div className="text-center md:text-left">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 px-4 py-1.5 text-sm font-medium text-neutral-600 shadow-sm backdrop-blur"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Selected Work & Multiple Projects
            </motion.div>

            {/* title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl font-semibold leading-[1.05] dark:text-white tracking-tight md:text-7xl"
            >
              Real products.
              <br />
              <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                Built for real users.
              </span>
            </motion.h1>

            {/* desc */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-600"
            >
              Explore applications I’ve designed and engineered using modern
              technologies, scalable systems, and clean user experiences built
              for growth.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-start justify-center"
            >
              <Link
                href="/#projects"
                className="group relative inline-flex items-center justify-center border border-gray-900 dark:border dark:border-white gap-2 overflow-hidden rounded-xl bg-neutral-900 px-8 py-3 font-medium text-white transition"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  View Projects
                  <ArrowRight
                    size={18}
                    className="transition group-hover:translate-x-1"
                  />
                </span>
              </Link>

              <Link
                href="/contactme"
                className="group relative inline-flex items-center justify-center border border-gray-900 dark:border dark:border-white gap-2 overflow-hidden rounded-xl bg-white px-8 py-3 font-medium text-black transition"
              >
                <span className="absolute inset-0 translate-y-full bg-black transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Start a Project
                </span>
              </Link>
            </motion.div>

            {/* stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-12 flex gap-12 md:justify-start justify-center"
            >
              
              {[
                { value: "150+", label: "Projects" },
                { value: "99+", label: "Clients" },
                { value: "13+ yrs", label: "Experience" },
              ].map((item) => (
                <div key={item.label}>
                  <p className="text-3xl font-semibold dark:text-white tracking-tight">
                    {item.value}
                  </p>
                  <p className="mt-1 text-sm text-neutral-500">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="relative hidden md:flex justify-center"
          >
            {/* glow */}
            <div className="absolute -inset-10 rounded-[40px] " />

            {/* main window */}
            <div className="relative w-[560px] rounded-3xl border border-neutral-200 bg-white shadow-[0_40px_120px_rgba(0,0,0,0.15)]">
              {/* browser */}
              <div className="flex items-center gap-2 border-b border-neutral-200 px-5 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />
                <div className="ml-4 h-2 w-40 rounded bg-neutral-200" />
              </div>

              {/* UI */}
              <div className="h-[360px] bg-gradient-to-br from-neutral-50 to-neutral-100 p-8 space-y-5">
                <div className="h-5 w-40 rounded bg-neutral-300" />
                <div className="h-3 w-72 rounded bg-neutral-200" />
                <div className="h-3 w-52 rounded bg-neutral-200" />
              </div>
            </div>

            {/* floating card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-12 top-10 w-44 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-semibold">Dashboard</p>
              <div className="mt-2 h-2 w-full rounded bg-neutral-200" />
            </motion.div>

            <motion.div
              animate={{ y: [6, -6, 6] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-10 bottom-10 w-44 rounded-xl border border-neutral-200 bg-white p-4 shadow-xl"
            >
              <p className="text-xs font-semibold">Analytics</p>
              <div className="mt-2 h-2 w-full rounded bg-neutral-200" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
