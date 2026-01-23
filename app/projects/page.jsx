import Image from "next/image";
import Link from "next/link";

/* ============================
   SEO METADATA (SERVER-SIDE)
============================ */
export async function generateMetadata() {
  return {
    title: "Projects | Wahid Husain – Full Stack Developer",
    description:
      "Explore real-world projects including ERP systems, full-stack web apps, and AI-driven platforms built with Next.js, React, and Node.js.",
    keywords: [
      "Projects Portfolio",
      "Next.js Projects",
      "React Developer",
      "ERP System",
      "Full Stack Developer",
      "Web Applications",
    ],
    alternates: {
      canonical: "/projects",
    },
    openGraph: {
      title: "Projects | Wahid Husain – Full Stack Developer",
      description:
        "Production-ready applications showcasing scalable architecture and clean UI.",
      url: "/projects",
      siteName: "Wahid Husain Portfolio",
      images: [
        {
          url: "/images/erp-suite.webp",
          width: 1200,
          height: 630,
          alt: "ERP Suite Project",
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Projects | Wahid Husain – Full Stack Developer",
      description:
        "Explore my professional projects built using Next.js and React.",
      images: ["/images/erp-suite.webp"],
    },
  };
}

/* ============================
   DATA (STATIC / SERVER-SAFE)
============================ */
const PROJECTS = [
  {
    id: 1,
    title: "ERP Suite",
    description:
      "A minimal ERP for small businesses with inventory, invoicing, role-based access, and analytics.",
    image: "/images/erp-suite.webp",
    alt: "ERP Suite Dashboard",
    href: "/projects/erp-suite",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Material Request System",
    description:
      "Role-based material request app with approval workflow, CSV/PDF export, and dashboards.",
    image: "/images/material-request.webp",
    alt: "Material Request App",
    href: "/projects/material-request",
    skills: ["Next.js", "React", "Node.js", "MongoDB"],
  },
  {
    id: 3,
    title: "Quiz Platform",
    description:
      "Interactive quiz app with leaderboard, progress tracking, and localStorage persistence.",
    image: "/images/quiz-app.webp",
    alt: "Quiz Application",
    href: "/projects/quiz-app",
    skills: ["React", "TypeScript", "CSS Modules"],
  },
];

/* ============================
   PAGE COMPONENT (SERVER)
============================ */
export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white selection:bg-blue-500/30">
      {/* BACKGROUND DECORATION */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-900/20 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] -right-[10%] w-[30%] h-[30%] bg-purple-900/10 blur-[120px] rounded-full" />
      </div>

      {/* HERO SECTION */}
      <section className="px-6 pt-24 pb-16 max-w-7xl mx-auto">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-500">
            Projects
          </h1>
          <p className="max-w-2xl text-lg text-neutral-400 leading-relaxed">
            A curated selection of production-ready applications focused on
            scalability, performance, and clean user experience.
          </p>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative flex flex-col rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-md overflow-hidden hover:border-neutral-600 transition-all duration-500"
            >
              {/* IMAGE WRAPPER */}
              <div className="relative aspect-[16/10] overflow-hidden border-b border-neutral-800">
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* OVERLAY GRADIENT */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* CONTENT AREA */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <h2 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-sm text-neutral-400 leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                </div>

                {/* SKILLS TAGS */}
                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider bg-neutral-800/50 text-neutral-300 rounded-md border border-neutral-700/50"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* ACTION FOOTER */}
                  <div className="flex items-center justify-between pt-4 border-t border-neutral-800/50">
                    <Link
                      href={project.href}
                      className="relative z-10 px-5 py-2 text-xs font-bold uppercase tracking-widest text-white bg-white/5 border border-white/10 rounded-xl transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 active:scale-95"
                    >
                      Live Demo
                    </Link>

                    {/* Invisible link that makes the whole card clickable */}
                    <Link href={project.href} className="absolute inset-0 z-0">
                      <span className="sr-only">View {project.title}</span>
                    </Link>

                    <span className="text-neutral-600 group-hover:text-blue-400 transition-colors duration-500">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M7 7h10v10" />
                        <path d="M7 17L17 7" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section className="px-6 py-20 text-center">
        <div className="max-w-2xl mx-auto p-12 rounded-3xl border border-neutral-800 bg-gradient-to-b from-neutral-900/50 to-transparent">
          <h3 className="text-2xl font-bold">Have a project in mind?</h3>
          <p className="mt-2 text-neutral-400">Let’s build something amazing together.</p>
          <Link 
            href="/contact" 
            className="mt-6 inline-block px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-neutral-200 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}