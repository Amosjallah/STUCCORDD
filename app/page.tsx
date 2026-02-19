import Hero from "@/components/Hero";
import AboutPreview from "@/components/sections/AboutPreview";
import ServicesGrid from "@/components/ServicesGrid";
import Workflow from "@/components/Workflow";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  "Home",
  "Grow Your Brand Beyond Boundaries — Connecting Teams Around The World. STUCCORD helps brands scale through strategy, design, and technology.",
  "/"
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesGrid />
      <Workflow />
      <Testimonials />
      <CTASection />
    </>
  );
}
