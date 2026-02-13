"use client";
import React from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { PinContainer } from "@/components/ui/3d-pin";

export function DemoPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4"> {/* Reduced space-y from 20 to 12 */}

      {/* LinkPreview Section */}
      <div id="linkpreviewdemo" className="flex justify-center items-center flex-col">
        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto mb-6">
          Check out <LinkPreview url="https://github.com/akhtarabbas-909" className="font-bold">
            Akhtar Abbas on GitHub
          </LinkPreview>{" "} and{" "}
          <LinkPreview url="https://www.linkedin.com/in/akhtarabbas909/" className="font-bold text-blue-400">
            LinkedIn
          </LinkPreview>{" "} for his projects and professional work.
        </p>
        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto">
          Visit{" "}
          <LinkPreview
            url="https://huboweb.com/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Huboweb Technology Private Limited
          </LinkPreview>{" "} Software Website to explore modern Tailwind and Framer Motion components.
        </p>
      </div>

      {/* Animated Pin Section */}
      <div id="animatedpindemo" className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer
          title="/Akhtar Abbas"
          href="https://wa.me/923214829814" // WhatsApp link
        >
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              WhatsApp Contact
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Click here to start a WhatsApp chat.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg  bg-gradient-to-br from-violet-500 via-purple-500 to-blue-500" />
          </div>
        </PinContainer>
      </div>
      
    </div>
  );
}
