"use client";
import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import Link from 'next/link';

export default function Navbar({ darkMode, toggleDarkMode }) {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        { name: 'Home', href: 'home' },
        { name: 'Projects', href: 'projects' },
        { name: 'Skills', href: 'skills' },
        { name: 'About', href: 'about' },
        { name: 'Contact', href: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'projects', 'skills', 'about', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element && element.offsetTop <= scrollPosition &&
                    element.offsetTop + element.offsetHeight > scrollPosition) {
                    setActiveSection(section);
                    break;
                }
            }
        };

        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <header className={`fixed w-full z-50 transition-colors duration-300 ${darkMode ? 'bg-gray-900/90 backdrop-blur-sm' : 'bg-white/90 backdrop-blur-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-12">
                    {/* Logo */}
                    <Link href="#home" className="flex items-center group">
                        <span className={`text-xl font-bold transition-colors ${darkMode ? 'text-blue-400 group-hover:text-blue-300' : 'text-blue-600 group-hover:text-blue-500'}`}>MA</span>
                        <span className={`ml-2 text-xl font-bold transition-colors ${darkMode ? 'text-white group-hover:text-gray-300' : 'text-gray-900 group-hover:text-gray-700'}`}>Portfolio</span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center text-red- space-x-8">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className={`px-1 py-2 text-sm font-medium transition-colors duration-300 ${darkMode ? activeSection === item.name.toLowerCase() ? 'text-blue-400' : 'text-gray-300 hover:text-blue-400' : activeSection === item.name.toLowerCase() ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'}`}>
                                {item.name}
                            </Link>
                        ))}

                        {/* Dark Mode Toggle */}
                        <button onClick={toggleDarkMode} aria-label="Toggle dark mode" className={`p-2 rounded-full focus:outline-none ${darkMode ? 'text-yellow-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'}`}>
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>

                        {/* Download CV Button */}
                        <Link
                            href="/path-to-your-cv.pdf"
                            download
                            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}
                        >
                            Download CV
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center space-x-4">
                        <button
                            onClick={toggleDarkMode}
                            aria-label="Toggle dark mode"
                            className={`p-2 rounded-full focus:outline-none ${darkMode ? 'text-yellow-300' : 'text-gray-700'}`}
                        >
                            {darkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                            aria-expanded={isOpen}
                            aria-controls="mobile-menu"
                            className={`p-2 rounded-md focus:outline-none ${darkMode ? 'text-gray-300 hover:bg-gray-700' : 'text-gray-700 hover:bg-gray-200'}`}
                        >
                            {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            <div
                id="mobile-menu"
                className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'} ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
                <div className="px-4 pt-2 pb-8 space-y-4">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => { setIsOpen(false); document.querySelector(item.href)?.scrollIntoView({ behavior: 'smooth' }); }}
                            className={`block px-3 py-3 rounded-md text-base font-medium transition-colors ${darkMode ? 'text-gray-300 hover:bg-gray-800 hover:text-blue-400' : 'text-gray-700 hover:bg-gray-100 hover:text-blue-600'}`}>
                            {item.name}
                        </Link>))}
                    <Link href="/path-to-your-cv.pdf" download onClick={() => setIsOpen(false)} className={`block px-4 py-3 mt-4 rounded-md text-center font-medium transition-colors ${darkMode ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-blue-600 text-white hover:bg-blue-700'}`}> Download CV </Link>
                </div>
            </div>
        </header>
    );
}