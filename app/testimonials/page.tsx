import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { Pyramid  } from "lucide-react";
import TestimonialHero from "../components/testimonialshero";
import TestimonialsMarquee from "../components/testimonialmarquee";

export default function TestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Sarah Chen",
      designation: "Product Manager at TechFlow",
      src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop",
    },
    {
      quote:
        "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
      name: "Michael Rodriguez",
      designation: "CTO at InnovateSphere",
      src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
      name: "Emily Watson",
      designation: "Operations Director at CloudScale",
      src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
    },
    {
      quote:
        "Outstanding support and robust features. It's rare to find a product that delivers on all its promises.",
      name: "James Kim",
      designation: "Engineering Lead at DataPro",
      src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop",
    },
    {
      quote:
        "The scalability and performance have been game-changing for our organization. Highly recommend to any growing business.",
      name: "Lisa Thompson",
      designation: "VP of Technology at FutureNet",
      src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop",
    },
  ];

  return (
    <>
    <TestimonialHero/>
    <TestimonialsMarquee/>
    <div  className="max-w-6xl mx-auto px-4 py-16">
      {/* Heading with icon & line */}
      <div className="flex items-center justify-center gap-4 mb-10">
        {/* Left Icon */}
        <Pyramid  className="h-7 w-7 text-neutral-700 dark:text-neutral-300" />

        {/* Text */}
        <h2 className="text-3xl font-bold text-neutral-800 dark:text-white whitespace-nowrap">
          Client Reviews
        </h2>

        {/* Right Line */}
        <div className="h-0.5 flex-1 max-w-30 mt-3 bg-gradient-to-r from-primary/70 via-primary/30 to-primary/10 rounded-full" />
      </div>

      {/* Animated Testimonials */}
      <AnimatedTestimonials testimonials={testimonials} />
    </div>
    </>
  );
}
