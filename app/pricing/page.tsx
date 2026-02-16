"use client";
import React from "react";
import { motion } from "framer-motion";
import { CirclePoundSterling } from "lucide-react"; // Lucide icon
import PricingHero from "../components/pricinghero";
import FAQPage from "../components/faq";

type Plan = {
  name: string;
  price: string;
  features: string[];
  featured?: boolean;
};

const plans: Plan[] = [
  {
    name: "Hourly Plan",
    price: "$15 - $20/hr",
    features: [
      "Flexible Hours",
      "Priority Support",
      "Pay As You Go",
      "Access to All Features",
    ],
  },
  {
    name: "Monthly Plan",
    price: "$3k - $35k/mo",
    features: [
      "Full-time Commitment",
      "24/7 Support",
      "Dedicated Account Manager",
      "Advanced Analytics",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "$99/mo",
    features: ["Unlimited Projects", "1 TB Storage", "Dedicated Support"],
  },
];

export default function PremiumPricing() {
  return (
    <>
     <PricingHero/>
     <FAQPage/>
      <div className="py-24 flex flex-col items-center">
        {/* Heading with Icon + Line */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-4 mb-6"
        >
          {/* Left Lucide Icon */}
          <CirclePoundSterling className="w-8 h-8 mt-3 text-primary" />

          {/* Centered Text */}
          <h2 className="text-5xl font-extrabold text-gray-900 dark:text-white text-center">
            Our Pricing Plans
          </h2>

          {/* Right Decorative Line */}
          <div className="h-0.5 w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl"
        >
          Choose the plan that fits your business needs. Upgrade anytime or
          cancel easily.
        </motion.p>

        {/* Pricing Cards */}
        <div className="grid gap-12 md:grid-cols-3 w-full max-w-6xl px-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className={`relative flex flex-col p-8 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-xl ${
                plan.featured
                  ? "bg-gradient-to-tr from-blue-500 via-blue-400 to-gray-400 text-white shadow-[0_20px_60px_rgba(255,105,180,0.3)]"
                  : "bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
              }`}
            >
              {plan.featured && (
                <span className="absolute top-0 right-4 -translate-y-1/2 bg-yellow-400 text-gray-900 font-bold px-3 py-1 rounded-full text-sm shadow-lg">
                  Most Popular
                </span>
              )}

              <h3 className="text-3xl font-bold mb-4">{plan.name}</h3>
              <p className="text-4xl font-extrabold mb-6">{plan.price}</p>

              <ul className="flex-1 mb-6 space-y-4">
                {plan.features.map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * i }}
                    className="flex items-center gap-3"
                  >
                    <span className="inline-block w-5 h-5 rounded-full bg-neutral-400 text-white flex-shrink-0 flex items-center justify-center">
                      ✓
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <button
                className={`py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${
                  plan.featured
                    ? "bg-white text-purple-600 hover:bg-white/90"
                    : "bg-blue-500 text-white hover:bg-blue-600"
                }`}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
