import React from 'react'
import ActionsButtons from './ActionsButtons'

export default function CardProduct({ product }) {
     return (
          <>
               <img src={`${product[0].attributes.image}`} alt="" className="w-[400px] h-[400px]" />
               <div className=" h-full pt-12 ">
                    <h1 className=" font-semibold text-[24px] text-justify">{product[0].attributes.name}</h1>
                    <div className=" w-full h-[1px] bg-primary-100 my-10"></div>

                    <div className=" bg-moztaza-400 w-40 h-12 rounded flex justify-center items-center">
                         <p className=" text-white font-semibold text-lg">$ {product[0].attributes.price}</p>
                    </div>
                    <p className=" text-primary-400 py-14"><span className=" font-semibold">Description:</span> {product[0].attributes.description}</p>
                    
                    <ActionsButtons />
               </div>
          </>
     )
}
