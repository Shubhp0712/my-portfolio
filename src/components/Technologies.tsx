'use client'

import React from 'react'
import { motion } from 'framer-motion'

interface TechCategory {
    title: string
    technologies: string[]
}

const techStack: TechCategory[] = [
    {
        title: 'Frontend',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'JavaScript']
    },
    {
        title: 'Backend',
        technologies: ['Node.js', 'Python', 'Express', 'FastAPI', 'REST APIs']
    },
    {
        title: 'Cloud & DevOps',
        technologies: ['AWS', 'Docker', 'GitHub Actions']
    },
    {
        title: 'Database',
        technologies: ['MongoDB', 'Redis', 'Supabase', 'MySQL']
    },
    {
        title: 'Also Experienced With',
        technologies: ['Git', 'Figma', 'VS Code', 'Postman']
    },
    {
        title: 'Plateforms & Tools',
        technologies: ['Jira', 'Slack', 'N8N', 'Zapier']
    }
]

const Technologies: React.FC = () => {
    return (
        <section id="technologies" className="py-24 bg-white dark:bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Technical <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Leveraging modern technologies and industry best practices to deliver scalable,
                        high-performance solutions
                    </p>
                </motion.div>

                <div className="space-y-16">
                    {techStack.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="flex items-center mb-8">
                                <div className="flex-shrink-0">
                                    <div className="w-1 h-12 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                                </div>
                                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white ml-6">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ml-7">
                                {category.technologies.map((tech, techIndex) => (
                                    <motion.div
                                        key={tech}
                                        className="group relative bg-gray-50 dark:bg-gray-700 hover:bg-blue-50 dark:hover:bg-blue-900 rounded-xl p-4 text-center transition-all duration-300 border border-gray-200 dark:border-gray-600 hover:border-blue-400 dark:hover:border-blue-500 hover:shadow-md"
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.4,
                                            delay: (categoryIndex * 0.1) + (techIndex * 0.05)
                                        }}
                                        viewport={{ once: true }}
                                        whileHover={{ y: -4 }}
                                    >
                                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors">
                                            {tech}
                                        </span>
                                        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-blue-600 dark:bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Technologies
