'use client';

import { useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiSend, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Form submitted:', formData);
        // Reset form after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-600">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-6">
                    <h2 className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase mt-5">
                        Get In Touch
                    </h2>
                    <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                        Contact Me
                    </h1>
                    <div className="w-16 h-1 bg-indigo-600 mx-auto mt-4 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Contact Information */}
                    <div className="bg-gray-50 dark:bg-gray-800  rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Contact Details
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-start md:gap-4 ">
                                <div className="bg-indigo-100 dark:bg-indigo-900/20 p-2 rounded-lg">
                                    <FiMail className="text-indigo-600 dark:text-indigo-400 text-xl" />
                                </div>    
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                                    <a
                                        href="mailto:contact@example.com"
                                        className="text-base sm:text-[5px] text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >   
                                        muhammadowaisishaqofficials@gmail.com
                                    </a>

                                </div>
                            </div>
      
                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-100 dark:bg-indigo-900/20 p-2 rounded-lg">
                                    <FiPhone className="text-indigo-600 dark:text-indigo-400 text-xl" />   
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                                    <a
                                        href="tel:+1234567890"
                                        className="text-base flex flex-col text-gray-800 dark:text-white hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        <span>
                                            permanent NO : +92-303-6191910
                                        </span>
                                        <span>
                                            Temp NO : +92-310 8727759
                                        </span>

                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start gap-4">
                                <div className="bg-indigo-100 dark:bg-indigo-900/20 p-2 rounded-lg">
                                    <FiMapPin className="text-indigo-600 dark:text-indigo-400 text-xl" />
                                </div>
                                <div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                                    <p className="text-base text-gray-800 dark:text-white">
                                        Bahawalpur,Punjab,Pakistan
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
                            <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
                                Connect With Me
                            </h4>
                            <div className="flex gap-4">
                                <a href="https://github.com/Jam-Awais-Ishaq" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    <FiGithub className="text-xl" />
                                </a>
                                <a href="https://www.linkedin.com/in/muhammad-owais-ishaq-054102374/" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                                    <FiLinkedin className="text-xl" />
                                </a>

                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Email <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                                    placeholder="Project inquiry"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                                    Message <span className="text-red-500">*</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-white transition-all"
                                    placeholder="Tell me about your project..."
                                ></textarea>
                            </div>

                            {/* <button type="submit" className="border flex justify-center cursor-pointer border-red-500 w-[100%] items-center px-5 py-2.5 text-2xl font-medium rounded-lg text-white bg-indigo-600">
                                <FiSend className="mr-4 text-md" />
                                Send Message
                            </button> */}

                            <div className='w-[100%] flex justify-center items-center '>
                                <button className="w-[100%] border border-white rounded-md  text-white">
                                    send message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}