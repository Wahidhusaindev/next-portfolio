import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaLaptopCode,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-black border-t border-gray-900 py-12 text-gray-400"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* BRAND + SEO DESCRIPTION */}
        <div>
          <h2 className="text-white font-extrabold text-xl tracking-wide">
            Wahid<span className="text-indigo-500">.dev</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed max-w-sm">
            Frontend Developer specializing in <strong>React</strong>,
            <strong> JavaScript</strong>, and <strong>Tailwind CSS</strong>.
            Building scalable, high-performance, SEO-optimized web
            applications with modern UI engineering best practices.
          </p>
        </div>

        {/* QUICK CONTACT (ATS FRIENDLY) */}
        <address className="not-italic">
          <h3 className="text-white font-semibold text-base mb-3">
            Contact
          </h3>

          <ul className="space-y-2 text-sm">
            <li>
              <a
                href="mailto:wahidhusaindev@gmail.com"
                className="hover:text-white transition inline-flex items-center gap-2"
                aria-label="Email Wahid Husain"
              >
                <FaEnvelope className="text-indigo-500" />
                wahidhusaindev@gmail.com
              </a>
            </li>

            <li className="text-gray-500">
              Open to frontend & full-stack opportunities
            </li>
          </ul>
        </address>

        {/* SOCIAL + PLATFORM LINKS */}
        <div>
          <h3 className="text-white font-semibold text-base mb-3">
            Profiles
          </h3>

          <div className="flex items-center gap-5 text-2xl">
            <a
              href="https://github.com/Wahidhusaindev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile of Wahid Husain"
              className="hover:text-white transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/wahid-husain-dev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile of Wahid Husain"
              className="hover:text-white transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/wahidhusaindev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter profile of Wahid Husain"
              className="hover:text-white transition"
            >
              <FaTwitter />
            </a>

            <a
              href="https://leetcode.com/u/wahidhusaindev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LeetCode profile of Wahid Husain"
              className="hover:text-white transition"
            >
              <FaLaptopCode />
            </a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="mt-12 text-center text-xs text-gray-600">
        © {year} Wahid Husain · Frontend Developer · React · JavaScript ·
        Tailwind CSS
      </div>
    </footer>
  );
};

export default Footer;
