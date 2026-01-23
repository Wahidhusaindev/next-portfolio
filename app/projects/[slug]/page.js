import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// This is the same data source, but in a real app, you'd fetch this from a DB or CMS
const PROJECTS = [
  {
    slug: "erp-suite",
    title: "ERP Suite",
    description: "A minimal ERP for small businesses with inventory, invoicing, role-based access, and analytics.",
    longDescription: "This ERP Suite was designed to bridge the gap for SMEs that find enterprise solutions too complex. It features a real-time dashboard for inventory tracking, automated PDF invoice generation, and a robust RBAC (Role-Based Access Control) system to manage employee permissions.",
    image: "/images/erp-suite.webp",
    skills: ["Next.js", "React", "Node.js", "PostgreSQL", "Prisma"],
    liveUrl: "https://demo.example.com",
    githubUrl: "https://github.com/wahid/erp-suite",
    features: ["Real-time Analytics", "Multi-tenancy Support", "Inventory Forecasting", "Automated Billing"]
  },
  // ... other projects with 'slug' added
];

export async function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default function ProjectDetail({ params }) {
  const project = PROJECTS.find(async (p) => p.slug === await params.slug);

  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      {/* HEADER NAVIGATION */}
      <nav className="p-6 max-w-7xl mx-auto">
        <Link href="/projects" className="text-neutral-400 hover:text-white transition-colors flex items-center gap-2">
          ← Back to Projects
        </Link>
      </nav>

      <article className="max-w-4xl mx-auto px-6 pt-10 pb-24">
        {/* HERO */}
        <header className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">{project.title}</h1>
          
          <div className="flex flex-wrap gap-3">
            {project.skills.map((skill) => (
              <span key={skill} className="px-3 py-1 text-sm bg-blue-500/10 text-blue-400 border border-blue-500/20 rounded-full">
                {skill}
              </span>
            ))}
          </div>

          <p className="text-xl text-neutral-300 leading-relaxed">
            {project.description}
          </p>

          <div className="flex gap-4 pt-4 mb-4">
            <a href={project.liveUrl} target="_blank" rel="noopener" className="px-6 py-3 bg-white text-black font-bold rounded-xl hover:bg-neutral-200 transition-all">
              Visit Live Site
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener" className="px-6 py-3 bg-neutral-900 border border-neutral-800 text-white font-bold rounded-xl hover:bg-neutral-800 transition-all">
              Source Code
            </a>
          </div>
        </header>

        {/* MAIN IMAGE */}
        <div className="my-16 relative aspect-video rounded-3xl overflow-hidden border border-neutral-800">
          <Image 
            src={project.image} 
            alt={project.title} 
            fill 
            className="object-cover"
            priority
          />
        </div>

        {/* CONTENT GRID */}
        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
              <p className="text-neutral-400 text-lg leading-relaxed">
                {project.longDescription}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Key Features</h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-neutral-300">
                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className="space-y-8">
            <div className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30">
              <h3 className="font-bold mb-4">Technical Stack</h3>
              <div className="flex flex-col gap-2">
                {project.skills.map(s => (
                  <div key={s} className="text-sm text-neutral-400 pb-2 border-b border-neutral-800 last:border-0">{s}</div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </article>
    </main>
  );
}