import React from "react";
import Skills from "../_components/Skills";

const About = () => {
  return (
    <>
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-black text-white py-16 sm:py-24"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">

        {/* LEFT: CONTENT */}
        <article aria-label="Professional summary">
          <header>
            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
            >
              About <span className="text-indigo-500">Me</span>
            </h2>
          </header>

          <p
            className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base"
            itemProp="description"
          >
            Frontend-focused software developer with hands-on experience building
            responsive, performance-driven web applications using{" "}
            <strong className="font-medium text-gray-300">
              React, Next.js, JavaScript, and modern CSS frameworks
            </strong>.
          </p>

          <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
            Specialized in scalable UI engineering, clean component architecture,
            accessibility-first design, and translating business requirements
            into reliable, maintainable frontend systems.
          </p>

          <p className="text-gray-400 leading-relaxed text-sm sm:text-base">
            Currently expanding into full-stack development, working with APIs,
            backend services, and data modeling while maintaining strong frontend
            engineering fundamentals.
          </p>
        </article>

        {/* RIGHT: METRICS */}
        <aside
          aria-label="Professional highlights and metrics"
          className="grid grid-cols-2 gap-4 sm:gap-6"
        >
          <StatCard value="10+" label="Projects Built" />
          <StatCard value="1+" label="Years of Hands-on Experience" />
          <StatCard value="5+" label="Production Applications" />
          <StatCard value="∞" label="Continuous Learning & Growth" />
        </aside>

      </div>
    </section>
    <Skills/>
  </>);
};

/* -------------------------------------------------- */
/* STAT CARD (Reusable, Scalable)                      */
/* -------------------------------------------------- */
const StatCard = ({ value, label }) => (
  <div
    role="group"
    aria-label={label}
    className="bg-gray-900 border border-gray-800 rounded-2xl p-4 sm:p-6 text-center hover:border-indigo-500/40 transition-colors"
  >
    <span
      className="block text-2xl sm:text-3xl font-bold text-indigo-500"
      aria-hidden="true"
    >
      {value}
    </span>
    <span className="block text-gray-400 mt-1 sm:mt-2 text-sm sm:text-base">
      {label}
    </span>
  </div>
  
);

export default About;
