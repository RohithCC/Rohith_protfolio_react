import React from "react";

const skills = [
  { name: "JavaScript", level: 90 },
  { name: "React", level: 90 },
  { name: "TypeScript", level: 75 },
  { name: "Node.js", level: 70 },
  { name: "CSS / Tailwind", level: 85 }
];

export default function Skills() {
  return (
    <section id="skills" className="pt-6 pb-12">
      <h2 className="text-2xl font-bold mb-4 animate-fadeInUp">Skills</h2>
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-4">
          {skills.map((s) => (
            <div key={s.name} className="animate-fadeInUp">
              <div className="flex justify-between mb-1">
                <span className="font-medium">{s.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-300">{s.level}%</span>
              </div>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-brand-500 to-green-400 transition-all"
                  style={{ width: `${s.level}%`, animation: `grow 1200ms ease-out both` }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-100 dark:border-gray-700 animate-fadeInUp">
          <h3 className="font-semibold mb-2">Tools & Technologies</h3>
          <div className="flex flex-wrap gap-2">
            {["React", "Vite", "Tailwind", "Node", "Express", "Postgres", "Git"].map((t) => (
              <span key={t} className="px-3 py-1 text-sm rounded-full border border-gray-200 dark:border-gray-700">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
