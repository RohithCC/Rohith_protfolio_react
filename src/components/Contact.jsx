import React, { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [toast, setToast] = useState(null);

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Name required";
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) e.email = "Valid email required";
    if (!form.message.trim()) e.message = "Message required";
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eobj = validate();
    setErrors(eobj);
    if (Object.keys(eobj).length === 0) {
      const subject = encodeURIComponent(`Portfolio contact from ${form.name}`);
      const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
      window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
      setToast("Opening email client.");
      setTimeout(() => setToast(null), 2000);
    }
  }

  function copyEmail() {
    const email = "your.email@example.com";
    navigator.clipboard?.writeText(email).then(() => {
      setToast("Email copied to clipboard");
      setTimeout(() => setToast(null), 2000);
    });
  }

  return (
    <section id="contact" className="pt-6 pb-12">
      <h2 className="text-2xl font-bold mb-4 animate-fadeInUp">Contact</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm">Name</label>
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
            {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
          </div>

          <div>
            <label className="block text-sm">Email</label>
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
            {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
          </div>

          <div>
            <label className="block text-sm">Message</label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              rows="5"
              className="w-full mt-1 p-2 border rounded-md bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
            />
            {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message}</p>}
          </div>

          <div className="flex items-center gap-3">
            <button type="submit" className="px-4 py-2 rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900">
              Send (opens email)
            </button>

            <button type="button" onClick={copyEmail} className="px-4 py-2 rounded-md border">
              Copy email
            </button>
          </div>
        </form>

        <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <h3 className="font-semibold">Get in touch</h3>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Email: <strong>nrohith775@gmail.com</strong>
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Phone: <strong>+91 7892365204</strong>
          </p>
          <div className="mt-4">
            <h4 className="font-medium">Availability</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Open to full-time and contract roles.</p>
          </div>
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed right-4 bottom-4 bg-black/80 text-white px-4 py-2 rounded animate-fadeIn">
          {toast}
        </div>
      )}
    </section>
  );
}
