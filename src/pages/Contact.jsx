import { useState } from "react";
import { FiMail, FiLinkedin, FiGithub } from "react-icons/fi";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill all fields");
      return;
    }
    setError("");
    alert("Message sent!");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <section className="section fade">
      <div className="max-w-5xl mx-auto px-6">

        <div className="
          bg-white dark:bg-gray-900
          rounded-3xl shadow-md
          border border-gray-100 dark:border-gray-700
          p-10 grid md:grid-cols-2 gap-10 transition-colors
        ">

          
          <div>
            <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Contact
            </h1>

            <div className="space-y-5 text-lg">

              <a
                href="mailto:eshini.nethmini1003@gmail.com"
                className="flex items-center gap-3 
                text-gray-800 dark:text-gray-300 
                hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FiMail size={22} />
                <span>eshini.nethmini1003@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/eshini-nethmini-b43291284"
                target="_blank"
                className="flex items-center gap-3 
                text-gray-800 dark:text-gray-300 
                hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FiLinkedin size={22} />
                <span>LinkedIn</span>
              </a>

              <a
                href="https://github.com/EshiniN1003"
                target="_blank"
                className="flex items-center gap-3 
                text-gray-800 dark:text-gray-300 
                hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                <FiGithub size={22} />
                <span>GitHub</span>
              </a>

            </div>
          </div>

          
          <div>
            {error && <div className="text-red-500 mb-3">{error}</div>}

            <form onSubmit={handleSubmit} className="grid gap-4">

              <input
                className="p-3 border border-gray-300 dark:border-gray-700 
                rounded-lg bg-gray-50 dark:bg-gray-800 
                text-gray-900 dark:text-gray-200"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                className="p-3 border border-gray-300 dark:border-gray-700 
                rounded-lg bg-gray-50 dark:bg-gray-800 
                text-gray-900 dark:text-gray-200"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <textarea
                className="p-3 border border-gray-300 dark:border-gray-700 
                rounded-lg bg-gray-50 dark:bg-gray-800 
                text-gray-900 dark:text-gray-200 h-32"
                placeholder="Message"
                value={form.message}
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              />

              <button className="
                px-6 py-3 bg-blue-600 text-white 
                rounded-md hover:bg-blue-700 transition
              ">
                Send Message
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
