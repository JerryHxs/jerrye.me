// components/experience.tsx
"use client";

import React from "react";
import dynamic from "next/dynamic";
import SectionHeading from "./section-heading";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";
import { motion } from "framer-motion";

const VerticalTimeline = dynamic(
  () =>
    import("react-vertical-timeline-component").then(
      (m) => m.VerticalTimeline
    ),
  { ssr: false }
);

const VerticalTimelineElement = dynamic(
  () =>
    import("react-vertical-timeline-component").then(
      (m) => m.VerticalTimelineElement
    ),
  { ssr: false }
);

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  // avoid SSR/client mismatch
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  if (!mounted) {
    return (
      <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
        <SectionHeading>My Experience</SectionHeading>
        <div className="h-24 rounded-lg bg-gray-200/60 dark:bg-white/10 animate-pulse" />
      </section>
    );
  }

  return (
    <section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline
        animate={false} // let us control visibility with our own animation
        lineColor={theme === "light" ? "#e5e7eb" : "rgba(255,255,255,0.2)"}
      >
        {experiencesData.map((item) => {
          const key = `${item.title}-${item.date}`;
          return (
            <VerticalTimelineElement
              key={key}
              date={item.date}
              icon={item.icon}
              contentStyle={{
                background:
                  theme === "light" ? "#f3f4f6" : "rgba(255,255,255,0.05)",
                boxShadow: "none",
                border: "1px solid rgba(0,0,0,0.05)",
                textAlign: "left",
                padding: "1.1rem 1.6rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid #9ca3af"
                    : "0.4rem solid rgba(255,255,255,0.5)",
              }}
              iconStyle={{
                background:
                  theme === "light" ? "white" : "rgba(255,255,255,0.15)",
                fontSize: "1.25rem",
              }}
            >
              <motion.div
                initial={{ opacity: 1, scale: 0.98, y: 8 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <h3 className="font-semibold capitalize text-base sm:text-lg">{item.title}</h3>
                <p className="font-normal !mt-0 text-sm sm:text-base">{item.location}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/75 text-sm sm:text-base">
                  {item.description}
                </p>
              </motion.div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
}
