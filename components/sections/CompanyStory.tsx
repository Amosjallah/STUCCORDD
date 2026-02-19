"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { fadeInUp } from "@/lib/utils";

export default function CompanyStory() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-8">
            Our Story
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            At Stuccord, we don&apos;t just create websites or run campaigns — we build innovation-driven digital systems that transform businesses.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
            Founded with a vision to bridge the gap between creativity and technology, we&apos;ve grown into a trusted partner for brands looking to expand their digital footprint. Our team combines strategic thinking with cutting-edge design and development to deliver solutions that not only look great but drive real business results.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            From our base in Koforidua, Ghana, we serve clients around the world, helping them connect with their audiences, streamline their operations, and achieve their growth objectives through thoughtful digital innovation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
