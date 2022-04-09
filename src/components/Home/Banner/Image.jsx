import React from 'react'
import { motion } from 'framer-motion'

export default function Image() {
     return (
          <motion.div
               animate={{ x: 100 }}
               transition={{ ease: "easeOut", duration: 1.5 }}
          >
               <img src="/images/arduinoUNO.png" alt="" className='w-[350px] opacity-0 md:opacity-100 desktop:w-[550px] mt-0 md:mt-28 -translate-x-16 tablet:translate-x-5 desktop:mt-10 desktop:ml-10' />
          </motion.div>
     )
}
