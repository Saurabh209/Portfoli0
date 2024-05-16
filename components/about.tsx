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
      Hello, everyone! I'm Aman, a Data Science and MLOps Engineer {" "}
        <span className="font-medium">with a</span> proven track record of delivering production-level projects
        with extensive experience in the field, I specialize in building robust and scalable machine learning systems that drive business value.{" "}
        <span className="font-medium">I have worked on a diverse range of projects, leveraging cutting-edge technologies and newest framework to extract insights from complex</span>.{" "}
        <span className="font-bold"> data sets. From data acquisition and processing to model development, deployment, and monitoring,
        </span>  I have a comprehensive understanding of the entire machine learning lifecycle.
        <span className="font-medium"> As an MLOps Engineer,</span> I am passionate about bridging the gap between data science and software engineering{" "}
        <span className="font-medium">
        I look forward to engaging discussions and exploring the latest advancements in the field of Data Science and MLOps.
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
