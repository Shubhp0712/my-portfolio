'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'

const Hero: React.FC = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
    const [displayText, setDisplayText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)

    const roles = [
        'Full Stack Developer',
        'DevOps Engineer',
        'App Developer',
        'Web Developer',
        'Software Engineer',
        'Frontend Developer'
    ]

    useEffect(() => {
        const currentRole = roles[currentRoleIndex]
        const typingSpeed = isDeleting ? 50 : 100

        const timer = setTimeout(() => {
            if (!isDeleting && displayText.length < currentRole.length) {
                // Typing forward
                setDisplayText(currentRole.substring(0, displayText.length + 1))
            } else if (isDeleting && displayText.length > 0) {
                // Deleting backward
                setDisplayText(currentRole.substring(0, displayText.length - 1))
            } else if (!isDeleting && displayText.length === currentRole.length) {
                // Pause before deleting
                setTimeout(() => setIsDeleting(true), 1500)
            } else if (isDeleting && displayText.length === 0) {
                // Move to next role
                setIsDeleting(false)
                setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
            }
        }, typingSpeed)

        return () => clearTimeout(timer)
    }, [displayText, isDeleting, currentRoleIndex, roles])

    const scrollToProjects = () => {
        const element = document.getElementById('projects')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="hero" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Profile Photo */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                    >
                        <div className="relative mx-auto w-40 h-40 md:w-48 md:h-48">
                            {/* Gradient Border */}
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full p-1">
                                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-full p-2">
                                    <img
                                        src="profile_image.jpg"
                                        alt="Shubh Patel - Profile Photo"
                                        className="w-full h-full object-cover rounded-full shadow-lg"
                                    />
                                </div>
                            </div>

                        </div>
                    </motion.div>

                    <motion.h1
                        className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        Hi, I'm{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            Shubh Patel
                        </span>
                    </motion.h1>

                    <motion.h2
                        className="text-2xl md:text-4xl text-gray-700 dark:text-gray-300 font-light mb-8 h-16 md:h-20 flex items-center justify-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <span className="inline-block">
                            {displayText}
                            <span className="animate-pulse text-blue-600 dark:text-blue-400 font-normal">|</span>
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        Passionate about creating modern, scalable web applications with clean code and exceptional user experiences.
                        Specializing in React, Next.js, and full-stack development.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        <motion.button
                            onClick={scrollToProjects}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View My Work
                        </motion.button>
                        <motion.a
                            href="/23DCS092(Resume).pdf"
                            download="Shubh_Patel_Resume.pdf"
                            className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Download Resume
                        </motion.a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                >
                    <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500" />
                </motion.div>
            </div>
        </section>
    )
}

export default Hero
