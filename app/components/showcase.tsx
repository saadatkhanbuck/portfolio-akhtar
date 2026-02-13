"use client";

import Image from "next/image";
import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
import { Github, Linkedin, Twitter } from "lucide-react";

export function ShowcasePage() {
  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden">
      {/* DARK / GRADIENT BLEND */}
      <div className="absolute inset-0 -z-30 " />

      {/* GRID */}
      <div className="absolute inset-0 -z-20 " />

      {/* NOISE */}
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-16 md:grid-cols-2">
          {/* LEFT */}
          <div className="text-center md:text-left">
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/80 backdrop-blur px-4 py-1 text-sm font-medium shadow"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              Available for work
            </motion.div>

            {/* title */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="italic text-5xl font-extrabold leading-[1.05] tracking-tight md:text-7xl"
            >
              Hello, Its <br />
              <span className="bg-gradient-to-r from-black via-neutral-700 to-neutral-400  dark:bg-gradient-to-r from-neutral-500 via-neutral-400 to-neutral-300 bg-clip-text text-transparent">
                Akhtar Abbas
              </span>
            </motion.h1>

            {/* flip */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mt-6 flex justify-center md:justify-start gap-2"
            >
              <LayoutTextFlip
                text="I'm a"
                words={[
                  "Full Stack Developer",
                  "Mobile App Developer",
                  "Desktop Developer",
                  "Web Developer",
                ]}
              />
            </motion.div>

            {/* description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.35 }}
              className="mx-auto mt-6 max-w-xl text-lg text-neutral-700 md:mx-0"
            >
              I design and build fast, scalable applications with exceptional
              user experiences. Focused on clean architecture and modern tech.
            </motion.p>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row md:justify-start justify-center"
            >
              <a
                href="#projects"
                className="group rounded-xl bg-black px-7 py-3 font-semibold text-white shadow-lg transition hover:scale-105"
              >
                View Projects
                <span className="ml-2 inline-block transition group-hover:translate-x-1">
                  →
                </span>
              </a>

              <a
                href="/cv.pdf"
                className="rounded-xl border bg-white/70 backdrop-blur dark:text-black dark:hover:text-white px-7 py-3 font-semibold transition hover:bg-black hover:text-white hover:scale-105"
              >
                Download CV
              </a>
            </motion.div>

            {/* socials */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex items-center justify-center gap-5 md:justify-start"
            >
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white/80 p-2 backdrop-blur transition hover:scale-110 text-black dark:text-black dark:hover:text-white hover:bg-black hover:text-white"
              >
                <Github size={18} />
              </a>

              <a
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white/80 p-2 backdrop-blur transition hover:scale-110 text-black dark:text-black dark:hover:text-white hover:bg-black hover:text-white"
              >
                <Linkedin size={18} />
              </a>

              <a
                href="https://twitter.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border bg-white/80 p-2 backdrop-blur transition hover:scale-110 text-black dark:text-black dark:hover:text-white hover:bg-black hover:text-white"
              >
                <Twitter size={18} />
              </a>
            </motion.div>
          </div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="relative flex justify-center"
          >
            {/* animated glow ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute h-[320px] w-[320px] md:h-[460px] md:w-[460px] rounded-full border border-dashed border-neutral-300"
            />

            {/* aura */}
            <div className="absolute h-[340px] w-[340px] md:h-[480px] md:w-[480px] rounded-full bg-neutral-300/40 blur-3xl" />

            {/* avatar */}
            <div className="relative h-[260px] w-[260px] md:h-[360px] md:w-[360px] rounded-full bg-white p-0 shadow-2xl transition duration-500 hover:scale-105">
              <div className="relative h-full w-full overflow-hidden rounded-full">
                <Image
                  src="/img/akhtar9.jpeg"
                  alt="Akhtar Abbas"
                  fill
                  priority
                  className="object-cover object-top"
                />
              </div>
            </div>

            {/* floating tech (glass) */}
            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -left-8 top-10 rounded-lg border bg-white/80 text-black backdrop-blur px-3 py-1 text-xs shadow"
            >
              Next.js
            </motion.div>

            <motion.div
              animate={{ y: [5, -5, 5] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute -right-8 top-24 rounded-lg text-black border bg-white/80 backdrop-blur px-3 py-1 text-xs shadow"
            >
              React
            </motion.div>

            <motion.div
              animate={{ y: [-5, 5, -5] }}
              transition={{ repeat: Infinity, duration: 4.5 }}
              className="absolute left-10 -bottom-4 text-black rounded-lg border bg-white/80 backdrop-blur px-3 py-1 text-xs shadow"
            >
              Node
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
