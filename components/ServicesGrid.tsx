"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { Code, Palette, Layout, Cloud, Search, Share2 } from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Card from "./ui/Card";
import { staggerContainer, fadeInUp } from "@/lib/utils";

const iconMap = {
  Code,
  Palette,
  Layout,
  Cloud,
  Search,
  Share2,
};

export default function ServicesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Comprehensive digital solutions to elevate your brand
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = iconMap[service.icon as keyof typeof iconMap];
            return (
              <motion.div key={service.id} variants={fadeInUp}>
                <Card hover className="h-full flex flex-col">
                  <div className="mb-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-accent-DEFAULT to-gradient-end flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      {service.description}
                    </p>
                  </div>
                  <Link
                    href={service.href}
                    className="mt-auto text-accent-DEFAULT hover:text-accent-dark font-medium text-sm flex items-center group"
                  >
                    View Details
                    <motion.span
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                      initial={false}
                    >
                      →
                    </motion.span>
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
