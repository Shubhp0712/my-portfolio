'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear()

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const navLinks = [
        { name: 'Home', id: 'hero' },
        { name: 'Expertise', id: 'expertise' },
        { name: 'Technologies', id: 'technologies' },
        { name: 'Projects', id: 'projects' },
        { name: 'Certifications', id: 'certifications' },
        { name: 'Contact', id: 'contact' },
    ]

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Shubhp0712', icon: Github },
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubh-patel-7456bb283/', icon: Linkedin },
        { name: 'Email', url: 'mailto:shubhgugada2005@gmail.com', icon: Mail },
    ]

    return (
        <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Brand */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <h3 className="text-2xl font-bold text-blue-400 mb-4">Shubh Patel</h3>
                        <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
                            Full Stack Developer passionate about creating innovative web solutions and delivering exceptional user experiences.
                        </p>
                    </motion.div>

                    {/* Quick Links */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {navLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-gray-400 dark:text-gray-500 hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        <h4 className="text-lg font-semibold mb-4">Let's Connect</h4>
                        <div className="space-y-4">
                            <p className="text-gray-400 dark:text-gray-500">
                                <span className="text-blue-400 dark:text-blue-300">Email:</span>{' '}
                                <a
                                    href="mailto:shubhgugada2005@gmail.com"
                                    className="hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 underline"
                                >
                                    shubhgugada2005@gmail.com
                                </a>
                            </p>
                            <p className="text-gray-400 dark:text-gray-500">
                                <span className="text-blue-400 dark:text-blue-300">Location:</span> Mehsana, Gujarat, India
                            </p>

                            {/* Social Links */}
                            <div className="flex gap-4 pt-2">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-gray-800 dark:bg-gray-900 rounded-lg hover:bg-blue-600 dark:hover:bg-blue-700 transition-all duration-300 text-gray-400 dark:text-gray-500 hover:text-white"
                                        aria-label={link.name}
                                    >
                                        <link.icon size={20} />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    className="border-t border-gray-800 dark:border-gray-900 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-400 dark:text-gray-500 text-sm">
                        © {currentYear} Shubh Patel. All rights reserved.
                    </p>
                    <p className="text-gray-400 dark:text-gray-500 text-sm mt-2 md:mt-0">
                        Built with Next.js, TypeScript & TailwindCSS
                    </p>
                </motion.div>
            </div>
        </footer>
    )
}

export default Footer
