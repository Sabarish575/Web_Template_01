import React from 'react'
import UseCase from '../mobile/Usecase';
import {    ShieldCheck,
    QrCode,
    Wallet,
    Clock,
    MapPin,
    PhoneCall} from "lucide-react"

function CTA1() {

  const iconMap = {
    ShieldCheck,
    QrCode,
    Wallet,
    Clock,
    MapPin,
    PhoneCall
  };


  const advantages = [
    {
      title: 'Safe',
      description: 'Tamper-proof lockers under CCTV surveillance zones',
      icon: 'ShieldCheck'
    },
    {
      title: 'Simple Pricing',
      description: 'Flat rates of ₹20 / ₹30 with no hidden charges',
      icon: 'Wallet'
    },
    {
      title: 'Human Support',
      description: 'Call or WhatsApp our support team anytime for help',
      icon: 'PhoneCall'
    },
    {
        title:"Nearby Always",
        description:"Railway Stations,Temples,Mails",
        icon:"MapPin"
    }
  ];


  return (

    <section className='flex flex-col items-center justify-center w-full space-y-4'>

        <div className='text-4xl'>
            <h1>Why yatigo</h1>
        </div>

        <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>

            {advantages.map((element,index)=><UseCase key={index} Icon={iconMap[element.icon]} title={element.title} desc={element.description} />)}

        </div>

    </section>


  )
}

export default CTA1