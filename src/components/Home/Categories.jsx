import React from 'react'
import GridCategories from './Categories/GridCategories'

export default function Categories() {
     return (
          <section className='max-w-screen-[1500px] '>
               <h1 className='px-5 pt-2 tablet:mt-40 py-10 text-4xl font-semibold'>Categories</h1>
               <GridCategories />
          </section>
     )
}
