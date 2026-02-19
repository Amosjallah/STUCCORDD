"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { fadeInUp } from "@/lib/utils";

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string[];
  features: string[];
  reverse?: boolean;
}

export default function ServiceDetail({
  id,
  title,
  description,
  features,
  reverse = false,
}: ServiceDetailProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id={id} ref={ref} className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 items-center`}
        >
          {/* Content */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            className="flex-1"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {title}
            </h2>
            {description.map((paragraph, index) => (
              <p
                key={index}
                className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4"
              >
                {paragraph}
              </p>
            ))}
            <ul className="space-y-3 mb-8">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-accent-DEFAULT flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Get Started
              </Button>
            </Link>
          </motion.div>

          {/* Visual Block */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={fadeInUp}
            transition={{ delay: 0.2 }}
            className="flex-1"
          >
            <div className="w-full h-96 rounded-2xl bg-gradient-to-br from-accent-DEFAULT/20 via-gradient-end/20 to-accent-DEFAULT/20 dark:from-accent-DEFAULT/10 dark:via-gradient-end/10 dark:to-accent-DEFAULT/10 flex items-center justify-center border border-gray-200 dark:border-gray-800">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full bg-gradient-to-r from-accent-DEFAULT to-gradient-end mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">
                    {title.charAt(0)}
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Visual representation
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
