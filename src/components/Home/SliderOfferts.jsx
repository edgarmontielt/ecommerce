import React from 'react'
import Product from './SliderOfferts/Product'

export default function Slider() {
  return (
    <>
      <h1 className='max-w-screen-desktop px-8 mx-auto pt-40 py-10 text-4xl font-semibold'>Offerts</h1>
      <section className=' max-w-screen-desktop px-8 mb-40 mx-auto overscroll-auto flex gap-5'>
        <Product />
        <Product />
        <Product />
        <Product />
      </section>
    </>
  )
}
