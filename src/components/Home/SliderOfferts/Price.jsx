import React from 'react'

export default function Price({ price }) {
  return (
    <aside className=' absolute right-0 top-0 bg-moztaza-400 py-2 px-10 text-primary-400 font-semibold rounded-bl-xl'>
       ${price}
    </aside>
  )
}
