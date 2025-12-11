'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Expertise from '../components/Expertise'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'
import Footer from '../components/FooterNew'

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      <Hero />
      <Expertise />
      <Technologies />
      <Projects />
      <Certifications />
      <Contact />
      <Footer />
    </main>
  )
}