import React from 'react'
import Image from './Banner/Image'
import ProductDescription from './Banner/ProductDescription'

export default function Banner() {
     return (
          <header className='px-20 flex mt-10 flex-wrap justify-center'>
               <ProductDescription />
               <Image />
          </header>
     )
}
