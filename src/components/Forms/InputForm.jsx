import React from 'react'

export default function InputForm({ type, name, placeholder }) {
     return (
          <div className=' border-b border-primary_variant-200 py-1 mb-8 tablet:mb-5 w-full'>
               <input
                    type={type}
                    className=' appearance-none bg-transparent border-none w-full text-primary_variant-400 mr-3 py-1 px-2 leading-tight focus:outline-none'
                    placeholder={placeholder}
                    name={name}
               />
          </div>
     )
}
