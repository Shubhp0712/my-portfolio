'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'

interface Project {
    title: string
    description: string
    image: string
    technologies: string[]
    liveUrl: string
    githubUrl?: string // Single repo (optional)
    githubFrontendUrl?: string // Frontend repo (optional)
    githubBackendUrl?: string // Backend repo (optional)
}

const projects: Project[] = [
    {
        title: 'AI StudyHelper - Smart Study Assistant', // TODO: Add your project title
        description: 'AI Study Helper is an intelligent web app offering AI-powered study tools like flashcards, personalized quizzes, and an interactive AI chat assistant. It allows users to create study materials, track progress with analytics, and get smart insights to boost learning efficiency. The platform includes secure OTP authentication and a fully responsive dark/light mode interface.', // TODO: Add your project description
        image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80', // AI/Tech education theme - laptop with learning interface
        technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'Sendgrid'], // TODO: Add your technologies
        liveUrl: 'https://ai-study-helper-frontend.vercel.app/', // TODO: Add your live demo URL
        // Option 1: Single repo (use this if you have one combined repo)
        // githubUrl: 'https://github.com/yourusername/project-name',
        // Option 2: Separate repos (use this if you have separate frontend/backend repos)
        githubFrontendUrl: 'https://github.com/Shubhp0712/AiStudyHelper-Frontend.git', // TODO: Add frontend GitHub URL
        githubBackendUrl: 'https://github.com/Shubhp0712/AiStudyHelper-Backend.git', // TODO: Add backend GitHub URL
    },
    {
        title: 'Online Gambling App', // TODO: Add your project title
        description: 'A feature-rich gambling platform built with secure backend architecture. Picks7 includes real-time game logic, user wallet management, betting history, and an admin dashboard for game control.', // TODO: Add your project description
        image: 'https://images.unsplash.com/photo-1596838132731-3301c3fd4317?w=800&q=80', // TODO: Replace with your project image URL
        technologies: ['Flutter', 'Node.js', 'MongoDB', 'Stripe', 'Express', 'Digital Ocean'], // TODO: Add your technologies
        liveUrl: '', // TODO: Add your live demo URL
        githubUrl: '', // TODO: Add your GitHub repository URL
    },
    {
        title: 'Trexo - A Unified Marketplace for Second-hand Vehicles and Property', // TODO: Add your project title
        description: 'Trexo is a full-stack Flutter mobile app that allows users to buy, sell, and rent real estate and vehicles with advanced search, filtering, and rich listing features. It includes secure authentication, an admin dashboard for managing listings, and seamless REST API integration with a Node.js/MongoDB backend. The app offers a polished, responsive UI with multi-image support and favorites management.', // TODO: Add your project description
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80', // Real estate and vehicles marketplace theme
        technologies: ['Flutter', 'Node.js', 'Express', 'MongoDB', 'Firebase', 'AWS'], // TODO: Add your technologies
        liveUrl: '/app-release.apk', // APK download link from public folder
        githubFrontendUrl: 'https://github.com/samarthpatel2005/Trexo_Frontend.git', // TODO: Add frontend GitHub URL
        githubBackendUrl: 'https://github.com/Jaimin7364/Trexo-backend.git', // TODO: Add backend GitHub URL
    },
    {
        title: 'API Gateway Service', // TODO: Add your project title
        description: 'Microservices API gateway with rate limiting, authentication, and comprehensive monitoring.', // TODO: Add your project description
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', // TODO: Replace with your project image URL
        technologies: ['Node.js', 'Redis', 'JWT', 'Docker', 'Kubernetes'], // TODO: Add your technologies
        liveUrl: '', // TODO: Add your live demo URL
        githubUrl: '', // TODO: Add your GitHub repository URL
    },
]

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A showcase of recent projects demonstrating technical expertise and problem-solving capabilities
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                        >
                            <div className="relative overflow-hidden h-64">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Buttons overlay on image */}
                                <div className="absolute top-4 right-4 flex flex-wrap gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                    {project.liveUrl && (
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200 shadow-lg text-sm"
                                        >
                                            Live Demo
                                        </a>
                                    )}
                                    {project.githubUrl && (
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-gray-900 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors duration-200 shadow-lg text-sm"
                                        >
                                            GitHub
                                        </a>
                                    )}
                                    {project.githubFrontendUrl && (
                                        <a
                                            href={project.githubFrontendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-200 shadow-lg text-sm"
                                        >
                                            Frontend
                                        </a>
                                    )}
                                    {project.githubBackendUrl && (
                                        <a
                                            href={project.githubBackendUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="bg-green-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-green-700 transition-colors duration-200 shadow-lg text-sm"
                                        >
                                            Backend
                                        </a>
                                    )}
                                </div>
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-4 py-1.5 bg-blue-50 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-800 transition-colors duration-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Projects Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-6 text-lg">
                        Want to see more of my work?
                    </p>
                    <a
                        href="https://github.com/Shubhp0712" // TODO: Add your GitHub profile URL here
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
                    >
                        <span>View All Projects on GitHub</span>
                        <ExternalLink size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    )
}

export default Projects
