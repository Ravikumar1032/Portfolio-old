import React from 'react'

import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Skills from '../components/Skills'
import Resume from '../components/Resume2'
import Projects from '../components/Projects'
import CertificateGallery from '../components/CertificateGallery'
import Footer from '../components/Footer'
import GetInTouch from '../components/GetInTouch'

export default function Home() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <About />
      <Skills/>
      <Resume />
      <Projects/>
      <CertificateGallery/>
      <GetInTouch />
      <Footer />
    </div>
  )
}
