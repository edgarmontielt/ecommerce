import React from 'react'
import ActionsButtons from './ActionsButtons'
import { motion } from 'framer-motion'

export default function CardProduct({ product }) {
     return (
          <>
               <motion.div className=' -translate-x-12'
                    animate={{ x: 10 }}
                    transition={{ ease: "easeOut", duration: 1.5 }}
               >
                    <img src={`${product.imgURL}`} alt="" className="w-[400px]" />
               </motion.div> 
               <div className=" h-full pt-12 ">
                    <h1 className=" font-semibold text-[24px] text-justify">{product.name}</h1>
                    <div className=" w-full h-[1px] bg-primary-100 my-10"></div>

                    <div className=" bg-moztaza-400 w-40 h-12 rounded flex justify-center items-center">
                         <p className=" text-white font-semibold text-lg">$ {product.price}</p>
                    </div>
                    <p className=" text-primary-400 py-14"><span className=" font-semibold">Description:</span> {product.description}</p>

                    <ActionsButtons />
               </div>
          </>
     )
}
