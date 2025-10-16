"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
<p className="mb-3">
  Hello, everyone! I'm <span className="font-bold">Saurabh Kumar,</span> a{" "}
  <span className="font-medium">Frontend React Developer</span> passionate about building
  sleek, high-performance, and responsive web applications.{" "}
  <span className="font-medium">
    With a solid foundation in React.js, Tailwind CSS, Bootstrap, and NativeWind,
  </span>{" "}
  I specialize in crafting interactive and scalable interfaces that deliver smooth user experiences.{" "}
  <span className="font-bold">
    From concept to deployment, I focus on clean code, performance optimization, and UI precision.
  </span>{" "}
  Recently, I’ve been expanding my skills into{" "}
  <span className="font-medium">backend development</span>, exploring Node.js, Express, and APIs
  to become a more versatile full-stack developer.{" "}
  <span className="font-medium">
    I’m always eager to collaborate, learn, and contribute to projects that push boundaries in modern web development.
  </span>
</p>


      {/* <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my dog. I also enjoy{" "}
        <span className="font-medium">learning new things.</span>
        I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the guitar.
      </p> */}
    </motion.section>
  );
}
