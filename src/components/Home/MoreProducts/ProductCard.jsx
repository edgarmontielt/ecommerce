import React from 'react'
import Price from '../SliderOfferts/Price'

export default function ProductCard({image, name, price}) {
  return (
     <div className=' w-72 h-96 bg-white rounded flex flex-col justify-center items-center relative hover:opacity-90 cursor-pointer hover:scale-105 transition duration-500 ease-in-ou'>
     <Price price={price} />
     <img src={`${image}`} alt="" />
      <p className=' text-center font-semibold text-primary-400 mt-2'>{name}</p>
     </div>
  )
}
