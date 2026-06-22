"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { FiDownload, FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const pathname = usePathname();

  const navItems = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.toggle("dark", savedTheme === "dark");

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    window.localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 shadow-[0_20px_80px_var(--shadow)] backdrop-blur-xl sm:px-6">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href="/home" onClick={closeMenu} className="flex items-center gap-3">
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-2xl font-black tracking-wide text-transparent">
              MA
            </span>
            <span className="text-xl font-bold text-[var(--text)]">Portfolio</span>
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-1 py-5 text-sm font-semibold transition-colors duration-300 ${
                  pathname === item.href || (pathname === "/" && item.href === "/home")
                    ? "text-[var(--accent-text)]"
                    : "text-[var(--text-soft)] hover:text-[var(--text)]"
                }`}
              >
                {item.name}
                <span
                  className={`absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] transition-opacity duration-300 ${
                    pathname === item.href || (pathname === "/" && item.href === "/home") ? "opacity-100" : "opacity-0"
                  }`}
                />
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 lg:flex">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <a
              href="/Muhammad-Owais-Ishaq.pdf"
              download
              className="inline-flex items-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-bold text-white shadow-[0_10px_30px_var(--shadow)] transition-transform duration-300 hover:-translate-y-0.5"
            >
              <FiDownload size={18} />
              Download CV
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)] transition-colors hover:border-[var(--accent)]"
            >
              {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
            </button>
            <button
              type="button"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Toggle menu"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              className="grid h-11 w-11 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text)]"
            >
              {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          className={`grid transition-all duration-300 lg:hidden ${
            isOpen ? "grid-rows-[1fr] pb-5 opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-2 border-t border-[var(--border)] pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors ${
                    pathname === item.href || (pathname === "/" && item.href === "/home")
                      ? "bg-[var(--accent-soft)] text-[var(--accent-text)]"
                      : "text-[var(--text-soft)] hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="/Muhammad-Owais-Ishaq.pdf"
                download
                onClick={closeMenu}
                className="mt-2 inline-flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 text-sm font-bold text-white"
              >
                <FiDownload size={18} />
                Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
