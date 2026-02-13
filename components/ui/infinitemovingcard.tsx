"use client";

import React, { useEffect, useRef, useState } from "react";
type Skill = {
  name: string;
  icon: React.ElementType;
  category: string;
};

type Props = {
  skills: Skill[];
  direction?: "left" | "right";
  speed?: "slow" | "medium" | "fast";
};

const SPEED_MAP = {
  slow: 120,
  medium: 60,
  fast: 80,
};

export function InfiniteSkillsCards({
  skills,
  direction = "left",
  speed = "medium",
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);
  const [width, setWidth] = useState(0);
  const animationRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const step = SPEED_MAP[speed];

  useEffect(() => {
    if (!containerRef.current) return;

    const containerWidth = containerRef.current.scrollWidth / 2;
    setWidth(containerWidth);

    let lastTime: number | null = null;

    function animate(time: number) {
      if (pausedRef.current) {
        animationRef.current = requestAnimationFrame(animate);
        return;
      }

      if (lastTime !== null) {
        const delta = time - lastTime;
        const distance = (step * delta) / 1000;

        setOffset((prev) => {
          if (direction === "left") {
            return (prev + distance) % containerWidth;
          } else {
            return (prev - distance + containerWidth) % containerWidth;
          }
        });
      }

      lastTime = time;
      animationRef.current = requestAnimationFrame(animate);
    }

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [direction, step, width]);

  return (
    <div
      className="overflow-hidden w-full relative"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div
        ref={containerRef}
        className="flex whitespace-nowrap gap-6"
        style={{ transform: `translateX(-${offset}px)` }}
      >
        {skills.concat(skills).map((skill, idx) => {
          const Icon = skill.icon;
          return (
            <div
              key={idx}
              className="inline-block flex-shrink-0 w-56 p-4 border mb-2 mt-2 bg-card rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <div className="flex items-center gap-4 ">
                <Icon className="text-3xl text-primary dark:text-blue-400" />
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  {skill.name}
                </h4>
              </div>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                {skill.category}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
