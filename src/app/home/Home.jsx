import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import HeroSection from './HeroSection'
import CTA from './CTA'
import CTA1 from './CTA1'
import { Prices } from './Prices'
import Location from './Location'

function Home() {
  return (
    <div className='flex flex-col'>

        <Header/>
        <HeroSection/>
        <Prices/>
        <CTA/>
        <CTA1/>
        <Location/>
        <Footer/>
        
    </div>
  )
}

export default Home