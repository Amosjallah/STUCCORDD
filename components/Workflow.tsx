"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { WORKFLOW_STEPS } from "@/lib/constants";
import { staggerContainer, fadeInUp } from "@/lib/utils";

export default function Workflow() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            How We Work
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            A proven process that delivers results
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-DEFAULT via-gradient-end to-accent-DEFAULT transform -translate-y-1/2" />

          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
          >
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.step}
                variants={fadeInUp}
                className="relative"
              >
                {/* Step number circle */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-16 h-16 rounded-full bg-gradient-to-r from-accent-DEFAULT to-gradient-end flex items-center justify-center text-white font-bold text-xl mb-4 relative z-10 shadow-lg"
                    whileHover={{ scale: 1.1 }}
                  >
                    {step.step}
                  </motion.div>

                  <div className="text-center">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
