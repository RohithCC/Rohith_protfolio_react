import React, { useState } from "react";
import img from '../assets/profile.jpeg'

export default function Hero() {
  const [copied, setCopied] = useState(false);

  function copyEmail() {
    const email = "your.email@example.com";
    navigator.clipboard?.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  }

  return (
    <section id="hero" className="pt-12 pb-10">
      <div className="flex flex-col-reverse lg:flex-row items-start gap-8">
        <div className="flex-1 animate-fadeInUp">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
            Hi, I'm <span className="text-brand-500">Rohith N</span>
          </h1>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
            Frontend Engineer / Backend Developer / Full-stack Developer. I build clean, accessible, and performant web apps.
            Replace this with your one-sentence summary.
          </p>

          <div className="mt-6 flex gap-3">
            <a href="#projects" className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 hover:shadow-sm transition">View Projects</a>
            <a href="#contact" className="px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900 transition">Contact Me</a>
            <button
              className="px-4 py-2 rounded-md border border-gray-200 dark:border-gray-700 transition"
              onClick={copyEmail}
              aria-label="Copy email to clipboard"
            >
              {copied ? "Copied ✓" : "Copy email"}
            </button>
          </div>
        </div>

        <div className="w-full lg:w-80">
          <div className="rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 p-4 border border-gray-200 dark:border-gray-700">
            <div className="h-48 w-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-600 flex items-center justify-center rounded-lg animate-float">
              <img src={img} alt="" className="h-40 w-40 rounded-full object-cover border-4 border-white dark:border-gray-800" onError={(e)=>{e.currentTarget.style.display='none'}}/>
              {/* If you don't have an image file, the <img> will hide and the placeholder below will show */}
              <div className="absolute text-gray-500"></div>
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Quick Info</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">Location: Bengaluru, India</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">Open to: Full-time / Contract</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
