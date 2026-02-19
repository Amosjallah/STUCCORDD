export const BRAND = {
  name: "STUCCORD",
  tagline: "We're your trusted partner in maintaining and enhancing performance.",
  coreMessage: "Grow Your Brand Beyond Boundaries — Connecting Teams Around The World",
  location: "Koforidua-Nsutam Rd, Koforidua, Ghana",
  phone: "(+233) 054-758-1168",
  email: "contact@stuccord.com",
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export const SERVICES = [
  {
    id: "web-development",
    title: "Web Development",
    icon: "Code",
    description: "Custom web solutions built with modern technologies for optimal performance and scalability.",
    href: "/services#web-development",
  },
  {
    id: "graphic-design",
    title: "Graphic Design",
    icon: "Palette",
    description: "Stunning visual designs that capture your brand's essence and resonate with your audience.",
    href: "/services#graphic-design",
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    icon: "Layout",
    description: "User-centered design that creates intuitive and engaging digital experiences.",
    href: "/services#ui-ux-design",
  },
  {
    id: "saas-service",
    title: "SaaS Service",
    icon: "Cloud",
    description: "Scalable software solutions that grow with your business needs.",
    href: "/services#saas-service",
  },
  {
    id: "seo-service",
    title: "SEO Service",
    icon: "Search",
    description: "Boost your online visibility and drive organic traffic to your website.",
    href: "/services#seo-service",
  },
  {
    id: "social-media-marketing",
    title: "Social Media Marketing",
    icon: "Share2",
    description: "Strategic social media campaigns that build brand awareness and engagement.",
    href: "/services#social-media-marketing",
  },
] as const;

export const WORKFLOW_STEPS = [
  {
    step: 1,
    title: "Discover & Strategize",
    description: "We understand goals, audience, and business challenges.",
  },
  {
    step: 2,
    title: "Design & Develop",
    description: "We transform ideas into scalable digital solutions.",
  },
  {
    step: 3,
    title: "Test & Optimize",
    description: "We rigorously test performance, security, and UX.",
  },
  {
    step: 4,
    title: "Launch & Grow",
    description: "We help you scale and continuously improve.",
  },
] as const;

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Linda Jones",
    role: "Head of Marketing",
    company: "TechCorp",
    content: "STUCCORD transformed our digital presence. Their strategic approach and creative execution exceeded all expectations. Our engagement rates have tripled since launch.",
    rating: 5,
  },
  {
    id: 2,
    name: "Aaron Blake",
    role: "Product Manager",
    company: "InnovateLabs",
    content: "Working with STUCCORD was a game-changer. They delivered a scalable SaaS platform that perfectly aligned with our vision. Professional, innovative, and results-driven.",
    rating: 5,
  },
  {
    id: 3,
    name: "Jessica Lane",
    role: "Operations Director",
    company: "Global Solutions",
    content: "The team at STUCCORD understands how to connect teams globally. Their web development and design services are world-class. Highly recommended!",
    rating: 5,
  },
] as const;

export const SOCIAL_LINKS = {
  twitter: "#",
  linkedin: "#",
  facebook: "#",
  instagram: "#",
} as const;

export const TRUSTPILOT_REVIEWS = "25k";
