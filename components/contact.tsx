"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <div className="mt-6 space-y-4 text-gray-700 dark:text-white/80">
        <p>
          Email:{" "}
          <a className="underline" href="mailto:jeehimuh@gmail.com">
            Jeehimuh@gmail.com
          </a>
        </p>
        <p>
          LinkedIn:{" "}
          <a className="underline" href="https://www.linkedin.com/in/jerry-ehimuh/" target="_blank" rel="noreferrer">
            Linkedin.com/in/jerry-ehimuh/
          </a>
        </p>
        <p>
          GitHub:{" "}
          <a className="underline" href="https://github.com/jerryhxs/" target="_blank" rel="noreferrer">
            Github.com/JerryHxs/
          </a>
        </p>
      </div>
    </motion.section>
  );
}
