import CompanyStory from "@/components/sections/CompanyStory";
import LeadershipTeam from "@/components/sections/LeadershipTeam";
import CTASection from "@/components/CTASection";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  "About Us",
  "Learn about STUCCORD's mission to build innovation-driven digital systems that transform businesses. Meet our leadership team and discover our story.",
  "/about"
);

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            About STUCCORD
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Building innovation-driven digital systems that transform businesses
          </p>
        </div>
      </div>
      <CompanyStory />
      <LeadershipTeam />
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let&apos;s build your brand&apos;s future.
          </h2>
        </div>
      </section>
      <CTASection />
    </>
  );
}
