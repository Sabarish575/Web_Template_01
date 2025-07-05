import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import HeroSection from './HeroSection'
import Brief from './Brief'
import Partner from './Partner'

function About() {
  return (
    <div>
        <Header/>
        <HeroSection/>
        <Brief/>
        <Partner/>
        <Footer/>
    </div>
  )
}

export default About