"use client";

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone, FiSend, FiTwitter } from "react-icons/fi";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitStatus, setSubmitStatus] = useState("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const contactDetails = [
    {
      icon: <FiMail />,
      label: "Email",
      value: "muhammadowaisishaqofficials@gmail.com",
      href: "mailto:muhammadowaisishaqofficials@gmail.com",
    },
    {
      icon: <FiPhone />,
      label: "Phone",
      value: "+92-310-8727759",
      href: "tel:+923036191910",
      note: "Temporary: +92-303-6191910",
    },
    {
      icon: <FiMapPin />,
      label: "Location",
      value: "Bahawalpur, Punjab, Pakistan",
    },
  ];

  const socialLinks = [
    { icon: <FiGithub />, label: "GitHub", href: "https://github.com/Jam-Awais-Ishaq" },
    {
      icon: <FiLinkedin />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-owais-ishaq-054102374/",
    },
    {
      icon: <FiTwitter />,
      label: "Twitter",
      href: "https://x.com/Awaisishaq12345?t=x9u8h7cJWm5C_yUDgXShKg&s=09",
    },
  ];

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("loading");
    setSubmitMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Message send nahi ho saka.");
      }

      setSubmitStatus("success");
      setSubmitMessage("Message send ho gaya. Main jald reply karunga.");
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setSubmitStatus("error");
      setSubmitMessage(error.message || "Message send nahi ho saka. Dobara try karein.");
    }
  };

  return (
    <section id="contact" className="relative isolate overflow-hidden bg-[var(--page-bg)] px-4 py-24 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,var(--glow-a),transparent_28%),radial-gradient(circle_at_82%_34%,var(--glow-b),transparent_26%),linear-gradient(135deg,var(--hero-start)_0%,var(--hero-mid)_52%,var(--hero-end)_100%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-12 max-w-3xl">
          <span className="mb-3 inline-flex rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-bold text-[var(--accent-text)]">
            Contact
          </span>
          <h2 className="text-3xl font-black leading-tight text-[var(--text)] sm:text-4xl">
            Let&apos;s discuss your next project.
          </h2>
          <p className="mt-4 text-base leading-8 text-[var(--muted)]">
            Have a project, role, or collaboration in mind? Send a message and I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="space-y-5">
            {contactDetails.map((item) => {
              const content = (
                <>
                  <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--accent-soft)] text-xl text-[var(--accent-text)]">
                    {item.icon}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold text-[var(--muted)]">{item.label}</p>
                    <p className="break-words text-base font-bold text-[var(--text)]">{item.value}</p>
                    {item.note && <p className="mt-1 text-sm text-[var(--muted)]">{item.note}</p>}
                  </div>
                </>
              );

              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_16px_50px_var(--shadow)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-soft)]"
                >
                  {content}
                </a>
              ) : (
                <div
                  key={item.label}
                  className="flex gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-[0_16px_50px_var(--shadow)]"
                >
                  {content}
                </div>
              );
            })}

            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5">
              <h3 className="mb-4 text-lg font-bold text-[var(--text)]">Connect With Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="grid h-12 w-12 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-xl text-[var(--text-soft)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:text-[var(--text)]"
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_24px_80px_var(--shadow)] ring-1 ring-[var(--border)] backdrop-blur sm:p-8"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-black text-[var(--text)]">Send a Message</h3>
              <p className="mt-2 text-sm text-[var(--muted)]">Fill out the form and I&apos;ll reply on email or phone.</p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold text-[var(--text-soft)]">
                  Full Name <span className="text-[var(--accent-text)]">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold text-[var(--text-soft)]">
                  Email <span className="text-[var(--accent-text)]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="mt-4">
              <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-[var(--text-soft)]">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                placeholder="Project inquiry"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="message" className="mb-2 block text-sm font-semibold text-[var(--text-soft)]">
                Message <span className="text-[var(--accent-text)]">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm text-[var(--text)] outline-none transition-all placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-2 focus:ring-[var(--accent-soft)]"
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={submitStatus === "loading"}
              className="mt-6 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] px-5 py-3.5 font-bold text-white shadow-[0_14px_34px_var(--accent-shadow)] transition-transform duration-300 hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
            >
              <FiSend />
              {submitStatus === "loading" ? "Sending..." : "Send Message"}
            </button>

            {submitMessage && (
              <p
                className={`mt-4 rounded-xl border px-4 py-3 text-sm font-semibold ${
                  submitStatus === "success"
                    ? "border-green-500/30 bg-green-500/10 text-green-700 dark:text-green-300"
                    : "border-red-500/30 bg-red-500/10 text-red-700 dark:text-red-300"
                }`}
              >
                {submitMessage}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
