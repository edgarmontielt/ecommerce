import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"

export default function ActionsButtons() {
     return (
          <section className=" flex gap-5">
               <div className=" bg-secondary_green-500 w-3/4 h-12 rounded-sm flex justify-center items-center hover:opacity-90 cursor-pointer">
                    <p className=" text-white font-semibold text-lg">GET NOW</p>
               </div>
               <div className=" bg-secondary_green-300 w-1/4 h-12 rounded-sm flex justify-center items-center hover:opacity-90 cursor-pointer">
                    <AiOutlineShoppingCart className=" w-6 h-6 text-primary-400" />
               </div>
          </section>
     )
}
