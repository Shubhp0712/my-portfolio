'use client'

import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Award, ExternalLink } from 'lucide-react'

interface Certification {
    title: string
    issuer: string
    issuerLink: string
    date: string
    year: number
    description: string
    certificateId: string
    certificateFile: string
    type: 'certification' | 'certificate'
    color: string
}

const certifications: Certification[] = [
    {
        title: 'AWS Cloud Practitioner Essentials',
        issuer: 'Amazon Web Services',
        issuerLink: 'https://aws.amazon.com/',
        date: '2025',
        year: 2025,
        description: 'Professional certification in Cloud Practitioner and AWS services',
        certificateId: 'AWS-SA-2025',
        certificateFile: '/docs/AWS Cloud Practitioner certificate.pdf', // TODO: Add certificate file path
        type: 'certification',
        color: 'orange'
    },
    {
        title: 'Google Agile Project Management Certificate',
        issuer: 'Google',
        issuerLink: 'https://www.google.com/',
        date: '2025',
        year: 2025,
        description: 'Professional certificate in Agile Project Management',
        certificateId: 'GOOGLE-GA-2025',
        certificateFile: '/docs/23DCS092_Course1.pdf', // TODO: Add certificate file path
        type: 'certificate',
        color: 'blue'
    },
    {
        title: 'Google Foundations of Project Management',
        issuer: 'Google',
        issuerLink: 'https://www.google.com/',
        date: '2025',
        year: 2025,
        description: 'Comprehensive training in project management methodologies and tools',
        certificateId: 'GOOGLE-PM-2025',
        certificateFile: '/docs/23DCS092_Course2.pdf', // TODO: Add certificate file path
        type: 'certificate',
        color: 'blue'
    },
    {
        title: 'IBM Data Science Course',
        issuer: 'IBM via Coursera',
        issuerLink: 'https://www.ibm.com/',
        date: '2025',
        year: 2025,
        description: 'Professional certification in Data Science and Analytics',
        certificateId: 'IBM-DS-2025',
        certificateFile: '/docs/23DCS092_IBM Course Coursera.pdf', // TODO: Add certificate file path
        type: 'certificate',
        color: 'blue'
    },
    {
        title: 'Hackathon Participant - Tech-tonic 2023',
        issuer: 'tech-tonic 2023',
        issuerLink: '',
        date: '2025',
        year: 2025,
        description: 'Participant in web development category',
        certificateId: 'DEVFEST-2023',
        certificateFile: '/docs/Tech-tonic hackathon certificate .pdf', // TODO: Add certificate file path
        type: 'certificate',
        color: 'blue'
    },
    {
        title: 'Hack2Skill Certification',
        issuer: 'Hack2Skill',
        issuerLink: '',
        date: '2025',
        year: 2025,
        description: 'Certification in competitive programming and problem solving',
        certificateId: 'HACK2SKILL-2025',
        certificateFile: '/docs/Hack2skill-Certificate.png', // TODO: Add certificate file path
        type: 'certificate',
        color: 'blue'
    },
]

const Certifications: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null)
    const isInView = useInView(sectionRef, { once: true, amount: 0.1 })

    // Calculate stats
    const totalCertifications = certifications.length
    const uniqueIssuers = new Set(certifications.map(cert => cert.issuer)).size
    const latestYear = Math.max(...certifications.map(cert => cert.year))

    const handleViewCertificate = (certFile: string) => {
        // Open certificate in new tab
        window.open(certFile, '_blank', 'noopener,noreferrer')
    }

    const getIconForType = (type: string) => {
        return type === 'certification' ? '🏆' : '📜'
    }

    const getColorForType = (type: string) => {
        return type === 'certification'
            ? 'from-yellow-400 to-orange-500'
            : 'from-blue-400 to-purple-500'
    }

    return (
        <section
            ref={sectionRef}
            id="certifications"
            className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
                        Achievements & <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Certifications</span>
                    </h2>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Recognition and certifications that validate my skills and commitment to continuous learning
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-6 rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                    {certifications.map((cert, index) => (
                        <motion.div
                            key={cert.certificateId}
                            className="group relative"
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: "easeOut"
                            }}
                            whileHover={{
                                y: -8,
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-2xl p-6 h-full border border-gray-200 dark:border-gray-700 group-hover:border-blue-500 dark:group-hover:border-blue-400 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] transition-all duration-300 shadow-lg">
                                {/* Badge and Year */}
                                <div className="flex items-center justify-between mb-4">
                                    <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${getColorForType(cert.type)}`}>
                                        <span>{getIconForType(cert.type)}</span>
                                        {cert.type === 'certification' ? 'Certification' : 'Certificate'}
                                    </span>
                                    <span className="text-sm text-gray-500 dark:text-gray-400 font-semibold">{cert.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                                    {cert.title}
                                </h3>

                                {/* Issuer */}
                                {cert.issuerLink ? (
                                    <a
                                        href={cert.issuerLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-semibold mb-3 inline-block"
                                    >
                                        {cert.issuer}
                                    </a>
                                ) : (
                                    <p className="text-blue-600 dark:text-blue-400 font-semibold mb-3">{cert.issuer}</p>
                                )}

                                {/* Description */}
                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 leading-relaxed">
                                    {cert.description}
                                </p>

                                {/* Certificate ID and View Button */}
                                <div className="mt-auto flex items-center justify-between text-xs">
                                    <span className="text-gray-500 dark:text-gray-400">
                                        ID: {cert.certificateId}
                                    </span>
                                    <button
                                        onClick={() => handleViewCertificate(cert.certificateFile)}
                                        className="text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 font-medium transition-colors duration-200 cursor-pointer border-none bg-transparent flex items-center gap-1"
                                    >
                                        View Certificate →
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Section */}
                <motion.div
                    className="text-center pt-12 border-t border-gray-300 dark:border-gray-700"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 1, delay: 0.8 }}
                >
                    <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                        Continuously learning and growing in the tech industry
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 items-center">
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {totalCertifications}+
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Certifications</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {uniqueIssuers}+
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Awards</div>
                        </div>
                        <div className="w-px h-12 bg-gray-300 dark:bg-gray-700"></div>
                        <div className="text-center">
                            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                                {latestYear}
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">Latest Cert</div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Certifications