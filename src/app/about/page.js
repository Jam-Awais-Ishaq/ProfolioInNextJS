"use client";

import Image from "next/image";
import { FaCode, FaMobileAlt, FaReact } from "react-icons/fa";
import { FiArrowRight, FiBriefcase, FiDownload, FiMapPin, FiUser } from "react-icons/fi";
import { SiJavascript, SiNextdotjs, SiNodedotjs, SiTailwindcss } from "react-icons/si";

const About = () => {
  const skills = [
    { label: "HTML/CSS", icon: <FaCode /> },
    { label: "JavaScript", icon: <SiJavascript /> },
    { label: "React.js", icon: <FaReact /> },
    { label: "Next.js", icon: <SiNextdotjs /> },
    { label: "Node.js", icon: <SiNodedotjs /> },
    { label: "Tailwind CSS", icon: <SiTailwindcss /> },
    { label: "Responsive UI", icon: <FaMobileAlt /> },
  ];

  const stats = [
    { value: "1.5+", label: "Years Experience" },
    { value: "8+", label: "Completed Projects" },
    { value: "4+", label: "Production Level Projects" },
    { value: "MERN", label: "Primary Stack" },
  ];

  const journey = [
    {
      title: "Frontend Engineering",
      text: "I build responsive interfaces with React, Next.js, Tailwind CSS, and reusable component patterns.",
    },
    {
      title: "Business Applications",
      text: "I have worked on CRM systems, admin dashboards, e-commerce platforms, and blockchain-integrated apps.",
    },
    {
      title: "Product Mindset",
      text: "My focus is clean UI, fast workflows, accessible layouts, and practical solutions for real users.",
    },
  ];

  return (
    <section id="about" className="relative isolate overflow-hidden bg-[var(--page-bg)] px-4 py-24 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_18%,var(--glow-a),transparent_28%),radial-gradient(circle_at_78%_40%,var(--glow-b),transparent_26%),linear-gradient(135deg,var(--hero-start)_0%,var(--hero-mid)_52%,var(--hero-end)_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr]">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_var(--shadow)] backdrop-blur">
              <div className="flex items-center gap-5">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface-soft)]">
                  <Image
                    src="/awais.png"
                    alt="Muhammad Owais Ishaq"
                    fill
                    sizes="96px"
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <p className="mb-2 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold uppercase tracking-wide text-[var(--accent-text)]">
                    <FiUser />
                    About
                  </p>
                  <h2 className="text-2xl font-black leading-tight text-[var(--text)]">
                    Muhammad Owais Ishaq
                  </h2>
                  <p className="mt-1 text-sm font-semibold text-[var(--accent-text)]">
                    Jr MERN stack Developer (PERN)
                  </p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-semibold text-[var(--text-soft)]">
                <FiMapPin className="text-[var(--accent-text)]" />
                 Punjab, Pakistan
              </div>

              <div className="mt-6 grid gap-3">
                {stats.map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3">
                    <span className="text-sm text-[var(--muted)]">{item.label}</span>
                    <span className="font-black text-[var(--text)]">{item.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3 font-bold text-white shadow-[0_12px_28px_var(--accent-shadow)] transition duration-300 hover:-translate-y-0.5"
                >
                  Contact Me
                  <FiArrowRight />
                </a>
                <a
                  href="/Muhammad-Owais-Ishaq.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--accent)] px-5 py-3 font-bold text-[var(--accent-text)] transition-colors hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
                >
                  <FiDownload />
                  Download CV
                </a>
              </div>
            </div>
          </aside>

          <div>
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-text)]">
                <FiBriefcase />
                Professional Summary
              </p>
              <h3 className="max-w-3xl text-2xl font-black leading-tight text-[var(--text)] sm:text-4xl">
                I create modern web apps that are clean, responsive, and easy to use.
              </h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
                I am a Jr MERN Stack Developer with 1.5+ years of experience building scalable web applications. My work combines React.js, Node.js, Express, MongoDB, and practical UI thinking to deliver dashboards, CRM tools, e-commerce systems, and interactive web platforms.
              </p>
            </div>

            <div className="relative mb-10 border-l border-[var(--border)] pl-6">
              {journey.map((item) => (
                <div key={item.title} className="relative pb-8 last:pb-0">
                  <span className="absolute -left-[31px] top-1 grid h-4 w-4 place-items-center rounded-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] shadow-[0_0_20px_var(--accent-shadow)]" />
                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_16px_50px_var(--shadow)] transition-colors hover:border-[var(--accent)]">
                    <h4 className="text-lg font-bold text-[var(--text)]">{item.title}</h4>
                    <p className="mt-2 text-sm leading-7 text-[var(--muted)]">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_70px_var(--shadow)]">
              <h4 className="mb-5 text-xl font-bold text-[var(--text)]">Technologies I Use</h4>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
                {skills.map((skill) => (
                  <div
                    key={skill.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                  >
                    <div className="mb-3 grid h-10 w-10 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-text)]">
                      {skill.icon}
                    </div>
                    <p className="text-sm font-bold text-[var(--text-soft)]">{skill.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
