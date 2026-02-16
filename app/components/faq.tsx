"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What type of projects do you take?",
    answer: "I specialize in web, mobile, and full-stack development with a focus on clean, scalable architecture.",
  },
  {
    question: "How long does a project usually take?",
    answer: "Depending on complexity, most projects are delivered in 2 to 8 weeks for an MVP.",
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, I provide maintenance, updates, and ongoing consultation after project completion.",
  },
  {
    question: "Can I hire you for short-term tasks?",
    answer: "Absolutely! I handle short-term tasks, bug fixes, and consulting projects as well.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* soft background glow */}
      <div className="absolute top-[-150px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl -z-10" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-900 dark:text-neutral-100 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-neutral-600 dark:text-neutral-400 mb-12">
          Quick answers to common questions about my work, process, and support.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              className="bg-white/70 dark:bg-neutral-800/60 backdrop-blur-lg border border-neutral-200 dark:border-neutral-700 rounded-2xl shadow-lg hover:shadow-2xl transition cursor-pointer overflow-hidden"
              onClick={() => toggle(index)}
            >
              <motion.button
                layout
                className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none"
              >
                <span className="font-medium text-neutral-900 dark:text-neutral-100">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown size={20} className="text-neutral-500 dark:text-neutral-300" />
                </motion.div>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-4 text-neutral-700 dark:text-neutral-300 text-sm sm:text-base"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
