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
      items: [
        { name: 'HTML/CSS', icon: <FaCode className="text-blue-500" size={24} />, level: 87 },
        { name: 'JavaScript', icon: <SiJavascript className="text-yellow-500" size={24} />, level: 85 },
        { name: 'React.js', icon: <FaReact className="text-blue-400" size={24} />, level: 80 },
        { name: 'Next.js', icon: <SiNextdotjs className="text-black dark:text-white" size={24} />, level: 75 },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-cyan-400" size={24} />, level: 85 },
      ]
    },
    {
      category: 'Backend',
      items: [
        { name: 'Node.js', icon: <SiNodedotjs className="text-green-500" size={24} />, level: 60 },
        { name: 'Express', icon: <FaServer className="text-gray-600" size={24} />, level: 55 },
        { name: 'MogoDb', icon: <FaDatabase className="text-green-500" size={24} />, level: 45 },
        { name: 'Firebase', icon: <PiDatabaseFill className="text-orange-800" size={24} />, level: 40 },
      ]
    },
    {
      category: 'Other',
      items: [
        { name: 'Python', icon: <SiPython className="text-green-900" size={24} />, level: 75 },
        { name: 'C#', icon: <PiFileCSharpBold className="text-blue-800" size={24} />, level: 75 },
        { name: '.Net FrameWork', icon: <PiFileCSharpBold className="text-blue-800" size={24} />, level: 75 },
        { name: 'Git', icon: <SiGit className="text-orange-500" size={24} />, level: 80 },
        { name: 'Responsive Design', icon: <FaMobileAlt className="text-purple-500" size={24} />, level: 85 },
        { name: 'UI/UX Design', icon: <SiFigma className="text-pink-500" size={24} />, level: 70 },
      ]
    }
  ];
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Technologies and tools I work with to create amazing digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skillCategory) => (
            <div 
              key={skillCategory.category}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                  {skillCategory.category}
                </h3>
                <div className="space-y-4">
                  {skillCategory.items.map((skill) => (
                    <div key={skill.name} className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center space-x-2">
                          {skill.icon}
                          <span className="text-gray-700 dark:text-gray-300 font-medium">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm text-gray-500 dark:text-gray-400">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-blue-600 h-2.5 rounded-full" 
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
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