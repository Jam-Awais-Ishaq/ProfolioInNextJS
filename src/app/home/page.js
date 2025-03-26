
import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiArrowRight } from 'react-icons/fi';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-600 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        {/* Left Column - Text Content */}
        <div className="space-y-3 box-border md:space-y-4 text-center lg:text-left relative z-10">
          <div className="inline-block px-3 py-1 mt-7 rounded-full bg-blue-100 dark:bg-gray-700 mb-4">
            <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Welcome to my portfolio</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            Hi, I&apos;m <span className="text-blue-600 font-extrabold dark:text-blue-400 bg-clip-text">Muhammad Owais Ishaq</span>
          </h1>


          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-300">
            <span className="inline-block">
              Frontend Developer
              <span className="inline-block w-2 h-2 ml-2 bg-blue-500 rounded-full animate-pulse"></span>
            </span>
          </h2>

          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-lg mx-auto lg:mx-0 leading-relaxed">
            I specialize in crafting <span className="font-medium text-blue-600 dark:text-blue-400">high-performance</span> web applications with React, Next.js, and modern web technologies. Passionate about creating intuitive, accessible, and visually stunning user experiences.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-2">
            <a
              href="#projects"
              className="group px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
            >
              View My Work
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="group px-6 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:text-blue-400 dark:hover:bg-gray-700/50 dark:border-blue-400 font-medium rounded-lg transition-all flex items-center gap-2"
            >
              Contact Me
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center lg:justify-start space-x-5 pt-6">
            {[
              { icon: <FiGithub size={24} />, url: "https://github.com/yourusername" },
              { icon: <FiLinkedin size={24} />, url: "https://linkedin.com/in/yourusername" },
              { icon: <FiTwitter size={24} />, url: "https://twitter.com/yourusername" },
              { icon: <FiMail size={24} />, url: "mailto:youremail@example.com" }
            ].map((item, index) => (
              <a
                key={index}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400  hover:-translate-y-1 transform transition-all duration-300" aria-label={`Social link ${index}`}>
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right Column - Image */}
        <div className="relative flex justify-center mt-10 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 overflow-hidden rounded-2xl shadow-2xl border-4 border-white dark:border-gray-800 group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10"></div>
            <div className="absolute inset-0 bg-blue-600/10 dark:bg-blue-400/10 group-hover:opacity-0 transition-opacity duration-500 z-0"></div>

            {/* Using Next.js Image component for optimized loading */}
            <Image src="/blue.jpg" alt="Muhammad Awais" width={500} height={500} className="w-full h-full object-cover border-0 transform group-hover:scale-105 transition-transform duration-500" priority />
          </div>

          {/* Decorative elements */}
          <div className="absolute -bottom-6 -right-6 bg-blue-600 dark:bg-blue-500 w-32 h-32 rounded-2xl -z-10 animate-float"></div>
          <div className="absolute -top-6 -left-6 bg-indigo-500 dark:bg-indigo-600 w-24 h-24 rounded-2xl -z-10 animate-float-delay"></div>

          {/* Tech stack floating badges */}
          <div className="absolute -left-0 top-1/4 bg-white dark:bg-gray-800 shadow-md px-3 py-2 rounded-lg flex items-center gap-2 -rotate-12">
            <span className="text-xs font-bold text-blue-600 dark:text-blue-400">React</span>
          </div>
          <div className="absolute -right-1 bottom-1/4 bg-white dark:bg-gray-800 shadow-md px-3 py-2 rounded-lg flex items-center gap-2 rotate-12">
            <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400">Next.js</span>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-blue-200 dark:bg-blue-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-200 dark:bg-indigo-900 rounded-full mix-blend-multiply filter blur-3xl opacity-30 dark:opacity-20 animate-blob-delay"></div>
    </section>
  );
}