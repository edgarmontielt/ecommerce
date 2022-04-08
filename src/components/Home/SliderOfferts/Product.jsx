import React from 'react'
import Price from './Price'

export default function Product() {
  return (
    <div className=' w-72 h-72 bg-white rounded flex justify-center items-center relative hover:opacity-90 cursor-pointer hover:scale-105 transition duration-500 ease-in-ou'>
      <Price price={"300"}/>
      <img src="/images/gripper.png" alt="" />
    </div>
  )
}
