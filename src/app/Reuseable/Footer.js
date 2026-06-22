import Link from "next/link";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/home" },
    { name: "Projects", href: "/projects" },
    { name: "Skills", href: "/skills" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  const socialLinks = [
    {
      icon: <FaGithub size={20} />,
      label: "GitHub",
      href: "https://github.com/Jam-Awais-Ishaq",
    },
    {
      icon: <FaLinkedin size={20} />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/muhammad-owais-ishaq-054102374/",
    },
    {
      icon: <FaTwitter size={20} />,
      label: "Twitter",
      href: "https://x.com/Awaisishaq12345?t=x9u8h7cJWm5C_yUDgXShKg&s=09",
    },
    {
      icon: <FaEnvelope size={20} />,
      label: "Email",
      href: "mailto:muhammadowaisishaqofficials@gmail.com",
    },
  ];

  return (
    <footer className="relative bg-[var(--page-bg)] px-4 pt-16 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent" />
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_0%,var(--glow-a),transparent_24%),radial-gradient(circle_at_78%_0%,var(--glow-b),transparent_24%)]" />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_1fr]">
          <div>
            <Link href="/home" className="inline-flex items-center gap-3">
              <span className="bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)] bg-clip-text text-3xl font-black tracking-wide text-transparent">
                MA
              </span>
              <span className="text-xl font-bold text-[var(--text)]">Portfolio</span>
            </Link>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--muted)]">
              Muhammad Owais Ishaq, Frontend Developer focused on responsive,
              scalable, and polished web experiences.
            </p>

            <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[var(--muted)]">
              <FiMapPin className="text-[var(--accent-text)]" />
              Punjab, Pakistan
            </p>
          </div>

          <nav>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-soft)]">
              Links
            </h3>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-1">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-text)]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.18em] text-[var(--text-soft)]">
              Contact
            </h3>
            <a
              href="mailto:muhammadowaisishaqofficials@gmail.com"
              className="block break-words text-sm font-medium text-[var(--muted)] transition-colors hover:text-[var(--accent-text)]"
            >
              muhammadowaisishaqofficials@gmail.com
            </a>

            <div className="mt-5 flex gap-4">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={
                    item.href.startsWith("mailto:") ? undefined : "_blank"
                  }
                  rel={
                    item.href.startsWith("mailto:")
                      ? undefined
                      : "noopener noreferrer"
                  }
                  aria-label={item.label}
                  className="text-[var(--muted)] transition-colors hover:text-[var(--accent-text)]"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-[var(--border)] py-6 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} Muhammad Owais Ishaq. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
