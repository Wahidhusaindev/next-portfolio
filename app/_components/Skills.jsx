import React from "react";

const Skills = () => {
  return (
    <section
      className="py-24 bg-gradient-to-b from-black to-gray-900 text-white"
      id="skills"
      aria-label="Technical skills"
    >
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold mb-4">
          Technical <span className="text-indigo-500">Skill Set</span>
        </h2>

        <p className="text-gray-400 max-w-2xl mb-14">
          A modern frontend-first skill stack with a strong trajectory toward
          scalable full-stack web application development.
        </p>

        <div className="grid md:grid-cols-2 gap-12">

          {/* Frontend Skills */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-2 text-indigo-400">
              Frontend Engineering
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Building high-performance, accessible, and scalable user
              interfaces.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Skill label="HTML5 & Semantic Markup" />
              <Skill label="CSS3 & Responsive Design" />
              <Skill label="JavaScript (ES6+)" />
              <Skill label="React.js" />
              <Skill label="Next.js" />
              <Skill label="Tailwind CSS" />
              <Skill label="Bootstrap" />
              <Skill label="GSAP & Framer Motion" />
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-2 text-purple-400">
              Backend & Full-Stack Foundations
            </h3>

            <p className="text-gray-400 text-sm mb-6">
              Designing APIs, managing data, and enabling secure application
              workflows.
            </p>

            <div className="grid grid-cols-2 gap-4">
              <Skill label="Node.js" />
              <Skill label="Express.js" />
              <Skill label="MongoDB" />
              <Skill label="RESTful APIs" />
              <Skill label="JWT Authentication" />
              <Skill label="Firebase Services" />
              <Skill label="Git & GitHub" />
              <Skill label="Cloud & Deployment Basics" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

const Skill = ({ label }) => (
  <div
    className="bg-black/40 px-4 py-3 rounded-xl border border-gray-800 
               hover:border-indigo-500 hover:scale-[1.02] transition 
               text-sm font-medium text-gray-300"
  >
    {label}
  </div>
);

export default Skills;
