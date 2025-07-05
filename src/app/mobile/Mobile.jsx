import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Herosection from '../../../Components/Herosection'
import CTA1 from './CTA1'

function Mobile() {
  return (
    <div className='flex flex-col'>
        <Header/>
        <Herosection 
            head={"We take your trust seriously"} 
            ptag1={"Affordable short-term storage rentals to keep your pockets light, and your phones safe."}
            buttondesc={"how to use"}
            videosrc={"/videos/locker.mp4"}
        />
        <CTA1/>
        <Footer/>
    </div>
  )
}

export default Mobile