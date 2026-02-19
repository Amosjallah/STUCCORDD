"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/utils";

export default function AboutPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-24 bg-white dark:bg-gray-900 overflow-hidden">
      {/* Background accent shape */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 dark:opacity-10">
        <div className="w-full h-full bg-gradient-to-l from-accent-DEFAULT to-gradient-end rounded-l-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            About Us
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
            We are a team of passionate creators, strategists, and technologists dedicated to crafting digital experiences that inspire and connect. From branding to web development, we blend creativity and technology to bring bold ideas to life.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
