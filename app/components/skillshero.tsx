"use client";

import { motion } from "motion/react";

export default function SkillsHero() {
//   const stack = [
//     "React / Next.js",
//     "TypeScript",
//     "Node & APIs",
//     "Databases",
//     "System Design",
//     "DevOps", 
//   ];

  return (
    <section className="relative overflow-hidden py-36">
      {/* background */}
      <div className="absolute inset-0 -z-30 " />

      {/* light beam */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_10%_20%,rgba(120,120,120,0.12),transparent_45%)]" />

      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 md:grid-cols-2">
          {/* LEFT */}
          <div>
            {/* badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-1 text-sm font-medium text-neutral-700 dark:text-neutral-300"
            >
              <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
              Skills & Expertise
            </motion.div>

            {/* title */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-5xl font-extrabold leading-[1.03] tracking-tight md:text-7xl"
            >
              I build robust systems using{" "}
              <span className="bg-gradient-to-r from-neutral-900 via-neutral-500 to-neutral-400 dark:from-white dark:via-neutral-300 dark:to-neutral-500 bg-clip-text text-transparent">
                proven technologies
              </span>
            </motion.h1>

            {/* desc */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600 dark:text-neutral-400"
            >
              My toolkit is shaped by years of building and scaling real-world
              products. I focus on performance, clean architecture and long-term
              maintainability.
            </motion.p>

            {/* metrics */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25 }}
              className="mt-12 flex flex-wrap gap-12"
            >
              {[
                { value: "13+", label: "Years" },
                { value: "150+", label: "Projects" },
                { value: "75+", label: "Stacks" },
              ].map((m) => (
                <div key={m.label}>
                  <div className="text-3xl font-bold">{m.value}</div>
                  <div className="text-sm text-neutral-500">{m.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT */}
          {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.2 }}
  className="relative"
>
  <div className="relative h-[600px] w-[600px] overflow-hidden rounded-2xl border shadow-2xl">
    {/* video */}
    <video
      autoPlay
      muted
      loop
      playsInline
      className="absolute inset-0 h-full w-full object-cover"
      src="https://cdn.dribbble.com/userupload/45868444/file/0bdb4d8303c9f8ac3ce1f1661d13d106.mp4" // apna video link
    />

    {/* dark overlay for readability */}


    {/* floating content */}
    <div className="relative z-10 flex h-full flex-col justify-between p-8 text-white">
      {/* <div>
        <div className="text-sm text-neutral-700 opacity-80">Engineering</div>
        <div className="text-2xl text-neutral-600 font-semibold">Real World Systems</div>
      </div> */}

      {/* <div className="space-y-4">
        {stack.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            className="flex items-center justify-between"
          >
            <span>{item}</span>

            <div className="ml-6 h-[2px] w-20 bg-white/30 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ delay: 0.3 + i * 0.05, duration: 0.6 }}
                className="h-full bg-white"
              />
            </div>
          </motion.div>
        ))}
      </div> */}
    </div>
  </div>

  {/* glow */}
  <div className="absolute -right-10 -bottom-10 -z-10 h-56 w-56 rounded-full bg-neutral-400/20 blur-3xl" />
</motion.div>

        </div>
      </div>
    </section>
  );
}
