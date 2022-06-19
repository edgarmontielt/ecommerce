import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { addToCart } from '../../../features/cart'

export default function ActionsButtons({ product: { _id } }) {
     const dispatch = useDispatch()
     const router = useNavigate()
     const addToCar = () => {
          dispatch(addToCart({ idProduct: _id }))
          router('/shopcar')
     }

     return (
          <section className=" flex gap-5">
               <Link to={"/shopcar"} className=" bg-secondary_green-500 w-3/4 h-12 rounded-sm flex justify-center items-center hover:opacity-90 cursor-pointer">
                    <p className=" text-white font-semibold text-lg">GET NOW</p>
               </Link>
               <button onClick={() => addToCar()} className=" bg-secondary_green-300 w-1/4 h-12 rounded-sm flex justify-center items-center hover:opacity-90 cursor-pointer">
                    <AiOutlineShoppingCart className=" w-6 h-6 text-primary-400" />
               </button>
          </section>
     )
}
