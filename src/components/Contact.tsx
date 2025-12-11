'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, Send, MapPin, Phone, Clock, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    })
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        // Clear error when user starts typing
        if (error) setError(null)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        setError(null)

        try {
            // EmailJS configuration
            const serviceId = 'service_mzq6ecw'
            const templateId = 'template_ayhpc52'
            const publicKey = '5sRlYUCbV69d5E92l'

            // Send email using EmailJS with your template variables
            const response = await emailjs.send(
                serviceId,
                templateId,
                {
                    name: formData.name,        // {{name}} in your template
                    email: formData.email,      // {{email}} in your template
                    subject: formData.subject,  // {{subject}} in your template
                    message: formData.message,  // {{message}} in your template
                },
                publicKey
            )

            console.log('Email sent successfully:', response)
            setIsSubmitting(false)
            setIsSubmitted(true)

            // Reset form
            setFormData({ name: '', email: '', subject: '', message: '' })

            // Hide success message after 5 seconds
            setTimeout(() => setIsSubmitted(false), 5000)

        } catch (err: any) {
            console.error('Failed to send email:', err)
            setIsSubmitting(false)
            setError(err.text || err.message || 'Failed to send message. Please try again or contact me directly via email.')

            // Hide error message after 7 seconds
            setTimeout(() => setError(null), 7000)
        }
    }

    const socialLinks = [
        { name: 'GitHub', url: 'https://github.com/Shubhp0712', icon: Github, color: 'from-gray-700 to-gray-900', hoverColor: 'hover:shadow-gray-500/50' }, // TODO: Add your GitHub URL
        { name: 'LinkedIn', url: 'https://www.linkedin.com/in/shubh-patel-7456bb283/', icon: Linkedin, color: 'from-blue-600 to-blue-700', hoverColor: 'hover:shadow-blue-500/50' }, // TODO: Add your LinkedIn URL
        // { name: 'Twitter', url: 'https://twitter.com/yourhandle', icon: Twitter, color: 'from-sky-500 to-blue-600', hoverColor: 'hover:shadow-sky-500/50' }, // TODO: Add your Twitter URL
        { name: 'Email', url: 'mailto:shubhgugada2005@gmail.com', icon: Mail, color: 'from-red-500 to-pink-600', hoverColor: 'hover:shadow-red-500/50' },
    ]

    const contactInfo = [
        { icon: Mail, label: 'Email', value: 'shubhgugada2005@gmail.com', href: 'mailto:shubhgugada2005@gmail.com' },
        { icon: MapPin, label: 'Location', value: 'Mehsana, Gujarat, India', href: null },
        { icon: Clock, label: 'Response Time', value: 'Within 24 hours', href: null },
    ]

    return (
        <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
                <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        Let's <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        Have a project in mind or just want to chat? I'd love to hear from you.
                        Let's create something amazing together!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-3 gap-8 mb-16">
                    {/* Contact Info Cards */}
                    {contactInfo.map((info, index) => (
                        <motion.div
                            key={info.label}
                            className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="flex items-start space-x-4">
                                <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl text-white">
                                    <info.icon size={24} />
                                </div>
                                <div className="flex-1">
                                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{info.label}</h3>
                                    {info.href ? (
                                        <a
                                            href={info.href}
                                            className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
                                        >
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-gray-600 dark:text-gray-400">{info.value}</p>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-5 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        className="lg:col-span-3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>

                            {isSubmitted && (
                                <motion.div
                                    className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <CheckCircle className="text-green-600 flex-shrink-0" size={24} />
                                    <div>
                                        <p className="text-green-800 font-semibold">Message sent successfully!</p>
                                        <p className="text-green-600 text-sm">I'll get back to you soon.</p>
                                    </div>
                                </motion.div>
                            )}

                            {error && (
                                <motion.div
                                    className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3"
                                    initial={{ opacity: 0, y: -10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                >
                                    <AlertCircle className="text-red-600 flex-shrink-0" size={24} />
                                    <div>
                                        <p className="text-red-800 font-semibold">Failed to send message</p>
                                        <p className="text-red-600 text-sm">{error}</p>
                                    </div>
                                </motion.div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Full Name *
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                            Email Address *
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:bg-white dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                                        placeholder="Project Inquiry"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={6}
                                        className="w-full px-4 py-3.5 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none hover:bg-white dark:hover:bg-gray-600 text-gray-900 dark:text-white"
                                        placeholder="Tell me about your project or inquiry..."
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${isSubmitting
                                        ? 'bg-gray-400 cursor-not-allowed'
                                        : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl'
                                        }`}
                                    whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            <span>Sending...</span>
                                        </>
                                    ) : (
                                        <>
                                            <Send size={20} />
                                            <span>Send Message</span>
                                        </>
                                    )}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Sidebar */}
                    <motion.div
                        className="lg:col-span-2 space-y-8"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        {/* Social Links */}
                        <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-100 dark:border-gray-700">
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">Connect on Social</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`p-4 bg-gradient-to-br ${link.color} text-white rounded-2xl shadow-lg ${link.hoverColor} transition-all duration-300 flex flex-col items-center justify-center space-y-2 group`}
                                        whileHover={{ scale: 1.05, y: -5 }}
                                        whileTap={{ scale: 0.95 }}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        viewport={{ once: true }}
                                    >
                                        <link.icon size={28} />
                                        <span className="text-sm font-semibold">{link.name}</span>
                                    </motion.a>
                                ))}
                            </div>
                        </div>

                        {/* Availability Card */}
                        <div className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-3xl shadow-xl p-8 border border-blue-100 dark:border-gray-700">
                            <div className="flex items-center gap-3 mb-4">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Available for Work</h3>
                            </div>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                                I'm currently available for freelance projects and full-time opportunities.
                            </p>
                            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-green-600" />
                                    <span>Full-stack Development</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-green-600" />
                                    <span>API Development</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle size={16} className="text-green-600" />
                                    <span>Technical Consulting</span>
                                </li>
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default Contact
