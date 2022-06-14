import React, { useState } from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { Link } from 'react-router-dom'
import { postProducts } from '../../../api'

export default function ActionsButtons() {

     const [productsCart, setProductsCart ] = useState([])

     const addToCar = () => {
          postProducts("/carts?populate=*")
          .then(data => {
               console.log(data)
               setProductsCart(data.data.products)
          })
     }

     return (
          <section className=" flex gap-5">
               <Link onClick={addToCar} to={"/shopcar"} className=" bg-secondary_green-500 w-3/4 h-12 rounded-sm flex justify-center items-center hover:opacity-90 cursor-pointer">
                         <p className=" text-white font-semibold text-lg">GET NOW</p>
               </Link>
               <Link onClick={addToCar} to={"/shopcar"} className=" bg-secondary_green-300 w-1/4 h-12 rounded-sm flex justify-center items-center hover:opacity-90 cursor-pointer">
                    <AiOutlineShoppingCart className=" w-6 h-6 text-primary-400" />
               </Link>
          </section>
     )
}
