import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    role: "Frontend Developer Intern",
    company: "CODEXINTERN",
    period: "Aug 2024 – Oct 2024",
    description: [
      "Engineered responsive and accessible user interfaces using React and Tailwind CSS.",
      "Collaborated with senior developers to improve UI workflows and component architecture.",
      "Refactored reusable components to enhance maintainability and performance.",
    ],
    tech: ["React", "Tailwind CSS", "JavaScript", "Git & GitHub"],
  },
  {
    role: "Web Developer (Independent Projects)",
    company: "Self-Driven",
    period: "2025 – Present",
    description: [
      "Designed and developed full-stack web applications using React, Node.js, and MongoDB.",
      "Built production-ready tools including ERP systems, quiz platforms, and internal dashboards.",
      "Focused on performance optimization, UX consistency, and scalable architecture.",
    ],
    tech: ["React", "Tailwind", "Node.js", "MongoDB", "Git & GitHub"],
  },
];

const education = [
  {
    course: "AI + Full Stack Development with Cloud",
    institute: "AlmaBetter",
    period: "2024 – Present",
    highlights: [
      "Hands-on training in React, Node.js, MongoDB, and GitHub Actions.",
      "Learning cloud deployment fundamentals and AI integration concepts.",
      "Building real-world, production-level applications aligned with industry standards.",
    ],
  },
  {
    course: "JavaScript, DOM, React & Next.js",
    institute: "Self-Learning (Projects & Online Resources)",
    period: "2023 – Present",
    highlights: [
      "Strengthened JavaScript fundamentals and modern ES6+ patterns.",
      "Developed multiple in-depth projects focused on real-world use cases.",
      "Adopted a project-driven learning approach aligned with professional workflows.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-black text-white py-16 sm:py-20"
      itemScope
      itemType="https://schema.org/Person"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* SECTION TITLE */}
        <header className=" mb-12 sm:mb-16">
          <h2
            id="experience-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold"
          >
            Professional <span className="text-indigo-500">Journey</span>
          </h2>
        </header>

        {/* EXPERIENCE */}
        <article aria-label="Professional Experience" className="mb-14 sm:mb-20">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <Briefcase size={28} className="text-indigo-500" />
            <h3 className="text-2xl sm:text-3xl font-bold">Experience</h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} data={exp} />
            ))}
          </div>
        </article>

        {/* EDUCATION */}
        <article aria-label="Education">
          <div className="flex items-center gap-3 mb-8 justify-center md:justify-start">
            <GraduationCap size={28} className="text-purple-500" />
            <h3 className="text-2xl sm:text-3xl font-bold">Education</h3>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {education.map((edu, index) => (
              <EducationCard key={index} data={edu} />
            ))}
          </div>
        </article>

      </div>
    </section>
  );
};

/* ----------------------------- */
/* EXPERIENCE CARD               */
/* ----------------------------- */
const ExperienceCard = ({ data }) => (
  <div
    className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl  transition-transform"
    itemScope
    itemType="https://schema.org/WorkExperience"
  >
    <header className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h4 className="text-xl sm:text-2xl font-bold text-indigo-400" itemProp="jobTitle">
        {data.role}
      </h4>
      <p className="text-gray-400 text-sm" itemProp="startDate">
        {data.period}
      </p>
    </header>

    <p className="text-gray-300 mt-1 font-medium" itemProp="hiringOrganization">
      {data.company}
    </p>

    <ul className="mt-4 text-gray-400 space-y-2 list-disc list-inside text-sm sm:text-base" aria-label={`Responsibilities at ${data.company}`}>
      {data.description.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>

    <div className="mt-4 flex flex-wrap gap-2" aria-label="Technologies used">
      {data.tech.map((tech, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-indigo-600/20 text-indigo-300 rounded-full text-xs sm:text-sm border border-indigo-600/40"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>
);

/* ----------------------------- */
/* EDUCATION CARD               */
/* ----------------------------- */
const EducationCard = ({ data }) => (
  <div
    className="bg-gray-900 border border-gray-800 p-6 sm:p-8 rounded-2xl shadow-xl transition-transform"
    itemScope
    itemType="https://schema.org/EducationalOccupationalCredential"
  >
    <header className="flex flex-col md:flex-row md:justify-between md:items-center">
      <h4 className="text-xl sm:text-2xl font-bold text-purple-400" itemProp="name">
        {data.course}
      </h4>
      <p className="text-gray-400 text-sm" itemProp="validFor">
        {data.period}
      </p>
    </header>

    <p className="text-gray-300 mt-1 font-medium" itemProp="educationalOrganization">
      {data.institute}
    </p>

    <ul className="mt-4 text-gray-400 space-y-2 list-disc list-inside text-sm sm:text-base" aria-label={`Highlights for ${data.course}`}>
      {data.highlights.map((point, i) => (
        <li key={i}>{point}</li>
      ))}
    </ul>
  </div>
);

export default ExperienceSection;
