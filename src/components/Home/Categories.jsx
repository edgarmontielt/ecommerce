import React from 'react'
import GridCategories from './Categories/GridCategories'

export default function Categories() {
     return (
          <section>
               <h1 className='max-w-screen-desktop px-5 tablet:px-16 mx-auto pt-2 tablet:mt-40 py-10 text-4xl font-semibold'>Categories</h1>
               <GridCategories />
          </section>
     )
}
