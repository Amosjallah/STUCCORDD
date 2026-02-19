"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Card from "@/components/ui/Card";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const teamMembers = [
  {
    name: "Amos Jusu",
    role: "Web Designer",
    bio: "Creative visionary with expertise in modern web design and user experience.",
  },
  {
    name: "Victory Nkire",
    role: "Founder & CEO",
    bio: "Strategic leader driving innovation and growth in digital solutions.",
  },
];

export default function LeadershipTeam() {
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
            Leadership Team
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Meet the visionaries behind STUCCORD
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          {teamMembers.map((member, index) => (
            <motion.div key={member.name} variants={fadeInUp}>
              <Card hover className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-r from-accent-DEFAULT to-gradient-end mx-auto mb-6 flex items-center justify-center text-white text-4xl font-bold">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-accent-DEFAULT font-medium mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  {member.bio}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
