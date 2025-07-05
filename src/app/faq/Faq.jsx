import React from 'react'
import Header from '../../../Components/Header'
import Footer from '../../../Components/Footer'
import Herosection from '../../../Components/Herosection'
import Form from './Form'
import FaqAccordion from './Accordian'

function Faq() {
  return (
    <div>
        <Header/>
        <Herosection 
            head={"How can we help?"} 
            ptag1={"We have real people available 24x7, ready to find a solution to your problem."}
            buttondesc={"Types of Lockers"}
            videosrc={"/videos/locker.mp4"}
        />
        <FaqAccordion/>
        <Form/>
        <Footer/>
    </div>
  )
}

export default Faq