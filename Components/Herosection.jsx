"use client"
import React from 'react';
import Button from './Button';

import { motion } from 'framer-motion';

function Herosection({head,ptag1,buttondesc,videosrc,reverse=true}) {
  return (
    <section className={`w-full min-h-[500px] flex flex-col-reverse  items-center justify-between ${reverse?"md:flex-row":"md:flex-row-reverse"} md:justify-center px-6 py-12 gap-10 md:gap-0`}>
      
      {/* Text Content */}
      <div className="w-full md:w-1/2 flex flex-col space-y-6 text-center md:text-left items-center md:items-center">

        <motion.h1
            initial={{opacity:0,x:0}}
            animate={{opacity:1,x:5}}
            transition={{ease:"easeInOut",duration:"0.5"}}
            className="text-2xl text-center md:text-5xl font-extrabold leading-tight"
            
        >
            {head}
            
        </motion.h1>

        <p className="text-lg md:text-xl text-gray-700 max-w-md text-center">
         {ptag1}
        </p>

        <motion.div
          initial={{opacity:0,y:0}}
          animate={{opacity:1,y:20}}
          transition={{ease:"easeInOut",duration:"0.5"}}
        >
          <Button detail={buttondesc} />
        </motion.div>
      </div>

      {/* Video Content */}
      <div className="w-full md:w-1/2 flex justify-center items-center">
        <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
          <video autoPlay muted loop className="w-full h-auto object-cover">
            <source src={videosrc} type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
