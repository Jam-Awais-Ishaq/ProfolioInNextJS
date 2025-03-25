"use client";
import Image from 'next/image';
import { FaCode, FaReact, FaMobileAlt } from 'react-icons/fa';
import { SiNextdotjs, SiJavascript, SiTailwindcss } from 'react-icons/si';

const About = () => {
  return (
    <section id="about" className="py-16 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mt-4"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
              <Image
                src="/blue.jpg" // Replace with your image path
                alt="Profile Picture"
                layout="fill"
                objectFit="cover"
                className="hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>

          <div className="lg:w-2/3">
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              Junior Front-End Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Passionate about building responsive, high-performance web applications with clean code and modern UI/UX principles. I focus on creating fast, accessible, and scalable digital experiences that users love.
            </p>

            <div className="mb-8">
              <h4 className="text-xl font-medium text-gray-800 dark:text-white mb-4">
                My Skills
              </h4>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <FaCode className="text-blue-600" />
                  <span className="text-gray-700 dark:text-gray-300">HTML/CSS</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <SiJavascript className="text-yellow-500" />
                  <span className="text-gray-700 dark:text-gray-300">JavaScript</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <FaReact className="text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">React.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <SiNextdotjs className="text-black dark:text-white" />
                  <span className="text-gray-700 dark:text-gray-300">Next.js</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <SiTailwindcss className="text-blue-400" />
                  <span className="text-gray-700 dark:text-gray-300">Tailwind CSS</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  <FaMobileAlt className="text-purple-600" />
                  <span className="text-gray-700 dark:text-gray-300">Responsive Design</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Contact Me
              </a>
              <button onClick={() => { const link = document.createElement("a"); link.href = "/Owais Resume.pdf"; link.download = "Owais_Resume.pdf"; document.body.appendChild(link); link.click(); document.body.removeChild(link); }}
                className="px-6 py-3 border border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-gray-800 transition duration-300"
              >
                Download Resume
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;