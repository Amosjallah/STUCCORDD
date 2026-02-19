import ServiceDetail from "@/components/sections/ServiceDetail";
import CTASection from "@/components/CTASection";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata(
  "Our Services",
  "Comprehensive digital solutions including Graphic Design, Web Development, SEO, Social Media Marketing, and SaaS services. Transform your brand with STUCCORD.",
  "/services"
);

const services = [
  {
    id: "graphic-design",
    title: "Graphic Design",
    description: [
      "Transform your brand identity with stunning visual designs that capture your essence and resonate with your audience. Our graphic design services encompass everything from logo creation to comprehensive brand guidelines.",
      "We combine artistic creativity with strategic thinking to deliver designs that not only look beautiful but also communicate your brand message effectively. Whether you need print materials, digital assets, or complete brand identity systems, we've got you covered.",
    ],
    features: [
      "Logo design and brand identity",
      "Print and digital marketing materials",
      "Brand guidelines and style guides",
      "Packaging design",
      "Social media graphics and templates",
    ],
  },
  {
    id: "web-development",
    title: "Website Design & Development",
    description: [
      "Build powerful, scalable web solutions that drive results. We specialize in creating modern, responsive websites and web applications using cutting-edge technologies.",
      "From simple landing pages to complex e-commerce platforms, we deliver solutions that are fast, secure, and optimized for performance. Our development process ensures your website not only looks great but also converts visitors into customers.",
    ],
    features: [
      "Responsive web design",
      "Custom web application development",
      "E-commerce solutions",
      "Content Management Systems (CMS)",
      "Performance optimization and SEO",
    ],
  },
  {
    id: "seo-service",
    title: "Search Engine Optimization (SEO)",
    description: [
      "Boost your online visibility and drive organic traffic to your website with our comprehensive SEO services. We use data-driven strategies to improve your search engine rankings and increase your online presence.",
      "Our SEO approach combines technical optimization, content strategy, and link building to deliver sustainable, long-term results. We help you rank higher on search engines and attract qualified leads to your business.",
    ],
    features: [
      "Technical SEO audit and optimization",
      "Keyword research and strategy",
      "On-page and off-page SEO",
      "Content optimization",
      "Local SEO and Google Business optimization",
    ],
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing (SMM)",
    description: [
      "Build brand awareness and engage with your audience through strategic social media campaigns. We create content that resonates with your target audience and drives meaningful engagement.",
      "Our social media marketing services help you build a strong online presence, connect with customers, and grow your brand across all major platforms. From content creation to community management, we handle it all.",
    ],
    features: [
      "Social media strategy development",
      "Content creation and curation",
      "Community management",
      "Paid social media advertising",
      "Analytics and performance reporting",
    ],
  },
  {
    id: "saas-service",
    title: "SaaS (Software as a Service)",
    description: [
      "Develop scalable software solutions that grow with your business. We build custom SaaS platforms that streamline operations, improve efficiency, and drive innovation.",
      "Our SaaS development services cover everything from initial concept to deployment and ongoing maintenance. We create cloud-based solutions that are secure, scalable, and user-friendly, helping you deliver value to your customers.",
    ],
    features: [
      "Custom SaaS platform development",
      "Cloud infrastructure setup",
      "API development and integration",
      "User authentication and security",
      "Scalable architecture and deployment",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-16 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Comprehensive digital solutions to elevate your brand
          </p>
        </div>
      </div>
      {services.map((service, index) => (
        <ServiceDetail
          key={service.id}
          {...service}
          reverse={index % 2 === 1}
        />
      ))}
      <CTASection />
    </>
  );
}
