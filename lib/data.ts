import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/person.jpg";
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
    title: "Swami Vivekananda Subharti University",
    location: "India",
    description:
      "I graduated recently and got offer to work on 'Antern' company as intern but can't join because of location.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  // {
  //   title: "Front-End Developer",
  //   location: "Orlando, FL",
  //   description:
  //     "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
  //   icon: React.createElement(CgWorkAlt),
  //   date: "2019 - 2021",
  // },
  {
    title: "Learning",
    // location: "Noida",
    description:
      "I'm grinding my skill in Mlops and LLM",
    icon: React.createElement(FaReact),
    // date: "- present",
  },
] as const;

export const projectsData = [
  {
    title: "Customer satisfaction",
    description:
      "Predicting how a customer will feel about a product before they even ordered it",
    tags: ["Python", "Zenml", "Mlflow", "Streamlit", "Design pattern"],
    imageUrl: corpcommentImg,
  },
  {
    title: "ENE_mlops_mlflow",
    description:
      "Created End to End production ready mlops pipeline with CI/CD",
    tags: ["Python", "Flask", "Docker", "Mlflow", "AWS", "Git Action"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Keyboard tester",
    description:
      "A mini public web app for quick keyboard testing application. It shows word count, character.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "Python",
  "Numpy",
  "Scikit-learn",
  "Matplotlib",
  "Git",
  "Mlflow",
  "Zenml",
  "AWS",
  "Streamlit",
  "Heruko",
  "Flask",
  "SQL",
  "Docker",
  "CI/CD",
  "MLops",
  "PostgreSQL",
  "CSS",
  "HTML",
  "JavaScript",
] as const;
