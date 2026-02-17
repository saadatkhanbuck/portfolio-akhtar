"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function TestimonialHero() {
  const testimonials = [
    {
      text: "Akhtar delivered beyond expectations. Strong technical skills, pixel perfect design thinking, and fantastic communication. Would absolutely work again.",
      name: "Sarah Johnson",
      role: "Product Manager",
      initials: "SJ",
    },
    {
      text: "One of the most reliable developers I’ve worked with. Clean architecture, fast delivery and excellent product understanding.",
      name: "David Miller",
      role: "Startup Founder",
      initials: "DM",
    },
    {
      text: "Exceptional experience from start to finish. Professional, responsive and truly cares about quality.",
      name: "Ayesha Khan",
      role: "UI/UX Lead",
      initials: "AK",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen w-full overflow-hidden ">
      {/* background layers */}
      <div className="absolute inset-0 -z-30" />
      <div className="absolute inset-0 -z-20" />
      <div className="absolute inset-0 -z-10 opacity-[0.03] bg-[url('/noise.png')]" />

      {/* glow */}
      <div className="absolute left-1/2 top-[-10%] -z-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-neutral-300/30 blur-3xl dark:bg-neutral-700/30" />

      <div className="relative mx-auto flex min-h-screen max-w-7xl items-center px-6">
        <div className="grid w-full grid-cols-1 items-center gap-20 md:grid-cols-2">
          {/* LEFT */}
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border bg-white/70 dark:bg-white/5 backdrop-blur px-4 py-1 text-sm font-medium shadow"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
               Testimonials
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-7xl"
            >
              Loved by clients
              <br />
              <span className="bg-gradient-to-r from-black via-neutral-700 to-neutral-400 dark:from-neutral-500 dark:via-neutral-400 dark:to-neutral-300 bg-clip-text text-transparent">
                across the globe.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mx-auto mt-6 max-w-xl text-base sm:text-lg text-neutral-500 md:mx-0"
            >
              Founders and teams trust me to deliver scalable, reliable and
              beautifully engineered products. Here’s what they say.
            </motion.p>
          </div>

          {/* RIGHT */}
          <div className="relative flex items-center justify-center mt-16 md:mt-0">
            {/* rotating ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute h-[300px] w-[300px] sm:h-[380px] sm:w-[380px] md:h-[460px] md:w-[460px] rounded-full border border-dashed border-neutral-400"
            />

            {/* aura */}
            <div className="absolute h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] md:h-[500px] md:w-[500px] rounded-full bg-neutral-300/40 blur-3xl" />

            {/* changing testimonial */}
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                className="relative w-[280px] sm:w-[340px] md:w-[400px] rounded-2xl border bg-white/80 dark:bg-neutral-900/70 backdrop-blur-xl p-6 sm:p-8 shadow-2xl"
              >
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 leading-relaxed">
                  “{testimonials[index].text}”
                </p>

                <div className="mt-6 flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black font-semibold">
                    {testimonials[index].initials}
                  </div>
                  <div>
                    <p className="text-sm font-semibold">
                      {testimonials[index].name}
                    </p>
                    <p className="text-xs text-neutral-500">
                      {testimonials[index].role}
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* floating rating */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="absolute left-0 top-0 sm:-left-6 sm:top-10 rounded-xl border bg-white/80 backdrop-blur px-3 py-2 text-xs shadow"
            >
              ⭐⭐⭐⭐⭐
              <div className="text-neutral-500">Top Rated</div>
            </motion.div>

            {/* floating reviews */}
            <motion.div
              animate={{ y: [8, -8, 8] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute right-0 bottom-0 sm:-right-6 sm:bottom-10 rounded-xl border bg-white/80 dark:text-black backdrop-blur px-3 py-2 text-xs shadow"
            >
              100+ Happy Clients
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
