import React from 'react'
import Image from './Banner/Image'
import ProductDescription from './Banner/ProductDescription'

export default function Banner() {
     return (
          <header className='px-20 mx-10 flex mt-0 tablet:mt-10 flex-wrap justify-center'>
               <ProductDescription />
               <Image />
          </header>
     )
}
