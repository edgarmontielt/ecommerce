import React from 'react'
import { motion } from 'framer-motion'

export default function Image() {
     return (
          <motion.div
               animate={{ x: 50 }}
               transition={{ ease: "easeOut", duration: 1.5 }}
          >
               <img src="/images/arduinoUNO.png" alt="" className='w-[350px] desktop:w-[550px] mt-20 desktop:ml-10' />
          </motion.div>
     )
}
