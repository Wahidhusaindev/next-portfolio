import Image from "next/image";
import Link from "next/link";
import profileImg from "@/public/img.avif";
import About from "./about/page";
import Projects from "./projects/page";
import ExperienceSection from "./experience/page";
import Contact from "./contact/page";

/* -------------------------------------------------- */
/* SEO METADATA – HOME PAGE                           */
/* -------------------------------------------------- */
export const metadata = {
  title: "Wahid Husain | Frontend Software Developer | React & Next.js",
  description:
    "Wahid Husain is a frontend-focused software developer specializing in React, Next.js, and modern UI engineering. Building scalable, high-performance web applications.",
  keywords: [
    "Wahid Husain",
    "Wahid Husain Developer",
    "Wahid Husain Pantnagar",
    "Wahid Husain India",
    "Wahid Husain Bareilly",
    "React Developer",
    "Next.js Developer",
    "JavaScript Developer",
    "Web Developer Portfolio",
    "Wahid Husain Portfolio",
    "Software Engineer",
    "UI Engineer",
    "Frontend Software Developer",
    "Web Application Developer",
    "Full-Stack Developer",
    "Tech Portfolio",

  ],
  authors: [{ name: "Wahid Husain" }],
  creator: "Wahid Husain",

  openGraph: {
    title: "Wahid Husain | Frontend Software Developer",
    description:
      "Frontend-focused software developer building scalable, high-performance web applications with React and Next.js.",
    url: "https://wahidhusain.vercel.app",
    siteName: "Wahid Husain Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Wahid Husain - Frontend Software Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Wahid Husain | Frontend Software Developer",
    description:
      "React & Next.js developer focused on performance, scalability, and clean UI architecture.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://wahidhusain.vercel.app",
  },
};


export default function HomePage() {
  return (
    <>
     

      {/* HERO SECTION */}
      <header
        className="min-h-[100svh] bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white flex items-center overflow-hidden"
        aria-label="Introduction"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center md:text-left">
            {/* Availability */}
            <div className="flex items-center justify-center md:justify-start mb-4">
              <span className="relative flex h-3 w-3">
                <span className="absolute inset-0 animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative h-3 w-3 rounded-full bg-green-500" />
              </span>
              <span className="ml-2 text-sm font-medium">
                Open to Opportunities
              </span>
            </div>

            {/* PRIMARY HEADING */}
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Wahid <span className="text-indigo-500">Husain</span>
            </h1>

            {/* ROLE */}
            <h2 className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6">
              Frontend-Focused Software Developer
            </h2>

            {/* VALUE PROP */}
            <p className="text-gray-400 mb-8 max-w-xl mx-auto md:mx-0 leading-relaxed">
              I design and build scalable, high-performance web applications
              using React, Next.js, and component-driven UI systems. Currently
              expanding into full-stack engineering with API-first backends.
            </p>
            

            {/* CTA */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Link
                href="/projects"
                className="bg-indigo-600 hover:bg-indigo-700 px-7 py-3 rounded-xl font-semibold shadow-lg transition hover:scale-105"
                aria-label="View projects portfolio"
              >
                View Projects
              </Link>

              <Link
                href="/contact"
                className="border border-gray-600 hover:border-indigo-400 px-7 py-3 rounded-xl transition hover:scale-105"
                aria-label="Contact Wahid Husain"
              >
                Contact Me
              </Link>
            </div>
          </div>

          {/* RIGHT VISUAL */}
          <div className="flex justify-center md:justify-end relative">
            <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-96 md:h-96">
              {/* PROFILE IMAGE */}
              <div className="w-full h-full rounded-full bg-gradient-to-tr from-indigo-500 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden">
                  <Image
                    src={profileImg}
                    alt="Wahid Husain - Frontend Software Developer"
                    priority
                    sizes="(max-width: 768px) 280px, 384px"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              {/* TECH BADGES */}
              <TechBadge
                className="-top-6 left-1/2 -translate-x-1/2 bg-indigo-600"
                label="React"
                icon="/icons/react.svg"
              />
              <TechBadge
                className="top-6 -right-6 bg-cyan-600"
                label="Tailwind"
                icon="/icons/tailwind.svg"
              />
              <TechBadge
                className="bottom-6 -right-6 bg-purple-600"
                label="Bootstrap"
                icon="/icons/bootstrap.svg"
              />
              <TechBadge
                className="bottom-6 -left-6 bg-green-600"
                label="MongoDB"
                icon="/icons/mongodb.svg"
              />
              <TechBadge
                className="top-6 -left-6 bg-black"
                label="Next.js"
                icon="/icons/nextjs.svg"
              />
            </div>
          </div>
        </div>
      </header>
      <About />
      <Projects />
      <ExperienceSection />
      <Contact />
    </>
  );
}

/* ---------------------------------- */
/* TECH BADGE                          */
/* ---------------------------------- */
function TechBadge({ className, label, icon }) {
  return (
    <div
      className={`absolute ${className} px-3 py-2 rounded-xl shadow-lg flex items-center gap-2 animate-pulse`}
      aria-label={`${label} technology badge`}
    >
      <Image
        src={icon}
        alt={label}
        width={18}
        height={18}
        className="bg-white rounded"
      />
      <span className="text-xs font-medium text-white">{label}</span>
    </div>
  );
}
