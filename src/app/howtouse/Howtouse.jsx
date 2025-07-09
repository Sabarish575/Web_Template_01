import React from 'react'
import HeroSection from '../product/HeroSection'
import Footer from '../../../Components/Footer'
import Header from '../../../Components/Header'
import StepsTouse from './StepsTouse'

function Howtouse() {
  return (
    <div className='flex flex-col space-y-6'>
        <Header/>
        <HeroSection/>
        <StepsTouse/>
        <Footer/>
    </div>
  )
}

export default Howtouse