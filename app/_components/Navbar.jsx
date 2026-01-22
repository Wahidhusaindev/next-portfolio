"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import links from "../_constraint/index";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav
      className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800"
      role="navigation"
      aria-label="Primary Navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
        
        {/* Brand */}
        <Link
          href="/"
          className="text-2xl md:text-3xl font-extrabold tracking-wide text-white hover:scale-105 transition-transform"
          aria-label="Wahid Husain portfolio home"
        >
          Wahid<span className="text-indigo-500">.dev</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 items-center">
          {links.map(({ name, path }) => {
            const isActive = pathname === path;

            return (
              <li key={name}>
                <Link
                  href={path}
                  className={`text-md font-medium transition-colors ${
                    isActive
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className="sr-only">Open menu</span>
          <div className="space-y-1.5">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                open && "rotate-45 translate-y-2"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-opacity ${
                open && "opacity-0"
              }`}
            />
            <span
              className={`block h-0.5 w-6 bg-white transition-transform ${
                open && "-rotate-45 -translate-y-2"
              }`}
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-80" : "max-h-0"
        }`}
      >
        <ul className="bg-black/90 px-6 py-4 space-y-4">
          {links.map(({ name, path }) => {
            const isActive = pathname === path;

            return (
              <li key={name}>
                <Link
                  href={path}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium transition-colors ${
                    isActive
                      ? "text-indigo-400"
                      : "text-gray-300 hover:text-white"
                  }`}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
