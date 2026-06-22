import React from "react";
import Image from "next/image";
import { FiArrowRight, FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";
import { SiNextdotjs, SiReact } from "react-icons/si";

export default function Home() {
  const socialLinks = [
    { icon: <FiGithub size={21} />, url: "https://github.com/Jam-Awais-Ishaq", label: "GitHub" },
    {
      icon: <FiLinkedin size={21} />,
      url: "https://www.linkedin.com/in/muhammad-owais-ishaq-054102374/",
      label: "LinkedIn",
    },
    {
      icon: <FiTwitter size={21} />,
      url: "https://x.com/Awaisishaq12345?t=x9u8h7cJWm5C_yUDgXShKg&s=09",
      label: "Twitter",
    },
    { icon: <FiMail size={21} />, url: "mailto:muhammadowaisishaqofficials@gmail.com", label: "Email" },
  ];

  return (
    <section
      id="home"
      className="relative isolate min-h-screen overflow-hidden bg-[var(--page-bg)] px-4 pb-14 pt-28 text-[var(--text)] sm:px-6 lg:px-8 lg:pb-10 lg:pt-32"
    >
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,var(--glow-a),transparent_28%),radial-gradient(circle_at_82%_32%,var(--glow-b),transparent_26%),linear-gradient(135deg,var(--hero-start)_0%,var(--hero-mid)_52%,var(--hero-end)_100%)]" />
      <div className="hero-dot-grid absolute right-[4.5%] top-[21.5%] z-0 h-24 w-24 opacity-70" />
      <div className="hero-dot-wave absolute inset-x-0 bottom-0 -z-10 h-40 opacity-70" />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1fr_0.9fr]">
        <div className="relative z-10 text-center lg:text-left">
          <div className=" inline-flex items-center rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur">
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-sm font-bold text-transparent sm:text-base">
              Welcome to my portfolio
            </span>
            <span className="ml-2 text-base" aria-hidden="true">
              👋
            </span>
          </div>

          <h1 className="text-2xl flex items-center  font-black leading-tight tracking-normal text-[var(--text)] sm:text-5xl lg:text-lg">
            <span className="block mt-2.5">Hi, I&apos;m</span>
            <span className="mt-1 ml-5 block bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-[20px] font-black leading-tight text-transparent sm:text-[25px] lg:text-[30px]">
              Muhammad Owais Ishaq
            </span>
          </h1>

          <h2 className="mt-2 text-2xl font-extrabold text-[var(--text-soft)] sm:text-3xl lg:text-2xl">
            MERN stack Developer{" "}
            <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-transparent">
              (PERN)
            </span>
            <span className="ml-3 inline-block h-3 w-3 rounded-full bg-[var(--accent)] shadow-[0_0_24px_var(--accent-shadow)]" />
          </h2>

          <p className="mx-auto mt-1 max-w-2xl text-base leading-8 text-[var(--muted)] sm:text-lg lg:mx-0">
            I specialize in crafting{" "}
            <span className="font-semibold text-[var(--accent-text)]">high-performance</span> web applications
            with React, Next.js, and modern web technologies. Passionate about creating intuitive,
            accessible, and visually stunning user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
            <a
              href="/projects"
              className="group inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-7 py-4 text-base font-bold text-white shadow-[0_16px_36px_var(--accent-shadow)] transition-transform duration-300 hover:-translate-y-1"
            >
              View My Work
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-xl border border-[var(--accent)] px-7 py-4 text-base font-bold text-[var(--accent-text)] transition-colors duration-300 hover:bg-[var(--accent-soft)] hover:text-[var(--text)]"
            >
              Contact Me
              <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-6 flex justify-center gap-5 lg:justify-start">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.url}
                target={item.url.startsWith("mailto:") ? undefined : "_blank"}
                rel={item.url.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                aria-label={item.label}
                className="grid h-12 w-12 place-items-center rounded-xl border border-[var(--border)] bg-[var(--surface)] text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)] hover:shadow-[0_10px_28px_var(--accent-shadow)]"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-[410px]">
          <div className="absolute -right-8 top-1 hidden w-32 rounded-full border border-[var(--accent)] opacity-20 lg:block" />
          <div className="relative overflow-hidden rounded-3xl border border-[var(--accent)] bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] p-px shadow-[0_28px_90px_var(--accent-shadow)]">
            <div className="relative isolate flex aspect-[0.88] items-start justify-center overflow-hidden rounded-[1.42rem] bg-[radial-gradient(circle_at_25%_10%,var(--glow-a),transparent_40%),linear-gradient(135deg,var(--page-bg)_0%,var(--page-bg-2)_45%,var(--hero-end)_100%)]">
              <div className="absolute left-1/2 top-[54%] -z-10 aspect-square w-[82%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--accent-soft)] shadow-[inset_0_0_80px_var(--glow-a),0_0_90px_var(--glow-b)]" />
              <div className="absolute left-1/2 top-[54%] -z-10 aspect-square w-[86%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,var(--glow-a)_0%,var(--glow-b)_48%,transparent_70%)]" />
              <Image
                src="/awaisRemovedBG.png"
                alt="Muhammad Owais Ishaq"
                width={720}
                height={800}
                priority
                className="relative z-10 h-full w-full object-cover object-top"
              />
              <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-[var(--page-bg)] to-transparent" />
            </div>
          </div>

          <div className="hero-float absolute -left-3 top-[22%] hidden rotate-6 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-2xl backdrop-blur-md sm:flex lg:-left-12">
            <SiReact className="text-[#00d4ff]" size={28} />
            <span className="font-bold text-[var(--text)]">React.js</span>
          </div>

          <div className="hero-float-delay absolute -right-2 bottom-[22%] hidden -rotate-6 items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-2xl backdrop-blur-md sm:flex lg:-right-12">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-black text-lg font-black text-white">
              <SiNextdotjs size={22} />
            </span>
            <span className="font-bold text-[var(--text)]">Next.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
