import React from 'react'


export default function CardCategory({ name, icon}) {
  return (
    <div className=' w-32 h-[105px] bg-white flex flex-col justify-center items-center gap-3 text-primary-400 font-semibold hover:bg-primary-400 hover:text-moztaza-500 hover:cursor-pointer'>
         {icon}
         {name}
    </div>
  )
}
