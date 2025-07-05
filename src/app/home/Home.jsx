import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import HeroSection from './HeroSection'
import CTA from './CTA'
import CTA1 from './CTA1'

function Home() {
  return (
    <div className='flex flex-col'>

        <Header/>
        <HeroSection/>
        <CTA/>
        <CTA1/>
        <Footer/>
        
    </div>
  )
}

export default Home