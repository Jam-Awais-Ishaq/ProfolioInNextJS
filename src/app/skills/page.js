// components/Skills.js
"use client";
import { FaCode, FaReact, FaMobileAlt, FaServer } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss, SiTypescript, SiNodedotjs, SiGit, SiFigma } from 'react-icons/si';
import { FaDatabase } from "react-icons/fa";
import { PiDatabaseFill } from "react-icons/pi";
import { SiPython } from "react-icons/si";
import { PiFileCSharpBold } from "react-icons/pi";



const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      summary: 'Responsive interfaces, modern UI systems, and component-based apps.',
      items: [
        { name: 'HTML/CSS', icon: <FaCode className="text-blue-500" size={24} />, level: 87 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" size={24} />, level: 85 },
        { name: 'React.js', icon: <FaReact className="text-blue-400" size={24} />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" size={24} />, level: 75 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: 80 },
        { name: 'Bootstrap', icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: 75 },
      ]
    },
    {
      category: 'Backend',
      summary: 'APIs, server logic, databases, and application infrastructure.',
      items: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" size={24} />, level: 60 },
        { name: 'Express', icon: <FaServer className="text-gray-600" size={24} />, level: 55 },
        { name: 'MongoDb/Atlas', icon: <FaDatabase className="text-green-500" size={24} />, level: 45 },
      ]
    },
    {
      category: 'Other',
      summary: 'Version control, collaboration, and production-ready workflows.',
      items: [
        { name: 'Git', icon: <SiGit className="text-orange-500" size={24} />, level: 80 },
        { name: 'GitHub', icon: <SiGit className="text-orange-500" size={24} />, level: 80 },
        { name: 'Responsive Design', icon: <FaMobileAlt className="text-purple-500" size={24} />, level: 85 },
      ]
    }
  ];
  return (
    <section id="skills" className="relative isolate overflow-hidden bg-[var(--page-bg)] px-4 py-28 text-[var(--text)] sm:px-6 lg:px-8">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_18%,var(--glow-a),transparent_28%),radial-gradient(circle_at_82%_30%,var(--glow-b),transparent_26%),linear-gradient(135deg,var(--hero-start)_0%,var(--hero-mid)_52%,var(--hero-end)_100%)]" />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[var(--text)] sm:text-4xl">
            My Skills
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 bg-gradient-to-r from-[var(--accent)] to-[var(--accent-2)]"></div>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted)]">
            Technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {skills.map((skillCategory) => (
            <div 
              key={skillCategory.category}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-[0_20px_70px_var(--shadow)] ring-1 ring-[var(--border)] backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--surface-soft)] hover:shadow-[0_26px_90px_var(--accent-shadow)]"
            >
              <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[var(--glow-a)] blur-3xl transition-opacity duration-300 group-hover:opacity-90" />
              <div className="absolute -bottom-20 -left-20 h-44 w-44 rounded-full bg-[var(--glow-b)] blur-3xl" />

              <div className="relative">
                <div className="mb-7 flex items-center gap-4">
                  <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-[var(--accent)] to-[var(--accent-2)] text-white shadow-[0_16px_36px_var(--accent-shadow)]">
                    {skillCategory.items[0].icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--accent-text)]">
                      Expertise
                    </p>
                    <h3 className="text-2xl font-black text-[var(--text)]">
                      {skillCategory.category}
                    </h3>
                  </div>
                </div>

                <p className="mb-7 text-sm leading-6 text-[var(--muted)]">
                  {skillCategory.summary}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  {skillCategory.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/item rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[var(--accent)] hover:bg-[var(--accent-soft)]"
                    >
                      <div className="mx-auto mb-3 grid h-12 w-12 place-items-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] transition-transform duration-300 group-hover/item:scale-110">
                        {skill.icon}
                      </div>
                      <h4 className="text-sm font-bold text-[var(--text)]">
                        {skill.name}
                      </h4>
                      <p className="mt-1 text-xs font-semibold text-[var(--accent-text)]">
                        {skill.level}% command
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
