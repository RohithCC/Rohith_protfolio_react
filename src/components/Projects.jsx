import React, { useState, useEffect } from "react";

const SAMPLE_PROJECTS = [
  {
    id: 1,
    title: "Project Alpha",
    type: "web",
    short: "A modern web app using React and Tailwind.",
    long: "Detailed description of Project Alpha. Add responsibilities, tech stack, results, links to repo or live demo.",
    tags: ["React", "Tailwind", "Vite"],
    repo: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Project Beta",
    type: "mobile",
    short: "Cross-platform app with React Native.",
    long: "Detailed description of Project Beta — challenges solved, metrics, and contributions.",
    tags: ["React Native", "Expo"],
    repo: "#",
    live: "#"
  },
  {
    id: 3,
    title: "Project Gamma",
    type: "backend",
    short: "API and microservices in Node.",
    long: "Detailed description of Project Gamma focusing on backend architecture and performance.",
    tags: ["Node.js", "Express", "Postgres"],
    repo: "#",
    live: "#"
  }
];

export default function Projects() {
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);

  const types = ["all", ...Array.from(new Set(SAMPLE_PROJECTS.map(p => p.type)))];

  const filtered = SAMPLE_PROJECTS.filter(p => filter === "all" || p.type === filter);

  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setSelected(null);
    }
    if (selected) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [selected]);

  return (
    <section id="projects" className="pt-6 pb-12">
      <h2 className="text-2xl font-bold mb-4 animate-fadeInUp">Projects</h2>

      <div className="mb-4 flex gap-2">
        {types.map(t => (
          <button
            key={t}
            onClick={() => setFilter(t)}
            className={`px-3 py-1 rounded-full border ${filter === t ? "bg-gray-900 text-white dark:bg-white dark:text-gray-900" : "border-gray-200 dark:border-gray-700"}`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {filtered.map((project, i) => (
          <article
            key={project.id}
            className="p-4 rounded-lg border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-800 transform transition hover:-translate-y-1 hover:shadow-lg"
            style={{ animation: `fadeInUp 320ms ease-out both`, animationDelay: `${i * 80}ms` }}
          >
            <h3 className="font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{project.short}</p>
            <div className="mt-3 flex items-center gap-3">
              <button
                onClick={() => setSelected(project)}
                className="px-3 py-1 rounded-md border border-gray-200 dark:border-gray-700"
              >
                Details
              </button>
              <a href={project.live} className="text-sm underline">Live</a>
              <a href={project.repo} className="text-sm underline">Repo</a>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {project.tags.map(tag => (
                <span key={tag} className="text-xs px-2 py-1 border rounded-full">{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4"
          onClick={() => setSelected(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-label={`${selected.title} details`}
            className="bg-white dark:bg-gray-900 rounded-lg max-w-2xl w-full p-6 border border-gray-200 dark:border-gray-800"
            onClick={(e) => e.stopPropagation()}
            style={{ animation: 'modalIn 220ms cubic-bezier(.2,.8,.2,1) both' }}
          >
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-bold">{selected.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{selected.tags.join(" • ")}</p>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="text-gray-600 dark:text-gray-300"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-200">{selected.long}</p>

            <div className="mt-4 flex gap-3">
              <a href={selected.live} className="px-4 py-2 border rounded-md">View Live</a>
              <a href={selected.repo} className="px-4 py-2 border rounded-md">View Repo</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
