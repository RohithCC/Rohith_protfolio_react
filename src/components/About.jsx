import React from "react";

export default function About() {
  return (
    <section id="about" className="pt-8 pb-12">
      <h2 className="text-2xl font-bold mb-4 animate-fadeInUp">About Me</h2>
      <div className="prose dark:prose-invert max-w-none">
        <p>
          I'm a software engineer with X years of experience building user-friendly web applications.
          I enjoy working on performance, accessibility and good UX. Technologies I often use: React, TypeScript, Node.js, Tailwind CSS.
        </p>
        <p>
          Replace this paragraph with details about notable roles, achievements, or what you're looking for.
        </p>
      </div>
    </section>
  );
}
