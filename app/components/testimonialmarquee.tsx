"use client";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import { Star } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  message: string;
}

const TESTIMONIALS_ROW_A: Testimonial[] = [
  {
    name: "Michael Carter",
    role: "CTO, HealthTech Inc.",
    message:
      "Exceptional engineering leadership and scalable architecture delivery. Truly enterprise-grade work.",
  },
  {
    name: "Sarah Johnson",
    role: "Product Director",
    message:
      "Delivered high-quality solutions under tight deadlines. Extremely reliable and detail-oriented.",
  },
];

const TESTIMONIALS_ROW_B: Testimonial[] = [
  {
    name: "Daniel Smith",
    role: "Tech Lead",
    message:
      "Strong backend expertise and excellent API design skills. Great team collaboration.",
  },
  {
    name: "Emily Davis",
    role: "Startup Founder",
    message:
      "Transformed our system performance and scalability. Highly recommended engineer.",
  },
];

function TestimonialCard({ name, role, message }: Testimonial) {
  return (
    <div
      className="
      mx-6 
      w-[300px] md:w-[480px] 
      min-h-[150px]
      rounded-3xl
      bg-white dark:bg-neutral-900
      border border-neutral-200 dark:border-neutral-700
      p-8 md:p-10
      flex flex-col justify-between
      transition-all duration-500
      hover:scale-[1.03]
      hover:shadow-xl
      "
    >
      {/* Stars */}
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={18}
            className="mr-1 text-black dark:text-white fill-black dark:fill-white"
          />
        ))}
      </div>

      {/* Message */}
      <p className="text-base leading-relaxed text-neutral-700 dark:text-neutral-300 line-clamp-4">
        “{message}”
      </p>

      {/* User */}
      <div className="flex items-center gap-4 pt-6 border-t border-neutral-200 dark:border-neutral-700">
        <div
          className="
          h-12 w-12 
          rounded-full 
          bg-black dark:bg-white
          text-white dark:text-black
          flex items-center justify-center 
          font-semibold
          "
        >
          {name.charAt(0)}
        </div>

        <div>
          <p className="font-semibold text-black dark:text-white">
            {name}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            {role}
          </p>
        </div>
      </div>
    </div>
  );
}



export default function TestimonialsMarquee() {
  return (
    <section className="relative text-black dark:text-white overflow-hidden">


      {/* Header */}
     

      {/* Marquee */}
      <ScrollVelocityContainer className="w-full">
        <ScrollVelocityRow baseVelocity={3} direction={1} className="py-8">
          {TESTIMONIALS_ROW_A.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </ScrollVelocityRow>

        <ScrollVelocityRow baseVelocity={3} direction={-1} className="py-8">
          {TESTIMONIALS_ROW_B.map((item, idx) => (
            <TestimonialCard key={idx} {...item} />
          ))}
        </ScrollVelocityRow>
      </ScrollVelocityContainer>

      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white/0 via-white/10 to-white/0"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-white/0 via-white/10 to-white/0"></div>

    </section>
  );
}
