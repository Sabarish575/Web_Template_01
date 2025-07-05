"use client"
import React from 'react'
import { motion } from 'framer-motion'

function HeroSection() {
  return (
    <section className='w-full h-[550px] flex flex-col space-y-4 items-center justify-center'>

        <motion.h1
        initial={{opacity:0,x:20}}
        animate={{opacity:1,x:0}}

        transition={{ease:"easeInOut",duration:"0.5"}}
        className='text-6xl text-center'
        >
            We make cities lighter
        </motion.h1>

        <p className='text-2xl max-w-2xl text-center'>
            Yatigo is building India's largest smart locker network-starting from TamilNadu to 20+ cities founded in 2014.
            BootStrapped & scaling fast.
        </p>

    </section>
  )
}

export default HeroSection