"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Mail, MessageSquare } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden text-neutral-900 dark:text-neutral-100">
      {/* background */}
      <div className="absolute inset-0 -z-30" />
      <div className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* glow */}
      <div className="absolute left-1/2 top-[-15%] -z-10 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-neutral-300/30 blur-3xl dark:bg-neutral-700/30" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* LEFT */}
          <div className="text-center md:text-left">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white/70 dark:border-neutral-700 dark:bg-neutral-800/60 backdrop-blur px-4 py-1.5 text-sm font-medium shadow"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              Contact
            </motion.div>

            {/* heading */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
            >
              Let’s build something
              <br />
              <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
                great together.
              </span>
            </motion.h1>

            {/* desc */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto md:mx-0 mt-6 max-w-xl text-base sm:text-lg text-neutral-600 dark:text-neutral-400"
            >
              Have a project in mind, a question, or just want to say hello? I’m
              always open to discussing new opportunities.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mt-10 flex flex-col gap-4 sm:flex-row md:justify-start justify-center"
            >
              <Link
                href="mailto:akhtar.abbas@huboweb.com"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-900 dark:border-white bg-neutral-900 px-8 py-3 font-medium text-white transition"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-black">
                  Email Me
                  <Mail size={18} />
                </span>
              </Link>

              <Link
                href="/"
                className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl border border-neutral-900 dark:border-white bg-white px-8 py-3 font-medium text-black transition"
              >
                <span className="absolute inset-0 translate-y-full bg-black transition duration-300 group-hover:translate-y-0" />
                <span className="relative z-10 flex items-center gap-2 group-hover:text-white">
                  Send Message
                  <MessageSquare size={18} />
                </span>
              </Link>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25 }}
            className="relative hidden md:flex justify-center"
          >
            <div className="relative w-[520px] rounded-3xl border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8 shadow-xl">
              <div className="space-y-6">
                {/* quick info cards */}
                {[
                  {
                    title: "Project Inquiries",
                    desc: "Let’s discuss timelines, scope and ideas.",
                  },
                  {
                    title: "Partnerships",
                    desc: "Collaboration, integrations & growth.",
                  },
                  {
                    title: "General Questions",
                    desc: "I’ll respond as soon as possible.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    className="rounded-xl border border-neutral-200 dark:border-neutral-700 p-5 shadow-md"
                  >
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* floating response time */}
              <motion.div
                animate={{ y: [-6, 6, -6] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -right-10 top-10 rounded-xl border border-neutral-900 dark:border-white bg-white dark:bg-neutral-700 px-4 py-2 shadow-md"
              >
                <p className="text-xs font-semibold text-neutral-900 dark:text-white">
                  Avg. Reply
                </p>
                <p className="text-sm font-medium">24 Hours</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
