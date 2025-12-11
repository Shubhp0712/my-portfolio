'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Database, Cloud, Smartphone, Globe, Settings } from 'lucide-react'

interface ExpertiseItem {
    title: string
    description: string
    icon: React.ElementType
    skills: string[]
    color: string
}

const expertiseData: ExpertiseItem[] = [
    {
        title: 'Frontend Development',
        description: 'Creating responsive, interactive user interfaces with modern frameworks and libraries.',
        icon: Globe,
        skills: ['React', 'Next.js', 'TypeScript', 'TailwindCSS', 'Vue.js'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        title: 'Backend Development',
        description: 'Building scalable server-side applications and robust APIs.',
        icon: Code,
        skills: ['Node.js', 'Python', 'Express.js', 'FastAPI', 'REST APIs'],
        color: 'from-green-500 to-emerald-500'
    },
    {
        title: 'Database Management',
        description: 'Designing and optimizing database systems for performance and scalability.',
        icon: Database,
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
        color: 'from-purple-500 to-violet-500'
    },
    {
        title: 'DevOps & Cloud',
        description: 'Implementing CI/CD pipelines and managing cloud infrastructure.',
        icon: Cloud,
        skills: ['AWS', 'Docker', 'Kubernetes', 'GitHub Actions', 'Terraform'],
        color: 'from-orange-500 to-red-500'
    },
    {
        title: 'Mobile Development',
        description: 'Building cross-platform mobile applications with native performance.',
        icon: Smartphone,
        skills: ['React Native', 'Flutter', 'Expo', 'iOS', 'Android'],
        color: 'from-pink-500 to-rose-500'
    },
    {
        title: 'Tools & Workflow',
        description: 'Utilizing modern development tools and maintaining efficient workflows.',
        icon: Settings,
        skills: ['Git', 'VS Code', 'Figma', 'Postman', 'Jest'],
        color: 'from-indigo-500 to-blue-500'
    }
]

const Expertise: React.FC = () => {
    return (
        <section id="expertise" className="py-20 bg-white dark:bg-gray-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        My <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Expertise</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
                        I specialize in full-stack development with expertise across frontend, backend,
                        mobile development, and cloud technologies. Here are my core competencies.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {expertiseData.map((item, index) => (
                        <motion.div
                            key={item.title}
                            className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 hover:border-gray-200 dark:hover:border-gray-600"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            {/* Icon with gradient background */}
                            <div className="relative mb-6">
                                <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${item.color} text-white group-hover:scale-110 transition-transform duration-300`}>
                                    <item.icon size={24} />
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                                {item.description}
                            </p>

                            {/* Skills */}
                            <div className="space-y-2">
                                <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wide">
                                    Key Technologies
                                </h4>
                                <div className="flex flex-wrap gap-2">
                                    {item.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Call to Action */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                >
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                        Ready to bring your ideas to life with cutting-edge technology?
                    </p>
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                    >
                        Let's Work Together
                    </button>
                </motion.div>
            </div>
        </section>
    )
}

export default Expertise
