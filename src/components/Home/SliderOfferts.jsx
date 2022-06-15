import React from 'react'
import Product from './SliderOfferts/Product'


export default function Slider() {
  return (
    <section className=' mt-20'>
      <h1 className='max-w-screen-desktop ml-24 pt-2 tablet:mt-40 py-10 text-4xl font-semibold'>Offerts</h1>
      <ul className=' carrousel max-w-screen-desktop tablet:mx-20 mb-40 flex gap-8 p-5 overflow-scroll overflow-y-hidden'>
        <li><Product /></li>
        <li><Product /></li>
        <li><Product /></li>
        <li><Product /></li>
        <li><Product /></li>
      </ul>
    </section>
  )
}
