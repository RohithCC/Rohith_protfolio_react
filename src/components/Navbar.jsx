import React, { useState } from "react";

export default function Navbar({ theme, setTheme }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/60 dark:bg-gray-900/60 backdrop-blur glass border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#hero" className="text-lg font-semibold">Rohith N</a>

          <nav className="hidden md:flex items-center gap-4">
            <a href="#about" className="hover:underline">About</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-md border border-gray-200 dark:border-gray-700"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>
          </nav>

          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              aria-label="Toggle theme"
              className="p-2 rounded-md border border-gray-200 dark:border-gray-700"
            >
              {theme === "dark" ? "🌙" : "☀️"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-label="Toggle menu"
              className="p-2 rounded-md border border-gray-200 dark:border-gray-700"
            >
              {open ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2">
              <a href="#about" className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(false)}>About</a>
              <a href="#skills" className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(false)}>Skills</a>
              <a href="#projects" className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(false)}>Projects</a>
              <a href="#contact" className="block px-2 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800" onClick={() => setOpen(false)}>Contact</a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
