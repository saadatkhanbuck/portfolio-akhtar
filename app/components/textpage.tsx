"use client";
import React from "react";
import { motion } from "motion/react";
import { LinkPreview } from "@/components/ui/link-preview";
import { PinContainer } from "@/components/ui/3d-pin";

export default function TextPage() {
  return (
    <div className="flex flex-col items-center justify-center mt-20 px-4">

      {/* ===== TOP TEXT (IMAGE STYLE) ===== */}
      <div className="max-w-4xl mx-auto mb-14 text-left text-neutral-600 dark:text-neutral-400 text-base md:text-2xl leading-relaxed">
        
        <p className="mb-4">
          Check out my{" "}
          <LinkPreview
            url="https://github.com/akhtarabbas-909"
            className="text-neutral-700 font-bold"
          >
            GitHub profile
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://www.linkedin.com/in/akhtarabbas909/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-500 dark:text-transparent bg-gradient-to-br from-blue-400 to-blue-500"
          >
            Linked<span className=" text-lg pb-0 px-1 rounded-md text-white mx-0.5 my-0  bg-gradient-to-r from-blue-400 to-blue-600 ">in</span>
          </LinkPreview>{" "}
          to explore my projects and professional experience.
        </p>

        <p className="mb-4">
          Discover my standout portfolio websites where I`ve delivered exceptional
          UI/UX with Framer Motion and cutting-edge frontend development:
        </p>

        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>
            <LinkPreview
              url="https://huboweb.com/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#170080] to-blue-500 dark:text-transparent bg-gradient-to-br from-[#170080] to-blue-500"
            >
              Huboweb Technology Private Limited
            </LinkPreview>
          </li>
          <li>
            <LinkPreview
              url="https://packagingwriter.netlify.app/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-[#154f86] to-[#2E8AE0] dark:text-transparent bg-gradient-to-br from-[#154f86] to-[#2E8AE0]"
            >
              Packaging Writer –
            </LinkPreview>{" "}
            Content Writing Excellence
          </li>
          <li>
            <LinkPreview
              url="https://ticketing-website-eta.vercel.app/"
              className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-600 to-green-600 dark:text-transparent bg-gradient-to-br from-green-600 to-green-600"
            >
              Traviazo Ticketing –
            </LinkPreview>{" "}
            Premium Booking Experience
          </li>
        </ul>

        <p>
          These are my unique showcase projects featuring smooth animations,
          modern design, and top-tier frontend craftsmanship!
        </p>
      </div>

      {/* ===== LinkPreview Section (AS IT IS) ===== */}
      {/* <div id="linkpreviewdemo" className="flex justify-center items-center flex-col">
        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto mb-6">
          Check out{" "}
          <LinkPreview url="https://github.com/saadatkhanbuck" className="font-bold">
            Saadat Ali on GitHub
          </LinkPreview>{" "}
          and{" "}
          <LinkPreview
            url="https://www.linkedin.com/in/saadat-ali-0a4394348/"
            className="font-bold text-blue-400"
          >
            LinkedIn
          </LinkPreview>{" "}
          for his projects and professional work.
        </p>

        <p className="text-neutral-500 dark:text-neutral-400 text-lg md:text-2xl max-w-3xl mx-auto">
          Visit{" "}
          <LinkPreview
            url="https://huboweb.com/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-purple-500 to-pink-500"
          >
            Huboweb Technology Private Limited,
          </LinkPreview>{" "}
          <LinkPreview
            url="https://packagingwriter.netlify.app/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-blue-400 to-blue-500"
          >
            Packaging Writer Content Writing &
          </LinkPreview>{" "}
          <LinkPreview
            url="https://ticketing-website-eta.vercel.app/"
            className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-gray-600 to-gray-900"
          >
            Traviazo Ticketing Project
          </LinkPreview>{" "}
          software website to explore modern Tailwind and Framer Motion components.
        </p>
      </div> */}

      {/* ===== Animated Pin Section (AS IT IS) ===== */}
      <div id="animatedpindemo" className="h-[40rem] w-full flex items-center justify-center">
        <PinContainer title="/Akhtar Abbas" href="https://wa.me/923214829814">
          <div className="flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 w-[20rem] h-[20rem]">
            <h3 className="max-w-xs !pb-2 !m-0 font-bold text-base text-slate-100">
              WhatsApp Contact
            </h3>
            <div className="text-base !m-0 !p-0 font-normal">
              <span className="text-slate-500">
                Click here to start a WhatsApp chat.
              </span>
            </div>
            <div className="flex flex-1 w-full rounded-lg bg-gradient-to-br from-[#170080] via-[#154f86] to-green-700" />
          </div>
        </PinContainer>
      </div>

    </div>
  );
}
