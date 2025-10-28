import React from "react";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-gray-200 dark:border-gray-800 py-6">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-sm">© {new Date().getFullYear()} Rohith N. All rights reserved.</p>
        <div className="flex gap-3">
          <a href="https://www.linkedin.com/in/rohith-n-41330137/" className="text-sm underline">LinkedIn</a>
          <a href="https://github.com/RohithCC" className="text-sm underline">GitHub</a>
          <a href="#" className="text-sm underline">Resume</a>
        </div>
      </div>
    </footer>
  );
}
