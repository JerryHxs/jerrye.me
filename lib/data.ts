import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import sylabuddyImg from "@/public/sylabuddy_demo.png";
import weatherImg from "@/public/weather_demo.png";
import syncTunesImg from "@/public/sync_tunes_demo.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Software Engineer Intern",
    location: "Charlotte, NC",
    description:
      "Going into my Junior Year I interned at Bank of America as a software engineer focusing on the frontend in Angular.",
    icon: React.createElement(CgWorkAlt),
    date: "June 2023 - Aug 2023",
  },
  {
    title: "Software Engineer Intern",
    location: "Washington, DC",
    description:
      "I then interned at GEICO as a software engineer intern focusing on SRE and automating tasks there using .NET.",
    icon: React.createElement(CgWorkAlt),
    date: "Jun 2024 - Aug 2024",
  },
  {
    title: "Facilities Tech & UI Developer",
    location: "Austin, TX",
    description:
      "I'm now working still at the University of Texas at Austin as part time revamping designs and solving different solutions everyday.",
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Sylabuddy",
    description:
      "I made an app this with a team of 4 developers using swift to automate syllabi due dates to your calendar",
    tags: ["Swift", "Storyboard", "Firebase", "OpenAI API", "Figma", "Jira"],
    imageUrl: sylabuddyImg,
  },
  {
    title: "Weather Warriors",
    description:
      "Weather webapp. I was the front-end developer and ui/ux developer. You can get any cities weather info from search using api.",
    tags: ["React", "TypeScript", "Next.js", "Python", "API"],
    imageUrl: weatherImg,
  },
  {
    title: "SyncTunes",
    description:
      "Built a Python tool to turn YouTube likes into Spotify playlists, then taught it in ABCS workshops, mentoring students on Git, APIs, and real-world coding tools.",
    tags: ["Python", "API", "Git", "Communication", "Mentor"],
    imageUrl: syncTunesImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Xcode",
  "Angular",
  "Swagger",
  "C#",
  "C++",
  "Python",
  "PostgreSQL",
  "Swift",
  "Django",
  "AWS",
  "GCP",
  ".NET",
  "Agile",
  "UI/UX",
] as const;
