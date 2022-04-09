import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function ProductDescription() {
  return (
     <motion.div className='mt-20 -ml-48 flex flex-col items-center tablet:items-start tablet:w-1/2'
     animate={{ x: 100 }}
     transition={{ ease: "easeOut", duration: 1.5 }}
     >
      <div className='flex flex-col items-center tablet:items-start'>
        <h3 className=' text-xl text-primary-400'>New products</h3>
        <h1 className='text-5xl mt-8 font-semibold text-center tablet:text-left'>Arduino UNO</h1>
        <p className=' desktop:w-4/5 mt-10 text-primary-200 text-center tablet:text-left'>Arduino board is te best for begin with programming and electronic if is your first experience with electronic enviroment </p>
      </div>
      <Link to={"/auth/login"}>
        <div className=' w-48 mt-10 bg-moztaza-500 text-center p-[8px] rounded-sm font-semibold text-[13px] hover:bg-moztaza-400 text-white'>BUY</div>
      </Link>
    </motion.div>
  )
}
