import React from "react";
import Image from "next/image";
import Link from "next/link";
import FAQSection from "../_components/FAQSection";

const Projects = () => {
  const projects = [
    {
      title: "ERP Suite",
      summary:
        "A scalable, role-based ERP web application designed for authentication, inventory management, and invoicing workflows in small to mid-sized businesses.",
      highlights: [
        "Secure authentication with role-based access control (RBAC)",
        "Modular React architecture optimized for long-term scalability",
        "REST API integration with structured MongoDB schemas",
      ],
      tech: "React, Next.js, Node.js, MongoDB, REST APIs",
      image: "/images/erp-suite.webp",
      link: "#",
      alt: "ERP Suite dashboard showing inventory, invoicing, and role-based management",
    },
    {
      title: "AI Todo App",
      summary:
        "An AI-powered productivity application leveraging OpenAI APIs to generate intelligent task suggestions and assist with content creation.",
      highlights: [
        "Real-time OpenAI API integration",
        "Responsive UI built with Tailwind CSS",
        "Robust async state handling and error management",
      ],
      tech: "React, Tailwind CSS, OpenAI API",
      image: "/images/ai-todo.webp",
      link: "#",
      alt: "AI Todo application demonstrating AI-powered task management",
    },
    {
      title: "Material Request System",
      summary:
        "An internal role-based request and approval system for tracking materials, visualizing trends, and exporting operational reports.",
      highlights: [
        "User and admin dashboards with permission-based views",
        "Analytics dashboards using Chart.js",
        "CSV and PDF exports for reporting and audits",
      ],
      tech: "JavaScript, Chart.js, HTML, CSS",
      image: "/images/material-request.webp",
      link: "#",
      alt: "Material Request System dashboard with analytics charts and export tools",
    },
  ];

  return (
    <>
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-black text-white py-20 sm:py-28"
      itemScope
      itemType="https://schema.org/CreativeWork"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* HEADER */}
        <header className="mb-14 sm:mb-20 max-w-4xl">
          <h2
            id="projects-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          >
            Projects <span className="text-indigo-500">Portfolio</span>
          </h2>
          <p className="mt-4 text-gray-400 text-sm sm:text-base">
            Production-grade web applications showcasing frontend engineering,
            scalable UI systems, and full-stack development experience.
          </p>
        </header>

        {/* GRID */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          role="list"
          aria-label="Project portfolio list"
        >
          {projects.map((project, index) => (
            <article
              key={index}
              role="listitem"
              itemScope
              itemType="https://schema.org/SoftwareApplication"
              className="group bg-gray-900 border border-gray-800 rounded-2xl overflow-hidden transition-all duration-300 hover:border-indigo-600 hover:-translate-y-2"
            >
              {/* IMAGE */}
              <div className="relative w-full h-52 bg-gray-800">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority={index === 0}
                />
              </div>

              {/* CONTENT */}
              <div className="p-6 flex flex-col h-full">
                <h3
                  className="text-lg sm:text-xl font-bold mb-3"
                  itemProp="name"
                >
                  {project.title}
                </h3>

                <p
                  className="text-gray-400 text-sm sm:text-base mb-4"
                  itemProp="description"
                >
                  {project.summary}
                </p>

                <ul
                  className="list-disc list-inside text-gray-400 text-sm mb-4 space-y-1"
                  aria-label={`${project.title} key highlights`}
                >
                  {project.highlights.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <p
                  className="text-sm text-indigo-400 mb-6"
                  aria-label="Technologies used"
                >
                  {project.tech}
                </p>

                <div className="mt-auto">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} project`}
                    className="inline-flex items-center justify-center font-semibold bg-amber-50 text-black rounded px-4 py-2.5 hover:bg-amber-100 transition focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
    <FAQSection/>
    </>
  );
};

export default Projects;
