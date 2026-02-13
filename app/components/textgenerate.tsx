"use client";

import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";

const words = `Experienced Full Stack Developer with over a decade of expertise in building robust and scalable web, mobile, and desktop applications. Skilled in Android development using Xamarin Forms and web development with technologies like Python, Django, ASP.NET, and ReactJS. Proficient in backend technologies, including WCF, ASMX services, and RESTful APIs. Strong database management capabilities in MS SQL Server, PostgreSQL, and ClickHouse DB. Adept at integrating third-party controls like Telerik and Infragistics and developing front-end solutions using JavaScript, HTML, CSS, and ReactJS.`;

export default function TextGenerateEffectDemo() {
  return (
    <section className="py-28 px-6 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="relative w-[25rem] h-80 md:h-[32rem] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="/img/akhtar.jpeg" // <-- Replace with your image
              alt="Portfolio Visual"
              className="object-cover w-full h-full"
            />
            {/* Optional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 via-purple-500/20 to-pink-500/20 mix-blend-overlay pointer-events-none" />
          </div>
        </motion.div>

        {/* Right Animated Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <h2 className="text-4xl italic md:text-5xl font-extrabold text-gray-900 dark:text-white mb-6">
            About Us
          </h2>
          {/* Animated Text */}
          <TextGenerateEffect
            words={words}
            filter={true}
            duration={0.4}
            className="text-sx md:text-sx leading-relaxed tracking-wide"
          />
        </motion.div>
      </div>
    </section>
  );
}
