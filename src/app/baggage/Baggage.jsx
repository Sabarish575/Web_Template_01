import React from 'react'
import Header from '../../../Components/Header'
import Herosection from '../../../Components/Herosection'
import Footer from '../../../Components/Footer'
import StorageSize from './storage_locker'

function Baggage() {
  return (
    <div className='flex flex-col'>
        <Header/>
        <Herosection 
            head={"We take your trust seriously"} 
            ptag1={"Affordable short-term storage rentals to keep your pockets light, and your phones safe."}
            buttondesc={"how to use"}
            videosrc={"/videos/locker.mp4"}
        />
        <StorageSize/>
        <Footer/>
    </div>
  )
}

export default Baggage