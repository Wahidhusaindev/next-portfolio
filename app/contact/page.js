"use client";

import React, { useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaLaptopCode,
  FaGithub,
} from "react-icons/fa";

const Contact = () => {
  const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [errors, setErrors] = useState({ email: "" });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleBlur = (e) => {
    if (e.target.name === "email") {
      setErrors({
        ...errors,
        email: validateEmail(formData.email)
          ? ""
          : "Please enter a valid email address",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateEmail(formData.email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    setStatus("loading");

    const data = new FormData();
    data.append("access_key", ACCESS_KEY);
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      }).then((res) => res.json());

      if (res.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const contactLinks = [
    {
      label: "Email Wahid Husain",
      href: "mailto:wahidhusaindev@gmail.com",
      icon: <FaEnvelope />,
    },
    {
      label: "LinkedIn profile Wahid Husain",
      href: "https://www.linkedin.com/in/wahid-husain-dev/",
      icon: <FaLinkedin />,
    },
    {
      label: "Twitter profile Wahid Husain",
      href: "https://x.com/wahidhusaindev",
      icon: <FaTwitter />,
    },
    {
      label: "LeetCode profile Wahid Husain",
      href: "https://leetcode.com/u/wahidhusaindev/",
      icon: <FaLaptopCode />,
    },
    {
      label: "GitHub profile Wahid Husain",
      href: "https://github.com/Wahidhusaindev",
      icon: <FaGithub />,
    },
  ];

  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-4 sm:px-6 lg:px-12 py-28 flex items-center justify-center"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl w-full grid gap-16 grid-cols-1 lg:grid-cols-2">
        {/* FORM SECTION */}
        <div
          className="bg-gradient-to-br from-gray-900/70 to-black/50 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-gray-800 shadow-lg"
          aria-label="Contact form"
        >
          <header>
            <h2
              id="contact-heading"
              className="text-4xl font-extrabold mb-3 tracking-tight"
            >
              Let’s <span className="text-indigo-500">Connect</span>
            </h2>
            <p className="text-gray-400 mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base">
              Whether you're exploring collaboration, discussing opportunities, or
              need a developer obsessed with clean UI and scalable architecture,
              my inbox is always open.
            </p>
          </header>

          <form
            className="space-y-6"
            onSubmit={handleSubmit}
            noValidate
            aria-label="Send a message to Wahid Husain"
          >
            <div>
              <label
                className="block text-gray-400 mb-2 font-medium"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your full name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-gray-900/40 px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 outline-none transition text-white"
              />
            </div>

            <div>
              <label
                className="block text-gray-400 mb-2 font-medium"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your email address"
                required
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full bg-gray-900/40 px-4 sm:px-5 py-3 sm:py-4 rounded-xl border ${
                  errors.email ? "border-red-500" : "border-gray-700"
                } focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 outline-none transition text-white`}
                aria-invalid={errors.email ? "true" : "false"}
              />
              {errors.email && (
                <p className="text-red-400 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                className="block text-gray-400 mb-2 font-medium"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                rows="5"
                id="message"
                name="message"
                placeholder="Tell me about your project, idea, or question..."
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-gray-900/40 px-4 sm:px-5 py-3 sm:py-4 rounded-xl border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-600 outline-none transition text-white"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 sm:py-4 rounded-xl font-semibold tracking-wide transition transform hover:scale-[1.03] active:scale-95 shadow-lg shadow-indigo-500/20"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <p className="text-green-400 text-sm pt-2" role="status">
                Message sent successfully! I’ll get back soon.
              </p>
            )}
            {status === "error" && (
              <p className="text-red-400 text-sm pt-2" role="alert">
                Something went wrong. Try again later.
              </p>
            )}
          </form>
        </div>

        {/* CONTACT INFO SECTION */}
        <div className="flex flex-col justify-start lg:justify-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-indigo-400">
            Contact Info
          </h3>

          <ul className="space-y-4 text-gray-300">
            {contactLinks.map((link, i) => (
              <li key={i}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-3 sm:p-4 rounded-xl bg-gray-900/40 border border-gray-800 hover:bg-gray-900 hover:border-indigo-500 transition shadow-lg hover:shadow-indigo-500/20"
                  aria-label={link.label}
                >
                  <span className="text-indigo-500 text-xl sm:text-2xl">
                    {link.icon}
                  </span>
                  <span className="truncate">{link.href.includes("@") ? link.href.replace("mailto:", "") : link.href}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="text-gray-400 text-sm mt-4 sm:mt-6 max-w-md leading-relaxed">
            Prefer direct communication? I usually respond within <strong>12–24 hours</strong>.
            Always open to collaboration, opportunities, and innovative projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
