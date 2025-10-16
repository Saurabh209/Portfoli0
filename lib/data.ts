import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/person.jpg";
import githubreportCardImage from "@/public/githubReportCardImage.png";
import KeycodeFinder from '@/public/KeycodeFinder.png'
import KeyboardTester from '@/public/KeyboardTester.png'
import AppointmentSchedular from "@/public/AppointmentSchedular.png"
import eldenRing from "@/public/eldenRing.png"
import login from "@/public/login.png"
import rmtdevImg from "@/public/dev.png";
import wordanalyticsImg from "@/public/keyboard.jpg";

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
    title: "Noida Institute of Engineering and Technology",
    location: "Greater Noida",
    description:
      "I recently completed my B.Tech in Information Technology, marking the beginning of my professional journey as a developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2025",
    

  },
  {
    title: "React Frontent Developer intern",
    location: "Gurgaon",
    description:
      "Worked as a Frontend React Developer Intern at Propfuture AI Technologies, building responsive UI components and integrating APIs for real estate web solutions.",
    icon: React.createElement(FaReact),
    date: "2025",
  },
] as const;

export const projectsData = [
    {
     title: "Lore of the Lands Between",
    description:
      "A comprehensive, UI-focused web application dedicated to exploring the rich lore, epic battles, bosses, legendary weapons of Elden Ring",
    tags: ["React.js", "Tailwind", "Git", "GitHub ","Custom Api"],
    imageUrl: eldenRing,
    link:'https://lore-of-the-lands-between.vercel.app/'
  },
      {
     title: "Login Authentication",
    description:
      "Just a regular login signup with proper authentication like JWT Token , Cookies ,bycrypt etc",
    tags: [  "Node.js","Express.js","Mongodb","Ejs","JWT","bycrypt", "Git", "GitHub ","Custom Api"],
    imageUrl: login,
    link:'https://github.com/Saurabh209/Login-Authentication'
  },
  {
     title: "Hospital-Dashboard",
    description:
      "A  Hospital Appointment Dashboard that allows front desk staff and doctors to view appointments efficiently.",
    tags: ["JavaScript","React.js", "Tailwind", "Scss", "Git" ],
    imageUrl: AppointmentSchedular,
    link:'https://hospital-appointment-scheduler-alpha.vercel.app/'
  },
  {
    title: "GitHub Report Card ",
    description:
      "The GitHub Report Card is a comprehensive web application that provides developers and students with a centralized platform to view and analyze GitHub activity.",
    tags: ["Html", "Css", "JavaScript", "Git", "GitHub API "],
    imageUrl: githubreportCardImage,
    link:'https://saurabh209.github.io/GitHub-Report-Card/'
  },
    {
    title: "Keyboard tester",
    description:
      "Users can test the functionality of each keyboard button by pressing them. The tool registers the key press and highlights the corresponding key on the Ul.",
    tags: ["HTML", "CSS", "JavaScript","Git","GitHub"],
    imageUrl: KeyboardTester,
    link:'https://saurabh209.github.io/KeyBoard-Tester/'
  },
  {
    title: "JavaScript Keycode Finder",
    description:
      "The 'Keycode Finder' captures and displays the keycodes, key locations, key Values etc. by pressing keys on keyboard.",
    tags: ["Html", "Css", "JavaScript", "JS Kecodes", "Git", "Git Hub" ],
    imageUrl: KeycodeFinder,
    link:'https://saurabh209.github.io/KeyCode-Finder-miniProject/'
  },

] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React.js",
  "React Native",
  "Tailwind CSS",
  "Bootstrap",
  "NativeWind",
  "Git",
  "GitHub",
  "VS Code",
  "StackBlitz",
  "Java",
  "Node.js",
  "Express.js",
  "REST APIs",
  "MongoDB",
  "Responsive Design",
  "UI/UX",
] as const;
