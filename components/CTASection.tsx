"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import Button from "./ui/Button";
import { fadeInUp } from "@/lib/utils";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 bg-gradient-to-r from-accent-DEFAULT via-gradient-end to-accent-DEFAULT">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={fadeInUp}
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to elevate your digital presence?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Let&apos;s build something amazing together
          </p>
          <Link href="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-accent-DEFAULT hover:bg-gray-100">
              Get Started
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
